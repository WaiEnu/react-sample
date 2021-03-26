import * as React from 'react'
import Pane from '../../components/templates/Pane'
import { Timer } from '../../components/molecules/Timer';

export default function Watch() {
  return (
  <Pane title="watch">
    <Timer/>
  </Pane>
  );
}