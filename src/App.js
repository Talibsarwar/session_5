import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {
  let countState = useState(0) //let [count, SetCount]
  return (
   <CounterContext.Provider value={countState}>
    <div>
         
    </div>
  </CounterContext.Provider>
  );
}

export default App;
