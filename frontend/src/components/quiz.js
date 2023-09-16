import React from "react";
import Question from "./Question";


function Quiz(){
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