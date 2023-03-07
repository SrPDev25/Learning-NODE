const { readFile } = require("fs");


function getText(pathFile){
    new Promise((resolve, reject) => {
        readFile("../data/first.txt", "utf-8", (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        });
      });
}