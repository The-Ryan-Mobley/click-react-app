import React, {Component} from 'react';
import logo from './logo.svg';
import Character from './components/Character';
import imgBox from "./imgBox.json";
import './App.css';

class App extends Component {
  
  state = {
   imgBox
  };
 
  remove = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const imgBox = this.state.imgBox.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ imgBox });
  };
  render(){
  return (
    <div className="App container">
      <div className="row">
        <div className="twelve columns">
        {this.state.imgBox.map(ib => (
          <Character
            remove={this.remove}
            id={ib.id}
            img={ib.image}
            
          />
        ))}

        </div>
      </div>
      
    </div>
  );
  }
}

export default App;
