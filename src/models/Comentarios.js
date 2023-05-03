// Importar el objeto `DataTypes` y la instancia de Sequelize `sequelize`

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

// Definir el modelo para la tabla de "Aprendiz"
//tabla e aprendiz
export const Aprendiz = sequelize.define(
  "aprendices",
  {
    numero_ficha: {
      primaryKey: true,
      type: DataTypes.STRING
    }
  },
);
///tabla comentarios
export const Comentario = sequelize.define(
  "comentario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    texto: {
      type: DataTypes.TEXT,
    }

  }, {
  timestamps: false // Deshabilita la creación automática de createdAt y updatedAt
});




//relacion de uno a muchos aprendiz a comentarios
// Aprendiz.hasMany(Comentario, { foreignKey: 'aprendiz-cometarioId' });
// Comentario.belongsTo(Aprendiz, { foreignKey: 'aprendiz-cometarioId' });
