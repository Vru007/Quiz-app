import React, { useEffect } from "react";
import { useState } from "react";
import data from "../database/data";
import "../styles/App.css";
function Question() {
  const [checked, setChecked] = useState(undefined);
  const question = data[0];

  useEffect(() => {
    console.log(question);
  });
  function onSelect() {
    console.log("button changed");
  }
  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect()}
            ></input>
            <lable className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </lable>
            <div className="check "></div>
          </li>
  ))}
      </ul>
    </div>
  );
}

export default Question;
