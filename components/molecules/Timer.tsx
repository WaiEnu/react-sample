import React from 'react'
import { CountDown } from '../atoms/CountDown'

export const Timer:React.FC = ({}) => {
  return (
    <div>
      <main>
        <CountDown />
      </main>
    </div>
  )
}
