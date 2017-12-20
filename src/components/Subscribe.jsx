import React from 'react';
import { Button, Input, Card, FormControl } from 'material-ui';

import { requestService } from '../utils/RequestService';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      zip_code: null
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

  handleSubmit(e) {
    e.preventDefault();
    const { email, zip_code } = this.state;
    requestService.subscribeUser(email, zip_code);
  }

  render() {
    return (
      <div className="container-center-items">
        <form onSubmit={e => this.handleSubmit(e)}>
          <Card className="login-card">
            <FormControl>
              <Input
                placeholder="Email"
                inputProps={{
                  onChange: e => this.handleInputChange(e),
                  name: 'email'
                }}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Zipcode"
                numeric="true"
                inputProps={{
                  onChange: e => this.handleInputChange(e),
                  name: 'zip_code'
                }}
              />
            </FormControl>
            <Button type="submit" raised color="primary">
              Subscribe
            </Button>
          </Card>
        </form>
      </div>
    );
  }
}

export default Subscribe;
