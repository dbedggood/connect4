import React from 'react'
import Square from './Square'

function Column(props) {
    return(
        <div className='column' onClick={() => props.onClick()}>
            <Square value={props.value[5]} />
            <Square value={props.value[4]} />
            <Square value={props.value[3]} />
            <Square value={props.value[2]} />
            <Square value={props.value[1]} />
            <Square value={props.value[0]} />
        </div>
    )
}

export default Column