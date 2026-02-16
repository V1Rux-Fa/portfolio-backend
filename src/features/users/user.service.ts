import { type InsertUser } from "../../db/schema.ts";
import * as userModel from "./user.model.ts";

export const createUser = async (user: InsertUser) => {
  //check if other user with this email exists
  userModel.createUser(user);
};
