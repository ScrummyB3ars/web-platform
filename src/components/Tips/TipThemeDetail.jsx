import React from 'react';
import { withStyles } from 'material-ui/styles';
import { MenuItem } from 'material-ui/Menu';
import Grid from 'material-ui/Grid';
import { Button, FormControl } from 'material-ui';
import { ValidatorForm } from 'react-form-validator-core';
import {
  TextValidator,
  SelectValidator
} from 'react-material-ui-form-validator';

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
  }
});

class Detail extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.addNew) {
      this.state = {
        tip: {
          tip_content: '',
          development_goal: '',
          zill_goal: '',
          rich_language: -1,
          circumstances: -1,
          themes_id: -1
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

  handleSubmit() {}

  render() {
    const { themes, classes } = this.props;
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
              fullWidth
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
          <FormControl fullWidth="true" className={classes.textfield}>
            <TextValidator
              label="Development goal"
              name="development_goal"
              fullWidth
              multiline
              value={tip.development_goal}
              margin="normal"
              onChange={this.handleInputChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </FormControl>
          <FormControl fullWidth="true" className={classes.textfield}>
            <TextValidator
              label="ZILL goal"
              name="zill_goal"
              fullWidth
              multiline
              value={tip.zill_goal}
              margin="normal"
              onChange={this.handleInputChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </FormControl>
          <FormControl className={classes.select}>
            <SelectValidator
              label="Rich language"
              value={tip.rich_language}
              name="rich_language"
              children={() => {
                return <MenuItem>voorspellen</MenuItem>;
              }}
              onChange={this.handleInputChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </FormControl>
          <FormControl className={classes.select}>
            <SelectValidator
              label="Circumstances"
              value={tip.circumstances}
              name="circumstances"
              children={() => {
                return <MenuItem>wolken</MenuItem>;
              }}
              onChange={this.handleInputChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </FormControl>
          <FormControl className={classes.select}>
            <SelectValidator
              label="Theme"
              name="themes_id"
              value={tip.themes_id}
              children={themes.map(th => {
                return (
                  <MenuItem key={th.id} value={th.id}>
                    {th.name}
                  </MenuItem>
                );
              })}
              onChange={this.handleInputChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </FormControl>
          <FormControl className={classes.submit}>
            <Button raised color="primary" type="submit">
              Edit
            </Button>
          </FormControl>
        </Grid>
      </ValidatorForm>
    );
  }
}
export default withStyles(styles)(Detail);
