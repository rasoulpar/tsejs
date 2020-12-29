const interval = () => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    const div = document.getElementById('div1') != null ? document.getElementById('div1') : document.createElement('div');
    div.setAttribute('id', 'div1');
    div.textContent = time;
    const logo = document.getElementById('logo');
    logo.appendChild(div);
    timeout = getRandom();
    console.log(timeout);
    setTimeout(interval, timeout);
}
const getRandom = (max = 350, min = 300) => {
    return Math.floor(Math.random() * (max - min) + min);
}

var timeout = 300;
setTimeout(interval, timeout);