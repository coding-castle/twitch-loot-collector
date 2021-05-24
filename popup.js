let onOff = document.getElementById("onoffswitch")

chrome.storage.sync.get("isEnabled", (data) => {
  const isEnabled = !!data.isEnabled
  onOff.checked = isEnabled
})


onOff.addEventListener("change", (evt) => {
  chrome.storage.sync.set({ isEnabled: evt.target.checked });
})
