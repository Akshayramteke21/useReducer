import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const reducer=(state,action)=>{

       if (action.type==="inc") {
             return {count:state.count+1}
       }

       else if(action.type=="dec")
        {
         return  {count:state.count-1}
        }

        else{
          throw new console.error("unsupported action");
        }
}

function App() {
  const [state,dispatch]=useReducer(reducer,{count:0})


  const handleClickinc=()=>{
     dispatch({type:"inc"})
  }


  const handleClickdec=()=>{
    dispatch({type:"dec"})
  }
  return (
    <>
      
   



      <h2>{state.count}</h2>

      <button onClick={handleClickinc}>increase</button>
      <button onClick={handleClickdec}>decrease</button>


    </>
  )
}

export default App
