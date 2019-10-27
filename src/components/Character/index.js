import React, {Component} from 'react';
import './style.css';

export default class Character extends Component{
    render(){
        return(
        <div className="character" id={this.props.id} 
        onClick={() => this.props.remove(this.props.id)}>
            <img src={this.props.img} alt="img"></img>

        </div>);
    }
}