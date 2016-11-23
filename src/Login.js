import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <div className="three columns">
          <label htmlFor="Username">Username</label>
          <input type="text" placeholder="Username" id="Username" />
        </div>
        <div className="three columns">
          <label htmlFor="Username">Password</label>
          <input type="password" placeholder="Password" id="Password" />
        </div>
        <div className="two">
          <label htmlFor="exampleEmailInput">&nbsp;</label>
          <input className="button-primary" type="submit" value="Login" />
        </div>
      </form>
    )
  }
}

export default Login
