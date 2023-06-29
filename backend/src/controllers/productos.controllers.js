import getConnection from "../db/database.js";
const  getProductos = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT p.id_producto, p.nombre_producto, p.precio_x_dia, p.stock_producto, c.nombre_categoria FROM productos p JOIN categorias c ON p.categoria_producto = c.id_categoria;");
    console.log(result);
    res.json(result);
}
const addProductos  = async (req, res) => {
    try {
      const {nombre_producto,precio_x_dia,stock_producto,categoria_producto}=req.body;
      const productos={nombre_producto,precio_x_dia,stock_producto,categoria_producto};
      const connection = await getConnection();
      const result =await connection.query("INSERT INTO productos SET ?",productos)
      res.json(result)
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
}
const  getProducto = async (req,res) =>{
  const {id}=req.params;
  const connection = await getConnection();
  const result = await connection.query("SELECT p.id_producto, p.nombre_producto, p.precio_x_dia, p.stock_producto, c.nombre_categoria FROM productos p JOIN categorias c ON p.categoria_producto = c.id_categoria WHERE id_categoria=?",id);
  console.log(result);
  res.json(result);
}
const  deleteProducto = async (req,res) =>{
  const {id}=req.params;
  const connection = await getConnection();
  const result = await connection.query("DELETE FROM productos WHERE id_producto=?",id);
  console.log(result);
  res.json(result);
}
const updateProductos  = async (req, res) => {
  try {
    const {id}=req.params;
    const {nombre_producto,precio_x_dia,stock_producto,categoria_producto}=req.body;
    const productos={nombre_producto,precio_x_dia,stock_producto,categoria_producto};
    const connection = await getConnection();
    const result =await connection.query("Update productos SET ? WHERE id_producto=?",[productos,id])
    res.json(result)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
export const methodsHTTP ={
    getProductos,
    addProductos,
    getProducto,
    deleteProducto,
    updateProductos
}