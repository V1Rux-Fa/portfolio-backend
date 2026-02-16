import { type Response, type Request } from "express";
import * as animeService from "./anime.service.ts";

export const getAnimes = async (req: Request, res: Response) => {
  try {
    res.status(200).send(await animeService.getAnimes());
  } catch (error) {
    res.status(500);
  }
};
