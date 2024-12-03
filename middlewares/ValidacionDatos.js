export const ValidacionDatos = async (req, res, next) => {
  try {
    const { nombre, categoria, precio, cantidad } = req.body;
    const categoriasValidas = ["estrategia", "rol", "cartas", "familiar"];

    if (
      !nombre || !categoriasValidas.includes(categoria) ||  precio <= 0 ||  cantidad <= 0 
    ) {
      throw new Error("Los datos ingresados no son válidos");
    }

    next();
  } catch (error) {
    res.status(422).send("Los datos ingresados no son válidos");
  }
};