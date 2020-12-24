import * as React from 'react'
import Pane from '../../components/Pane'
import { ToggleDarkMode } from '../../components/ToggleDarkMode';
import light from '../../pages/profile/dark.PNG'
import dark from '../../pages/profile/light.PNG'

export default function Profile() {
  return (
  <Pane title="profile">
    <h1>Profile Page</h1>
    <div>
      <main>
        <div className="flex h-full justify-center">
          <ToggleDarkMode />
          <picture>
            <source
              srcSet={dark}
              media="(prefers-color-scheme: dark)" />
            <img src={light} alt= "icon" />
          </picture>
        </div>
      </main>
    </div>
  </Pane>
  );
}