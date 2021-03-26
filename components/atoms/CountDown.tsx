import React, { useState, useEffect } from 'react'

type Props = {
  input: number;
}
interface Timer {
  time:number
  minute:number
  second:number
}
const sec:number = 60

export const CountDown:React.FC<Props> = ({input}) => {
  const [timer, setTimer] = useState<Timer>({
    time:input*sec,
    minute:Math.floor((input*sec - 1) / 60),
    second:input*sec - Math.floor((input*sec - 1) / 60) * 60 - 1
  })

  useEffect(()=>{
    setTimeout(()=>{
      if(timer.time === 0) return;
      setTimer({
        time:timer.time-1,
        minute:Math.floor((timer.time - 1) / 60),
        second:timer.time - Math.floor((timer.time - 1) / 60) * 60 - 1
      })
    },1000)
  })

  return (
    <h2>
      <span>{timer.minute}</span>:
      <span>{timer.second}</span>
    </h2>
  )
}