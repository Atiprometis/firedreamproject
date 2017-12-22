import React, { Component } from 'react';

import Home from './pages/index';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bulma/css/bulma.css';
import Register from './component/Register';
import Login from './component/Login';
import HeaderPages from './component/HeaderPages';
import Dashboard from './component/protected/Dashboard';
import { firebaseAuth } from './database/firebase'
import {logout} from './database/firebase'
import {Button}from 'react-bootstrap'

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (authed === false
        ? <Component {...props} />
        : <Redirect to="/dashboard" />)}
    />
  );
}

class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderPages />
          <Button onClick={() => {
                          logout()
                        }} bsStyle="warning">logout</Button>
          <Switch>
            <Route path="/" exact component={Home} />
            <PublicRoute authed={this.state.authed} path="/register" exact component={Register} />
            <PublicRoute authed={this.state.authed} path="/login" exact component={Login} />
            <PrivateRoute authed={this.state.authed} path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
