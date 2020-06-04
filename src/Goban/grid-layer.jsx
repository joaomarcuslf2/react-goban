import React, { Component } from 'react';
import SVGoban from 'svgoban';
import PropTypes from 'prop-types';
import { toElem } from './helpers';

export default class GridLayer extends Component {
  shouldComponentUpdate(nextProps) {
    const { size } = this.props;
    return (
      nextProps.size !== size
    );
  }

  render() {
    const { size } = this.props;
    const pseudoLines = SVGoban.shapeGrid(size);
    return (
      <g className="grid_layer">{toElem(pseudoLines)}</g>
    );
  }
}

GridLayer.propTypes = {
  size: PropTypes.string.isRequired,
};
