import React from 'react';
import TextField from 'material-ui/TextField';

export default props => {
  const { tip } = props;
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
