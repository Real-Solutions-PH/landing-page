const INDEXNOW_KEY = 'realsolutionsph2024a1b2c3d4e5f6';
const HOST = 'realsolutionsph.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const ALL_URLS = [
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

/**
 * Submit URLs to IndexNow (notifies Bing and other search engines)
 * @param urls - array of full URLs to submit. Defaults to all site URLs.
 */
export async function submitToIndexNow(urls: string[] = ALL_URLS): Promise<void> {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
      }),
    });

    if (response.ok || response.status === 202) {
      console.log('[IndexNow] URLs submitted successfully:', urls);
    } else {
      console.warn('[IndexNow] Submission failed with status:', response.status);
    }
  } catch (error) {
    console.error('[IndexNow] Error submitting URLs:', error);
  }
}

export { ALL_URLS, INDEXNOW_KEY, HOST };
