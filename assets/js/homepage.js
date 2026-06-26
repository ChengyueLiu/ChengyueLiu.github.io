/* Homepage interactions
   - Email button: copy address to clipboard instead of opening a mail client,
     with a brief "Copied!" confirmation. Falls back to mailto: if JS is off.
   (Publication-year collapsing is handled natively by <details>/<summary>.) */
(function () {
  var btn = document.getElementById('email-copy');
  if (!btn) return;

  var label = btn.querySelector('.hp-btn__label');
  var email = 'chengyue.liu@ntu.edu.sg';
  var timer;

  function flash() {
    if (!label) return;
    label.textContent = 'Copied!';
    clearTimeout(timer);
    timer = setTimeout(function () { label.textContent = 'Email'; }, 1600);
  }

  function fallbackCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (e) {}
  }

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(flash, function () { fallbackCopy(email); flash(); });
    } else {
      fallbackCopy(email);
      flash();
    }
  });
})();
