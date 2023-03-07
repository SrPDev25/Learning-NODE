
//      Prioridades de node
// console.log('first')
// /*Al ser un timeout 0, lo deja 
// para despues de las tareas que se 
// ejecutan directamente */
// setTimeout(()=>{
//     console.log('second')
// })  
// console.log('eco')

const http=require('http')

const server =http.createServer((req,res)=>{
    if(req.url ==='/'){
        return res.end('welcome to night city')
    }
    if(req.url ==='/about'){
        return res.end('about')
    }
    else{
        return res.end('error 404')
    }
})

server.listen(3000)
console.log('server encendido')

