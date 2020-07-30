import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                    Total number of swimmers:  <span className="badge badge-pill badge-secondary">{this.props.totalSwimmers}</span>
            </a>
          </nav>
         );
    }
}
 
export default NavBar;