import { Router } from "express";
import validate from "../middlewares/validate.middleware.js";
import signupSchema from "../schemas/user/signup.schema.js";
import { signup } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", validate(signupSchema), signup);

export default router;
