import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board.js';
import Menu from './Menu.js';
import 'bootstrap/dist/css/bootstrap.css';
var _ = require('lodash');


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 33
    };
  }
  handleGeneration = (initial) => {
    this.setState({initial: initial});
  };

  render() {
    return (<div className="game">
      <div className="game-board">
        <Board key={_.random(0, 10000)} initial={this.state.initial}/>
        <div className="game-menu">
          <Menu onGenerate={this.handleGeneration}/>
        </div>
      </div>

    </div>);
  }
}

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minute: 0, second: 0 };
  }

  render() {
    return (
      <div className="stopwatch">
        {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}:{this
          .state.second < 10
          ? "0" + this.state.second
        : this.state.second}
      </div>
    );
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => {
        return {
          minute: state.second == 59 ? state.minute + 1 : state.minute,
          second: state.second == 59 ? 0 : state.second + 1
        };
      });
    }, 1000);
  }
  
}


ReactDOM.render(<StopWatch />, document.getElementById("root1"));
ReactDOM.render(<Game/>, document.getElementById('root'));
