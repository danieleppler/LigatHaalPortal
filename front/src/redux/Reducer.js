import { act } from "react"

const InitialState = {
    current_viewed_team:{}
}

const Reducer = (state=InitialState,action) =>{
    switch(action.type){
        case "Update_current_viewed_team":
            return {...state,current_viewed_team:action.payload}           
            
        default: // need this for default case
        return state 
    }
}

export default Reducer