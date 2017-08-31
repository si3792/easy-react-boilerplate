import React from 'react';
import cigaretteImg from './cigarette.png';

const SmokeCounterCount = ({count}) => (
    <div className="smoke-counter--count">
        <img src={cigaretteImg} alt="Logo" />
        <span>{count}</span>
    </div>
);

export default SmokeCounterCount;