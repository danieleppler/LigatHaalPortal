const express = require('express')
const router = express.Router()

const playersSvc = require('../services/playersService')

router.get('/:id',async (req,res)=>{
    const data = await playersSvc.getPlayersByTeamId_SVC(req.params.id)
    return res.json(data)
})

module.exports  = router