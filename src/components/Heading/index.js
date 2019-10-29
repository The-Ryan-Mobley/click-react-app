import React, {Component} from 'react';
import './style.css';

export default class Heading extends Component {
    render(){
        return(
            <header>
                <div className='row heading'>
                    <h1>Click-React-App</h1>
                </div>
            </header>
        );
    }
}