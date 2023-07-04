/*Importa el módulo express para crear la aplicación web.*/
import express from "express";
import cors from "cors";

/*Importa las rutas relacionadas con las categorías desde el archivo "./routes/categorias.routes.js".*/
import categoriaRoutes from "./routes/categorias.routes.js";

/*Importa las rutas relacionadas con las constructoras desde el archivo "./routes/constructoras.routes.js".*/
import constructoraRoutes from "./routes/constructoras.routes.js";

/*Importa las rutas relacionadas con los empleados desde el archivo "./routes/empleados.routes.js".*/
import empleadosRoutes from "./routes/empleados.routes.js";

/*Importa las rutas relacionadas con los productos desde el archivo "./routes/productos.routes.js".*/
import productosRoutes from "./routes/productos.routes.js";

/*Crea una instancia de la aplicación express.*/
const app = express();

/*Configura el puerto en el cual se ejecutará la aplicación.*/
app.set('port', 5000);
/* Uso del cors para aceder desde otros lados */

const confCors={
    methods:['GET','POST','PUT','DELETE']
}
app.use(cors(confCors));
/* Middleware */
app.use(express.json());

/*Middleware para manejar las rutas relacionadas con las categorías.
 * Las rutas se manejarán bajo la ruta base "/api/categorias".*/
app.use("/api/categorias", categoriaRoutes);

/*Middleware para manejar las rutas relacionadas con las constructoras.
 * Las rutas se manejarán bajo la ruta base "/api/constructoras".*/
app.use("/api/constructoras", constructoraRoutes);

/*Middleware para manejar las rutas relacionadas con los empleados.
 * Las rutas se manejarán bajo la ruta base "/api/empleados".*/
app.use("/api/empleados", empleadosRoutes);

/*Middleware para manejar las rutas relacionadas con los productos.
 * Las rutas se manejarán bajo la ruta base "/api/productos".*/
app.use("/api/productos", productosRoutes);

/*Exporta la aplicación express por defecto.*/
export default app;
