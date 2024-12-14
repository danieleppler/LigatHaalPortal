const leagueRepo = require('../reposetories/leaguesRepo')

const league = process.env.LEAGUE
const season = process.env.SEASON
const api_key = process.env.API_KEY

const get_league_data_from_service = async () =>{
    return await leagueRepo.get_league_data(league,season,api_key)
    //return await leagueRepo.mock_data(league,season,api_key)

}

module.exports = {get_league_data_from_service}