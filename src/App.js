import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

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
    let style = {
      backgroundColor: 'green',
      width: '200px',
      height: '50px',
      fontSize: '20px'
    }


    let btn_label = 'view'
    let persons = null
    if(this.state.viewPersons){
      btn_label = 'hide'
      style.backgroundColor = 'red'
      persons = (
        this.state.persons.map((person) => {
          return <Person
                    key={person.id}
                    name={person.name}
                    team={person.team}
                    inputOnChangeHandler={(evt) => this.changeTeamHandler(evt,person.id)}
                    deleteHandler={this.delPersHandler.bind(this,person.id)}
                  />
        })
      )
    }
    return (
      <div className="App">
        <h1>ReactJs Tutorial</h1>
        <p>a React beginner who wanna be a React expert</p>
        <button style={style} onClick={this.toggleViewPersonsHandler}>{btn_label}</button>
        {persons}
      </div>
    );
  }
}

export default App
