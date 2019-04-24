import React from 'react';


export default class Partida extends React.Component{
   

    render(){
        return (
            <div>
                <h1>{this.props.estadio}</h1>
                <div>
                    <span>{this.props.data}</span>
                    <span> - </span>
                    <span>{this.props.horario}</span>
                </div>
            </div>
        );
    }
}