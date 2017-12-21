import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

import TipThemeDetail from './Theme';
import TipInteractionDetail from './Interaction';

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

    // shitty implementation because this doesn't have a seperate table in database
    // like themes
    const circumstances = [...new Set(themeTips.map(tip => tip.circumstances))];

    if (!id) {
      return type === 'theme' ? (
        <TipThemeDetail addNew themes={themes} circumstances={circumstances} />
      ) : (
        <TipInteractionDetail addNew />
      );
    } else {
      return type === 'theme' ? (
        <TipThemeDetail
          tip={themeTips.filter(t => t.id === parseInt(id, 10))[0]}
          themes={themes}
          circumstances={circumstances}
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
