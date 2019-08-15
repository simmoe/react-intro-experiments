import React from 'react';

export class PropsButtonExample extends React.Component {
    constructor(props) {
        super(props);
        this.handleEvent = this
            .handleEvent
            .bind(this);
    }
    handleEvent() {
        alert('button handled from my own default method (PropsButtonExample)')
    }
    render() {
        console.log(this.props.onClick === 'undefined')
        console.log(typeof this.props.onClick == 'undefined')

        return (
            <button onClick={typeof this.props.onClick =='undefined'?this.handleEvent:this.props.onClick}>{this.props.title}</button>
        )
    }
    static defaultProps = {
        onClick: this.handleEvent,
        title: 'click me'
    }
}