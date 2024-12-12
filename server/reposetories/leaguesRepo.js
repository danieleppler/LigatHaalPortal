const axios = require('../axios')

const get_league_data =async (league_id,season,apiKey) =>{
    var config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/leagues?id=${league_id}&season=${season}`,
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };
    
    const data = axios(config)
    .then(function (response) {
      return response.data.response;
    })
    .catch(function (error) {
      console.log(error);
    });

    return data;
}

const mock_data = async () =>{
    return {}
}

module.exports = {get_league_data,mock_data}