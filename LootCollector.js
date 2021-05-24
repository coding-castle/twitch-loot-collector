console.log("Loot Collector init");
const querySelector = 'button[aria-label="Claim Bonus"]';

setInterval(() => {
  chrome.storage.sync.get("isEnabled", (data) => {
    const { isEnabled } = data;
    if (isEnabled) {
      const loot = document.querySelector(querySelector);
      if (loot) {
        loot.click();
      }
    }
  });
}, 5000);
