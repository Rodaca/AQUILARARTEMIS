import {
    obtainCategories,
    nuevaCategoria,
    deleteCategory,
    editarCategory,
    obtenerCategory
} from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    cargarCategoria();
    cargaDatoUdate();
});
/* constantes  */
const tabla = document.querySelector('#categories');
/* LISTAR CATEGORIAS  - CRUD (R) */
async function cargarCategoria() {
    const datos = await obtainCategories();

    tabla.innerHTML = "";
    datos.forEach(element => {
        const { id_categoria, nombre_categoria, descripcion_categoria, img_categoria } = element;

        tabla.innerHTML += `
        <tr>
            <th scope="row">${id_categoria}</th>
            <td>${nombre_categoria}</td>
            <td>${descripcion_categoria}</td>
            <td>${img_categoria}</td>
            <td><a href="#" class="delete btn btn-danger" id="${id_categoria}">Eliminar</a></td>
            <td><a class="btn btn-warning edit" edit="${id_categoria}" data-bs-toggle="modal"
            data-bs-target="#updateCategory" data-bs-whatever="@getbootstrap">Editar</a></td>
            <td><a href="#" class=" btn btn-light" id="${id_categoria}">Detalles</a>
        </tr>
        `
    });
}
/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */
const formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', agregarCamper);
function agregarCamper(e) {
    const nombre_categoria = document.querySelector('#nombre_categoria').value
    const descripcion_categoria = document.querySelector('#descripcion_categoria').value
    const img_categoria = document.querySelector('#img_categoria').value
    const registro = {
        nombre_categoria,
        descripcion_categoria,
        img_categoria
    }
    console.log(registro);
    nuevaCategoria(registro);
    alert("Nuevo ingreso")
    location.reload();
}

/* ELIMINAR CATEGORIA  - CRUD (D) */

tabla.addEventListener('click', borrar);
function borrar(e) {
    if (e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('id');
        console.log(id);
        deleteCategory(id);
        location.reload();
    }

}
//EDITAR CATEGORIA - CRUD (U)

tabla.addEventListener('click', cargaDatoUdate);
async function cargaDatoUdate() {
    if (e.target.classList.contains('edit')){
        try {
            const id = e.target.getAttribute('id');
            const datos = await obtenerCategory(id);
            console.log(datos[0]);
            document.querySelector('#CategoriaNombre').value = datos[0].nombre_categoria;
            document.querySelector('#Descripcion').value = datos[0].descripcion_categoria;
            document.querySelector('#Imagen').value = datos[0].img_categoria;
    
    
        } catch (error) {
            console.log(error);
        }
    }
    
}