import { musicTable } from "../../db/schema.ts";
import { db } from "../../../server.ts";

export const getMusics = () => {
  return db?.select().from(musicTable);
};
