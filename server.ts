import app from "./src/index.ts";
import { fetchDb } from "./src/db/index.ts";

const port = process.env.PORT;
export const db = fetchDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
