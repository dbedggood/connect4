import React from 'react'

function Square(props) {
  return(
    <div className='square'>
      <div className='circle'>{props.value ? props.value : "O"}</div>
    </div>
  )
}

export default Square