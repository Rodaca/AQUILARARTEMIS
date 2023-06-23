import getConnection from "./../db/database.js";
const  getConstructoras = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM constructoras");
    console.log(result);
    res.json(result);
}

export const methodsHTTP ={
    getConstructoras
}