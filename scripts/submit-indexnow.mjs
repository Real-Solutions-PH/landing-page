// Post-deploy script: submits all site URLs to IndexNow
// Run automatically via "postbuild" in package.json
// Or manually: node scripts/submit-indexnow.mjs

const INDEXNOW_KEY = 'realsolutionsph2024a1b2c3d4e5f6';
const HOST = 'realsolutionsph.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/about`,
  `https://${HOST}/services`,
  `https://${HOST}/work`,
  `https://${HOST}/blog`,
  `https://${HOST}/pricing`,
  `https://${HOST}/contact`,
  `https://${HOST}/how-we-work`,
  `https://${HOST}/privacy-policy`,
  `https://${HOST}/terms-of-service`,
];

async function submitToIndexNow() {
  console.log('[IndexNow] Submitting', urls.length, 'URLs...');

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
      }),
    });

    if (res.ok || res.status === 202) {
      console.log('[IndexNow] Success! Status:', res.status);
      console.log('[IndexNow] Submitted URLs:', urls);
    } else {
      console.warn('[IndexNow] Failed. Status:', res.status, await res.text());
    }
  } catch (err) {
    console.error('[IndexNow] Error:', err.message);
    process.exit(1);
  }
}

submitToIndexNow();
