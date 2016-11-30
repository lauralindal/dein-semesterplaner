import React from 'react';
import Login from './Login';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="row">
          <h1 className="four columns">Dein Semesterplaner</h1>
          <Login onLoginClick={this.props.onLoginClick} />
        </div>
      </header>
    )
  }
}

export default Header
