import React from 'react'
import "./Reset.css"
import { BrowserRouter as Router, Route,Routes,Link,params } from 'react-router-dom'
import Declare from './Declare'

const fx=({oScore,xScore})=>{
    if(oScore>xScore) {<Declare winner={oScore}/>
  }
    else{
      <Declare winner={xScore}/>
      console.log("x wins")
    }
}

const Winner = ({oScore,xScore}) => {
  return (
    
    <div>
       
       <button className="reset-btn" onClick={fx({oScore,xScore})} >Winner</button>
       
    </div>
    
  )
}

export default Winner
