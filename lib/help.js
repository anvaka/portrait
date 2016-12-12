module.exports = createHelp();

function createHelp() {
  var subscribed = false;
  var eventSource = document.getElementById('map')
  listenToEvents();

  return {
    show: show
  }

  function listenToEvents() {
    if (subscribed) return;

    subscribed = true;
    eventSource.addEventListener('click', hideHelp, true);
    eventSource.addEventListener('mousewheel', hideHelp, true);
    eventSource.addEventListener('touchstart', hideHelp, true);
  }

  function show() {
    var items = document.querySelectorAll('.help')
    for (var i = 0; i < items.length; ++i) {
      items[i].classList.remove('hidden');
    }
    listenToEvents();
  }

  function hideHelp() {
    eventSource.removeEventListener('click', hideHelp, true);
    eventSource.removeEventListener('mousewheel', hideHelp, true);
    eventSource.removeEventListener('touchstart', hideHelp, true);
    subscribed = false;
    var items = document.querySelectorAll('.help')
    for (var i = 0; i < items.length; ++i) {
      items[i].classList.add('hidden');
    }
  }
}
