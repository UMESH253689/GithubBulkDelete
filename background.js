chrome.runtime.onInstalled.addListener(() => {
  // Code to execute when extension is installed
  console.log("Chat Manager Extension Installed");
});

chrome.action.onClicked.addListener((tab) => {
  // Inject content script when extension icon is clicked
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
