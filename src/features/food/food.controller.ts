import { type Request, type Response } from "express";
import * as foodService from "./food.service.ts";

export const getFoods = async (req: Request, res: Response) => {
  try {
    res.status(200).send(await foodService.getFoods());
  } catch (error) {
    res.status(500).send("foods not fetched");
  }
};
