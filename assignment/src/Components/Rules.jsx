import './style.css';
import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {storeRules} from "../Redux/action";
import { useSelector } from "react-redux";


function Rules() {
    
    const [rules, setRules] = useState(""); 
    // const [heading,setHEading]=useState("");
    const [bool, setBool] = useState(false); 
    // const [curTime, setTime] = useState(); 
    const dispatch=useDispatch();
    const listRule=useSelector((state)=>state.rule)

useEffect(()=>{
    // var sate=new Date();
    // var date=sate.split(" ");
    // var str=date[3];
    // setTime(str);
if(listRule.length>=5){
    setBool(true)
}else{
    setBool(false)
}
},[listRule])

const handleRule=()=>{
    // setHEading(rules)
 dispatch(storeRules(rules));


}

    return (
      <div className="main-rules-div">
       <p>{listRule.length} </p>
       <input type="text" className="rules-input-box" value={rules} onChange={(e)=> setRules(e.target.value)}/>
       <br/>
       <br/>
       {
           
           listRule.map((rule)=> <div className='rule-box'><h3 onDoubleClick={()=>{
               dispatch()
           }}>{rule}</h3>
        
           </div>)
       }
       <br/>
       <button className="rules-btn-box" onClick={handleRule} disabled={bool}>Add New Rule</button>
      </div>
    );
  }
  
  export default Rules;