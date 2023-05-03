import express from "express";
import morgan from "morgan";

//importamos los metodos HTTP de routes
import comentarioRoutes from "./routes/comentarios.Routes.js";

const app = express();

//extraemos los middlewares
app.use(express.json());
app.use(morgan("dev"));

//Routes
// app.use("/api/comentario",comentarioRoutes);
app.use("/", comentarioRoutes);

export default app;
