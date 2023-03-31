try {
  try {
    try {
      throw new Error("Ocorreu um erro aqui!");
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  } catch (ex) {
    console.log(ex);
    throw new Error(ex.message);
  }
} catch (error) {
  console.error(error);
}
