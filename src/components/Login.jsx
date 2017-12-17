import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Input,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel
} from 'material-ui';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      remember: false
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { username, password, remember } = this.state;

    if (username && password) {
      this.props.login(username, password, remember);
    }
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/tips' }
    };
    const { isAuthenticated } = this.props;
    const { remember } = this.state;

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container-center-items">
        <form>
          <Card className="login-card">
            <FormControl>
              <Input
                placeholder="Username"
                autoComplete="true"
                inputProps={{
                  name: 'username',
                  onChange: e => this.handleInputChange(e)
                }}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Password"
                autoComplete="true"
                inputProps={{
                  name: 'password',
                  type: 'password',
                  onChange: e => this.handleInputChange(e)
                }}
              />
            </FormControl>
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={remember}
                    name="remember"
                    onChange={e => this.handleInputChange(e)}
                  />
                }
                label="Remember me"
              />
            </FormControl>
            <Button
              type="submit"
              raised
              color="primary"
              onClick={e => this.onSubmit(e)}
            >
              Login
            </Button>
          </Card>
        </form>
      </div>
    );
  }
}

export default Login;
