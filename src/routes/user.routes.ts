import { Router } from "express";
import { createUser } from "../controllers/user.controller";
const userRouter = Router();

userRouter.post("/signup", createUser);

export default userRouter;
