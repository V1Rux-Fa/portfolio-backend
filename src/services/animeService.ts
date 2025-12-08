import { fetchDb } from "../db/index.ts";
import { animesTable } from "../db/schema.ts";

export default async function getAnimes() {
  try {
    const db = fetchDb();
    const animes = db?.select().from(animesTable);
    return animes;
  } catch (e) {
    console.log(e, "error");
    return { e };
  }
}
