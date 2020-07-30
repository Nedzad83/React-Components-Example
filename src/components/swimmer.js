import React, { Component } from 'react';

class Swimmer extends Component {
    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    render() { 
        // console.log("props", this.props);
        return (
          <div>
            <div className="container">
               {this.props.children}

              <span>Number classes: </span>
              <span className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
              <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm"
              >
                Increment
              </button>
              <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2"
              >
                Delete
              </button>
              <span></span>
            </div>
            <div>
              <br></br>
              <br></br>
            </div>
          </div>
        );
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() { 
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Swimmer;