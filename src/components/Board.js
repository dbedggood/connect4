import React from "react"
import Column from './Column'
import redCoin from "../resources/c4r.png"
import yellowCoin from "../resources/c4y.png"

const red = redCoin
const yellow = yellowCoin

class Board extends React.Component {
  renderColumn(i) {
    return <Column value={i} />
  }

  render() {
    return (
      <div className="game-board">
          {this.renderColumn(0)}
          {this.renderColumn(1)}
          {this.renderColumn(2)}
          {this.renderColumn(3)}
          {this.renderColumn(4)}
          {this.renderColumn(5)}
          {this.renderColumn(6)}
      </div>
    );
  }
}

export default Board