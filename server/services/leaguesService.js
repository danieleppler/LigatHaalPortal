const leagueRepo = require('../reposetories/leaguesRepo')

const league = process.env.LEAGUE
const season = process.env.SEASON
const api_key = process.env.API_KEY

const get_league_data_from_service = async () =>{
    if(process.env.NODE_ENV == "production"){
        const response  = await leagueRepo.get_league_data(league,season,api_key)
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
    return await leagueRepo.mock_data(league,season,api_key)

}

module.exports = {get_league_data_from_service}