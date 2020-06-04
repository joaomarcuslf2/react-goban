import React from 'react';
import SVGoban from 'svgoban';
import PropTypes from 'prop-types';

import Style from './style';
import Definitions from './definitions';
import BackgroundLayer from './background-layer';
import GridLayer from './grid-layer';
import StarPointsLayer from './star-points-layer';
import LabelsLayer from './labels-layer';
import CompositeStonesLayer from './composite-stones-layer';
import MarkersLayer from './markers-layer';

const Goban = ({
  hideBorder,
  zoom,
  size,
  theme,
  noMargin,
  coordSystem,
  stones,
  markers,
  nextToPlay,
  onIntersectionClick,
}) => {
  const viewBox = SVGoban.shapeArea(hideBorder, zoom, size).join(' ');
  return (
    <div className="react-goban">
      <svg
        className="svgoban"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        height="100%"
      >
        <Style theme={theme} />
        <Definitions />
        <BackgroundLayer noMargin={noMargin} />
        <GridLayer size={size} />
        <StarPointsLayer size={size} />
        <LabelsLayer size={size} coordSystem={coordSystem} />
        <CompositeStonesLayer
          size={size}
          set={stones}
          nextToPlay={nextToPlay}
          onIntersectionClick={onIntersectionClick}
        />
        <MarkersLayer size={size} markers={markers} positions={stones} />
      </svg>
    </div>
  );
};

Goban.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
  zoom: PropTypes.object,
  coordSystem: PropTypes.string,
  hideBorder: PropTypes.bool,
  noMargin: PropTypes.bool,
  stones: PropTypes.object.isRequired,
  markers: PropTypes.object.isRequired,
  nextToPlay: PropTypes.string.isRequired,
  onIntersectionClick: PropTypes.func.isRequired,
};

Goban.defaultProps = {
  size: '19',
  theme: 'classic',
  hideBorder: false,
  zoom: false,
  noMargin: false,
  coordSystem: 'A1',
};

export default Goban;
