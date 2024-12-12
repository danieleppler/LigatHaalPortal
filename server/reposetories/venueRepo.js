

const getVenueDataById = async (venue_id,api_key) =>{
    return await fetch(`https://v3.football.api-sports.io/venues?id=${venue_id}`,{
        'method':'GET',
        'headers': {
            'x-rapidapi-key': api_key,
            'x-rapidapi-host': 'v3.football.api-sports.io'
          }
    }).then((res) => res.json()).catch((err) =>  err.message)
}

const mock_data = async () =>{
return {
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

module.exports = {getVenueDataById,mock_data}