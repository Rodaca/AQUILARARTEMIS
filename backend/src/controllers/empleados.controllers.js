
import getConnection from "./../db/database.js";
const  getEmpleados = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM empleados");
    console.log(result);
    res.json(result);
}
export const methodsHTTP ={
    getEmpleados
}