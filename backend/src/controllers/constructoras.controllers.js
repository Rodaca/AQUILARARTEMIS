import getConnection from "./../db/database.js";
const  getConstructoras = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM constructoras");
    console.log(result);
    res.json(result);
}
const addConstructoras= async (req,res) =>{
    try {
        const constructoras= {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} =req.body;
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO constructoras SET ?",constructoras)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const methodsHTTP ={
    getConstructoras,
    addConstructoras
}