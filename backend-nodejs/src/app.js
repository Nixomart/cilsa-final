import express from "express";
import cors from "cors";
import router from "./routes/task.routes.js";
const app = express();
// Import routes
/* import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js"; */
// Middlewares
app.use(cors())
app.use(express.json());
app.use("/api", router);

// Routes
/* app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes); */
export default app;