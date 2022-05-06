import './style.css';
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {storeActions} from "../Redux/action";
import { useSelector } from "react-redux";

function Actions() {

    const [action, setAction] = useState(""); 
    const dispatch=useDispatch();
    const listAction=useSelector((state)=>state.action)

    
const handleAction=()=>{

    dispatch(storeActions(action));
   
   
   }
    return (
      <div className="App">
        
        <input type="text" className="actions-input-box" value={action} onChange={(e)=> setAction(e.target.value)}/>
       <br/>
       <br/><br/>
       {
           listAction.map((action)=> <h3>{action}</h3>)
       }
       <hr/>
       <br/>
       <button className="actions-btn-box" onClick={handleAction}>Add Another Action</button>
      </div>
    );
  }
  
  export default Actions;