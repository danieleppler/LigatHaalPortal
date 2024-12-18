const express = require('express')
const router = express.Router()

const playersSvc = require('../services/playersService')

router.get('/:id',async (req,res)=>{
    const response = await playersSvc.getPlayersByTeamId_SVC(req.params.id)

    if(response.status === 206){
        res.status(206)
             return res.json({massage:response.massage})
    }
       
    return res.json(response.data.response)
})

module.exports  = router