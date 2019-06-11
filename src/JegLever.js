import React from 'react';
import logo from './wheel.svg';
import './JegLever.css';

function JegLever() {
  return (
    <div className="JegLever">
      <header className="JegLever-header">
        <h1>Jeg Lever</h1>
        <img src={logo} className="JegLever-logo" alt="logo" />
        <p>
          Edit <code>src/JegLever.js</code> and save to reload.
        </p>
        <a
          className="JegLever-link"
          href="https://moe.it.slotshaven.dk/wp/?p=4823"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lær React
        </a>
      </header>
    </div>
  );
}

export default JegLever;
