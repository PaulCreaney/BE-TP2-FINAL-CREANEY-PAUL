import Juego from "../Model/Juego.js";

class JuegoService {
  constructor() {
    this.juego = new Juego(); 
  }

  registrarJuegoService = async (nombre, categoria, precio, cantidad) => {
    const nuevoJuego = await this.juego.registrarJuego(nombre, categoria, precio, cantidad);
    return nuevoJuego;
  };

  registrarVentaService = async (id, cantidad) => {
    const resultadoVenta = await this.juego.registrarVenta(id, cantidad);
    return resultadoVenta;
  };

  listarInventarioService = async () => {
    const inventario = await this.juego.listarInventario();
    return inventario;
  };

  listarUnidadesVendidasService = async () => {
    const unidadesVendidas = await this.juego.listarUnidadesVendidas();
    return unidadesVendidas;
  };

  listarUnidadesVendidasPorCategoriaService = async () => {
    const unidadesVendidasPorCategoria = await this.juego.listarUnidadesVendidasPorCategoria();
    return unidadesVendidasPorCategoria;
  };
}

export default JuegoService;
