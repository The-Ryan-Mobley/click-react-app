import React, {Component} from 'react';
import './style.css';

export default class Character extends Component{
    

    render(){
        console.log(this.props.checkClass);
        
        return(
        <div className={`three columns character ${this.props.checkClass}-anim`} id={this.props.id} 
        onClick={() => this.props.clickLogic(this.props.id)}>
            <img src={this.props.img} alt="img" className="thumbnail"></img>

        </div>);
    }
}