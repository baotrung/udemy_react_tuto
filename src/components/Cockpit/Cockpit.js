import React from 'react'

const cockpit = (props) => (
  <div>
    <h1>ReactJs Tutorial</h1>
    <p>a React beginner who wanna be a React expert</p>
    <button className={props.btnToggleCls} onClick={props.toggleViewPersonsHandler}>{props.btn_label}</button>
  </div>
)


export default cockpit