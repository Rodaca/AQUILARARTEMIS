/**
 * Importa el módulo "promise-mysql" para la conexión y manipulación de bases de datos MySQL.
 */
import mysql from "promise-mysql";

/**
 * Importa el objeto de configuración desde el archivo "./../config.js".
 */
import config from "./../config.js";

/**
 * Crea una conexión a la base de datos MySQL utilizando la configuración especificada en el objeto "config".
 */
const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});

/*Función que devuelve la conexión a la base de datos MySQL.*/
const getConnection = () => {
  return connection;
};

/**
 * Exporta la función "getConnection" como la función principal del módulo.
 */
export default getConnection;
