import express from 'express'
const app = express()
//Middleware
/*Los middleware son de de alguna manera los conectores
 * se encargan de
 * la recepcion de datos
 * la expedicion de datos
 * y es el que manda esa informacion a controladores para que se maneje
 */
/**Este middleware se encarga de recibir el body
 * e indicar a la app que la informacion recibida se use como un json
 */
app.use(express.json()) 

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('Perdi el tren :(')
    res.send('pero que miras, bobo')
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})