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

let
    timerBi,
    timerBh,
    timerBo;


function bI() {

    if (breathIn == -1) {
        clearTimeout(timerBi);
        console.log(clearTimeout(timerBi));

        doBreathIn();
    } else {
        bri.innerText = breathIn + ' Slowly Breath in';
        breathIn--;
    }
}

function doBreathIn() {
    bri.innerText = 'Breath hold';
    bro.innerText = '_________';
    brh.innerText = '_________'
    console.log(bri.innerHTML);
    timerBh = setInterval(bH, 1000);
}


function bH() {

    if (breathHold == -1) {
        clearTimeout(timerBh);
        doBreathHold();
    } else {
        brh.innerText = breathHold + ' Hold the breath';
        breathHold--;
    }
}


function doBreathHold() {
    brh.innerText = 'Breath out';
    bro.innerText = '_________';
    bri.innerText = '_________';
    console.log(brh.innerHTML);
    timerBo = setInterval(bO, 1000);

}


function bO() {
    if (breathOut == 0) {
        clearTimeout(timerBo);
        doBreathOut();
    } else {
        bro.innerText = breathOut + ' Slowly Breath Out';
        breathOut--;
    }

}

function doBreathOut() {
    bro.innerText = 'Breath in';
    bri.innerText = '_________';
    brh.innerText = '_________';
    console.log(bro.innerHTML);
    document.location.reload()
}

inB()





