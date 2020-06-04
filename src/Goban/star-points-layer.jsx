import React, { Component } from 'react';
import SVGoban from 'svgoban';
import PropTypes from 'prop-types';
import { toElem } from './helpers';

export default class StarPointsLayer extends Component {
  shouldComponentUpdate(nextProps) {
    const { size } = this.props;
    return (
      nextProps.size !== size
    );
  }

  render() {
    const { size } = this.props;
    const pseudoStarPoints = SVGoban.shapeStarPoints(size);
    return (
      <g className="markers_layer">{toElem(pseudoStarPoints)}</g>
    );
  }
}

StarPointsLayer.propTypes = {
  size: PropTypes.string.isRequired,
};
