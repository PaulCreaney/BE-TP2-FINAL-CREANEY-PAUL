class Juego {

  constructor(){
    this.juegos = []; 
    this.juegoId = 1; 
    this.unidadesVendidas = 0;
    this.unidadesVendidasPorCategoria = { estrategia: 0, rol: 0, cartas: 0, familiar: 0 }; 
  }
  
  
  registrarJuego = async (nombre, categoria, precio, cantidad) => {
    const id = this.juegoId++; 
    const juego = { id, nombre, categoria, precio, cantidad };
    this.juegos.push(juego); 
    return juego;
  };


  listarInventario = async () => {
    return this.juegos; 
  };

  registrarVenta = async (id, cantidadVendida) => {
    const juego = this.juegos.find((juego) => juego.id === id); 
    if (!juego) {
      return { error: "No se pudo encontrar el juego" };  
    }
    if (juego.cantidad < cantidadVendida) { 
      return { error: "No hay stock " };
    }
    
    juego.cantidad -= cantidadVendida; 
    this.unidadesVendidas += cantidadVendida;  
  
    this.unidadesVendidasPorCategoria[juego.categoria] += cantidadVendida;  
    return { mensaje: "Venta registrada con éxito" };  
  };


  listarUnidadesVendidas = async () => {
    return this.unidadesVendidas; 
  };


  listarUnidadesVendidasPorCategoria = async () => {
    return this.unidadesVendidasPorCategoria; 
  };

};

export default Juego;
