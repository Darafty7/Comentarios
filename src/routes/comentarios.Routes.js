// Importar el Router de Express y el controlador de comentarios
import { Router } from "express";
import { crearComentarios, eliminarComentario, obtenerComentario, obtenerComentarios } from "../controllers/comentarios.Controller.js";

// Crear un router para las rutas de comentarios
const router = Router();

// Definir las rutas para obtener y agregar comentarios
router.post("/comentario", crearComentarios);
router.delete("/comentario/:id", eliminarComentario);
router.get("/comentario", obtenerComentarios);
router.get("/comentario/:id", obtenerComentario);


// Exportar el router
export default router;
