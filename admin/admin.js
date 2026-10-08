$('signin').onclick = () => {
  if (!cfg.oauthWorker) {
    return alert('GitHub login has not been configured yet. See ADMIN-SETUP.md.');
  }

  // Generate a secure UUID without crypto.randomUUID()
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0'));

  const state = [
    hex.slice(0, 4).join(''),
    hex.slice(4, 6).join(''),
    hex.slice(6, 8).join(''),
    hex.slice(8, 10).join(''),
    hex.slice(10, 16).join('')
  ].join('-');

  sessionStorage.setItem('kf_oauth_state', state);

  location.href = cfg.oauthWorker.replace(/\/$/, '') +
    '/login?state=' + encodeURIComponent(state);
};
