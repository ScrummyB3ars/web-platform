import React from 'react';

import { requestService } from '../../utils/RequestService';

class TipThemeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: null
    };
    requestService
      .getTipById('theme', props.match.params.id)
      .then(tip => this.setState({ tip }));
  }

  render() {
    const { tip } = this.state;
    if (tip) {
      return <div><h1>{tip.tip_content} </h1><img src={'https://api-toddlr.herokuapp.com/images/' + tip.picture} alt="toddler img"/></div>
              ;
    }
    return <div>Loading</div>;
  }
}

export default TipThemeDetail;
