import {Router} from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";

const appRouter = Router();

appRouter.use("/user", userRoutes); // if we can request to /user, then we want the userRouter to ahndle those incoming requests
appRouter.use("/user", chatRoutes);
export default appRouter;