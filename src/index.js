import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import Board from "./components/Board";

class Game extends React.Component {
  render() {
    return (
        <div className="game">
          <Board />
        </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);