import { HEADING, STORE_ACTION, STORE_RULE,STORE_CONDITIONS } from "./actionTypes";

const initState ={
    rule : [],
    isRule:true,
    action:[],
    curTime:"",
    heading:"",
    condition:[],
}

const reducer = (state=initState,action) =>{
  
    switch(action.type){
     
        
        case STORE_RULE :

            let ruleList=[...state.rule,action.payload]
            return{...state,rule:ruleList, }
            case STORE_ACTION :
                let actionList=[...state.action,action.payload]
                return{...state,action:actionList }
                case STORE_CONDITIONS :
                    let conditionList=[...state.condition,action.payload]
                    return{...state,condition:conditionList, }
           case HEADING :
               return{...state,heading:action.payload}

            default :
            return state;
    }
}

export {reducer}