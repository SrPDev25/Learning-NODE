import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send('Te lo doy to')
})

router.post('/', (_req, res) => {
    res.send('Me lo queo to')
})

export default router