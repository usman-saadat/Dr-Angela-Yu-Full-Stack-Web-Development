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

ReactDOM.render (
    <div>
        <h1>My Favourite People From History</h1>
        <ul>
            <li>Prophet Muhammad SAW</li>
            <li>Hazrat Umar RA</li>
            <li>Hazrat Hussain RA</li>
            <li>Salahuddin Ayyubi</li>
            <li>Umar Mukhtar</li>
            <li>Imran Khan</li>
        </ul>
    </div>, 
    document.getElementById("root")
);
