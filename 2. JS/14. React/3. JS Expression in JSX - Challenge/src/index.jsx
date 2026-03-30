//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from 'react';
import ReactDOM from 'react-dom';

const fName = "Angela";
const lName = "Yu";
const luckyNumber = 7;

ReactDOM.render (
    <div>
        <h1>Hello {fName} {lName}!</h1>
        <p>The lucky number is {Math.floor(Math.random() * 10)}</p>
    </div>, 
        document.getElementById("root")
    
);
