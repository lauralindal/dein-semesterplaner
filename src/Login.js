import React from 'react';

class Login extends React.Component {

  onLoginClick() {
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    const { performLogin } = this.props;
    //TODO Datenvalidierung
    performLogin(email, password);
  }

  render() {
    const { onLoginClick } = this.props;
    return (
      <form>
        <div className="three columns">
          <label htmlFor="Email">Email Address</label>
          <input ref="email" type="email" placeholder="Email Address" required/>
        </div>
        <div className="three columns">
          <label htmlFor="Username">Password</label>
          <input ref="password" type="password" placeholder="Password" required/>
        </div>
        <div className="two columns">
          <input onClick={this.onLoginClick.bind(this)} className="button-primary" type="button" value="Login" />
        </div>
      </form>
    )
  }
}

export default Login
