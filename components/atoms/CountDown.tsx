import React, { useState, useEffect } from 'react'

interface Timer {
  time:number
  minute:number
  second:number
}
const input:number = 1
const sec:number = 60

export const CountDown:React.FC = () => {
  const [count, setCount] = useState(input*sec);
  const [stopd, setStopd] = useState(false);
  const [timer, setTimer] = useState<Timer>({
    time:count,
    minute:Math.floor(count / 60),
    second:input*sec - Math.floor(count / 60) * 60
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

  const countUp = (n:number) => {
    setCount(n*sec);
  };

  const start = () => {
    setStopd(true);
  }

  const stop = () => {
    setStopd(false);
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
              onClick={() => start()}
            >
              start
            </button>
          </div>
          <div className="mx-2">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => stop()}
            >
              stop
            </button>
          </div>
          <div className="mx-2">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              {'<+>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}