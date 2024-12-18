const express = require('express')
const router = express.Router()

const fix_svc = require('../services/FixturesService')

router.get('/:id',async (req,res) =>{
    const response =await fix_svc.GetFixturesByTeamId(req.params.id)

    if(response.status === 206){
        res.status(206)
             return res.json({massage:response.massage})
    }
       
    return res.json(response.data.response)

})

module.exports = router