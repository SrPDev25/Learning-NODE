import express from 'express'
import * as diaryServices from '../services/diariesServices'

//Instacia dentro de express para indicar una ruta
const router = express.Router()

/**
 * Get
 * Devuelve en la raiz de daires todos los diarios
 */
router.get('/', (_req, res) => {
	res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

//Ruta con id, donde req recopila la id
router.get('/:id', (req, res) => {
	const diary = diaryServices.findById(+req.params.id)
	return diary != null
		? res.send(diary)
		: res.sendStatus(404)
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