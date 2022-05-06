import './style.css';
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {storeRules} from "../Redux/action";
import { useSelector } from "react-redux";

function Rules() {
    
    const [rules, setRules] = useState(""); 
    const dispatch=useDispatch();
    const listRule=useSelector((state)=>state.rule)

const handleRule=()=>{

 dispatch(storeRules(rules));


}

    return (
      <div className="main-rules-div">
      
       <input type="text" className="rules-input-box" value={rules} onChange={(e)=> setRules(e.target.value)}/>
       <br/>
       <br/>
       {
           listRule.map((rule)=> <h3>{rule}</h3>)
       }
       <br/>
       <button className="rules-btn-box" onClick={handleRule}>Add New Rule</button>
      </div>
    );
  }
  
  export default Rules;