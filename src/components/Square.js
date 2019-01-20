import React from 'react'

function Square(props) {
  const coin = props.value ? <img src={props.value} alt="coin"/> : null
  return(
    <div className='square'>
      <div className='circle'>{coin}</div>
    </div>
  )
}

export default Square