import React, { Component } from 'react';
import SVGoban from 'svgoban';
import PropTypes from 'prop-types';
import { toElem } from './helpers';

export default class LabelsLayer extends Component {
  shouldComponentUpdate(nextProps) {
    const { size, coordSystem } = this.props;
    return (
      nextProps.size !== size
      || nextProps.coordSystem !== coordSystem
    );
  }

  render() {
    const {
      size,
      coordSystem,
    } = this.props;

    const pseudoLabels = SVGoban.shapeLabels(
      size,
      coordSystem,
    );
    return (
      <g className="labels_layer">
        {toElem(pseudoLabels)}
      </g>
    );
  }
}

LabelsLayer.propTypes = {
  size: PropTypes.string.isRequired,
  coordSystem: PropTypes.string.isRequired,
};
