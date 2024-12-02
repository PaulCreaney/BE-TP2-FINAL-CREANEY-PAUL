import Palabra from "../Model/Palabra.js";
import { palabraValida } from "../utils/utils.js";

class PalabraService {
  palabra = new Palabra();
  createPalabraService = async (palabra) => {
    try {
      const validate = palabraValida(palabra);
      if (!validate) throw error;
      const newPalabra = await this.palabra.create(palabra);
      return newPalabra;
    } catch (error) {
      throw error;
    }
  };
  getPalabrasService = async (req, res) => {
    const palabras = await this.palabra.getAll();
    return palabras;
  };

  getCatidadPalabrasService = async (cantidad) => {
    try {
      
      const newPalabra = await fetch(
        `https://texto.deno.dev/palabras?cantidad=${cantidad}`
      );
      if (!newPalabra) throw new error("No se encontraron palabras nuevas");

      const data = await newPalabra.json();
      console.log(data)
      await this.palabra.createPalabras (data.palabras)
      
      return data;
    } catch (error) {
      throw error;
    }
  };

  deletePalabra = async (palabra) => {
    try {
      console.log(palabra)
      const deletePalabra = await this.palabra.delete(palabra);
      // if (!deletePalabra) throw error
    } catch (error) {
      throw error;
    }
  };
}

export default PalabraService;
