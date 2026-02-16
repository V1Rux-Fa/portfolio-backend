import { usersTable, type InsertUser } from "../../db/schema.ts";
import { db } from "../../../server.ts";

export const createUser = (user: InsertUser) => {
  db?.insert(usersTable).values(user);
};
