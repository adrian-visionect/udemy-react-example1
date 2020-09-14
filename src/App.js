import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'tomm', age: 28 },
      { name: 'pitt', age: 29 },
      { name: 'brad', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
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

  render() {
    const style = {
      backgroundColor: 'blue',
      padding: '8px',
      color: 'white',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Pitssss')}
            changed={this.nameChangedHandler}
          >
            Hobby: Coding!!
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React app</h1>
        <p>Working ?</p>
        <button style={style} onClick={this.nameChangedHandler}>
          Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
