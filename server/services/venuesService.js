const venueRepo = require('../reposetories/venueRepo')


const api_key = process.env.API_KEY

const getVenueByIdSvc = async (id) =>{
    return await venueRepo.getVenueDataById(id,api_key)
    //return await venueRepo.mock_data(id,api_key)
}

module.exports = {getVenueByIdSvc}