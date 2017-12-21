import React from 'react';

import { requestService } from '../../utils/RequestService';

class TipThemeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: null
    };
    requestService
      .getThemeTipById(props.match.params.id)
      .then(tip => this.setState({ tip }));
  }

  render() {
    const { tip } = this.state;
    if (tip) {
      return <div>{tip.tip_content}</div>;
    }
    return <div>Loading</div>;
  }
}

export default TipThemeDetail;
