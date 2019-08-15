import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {JegLever} from './JegLever.js';
import {PropsExample} from './PropsExample'
import {PropsButtonExample} from './PropsButtonExample'
import {StateClass} from './StateClass';
import * as serviceWorker from './serviceWorker';

const peopleObj = [
    {
        'name': 'simon',
        'experience': 'none'
    }, {
        'name': 'the Godfather',
        'experience': 'extensive'

    }
]

const listTools = ['hammer', 'axe', 'screwdriver']
const doSmt = true;

class Main extends React.Component {
    handleEvent() {
        alert('Hi from the main class "Min"')
    }
    render() {
        return (
            <div className="main">
                <h1>React intro experiments</h1>
                <p>This is an example of some basic architecture with the javascript framework
                    React.js. It is absolutely of no use in any pragmatic context, other than
                    getting to know the concepts of React.</p>
                <p>These first few lines are directly written in the render method of a class
                    called main. In React this is what you call a component instance.</p>
                <p>Below are different other component instances. They are either included in
                    main's render method directly, or they use references to each other to get
                    displayed here. Start off by taking a peek at src/index.js to get a feel for
                    what's going on.</p>
                <Example/>
                <JegLever/>
                <PropsExample peopleObj={peopleObj} doSmt={doSmt} tools={listTools}>
                    <h3>This is a child of the PropsExample class, passed as a prop directly within
                        it's tag</h3>
                    <p>This sentence is also a child - the second. Below an instance of the
                        PropsButtonExample class, is the third child of the PropsExample class:</p>
                    <PropsButtonExample onClick={this.handleEvent} title='Event from Min'/>
                </PropsExample>
                <p>The PropsButtonExample was displayed twice earlier as included by other
                    classes. Below it is instantiated all by itself, using default values for the eventHandler method as well as the button title:
                </p>
                <p className="button_example">
                    <PropsButtonExample/>
                </p>
                <StateClass />
            </div>
        )
    }
}

export class Example extends React.Component {
    handleEvent() {
        alert(`Hi from the class Example`);
    }

    render() {
        return (
            <div className='example'>
                <h2 onClick={this.handleEvent}>
                    Inline class
                </h2>
                <p>I am the example class, directly defined in index.js. A more usual way to
                    store component classes is in separate files, such as all the component
                    instances below me.</p>
                <p>If you click my heading, you will se my eventhandler function.</p>
                <p>But i will also pass my eventhandler to another component instance - namely
                    the PropsButtonExample class. So if you click the button below, MY eventhandler
                    will be called.</p>
                <p>
                    <PropsButtonExample onClick={this.handleEvent}/>
                </p>
            </div>
        );
    }
}

ReactDOM.render(
    <Main/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
