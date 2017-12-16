import React from 'react';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import { Button, Toolbar, Typography } from 'material-ui';
import Paper from 'material-ui/Paper';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  },
  deleteIcon: {
    color: 'red'
  },
  deleteButton: {
    backgroundColor: 'red',
    color: '#fff'
  }
});

class TipTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 5,
      dialogOpen: false,
      dialogTip: null
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleDialogOpen = dialogTip => {
    this.setState({ dialogOpen: true, dialogTip });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleTipDelete = () => {
    // DELETE TIP
  };

  render() {
    const { classes, tips, title, type } = this.props;
    const { page, rowsPerPage, dialogOpen, dialogTip } = this.state;

    return (
      <Paper className={`${classes.root} tips-table`}>
        <Toolbar className={classes.root}>
          <Typography type="title">{title}</Typography>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {tips
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(t => {
                return (
                  <TableRow key={t.id}>
                    <TableCell>{t.tip_content}</TableCell>
                    <TableCell>
                      <Link
                        to={{
                          pathname: `/tips/${type}/${t.id}`,
                          state: { tip: t }
                        }}
                      >
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <IconButton onClick={() => this.handleDialogOpen(t)}>
                        <DeleteIcon className={classes.deleteIcon} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={tips.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
        <Dialog open={dialogOpen} onRequestClose={this.handleDialogClose}>
          <DialogTitle>Delete this tip?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {dialogTip && dialogTip.tip_content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              raised
              onClick={this.handleTipDelete}
              className={classes.deleteButton}
            >
              Delete
            </Button>
            <Button onClick={this.handleDialogClose} color="primary" autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    );
  }
}

export default withStyles(styles)(TipTable);
