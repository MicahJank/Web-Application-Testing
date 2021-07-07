import React from 'react';

import Display from './components/display/Display.js';
import Dashboard from './components/dashboard/Dashboard.js';

import { Box, makeStyles } from '@material-ui/core';

class App extends React.Component {

  // here is the state that will keep track of all the different variables for the person at bat
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    outs: 0,
    hit: false,
    homeScore: 0,
    inning: 0,
    guestScore: 0,
    halfInning: 0
  }

  // componentDidMount() {

  // }

  componentDidUpdate(prevProps, prevState) {
    // the logic for the fouls. I need to check both that the state has changed AND that the fouls is not 0 because when the the fouls resets to 0 in the code block below this one
    // that will cause componentDidUpdate to get caled which will in turn check this logic again
    if( (prevState.fouls !== this.state.fouls) && (this.state.fouls !== 0)) {
      this.setState({
        strikes: this.state.strikes < 2 ? this.state.strikes + 1 : this.state.strikes 
      })
    }

    if(this.state.strikes === 3) {
      this.setState({
        outs: this.state.outs < 3 ? this.state.outs + 1 : 0
      })
    }

    if(this.state.outs === 3) {
      this.setState({
        outs: 0,
        halfInning: this.state.halfInning + 1
      })
    }

    if(this.state.halfInning === 2) {
      this.setState({
        inning: this.state.inning + 1,
        halfInning: 0
      })
    }

    // setting up the logic for the game, hit needs to get put back to false after resetting strikes and balls
    if( (this.state.strikes === 3) || (this.state.balls === 4) || (this.state.hit) ) {
      this.setState({
        strikes: 0,
        balls: 0,
        hit: false,
        fouls: 0
      })
    }
  }


  // Button handler functions
  addStrike = () => {
    this.setState({
      strikes: this.state.strikes + 1
    })
  }

  addBall = () => {
    this.setState({
      balls: this.state.balls + 1
    })
  }

  addFoul = () => {
    this.setState({
      fouls: this.state.fouls + 1
    })
  }

  toggleHit = () => {
    this.setState({
      hit: true
    })
  }

  render() {
    
    return (
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Display displayInfo={this.state} />
        <Dashboard addStrike={this.addStrike} addBall={this.addBall} addFoul={this.addFoul} toggleHit={this.toggleHit} />
      </Box>
    );
  }
}

export default App;
