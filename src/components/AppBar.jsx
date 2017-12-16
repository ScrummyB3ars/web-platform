import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const renderLoginLogout = (isAuthenticated, logout) => {
  if (isAuthenticated) {
    return (
      <Button onClick={logout} color="contrast">
        Logout
      </Button>
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
            <Link to="/">Toddlr Dashboard </Link>
          </Typography>
          {renderLoginLogout(isAuthenticated, logout)}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
