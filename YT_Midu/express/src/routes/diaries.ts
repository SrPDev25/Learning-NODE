import express from 'express'

//Instacia dentro de express para indicar una ruta
const router = express.Router()

/**
 * Get
 * Devuelve en la raiz de daires todos los diarios
 */
router.get('/', (_req, res) => {
    res.send('Te lo doy to')
})

/**
 * Post
 * inserta un nuevo diario
 */
router.post('/', (_req, res) => {
    res.send('Me lo queo to')
})

//Devuelve la ruta despues de configurada
export default router