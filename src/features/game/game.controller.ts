import { type Request, type Response } from "express";
import * as gameService from "./game.service.ts";

export const getGames = async (req: Request, res: Response) => {
  try {
    res.status(200).send(await gameService.getGames());
  } catch (error) {
    res.status(500).send("games not fetched");
  }
};
