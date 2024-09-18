import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validate } from "../utils/validators.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
//post request
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userSignup);
export default userRoutes;