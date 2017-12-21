import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link, withRouter } from 'react-router-dom';
import Dashboard from 'material-ui-icons/Dashboard';

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

const renderLoginLogout = (isAuthenticated, logout, classes) => {
  if (isAuthenticated) {
    return (
      <div style={{ display: 'flex', alignItems: 'centers' }}>
        <Link to="/tips">
          <Button color="contrast">
            <Dashboard className={classes.leftIcon} /> Dashboard
          </Button>
        </Link>
        <Button onClick={logout} color="contrast">
          Logout
        </Button>
      </div>
    );
  } else {
    return (
      <Link to="/login">
        <Button color="contrast">Login</Button>
      </Link>
    );
  }
};

function ButtonAppBar(props) {
  const { classes, isAuthenticated, logout } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            <Link to="/">Toddlr</Link>
          </Typography>
          {renderLoginLogout(isAuthenticated, logout, classes)}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(ButtonAppBar));
