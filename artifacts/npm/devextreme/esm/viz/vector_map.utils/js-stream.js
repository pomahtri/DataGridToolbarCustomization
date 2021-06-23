/**
* DevExtreme (esm/viz/vector_map.utils/js-stream.js)
* Version: 21.2.0
* Build date: Wed Jun 23 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
/* eslint-disable no-undef, no-unused-vars, no-var, one-var*/
function wrapBuffer(arrayBuffer) {
  return new DataView(arrayBuffer);
}

function ui8(stream, position) {
  return stream.getUint8(position);
}

function ui16LE(stream, position) {
  return stream.getUint16(position, true);
}

function ui32LE(stream, position) {
  return stream.getUint32(position, true);
}

function ui32BE(stream, position) {
  return stream.getUint32(position, false);
}

function f64LE(stream, position) {
  return stream.getFloat64(position, true);
}

function sendRequest(url, callback) {
  var request = new XMLHttpRequest();
  request.addEventListener('load', function () {
    callback(this.response ? null : this.statusText, this.response);
  });
  request.open('GET', url);
  request.responseType = 'arraybuffer';
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  request.send(null);
}
