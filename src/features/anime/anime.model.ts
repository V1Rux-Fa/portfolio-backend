import { animesTable } from "../../db/schema.ts";
import { db } from "../../../server.ts";

export const getAnimes = () => {
  return db?.select().from(animesTable);
};
