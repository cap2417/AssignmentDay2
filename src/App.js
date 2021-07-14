import React,{useState} from "react"
import "./style.css" 


function App(){
    let [score, setScore] = useState(0)
    return(
      <div>
        <h1 style={{textAlign:"center"}}>Hey This is my Counter Application</h1>
        <h3>the value of score is {score}</h3>
        <button onClick={()=>score<25 ? setScore(score+1) : ""}>Increment</button>
        <button onClick={()=>score>0 ? setScore(score-1) : ""}>Decrement</button>
        <button onClick={()=>{setScore(0)}}>Reset</button>
      </div>         
    )} 
export default App