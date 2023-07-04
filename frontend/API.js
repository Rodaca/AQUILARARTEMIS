const url = "http://localhost:5000/api/";


export const obtainCategories = async () => {
        try {
            const dato = await fetch(`${url}categorias/`);
            const datoJson = dato.json();
            return datoJson;
        } catch (error) {
            console.log(error);
        }
};


export const nuevaCategoria = async (registar) => {
    try {
        await fetch(`${url}categorias/`,{
            method:"POST",
            body:JSON.stringify(registar),
            headers:{'Content-Type':'application/json'}
        })
        window.location.href="index.html"
    } catch (error) {
        console.log(error);
    }
};



export const deleteCategory = async (id) => {
    try {
        await fetch(`${url}categorias/${id}`,{
            method:"DELETE"
        })
    } catch (error) {
        console.log(error);
    }
};



export const obtenerCategory = async (id) => {
    try {
        const response = await fetch(`${url}categorias/${id}`);
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
      }
};



export const editarCategory = async (category) => {
    try {
        const response = await fetch(`${url}categorias`,{
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });
      } 
    catch (error) {
        console.log(error);
      }
};





/* 


  export async function updateCamper(data) {
     */