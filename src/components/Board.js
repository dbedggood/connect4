import React from "react"
import Column from './Column'
import calcWinner from '../functions/calcWinner'
import redCoin from "../resources/c4r.png"
import yellowCoin from "../resources/c4y.png"

const red = redCoin
const yellow = yellowCoin

class Board extends React.Component {
  
  constructor(props) {

    super(props)

    this.state = {
      columns: new Array(7).fill(0).map(() => new Array(6).fill(null)),
      lastMove: [yellow, null, null],
      winner: null
    }

  }

  handleClick(colNum) {
    if (this.state.winner === null) {
      
      const newCols = this.state.columns.slice()
      let lastPlayer = this.state.lastMove[0]

      const level = newCols[colNum].filter(x => x !== null).length
      if (level >= 6) {return}

      lastPlayer = lastPlayer === red? yellow : red

      newCols[colNum][level] = lastPlayer

      this.setState({
          columns: newCols,
          lastMove: [lastPlayer, colNum, level]
        }, 
        () => {this.setState({winner: calcWinner(this.state.columns, this.state.lastMove)})}
      )

    } else {
      return
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

  render() {

    return (
      <div>
        <div className="game-board">
          {this.renderColumn(0)}
          {this.renderColumn(1)}
          {this.renderColumn(2)}
          {this.renderColumn(3)}
          {this.renderColumn(4)}
          {this.renderColumn(5)}
          {this.renderColumn(6)}
        </div>
        <p class={this.state.winner === null ? 'status' : 'status hidden'}>
          Next Turn: <img src={this.state.lastMove[0] === red ? yellow : red} alt='coin' /> 
        </p>

        <p class={this.state.winner !== null ? 'status' : 'status hidden'}>
          Winner: <img src={this.state.winner} alt='coin' /> 
        </p>
      </div>
      
    )

  }
  
}

export default Board