import {STORE_RULE,STORE_ACTION} from './actionTypes';

const storeRules=(rules)=> ({
    type : STORE_RULE,
    payload : rules,
    
})
const storeActions=(actions)=> ({
    type : STORE_ACTION,
    payload : actions,
    
})




export {storeRules,storeActions}