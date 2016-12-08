/* global panzoom, queryState */
var zoomContainer = document.getElementById('scene')
var zoomer = panzoom(zoomContainer)

var width = window.innerWidth;
var height = window.innerHeight;

var qs = queryState();
setInitialCoordinates();
listenToEvents();

var lastRequest = 0;
var saveDelay = 200; // Don't want to spam with history updates

function setInitialCoordinates() {
  var transform = getTransformFromQueryState(qs);
  if (transform) {
    var dw = transform.w - window.innerWidth;
    var dh = transform.h - window.innerHeight;
    zoomer.zoomAbs(0, 0, transform.scale);
    zoomer.moveTo(transform.x - dw * 0.5, transform.y - dh * 0.5);
  } else {
    centerScene();
  }
}

function resetZoom() {
  window.location.hash = '';
  window.location.reload();
}

function listenToEvents() {
  window.addEventListener('resize', onWindowResize, false);

  zoomContainer.addEventListener('panstart', panZoomChanged);
  zoomContainer.addEventListener('zoom', panZoomChanged);
  zoomContainer.addEventListener('pan', panZoomChanged);
}

function onWindowResize() {
  width = window.innerWidth;
  height = window.innerHeight;
}

function panZoomChanged() {
  saveCurrentTransform(zoomer.getTransform(), qs);
}

function saveCurrentTransform(transform, queryState) {
  if (lastRequest) {
    clearTimeout(lastRequest);
  }

  lastRequest = setTimeout(function() {
    queryState.set({
      x: round(transform.x),
      y: round(transform.y),
      w: window.innerWidth,
      h: window.innerHeight,
      scale: round(transform.scale),
    });
  }, saveDelay);
}

function round(x) {
  return Math.round(x * 1000)/1000; 
}

function centerScene() {
  var sceneRect = zoomContainer.getBBox()
  zoomer.moveBy(-sceneRect.x, -sceneRect.y)

  var scale = Math.min(width, height) / Math.max(sceneRect.width, sceneRect.height)

  var dx = (width - sceneRect.width * scale) / 2;
  var dy = (height - sceneRect.height * scale) / 2;

  zoomer.zoomAbs(0, 0, scale)
  zoomer.moveBy(dx, dy)
}

function getTransformFromQueryState(query) {
  var x = parseFloat(query.get('x'));
  var y = parseFloat(query.get('y'));
  var scale = parseFloat(query.get('scale'));
  if (Number.isNaN(x) || Number.isNaN(y) || Number.isNaN(scale)) return;

  var w = parseInt(query.get('w'), 10);
  var h = parseInt(query.get('h'), 10);

  if (Number.isNaN(w)) w = window.innerWidth;
  if (Number.isNaN(h)) h = window.innerHeight;
  return { x: x, y: y, scale: scale, w: w, h: h};
}
