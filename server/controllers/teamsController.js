const express = require('express')
const router = express.Router()

const teamsService = require('../services/teamsService')

router.get('/',async (req,res)=>{
    const response = await teamsService.getTeamsData()

    if(response.status === 206){
        res.status(206)
             return res.json({massage:response.massage})
    }
    return res.json(response.data.response)
})

module.exports = router