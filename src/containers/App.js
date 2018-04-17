import React, { Component } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state={
    persons:[
      {id:'dsflljkj', name:'Rooney' , team: 'Everton'},
      {id:'dqsfdsf', name:'Ronaldo' , team: 'Real madrid'},
      {id:'hzopozegf', name:'Messi' , team: 'Barcelona'},
    ],
    viewPersons: false
  }

  changeTeamHandler = (evt,id) => {
    const index = this.state.persons.findIndex((p) => {
      return p.id === id
    })
    let persons = [...this.state.persons]
    persons[index].team = evt.target.value
    this.setState({
      persons:persons
    })
  }

  toggleViewPersonsHandler = () => {
    this.setState({
      viewPersons: !this.state.viewPersons
    })
  }

  delPersHandler = (id) => {
    const index = this.state.persons.findIndex((p) => {
      return p.id === id
    })
    let persons = [...this.state.persons]
    persons.splice(index,1)
    this.setState({
      persons:persons
    })
  }

  render() {

    let btn_label = 'view'
    let persons = null
    let btnToggleCls = classes.ToggleBtn_A

    if(this.state.viewPersons){
      btn_label = 'hide'
      btnToggleCls = classes.ToggleBtn_B
      persons = (
        <div>
          <Persons 
            persons={this.state.persons} 
            inputChanged={this.changeTeamHandler}
            btnDelCliked={this.delPersHandler}
          />
        </div>
      )
    }

    const cockpit = <Cockpit 
                      btn_label={btn_label}
                      btnToggleCls={btnToggleCls}
                      toggleViewPersonsHandler={this.toggleViewPersonsHandler}
                    />
    return (
      <div className={classes.App}>
        {cockpit}
        {persons}
      </div>
    );
  }
}

export default App
