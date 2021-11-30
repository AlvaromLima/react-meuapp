//Aplicando Class Component
import React, { Component } from 'react';

class Equipe extends Component{
    render(){
        return(
            //obrigado ter o <div> senão dá erro
            <div>
                <Sobre nome={this.props.nome} 
                       cargo={this.props.cargo}
                       idade={this.props.idade}/>
                <Social fb={this.props.facebook} 
                        lk={this.props.linkedin} 
                        yt={this.props.youtube}/>
                <hr/>
            </div>
        )
    }    
}

class Sobre extends Component{
    render(){
        return(
            //obrigado ter o <div> senão dá erro
            <div>
                <h2>Nome: {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade} anos</h3>
            </div>
        )
    }    
}

const Social = (props) => {
    return(
        //obrigado ter o <div> senão dá erro
        <div>
            <a href={props.fb}>Facebook </a>
            <a href={props.lk}>LinkedIn </a>
            <a href={props.yt}>Youtube </a>
        </div>
    );
}

function App(){
    return(
        //obrigado ter o <div> senão dá erro
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Alvaro" cargo="Programador" idade="56"
                    facebook="https://google.com"
                    linkedin="https://linkedin.com"
                    youtube="https://youtube.com"/>
            <Equipe nome="Lucas" cargo="PO" idade="39"
                    facebook="https://google.com"
                    linkedin="https://linkedin.com"
                    youtube="https://youtube.com"/>
            <Equipe nome="Joyce" cargo="Designer" idade="33"
                    facebook="https://google.com"
                    linkedin="https://linkedin.com"
                    youtube="https://youtube.com"/>
        </div>
    );
}

export default App;
