/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import Goban from './Goban';

import './index.css';

class DemoApp extends Component {
  constructor() {
    super();

    this.state = {
      position: { },
      markers: { },
      theme: 'classic',
      coordSystem: 'A1',
      hideBorder: false,
      zoom: false,
      noMargin: false,
      intersection: 'none yet',
      nextToPlay: 'black',
    };
  }

  handleIntersectionClick = (intersection) => {
    if (!this.state.position[intersection]) {
      this.setState({
        intersection,
        position: { ...this.state.position, [intersection]: this.state.nextToPlay },
        nextToPlay: this.state.nextToPlay === 'black' ? 'white' : 'black',
      });
    }
  }

  handleClickTheme = () => {
    const newTheme = (this.state.theme === 'classic') ? 'paper' : 'classic';
    this.setState({ theme: newTheme });
  }

  handleClickCoordSystem = () => {
    const newCoordSystem = (this.state.coordSystem === 'A1') ? 'aa' : 'A1';
    this.setState({ coordSystem: newCoordSystem });
  }

  handleClickBorder = () => {
    const newBorder = (this.state.hideBorder === false);
    this.setState({ hideBorder: newBorder });
  }

  handleClickZoom = () => {
    const newZoom = (this.state.zoom === null) ? { mode: 'zone', region: 'NE' } : null;
    this.setState({ zoom: newZoom });
  }

  handleClickMargin = () => {
    const newMargin = (this.state.noMargin === false);
    this.setState({ noMargin: newMargin });
  }

  handleClickStones = () => {
    const sample = [{ P16: 'black' }, { od: 'black', pp: 'white' }];
    const i = Object.keys(this.state.position).length === 1 ? 1 : 0;
    this.setState({ position: sample[i] });
  }

  handleClickMarkers = () => {
    const sample = [{ P16: 'circle' }, {}];
    const i = Object.keys(this.state.markers).length === 1 ? 1 : 0;
    this.setState({ markers: sample[i] });
  }

  handleClickBW = () => {
    const newColor = (this.state.nextToPlay === 'black') ? 'white' : 'black';
    this.setState({ nextToPlay: newColor });
  }

  render() {
    return (
      <div className="demo-wrapper">
        <div id="menu">
          <h1>
            <a href="https://github.com/desgeeko/react-goban">react-goban</a>
            {' '}
            demo
          </h1>
          <br />
          <p>Toggle properties of stateless Goban with simple test cases:</p>
          <div id="result">
            <p>&lt;Goban</p>
            <ul>
              <li>
                <button onClick={this.handleClickTheme}>theme</button>
                {' '}
                = "
                {this.state.theme}
                "
              </li>
              <li>
                <button onClick={this.handleClickMargin}>noMargin</button>
                {' '}
                =
                {' '}
                {this.state.noMargin ? 'true' : 'false'}
              </li>
              <li>
                <button onClick={this.handleClickBorder}>hideBorder</button>
                {' '}
                =
                {' '}
                {this.state.hideBorder ? 'true' : 'false'}
              </li>
              <li>
                <button onClick={this.handleClickZoom}>zoom</button>
                {' '}
                =
                {' '}
                {this.state.zoom ? JSON.stringify(this.state.zoom) : 'null'}
              </li>
              <li>
                <button onClick={this.handleClickCoordSystem}>coordSystem</button>
                {' '}
                = "
                {this.state.coordSystem}
                "
              </li>
              <li>
                <button onClick={this.handleClickBW}>nextToPlay</button>
                {' '}
                = "
                {this.state.nextToPlay}
                "
              </li>
              <li>
                <button onClick={this.handleClickStones}>stones</button>
                {' '}
                =
                {' '}
                {JSON.stringify(this.state.position)}
              </li>
              <li>
                <button onClick={this.handleClickMarkers}>markers</button>
                {' '}
                =
                {' '}
                {JSON.stringify(this.state.markers)}
              </li>
              <li>
                <button disabled>onIntersectionClick</button>
                {' '}
                =
                {' '}
                <em>callback</em>
              </li>
            </ul>
            <p>/&gt;</p>
          </div>
          <p>
            For a fully functional game
            it would be up to the parent component to implement state management
            (valid moves, captures,...)
            based on callback inputs and to pass new properties to the Goban component.
          </p>
          <p>
            Last click received from callback:
            <strong>{this.state.intersection}</strong>
          </p>
          <p>
            <a href="https://github.com/desgeeko/react-goban">react-goban</a>
            {' '}
            SVG shapes are rendered by
            {' '}
            <a href="https://github.com/desgeeko/svgoban">svgoban</a>
            .
          </p>
        </div>

        <Goban
          theme={this.state.theme}
          stones={this.state.position}
          markers={this.state.markers}
          nextToPlay={this.state.nextToPlay}
          onIntersectionClick={this.handleIntersectionClick}
          hideBorder={this.state.hideBorder}
          zoom={this.state.zoom}
          noMargin={this.state.noMargin}
          coordSystem={this.state.coordSystem}
        />
      </div>
    );
  }
}

export default DemoApp;
