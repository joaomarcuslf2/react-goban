import React, { Component } from 'react';
import SVGoban from 'svgoban';
import PropTypes from 'prop-types';
import { toElem } from './helpers';

export default class BackgroundLayer extends Component {
  shouldComponentUpdate(nextProps) {
    const { size, coordSystem } = this.props;
    return (
      nextProps.size !== size
      || nextProps.coordSystem !== coordSystem
    );
  }

  render() {
    const { noMargin } = this.props;
    const pseudoBackground = SVGoban.shapeBackground(noMargin);
    return (
      <g className="background_layer">{toElem(pseudoBackground)}</g>
    );
  }
}

BackgroundLayer.propTypes = {
  coordSystem: PropTypes.string,
  size: PropTypes.string,
  noMargin: PropTypes.bool.isRequired,
};

BackgroundLayer.defaultProps = {
  coordSystem: null,
  size: null,
};
