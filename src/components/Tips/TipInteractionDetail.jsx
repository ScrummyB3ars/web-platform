import React from 'react';

import { requestService } from '../../utils/RequestService';

class TipInteractionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: null
    };
    requestService
      .getTipById('interaction', props.match.params.id)
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

export default TipInteractionDetail;
