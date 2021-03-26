import React from 'react'
import Darkmode from "../../utils/darkmode.svg"
import DarkmodeLight from "../../utils/darkmode_light.svg"

export const DarkModePane = () => {

  return (
    
    <div className="flex h-full justify-center">
      <Darkmode className="icon"/>
      <DarkmodeLight className="iconL"/>
    </div>
  )
}