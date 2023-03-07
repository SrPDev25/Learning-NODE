const http=require('http')

http.createServer((request,response)=> {
    //Request is the data which user request
    console.log(request.url)
    //response, is the data, which the server share
    response.end(request.url)//write in the body
}).listen (3000)//port

console.log('Servidor escuchando en el puerto 3000')