import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Input, Card, FormControl } from 'material-ui';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isAuthenticated, login } = this.props;
    const { username, password } = this.state;

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <div className="login">
        <Card className="login-card">
          <FormControl>
            <Input
              placeholder="Username"
              inputProps={{
                name: 'username',
                onChange: e => this.handleInputChange(e)
              }}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Password"
              inputProps={{
                name: 'password',
                type: 'password',
                onChange: e => this.handleInputChange(e)
              }}
            />
          </FormControl>
          <Button
            raised
            color="primary"
            onClick={() => login(username, password)}
          >
            Login
          </Button>
        </Card>
      </div>
    );
  }
}

export default Login;
