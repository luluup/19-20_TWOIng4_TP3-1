import React, { Component } from 'react';
import BoutonProfil from './BoutonProfil'
import './SwitchProfil.css'

class SwitchProfil extends Component {
    render() {
        return (

        <nav>
            <ul>

                <li> 
                    <BoutonProfil       
                        p = {this.props.p1}      
                        handleClick = {this.props.handleClick}     
                        p_num={this.props.p_num}
                    />
                </li>
        
                <li>
                    <BoutonProfil      
                        p = {this.props.p2}         
                        handleClick = {this.props.handleClick}
                        p_num={this.props.p_num}     
                    />
                </li>
        
                <li>
                    <BoutonProfil 
                        p = {this.props.p3} 
                        handleClick = {this.props.handleClick}
                        p_num={this.props.p_num}
                    />
                </li>

            </ul> 
        </nav>
        );
    }
}

export default SwitchProfil;