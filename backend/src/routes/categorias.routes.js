/**
 * Importa el módulo Router de Express para definir las rutas.
 */
import { Router } from "express";

/**
 * Importa el objeto methodsHTTP del controlador categoriaController desde el archivo "../controllers/categoria.controllers.js".
 */
import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/**
 * Crea una instancia de Router para definir las rutas relacionadas con las categorías.
 */
const router = Router();

/* Ruta GET para obtener todas las categorías. */
router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.addCategories);
router.get("/:id", categoriaController.getCategoria);
router.delete("/:id", categoriaController.deleteCategoria);
router.put("/:id", categoriaController.updateCategories);

/*Exporta por defecto el router, que contiene todas las rutas relacionadas con las categorías. */
export default router;
