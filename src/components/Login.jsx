import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isAuthenticated, login } = this.props;

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>Login</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }
}

export default Login;
