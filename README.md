# NOVA — GitHub Pages website

A responsive, monochrome, **static** promotional website for the NOVA Android calculator. Includes all seven project screenshot **mockups** and a standalone HTML privacy policy page. No build tools, database, accounts, external web fonts, analytics, cookies, or hosting subscription are required to run this site.

> **Before you publish:** the screenshots in `assets/screenshots/` are project design mockups, **not verified device screenshots**. They are labeled on the website and inside the images. Replace them with real on-device captures when you have tested the release APK. The site's copy describes only the limited features in the available source project, not imagined future features.

## What to upload

Upload **the contents of this directory**, preserving the folder structure, to the root of the repository from which you will serve GitHub Pages:

```text
index.html                 # landing page at your root URL
privacy-policy.html        # public privacy URL
styles.css                 # styling, fully local
site.js                    # screenshot preview dialog and optional links
config.js                  # editable official links and contact email
.nojekyll                  # avoid Jekyll processing
assets/
  icons/
    nova-icon.svg
    nova-icon-512.png
  og-preview.png           # image for social share meta tag
  screenshots/
    01-home-MOCKUP.png
    02-calculator-MOCKUP.png
    03-converter-MOCKUP.png
    04-date-lab-MOCKUP.png
    05-finance-MOCKUP.png
    06-solver-MOCKUP.png
    07-builder-MOCKUP.png
README.md                  # instructions for you; not a public site page
```

## Publish via GitHub Pages

1. Create or open a repository (for example, `nova-calculator`) and upload the **contents** of this directory to its root. Do **not** upload only the ZIP or nest the whole `NOVA-GitHub-Pages` directory under the repository root.
2. In the repository, open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**; choose the branch containing the files (commonly `main`) and folder **`/(root)`**, then save.
3. Open the GitHub Pages URL shown in the repository's Pages settings after the deployment has finished. Your URL is normally `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/` for a project site or `https://YOUR_USERNAME.github.io/` for a specially named user site. Use the actual URL shown in GitHub Pages settings.
4. Your landing page is the root URL. Your app-privacy-policy URL is `<YOUR_GITHUB_PAGES_URL>/privacy-policy.html` (preserve the repository subpath for project sites). Put this **exact deployed privacy URL** in Google Play Console after reviewing the policy. Do not submit the HTML file path or a GitHub repository file-view URL.
5. Optional: You can instead put these same files inside a `docs/` directory in your source-code repository and choose `/docs` in Pages settings. Keep all assets and pages together inside `docs/`.

The website uses **relative URLs** so it works on either user-site or project-site GitHub Pages without hardcoding a repository name.

## Update links and publisher identity before publication

Open `config.js`:

```js
window.NOVA_SITE = Object.freeze({
  githubUrl: "https://github.com/YOUR_USERNAME/YOUR_REPOSITORY",
  downloadUrl: "", // Fill ONLY after a real, tested release APK is published
  playStoreUrl: "", // Fill ONLY after the actual listing is live
  contactEmail: "contact@example.com" // Replace with a monitored address
});
```

- Set `githubUrl` to a real public repository URL if you want to show a source-code CTA. The current `config.js` intentionally hides it until configured.
- Use `downloadUrl` **only** for a legitimate, verified APK or a release page with a verified build; don't link to the project source ZIP as an APK download.
- Set `playStoreUrl` only after your actual listing exists. The website hides any CTA with an empty or non-HTTPS URL.
- `contact@example.com` is **only a sample address**. Replace it with an address you monitor, both in `config.js` and in `privacy-policy.html`; replace the footer placeholder note if you wish.
- Replace `[Your publishing name]`, the draft effective date and the publisher-action notice in `privacy-policy.html` when you have reviewed the **actual published release**, not merely the source code. The policy is a useful starting point, **not a legal or store-compliance guarantee**.
- If you operate a different published build that adds analytics, crash reports, ads, cloud sync, another SDK, or permissions, update the policy to reflect it accurately.

### Share-preview image on social networks

`index.html` currently uses a relative Open Graph image URL:

```html
<meta property="og:image" content="assets/og-preview.png">
```

Some social preview crawlers require an absolute HTTPS image URL. After your Pages URL is live, replace `content` with the actual absolute URL of `/assets/og-preview.png` under **your** Pages base path, and optionally add `<meta property="og:url" content="YOUR_FULL_LANDING_PAGE_URL">`.

## Screenshot files

The seven images were copied from the last supplied **monochrome project ZIP**. The word `MOCKUP` in every filename and the small mockup watermark in each image are intentional. The gallery labels these images as conceptual designs. Do not market them as real production captures, and don't submit them to a store as device captures.

To substitute real captures later, either (a) replace each image with the actual capture under the existing filename and update the website labels/alt text/`MOCKUP` wording, or (b) update the image paths in `index.html` to new descriptive filenames and change the disclaimer throughout. Keep images under `assets/screenshots/`.

## Local preview / checks

You can open `index.html` directly in a browser; for the most accurate Pages-like test, run this command **from this directory**:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080/` and `http://localhost:8080/privacy-policy.html`. Check at phone and desktop widths, click all seven previews, and check tab/keyboard navigation.

The bundle is ready for upload as **website source files**. This ZIP does not include an Android APK or the Android Studio project; that is a separate archive.
