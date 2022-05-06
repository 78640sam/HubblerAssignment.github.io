import {STORE_RULE,STORE_ACTION, HEADING,STORE_CONDITIONS} from './actionTypes';

const storeRules=(rules)=> ({
    type : STORE_RULE,
    payload : rules,
    
})
const storeActions=(actions)=> ({
    type : STORE_ACTION,
    payload : actions,
    
})
const storeConditions=(conditions)=> ({
    type : STORE_CONDITIONS,
    payload : conditions,
    
})
const changeHead=(str)=>{
    return {

        type:HEADING,
        payload:str,
    }
}




export {storeRules,storeActions,storeConditions,changeHead}