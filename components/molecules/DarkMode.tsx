import * as React from 'react'
import { DarkModePane } from '../atoms/DarkModePane';
import { DarkModeToggle } from '../atoms/DarkModeToggle';

export default function DarkMode() {
  return (
    <div>
      <main>
        <DarkModeToggle />
        <DarkModePane />
      </main>
    </div>
  );
}