const playersRepo = require('../reposetories/PlayerRepo') 

const api_key = process.env.API_KEY

const getPlayersByTeamId_SVC = async (team_id) =>{
    if(process.env.NODE_ENV == "production"){
        var {response:data} =  await playersRepo.getPlayersByTeamId(team_id,api_key)
    }
  
    else{
        var {response:data} =  await playersRepo.mock_data()
    } 

    return data
    
    
}

module.exports = {getPlayersByTeamId_SVC}