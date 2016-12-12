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
    eventSource.addEventListener('click', hideHelp);
    eventSource.addEventListener('mousewheel', hideHelp);
    eventSource.addEventListener('touchstart', hideHelp);
  }

  function show() {
    var items = document.querySelectorAll('.help')
    for (var i = 0; i < items.length; ++i) {
      items[i].classList.remove('hidden');
    }
    listenToEvents();
  }

  function hideHelp() {
    eventSource.removeEventListener('click', hideHelp);
    eventSource.removeEventListener('mousewheel', hideHelp);
    eventSource.removeEventListener('touchstart', hideHelp);
    subscribed = false;
    var items = document.querySelectorAll('.help')
    for (var i = 0; i < items.length; ++i) {
      items[i].classList.add('hidden');
    }
  }
}
