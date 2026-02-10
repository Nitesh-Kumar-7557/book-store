import { pgTable, varchar, text } from "drizzle-orm/pg-core";

export const booksTable = pgTable("books", {
  name: varchar({ length: 255 }).primaryKey(),
  description: text(),
  author: varchar({ length: 255 }),
});
