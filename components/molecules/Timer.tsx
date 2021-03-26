import React from 'react'
import { CountDown } from '../atoms/CountDown'

export const Timer = () => {
  return (
    <div>
      <main>
        <CountDown input={1} />
      </main>
    </div>
  )
}