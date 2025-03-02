const { chromium } = require('playwright'); // or 'firefox', 'webkit'

/**
 * Initializes a browser context with video recording enabled.
 * @param {string} videoDirectory - Directory to save videos.
 * @returns {Promise<{ browser: Browser, context: BrowserContext }>} - A browser and context with video recording enabled.
 */
async function initBrowserWithVideo(videoDirectory = 'videos/') {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo: {
            dir: videoDirectory, // Directory to save videos
        },
    });
    return { browser, context };
}

/**
 * Stops the video recording and returns the video file path.
 * @param {Page} page - The page instance.
 * @returns {Promise<string>} - Path of the saved video.
 */
async function getVideoPath(page) {
    const video = await page.video();
    return video.path();
}

module.exports = { initBrowserWithVideo, getVideoPath };
