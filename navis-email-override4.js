// navis-email-override.js
;(function(){
  // Guard: ensure Navis config exists
  if (!window.__config__ || !Array.isArray(window.__config__.eventListeners)) {
    return;
  }

  // Patch the listener for the email field
  window.__config__.eventListeners = window.__config__.eventListeners.map(function(listener) {
    if (listener.elementId === 'email_0' || listener.destinationKey === 'email') {
      listener.elementId    = 'pay-by-card-email';
      listener.dataType     = 'select-value';
      listener.listenerType = 'change';
    }
    return listener;
  });
})();
