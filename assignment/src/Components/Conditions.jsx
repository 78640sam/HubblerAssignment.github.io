import "./style.css";
import { useSelector } from "react-redux";


function Conditions() {

    const rule1=useSelector((state)=>state.rule)

    return (
      <div className="App">
           {
           rule1.map((rule)=> <h3>{rule}</h3>)
       }
  
         <h4>Button Name</h4>

        <input type="text" className="conditions-input-box" value ="Create Po"/>
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

       <button className="conditions-btn-box">
            {/* ()=>{
           let obj={};
           obj.name=name;
           obj.id=unique;
           dispatch(obj)
           state.rule.filter(el=>!==action.payload)</div>el)
       }>Add New Conditions */}
       </button>
     
      </div>
    );

  }
  
  export default Conditions;