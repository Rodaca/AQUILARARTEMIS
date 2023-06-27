import { Router } from "express";
/* se importa router */
import { methodsHTTP as constructoraController } from "../controllers/constructoras.controllers.js";
const router = Router();

/* 3 se crea la respuesta  */
router.get("/", constructoraController.getConstructoras);
router.post("/", constructoraController.addConstructoras);
/*  se esporta por defaul */
export default router;