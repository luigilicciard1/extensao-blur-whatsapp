const enabledSwitch = document.getElementById("enabledSwitch");
const blurAmount = document.getElementById("blurAmount");
const blurValue = document.getElementById("blurValue");

async function load() {
  const { enabled = false, blurAmount: amount = 6 } = await chrome.storage.local.get([
    "enabled",
    "blurAmount",
  ]);
  enabledSwitch.checked = enabled;
  blurAmount.value = amount;
  blurValue.textContent = `${amount}px`;
}

enabledSwitch.addEventListener("change", () => {
  chrome.storage.local.set({ enabled: enabledSwitch.checked });
});

blurAmount.addEventListener("input", () => {
  blurValue.textContent = `${blurAmount.value}px`;
  chrome.storage.local.set({ blurAmount: Number(blurAmount.value) });
});

load();
