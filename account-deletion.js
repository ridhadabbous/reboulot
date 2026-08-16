(function() {
  const API_BASE = 'https://registration-backend.dsridha.workers.dev';

  function dict() {
    return (typeof translations !== 'undefined' && translations[currentLang]) || {};
  }

  function buildMailto() {
    const d = dict();
    const emailInput = document.getElementById('del-email');
    const phoneInput = document.getElementById('del-phone');
    const typeSel = document.getElementById('del-type');
    const email = emailInput ? emailInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const service = typeSel && typeSel.selectedIndex > 0 ? typeSel.options[typeSel.selectedIndex].text : '';
    const subject = d['ad_email_subject'] || 'Account Deletion Request';
    let body = d['ad_email_body'] || '';
    body = body
      .split('{email}').join(email || '[your registered email]')
      .split('{phone}').join(phone || '[your registered phone]')
      .split('{service}').join(service || '[service type]');
    return 'mailto:support@reboulot.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  function refreshMailto() {
    const link = document.getElementById('del-mailto');
    if (link) link.href = buildMailto();
  }

  function showMessage(message, ok) {
    const el = document.getElementById('del-message');
    if (!el) return;
    el.textContent = message;
    el.className = 'form-message ' + (ok ? 'success' : 'error');
    el.style.display = 'block';
  }

  document.addEventListener('DOMContentLoaded', () => {
    refreshMailto();
    document.addEventListener('lang:changed', refreshMailto);

    ['del-email', 'del-phone'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', refreshMailto);
    });
    const typeSel = document.getElementById('del-type');
    if (typeSel) typeSel.addEventListener('change', refreshMailto);

    const form = document.getElementById('deletion-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.submit-btn');
      const d = dict();
      const okKey = d['ad_status_ok'] || 'Your details match our records. Our team will contact you to confirm.';
      const noMatchKey = d['ad_status_nomatch'] || 'We could not find a registration matching these details.';
      const errKey = d['form_error'] || 'Something went wrong. Please try again later.';
      const submitText = d['ad_btn_submit'] || 'Submit Deletion Request';

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner"></span> ' + (d['form_submitting'] || 'Submitting...');

      try {
        const fd = new FormData(form);
        let botcheck = fd.get('botcheck');
        const payload = {
          email: fd.get('email'),
          phone: fd.get('phone'),
          type: fd.get('type'),
          botcheck: botcheck ? 'true' : 'false'
        };

        const res = await fetch(API_BASE + '/delete-request', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        let result = {};
        try {
          result = await res.json();
        } catch (err) {}

        if (res.ok && result.success) {
          showMessage(okKey, true);
        } else if (result.message === 'no_match' || result.message === 'no_record' || result.message === 'phone_mismatch') {
          console.info('Deletion diagnostic:', result.message);
          showMessage(noMatchKey, false);
        } else {
          showMessage(errKey, false);
        }
      } catch (err) {
        console.error('Deletion Request Error:', err);
        showMessage(errKey, false);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitText;
      }
    });
  });
})();