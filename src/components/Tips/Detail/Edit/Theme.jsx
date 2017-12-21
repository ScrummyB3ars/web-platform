import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { MenuItem } from 'material-ui/Menu';
import Grid from 'material-ui/Grid';
import { Button, FormControl, Card } from 'material-ui';
import { ValidatorForm } from 'react-form-validator-core';
import {
  TextValidator,
  SelectValidator
} from 'react-material-ui-form-validator';

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
          picture: 'wolken_1',
          tip_content: '',
          development_goal: '',
          zill_goal: '',
          rich_language: '',
          circumstances: -1,
          themes_id: -1,
          age_group_id: -1
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
    if (!this.props.addNew) {
      requestService.deleteThemeTip(this.state.tip.id).then(() => {
        requestService.addThemeTip(this.state.tip).then(() => {
          this.props.history.push('/tips');
        });
      });
    } else {
      requestService.addThemeTip(this.state.tip).then(() => {
        this.props.history.push('/tips');
      });
    }
  }

  render() {
    const { addNew, themes, circumstances, classes } = this.props;
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
          <FormControl fullWidth="true" className={classes.textfield}>
            <TextValidator
              label="Development goal"
              name="development_goal"
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
              multiline
              value={tip.zill_goal}
              margin="normal"
              onChange={this.handleInputChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </FormControl>
          <FormControl fullWidth="true" className={classes.textfield}>
            <TextValidator
              label="Rich language"
              value={tip.rich_language}
              name="rich_language"
              onChange={this.handleInputChange}
            />
          </FormControl>
          <FormControl className={classes.select}>
            <SelectValidator
              label="Circumstances"
              value={tip.circumstances}
              name="circumstances"
              children={circumstances.map(c => {
                return (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                );
              })}
              onChange={this.handleInputChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </FormControl>
          <FormControl className={classes.select}>
            <SelectValidator
              label="Age group"
              value={tip.age_group_id}
              name="age_group_id"
              children={[
                <MenuItem key={0} value={0}>
                  jongste
                </MenuItem>,
                <MenuItem key={1} value={1}>
                  oudste
                </MenuItem>
              ]}
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
          <FormControl className={classes.imageContainer}>
            <Card>
              <img
                src={`http://api-toddlr.herokuapp.com/images/${tip.picture}`}
                alt={tip.picture}
                className={classes.image}
              />
            </Card>
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
