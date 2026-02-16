import { Router } from "express";
import { createUser } from "./user.controller.ts";
const router = Router();

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Post user
 *
 *     requestBody:
 *       description: First name
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                $ref: "#/components/schemas/User"
 *     responses:
 *       201:
 *         description: User created
 */
router.post("/", createUser);

export default router;
