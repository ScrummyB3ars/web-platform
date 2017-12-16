import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

import TipDetail from './TipDetail';
import Table from './Table';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  }
});

class Tips extends React.Component {
  componentWillMount() {
    this.props.getAllTips();
  }

  render() {
    const {
      classes,
      themeTips,
      interactionTips,
      match: { params: { id } }
    } = this.props;

    if (!themeTips || !interactionTips) {
      return (
        <div style={{ height: '50vh' }} className="container-center-items">
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }

    if (id) {
      return <TipDetail />;
    }

    return (
      <div>
        <Table type="theme" title="Themed tips" tips={themeTips} />
        <Table
          type="interaction"
          title="Interaction tips"
          tips={interactionTips}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Tips);
