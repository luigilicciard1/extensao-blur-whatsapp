const root = document.documentElement;

const apply = (enabled) => root.classList.toggle("fami-blur", enabled);
const applyAmount = (amount) => root.style.setProperty("--fami-blur-amount", `${amount}px`);

chrome.storage.local.get(["enabled", "blurAmount"]).then(({ enabled = false, blurAmount = 6 }) => {
  apply(enabled);
  applyAmount(blurAmount);
});

chrome.storage.onChanged.addListener((c) => {
  if (c.enabled) apply(c.enabled.newValue);
  if (c.blurAmount) applyAmount(c.blurAmount.newValue);
});
