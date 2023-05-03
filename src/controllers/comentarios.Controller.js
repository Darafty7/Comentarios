// Importar el modelo de Sequelize y la instancia de Sequelize
import { Comentario } from "../models/Comentarios.js";

// Definir los métodos del controlador

// Controlador para obtener todos los comentarios
export async function obtenerComentarios(req, res) {
  try {
    // Obtener todos los comentarios de la base de datos
    const comentarios = await Comentario.findAll(
      {
        atributes: ["id", "texto",],
        order: [["id", "ASC"]],
      });
    res.json(comentarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los comentarios" });
  }
}

//controlador para obtener comentarios por id
export async function obtenerComentario(req, res) {
  const { id } = req.params;
  try {
    const comentario = await Comentario.findOne(
      {
        where: {
          id,
        }
      }
    );
    res.json(comentario);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener el comentario" });
  }
}

// Método para crear un comentario
export async function crearComentarios(req, res) {
  const { texto } = req.body;
  try {
    const comentario = await Comentario.create({ texto }, {
      fields: ["texto"]
    });
    // return res.status(200).json({ message:'Comentario creado correctamente'})
    return res.json(comentario)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el comentario" });
  }
}

// Controlador para eliminar un comentario forma 1
export async function eliminarComentario(req, res) {
  const { id } = req.params;
  try {
    // Buscar el comentario en la base de datos y eliminarlo
    const comentario = await Comentario.destroy({
      where: { id },
    });
    // Si el comentario no existe, enviar una respuesta 202
    if (!comentario) {
      return res.status(202).json({ message: "Comentario no encontrado" });
    }

    return res.status(200).json({ message: 'Comentario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el comentario" });
  }
}