import { Router } from "express";
import JuegoController from "../controllers/JuegoController.js";
import { ValidacionDatos } from "../middlewares/ValidacionDatos.js";


const routes = Router();

const juegoController = new JuegoController();


routes.get("/ventas/categoria", juegoController.unidadesVendidasPorCategoria);
routes.get("/inventario", juegoController.listarInventario);
routes.post("/cargarJuego",ValidacionDatos, juegoController.registrarJuego);
routes.get("/ventas", juegoController.totalUnidadesVendidas);
routes.post("/comprar", juegoController.comprar);


export default routes;
