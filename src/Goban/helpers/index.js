import React from 'react';

/**
 * Converts shape list into React SVG elements.
 *
 * @param {Array} shape list
 * @returns {Array} React element list
 */
export const toElem = function toElem(_shapes, callback) {
  const shapes = _shapes;

  let typeofShape;
  let txt = null;
  let k = 0;
  for (let i = 0; i < shapes.length; i++) {
    typeofShape = shapes[i].type;

    if (typeofShape === 'text') {
      txt = shapes[i].txt;
      delete shapes[i].txt;
    }
    if (shapes[i].class) {
      shapes[i].className = shapes[i].class;
      delete shapes[i].class;
    }
    delete shapes[i].type;
    shapes[i].key = shapes[i].key || k++;
    if (callback) shapes[i].onClick = callback.bind(null, shapes[i].key);
    shapes[i] = React.createElement(typeofShape, shapes[i], txt);
  }
  return shapes;
};
