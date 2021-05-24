const querySelector = 'button[aria-label="Claim Bonus"]'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  setInterval(() => {
    console.log(document.URL)
  }, 5000)
});
