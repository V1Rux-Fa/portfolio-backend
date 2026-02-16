import Router from "express";

import * as foodController from "./food.controller.ts";

const foodRouter = Router();

/**
 * @openapi
 * /foods:
 *   get:
 *     summary: get foods
 *     responses:
 *       200:
 *         description: foods
 */
foodRouter.get("/", foodController.getFoods);

export default foodRouter;
