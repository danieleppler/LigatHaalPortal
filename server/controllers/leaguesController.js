const express = require('express')
const router = express.Router()
const leaguesService = require('../services/leaguesService')

router.get('/',async (req,res) =>{
    const data = await leaguesService.get_league_data_from_service()
    return res.json(data)
})

module.exports = router