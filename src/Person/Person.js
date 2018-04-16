import React from 'react'
import './Person.css'

const person = (props) => {
  return(
    <div className="person">
      <input type="text" onChange={props.inputOnChangeHandler} value={props.team}/>
      <p>{props.name} play for {props.team}</p>
      <button onClick={props.deleteHandler}>delete</button>
    </div>
  )
}

export default person