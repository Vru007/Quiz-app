import React, { useEffect } from "react";
import { useState } from "react";
// import "../styles/App.css";
import {useSelector} from'react-redux';

import { useFetchQuestion } from "../hooks/FetchQuestions";

function Question({onChecked}) {
  const [checked, setChecked] = useState(undefined);
  const result = useSelector(state => state.result.result);
  const { trace } = useSelector(state => state.questions);
  const [{isloading,apiData,serverError}]=useFetchQuestion();
  const questions = useSelector(state=>state.questions.queue[state.questions.trace]);
  
  
     
  useEffect(()=>{
      console.log(trace);
  });
  useEffect(() => {
    // console.log(apiData);
    
  });
  function onSelect(i) {
    onChecked(i);
    // console.log(i);
  }
  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={()=>onSelect(i)}
            ></input>
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
  ))}
      </ul>
    </div>
  );
}

export default Question;
