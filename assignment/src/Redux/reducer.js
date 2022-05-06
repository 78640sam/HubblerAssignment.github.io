import { STORE_ACTION, STORE_RULE } from "./actionTypes";

const initState ={
    rule : [],
    isRule:true,
    action:[],
  
}

const reducer = (state=initState,action) =>{
  
    switch(action.type){
     

        case STORE_RULE :
            let ruleList=[...state.rule,action.payload]
            return{...state,rule:ruleList }
            case STORE_ACTION :
                let actionList=[...state.action,action.payload]
                return{...state,action:actionList }
            default :
            return state;
    }
}

export {reducer}