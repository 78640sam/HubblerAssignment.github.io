import './style.css';
import React, {useState} from "react";

function Rules() {
    
    const [rules, setRules] = useState(""); 
    return (
      <div className="main-rules-div">
      
       <input type="text" className="rules-input-box" value={rules} onChange={(e)=> setRules(e.target.value)}/>
       <br/>
       <br/><br/>
       <button className="rules-btn-box" >Add New Rule</button>
      </div>
    );
  }
  
  export default Rules;