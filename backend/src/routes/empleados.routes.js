import { Router } from "express";
/* se importa router */
import { methodsHTTP as empleadoController } from "../controllers/empleados.controllers.js";
const router = Router();

/* 3 se crea la respuesta  */
router.get("/", empleadoController.getEmpleados)
router.post("/", empleadoController.addEmpleados);
/*  se esporta por defaul */
export default router;