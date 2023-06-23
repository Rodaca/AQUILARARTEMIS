/**
 * Importa la función getConnection desde el archivo "./../db/database.js".
 */
import getConnection from "./../db/database.js";
const getCategorias = async (req, res) => {
    // Obtiene una conexión a la base de datos utilizando la función getConnection.
    const connection = await getConnection();
    // Realiza una consulta a la base de datos para obtener todas las categorías.
    const result = await connection.query("SELECT * FROM categorias");
    // Imprime el resultado en la consola para fines de depuración.
    console.log(result);
    // Envía la respuesta JSON con las categorías al cliente.
    res.json(result);
};
/**
 * Objeto que contiene los métodos HTTP exportados.
 */
export const methodsHTTP = {
  getCategorias,
};
