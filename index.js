(function(global) {

  function isStandalone() {
    return navigator.standalone || (window.matchMedia('(display-mode: standalone)').matches);
  }

  if (
    typeof module !== 'undefined' &&
    module.exports &&
    typeof window !== 'undefined'
  ) {
    module.exports = isStandalone();
  } else if (typeof define === 'function' && define.amd) {
    define([], (global.isStandalone = isStandalone()));
  } else {
    global.isStandalone = isStandalone();
  }
})(this);
