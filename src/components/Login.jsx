import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Input, Card, CardContent, FormControl } from 'material-ui';

class Login extends React.Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isAuthenticated, login } = this.props;

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <div className="login">
        <Card className="login-card">
          <FormControl>
            <Input placeholder="Username" />
          </FormControl>
          <FormControl>
            <Input placeholder="Password" inputProps={{ type: 'password' }} />
          </FormControl>
          <Button raised color="primary" onClick={login}>
            Login
          </Button>
        </Card>
      </div>
    );
  }
}

export default Login;
