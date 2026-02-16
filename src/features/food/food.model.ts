import { foodsTable } from "../../db/schema.ts";
import { db } from "../../../server.ts";

export const getFoods = () => {
  return db?.select().from(foodsTable);
};
