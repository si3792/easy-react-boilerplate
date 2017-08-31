import React from 'react';
import cigaretteImg from './cigarette.png';

const SmokeCounterCount = () => (
    <div className="smoke-counter--count">
        <img src={cigaretteImg} alt="Logo" />
        <span>0</span>
    </div>
);

export default SmokeCounterCount;