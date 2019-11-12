import React from 'react';
import Profils from '../../composants/Profils/Profils'
import SwitchProfil from '../../composants/SwitchProfil/SwitchProfil'

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
                    csuper: 2654,
                    id : 0
                },
                {
                    prenom : "Mark",
                    nom : "Zuckerberg",
                    date : "14 Mai 1984",
                    img : "https://upload.wikimedia.org/wikipedia/commons/e/e6/Mark_Zuckerberg_%287985185217%29.jpg",
                    background : "#67ba4e",
                    post : "Check your facebook",
                    csuper: 9845,
                    id : 1
                },
                {
                    prenom : "Steve",
                    nom : "Jobs",
                    date : "24 Février 1955",
                    img : "https://upload.wikimedia.org/wikipedia/commons/5/54/Steve_Jobs.jpg",
                    background : "#67ba4e",
                    post : "Si vous n'avez pas un Iphone, vous n'avez pas un Iphone",
                    csuper: 8362,
                    id : 2
                }
            ],
            personne_select : 0
        };

        this.changeStyle = this.changeStyle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.addSuper = this.addSuper.bind(this);
    }
         
        changeStyle(id_pers){

            if(this.state.profils[id_pers].background=="#67ba4e"){
		      this.state.profils[id_pers].background="#bc0e40";
		      this.setState({personne_select: id_pers});
            }
            
        }

        handleClick(id_p){
                    
                    this.setState({personne_select: id_p});
                }

        addSuper(id_pers){
            this.state.profils[id_pers].csuper = this.state.profils[id_pers].csuper +1;
            this.setState({personne_select: id_pers});
        }

    render(){
        return(
            <div>
                <SwitchProfil
                    p1 = {this.state.profils[0]}
                    p2 = {this.state.profils[1]}
                    p3 = {this.state.profils[2]}
                    handleClick = {this.handleClick}
                    id_pers = {this.state.personne_select}
                />

                <Profils 
                    personne = {this.state.profils[this.state.personne_select]}
                    changeStyle = {this.changeStyle}
                    addSuper = {this.addSuper}
                />
            </div> 
        );
    }
}
