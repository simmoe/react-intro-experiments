import React from 'react';
import logo from './wheel.svg';
import './JegLever.css';

export class JegLever extends React.Component {
    render() {
        return (
            <div className="JegLever">
                <header className="JegLever-header">
                    <h1>A class component from an undividual file</h1>
                    <img src={logo} className="JegLever-logo" alt="logo"/>
                    <p>This is another subcomponent. The only difference is that this class is
                        defined in a new .js file. The class shows this text - and an .svg file that it
                        imports. See JegLever.js</p>
                    <p>
                        Edit
                        <code>src/JegLever.js</code>
                        and save to reload.
                    </p>
                    <a
                        className="JegLever-link"
                        href="https://moe.it.slotshaven.dk/wp/?p=4823"
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default JegLever;
