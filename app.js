//source idea for setinterval: http://jsfiddle.net/Ankit47/6wm3eky9/

let breathIn = 2;
let breathHold = 2;
let breathOut = 2;


const bri = document.getElementById('breath-in');
const brh = document.getElementById('breath-hold');
const bro = document.getElementById('breath-out');


let inB = () => {
    timerBi = setInterval(bI, 1000);
};

window.onload = ()=>{window.setTimeout(inB(), 6000)}

//timer to set interval for countdown in miliseconds and call the function
let
    timerBi,
    timerBh,
    timerBo;


//breath in
function bI() {

    if (breathIn == -1) {
        clearTimeout(timerBi);
        doBreathIn();
    } else {
        bri.innerText = `${breathIn}  Slowly Breath in`;
        breathIn--;
    }
}

function doBreathIn() {
    bri.innerText = 'Breath hold';
    bro.innerText = '___◁◁◁◁___';
    brh.innerText = '_________'
    console.log(bri.innerHTML);
    timerBh = setInterval(bH, 1000);
}

//breath hold
function bH() {

    if (breathHold == -1) {
        clearTimeout(timerBh);
        doBreathHold();
    } else {
        brh.innerText = `${breathHold} Hold the breath`;
        breathHold--;
    }
}


function doBreathHold() {
    brh.innerText = 'Breath out';
    bro.innerText = '__▷▷▷▷▷▷▷';
    bri.innerText = '_________';
    console.log(brh.innerHTML);
    timerBo = setInterval(bO, 1000);

}

//breath out
function bO() {
    if (breathOut == 0) {
        clearTimeout(timerBo);
        doBreathOut();
    } else {
        bro.innerText = `${breathOut} Slowly Breath Out`;
        breathOut--;
    }

}

function doBreathOut() {
    bro.innerText = 'Breath in';
    bri.innerText = '_________';
    brh.innerText = '_________';
    console.log(bro.innerHTML);
    window.setTimeout(thodaRuko, 2*6000)
}

function thodaRuko () {
    document.location.reload()
}



//clock 

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector('.clock').textContent = time;
  }
  displayTime();
  const createClock = setInterval(displayTime, 1000);



