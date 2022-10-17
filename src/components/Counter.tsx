import React, { useEffect, useState } from 'react';
import './Counter.css';
import History from './History';

const Counter = () => {
    const [counter, setCounter] = useState<number>(JSON.parse(localStorage.getItem('counter') || '{}'));
    const [history, setHistory] = useState<number>(0);

    useEffect(() => {
        const previousCount: number = JSON.parse(localStorage.getItem('counter') || '{}');
        setCounter(previousCount);
        setHistory(previousCount);
        console.log(counter);
        
    }, [])

    useEffect(()=>{
        if (counter) {
            localStorage.counter = counter;            
        }
    },[counter])


    const increaseCount = () => {
        if (counter <= 0) {
            setCounter(0);
        }
        setCounter(prevCount => prevCount + 1);
        localStorage.counter = counter;
    }
    const decreaseCount = () => {
        setCounter(prevCount => prevCount - 1);
        localStorage.counter = counter;
    }
    const resetCount = () => {
        setCounter(0);
        setHistory(counter);
    }

    return (
        <div className='counter-container'>
            <div className='counter'>
                <h2>Welcome to simple counter</h2>
                <div>
                    <h2 id='counter'>{counter}</h2>
                    <div>
                        <button onClick={decreaseCount} disabled={counter<=0 && true}>-</button>
                        <button onClick={resetCount}>Reset</button>
                        <button onClick={increaseCount}>+</button>
                    </div>
                </div>
                <History previousValue={history} currentValue={counter}></History>
            </div>
        </div>
    );
};

export default Counter;