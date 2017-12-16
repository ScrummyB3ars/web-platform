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
import { Button, Toolbar, Typography } from 'material-ui';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  }
});

class TipTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 0, rowsPerPage: 5 };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes, tips, title, type } = this.props;
    const { page, rowsPerPage } = this.state;

    return (
      <Paper className={`${classes.root} tips-table`}>
        <Toolbar className={classes.root}>
          <Typography type="title">{title}</Typography>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell numeric>ID</TableCell>
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
                    <TableCell numeric>{t.id}</TableCell>
                    <TableCell>{t.tip_content}</TableCell>
                    <TableCell>
                      <Button onClick={() => this.onDelete(t.id)}>
                        Delete
                      </Button>
                      <Link
                        to={{
                          pathname: `/tips/${type}/${t.id}`,
                          state: { tip: t }
                        }}
                      >
                        <Button>Detail</Button>
                      </Link>
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
      </Paper>
    );
  }
}

export default withStyles(styles)(TipTable);
