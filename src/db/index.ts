import { drizzle } from "drizzle-orm/node-postgres";

export const fetchDb = () => {
  try {
    const db = drizzle(process.env.DATABASE_URL!);
    return db;
  } catch (e) {
    console.log("Error on fetching database!");
  }
};
