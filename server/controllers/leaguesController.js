const express = require('express')
const router = express.Router()
const leaguesService = require('../services/leaguesService')

router.get('/',async (req,res) =>{
    const response = await leaguesService.get_league_data_from_service()

    if(response.status === 206){
        res.status(206)
             return res.json({massage:response.massage})
    }
       
    return res.json(response.data.response)
})

module.exports = router