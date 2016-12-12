module.exports = createNavigator;

function createNavigator(viewer, backgroundImage) {
  var displayRegion = document.getElementById('display-region');
  var container = document.getElementById('mini-map');
  container.style.backgroundImage = 'url("' + backgroundImage + '")';

  viewer.addHandler('viewport-change', update);
  container.addEventListener('mousedown', resetZoom);
  container.addEventListener('touchstart', resetZoom);

  return;

  function resetZoom(e) {
    e.preventDefault();
    e.stopPropagation();
    viewer.viewport.goHome();

    return false;
  }

  function update() {
    var viewport = viewer.viewport;
    var bounds = viewport.getBoundsNoRotate(true);

    // TODO: This is not entirely correct. Not sure why. Like I'm missing some
    // passing or ratio... This can be seen if you zoom to the right side.
    // Rectangle shows blank, while pixels are still visible
    var MAX_WIDTH = 75;
    var MAX_HEIGHT = MAX_WIDTH;

    var x = MAX_WIDTH * bounds.x;
    var y = MAX_HEIGHT * bounds.y;
    var width = MAX_WIDTH * bounds.width;
    var height = MAX_HEIGHT * bounds.height;

    //update style for navigator-box
    var style = displayRegion.style;


    style.top = px(y);
    style.left = px(x);
    style.width  = px(Math.max(width, 0));
    style.height = px(Math.max(height, 0));
  }
}

function px(x) {
  return Math.round(x) + 'px'
}
