import { Router } from "express";
/* se importa router */
import { methodsHTTP as productoController } from "../controllers/productos.controllers.js";
const router = Router();

/* 3 se crea la respuesta  */
router.get("/", productoController.getProductos);
router.post("/", productoController.addProductos);
/*  se esporta por defaul */
export default router;