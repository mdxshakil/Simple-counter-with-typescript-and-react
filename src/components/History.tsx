import React, { FC } from 'react';

interface HistoryValue {
    previousValue: number,
    currentValue: number,
}

const History: FC<HistoryValue> = ({previousValue,currentValue}) => {
    
    return (
        <div className='history-container'>
            <p>Previous Progress:{previousValue}</p>
            {currentValue > previousValue && <p>Current Best:{currentValue}</p> }
        </div>
    );
};

export default History;