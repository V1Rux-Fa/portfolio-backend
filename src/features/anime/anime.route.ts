import Router from "express";
import * as animeController from "./anime.controller.ts";

const animeRouter = Router();

/**
 * @openapi
 * /animes:
 *   get:
 *     summary: get animes
 *     responses:
 *       200:
 *         description: animes added
 */
animeRouter.get("/", animeController.getAnimes);

export default animeRouter;
