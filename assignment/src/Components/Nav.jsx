import './style.css';

function Nav() {
    return (
      <div className="App">
        <div className="main-navbar">
            <div className="main-navbar-1">
           <div>
               <h4>Demo Custom App</h4>
               <p>APP NAME</p>
           </div>
           <div>
           <h4>Assessment</h4>
               <p>STAGE</p>
           </div>
           <div>
           <h4>Create PO</h4>
               <p>Button</p>
           </div>
           <div>
               <h4>Button Rules</h4>
           </div>

           </div>
           <div className="main-navbar-2">
           <div>
               <p>App saved on {}</p>
           </div>
           <div>
               <button>DONE</button>
           </div>
          
        </div>
        </div>
      </div>
    );
  }
  
  export default Nav;

  