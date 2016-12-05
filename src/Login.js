import React from 'react';

class Login extends React.Component {
  render() {
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
          <input className="button-primary" type="submit" value="Login" />
        </div>
      </form>
    )
  }
}

export default Login
