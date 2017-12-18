import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

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
  componentWillMount() {
    this.props.getAllTips();
  }

  render() {
    const { classes, themeTips, themes, interactionTips } = this.props;

    if (!themeTips || !interactionTips) {
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
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Tips);
