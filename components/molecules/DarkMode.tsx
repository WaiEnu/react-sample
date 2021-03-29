import * as React from 'react'
import Darkmode from "../../utils/darkmode.svg"
import DarkmodeLight from "../../utils/darkmode_light.svg"
import { DarkModeToggle } from '../atoms/DarkModeToggle';

export default function DarkMode() {
  return (
    <div>
      <main>
        <DarkModeToggle />
        <div className="flex h-full justify-center">
          <Darkmode className="icon"/>
          <DarkmodeLight className="iconL"/>
        </div>
      </main>
    </div>
  );
}