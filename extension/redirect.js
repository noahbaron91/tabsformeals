const TARGET_URL = 'https://tabsformeals.com/tab';

try {
  chrome.tabs.getCurrent(({ id }) => {
    chrome.tabs.update(id, { url: TARGET_URL });
  });
} catch (error) {
  // This method is worse because the search bar loses focus
  window.location.href = TARGET_URL;
}
