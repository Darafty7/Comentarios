//importaciones
import App from './App.js'
import { sequelize } from './database/database.js'


async function main() {
  try {
    await sequelize.sync({force: false});
    console.log('El puerto esta corriendo en el puerto http://localhost/3000')
    App.listen(3000)
  } catch (error) {
    console.error('Error en la conexion a la base de datos: ' + error);
  }
}
main();