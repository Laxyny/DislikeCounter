const port = chrome.extension.connect();

port.onMessage.addListener((data) => {
    console.log(data)
    /*const container = document.querySelector('.container')
    container.innerHTML = `
    <ul>
        <li><p>Likes : <span>${data.likes}</span></p></li>
        <li><p>Dislikes : <span>${data.dislikes}</span></p></li>
        <li><p>Ratio : <span>${Math.floor(((data.likes - data.dislikes) / (data.likes + data.dislikes)) *100)}%</span></p></li>
    </ul>
    `*/
});