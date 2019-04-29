import React from 'react';
import logo from './logo.svg';
import './App.css';

import ElapsedTime from './ElapsedTime';
import StartButton from './StartButton';
import StopButton from './StopButton';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: 0
    }
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <ElapsedTime timer={this.state.time} />
          <StartButton startTime={this._starter} />
          <StopButton stopTime={this._stopper} />
        </div>
        </header>
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this._incrementNumber()
    }, 10);
  }

  _incrementNumber = () => {
    if (this.state.start === 1) {
      this.setState({
        time: this.state.time + 1
      })
    }
  }

  _starter = () => {
    this.setState({
      start: 1
    })
  }

  _stopper = () => {
    this.setState({
      start: 0
    })
  }
}

export default App;
