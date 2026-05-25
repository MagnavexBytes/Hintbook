import { PutObjectCommand } from '@aws-sdk/client-s3'
import { db } from '../database/db'
import { works } from '../database/schema'

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event)
  if (!formData) {
    throw createError({ statusCode: 400, statusMessage: 'Данные формы пусты' })
  }

  // Извлечение полей из FormData
  const fileData = formData.find(item => item.name === 'file')
  const titleData = formData.find(item => item.name === 'title')

  if (!fileData || !fileData.filename || !titleData) {
    throw createError({ statusCode: 400, statusMessage: 'Отсутствует файл или название работы' })
  }

  const config = useRuntimeConfig()
  const s3 = useS3()

  // Создание уникального имени
  const uniqueFileName = `${Date.now()}-${fileData.filename}`

  // Загрузка в Yandex Object Storage
  await s3.send(new PutObjectCommand({
    Bucket: config.yandexBucketName,
    Key: uniqueFileName,
    Body: fileData.data,
    ContentType: fileData.type,
  }))

  const fileUrl = `https://yandexcloud.net{config.yandexBucketName}/${uniqueFileName}`

  // Сохранение метаданных в БД
  const title = titleData.data.toString('utf-8')
  
  const [newWork] = await db.insert(works).values({
    title: title,
    fileName: fileData.filename,
    fileUrl: fileUrl,
  }).returning()

  return { success: true, work: newWork }
})
