import { useState } from 'react';
import './App.css';

function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
    return (
        <>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
        </>
    );
}

