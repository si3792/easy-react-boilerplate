import React from 'react';
import SmokeCounterButton from '../smoke-counter-button/smoke-counter-button';
import SmokeCounterCount from '../smoke-counter-count/smoke-counter-count';

const SmokeCounter = () => (
    <div>
        <h2>Smoke Counter</h2>
        <SmokeCounterCount />
        <SmokeCounterButton />
    </div>
);

export default SmokeCounter;