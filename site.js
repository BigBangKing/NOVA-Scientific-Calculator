"use strict";
/* Website contains no analytics, tracker, API or outbound calls of its own.
   Links are inserted only when you set a real https:// URL in config.js. */
(function () {
  const config = window.NOVA_SITE || {};
  const publicLinks = {
    github: config.githubUrl,
    download: config.downloadUrl,
    play: config.playStoreUrl
  };
  let hasLink = false;
  Object.entries(publicLinks).forEach(([name, value]) => {
    const anchor = document.querySelector('[data-link="' + name + '"]');
    if (!anchor || typeof value !== 'string') return;
    let url;
    try { url = new URL(value); } catch (_) { return; }
    if (url.protocol !== 'https:') return;
    anchor.href = url.href;
    anchor.hidden = false;
    anchor.rel = 'noopener noreferrer';
    hasLink = true;
  });
  const releaseLinks = document.querySelector('#release-links');
  if (releaseLinks && hasLink) releaseLinks.hidden = false;

  const email = typeof config.contactEmail === 'string' ? config.contactEmail.trim() : '';
  // A neutral placeholder is displayed until the actual publisher updates it.
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.querySelectorAll('[data-contact]').forEach((link) => {
      link.href = 'mailto:' + email;
      if (link.dataset.showEmail === 'true') link.textContent = email;
    });
  }
  document.querySelectorAll('#year').forEach((el) => { el.textContent = String(new Date().getFullYear()); });

  const dialog = document.getElementById('preview-dialog');
  const previewImage = document.getElementById('preview-image');
  const previewTitle = document.getElementById('preview-title');
  if (!dialog || !previewImage || !previewTitle) return;
  const close = document.getElementById('close-dialog');
  document.querySelectorAll('.gallery-open').forEach((button) => {
    button.addEventListener('click', () => {
      const image = button.dataset.image;
      const title = button.dataset.title;
      // Accept only the static assets declared in this package.
      if (!image || !/^assets\/screenshots\/[a-zA-Z0-9-]+\.png$/.test(image)) return;
      previewImage.src = image;
      previewImage.alt = button.querySelector('img')?.alt || 'NOVA UI concept preview';
      previewTitle.textContent = title || 'NOVA preview';
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else window.open(image, '_blank', 'noopener');
    });
  });
  close?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { previewImage.removeAttribute('src'); });
})();
