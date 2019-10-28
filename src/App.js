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
    
    //const imgBox = this.state.imgBox.filter(image => image.id !== id);
    const imgBox = this.shuffleArr(this.state.imgBox);
    //needs to randomly append elements
    
    this.setState({ imgBox });
  };
  shuffleArr = arr =>{
    let currentIndex = arr.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return arr;
  
  }
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
