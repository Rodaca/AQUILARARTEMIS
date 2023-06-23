/*Importa la función config del módulo dotenv para cargar las variables de entorno desde el archivo .env.*/
import { config } from "dotenv";

/*Carga las variables de entorno desde el archivo .env.*/
config();

/*Exporta un objeto con la configuración de conexión a la base de datos.*/
export default {
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
};

