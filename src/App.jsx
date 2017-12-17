import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

import AppBar from './components/AppBar';
import Home from './components/Home';
import Login from './components/Login';
import Subscribe from './components/Subscribe';
import Tips from './components/Tips';
import TipDetail from './components/Tips/TipDetail';

import { authService } from './utils/AuthService';
import { requestService } from './utils/RequestService';
import { getCookie } from './utils/Cookie';

const PrivateRoute = ({ component: Component, addedProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthenticated ? (
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
      themeTips: null,
      interactionTips: null
    };
  }

  componentWillMount() {
    // Login with cookie
    const email = getCookie('email');
    const password = getCookie('password');
    if (email && password) {
      this.login(email, password);
    }
  }

  login = (username, password, remember) => {
    return authService
      .authenticate(username, password, remember, () => {
        this.setState({ isAuthenticated: true });
      })
      .then(success => success);
  };

  logout = () => {
    authService.signout(() => {
      this.setState({ isAuthenticated: false });
    });
  };

  getAllTips = () => {
    requestService
      .getThemeTips()
      .then(json => this.setState({ themeTips: json }));
    requestService
      .getInteractionTips()
      .then(json => this.setState({ interactionTips: json }));
  };

  render() {
    const { isAuthenticated, themeTips, interactionTips } = this.state;

    return (
      <Router>
        <div>
          <AppBar isAuthenticated={isAuthenticated} logout={this.logout} />
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
              exact
              path="/tips"
              component={Tips}
              addedProps={{
                getAllTips: this.getAllTips,
                themeTips,
                interactionTips
              }}
            />
            <PrivateRoute path="/tips/:type/:id" component={TipDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
