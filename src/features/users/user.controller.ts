import { type Request, type Response } from "express";
import * as userService from "./user.service.ts";
import { type InsertUser } from "../../db/schema.ts";

export const createUser = async (req: Request<InsertUser>, res: Response) => {
  try {
    const addUser: InsertUser = req.body;
    await userService.createUser(addUser);
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    );
    res.status(201).send("User created");
  } catch (error) {
    res.status(500).send("User not created");
  }
};
