//Index sinedo la principal direccion de la api
import express from 'express'

import diaryRouter from './routes/diaries'
import authRouter from './routes/auth/infraestructure/auth.router'

//Se crea instacia de experss
//entiendo instancia como el objeto que tiene las funciones nativas de la api
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

//El puerto del servidor al que va a estar escuchando la api
//TODO poner el puerto en variable de entorno
const PORT = 3000

//marca la ruta de la api para los servicios de autenticacion
app.use('/auth', authRouter)

//Routes use
app.use('/api/diaries', diaryRouter)

//Listener
//Inicia la escucha por parte de la instacia de express en un puerto concreto
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})