const querySelector = 'button[aria-label="Claim Bonus"]'

chrome.runtime.onInstalled.addListener(() => {
  setInterval(() => {
    console.log(document.URL)
  }, 5000)
});

setInterval(() => {
  console.log(document.URL)
}, 5000)
