import React, { useState, useEffect } from 'react'

interface Timer {
  time:number
  minute:number
  second:number
}

const sec:number = 60
const init:number = 3

export const CountDown:React.FC = () => {
  const [stopd, setStopd] = useState(false);
  const [input, setInput] = useState(3);
  const [timer, setTimer] = useState<Timer>({
    time:init*sec,
    minute:Math.floor(init*sec / 60),
    second:init*sec - Math.floor(init*sec / 60) * 60
  })

  useEffect(()=>{
    setTimeout(()=>{
      if((timer.minute === 0 && timer.second === 0) || stopd) return;
      setTimer({
        time:timer.time-1,
        minute:Math.floor((timer.time - 1) / 60),
        second:timer.time - Math.floor((timer.time - 1) / 60) * 60 - 1
      })
    },1000)
  })

  const handleStop = () => {
    if(!stopd){
      setStopd(true)
    }else{
      setStopd(false)
    }
  };

  const reset = () => {
    const n=3
    clearTimeout()
    setTimer({
      time:n*sec,
      minute:Math.floor(n*sec / 60),
      second:n*sec - Math.floor(n*sec / 60) * 60,
    })
    setStopd(true)
  }

  const hundleInput = (value:number) => {
    setInput(value);
  }

  return (
    <div className="flex flex-col justify-center content-center w-full h-full">
      <div className="flex flex-col justify-center content-start w-full h-full">
        <div className="flex justify-center content-center w-full">
          <div className="w-auto">
            <span>{`${timer.minute<=10?'0':''}${timer.minute}`}</span>:
            <span>{`${timer.second<=10?'0':''}${timer.second}`}</span>
          </div>
        </div>
        <div className="flex justify-center content-center w-full mt-1">
          <div className="mx-2">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleStop()}
            >
              {stopd?'start':'stop'}
            </button>
          </div>
          <input
            type="number"
            className="outline-none focus:outline-none text-center w-auto bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
            name="custom-input-number"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              hundleInput(Number(e.target.value))
            }}></input>
          <div className="mx-2">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => reset()}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}