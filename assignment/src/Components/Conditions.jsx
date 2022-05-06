import "./style.css";
import { useSelector } from "react-redux";


function Conditions() {

    const rule=useSelector((state)=>state.rule)

    return (
      <div className="App">
         <h1>{rule}</h1>
         <h4>Button Name</h4>

        <input type="text" className="conditions-input-box"/>
       <br/>
       <br/>
       <select className="conditions-select-box">
           <option>If All</option>
       </select>
       <span></span>
       <br/>
       <br/>
       <br/>

       <div className="conditions-todo-main">
       <select className="conditions-select-box">
           <option>Text</option>
       </select>
       <select  className="conditions-select-box">
           <option>Contains</option>
       </select>
       <button className="conditions-btn-box-1-todo"> Urgent</button>
       <input type="text" className="conditions-input-box-1-todo"/>
       </div>
       <br/>
       <br/>
       <br/>

       <button className="conditions-btn-box">Add New Conditions</button>
     
      </div>
    );

  }
  
  export default Conditions;