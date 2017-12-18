import React from 'react';

import TipThemeDetail from './TipThemeDetail';
import TipInteractionDetail from './TipInteractionDetail';

export default props => {
  const { match: { params: { type } } } = props;
  const { tip, themes } = props.location.state;
  return type === 'theme' ? (
    <TipThemeDetail tip={tip} themes={themes} />
  ) : (
    <TipInteractionDetail tip={tip} />
  );
};
