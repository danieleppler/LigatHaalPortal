const teamsRepo = require('../reposetories/teamsRepo')

const league = process.env.LEAGUE
const season = process.env.SEASON
const api_key = process.env.API_KEY

const getTeamsData = async () =>{
    return await teamsRepo.getTeamsData(league,season,api_key)
    //return await teamsRepo.mock_data()   
}

module.exports = {getTeamsData}
