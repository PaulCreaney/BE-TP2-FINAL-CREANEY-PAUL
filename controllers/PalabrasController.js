import PalabraService from "../service/PalabraService.js";
class PalabrasController {
  palabra = new PalabraService();

  createPalabra = async (req, res) => {
    try {
      const { palabra } = req.body;
      // if (!palabra) throw error;
      const newPalabra = await this.palabra.createPalabraService(palabra);
      res.status(200).send(newPalabra);
    } catch (error) {
      res.status(422).send("no valida");
    }
  };

  getPalabras = async (req, res) => {
    try {
      const palabras = await this.palabra.getPalabrasService();
      res.status(200).send(palabras);
    } catch (error) {
      res.status(422).send("no valida");
    }
  };

  deletePalabra = async (req, res) => {
    try {
      const { palabra } = req.params;
      console.log(palabra)
      const deletePalabra = await this.palabra.deletePalabra(palabra);
      // if (!deletePalabra) throw error
      res.status(200).send("Palabra eliminada correctamente");
    } catch (error) {
      res.status(422).send("Palabra no válida");
    }
  };

  getCatidadPalabras = async (req, res) => {
    try {
      const { cantidad } = req.params;
      if (!cantidad) throw error;
      const data = await this.palabra.getCatidadPalabrasService(cantidad);
      res.status(200).send(data);
    } catch (error) {
      res.status(422).send("Cantidad no válida");
    }
  };
}

export default PalabrasController;
