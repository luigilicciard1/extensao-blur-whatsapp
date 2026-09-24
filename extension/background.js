async function toggle() {
  const { enabled = false } = await chrome.storage.local.get("enabled");
  await chrome.storage.local.set({ enabled: !enabled });
}

async function syncBadge() {
  const { enabled = false } = await chrome.storage.local.get("enabled");

  chrome.action.setBadgeText({ text: enabled ? "ON" : "OFF" });

  if (enabled) {
    chrome.action.setBadgeBackgroundColor({ color: "#1f7a4d" });
  } else {
    chrome.action.setBadgeBackgroundColor({ color: "#ff0000" });
  }
}

chrome.commands.onCommand.addListener((cmd) => cmd === "toggle-blur" && toggle());
chrome.storage.onChanged.addListener(syncBadge);
chrome.runtime.onStartup.addListener(syncBadge);
chrome.runtime.onInstalled.addListener(syncBadge);
