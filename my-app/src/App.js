import React from 'react';
import './styles/style.css'
import Pass from './components/pass';
import Buttons from './components/buttons';
import KnobRegulator from './components/regulator';

export default function App() {
  return (<>
    <KnobRegulator />
    <Pass />
    <Buttons />
  </>);
}
