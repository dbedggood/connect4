function calcWinner(game, lastMove) {

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

    let count = 0

    // Horizontal Win Check
    for (let i = -3; i < 4; i++) {
      if (borderedGame[column + i][row] === colour) {
        count++

        if (count >=4) {
          return colour
        }

      } else {
        count = 0
      }
    }

    // Vertical Win Check
    for (let i = -3; i < 4; i++) {
      if (borderedGame[column][row + i] === colour) {
        count++

        if (count >=4) {
            return colour
        }

      } else {
        count = 0
      }
    }

    // Diagonal (Bottom Left -> Top Right) Win Check
    for (let i = -3; i < 4; i++) {
      if (borderedGame[column + i][row + i] === colour) {
        count++

        if (count >=4) {
            return colour
        }

      } else {
        count = 0
      }
    }

    // Diagonal (Top Left -> Bottom Right) Win Check
    for (let i = -3; i < 4; i++) {
      if (borderedGame[column + i][row - i] === colour) {
        count++

        if (count >=4) {
          return colour
        }

      } else {
        count = 0
      }
    }

    return null

}

export default calcWinner