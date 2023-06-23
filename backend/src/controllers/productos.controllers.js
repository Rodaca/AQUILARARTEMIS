import getConnection from "../db/database.js";
const  getProductos = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT p.id_producto, p.nombre_producto, p.precio_x_dia, p.stock_producto, c.nombre_categoria FROM productos p JOIN categorias c ON p.categoria_producto = c.id_categoria;");
    console.log(result);
    res.json(result);
}
export const methodsHTTP ={
    getProductos
}