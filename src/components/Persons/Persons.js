import React from 'react'
import Person from './Person/Person'

const Persons = (props) => props.persons.map((person) => {
  return <Person
            key={person.id}
            name={person.name}
            team={person.team}
            inputOnChangeHandler={(evt) => props.inputChanged(evt,person.id)}
            deleteHandler={props.btnDelCliked.bind(this,person.id)}
          />
})

export default Persons