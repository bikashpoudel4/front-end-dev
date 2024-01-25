import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from "./App";


const [, , third] = ["Book", "Pen", "Calculator", "Ruler"];
console.log(third);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App authorized={false}/>
    </>,
);

