import React,{Component} from 'react';
import './style.css';

export default class Score extends Component {
    render(){
        return(
            <div className="row">
                <div className="twelve columns centered">
                    <h1>{this.props.score}</h1>
                </div>
            </div>
        )
    }
}