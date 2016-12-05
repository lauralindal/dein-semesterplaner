import React from 'react';
import Login from './Login';

class Header extends React.Component {

  render() {
    const isLoggedIn = true;
    return (
      <header>
      <div className="row">
        <h1 className="four columns">Dein Semesterplaner</h1>
        {isLoggedIn ? (
          <button className="button-primary" type="button" value="Logout" />
        ) : (
          <Login performLogin={this.props.performLogin} />
        )}
      </div>
      </header>
    )
  }
}

export default Header
