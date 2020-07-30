import React, { Component } from 'react';
import Swimmer from './swimmer'

class Swimmers extends Component {

    render() { 
        return (
          <div>
            <button
              onClick={this.props.onReset}
              className="btn btn-primary btn-sm m-2"
            >
              Reset
            </button>
            {this.props.swimmers.map((counter) => (
              <Swimmer
                key={counter.id}
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                counter={counter}
              >
                <h3>Swimmer #{counter.id}</h3>
              </Swimmer>
            ))}
          </div>
        );
    }
}
 
export default Swimmers;