import React from 'react';

import {Router, Scene, Actions} from 'react-native-router-flux';
import Welcome from './src/scripts/components/Welcome';
import SecondFile from './src/scripts/components/SecondFile';
import Add from './src/scripts/components/Add';

export default function Routers() {
  return (
    <>
      <Router>
        <Scene key="root">
          <Scene key="Welcome" component={Welcome} hideNavBar />
          <Scene key="Home" component={SecondFile} hideNavBar />
          <Scene key="Add" component={Add} hideNavBar />
          <Scene key="onEdit" component={SecondFile}/>
        </Scene>
      </Router>
    </>
  );
}