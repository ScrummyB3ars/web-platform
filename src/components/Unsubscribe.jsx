import React from 'react';
import { Button, Card, FormControl } from 'material-ui';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';

import { requestService } from '../utils/RequestService';

class Unsubscribe extends React.Component {
  constructor(props) {
    super(props);
    const search = props.location.search;
    const params = new URLSearchParams(search);
    const email = params.get('email');
    this.state = {
      email: email || ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    requestService
      .deleteSubscriber(this.state.email)
      .then(() => console.log('Sucessfully unsubscribed'));
  }

  render() {
    return (
      <div className="container-center-items">
        <ValidatorForm onSubmit={e => this.handleSubmit(e)}>
          <Card className="login-card">
            <FormControl>
              <TextValidator
                label="Email"
                multiline
                name="email"
                value={this.state.email}
                margin="normal"
                onChange={this.handleInputChange}
                validators={['required', 'isEmail']}
                errorMessages={[
                  'this field is required',
                  'enter a valid email'
                ]}
              />
            </FormControl>
            <Button type="submit" raised color="primary">
              Unsubscribe
            </Button>
          </Card>
        </ValidatorForm>
      </div>
    );
  }
}

export default Unsubscribe;
