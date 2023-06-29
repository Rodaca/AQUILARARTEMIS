import getConnection from "./../db/database.js";
const  getConstructoras = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM constructoras");
    console.log(result);
    res.json(result);
}
const addConstructoras= async (req,res) =>{
    try {
        const {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} =req.body;
        const constructoras= {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} 
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO constructoras SET ?",constructoras)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
const  getConstructora = async (req,res) =>{
    const {id}= req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM constructoras WHERE id_constructora=?",id);
    console.log(result);
    res.json(result);
}
const  deleteConstructora = async (req,res) =>{
    const {id}= req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM constructoras WHERE id_constructora=?",id);
    console.log(result);
    res.json(result);
}
const updateConstructoras= async (req,res) =>{
    try {
        const {id}= req.params;
        const {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} =req.body;
        const constructoras= {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} 
        const connection = await getConnection();
        const result = await connection.query("UPDATE constructoras SET ? WHERE id_constructora=?",[constructoras,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const methodsHTTP ={
    getConstructoras,
    addConstructoras,
    getConstructora,
    deleteConstructora,
    updateConstructoras
}