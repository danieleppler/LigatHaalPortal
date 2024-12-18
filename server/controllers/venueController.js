const express = require('express')
const router = express.Router()
const venueSVC = require('../services/venuesService')

router.get('/:id',async(req,res) =>{
    const response = await venueSVC.getVenueByIdSvc(req.params.id)
   
    if(response.status === 206){
        res.status(206)
             return res.json({massage:response.massage})
    }
        
       
    return res.json(response.data.response)
})

module.exports = router