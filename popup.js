// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

let onOff = document.getElementById("onoffswitch")

onOff.addEventListener("change", (evt) => {
  console.log("storage set")
  chrome.storage.sync.set({ isEnabled: evt.target.checked });
})

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

// chrome.scripting.executeScript({
//   target: { tabId: tab.id },
//   function: claimBonusLoot,
// });
