import { Router } from "express";
/* se importa router */
import { methodsHTTP as empleadoController } from "../controllers/empleados.controllers.js";
const router = Router();

/* 3 se crea la respuesta  */
router.get("/", empleadoController.getEmpleados);
router.post("/", empleadoController.addEmpleados);
router.get("/:id", empleadoController.getEmpleado);
router.delete("/:id", empleadoController.deleteEmpleado);
router.put("/:id", empleadoController.updateEmpleados);
/*  se esporta por defaul */
export default router;