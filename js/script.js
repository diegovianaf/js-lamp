let turnOn = document.querySelector('#turnOn')
let turnOff = document.querySelector('#turnOff')
let lamp = document.querySelector('#lamp')

function lampOn(){
  lamp.src = './img/lamp-on.gif'
}

function lampOff(){
  lamp.src = './img/lamp-off.gif'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)