import React from 'react';
import Login from './Login';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="row">
          <h1 className="four columns">Dein Semesterplaner</h1>
          <Login />
        </div>
      </header>
    )
  }
}

export default Header
