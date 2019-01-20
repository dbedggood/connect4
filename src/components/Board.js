import React from "react"
import Column from './Column'
import redCoin from "../resources/c4r.png"
import yellowCoin from "../resources/c4y.png"

const red = redCoin
const yellow = yellowCoin

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: new Array(7).fill(0).map(() => new Array(6).fill(null)),
      turn: red
    }
  }

  renderColumn(colNum) {
    return (
      <Column 
        value={this.state.columns[colNum]}
        onClick={() => this.handleClick(colNum)}
       />
    )
  }

  handleClick(colNum) {
    const newCols = this.state.columns.slice();
    let nextPlayer = this.state.turn

    const level = newCols[colNum].filter(x => x !== null).length
    if (level >= 6) {return}

    newCols[colNum][level] = nextPlayer
    nextPlayer = nextPlayer == red? yellow : red
    this.setState({
      columns: newCols,
      turn: nextPlayer
    })
    
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