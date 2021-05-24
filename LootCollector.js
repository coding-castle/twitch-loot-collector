console.log("Loot Collector init");
chrome.storage.sync.get("isEnabled", (data) => { 
    if (data.isEnabled === undefined) {
        chrome.storage.sync.set({ isEnabled: true });
    }
})
const querySelector = 'button[aria-label="Claim Bonus"]';

setInterval(() => {
  chrome.storage.sync.get("isEnabled", (data) => {
    console.log("interval data", data)
    const { isEnabled } = data;
    if (isEnabled) {
      const loot = document.querySelector(querySelector);
      if (loot) {
        loot.click();
      }
    }
  });
}, 5000);
