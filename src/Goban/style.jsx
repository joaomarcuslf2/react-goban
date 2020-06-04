import React, { Component } from 'react';
import SVGoban from 'svgoban';
import PropTypes from 'prop-types';

export default class BackgroundLayer extends Component {
  shouldComponentUpdate(nextProps) {
    const { theme } = this.props;
    return (
      nextProps.theme !== theme
    );
  }

  render() {
    const { theme } = this.props;
    return (
      <style>{SVGoban.Themes[theme]()}</style>
    );
  }
}

BackgroundLayer.propTypes = {
  theme: PropTypes.string.isRequired,
};
