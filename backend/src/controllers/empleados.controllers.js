
import getConnection from "./../db/database.js";
const  getEmpleados = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM empleados");
    console.log(result);
    res.json(result);
}
const addEmpleados  = async (req, res) => {
    try {
      const {nombre_empleado,email_empleado,celular_empleado,password_empleados}=req.body;
      const empleados={nombre_empleado,email_empleado,celular_empleado,password_empleados};
      const connection = await getConnection();
      const result =await connection.query("INSERT INTO empleados SET ?",empleados)
      res.json(result)
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
export const methodsHTTP ={
    getEmpleados,addEmpleados
}