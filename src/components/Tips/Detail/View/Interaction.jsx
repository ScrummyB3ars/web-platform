import React from 'react';

export default props => {
  const { tip } = props;
  return <div>{tip.tip_content}</div>;
};
