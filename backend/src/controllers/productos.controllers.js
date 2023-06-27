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
export const methodsHTTP ={
    getProductos,addProductos
}