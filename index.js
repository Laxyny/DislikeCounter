chrome.webNavigation.onHistoryStateUpdated.addListener(
    () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const API = "https://returnyoutubedislikeapi.com/votes?videoId=";
        const ID = tabs[0].url.split("?v=")[1];
        const response = fetch(`${API}${ID}`);
        const data = response.json();

        chrome.extension.onConnect.addListener((port) => {
            port.postMessage(data);
        });
    });

},
    { url: [{ urlMatches: "youtube.com/watch" }] }
);