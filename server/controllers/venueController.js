const express = require('express')
const router = express.Router()
const venueSVC = require('../services/venuesService')

router.get('/:id',async(req,res) =>{
    const data = await venueSVC.getVenueByIdSvc(req.params.id)
    return res.json(data.response[0])
})

module.exports = router