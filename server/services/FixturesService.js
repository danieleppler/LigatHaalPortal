const fixturesSvc = require('../reposetories/FixturesRepo')

const api_key = process.env.API_KEY
const season = process.env.SEASON

const GetFixturesByTeamId = async (teamId) =>{

    if(process.env.NODE_ENV == "production"){
        return await fixturesSvc.getFixturesByTeamId(teamId,api_key,season)
    }
    return await fixturesSvc.mock_data(teamId,api_key,season)
}

module.exports = {GetFixturesByTeamId}