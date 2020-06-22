import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer.js';
const Child2 = () => {
let [state, dispatch] = useReducer(CounterReducer, 0);
console.log(state);
    return(
           <div>
                <h2>This is second child using CounterReducer:</h2>
                <h3>Value of reducer state is: {state}</h3>
                <button onClick = {() =>dispatch('INCREMENT')}>Increament Reducer</button>
           </div>
    );
}

export default Child2;