import React, { Component } from 'react';
import SVGoban from 'svgoban';

export default class Definitions extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const b = SVGoban.defineRadialColors('black');
    const w = SVGoban.defineRadialColors('white');

    return (
      <defs>
        <radialGradient id="blackgrad" {...b.gradient}>
          <stop offset="0%" style={{ 'stop-color': b.a, 'stop-opacity': '1' }} />
          <stop offset="100%" style={{ 'stop-color': b.z, 'stop-opacity': '1' }} />
        </radialGradient>
        <radialGradient id="whitegrad" {...w.gradient}>
          <stop offset="0%" style={{ 'stop-color': w.a, 'stop-opacity': '1' }} />
          <stop offset="100%" style={{ 'stop-color': w.z, 'stop-opacity': '1' }} />
        </radialGradient>
      </defs>
    );
  }
}

Definitions.propTypes = {};
