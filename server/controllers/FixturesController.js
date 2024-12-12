const express = require('express')
const router = express.Router()

const fix_svc = require('../services/FixturesService')

router.get('/:id',async (req,res) =>{
    const data =await fix_svc.GetFixturesByTeamId(req.params.id)
    return res.json(data)

})

module.exports = router