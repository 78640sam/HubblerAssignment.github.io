import { STORE_RULE } from "./actionTypes";

const initState ={
    rule : [],
  
}

const reducer = (state=initState,action) =>{
  
    switch(action.type){
     

        case STORE_RULE :
            return{...state,rule: action.payload }
     
            default :
            return state;
    }
}

export {reducer}