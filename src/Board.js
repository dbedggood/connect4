import React from "react"
import Square from "./components/Square"
import red from "./resources/c4r.png"
import yellow from "./resources/c4y.png"

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [],
      redNext: true
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    if (squares[i]) {
      return
    }
    squares[i] = this.state.redNext ? red : yellow
    this.setState({
      squares: squares,
      redNext: !this.state.redNext
    })
  }

  renderSquare(i) {
    return (
      <Square 
        key={i}
        num={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  renderColumn(num) {
    let squares = []
    for (let i = num; i < num + 6; i++) {
      squares.push(this.renderSquare(i))
    }
    return squares
  }

  render() {
    const status = 'Next player: ' + (this.state.redNext ? 'Red' : 'Yellow')
 


    return (
      <div>
        <div className="column">
          {this.renderColumn(0)}
        </div>
        <div className="column">
          {this.renderColumn(6)}
        </div>
        <div className="column">
          {this.renderColumn(12)}
        </div>
        <div className="column">
          {this.renderColumn(18)}
        </div>
        <div className="column">
          {this.renderColumn(24)}
        </div>
        <div className="column">
          {this.renderColumn(30)}
        </div>
        <div className="column">
          {this.renderColumn(36)}
        </div>
        <div className="status">{status}</div>
      </div>
    );
  }
}

export default Board