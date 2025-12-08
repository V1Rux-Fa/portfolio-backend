import { integer, pgTable, varchar, boolean, date } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }),
});

export const animesTable = pgTable("animes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  main_character: varchar({ length: 255 }).notNull(),
  watched: boolean().notNull(),
  releaseDate: date().notNull(),
  image: varchar({ length: 255 }).notNull(),
});

export const foodsTable = pgTable("foods", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  origin: varchar({ length: 255 }).notNull(),
  image: varchar({ length: 255 }).notNull(),
});

export const gamesTable = pgTable("games", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  hours: integer().notNull(),
  image: varchar({ length: 255 }).notNull(),
});

export const musicTable = pgTable("music", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  band: varchar({ length: 255 }).notNull(),
  image: varchar({ length: 255 }).notNull(),
});

export type SelectUser = typeof usersTable.$inferSelect;
export type InsertUser = typeof usersTable.$inferInsert;

export type SelectAnime = typeof animesTable.$inferSelect;
export type InsertAnime = typeof animesTable.$inferInsert;

export type InsertMusic = typeof musicTable.$inferInsert;
export type SelectMusic = typeof musicTable.$inferSelect;

export type InsertGame = typeof gamesTable.$inferInsert;
export type SelectGame = typeof gamesTable.$inferSelect;

export type InsertFood = typeof foodsTable.$inferInsert;
export type SelectFood = typeof foodsTable.$inferSelect;
