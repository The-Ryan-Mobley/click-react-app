import React, {Component} from 'react';
import './style.css';

export default class Heading extends Component {
    render(){
        return(
            <div className='wrapper'>
                <header>
                    <div className='heading'>
                        <h1 className='title'>Click-React-App</h1>
                    </div>
                </header>
                <div className="container">
                    {this.props.children}
                </div>
                <footer>
                    <div className="credits" >
                        <a href="https://nameless-dawn-61725.herokuapp.com">Created by Ryan Mobley</a>
                        <div className="git-wrapper">
                            <a href="https://github.com/The-Ryan-Mobley" className="git-link" >
                                <img className="git-pic" alt="git" src="images/github.png"></img>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}