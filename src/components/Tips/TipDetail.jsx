import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

import TipThemeDetail from './TipThemeDetail';
import TipInteractionDetail from './TipInteractionDetail';

class TipDetail extends React.Component {
  componentWillMount() {
    if (!this.props.themeTips || !this.props.interactionTips) {
      this.props.getAllTips();
    }
  }
  render() {
    const {
      match: { params: { type, id } },
      interactionTips,
      themeTips,
      themes
    } = this.props;

    if (!themeTips || !interactionTips) {
      return (
        <div style={{ height: '50vh' }} className="container-center-items">
          <CircularProgress size={50} />
        </div>
      );
    }

    if (id === 'new') {
      return type === 'theme' ? (
        <TipThemeDetail addNew themes={themes} />
      ) : (
        <TipInteractionDetail addNew />
      );
    } else {
      return type === 'theme' ? (
        <TipThemeDetail
          tip={themeTips.filter(t => t.id === parseInt(id, 10))[0]}
          themes={themes}
        />
      ) : (
        <TipInteractionDetail
          tip={interactionTips.filter(t => t.id === parseInt(id, 10))[0]}
        />
      );
    }
  }
}

export default TipDetail;
