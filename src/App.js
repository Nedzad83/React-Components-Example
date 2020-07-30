import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar';
import './App.css';
import Swimmers from './components/swimmers'

class App extends Component {

  state = {
    swimmers: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 2 }
    ]
  };

  handleIncrement = counter => {
    //console.log(counter);
    const swimmers = [...this.state.swimmers];
    const index = swimmers.indexOf(counter);
    swimmers[index] = { ...counter };
    swimmers[index].value++;
    this.setState({ swimmers });
  };

  handleDelete = counterId => {
    const swimmers = this.state.swimmers.filter(x => x.id !== counterId);
    this.setState({ swimmers });
    // console.log('Event handler called', counterId);
  };

  handleReset = () => {
    const swimmers = this.state.swimmers.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ swimmers });
  };

  render() {
    return (
      <div>
        <NavBar totalSwimmers={this.state.swimmers.filter( c => c.value > 0).length}/>
        <main className="container">
          <Swimmers
            swimmers={this.state.swimmers}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          ></Swimmers>
        </main>
      </div >
    );
  };
}

export default App;
