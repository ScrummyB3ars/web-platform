import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

import AppBar from './components/AppBar';
import Home from './components/Home';
import Login from './components/Login';
import Subscribe from './components/Subscribe';
import Tips from './components/Tips';

import { fakeAuth } from './utils/AuthService';
import { requestService } from './utils/RequestService';

const PrivateRoute = ({ component: Component, addedProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...addedProps} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      tips: null
    };
  }

  login = (username, password) => {
    fakeAuth.authenticate(() => {
      this.setState({ isAuthenticated: true });
    });
  };

  getAllTips = () => {
    requestService.getAllTips().then(json => this.setState({ tips: json }));
  };

  render() {
    const { isAuthenticated, tips } = this.state;

    return (
      <Router>
        <div>
          <AppBar isAuthenticated={isAuthenticated} />
          <div className="app">
            <Route exact path="/" component={Home} />
            <Route path="/subscribe" component={Subscribe} />
            <Route
              path="/login"
              render={props => (
                <Login
                  isAuthenticated={isAuthenticated}
                  login={this.login}
                  {...props}
                />
              )}
            />
            <PrivateRoute
              path="/tips/:id?"
              component={Tips}
              addedProps={{ getAllTips: this.getAllTips, tips }}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
