let lamp = document.querySelector('#lamp')
let turnOnOff = document.querySelector('#turnOnOff')

function lampOn(){
  lamp.src = './img/lamp-on.gif'
}

function lampOff(){
  lamp.src = './img/lamp-off.gif'
}

function lampOnOff(){
  if (turnOnOff.textContent === 'Turn On'){
    lampOn()
    turnOnOff.textContent = 'Turn Off'
  } else{
    lampOff()
    turnOnOff.textContent = 'Turn On'
  }
}

turnOnOff.addEventListener('click', lampOnOff)

