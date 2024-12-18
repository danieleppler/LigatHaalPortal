const { default: axios } = require("axios")


const getVenueDataById = async (venue_id,api_key) =>{

    const headers = {
        "x-rapidapi-host":"v3.football.api-sports.io",
        "x-rapidapi-key" :api_key
    }
    
    const endpoint = `https://v3.football.api-sports.io/venues?id=${venue_id}` 

    return await axios.get(endpoint,{headers})
}

const mock_data = async () =>{
return {
    data:{
        response:[
            {
            "id": 556,
            "name": "Old Trafford",
            "address": "Sir Matt Busby Way",
            "city": "Manchester",
            "country": "England",
            "capacity": 76212,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/556.png"
            }
            ]
        
    }
  
}
}

module.exports = {getVenueDataById,mock_data}