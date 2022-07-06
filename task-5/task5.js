const massageBox = document.querySelector('.message-area');
const buttonSend = document.querySelector('.send-button');
const geo = document.querySelector('.geolocation');
//taking server
let websocket;
window.onload = function () {

    websocket = new WebSocket('wss://ws.ifelse.io');

    websocket.send('message-from-others', function (message) {
        var html = '<div class="message-box others-message-box">' +
            '<div class="message others-message"> ' + message + ' </div>' +
            '<div class="separator"></div>' +
            '</div>';

        document.getElementById("message-area").innerHTML += html;
    })
}

function sendMessage() {
    let message = document.getElementById("typing-box").value;
    let html = '<div class="message-box my-message-box">' +
        '<div class="message my-message"> ' + message + ' </div>' +
        '<div class="separator"></div>' +
        '</div>';

    document.getElementById("message-area").innerHTML += html;
    document.getElementById("typing-box").value = "";

    websocket.send('codeboard-message', message);
}

//geolocation
const success = (position) => {
    let location = document.createElement("p");
    location.className('.location-massage')
    loca.innerHTML = massageBox;
    output.appendChild(location);
    location.textContent = position.date.href = `https://www.openstreetmap.org/ `
}

const error = (error) => {
    console.log(console.error("some thinkgs wrong"))
}

geo.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success, error);
})