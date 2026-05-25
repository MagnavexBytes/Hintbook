import { S3Client } from '@aws-sdk/client-s3'

export const useS3 = () => {
  const config = useRuntimeConfig()

  return new S3Client({
    region: config.yandexRegion,
    endpoint: 'https://yandexcloud.net',
    credentials: {
      accessKeyId: config.yandexAccessKeyId,
      secretAccessKey: config.yandexSecretAccessKey,
    },
  })
}
