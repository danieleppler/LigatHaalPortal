const express = require('express')
const router = express.Router()

const teamsService = require('../services/teamsService')

router.get('/',async (req,res)=>{
    const data = await teamsService.getTeamsData()
    return res.json(data)
})

module.exports = router