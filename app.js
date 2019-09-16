//source idea for setinterval: http://jsfiddle.net/Ankit47/6wm3eky9/

let breathIn = 4;
let breathHold = 7;
let breathOut = 8;


const bri = document.getElementById('breath-in');
const brh = document.getElementById('breath-hold');
const bro = document.getElementById('breath-out');


let inB = () => {
    timerBi = setInterval(bI, 1000);
};

window.onload = () => { window.setTimeout(inB(), 6000) }

//timer to set interval for countdown in miliseconds and call the function
let
    timerBi,
    timerBh,
    timerBo;

const breathStage = ['Slowly Breath in', 'Hold the breath', 'Slowly Breath Out'];

let bFn = stage => stage.toUpperCase().toString();

//breath in
let bI = () => {

    if (breathIn == -1) {
        clearTimeout(timerBi);
        doBreathIn();
    } else {
        let counter = `${breathIn}`;
        bri.innerText = `${counter}  \n\n ${bFn(breathStage[0])}`;
        breathIn--;
    }
}

let doBreathIn = () => {
    bri.innerText = 'Breath hold';
    bro.innerText = '___◁◁◁◁___';
    brh.innerText = '_________'
    console.log(bri.innerHTML);
    timerBh = setInterval(bH, 1000);
}

//breath hold
let bH = () => {

    if (breathHold == -1) {
        clearTimeout(timerBh);
        doBreathHold();
    } else {
        brh.innerText = `${breathHold} ${bFn(breathStage[1])}`;
        breathHold--;
    }
}


let doBreathHold = () => {
    brh.innerText = 'Breath out';
    bro.innerText = '__▷▷▷▷▷▷▷';
    bri.innerText = '_________';
    console.log(brh.innerHTML);
    timerBo = setInterval(bO, 1000);

}

//breath out
let bO = () => {
    if (breathOut == 0) {
        clearTimeout(timerBo);
        doBreathOut();
    } else {
        bro.innerText = `${breathOut} ${bFn(breathStage[2])}`;
        breathOut--;
    }

}

let doBreathOut = () => {
    bro.innerText = 'Relax Breath';
    bri.innerText = 'Observe ';
    brh.innerText = '_________';
    console.log(bro.innerHTML);
    window.setTimeout(thodaRuko, 2 * 6000)
}

let thodaRuko = () => {
    document.location.reload()
}

//clock 

let displayTime = () => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector('.clock').textContent = time;
}
displayTime();
const createClock = setInterval(displayTime, 1000);


