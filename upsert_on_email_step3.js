
/**
 * GTM Custom HTML: Upsert on Step-3 Email Change
 *
 * Listens for hash change to #/booking/step-3, then attaches a change listener
 * to the #pay-by-card-email input. On change, fires upsertAbandonedCart with
 * the updated email.
 */
(function() {
  const config = window.__ab_cart_configs__ || {};
  const accountID = config.accountID;
  const secret = config.secret;
  if (!accountID || !secret) {
    console.error('Navis config missing accountID or secret');
    return;
  }

  function upsertAbandonedCart(data) {
    const url = \`https://fusion-api.navisperformance.com/sca/upsertAbandonedCart/?acctNbr=\${accountID}&jsPass=\${secret}\`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).catch(console.error);
  }

  function collectSessionData(email) {
    // Use Navis' session utility if available, otherwise minimal payload
    if (window.Navis && typeof Navis.setSessionData === 'function') {
      return Navis.setSessionData({ email });
    }
    return { email };
  }

  function bindEmailListener() {
    const emailEl = document.getElementById('pay-by-card-email');
    if (!emailEl || emailEl._upsertBound) return;
    emailEl._upsertBound = true;
    emailEl.addEventListener('change', function() {
      const sessionData = collectSessionData(emailEl.value);
      upsertAbandonedCart(sessionData);
    });
    console.log('[Navis] upsert listener bound on #pay-by-card-email');
  }

  function checkAndBind() {
    if (/^#\/booking\/step-3(?:\?|$)/.test(window.location.hash)) {
      bindEmailListener();
    }
  }

  // Bind on load
  window.addEventListener('DOMContentLoaded', checkAndBind);
  // Also re-check on hash change
  window.addEventListener('hashchange', checkAndBind);
})();
