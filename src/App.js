import React from 'react';
import { TrafficLights} from './components/botones';
import './App.css';


function App() {
  return (
    <div className="main-section">
      <div className="clock-holder" >
        <div className="stopwatch">
          <TrafficLights  />
        </div>
      </div>
    </div>


  );
};

export default App;
