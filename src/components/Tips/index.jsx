import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Dialog, { DialogActions, DialogTitle } from 'material-ui/Dialog';
import { Link } from 'react-router-dom';

import Table from './Table';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  },
  addButton: {
    position: 'fixed',
    bottom: '2em',
    right: '2em'
  }
});

class Tips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
  }

  handleDialogToggle = () => {
    this.setState({ dialogOpen: !this.state.dialogOpen });
  };

  componentWillMount() {
    this.props.getAllTips();
  }

  render() {
    const { classes, themeTips, themes, interactionTips } = this.props;
    const { dialogOpen } = this.state;

    if (!themeTips || !interactionTips || !themes) {
      return (
        <div style={{ height: '50vh' }} className="container-center-items">
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }

    return (
      <div>
        <Table
          type="theme"
          title="Themed tips"
          tips={themeTips}
          themes={themes}
        />
        <Table
          type="interaction"
          title="Interaction tips"
          tips={interactionTips}
        />
        <Button
          fab
          color="primary"
          aria-label="add"
          className={classes.addButton}
          onClick={this.handleDialogToggle}
        >
          <AddIcon />
        </Button>
        <Dialog open={dialogOpen} onRequestClose={this.handleDialogToggle}>
          <DialogTitle>Choose the type of tip you want to add</DialogTitle>
          <DialogActions>
            <Button
              component={Link}
              to={{ pathname: '/tips/theme/new', state: { themes } }}
              raised
              color="primary"
            >
              Themed
            </Button>
            <Button
              component={Link}
              to="/tips/interaction/new"
              raised
              color="primary"
            >
              Interaction
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Tips);
