import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Grid from 'material-ui/Grid';
import { FormControl, InputLabel } from 'material-ui';

const styles = theme => ({
  select: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  textfield: {
    margin: theme.spacing.unit
  }
});

const Detail = props => {
  const { tip, themes, classes } = props;
  return (
    <Grid container>
      <FormControl fullWidth="true" className={classes.textfield}>
        <TextField
          id="multiline-flexible"
          label="Content"
          fullWidth
          multiline
          value={tip.tip_content}
          className="tip-content"
          margin="normal"
        />
      </FormControl>
      <FormControl fullWidth="true" className={classes.textfield}>
        <TextField
          label="Development goal"
          fullWidth
          multiline
          value={tip.development_goal}
          margin="normal"
        />
      </FormControl>
      <FormControl fullWidth="true" className={classes.textfield}>
        <TextField
          label="ZILL goal"
          fullWidth
          multiline
          value={tip.zill_goal}
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.select}>
        <InputLabel htmlFor="rich-language">Rich language</InputLabel>
        <Select
          value={tip.rich_language}
          input={<Input name="rich-language" />}
        >
          <MenuItem value="voorspellen">Voorspellen</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.select}>
        <InputLabel htmlFor="circumstances">Circumstances</InputLabel>
        <Select
          value={tip.circumstances}
          input={<Input name="circumstances" />}
        >
          <MenuItem value="wolken, kans op neerslag">
            Wolken, kans op neerslag
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.select}>
        <InputLabel htmlFor="theme">Theme</InputLabel>
        <Select value={tip.themes_id} input={<Input name="theme" />}>
          {themes.map(th => <MenuItem value={th.id}>{th.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default withStyles(styles)(Detail);
