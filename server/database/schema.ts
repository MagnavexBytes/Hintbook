import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const works = pgTable('works', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  fileName: text('file_name').notNull(),
  fileUrl: text('file_url').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
})
