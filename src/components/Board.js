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
      lastMove: [yellow, null, null]
    }

  }

  calcWinner(game, lastMove) {

    const colour = lastMove[0]
    const column = lastMove[1] + 3
    const row = lastMove[2] + 3

    let borderedGame = game.slice()
    const gap = [null, null, null]
    
    for (let i=0; i < borderedGame.length; i++) {
      borderedGame[i] = gap.concat(borderedGame[i]).concat(gap)
    }

    const border = new Array(borderedGame[0].length).fill(null)
    borderedGame.push(border, border, border)
    borderedGame.unshift(border, border, border)

    console.log(borderedGame)
    console.log(colour + " " + column + " " + row)

    let count = 0
    for (let i = -3; i < 4; i++) {
      if (borderedGame[column + i][row] === colour) {
        count++
      }
    }

    if (count >= 4) {
      alert("Winner")
    }

  }

  handleClick(colNum) {

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
      () => {this.calcWinner(this.state.columns, this.state.lastMove)}
    )

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
      <div className="game-board">
          {this.renderColumn(0)}
          {this.renderColumn(1)}
          {this.renderColumn(2)}
          {this.renderColumn(3)}
          {this.renderColumn(4)}
          {this.renderColumn(5)}
          {this.renderColumn(6)}
      </div>
    )

  }
  
}

export default Board