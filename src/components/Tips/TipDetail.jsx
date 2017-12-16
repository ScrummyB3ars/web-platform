import React from 'react';
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

export default props => {
  const { tip } = props.location.state;
  console.log(tip);
  return (
    <div>
      <TextField
        id="multiline-flexible"
        label="Content"
        fullWidth
        multiline
        value={tip.tip_content}
        className="tip-content"
        margin="normal"
      />
      <TextField
        label="Development goal"
        fullWidth
        multiline
        value={tip.development_goal}
        margin="normal"
      />
      <TextField
        label="ZILL goal"
        fullWidth
        multiline
        value={tip.zill_goal}
        margin="normal"
      />
      <Select value={tip.rich_language} input={<Input name="rich-language" />}>
        <MenuItem value="voorspellen">Voorspellen</MenuItem>
        <MenuItem value="memen">Memen</MenuItem>
      </Select>
      <Select value={tip.circumstances} input={<Input name="circumstances" />}>
        <MenuItem value="wolken, kans op neerslag">
          Wolken, kans op neerslag
        </MenuItem>
        <MenuItem value="memen">Memen</MenuItem>
      </Select>
    </div>
  );
};
