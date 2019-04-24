import React, { Component } from 'react';

import PlacarContainer from './PlacarContainer'

const dados={
    partida:{
        estadio: "Maracanã/RJ",
        data: "24/04/2019",
        horario: "19h"
    },
    casa:{
        nome: "LDU"
    }
    ,
    visitante:{
        nome: "Flamengo"
    }
};

export default class App extends React.Component{
    
    render(){
        return (
            <div className="container">
                <div className="col-xs-12">
                <h1>Meu Placar Principal</h1>
                <div className="card">
                    <div className="card-body">
                        <PlacarContainer {...dados}/>
                    </div>
                </div>
                
                </div>
            </div>
            
        );
    }
}