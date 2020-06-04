import React from 'react';
import SVGoban from 'svgoban';
import PropTypes from 'prop-types';
import { toElem } from './helpers';

const MarkersLayer = ({
  size,
  positions,
  markers,
}) => {
  const pseudoMarkers = SVGoban.shapeMarkers(size, markers, positions);
  return (
    <g className="markers_layer">{toElem(pseudoMarkers)}</g>
  );
};

MarkersLayer.propTypes = {
  size: PropTypes.string.isRequired,
  positions: PropTypes.object.isRequired,
  markers: PropTypes.object.isRequired,
};

export default MarkersLayer;
