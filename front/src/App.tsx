import React from 'react';
import Timer from './timer/Timer';
import './App.css'
import ListContainer from './list/Index';

const App = () => {
  return (
    <div className="App">
      <Timer />
      <ListContainer />
    </div>
  );
}

export default App;
