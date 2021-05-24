// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

let interval = null

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  console.log("clicked")
  if (interval !== null) {
    clearInterval(interval)
    interval = null
  } else {
    interval = setInterval(async () => {

      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: claimBonusLoot,
      });
    }, 5000)
  }
});

// The body of this function will be execuetd as a content script inside the
// current page
function claimBonusLoot() {
  console.log("bonus loot", document.URL)
}
