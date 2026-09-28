async function toggle() {
  const { enabled = false } = await chrome.storage.local.get("enabled");
  await chrome.storage.local.set({ enabled: !enabled });
}

// Estado mostrado por uma bolinha no próprio ícone (verde = ON, vermelha = OFF):
// o badge de texto tem tamanho fixo e não dá pra diminuir.
async function syncBadge() {
  const { enabled = false } = await chrome.storage.local.get("enabled");
  const state = enabled ? "on" : "off";

  chrome.action.setBadgeText({ text: "" });
  chrome.action.setIcon({
    path: {
      16: `icons/icon16-${state}.png`,
      32: `icons/icon32-${state}.png`,
    },
  });
}

chrome.commands.onCommand.addListener((cmd) => cmd === "toggle-blur" && toggle());
chrome.storage.onChanged.addListener(syncBadge);
chrome.runtime.onStartup.addListener(syncBadge);
chrome.runtime.onInstalled.addListener(syncBadge);
