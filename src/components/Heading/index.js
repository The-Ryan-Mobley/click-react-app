import React, {Component} from 'react';
import './style.css';

export default class Heading extends Component {
    render(){
        return(
            <div className='wrapper'>
                <header>
                    <div className='heading'>
                        <h1>Click-React-App</h1>
                    </div>
                </header>
                <div className="container">
                    {this.props.children}
                </div>
                <footer>
                <div className='heading'>
                        <h1>bottom text</h1>
                    </div>
                </footer>
            </div>

        );
    }
}