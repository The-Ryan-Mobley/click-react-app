import React, {Component} from 'react';
import logo from './logo.svg';
import Character from './components/Character';
import imgBox from "./imgBox.json";
import Score from './components/Score';
import './App.css';

class App extends Component {
  
  state = {
   imgBox,
   clickedList: [],
   scoreCount: 0
  };
  
  cycle = id => { //shuffles the array and sets clicked to true
     let imgBox = this.shuffleArr(this.state.imgBox);

     imgBox.map(i => { 
        if(i.id === id){
          i.clicked = true;
          this.state.clickedList.push(id);
        }
      });
    this.setState({ imgBox });
  };
  scoreUp = id => {
    console.log("line 28");
    console.table(this.state);
    if(this.state.clickedList.indexOf(id) === -1){
      let scoreCount = this.state.scoreCount;
      scoreCount++;
      this.setState({scoreCount});
      
    } else {
      let clickedList = [];
      let scoreCount = 0;
      this.setState({clickedList, scoreCount});
    }
  }
  clickLogic = id =>{
    console.log("hello");
    this.scoreUp(id);
    this.cycle(id);
    
  }

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
      <Score score={this.state.scoreCount}/>
      <div className="row">
        <div className="twelve columns">
        {this.state.imgBox.map(ib => (
          <Character
            key={ib.id}
            clickLogic={this.clickLogic}
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
