import React, { Component } from 'react';
import './BoutonProfil.css'

class BoutonProfil extends Component {
    render() {
			return(
			<button type="button" class="btnp" onClick={() => this.props.handleClick(this.props.p.id)}> {this.props.p.prenom} </button>
			);
		}
}

export default BoutonProfil;