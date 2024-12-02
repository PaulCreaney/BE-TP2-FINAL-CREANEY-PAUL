class Palabra {
  palabras = [];
  create = async (palabra) => {
    this.palabras.push(palabra);
    return "ok";
  };

  getAll = async () => {
    return this.palabras.join(" ");
  };

  delete = async (palabra) => {
    console.log(palabra);
    console.log(this.palabras);
    const index = this.palabras.indexOf(palabra);
    if (index !== -1) {
      this.palabras.splice(index, 1);
      console.log(this.palabras);
    } else {
      throw new error("No se encontro la palabra");
    }
  };
  createPalabras = async (palabrasNuevas) => {
    try {
      this.palabras = palabrasNuevas;
    } catch (error) {
      throw error;
    }
  };
}

export default Palabra;
