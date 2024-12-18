
const teamsRepo = require('../reposetories/teamsRepo')

const league = process.env.LEAGUE
const season = process.env.SEASON
const api_key = process.env.API_KEY

const getTeamsData = async () =>{
    if(process.env.NODE_ENV == "production"){
        const response = await teamsRepo.getTeamsData(league,season,api_key)
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
    else{
        return await teamsRepo.mock_data()   
    }
    
   
}

module.exports = {getTeamsData}
