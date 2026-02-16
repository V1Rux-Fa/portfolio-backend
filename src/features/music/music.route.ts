import Router from "express";
import * as musicController from "./music.controller.ts";

const musicRouter = Router();

/**
 * @openapi
 * /musics:
 *   get:
 *     summary: get musics
 *     responses:
 *       200:
 *         description: musics
 */

musicRouter.get("/", musicController.getMusics);

export default musicRouter;
