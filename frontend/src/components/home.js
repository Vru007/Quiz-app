import React, { useRef } from "react";
import { Link } from "react-router-dom";
import"../styles/home.css";

function Home(){
    
    const inputRef=useRef(null);
    return(
        
        <div className="container">
          <h1 className='title text-light'>Quiz Application</h1>
           
          <ol>
          <li>You will be asked 10 questions</li>
          <li>All Questions carry 1 mark</li>
          <li>Result will be displayed after completion of the quiz</li>
          </ol>
        
          <form id='form'>
            <input ref={inputRef} type="text" placeholder="Username"></input>
          </form>
          <div className="start">
           <Link className="btn" to={'quiz'}>Start</Link>
          </div>


        </div>
    )
}
export default Home;