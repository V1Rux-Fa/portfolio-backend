import { type Request, type Response } from "express";

import * as musicService from "./music.service.ts";

export const getMusics = async (req: Request, res: Response) => {
  try {
    res.status(200).send(await musicService.getMusics());
  } catch (error) {
    console.log(error);
    res.status(500).send("Musics not found");
  }
};
