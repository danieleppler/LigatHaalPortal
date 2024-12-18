const fixturesSvc = require('../reposetories/FixturesRepo')

const api_key = process.env.API_KEY
const season = process.env.SEASON

const GetFixturesByTeamId = async (teamId) =>{
    if(process.env.NODE_ENV == "production"){
        const response =  await fixturesSvc.getFixturesByTeamId(teamId,api_key,season)

        console.log(`fixtures req for team id ${teamId} - status ${response.status}`)
        
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
    return await fixturesSvc.mock_data(teamId,api_key,season)
}

module.exports = {GetFixturesByTeamId}