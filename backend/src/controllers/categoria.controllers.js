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
const addCategories  = async (req, res) => {
  try {
    const {CategoriaNombre,Descripcion,Imagen}=req.body;
    const category={CategoriaNombre,Descripcion,Imagen};
    const connection = await getConnection();
    const result =await connection.query("INSERT INTO categorias SET ?",category)
    res.json(result)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const  getCategoria = async (req,res) =>{
  try {
    
    const {id}= req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM categorias WHERE id_categoria=?",id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
const  deleteCategoria = async (req,res) =>{
  try {
    
    const {id}= req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM categorias WHERE id_categoria=?",id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
const updateCategories  = async (req, res) => {
  try {
    const {id}= req.params;
    const {nombre_categoria,descripcion_categoria,img_categoria}=req.body;
    const category={nombre_categoria,descripcion_categoria,img_categoria};
    const connection = await getConnection();
    const result =await connection.query("UPDATE categorias SET ? WHERE id_categoria=?",[category,id])
    res.json(result)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
/**
 * Objeto que contiene los métodos HTTP exportados.
 */
export const methodsHTTP = {
  getCategorias,
  addCategories,
  getCategoria,
  deleteCategoria,
  updateCategories
};
