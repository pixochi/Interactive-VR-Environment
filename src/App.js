import React, { Component } from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';
import registerClickDrag from 'aframe-click-drag-component';
import 'aframe-physics-system';

import { Dashboard, WorkSpace } from './containers';
import { Sky, Cursor, Floor } from './components';
import './App.css';

registerClickDrag(aframe);

class App extends Component {
  render() {
    return (
      <Scene physics="debug: true">
        <Sky />
        <Floor />
        <Cursor />
        <Dashboard />
        <WorkSpace />

      </Scene>
    );
  }
}

export default App;
