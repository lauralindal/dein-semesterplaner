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
      <form className="row">
        <div className="two columns">
          <label htmlFor="Email">Email Address</label>
          <input ref="email" type="email" placeholder="Email Address" required/>
        </div>
        <div className="two columns">
          <label htmlFor="Username">Password</label>
          <input ref="password" type="password" placeholder="Password" required/>
        </div>
        <div className="two columns">
          <label htmlFor="submit">&nbsp;</label>
          <input ref="submit" onClick={this.onLoginClick.bind(this)} className="button-primary" type="button" value="Login" />
        </div>
      </form>
    )
  }
}

export default Login
