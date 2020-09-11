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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'blue',
      padding: '8px',
      color: 'white',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>React app</h1>
        <p>Working ?</p>
        <button style={style} onClick={() => this.switchNameHandler('Tomek')}>
          Switch Name
        </button>
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
          Hobby: Coding!
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
