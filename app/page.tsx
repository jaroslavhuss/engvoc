"use client"
import { useState } from "react"
import {data} from "./data/Data"
import Item from "./components/Item"
import { AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";
import { Bs123, BsFillDice6Fill } from "react-icons/bs";
export default function Home() {

  const [d] = useState(data);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [useRandom, setUseRandom] = useState<boolean>(false);
  const pickRandomDataQuestion = () =>{
    const lengthOfData = d.length;

    if(lengthOfData>0){
      const rand = Math.floor(Math.random()* lengthOfData -1);
      if(rand === currentIndex || rand === 0){
        pickRandomDataQuestion();
      }
      setCurrentIndex(rand);
    }
  }

  const nextDataQuestion = (move:"go-back"|"go-forward") =>{
    const lengthOfData = d.length;
    const getCurrentIndex = currentIndex;

    if(lengthOfData>0){
      if(move==="go-forward"){
        if(getCurrentIndex+1<lengthOfData){
          setCurrentIndex(getCurrentIndex+1);
        }
      }else if(move==="go-back"){
        if(getCurrentIndex-1>=0){
          setCurrentIndex(getCurrentIndex-1);
        }
      }
    }
    
  }


  return (
      <div className="z-10 w-full max-w-5xl font-mono text-center mx-auto">
          <h1 className="text-center text-2xl w-full py-5">Business English 6 </h1>
          <div className="block">
          Mode: <span className="bg-slate-100 p-2 rounded-sm shadow border cursor-pointer" onClick={()=>{
            setUseRandom(!useRandom);
          }}>{useRandom?"random":"in-order"}</span>
          <span>
         
          </span>
          
          </div>
        
         
    {
      currentIndex>0 ?
      <>
      <div className="text-center text-2xl w-full py-5">Question {currentIndex+1} of {d.length}</div>
      <Item item={d[currentIndex]}/>
      <br />
      {
        useRandom && <div className="p-4 bg-gradient-to-br cursor-pointer inline-block from-blue-300 via-blue-500 to-blue-950 shadow rounded-md font-bold text-white hover:scale-105 transition-all duration-500 ease-in-out my-10" onClick={pickRandomDataQuestion}><div className="flex justify-center align-middle"><span className="mr-2 text-lg">Next</span> </div></div>
      }

      {
        !useRandom && <div className="flex justify-center">
            <div className="p-4 m-1 bg-gradient-to-br cursor-pointer inline-block from-blue-300 via-blue-500 to-blue-950 shadow rounded-md font-bold text-white hover:scale-105 transition-all duration-500 ease-in-out my-10" onClick={()=>{nextDataQuestion("go-back")}}><AiFillCaretLeft /></div>
  <div className="p-4 bg-gradient-to-br m-1 cursor-pointer inline-block from-blue-300 via-blue-500 to-blue-950 shadow rounded-md font-bold text-white hover:scale-105 transition-all duration-500 ease-in-out my-10" onClick={()=>{nextDataQuestion("go-forward")}}><AiFillCaretRight /></div>
        </div>
      }
    
      </>
      :
      <div className="p-4 bg-gradient-to-br cursor-pointer inline-block from-blue-300 via-blue-500 to-blue-950 shadow rounded-md font-bold text-white hover:scale-105 transition-all duration-500 ease-in-out my-10" onClick={pickRandomDataQuestion}>Start learning</div>
    }
      </div>
  )
}
