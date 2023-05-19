if (document.querySelector(".settings")) {
    let button = document.getElementById('checkOFF');
    button.addEventListener('click', () => {
        chrome.tabs.executeScript({
            file: 'js/checkbox.js'
        })
    })
}