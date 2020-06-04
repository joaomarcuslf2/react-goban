import React, { Component } from 'react';
import SVGoban from 'svgoban';
import PropTypes from 'prop-types';
import { toElem } from './helpers';

export default class FlatStonesLayer extends Component {
  handleClick = (intersection) => {
    const { onIntersectionClick } = this.props;

    return onIntersectionClick(intersection);
  }

  render() {
    const { size, set } = this.props;
    const pseudoStones = SVGoban.shapeStones(size, set);
    return (
      <g className="stones_layer">{toElem(pseudoStones)}</g>
    );
  }
}

FlatStonesLayer.propTypes = {
  size: PropTypes.string.isRequired,
  set: PropTypes.number.isRequired,
  onIntersectionClick: PropTypes.func.isRequired,
};
