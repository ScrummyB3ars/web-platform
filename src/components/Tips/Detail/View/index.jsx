import React from 'react';

import TipTheme from './Theme';
import TipInteraction from './Interaction';

import { requestService } from '../../../../utils/RequestService';

class TipDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: null
    };
    const { match: { params: { type, id } } } = this.props;
    if (id !== 'new') {
      requestService.getTipById(type, id).then(tip => this.setState({ tip }));
    }
  }

  render() {
    const { match: { params: { type, id } } } = this.props;
    if (id === 'new') {
      return null;
    }
    const { tip } = this.state;

    if (!tip) {
      return <div>Loading</div>;
    }
    return type === 'theme' ? (
      <TipTheme tip={tip} />
    ) : (
      <TipInteraction tip={tip} />
    );
  }
}

export default TipDetail;
