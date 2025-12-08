import express, { type Request, type Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import cors from "cors";
import {
  usersTable,
  type InsertAnime,
  animesTable,
  type InsertMusic,
  musicTable,
  foodsTable,
  gamesTable,
} from "./db/schema.ts";
import { fetchDb } from "./db/index.ts";

const app = express();
const port = process.env.PORT;
const db = fetchDb();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Example API documentation with swagger-jsdoc",
    },
  },
  // Tell swagger-jsdoc where to find route annotations
  apis: ["./src/**/*.ts"], // adjust path to match your source files
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
app.get("/users", cors(), async (req: Request, res: Response) => {
  const users = await db?.select().from(usersTable);
  res.status(200).send(users);
});

/**
 * @openapi
 * /animes:
 *   get:
 *     summary: get animes
 *     responses:
 *       200:
 *         description: animes added
 */
app.get("/animes", cors(), async (req: Request, res: Response) => {
  const animes = await db?.select().from(animesTable);
  res.status(200).send(animes);
});

/**
 * @openapi
 * /musics:
 *   get:
 *     summary: get musics
 *     responses:
 *       200:
 *         description: musics
 */
app.get("/musics", cors(), async (req: Request, res: Response) => {
  const musics = await db?.select().from(musicTable);
  res.status(200).send(musics);
});

/**
 * @openapi
 * /foods:
 *   get:
 *     summary: get foods
 *     responses:
 *       200:
 *         description: foods
 */
app.get("/foods", cors(), async (req: Request, res: Response) => {
  const foods = await db?.select().from(foodsTable);
  res.status(200).send(foods);
});

/**
 * @openapi
 * /games:
 *   get:
 *     summary: get games
 *     responses:
 *       200:
 *         description: games
 */
app.get("/games", cors(), async (req: Request, res: Response) => {
  const games = await db?.select().from(gamesTable);
  res.status(200).send(games);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
