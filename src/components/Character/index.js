import React, {Component} from 'react';
import './style.css';

export default class Character extends Component{
    render(){
        return(
        <div className="three columns character" id={this.props.id} 
        onClick={() => this.props.clickLogic(this.props.id)}>
            <img src={this.props.img} alt="img" className="thumbnail"></img>

        </div>);
    }
}