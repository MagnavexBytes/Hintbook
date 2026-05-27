import { db } from '../database/db'
import { works } from '../database/schema'
import { desc } from 'drizzle-orm'

export default defineEventHandler(async () => {
  return await db.select().from(works).orderBy(desc(works.id))
})