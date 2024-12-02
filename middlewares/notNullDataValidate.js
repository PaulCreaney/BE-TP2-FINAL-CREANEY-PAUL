export const notNullDataValidate = async (req, res, next) => {
  try {
    const { palabra } = req.body;
    if (!palabra) throw error;
    next();
  } catch (error) {
    res.status(422).send("No valida no puede ser null / ingrese una palabra");
  }
};
