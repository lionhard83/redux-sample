import { useReducer, useState } from "react";


type Action = {
    type: 'increment' | 'decrement' | 'reset' 
} | {
    type: 'set', 
    value: number
}

const reducer = (state: number, action: Action) => {
    switch(action.type) {
        case 'increment': return Math.min(10, state + 1);
        case 'decrement': return Math.max(0, state -1);
        case 'set': return action.value < 10 && action.value >= 0 ? action.value : state;
        case 'reset': return 0;
    }
}

const init = (value: number) => value + 1;

export const Counter = () => {
    const [counterByReducer, setCounterByReducer] = useReducer(reducer, 0, init);
    
    
    return <>
        <button onClick={() => setCounterByReducer({type: 'reset'})}>Reset</button>
        <button onClick={() => setCounterByReducer({type: 'set', value: 5})}>Set</button>
        <button onClick={() => setCounterByReducer({type: 'decrement'})}>Decrementa</button>
        <button onClick={() => setCounterByReducer({type: 'increment'})}>Incrementa</button>
        <span>{counterByReducer}</span>
    </>
}