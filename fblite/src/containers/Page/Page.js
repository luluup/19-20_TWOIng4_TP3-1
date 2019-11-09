import React from 'react';
import Profils from '../Profils/Profils'

export default class Page extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            profils : [
                {
                    prenom : "Greta",
                    nom : "Thunberg",
                    date : "3 Janvier 2003",
                    img : "https://starsinformer.com/wp-content/uploads/2019/04/Greta-Thunberg.jpg",
                    background : "#67ba4e",
                    post : "How dare you ?",
                    id : 0
                },
                {
                    prenom : "Greta",
                    nom : "Thunberg",
                    date : "",
                    img : "",
                    background : "",
                    post : "",
                    id : 1
                },
                {
                    prenom : "Greta",
                    nom : "Thunberg",
                    date : "",
                    img : "",
                    background : "",
                    post : "",
                    id : 2
                }
            ],
            personne_select : 0
        };
    }

    render(){
        return(
            <div className = "Page">
                <Profils 
                personne = {this.state.profils[this.state.personne_select]}
                />
            </div> 
        )
    }
}