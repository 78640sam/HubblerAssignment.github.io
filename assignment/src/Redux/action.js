import {STORE_RULE} from './actionTypes';

const storeRules=(rules)=> ({
    type : STORE_RULE,
    payload : rules,
    
})




export {storeRules}