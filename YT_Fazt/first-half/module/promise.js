const { readFile } = require("fs/promises");
//Modulo para hacer promesas
const {promisify}=require('util')


// FOrma 1 de hacer la promesa
/* const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}; */

//Form 2 to make new Promise
const getText= promisify(readFile)



/* getText("../data/second.txt")
  .then(result => console.log(result))
  .then(() => "./data/first.txt")
  .then((result) => console.log(result))
  .catch((error) => {
    console.log(error);
    ()=>"../data/first.txt"
  })
  .then(result=>console.log(result)); */

async function read() {
  try {
    const result = await readFile("../data/first.txt","utf-8");
    console.log(result);
    const result2 = await readFile("../data/second.txt","utf-8");
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

read();
