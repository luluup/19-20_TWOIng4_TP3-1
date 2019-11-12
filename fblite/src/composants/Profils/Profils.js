import React from 'react';
import './Profils.css';

export default class Profils extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "Profils">

                <div className = "Personne" style = {{backgroundColor : this.props.personne.background}}>
                    <div class = "wrapper">
                        <img className = "ProfilPic" src={this.props.personne.img} alt="Photo de profil"></img>
                        <div className = "mesCol">
                            <div class = "Prenom"><b>Prénom :</b> {this.props.personne.prenom} </div>
                            <div class = "Date"><b>Date de naissance :</b> {this.props.personne.date} </div>
                            <div class = "Nom"><b>Nom :</b> {this.props.personne.nom} </div>
                        </div>
                        <button type="button" class="btnStyle" onClick = {() => this.props.changeStyle(this.props.personne.id)}>Changer de style</button>
                    </div>
                </div>

                <div className = "Publi">
                <div class = "Post"><b>Dernière publication :</b> {this.props.personne.post} </div>
                <button type="button" class="btnTop" onClick = {() => this.props.addSuper(this.props.personne.id)}> {this.props.personne.csuper} 👍 C'est super</button>
                </div>

            </div>
        )
    }
}