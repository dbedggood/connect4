function calcWinner(game, lastMove) {

  const colour = lastMove[0]
  const column = lastMove[1] + 3
  const row = lastMove[2] + 3

  let borderedGame = game.slice()
  const gap = [null, null, null]

  for (let i = 0; i < borderedGame.length; i++) {
    borderedGame[i] = gap.concat(borderedGame[i]).concat(gap)
  }

  const border = new Array(borderedGame[0].length).fill(null)
  borderedGame.push(border, border, border)
  borderedGame.unshift(border, border, border)

  let leftToRight = 0
  let topToBottom = 0
  let bottomLeftToTopRight = 0
  let topLeftToBottomRight = 0

  for (let i = -3; i < 4; i++) {
    if (borderedGame[column + i][row] === colour) {
      leftToRight++
      if (leftToRight >= 4) {return colour}
    } else {
      leftToRight = 0
    }

    if (borderedGame[column][row + i] === colour) {
      topToBottom++
      if (topToBottom >= 4) {return colour}
    } else {
      topToBottom = 0
    }

    if (borderedGame[column + i][row + i] === colour) {
      bottomLeftToTopRight++
      if (bottomLeftToTopRight >= 4) {return colour}
    } else {
      bottomLeftToTopRight = 0
    }

    if (borderedGame[column + i][row - i] === colour) {
      topLeftToBottomRight++
      if (topLeftToBottomRight >= 4) {return colour}
    } else {
      topLeftToBottomRight = 0
    }
  }

  return null

}

export default calcWinner