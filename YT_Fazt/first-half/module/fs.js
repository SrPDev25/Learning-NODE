const fs = require("fs");

//Synchronous
/* //just the path, you have the buffer
const firstBuffer=fs.readFileSync('../data/first.txt')
//with 'utf-8', which refered the system characters system, can had the text
const firstReadable=fs.readFileSync('../data/first.txt','utf-8')

console.log(firstReadable)      

//If we write a file and didn't exist, we add it
//this line overwrite
fs.writeFileSync('../data/third.txt', 'this is a new file')

const text= "text "

fs.writeFileSync('../data/fourth.txt',text,{
    flag:'a' //tag that means, not overwrite
}) */




//Asynchronous
//Names at the function no matters
fs.readFile("../data/first.txt", (error, dataa) => {
  if (error) console.log(error);
  else console.log(dataa.toString());

  fs.readFile("../data/first.txt", (error, dataa) => {
    if (error) console.log(error);
    else console.log(dataa.toString());

    fs.readFile("../data/first.txt", (error, dataa) => {
      if (error) console.log(error);
      else console.log(dataa.toString());

      fs.readFile("../data/first.txt", (error, dataa) => {
        if (error) console.log(error);
        else console.log(dataa.toString());

        fs.readFile("../data/first.txt", (error, dataa) => {
          if (error) console.log(error);
          else console.log(dataa.toString());
        });
      });
    });
  });
});//Callback hell
