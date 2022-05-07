import './style.css';
import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {storeRules, deleteRule,changeHead} from "../Redux/action";
import { useSelector } from "react-redux";


function Rules() {
    
    const [rules, setRules] = useState(""); 
    const [bool, setBool] = useState(false); 
    const dispatch=useDispatch();
    const listRule=useSelector((state)=>state.rule)
    
  
useEffect(()=>{
if(listRule.length>=5){
    setBool(true)
}else{
    setBool(false)
}
},[listRule])

const handleRule=()=>{
  
 dispatch(storeRules(rules));
 dispatch(changeHead(rules));

}

const handleDelRule=(key)=>{
  
 dispatch(deleteRule(key));
}

    return (
      <div className="main-rules-div">
          <div className='main-rules-div-1-2'>
              <img src="https://imgs.search.brave.com/NmtwTLOclRxc1ZZNIKf6Cka83JPSPq5EFXj-5dx0I6A/rs:fit:553:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/WkdOUUxpcnZJenRp/cFpKN0lyaTN3SGFH/VyZwaWQ9QXBp" alt="" className='nav-image-icon'/>
              <h4>Back to Stages</h4>
          </div>
   <br/>   <br/>   <br/>
       <p>Rules  {listRule.length} </p>
       <br/>
       <br/>
       <input type="text" className="rules-input-box" value={rules} onChange={(e)=> setRules(e.target.value)}/>
       <br/>
       <br/>
       {
           
           listRule.map((rule)=> <div className='rule-box'><h5 onDoubleClick={()=>{
               dispatch()
           }}>{rule}</h5>
           <img src="https://imgs.search.brave.com/MMevCtRXT6JgRFonnSDTeEoMYumZxKTwAygclwxJSfk/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvd2ViLWFuZC11/aS01LzIwLzIyNy01/MTIucG5n" alt="" className='rule-image-icon-1'/>
         <button onClick={handleDelRule}>del</button>
           </div>)
       }
       <br/>
       <button className="rules-btn-box" onClick={handleRule} disabled={bool}>Add New Rule</button>
      </div>
    );
  }
  
  export default Rules;