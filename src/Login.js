import React from 'react';

class Login extends React.Component {
  render() {
    const { onLoginClick } = this.props;
    return (
      <form>
        <div className="three columns">
          <label htmlFor="Email">Email Address</label>
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="three columns">
          <label htmlFor="Username">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="two columns">
          <input onClick={onLoginClick} className="button-primary" type="button" value="Login" />
        </div>
      </form>
    )
  }
}

export default Login
