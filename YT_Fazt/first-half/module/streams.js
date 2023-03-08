const { writeFile } = require("fs/promises");

const createBigFile = async () => {
  writeFile("../data/big.txt", "heloworld");
  console.log("Archivo creado")
};

createBigFile();
