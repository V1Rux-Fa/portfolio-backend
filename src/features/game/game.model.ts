import { gamesTable } from "../../db/schema.ts";
import { db } from "../../../server.ts";

export const getGames = () => {
  return db?.select().from(gamesTable);
};
