import React, { Component } from 'react';
import Jumbotron from "../src/components/jumbotron";
import './App.css';
import friends from "./friends.json";
import ImageCard from "./components/card";
import Wrapper from "./components/wrapper";

class App extends Component {

  state = {
    friends,
    selected: [],
    score: 0,
    topscore: 0
  };

  shuffle = id => {
    this.setState({
      friends: this.state.friends.sort(function(a,b){
        return 0.5 - Math.random();
      })
    })
  }

  game_logic = id => {
    let sel_id = this.state.selected
    const incorrect = sel_id.includes(id);
    if(!incorrect)
    {
      this.state.selected.push(id);
      let tmpScore = this.state.score + 1;
      this.setState({score: tmpScore});

    }
    else
    {
      if (this.state.topscore < this.state.score)
      {
        this.setState({
          topscore: this.state.score,
          score: 0,
          selected: []
        });
      }
      else
      {
        this.setState({
          score: 0,
          selected: []
        });
      }
    }
  }

  render() {
    return (
      <div className="container-fluid">
      <Jumbotron
        score={this.state.score}
        topscore={this.state.topscore}
      />
      <Wrapper>
      {this.state.friends.map((friends,i) => (
        <ImageCard
        id={friends.id}
        key={friends.id}
        name={friends.name}
        image={friends.image}
        shuffle={this.shuffle}
        game_logic={this.game_logic}
        />
      ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;