var lastRequest = 0;
var saveDelay = 200; // Don't want to spam with history updates

var queryState = require('query-state');
require('openseadragon'); // it adds itself to window.

var qs = queryState({
  index: 'mark_twain'
});

var indexName = qs.get('index')
var indexRoot = 'https://anvaka.github.io/portrait-data/' + indexName + '/';

var viewer = window.OpenSeadragon({
  id: 'map',
  showNavigationControl: false,
  // showNavigator: true,
  prefixUrl: '',
  preserveViewport: true,
  tileSources: indexRoot + 'index.dzi'
});

require('./lib/navigator.js')(viewer, indexRoot + 'mini-map.jpg');

var box = getBox();

viewer.addHandler('open', function() {
  if (box) {
    viewer.viewport.fitBounds(box, true)
  }
});

viewer.addHandler('viewport-change', function() {
  var viewport = viewer.viewport;
  var box = viewport.getBounds();
  saveCurrentBox(box);
});

function getBox() {
  var degrees = qs.get('degrees') || 0;
  var height = qs.get('height');
  var width = qs.get('width');
  var x = qs.get('x');
  var y = qs.get('y');
  if (x === undefined || y === undefined || width === undefined || height === undefined) return;

  return new window.OpenSeadragon.Rect(x, y, width, height, degrees)
}

function saveCurrentBox(box) {
  if (lastRequest) {
    clearTimeout(lastRequest);
  }

  lastRequest = setTimeout(function() {
    qs.set(box);
  }, saveDelay);
}



