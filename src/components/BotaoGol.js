import React from 'react';

export default class BotaoGol extends React.Component{
   
    handleClick(event){
        event.preventDefault();
        this.props.marcarGol();
    }

    render(){
        return (
            <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Gol!</button>
        );
    }
}