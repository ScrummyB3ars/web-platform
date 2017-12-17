import React from 'react';
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

export default props => {
  const { tip } = props;
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
    </div>
  );
};
