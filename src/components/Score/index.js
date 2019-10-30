import React,{Component} from 'react';
import './style.css'; //style for main divs
//styles for guesses

export default class Score extends Component {
    
    
    render(){
        

        return(
            <div className="row">
                <div className={`twelve columns centered ${this.props.checkClass}`}>
                    <h1 className="scoreTag">{this.props.feedBack}</h1>
                    <h1 className="scoreTag">{this.props.score}</h1>
                </div>
            </div>
        )
    }
}