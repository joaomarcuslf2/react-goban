import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Stone from './stone';


export default class CompositeStonesLayer extends Component {
  handleClick = (intersection) => {
    const { onIntersectionClick } = this.props;

    return onIntersectionClick(intersection);
  }

  render() {
    let i;
    let j;
    let skipI;
    let hA1;
    let vA1;
    let haa;
    let vaa;
    let coordA1;
    let coordaa;
    let color;
    const { size, set, nextToPlay } = this.props;
    const incSize = +size;
    const items = [];

    for (i = 1; i <= incSize; i++) {
      skipI = i >= 9 ? 1 : 0;
      hA1 = String.fromCharCode(64 + i + skipI);
      haa = String.fromCharCode(96 + i);
      for (j = 1; j <= incSize; j++) {
        vA1 = j.toString();
        vaa = String.fromCharCode(96 + incSize - j + 1);
        coordA1 = hA1 + vA1;
        coordaa = haa + vaa;
        color = set[coordA1] || set[coordaa] || 'placeholder';
        items.push(
          <Stone
            key={coordA1}
            size={size}
            intersection={coordA1}
            color={color}
            onIntersectionClick={this.handleClick}
          />,
        );
      }
    }
    const cls = `stones_layer ${nextToPlay}`;
    return <g className={cls}>{items}</g>;
  }
}

CompositeStonesLayer.propTypes = {
  size: PropTypes.string.isRequired,
  set: PropTypes.object.isRequired,
  nextToPlay: PropTypes.string.isRequired,
  onIntersectionClick: PropTypes.func.isRequired,
};
