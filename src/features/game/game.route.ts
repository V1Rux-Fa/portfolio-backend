import { Router } from "express";
import { getGames } from "./game.controller.ts";

const gamesRouter = Router();

/**
 * @openapi
 * /games:
 *   get:
 *     summary: get games
 *     responses:
 *       200:
 *         description: games
 */
gamesRouter.get("/", getGames);

export default gamesRouter;
