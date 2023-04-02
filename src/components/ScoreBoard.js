import React from "react";
import "./ScoreBoard.css"

const ScoreBoard = (props) => {
    const {xScore,oScore}= props.scores;
  return (
    <div className="ScoreBoard">
      <span className={`score x-score ${ !props.xPlaying &&"inactive"}`}>X-{xScore}</span>
      <span className={`score o-score ${props.xPlaying &&"inactive"}`}>O-{oScore}</span>
    </div>
  )
}

export default ScoreBoard;
