const venueRepo = require('../reposetories/venueRepo')


const api_key = process.env.API_KEY

const getVenueByIdSvc = async (id) =>{
    if(process.env.NODE_ENV == "production"){
        const response = await venueRepo.getVenueDataById(id,api_key)

        console.log(`venue req for  id ${id} - status ${response.status}`)


        if(response.headers['x-ratelimit-remaining'] === '0'){
            return {
                status : 206,
                data:[],
                massage : "minutely request limit"
            }
        }
        if(response.headers['x-ratelimit-requests-remaining'] === '0'){
            return{
                status:206,
                data:[],
                massage : "daily request limit"
            }
        }
        
        return {
            status : 200,
            data : response.data,
            massage:"data fetched successfully"
        }
        
    }
    return await venueRepo.mock_data(id,api_key)
}

module.exports = {getVenueByIdSvc}