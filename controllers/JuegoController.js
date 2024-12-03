import Juego from "../Model/Juego.js";
import JuegoService from "../service/JuegoService.js";

class JuegoController {
  juego = new JuegoService();

  registrarJuego = async (req, res) => {
    try {
      const { nombre, categoria, precio, cantidad } = req.body;
        const juegoNuevo = await this.juego.registrarJuegoService(nombre, categoria, precio, cantidad);
      res.status(200).send(juegoNuevo);
    } catch (error) {
      res.status(422).send("Los datos ingresados no son válidos");
    }
  };
  comprar = async (req, res) => {
    try {
      const {id, cantidad} = req.body
        const venta = await this.juego.registrarVentaService(id, cantidad);
      res.status(200).send(venta);
    } catch (error) {
      res.status(422).send(error);
    }
  };

  listarInventario = async (req, res) => {
    try {
      const inventario = await this.juego.listarInventarioService();
      res.status(200).send(inventario);
    } catch (error) {
      res.status(422).send("Inventario Vacio");
    }
  };

  totalUnidadesVendidas = async (req, res) => {
    try {
         const unidadesVendidas = await this.juego.listarUnidadesVendidasService();
      res.status(200).json({ unidadesVendidas }); 
    } catch (error) {
      res.status(422).send("No hay ventas registradas");
    }
};


  unidadesVendidasPorCategoria = async (req, res) => {
    try {
        const unidadesVendidasPorCategoria = await this.juego.listarUnidadesVendidasPorCategoriaService();
      res.status(200).json({unidadesVendidas: unidadesVendidasPorCategoria});
    } catch (error) {
      res.status(422).send("No hay ventas registradas");
    }
  };
}

export default JuegoController;
