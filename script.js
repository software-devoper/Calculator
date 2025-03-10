let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let toggle = document.querySelector('.toggle');
let circle = document.querySelector('.circle');
let sun = document.querySelector('#sun');
let body = document.querySelector('body');
let oper = document.querySelectorAll('#ma');
let number = document.querySelectorAll('#or');
let acDel = document.querySelectorAll('#ov');
let str = ' ';
function beep() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.5);
}
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        beep(); // Play the beep sound
        let val = e.target.innerText;
        console.log(val);

        if (val === 'AC') {
            str = '';
            display.innerText = str;
        } 
        else if (val === 'DEL') {
            str = display.innerText.slice(0, -1);
            display.innerText = str;
        } 
        else if (val === '=') {
            try {
                let expression = display.innerText.replace(/×/g, '*').replace(/÷/g, '/');
                const result = eval(expression);
                display.innerText = result ?? '';
            } catch {
                display.innerText = 'Error';
            }
        } 
        else {
            display.innerText += val;
            setTimeout(() => {
                display.scrollLeft = display.scrollWidth;
            }, 0);
        }
    });
});

toggle.addEventListener('click', () => {
    beep();
    if (sun.className == 'fa-solid fa-sun') {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});

let setting = document.querySelector('#se');
setting.addEventListener('click', () => {
    beep();
    if (toggle.style.display === 'flex') {
        toggle.style.display = 'none';
        setting.style.transform = 'rotate(0deg)';
    }
    else {
        toggle.style.display = 'flex';
        setting.style.transform = 'rotate(90deg)';
    }
})

// Function to apply dark mode styles
function applyDarkMode() {
    console.log('Applying dark mode');
    sun.className = 'fa-solid fa-moon';
    toggle.style.backgroundImage = "url('night.webp')";
    circle.style.backgroundColor = '#3b3939';
    display.style.color = 'black';
    sun.style.color = 'white';
    circle.style.transform = "translateX(52px)";
    body.style.backgroundColor = '#8fa694';
    setting.style.color = 'white';
    oper.forEach((wh) => {
        wh.style.backgroundColor = '#053101a1';
        wh.style.color = 'white';
    });
    number.forEach((wh) => {
        wh.style.backgroundColor = 'white';
        wh.style.color = 'black';
    });
    acDel.forEach((ac) => {
        ac.style.backgroundColor = 'rgba(5, 49, 1, 0.63)';
        ac.style.color = 'white';
    });
}

// Function to apply light mode styles
function applyLightMode() {
    console.log('Applying light mode');
    display.style.color = 'white';
    sun.className = 'fa-solid fa-sun';
    toggle.style.backgroundImage = "url('day.jpg')";
    circle.style.backgroundColor = '#797171';
    sun.style.color = 'yellow';
    circle.style.transform = "translateX(0)";
    body.style.backgroundColor = '#151715';
    setting.style.color = 'rgb(73, 72, 72)';

    oper.forEach((wh) => {
        wh.style.backgroundColor = '#f302a9';
        wh.style.color = 'white';
    });
    number.forEach((wh) => {
        wh.style.backgroundColor = '#2f2e2e';
        wh.style.color = 'rgb(0, 98, 255)';
    });
    acDel.forEach((ac) => {
        ac.style.backgroundColor = '#2f2e2e';
        ac.style.color = 'rgb(128 124 124)';
    });
}

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        applyLightMode();
    } else {
        applyDarkMode();
    }
});

if (darkModeMediaQuery.matches) {
   
    applyLightMode();
} else {
    applyDarkMode();
}
