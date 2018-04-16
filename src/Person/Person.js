import React from 'react'
import styles from './Person.css'

const person = (props) => {
  return(
    <div className={styles.Person}>
      <input type="text" onChange={props.inputOnChangeHandler} value={props.team}/>
      <p>{props.name} play for {props.team}</p>
      <button onClick={props.deleteHandler}>delete</button>
    </div>
  )
}

export default person