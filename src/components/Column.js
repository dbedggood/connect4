import React from 'react'
import Square from './Square'

function Column(props) {
    return(
        <div className='column' onClick={() => alert('clicked column ' + props.value)}>
            <Square value={props.value} />
            <Square value={props.value} />
            <Square value={props.value} />
            <Square value={props.value} />
            <Square value={props.value} />
            <Square value={props.value} />
        </div>
    )
}

export default Column