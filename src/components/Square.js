import React from "react"

function Square(props) {
  let val
  if (props.value) {
    val = <img src={props.value} alt="coin"/>
    
  } else {
    val = props.num
  }

  return (
    <button className="square" onClick={props.onClick}>
      <div className="circle">
        {val}
      </div>
    </button>
  )
}

export default Square