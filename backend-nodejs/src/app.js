import express from "express";
import cors from "cors";
import router from "./routes/task.routes.js";
import routerUser from "./routes/user.routes.js";
const app = express();
app.use(cors())
app.use(express.json());
app.use("/api", router);
app.use("/api", routerUser);
export default app;