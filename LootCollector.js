console.log("Loot Collector init");
const querySelector = 'button[aria-label="Claim Bonus"]';

setInterval(() => {
  console.log("interval run", document.URL);
  const loot = document.querySelector(querySelector);
  if (loot) {
    loot.click();
  }
}, 5000);

chrome.storage.sync.get("isEnabled", (data) => {
  console.log("storage data", data);
});
