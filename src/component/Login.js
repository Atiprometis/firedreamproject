import React from 'react';
import { login, resetPassword } from '../database/firebase';
import '../css/login.css'
import {Link} from 'react-router-dom'
function setErrorMsg(error) {
  return {
    loginMessage: error,
  };
}

class Login extends React.Component {
 state = { loginMessage: null }
    handleSubmit = (e) => {
        e.preventDefault()
        login(this.email.value, this.pw.value)
          .catch((error) => {
              this.setState(setErrorMsg('Invalid username/password.'))
            })
      }
      resetPassword = () => {
        resetPassword(this.email.value)
          .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
          .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
      }

  render() {
    return (
    <div className="wrapper-all"> 
      <div className="col-sm-6 col-sm-offset-3 login-margin">
        <h1 className="Login-style"> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label></label>
            <input className="form-control" ref={email => this.email = email} placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={pw => this.pw = pw} />
          </div>
          {
                this.state.loginMessage &&
                <div className="alert alert-danger" role="alert">
                  <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
                  <span className="sr-only">Error:</span>
                  {/* &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a> */}
                </div>
              }
          <button type="submit" className="btn btn-primary">Login</button>
          <Link to="/register">Sign in</Link>
        </form>
      </div>
    </div>   
    );
  }
}

export default Login;
