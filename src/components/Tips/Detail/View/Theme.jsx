import React from 'react';
import { withStyles } from 'material-ui';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
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
    <div>
      <Card className="detail-card">
        <CardMedia
          image={`https://api-toddlr.herokuapp.com/images/${tip.picture}`}
          className="detail-card-media"
        />
        <CardContent>
          <Typography className={classes.subtitle} style={{ marginTop: 0 }}>
            Tip
          </Typography>
          <Typography component="p">{tip.tip_content}</Typography>
          {tip.rich_language !== 'null' && (
            <div>
              <Typography className={classes.subtitle}>
                Rich language
              </Typography>
              <Typography component="p">{tip.rich_language}</Typography>
            </div>
          )}

          <Typography className={classes.subtitle}>Development goal</Typography>
          <Typography component="p">{tip.development_goal}</Typography>

          <Typography className={classes.subtitle}>ZILL goal</Typography>
          <Typography component="p">{tip.zill_goal}</Typography>

          <Typography className={classes.subtitle}>Circumstances</Typography>
          <Typography component="p">{tip.circumstances}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Theme);
