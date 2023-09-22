import React, { useEffect } from "react";
import Question from "./Question";

/* redux store import*/
import {useSelector} from'react-redux';

function Quiz(){

    const state = useSelector((state)=>(state));
     
    useEffect(()=>{
        // console.log(state);
    });

    function onPrev(){
        console.log("Prev button clicked");
    }
    function onNext(){
        console.log("next button clicked");
    }
    return(
        <div className="container">
               <h1 className="title text-light">Quiz Application</h1>

      {/*display questions*/}
      <Question/>

      <div className="grid">
      <button className="btn prev" onClick={onPrev}>Prev</button>
      <button className="btn next" onClick={onNext}>Next</button>
      </div>
             
        </div>
    )
}
export default Quiz;