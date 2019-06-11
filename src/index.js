import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import JegLever from './JegLever';
//import App from './App';
import * as serviceWorker from './serviceWorker';


class Min extends React.Component {
    render() {
        return (
            <div className="Min">
                <h2>Her er komponenten Min</h2>
                <p>En selvstændig lille dippedut, vi kan fylde med alt muligt indhold.</p>
            </div>
        );
    }
}


ReactDOM.render(<Min />, document.getElementById('root'));







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
