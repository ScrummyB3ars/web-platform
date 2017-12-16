import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Button } from 'material-ui';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';

import TipDetail from './TipDetail';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  }
});

const data = [{ id: 0, content: 'Zever' }, { id: 1, content: 'Meer zever' }];

class Tips extends React.Component {
  componentWillMount() {
    this.props.getAllTips();
  }

  render() {
    const { classes, onDelete, tips, match: { params: { id } } } = this.props;

    if (!tips) {
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
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell numeric>ID</TableCell>
              <TableCell>Content</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell numeric>{n.id}</TableCell>
                  <TableCell>{n.content}</TableCell>
                  <TableCell>
                    <Button onClick={() => this.onDelete(n.id)}>Delete</Button>
                    <Link to={`/tips/${n.id}`}>
                      <Button>Detail</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(Tips);
