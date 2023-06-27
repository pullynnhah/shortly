import { Router } from "express";
import validate from "../middlewares/validate.middleware.js";
import signupSchema from "../schemas/user/signup.schema.js";
import { signup, signin } from "../controllers/auth.controller.js";
import signinSchema from "../schemas/user/signin.schema.js";

const router = Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/signin", validate(signinSchema), signin);

export default router;
