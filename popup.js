let onOff = document.getElementById("onoffswitch")

chrome.storage.sync.get("isEnabled", (data) => {
  const isEnabled = !!data.isEnabled
  onOff.checked = isEnabled
})


onOff.addEventListener("change", (evt) => {
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
