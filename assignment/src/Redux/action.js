import {STORE_RULE,STORE_ACTION, HEADING} from './actionTypes';

const storeRules=(rules)=> ({
    type : STORE_RULE,
    payload : rules,
    
})
const storeActions=(actions)=> ({
    type : STORE_ACTION,
    payload : actions,
    
})
const chengeHead=(str)=>{
    return {

        type:HEADING,
        payload:str
    }
}




export {storeRules,storeActions,chengeHead}