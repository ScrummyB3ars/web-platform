import React from 'react';
import { withStyles } from 'material-ui';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  subtitle: {
    marginTop: '2em',
    fontSize: 14,
    color: theme.palette.text.secondary
  }
});

const Theme = props => {
  const { tip, classes } = props;
  return (
    <div className="container-center-items">
      <Card className="detail-card">
        <CardContent>
          <Typography className={classes.subtitle} style={{ marginTop: 0 }}>
            Tip
          </Typography>
          <Typography component="p">{tip.tip_content}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Theme);
