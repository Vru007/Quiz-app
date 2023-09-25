import React from "react";
import { Link } from "react-router-dom";
import "../styles/result.css";
import ResultTable from "./ResultTable";
import { useDispatch } from "react-redux";
import {useSelector} from'react-redux';
import { resetResult } from "../redux/result_reducer";
import { resetQuestions } from "../redux/question_reducer";
import {answers} from"../database/data";
function Result() {
  const dispatch = useDispatch();
  const state=useSelector(state=>state);
  const totalPoints=state.questions.queue.length*10;
  const totalQuestion=totalPoints/10;
  const result=useSelector(state=>state.result.result);
  var count=0;
  var rightAns=0;

  for(var i=0;i<totalQuestion;i++){
       if(result[i]!=undefined){
        count+=1;
       }
  }
  for(var i=0;i<totalQuestion;i++){
       if(result[i]==answers[i]){
           rightAns+=1;
       }
  }
  const PointsEarned=rightAns*10;
  var status;
  if(PointsEarned>30){
    status="Passed";
  }
  else{
    status="Failed";
  }
  function onRestart() {
    dispatch(resetResult());
    dispatch(resetQuestions());
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz application</h1>
      <div className="result flex-center" >
        <div className="flex">
          <span>Username</span>
          <span className="bold">Daily Tuition</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points:</span>
          <span className="bold">{totalPoints}</span>
        </div>
        <div className="flex">
          <span>Total Questions:</span>
          <span className="bold">{totalQuestion}</span>
        </div>
        <div className="flex">
          <span>Total Attempts:</span>
          <span className="bold">{count}</span>
        </div>
        <div className="flex">
          <span>Total Points Earned</span>
          <span className="bold">{PointsEarned}</span>
        </div>
      
      <div className="flex">
        <span>Status:</span>
        <span className="bold" style={{color:`${status=="Passed"? "#2aff95":"#ff2a66"}`}}>{status}</span>
      </div>
      </div>
      <div className="start" >
        <Link className="btn"to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>
      <div className="container">
       <ResultTable></ResultTable>
      </div>
    </div>
  );
}
export default Result;
