import React from 'react';

export class PropsExample extends React.Component {
    render() {
        //Iterate
        console.log(this.props);
        const people = this
            .props
            .peopleObj
            .map(p => (
                <li key={p.name}>{p.name}
                    : {p.experience}</li>
            ));
        const listTools = this
            .props
            .tools
            .map((val, key) => (
                <li key={key}>{val}</li>
            ))

        const showMe = this.props.doSmt
            ? <p>Woohoo, I can: do something?</p>
            : <p>Ufff, I'm not allowed to show off</p>

        return (
            <div className="props">
                <h2>PropsExample class</h2>
                <p>The stuff displayed below, is information this class has been passed via
                    props. The first couple of paragraphs are "children" - elements written directly
                    in Main:</p>
                <div>{this.props.children}</div>
                <hr/>
                <p>The following list is a passed prop in the form of an array of js objects:</p>
                <p>{people}</p>
                <p>The following sentence only shows, if the prop doSmt is true:</p>
                <p>{showMe}</p>
                <p>And last a list of key value pairs from a passed prop array:</p>
                <ol>{listTools}</ol>
            </div>
        );
    }
}
