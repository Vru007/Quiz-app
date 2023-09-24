import React, { useEffect } from "react";
import { useState } from "react";
// import "../styles/App.css";
import {useSelector} from'react-redux';
import { useDispatch } from "react-redux";
import { useFetchQuestion } from "../hooks/FetchQuestions";
import { updateResultAction } from "../redux/result_reducer";
import {updateResult} from "../hooks/FetchAnswers";
function Question({onChecked}) {
  const [checked, setChecked] = useState(undefined);
  const result = useSelector(state => state.result.result);
  const { trace } = useSelector(state => state.questions);
  const [{isloading,apiData,serverError}]=useFetchQuestion();
  const questions = useSelector(state=>state.questions.queue[state.questions.trace]);
  const dispatch=useDispatch();
  
     
  useEffect(()=>{
    console.log({trace,checked})
      dispatch(updateResult({trace,checked}))
  },[dispatch]);
  useEffect(() => {
    // console.log(result);
    
  });
  function onSelect(i) {
    onChecked(i);
    setChecked(i);
    // console.log(i);
  }

  if(isloading) return <h3 className="text-light">isLoading</h3>
  if(serverError) return <h3 className="text-light">{serverError || "unknown error"}</h3>
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
