import React, { Component } from 'react';
import './BoutonProfil.css'

class BoutonProfil extends Component {
    render() {
        if(this.props.p_num==this.props.p.id){
			return (
				<button type="button" class="btnp" onClick={() => this.props.handleClick(this.props.p.id)}>{this.props.p.prenom}</button>
				);
		}

		else{
			return(
			<button type="button" class="btnp" onClick={() => this.props.handleClick(this.props.p.id)}> {this.props.p.prenom} </button>
			);
		}
    }
}

export default BoutonProfil;