const playersRepo = require('../reposetories/PlayerRepo') 

const api_key = process.env.API_KEY

const getPlayersByTeamId_SVC = async (team_id) =>{
    if(process.env.NODE_ENV == "production"){
        const response =  await playersRepo.getPlayersByTeamId(team_id,api_key)

        console.log(`players req for team id ${team_id} - status ${response.status}`)

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
        return await playersRepo.mock_data()
    } 

  
    
    
}

module.exports = {getPlayersByTeamId_SVC}