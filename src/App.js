import React, {Component} from 'react';
import Character from './components/Character';
import imgBox from "./imgBox.json";
import Score from './components/Score';
import Heading from './components/Heading';
import './App.css';

class App extends Component {
  
  state = {
   imgBox,
   clickedList: [],
   scoreCount: 0,
   feedBack: "Select an Image!",
   correct: true
  };
  
  cycle = id => { //shuffles the array and sets clicked to true
     let imgBox = this.shuffleArr(this.state.imgBox);

     imgBox.forEach(i => { 
        if(i.id === id){
          i.clicked = true;
          this.state.clickedList.push(id);
        }
      });
    this.setState({ imgBox });
  };
  scoreUp = id => {
    if(this.state.clickedList.indexOf(id) === -1){
      let scoreCount = this.state.scoreCount;
      scoreCount += 1 * (this.state.clickedList.length + 1);
      let feedBack = "Great!";
      this.setState({scoreCount, feedBack, correct: true});
      
    } else {
      let clickedList = [];
      let scoreCount = this.state.scoreCount - (2 * (this.state.clickedList.length + 1));
      let feedBack = "Fail!";
      this.setState({clickedList, scoreCount, feedBack, correct: false});
    }
    if(this.state.clickedList.length > 6){
      let clickedList = [];
      this.setState({clickedList});
    }
    console.table(this.state.correct);
  }
  clickLogic = id =>{
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
    let checkClass = "";
    this.state.correct ? checkClass = "correct" : checkClass = "wrong";
    console.log(checkClass);
  return (
    <div className="App">
      <Heading>
          <Score score={this.state.scoreCount} feedBack={this.state.feedBack} checkClass={checkClass}/>
          <div className="row">
            <div className="twelve columns content">
            {this.state.imgBox.map(ib => (
            <Character
              key={ib.id}
              clickLogic={this.clickLogic}
              id={ib.id}
              img={ib.image}
              checkClass={checkClass}
            />
            ))}

            </div>
        </div>
      </Heading>
    </div>
  );
  }
}

export default App;
