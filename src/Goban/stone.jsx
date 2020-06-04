import { Component } from 'react';
import SVGoban from 'svgoban';
import PropTypes from 'prop-types';
import { toElem } from './helpers';

export default class Stone extends Component {
  shouldComponentUpdate(nextProps) {
    const { size, intersection, color } = this.props;

    const idem = nextProps.size === size
      && nextProps.intersection === intersection
      && nextProps.color === color;
    return !idem;
  }

  render() {
    const {
      size, intersection, color, onIntersectionClick,
    } = this.props;
    const pseudoStone = SVGoban.shapeStone(size, intersection, color);

    return toElem(pseudoStone, onIntersectionClick)[0];
  }
}

Stone.propTypes = {
  intersection: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onIntersectionClick: PropTypes.func.isRequired,
};
