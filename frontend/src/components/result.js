import React from "react";
import { Link } from "react-router-dom";
import "../styles/result.css";
import ResultTable from "./ResultTable";
import { useDispatch } from "react-redux";
import {useSelector} from'react-redux';
import { resetResult } from "../redux/result_reducer";
import { resetQuestions } from "../redux/question_reducer";
function Result() {
  const dispatch = useDispatch();
  const state=useSelector(state=>state);
  const totalPoints=state.questions.queue.length*10;
  const totalQuestion=totalPoints/10;
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
          <span className="bold">8</span>
        </div>
        <div className="flex">
          <span>Total Points Earned</span>
          <span className="bold">80</span>
        </div>
      
      <div className="flex">
        <span>Status:</span>
        <span className="bold">Passed</span>
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
