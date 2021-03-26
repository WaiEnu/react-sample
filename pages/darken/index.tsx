import * as React from 'react'
import Pane from '../../components/Pane'
import { ToggleDarkMode } from '../../components/ToggleDarkMode';
import Darkmode from "../../utils/darkmode.svg"
import DarkmodeLight from "../../utils/darkmode_light.svg"

export default function Profile() {
  return (
  <Pane title="profile">
    <h1>Profile Page</h1>
    <div>
      <main>
          <ToggleDarkMode />
        <div className="flex h-full justify-center">
          <Darkmode className="icon"/>
          <DarkmodeLight className="iconL"/>
        </div>
      </main>
    </div>
  </Pane>
  );
}