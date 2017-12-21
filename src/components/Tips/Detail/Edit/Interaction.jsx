import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { Button, FormControl } from 'material-ui';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';

import { requestService } from '../../../../utils/RequestService';

const styles = theme => ({
  select: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  textfield: {
    margin: theme.spacing.unit
  },
  submit: {
    marginTop: '2em',
    display: 'block',
    width: '100%'
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    overflow: 'hidden'
  }
});

class Detail extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.addNew) {
      this.state = {
        tip: {
          tip_content: ''
        }
      };
    } else {
      this.state = { tip: props.tip };
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      tip: { ...this.state.tip, [name]: value }
    });
  }

  handleSubmit() {
    const { match: { params: { type } } } = this.props;
    if (!this.props.addNew) {
      requestService.deleteTip(type, this.state.tip.id).then(() => {
        requestService.addTip(type, this.state.tip).then(() => {
          this.props.history.push('/tips');
        });
      });
    } else {
      requestService.addTip(type, this.state.tip).then(() => {
        this.props.history.push('/tips');
      });
    }
  }

  render() {
    const { addNew, classes } = this.props;
    const { tip } = this.state;
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
        onError={errors => console.log(errors)}
      >
        <Grid container>
          <FormControl
            required="true"
            fullWidth="true"
            className={classes.textfield}
          >
            <TextValidator
              label="Content"
              multiline
              name="tip_content"
              value={tip.tip_content}
              className="tip-content"
              margin="normal"
              onChange={this.handleInputChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </FormControl>
          <FormControl className={classes.submit}>
            <Button raised color="primary" type="submit">
              {addNew ? 'Add' : 'Edit'}
            </Button>
          </FormControl>
        </Grid>
      </ValidatorForm>
    );
  }
}
export default withStyles(styles)(withRouter(Detail));
