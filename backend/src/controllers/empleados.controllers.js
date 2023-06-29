
import getConnection from "./../db/database.js";
const  getEmpleados = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM empleados");
    console.log(result);
    res.json(result);
}
const addEmpleados  = async (req, res) => {
    try {
      const {nombre_empleado,email_empleado,celular_empleado,password_empleado}=req.body;
      const empleados={nombre_empleado,email_empleado,celular_empleado,password_empleado};
      const connection = await getConnection();
      const result =await connection.query("INSERT INTO empleados SET ?",empleados)
      res.json(result)
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
}
const  getEmpleado = async (req,res) =>{
  const {id}=req.params;
  const connection = await getConnection();
  const result = await connection.query("SELECT * FROM empleados WHERE id_empleado=?",id);
  console.log(result);
  res.json(result);
}
const  deleteEmpleado = async (req,res) =>{
  const {id}=req.params;
  const connection = await getConnection();
  const result = await connection.query("DELETE FROM empleados WHERE id_empleado=?",id);
  console.log(result);
  res.json(result);
}
const updateEmpleados  = async (req, res) => {
  try {
    const {id}=req.params;
    const {nombre_empleado,email_empleado,celular_empleado,password_empleado}=req.body;
    const empleados={nombre_empleado,email_empleado,celular_empleado,password_empleado};
    const connection = await getConnection();
    const result =await connection.query("UPDATE empleados SET ? WHERE id_empleado=?",[empleados,id])
    res.json(result)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
export const methodsHTTP ={
    getEmpleados,
    addEmpleados,
    getEmpleado,
    deleteEmpleado,
    updateEmpleados
}