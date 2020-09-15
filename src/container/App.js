import React, { Component } from 'react';
import './App.css';
// import Person from '../components/Persons/Person/Person';
import styled from 'styled-components';
import Persons from '../components/Persons/Persons';

const StyledButton = styled.button`
  background-color: green;
  padding: 8px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'das1', name: 'tomm', age: 28 },
      { id: 'sad2', name: 'pitt', age: 29 },
      { id: 'das3', name: 'brad', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: [
        { name: 'asd', age: 28 },
        { name: 'Toms', age: 29 },
        { name: 'Pitts', age: 27 },
      ],
    });
  };

  nameChangedHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  deletePerson = (personIndex) => {
    // const persons = this.state.persons.slice;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePerson}
            changed={this.switchNameHandler}
          />
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>React app</h1>
        <p className={classes.join(' ')}>Working ?</p>
        <StyledButton onClick={this.nameChangedHandler}>
          Show Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
