import React from 'react';
import Login from './Login';

class Header extends React.Component {

  chooseSignInStatus(isLoggedIn) {
    if (isLoggedIn) {
      return <button className="button-primary" type="button" value="Logout" />;
    }
    return <Login performLogin={this.props.performLogin} />;
  }

  render() {
    var isLoggedIn = hoodie.account.isSignedIn();
    return (
      <header>
      <div className="row">
        <h1 className="four columns">Dein Semesterplaner</h1>
        {this.chooseSignInStatus(isLoggedIn)}
      </div>
      </header>
    )
  }
}

export default Header
