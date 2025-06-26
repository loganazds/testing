// navis-email-override.js
(function(){
  // Ensure the Navis config exists
  window.__config__ = window.__config__ || {};
  var listeners = window.__config__.eventListeners;
  if (!Array.isArray(listeners)) return;

  // Find and patch the email listener
  for (var i = 0; i < listeners.length; i++) {
    var l = listeners[i];
    if (l.destinationKey === 'email') {
      l.elementId    = 'pay-by-card-email';
      l.dataType     = 'select-value';
      l.listenerType = 'change';
      break;
    }
  }

  // Re-assign back in case of shallow copy
  window.__config__.eventListeners = listeners;
})();
