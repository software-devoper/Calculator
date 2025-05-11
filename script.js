let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('.display');
let toggle = document.querySelector('.toggle');
let circle = document.querySelector('.circle');
let sun = document.querySelector('#sun');
let body = document.querySelector('body');
let oper = document.querySelectorAll('#ma');
let number = document.querySelectorAll('#or');
let acDel = document.querySelectorAll('#ov');
let unitIcon = document.querySelector('.unit');
let unitPage = document.querySelector('.unitPage');
let arrow = document.querySelector('#arrow');
let menuIcon = document.querySelector('#menu');
let del = document.querySelector('#del');
let Units = document.querySelectorAll('.uni');
let mainContainer = document.querySelector('.mainContainer');
let units=document.querySelector('.units');
let AllU=document.querySelectorAll('.u');
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
        else if (e.target.closest('.de')) {
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
        sun.className = 'fa-solid fa-moon';
        applyLightMode();

    } else {
        applyDarkMode();
        sun.className = 'fa-solid fa-sun';
    }
});

let Color=null;
// Function to apply dark mode styles
function
    applyLightMode() {
    console.log('Applying Light mode');
    display.style.color = 'black';
    sun.style.color = 'white';
    menuIcon.style.fill = 'white';
    body.style.backgroundColor = 'rgb(173 232 250)';
    oper.forEach((wh) => {
        wh.style.backgroundColor = 'rgba(0, 234, 255, 0.63)';
        wh.style.color = 'white';
    });
    number.forEach((wh) => {
        wh.style.backgroundColor = 'white';
        wh.style.color = '#0c9bc0';
    });
    acDel.forEach((ac) => {
        ac.style.backgroundColor = 'rgb(0 234 255 / 63%)';
        ac.style.color = 'white';
    });
    del.style.fill = 'white';
    unitPage.style.backgroundColor='rgb(173, 232, 250)';
    units.style.color='rgba(0, 234, 255, 0.63)';
   Color=1;
   AllU.forEach((val)=>{
    val.style.color='black';
   })
}

// Function to apply light mode styles
function applyDarkMode() {
    console.log('Applying  mode');
    display.style.color = 'white';
    sun.style.color = '#31312b';
    body.style.backgroundColor = '#151715';
    menuIcon.style.fill = 'rgb(76 76 75)';
    oper.forEach((wh) => {
        wh.style.backgroundColor = 'rgb(2 45 243)';
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
    del.style.fill = 'rgb(128, 124, 124)';
    unitPage.style.backgroundColor='#151715';
    unitPage.style.color='white';
    units.style.color='white';
    Color=2;
    AllU.forEach((val)=>{
        val.style.color='white';
    })
}

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', (e) => {
    if (e.matches) {

        applyDarkMode();
    } else {
        applyLightMode();
    }
});

if (darkModeMediaQuery.matches) {
    applyDarkMode();
} else {
    applyLightMode();
}

// Unit Page
unitIcon.addEventListener('click', () => {

    if (unitPage.style.transform === 'translatex(100%)') {
        unitPage.style.transform = 'translatex(0%)';
    }
    else {
        unitPage.style.transform = 'translatex(0%)';
    }
});

arrow.addEventListener('click', () => {

    if (unitPage.style.transform === 'translatex(0%)') {
        unitPage.style.transform = 'translatex(-100%)';
    }
    else {
        unitPage.style.transform = 'translatex(100%)';
    }
});

Units.forEach((val, i) => {
    val.setAttribute('id', 'content' + i);
    val.addEventListener('click', (e) => {
        switch (val.id) {
            case 'content0':
                console.log('currency Convertor');
                CurrencyConvertor();
                break;
            case 'content1':
                console.log('Length Calculate');
                LengthCalculate();
                break;
            case 'content2':
                console.log('Area');
                AreaCalculate();
                break;
            case 'content3':
                console.log('Volume');
                VolumeCalculate();
                break;
            case 'content4':
                console.log('Weight');
                WeightCalculate();
                break;
            case 'content5':
                console.log('Temperature');
                TemperatureCalculate();
                break;
            case 'content6':
                console.log('Speed');
                SpeedCalculate();
                break;
            case 'content7':
                console.log('Pressure');
                PressureCalculate();
                break;
            case 'content8':
                console.log('power');
                PowerCalculate();
                break;
            default: {
                console.log('Nothing');
            }
        }
    })
});

let CurrencyConvertor = () => {
    if(Color==1){
        TC='black';
    }
    else{
       TC='white';
    }
    let currencyPage = document.querySelector("#currency");
    if (!currencyPage) {
        mainContainer.style.display = "none";
        let currency = document.createElement("div");
        let c=null;
        let TC=null;
        let BC=null;
        let sbc=null;
        if(Color==1){
            currency.style.backgroundColor='rgb(173, 232, 250)';
            c='white';
            TC='black';
            BC='white';
            sbc='rgb(118 182 202)';
        }
        else{
           currency.style.backgroundColor='rgb(21, 23, 21)';
           c='rgb(93, 93, 92)';
           TC='white';
           BC='rgb(43, 42, 42)';
           sbc='rgb(29, 28, 28)';
        }
        
        currency.setAttribute("id", "currency");
        currency.className = "content";
        document.body.appendChild(currency);
        let mainPage = document.createElement('div');
        mainPage.className = 'mainPage';
        mainPage.innerText = 'hi my name is subhadip Mondal'
        let coment = document.createElement('div');
        coment.id = 'navShow';
        coment.style.color = 'white';
        coment.innerHTML = `<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="${TC}"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg><P style="color:${TC}">Currency Convertor</p>`;
        mainPage.innerHTML = ` <div class="page">
        <div class="SelectPage" style="background-color:${sbc}">
            <div class="note">
                <div class="cut"><svg id="close" id="back" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${TC}"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
                <p class="n" style="color:${TC}" >Select currency</p>
            </div>
            <div class="search">
            <div class="mix">
                <div class="serachIcon"><i id="icon" class="fa-solid fa-magnifying-glass"></i></div>
                <input id="searchInput" type="search">
            </div>
            </div>
            <div class="currencyList"></div>
        </div>
    <div class="coment">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg>
        currency convertor
    </div>
    <div class="inEx">
    <div class="input">
        <div class="input1" style="background-color:${c}">
            <div class="he"><div class="selectInput" style=color:${TC}>USD</div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></div>
            <input style=color:${TC} type="text" id="upper">
        </div>
        <div class="input2"  style="background-color:${c}">
             <div class="he"><div class="selectInput1" style=color:${TC}>INR</div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></div>
            <div style=color:${TC} class="result" id="lower">0</div>
        </div>
    </div>
    <div class="exchange"  style="background-color:${c}"><svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#e3e3e3"><path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"/></svg></div> 
</div>
 <div class="currencyButtons">
    <div class="numbers">
    <button style="background-color:${BC};color:${TC}" id="CB">7</button>
    <button style="background-color:${BC};color:${TC}" id="CB">8</button>
    <button style="background-color:${BC};color:${TC}" id="CB">9</button>
    <button style="background-color:${BC};color:${TC}" id="CB">4</button>
    <button style="background-color:${BC};color:${TC}" id="CB">5</button>
    <button style="background-color:${BC};color:${TC}" id="CB">6</button>
    <button style="background-color:${BC};color:${TC}" id="CB">1</button>
    <button style="background-color:${BC};color:${TC}" id="CB">2</button>
    <button style="background-color:${BC};color:${TC}" id="CB">3</button>
    <button style="background-color:${BC};color:${TC}" id="CB">00</button>
    <button style="background-color:${BC};color:${TC}" id="CB">0</button>
    <button style="background-color:${BC};color:${TC}" id="CB">.</button>
</div>
<div class="oprator">
    <button style="background-color:${BC};color:${TC}" id="CB">AC</button>
    <button style="background-color:${BC}" id="CB" class="rem" ><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="${TC}"><path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z"/></svg></button>
</div>
 </div>
</div>`
        currency.appendChild(coment);
        currency.appendChild(mainPage);
        document.getElementById("back").addEventListener("click", () => {
            currency.remove();
            mainContainer.style.display = "block";
        });
    }
    let AllButtons = document.querySelectorAll('#CB');
    let UpperSelectCurreny = document.querySelector('.selectInput');
    let LowerSelectCurreny = document.querySelector('.selectInput1');
    let Input = document.querySelector('#upper');
    let result = document.querySelector('.result');
    let CurrencyPage = document.querySelector('.SelectPage');
    let ClosePage = document.querySelector('#close');
    let currencylist = document.querySelector('.currencyList');
    let search = document.querySelector('#searchInput');
    let Refresh = document.querySelector('.exchange');
    let APIURL = "https://api.exchangerate-api.com/v4/latest/USD";

    let str = '';

    AllButtons.forEach((Button) => {
        Button.addEventListener('click', (e) => {
            let val = e.target.innerText;
            if (val === 'AC') {
                str = '';
                Input.value = str;
            } else if (e.target.closest('.rem')) {
                str = str.slice(0, str.length - 1);
                Input.value = str;
            } else {
                str += val;
                Input.value = str;
            }
            currencyConvertor();
        });
    });

    let activeSelectInput = null;
    let Active = null;
    let from = "USD";
    let to = "INR";

    let LoadCurrency = async () => {
        try {
            let response = await fetch(APIURL);
            let ActualData = await response.json();
            let Keys = Object.keys(ActualData.rates);

            currencylist.innerHTML = "";

            Keys.forEach((val) => {
                let List = document.createElement('div');
                List.className = 'list';
                List.style.color=`${TC}`;
                List.innerText = val;
                List.style.color=
                currencylist.appendChild(List);
            });

            AttachClickEvents();
        } catch (error) {
            alert('Check Internet connection');
        }
    };


    let AttachClickEvents = () => {
        setTimeout(() => {
            let allLists = document.querySelectorAll('.list');
            allLists.forEach((item) => {
                item.addEventListener('click', (e) => {
                    if (activeSelectInput) {
                        activeSelectInput.innerText = e.target.innerText;
                        CurrencyPage.style.transform = 'translateY(100%)';

                        if (Active === 1) {
                            from = activeSelectInput.innerText;
                        } else if (Active === 2) {
                            to = activeSelectInput.innerText;
                        }
                        activeSelectInput = null;
                        currencyConvertor();
                    }
                });
            });
        }, 500);
    };

    // searching currencies
    search.addEventListener('input', () => {
        let query = search.value.toLowerCase();
        document.querySelectorAll('.list').forEach((list) => {
            let listName = list.innerText.toLowerCase();
            if (listName.includes(query)) {
                list.style.display = 'flex';
            }
            else {
                list.style.display = 'none';
            }
        })
    })

    UpperSelectCurreny.addEventListener('click', () => {
        CurrencyPage.style.transform = 'translateY(0%)';
        activeSelectInput = UpperSelectCurreny;
        Active = 1;
    });

    LowerSelectCurreny.addEventListener('click', () => {
        CurrencyPage.style.transform = 'translateY(0%)';
        activeSelectInput = LowerSelectCurreny;
        Active = 2;
    });

    ClosePage.addEventListener('click', () => {
        CurrencyPage.style.transform = 'translateY(100%)';
        activeSelectInput = null;
        Active = null;
    });

    const currencyConvertor = async () => {
        if (!from || !to) {
            from = "USD";
            to = "INR";
        }
        console.log("Converting from:", from);
        console.log("Converting to:", to);

        try {
            let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
            let ActualData = await response.json();

            let rate = ActualData.rates[to];
            console.log("Exchange Rate:", rate);

            if (rate && Input.value) {
                let convertedAmount = (parseFloat(Input.value) * rate).toFixed(2);
                result.innerText = `${convertedAmount}`;
            } else {
                result.innerText = 0;
            }
        } catch (error) {
            alert('Check Internet connection');
        }
    };

    Refresh.addEventListener('click', (e) => {
        Input.value = '';
        result.innerText = 0;
        console.log(e.target.value);
    })
    Input.addEventListener('input', currencyConvertor);
    UpperSelectCurreny.addEventListener("click", currencyConvertor);
    LowerSelectCurreny.addEventListener("click", currencyConvertor);

    LoadCurrency();

};
// lentgh calculator
let LengthCalculate = () => {
    let lengthPage = document.querySelector('#length');
    if (!lengthPage) {
        let length = document.createElement('div');
        let coment = document.createElement('div');
        let lengthPage = document.createElement('div');
        lengthPage.id = 'lengthPage';
        coment.id = 'CL';
        mainContainer.style.display = 'none';
        length.setAttribute('id', 'length');
        length.className = 'content';
        let LC=null;
        let LI=null;
        let LIC=null;
        let NC=null;
        let PC=null;
        if(Color==1){
            length.style.backgroundColor='rgb(173, 232, 250)';
            LC='rgb(173, 232, 250)';
            LI='white';
            LIC='black';
            NC='#6cd5e5';
            PC='rgb(173, 232, 250)';
        }
        else{
           length.style.backgroundColor='rgb(21, 23, 21)';
           LC='rgb(21, 23, 21)'
           LI='#363636';
           LIC='white';
           NC='#535050';
           PC='#3d3d3d';
        }
        coment.innerHTML = `<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="${LIC}"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg><P style="color:${LIC}">Length Conversion</p>  `;
        lengthPage.innerHTML = `  <div class="mainlengthContainer">
    <div class="lengthContainer" style="background-color:${LC}">
        <div class="inputs">
            <div class="lengthInput1" style="background-color:${LI}">
                <div class="selectLenght1">
                    <div class="selectUnit1" style="color:${LIC}">Metres</div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>he</svg>
                </div>
                </div>
                <div class="Unit1">
                    <input style="color:${LIC}" id="lInput" type="text" >
                </div>
            </div>
            <div class="lengthInput2" style="background-color:${LI}">
                <div class="selectLenght2">
                    <div class="selectUnit2" style="color:${LIC}">Kilometres</div>  
                    <div> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>he</svg>
                </div>
                </div>
                <div class="Unit2">
                    <div style="color:${LIC}" class="lresult"></div>
                </div>
            </div>
            </div>
        <div class="lengthButtons">
            <div class="lnum">
          <button style="background-color:${LI};color:${LIC}" class="allb">7</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">8</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">9</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">4</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">5</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">6</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">1</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">2</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">3</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">00</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">0</button>
          <button style="background-color:${LI};color:${LIC}" class="allb">.</button>
        </div>
        <div class="lop">
          <button style="background-color:${LI};color:${LIC}" class="allb">AC</button>
          <button style="background-color:${LI}" class="allb re"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="${LIC}"><path d="M450.67-324 560-433.33 669.33-324l47.34-47.33-110-108.67 108.66-108.67L668-636 560-526.67 450.67-636l-47.34 47.33 110 108.67-110 108.67L450.67-324Zm-97.34 164q-15.83 0-30-7.08-14.16-7.09-23.33-19.59L80-480l219.33-293.33q9.17-12.5 23.34-19.59 14.16-7.08 30-7.08H814q27.5 0 47.08 19.58 19.59 19.59 19.59 47.09v506.66q0 27.5-19.59 47.09Q841.5-160 814-160H353.33Zm-190-320 190 253.33H814v-506.66H353.33L163.33-480ZM584-480Z"/></svg></button>
        </div>
        </div>
    </div>
    <div class="selectLengthUnit" style="background-color:${PC}">
        <div class="closeLengthPage" style="background-color:${NC}">
            <svg id="closePage" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="${LIC}"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
            <h1 style="color:${LIC}">Select unit</h1>
        </div>
        <div class="listLength">
            <div style="color:${LIC}" class="lengthlist" id="m">Metre</div>
            <div style="color:${LIC}" class="lengthlist" id="km">Kilometres</div>
            <div style="color:${LIC}" class="lengthlist" id="mm">Millimetres</div>
            <div style="color:${LIC}" class="lengthlist" id="mile">Miles</div>
            <div style="color:${LIC}" class="lengthlist" id="yard">Yard</div>
            <div style="color:${LIC}" class="lengthlist" id="cm">Centimetres</div>
            <div style="color:${LIC}" class="lengthlist" id="foot">Feet</div>
            <div style="color:${LIC}" class="lengthlist" id="inch">Inches</div>
        </div>
    </div>
</div>`;

        length.appendChild(coment);
        length.appendChild(lengthPage);
        document.body.appendChild(length);
        document.querySelector('#back').addEventListener('click', () => {
            length.remove();
            mainContainer.style.display = 'block';
        })
    }
    let selectlengthpage = document.querySelector('.selectLengthUnit');
    let selectLength = document.querySelector('.selectLenght1');
    let selectLenght2 = document.querySelector('.selectLenght2');
    let ClosePage = document.querySelector('#closePage');
    let AllList = document.querySelectorAll('.lengthlist');
    let selectUnit = document.querySelector('.selectUnit1');
    let selectUni2 = document.querySelector('.selectUnit2');
    let LResult = document.querySelector('.lresult');
    let lengthButtons = document.querySelectorAll('.allb');
    let Lenghtinput = document.querySelector('#lInput');
    const Lengthconversion = {
        m: 1,
        km: 0.001,
        cm: 100,
        mm: 1000,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701
    }
    let str = '';
    lengthButtons.forEach((val) => {
        val.addEventListener('click', (e) => {
            let m = e.target.innerText;

            if (m == 'AC') {
                str = '';
                Lenghtinput.value = str;
            }
            else if (e.target.closest('.re')) {
                str = str.slice(0, str.length - 1);
                Lenghtinput.value = str;
            }
            else {
                str += m;
                Lenghtinput.value = str;
            }
            LengthConvertor();
        })
    })
    let ActiveLength = null;
    let id = null;
    let fromlength = 1;
    let tolength = 0.001;
    AllList.forEach((list) => {
        list.addEventListener('click', (e) => {
            m = list.id;
            if (ActiveLength) {
                ActiveLength.innerText = e.target.innerText;
                if (ActiveLength == selectUnit) {
                    fromlength = Lengthconversion[m];
                }
                else if (ActiveLength == selectUni2) {
                    tolength = Lengthconversion[m];
                }
                LengthConvertor();
            }
            ActiveLength = null;
            selectlengthpage.style.bottom = '-90%';
        })
    })

    selectLength.addEventListener('click', () => {
        selectlengthpage.style.bottom = '0%';
        ActiveLength = selectUnit;
    })
    selectLenght2.addEventListener('click', () => {
        selectlengthpage.style.bottom = '0%';
        ActiveLength = selectUni2;
    })
    ClosePage.addEventListener('click', () => {
        selectlengthpage.style.bottom = '-90%';
        ActiveLength = null;
    })

    // console.log(input.value);
    const LengthConvertor = () => {

        let ConvertValue = (Lenghtinput.value / fromlength) * tolength;
        LResult.innerText = ConvertValue.toFixed(2);
    }
    LengthConvertor();
    Lenghtinput.addEventListener("input", LengthConvertor);
}

let AreaCalculate = () => {
    let AreaPage = document.querySelector('#area');
    if (!AreaPage) {
        mainContainer.style.display = 'none';
        let Area = document.createElement('div');
        let AreaNav = document.createElement('div');
        let AreaPage = document.createElement('div');
        AreaPage.className = 'AreaPage';
        AreaNav.className = 'AreaNav';
        Area.setAttribute('id', 'Area');
        Area.className = 'content';
        let IC=null;
        let TC=null;
        let PB=null;
        let NC=null;
        if(Color==1){
            Area.style.backgroundColor='rgb(173, 232, 250)';
            IC='White';
            TC='black';
            PB='rgb(173, 232, 250)';
             NC='#6cd5e5';
        }
        else{
           Area.style.backgroundColor='rgb(21, 23, 21)';
           IC='black'
           TC='white';
           PB='rgb(22, 20, 20)';
            NC='#323434';
        }
        AreaPage.innerHTML = ` <div class="areaContainer">
        <div class="areaPage" style="background-color:${PB}">
            <div  style="background-color:${NC}" class="closeArea"><div style="color:${TC}" class="areaUnit"><i style="color:${TC}" class="fa-solid fa-xmark cl"></i>Select Unit</div></div>
            <div class="pages">
            <h1 style="color:${TC}" id="units" class="sqm">Square Meters</h1>
            <h1 style="color:${TC}" id="units"  class="sqft">Square Feet</h1>
            <h1 style="color:${TC}" id="units"  class="sqkm">Square Kilometers</h1>
            <h1 style="color:${TC}" id="units"  class="acre">Acres</h1>
            <h1 style="color:${TC}" id="units"  class="hectare">Hectares</h1>
            <h1 style="color:${TC}" id="units" class="smm">Square millimetre</h1>
            <h1 style="color:${TC}" id="units" class="sdm">Square decimetre</h1>
            <h1 style="color:${TC}" id="units" class="scm">Square centimetre</h1>
            <h1 style="color:${TC}" id="units" class="smil">Square mile</h1>
            <h1 style="color:${TC}" id="units" class="syard">Square yard</h1>
            <h1 style="color:${TC}" id="units" class="sinch">Square inch</h1>
            <h1 style="color:${TC}" id="units" class="srod">Square rod</h1>
        </div>
        </div>
        <div class="areaoneANDtwo">
       <div class="AreaOne" style="background-color:${IC}">
        <div class="AreaSelectANDInput">
            <div class="AreaSelect1" style="color:${TC}" >Square Metere</div>
        </div>
        <div class="AreaInput">
            <input style="color:${TC}"  type="text" class="ArIn">
        </div>
       </div>
       <div class="AreaTwo" style="background-color:${IC}">
     <div class="AreaSelectANDResult">
        <div style="color:${TC}" class="AreaSelect2">Square Metere</div>
        <div style="color:${TC}" class="areaResult"></div>
        </div>
       </div>
    </div>
    <div class="AreaBt">
        <button style="background-color:${IC};color:${TC}" class="abt">7</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">8</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">9</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">4</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">5</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">6</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">1</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">2</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">3</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">00</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">0</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">.</button>
        <button style="background-color:${IC};color:${TC}"  class="abt">AC</button>
           <button style="background-color:${IC}" class="rem abt"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                    width="30px" fill="${TC}">
                    <path
                        d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
                </svg></button>
    </div>`;
        AreaNav.innerHTML = `<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="${TC}"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg><p style="color:${TC}">Area Conversion</p>`;
        document.body.appendChild(Area);
        Area.appendChild(AreaNav);
        Area.appendChild(AreaPage);
        document.querySelector("#back").addEventListener('click', () => {
            Area.remove();
            mainContainer.style.display = 'block';
        })
    }
    let AreaButtons = document.querySelectorAll('.abt');
    let Areaselect1 = document.querySelector('.AreaSelect1');
    let AreaInput = document.querySelector('.ArIn');
    let Areaselect2 = document.querySelector('.AreaSelect2');
    let AreaResult = document.querySelector('.areaResult');
    let Areapage = document.querySelector('.areaPage');
    let closeArea = document.querySelector('.cl');
    let AllUnits = document.querySelectorAll('#units');

    let AreaConversion = {
        sqm: 1,
        sqft: 10.764,
        sqkm: 0.000001,
        acre: 0.0002471,
        hectare: 0.0001,
        smm: 1000000,
        sdm: 100,
        scm: 10000,
        smil: 3.861E-7,
        syard: 1.19599,
        sinch: 1550.0031,
        srod: 0.0395369
    };

    AreaButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.innerText);
            if (e.target.innerText == 'AC') {
                AreaInput.value = '';
            } else if (e.target.closest('.rem')) {
                AreaInput.value = AreaInput.value.slice(0, -1);
            } else {
                AreaInput.value += e.target.innerText;
            }
            AreaConvertor();
        });
    });

    let ActiveArea = null;

    Areaselect1.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect1;
    });

    Areaselect2.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect2;
    });

    closeArea.addEventListener('click', () => {
        Areapage.style.bottom = '-100%';
        ActiveArea = null;
    });

    let toarea = 1;
    let fromarea = 1;
    let m = '';

    AllUnits.forEach((unit) => {
        unit.addEventListener('click', (e) => {
            m = e.target.classList[0];
            if (ActiveArea) {
                if (ActiveArea === Areaselect1) {
                    Areaselect1.innerText = e.target.innerText;
                    fromarea = AreaConversion[m];
                } else {
                    Areaselect2.innerText = e.target.innerText;
                    toarea = AreaConversion[m];
                }
                AreaConvertor();
            }
            Areapage.style.bottom = '-100%';
        });
    });

    let AreaConvertor = () => {
        if (!AreaInput.value) {
            AreaResult.innerText = 0;
            return;
        } else {
            let convertValue = (AreaInput.value * toarea) / fromarea;
            AreaResult.innerText = convertValue.toFixed(6);
        }
    };

    AreaInput.addEventListener('input', AreaConvertor);
    AreaConvertor();

}

let VolumeCalculate = () => {
    let VolumePage = document.querySelector('#Volume');
    if (!VolumePage) {
        mainContainer.style.display = 'none';
        let Volume = document.createElement('div');
        let VolumeNav = document.createElement('div');
        let VolumePage = document.createElement('div');
        Volume.setAttribute('id', 'Volume');
        Volume.className = 'content';
        let IC=null;
        let TC=null;
        let PB=null;
        let NC=null;
        if(Color==1){
            Volume.style.backgroundColor='rgb(173, 232, 250)';
            IC='White';
            TC='black';
            PB='rgb(173, 232, 250)';
             NC='#6cd5e5';
        }
        else{
           Volume.style.backgroundColor='rgb(21, 23, 21)';
           IC='black'
           TC='white';
           PB='rgb(22, 20, 20)';
            NC='#323434';
        }
        VolumeNav.className = 'VolumeNav';
        VolumePage.className = 'VolumePage';
        VolumePage.innerHTML = `  <div class="areaContainer">
        <div class="areaPage"  style="background-color:${PB}">
            <div class="closeArea"  style="background-color:${NC}">
                <div style="color:${TC}" class="areaUnit"><i style="color:${TC}" class="fa-solid fa-xmark cl"></i>Select Unit</div>
            </div>
            <div class="pages" style="background-color:${PB}">
                <h1 style="color:${TC}" id="units" class="hecto">Hectolitre (hl)</h1>
                <h1 style="color:${TC}" id="units" class="CM">Cubic metre (m3)</h1>
                <h1 style="color:${TC}" id="units" class="CDM">Cubic decimetre (dm3)</h1>
                <h1 style="color:${TC}" id="units" class="CCM">Cubic centimetre (CM3)</h1>
                <h1 style="color:${TC}" id="units" class="CMM">Cubic milimetre (mm3)</h1>
                <h1 style="color:${TC}" id="units" class="L">Litre (l)</h1>
                <h1 style="color:${TC}" id="units" class="DL">Decilitre (dl)</h1>
                <h1 style="color:${TC}" id="units" class="CL">Centilitre (cl)</h1>
                <h1 style="color:${TC}" id="units" class="ML">Mililitre (ml)</h1>
                <h1 style="color:${TC}" id="units" class="CF">Cubic foot (ft3)</h1>
                <h1 style="color:${TC}" id="units" class="CI">Cubic inch (in3)</h1>
                <h1 style="color:${TC}" id="units" class="CY">Cubic yard (yd3)</h1>
                <h1 style="color:${TC}" id="units" class="AF">Acre-foot (af3)</h1>
                <h1 style="color:${TC}" id="units" class="UG">UK gallon (UK gal)</h1>
                <h1 style="color:${TC}" id="units" class="USG">US gallon (UK gal)</h1>
                <h1 style="color:${TC}" id="units" class="UFO">UK fluid ounce (UK fl oz)</h1>
                <h1 style="color:${TC}" id="units" class="USFO">US fluid ounce (UK fl oz)</h1>
            </div>
        </div>
        <div class="areaoneANDtwo">
            <div class="AreaOne" style="background-color:${IC}">
                <div class="AreaSelectANDInput">
                    <div style="color:${TC}" class="AreaSelect1">Hectolitre (hl)</div>
                </div>
                <div class="AreaInput">
                    <input style="color:${TC}"type="text" class="ArIn">
                </div>
            </div>
            <div class="AreaTwo" style="background-color:${IC}">
                <div class="AreaSelectANDResult">
                    <div style="color:${TC}" class="AreaSelect2">Hectolitre (hl)</div>
                    <div style="color:${TC}" class="areaResult"></div>
                </div>
            </div>
        </div>
        <div class="AreaBt">
            <button style="background-color:${IC};color:${TC}" class="abt">7</button>
            <button style="background-color:${IC};color:${TC}" class="abt">8</button>
            <button style="background-color:${IC};color:${TC}" class="abt">9</button>
            <button style="background-color:${IC};color:${TC}" class="abt">4</button>
            <button style="background-color:${IC};color:${TC}" class="abt">5</button>
            <button style="background-color:${IC};color:${TC}" class="abt">6</button>
            <button style="background-color:${IC};color:${TC}" class="abt">1</button>
            <button style="background-color:${IC};color:${TC}" class="abt">2</button>
            <button style="background-color:${IC};color:${TC}" class="abt">3</button>
            <button style="background-color:${IC};color:${TC}" class="abt">00</button>
            <button style="background-color:${IC};color:${TC}" class="abt">0</button>
            <button style="background-color:${IC};color:${TC}" class="abt">.</button>
            <button style="background-color:${IC};color:${TC}" class="abt">AC</button>
            <button style="background-color:${IC}" class="rem abt"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                    width="30px" fill="${TC}">
                    <path
                        d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
                </svg></button>
    </div>`;
        VolumeNav.innerHTML = `<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="${TC}"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg><p style="color:${TC}">Volume Conversion</p>`;
        Volume.append(VolumeNav)
        Volume.append(VolumePage);
        document.body.appendChild(Volume);

        document.querySelector("#back").addEventListener('click', () => {
            Volume.remove();
            mainContainer.style.display = 'block';
        })
    }
    let AreaButtons = document.querySelectorAll('.abt');
    let Areaselect1 = document.querySelector('.AreaSelect1');
    let AreaInput = document.querySelector('.ArIn');
    let Areaselect2 = document.querySelector('.AreaSelect2');
    let AreaResult = document.querySelector('.areaResult');
    let Areapage = document.querySelector('.areaPage');
    let closeArea = document.querySelector('.cl');
    let AllUnits = document.querySelectorAll('#units');

    let AreaConversion = {
        hecto: 1,
        CM: 0.1,
        CDM: 100,
        CCM: 100000,
        CMM: 100000000,
        L: 100,
        DL: 1000,
        CL: 10000,
        ML: 100000,
        CF: 3.53147248,
        CI: 6102.38445022,
        CY: 0.13079528,
        AF: 0.00008107,
        UG: 21.99691573,
        USG: 26.41720524,
        UFO: 3519.8873636,
        USFO: 3416.46737274
    };

    AreaButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.innerText);
            if (e.target.innerText == 'AC') {
                AreaInput.value = '';
            } else if (e.target.closest('.rem')) {
                AreaInput.value = AreaInput.value.slice(0, -1);
            } else {
                AreaInput.value += e.target.innerText;
            }
            AreaConvertor();
        });
    });

    let ActiveArea = null;

    Areaselect1.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect1;
    });

    Areaselect2.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect2;
    });

    closeArea.addEventListener('click', () => {
        Areapage.style.bottom = '-90%';
        ActiveArea = null;
    });

    let toarea = 1;
    let fromarea = 1;
    let m = '';

    AllUnits.forEach((unit) => {
        unit.addEventListener('click', (e) => {
            m = e.target.classList[0];
            if (ActiveArea) {
                if (ActiveArea === Areaselect1) {
                    Areaselect1.innerText = e.target.innerText;
                    fromarea = AreaConversion[m];
                } else {
                    Areaselect2.innerText = e.target.innerText;
                    toarea = AreaConversion[m];
                }
                AreaConvertor();
            }
            Areapage.style.bottom = '-90%';
        });
    });

    let AreaConvertor = () => {
        if (!AreaInput.value) {
            AreaResult.innerText = 0;
            return;
        } else {
            let convertValue = (AreaInput.value * toarea) / fromarea;
            AreaResult.innerText = convertValue.toFixed(2);
        }
    };

    AreaInput.addEventListener('input', AreaConvertor);
    AreaConvertor();

}

let WeightCalculate = () => {
    let WeightPage = document.querySelector('#Weight');
    if (!WeightPage) {
        mainContainer.style.display = 'none';
        let Weight = document.createElement('div');
        let WeightNav = document.createElement('div');
        let WeightPage = document.createElement('div');
        WeightNav.className = "weightNav"
        WeightPage.className = "weightPage"
        Weight.setAttribute('id', 'Weight');
        Weight.className = 'content';
        let IC=null;
        let TC=null;
        let PB=null;
        let NC=null;
        if(Color==1){
            Weight.style.backgroundColor='rgb(173, 232, 250)';
            IC='White';
            TC='black';
            PB='rgb(173, 232, 250)';
             NC='#6cd5e5';
        }
        else{
           Weight.style.backgroundColor='rgb(21, 23, 21)';
           IC='black'
           TC='white';
           PB='rgb(22, 20, 20)';
            NC='#323434';
        }
        WeightNav.innerHTML = `<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="${TC}"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg><p style="color:${TC}">Weight Conversion</p>`;
        WeightPage.innerHTML = ` <div class="areaContainer">
        <div class="areaPage" style="background-color:${PB}">
            <div class="closeArea" style="background-color:${NC}">
                <div style="color:${TC}" class="areaUnit"><i style="color:${TC}" class="fa-solid fa-xmark cl"></i>Select Unit</div>
            </div>
            <div class="pages">
                <h1  style="color:${TC}"  id="units" class="KG">Kilogram (kg)</h1>
                <h1  style="color:${TC}"  id="units" class="G">Gram (g)</h1>
                <h1  style="color:${TC}"  id="units" class="MG">Milligram (mg)</h1>
                <h1  style="color:${TC}"  id="units" class="MCG">Microgram (ug)</h1>
                <h1  style="color:${TC}"  id="units" class="T">Tone (t)</h1>
                <h1  style="color:${TC}"  id="units" class="Q">Quintal (q)</h1>
                <h1  style="color:${TC}"  id="units" class="CT">Carat (ct)</h1>
                <h1  style="color:${TC}"   id="units" class="P">Pound (lb)</h1>
                <h1  style="color:${TC}"  id="units" class="O">Ounce (oz)</h1>
                <h1  style="color:${TC}"  id="units" class="GR">Grain (gr)</h1>
                <h1  style="color:${TC}"  id="units" class="LT">Long ton (lt)</h1>
                <h1  style="color:${TC}"  id="units" class="ST">Short ton (st)</h1>
                <h1  style="color:${TC}"  id="units" class="LHW">Long hundredweight (lg cwt)</h1>
                <h1  style="color:${TC}"  id="units" class="SHW">Short hundredweight (sh swt)</h1>
                <h1  style="color:${TC}"  id="units" class="ST">Stone (st)</h1>
                <h1  style="color:${TC}"     id="units" class="DR">Dram (dr)</h1>
            </div>
        </div>
        <div class="areaoneANDtwo">
            <div class="AreaOne" style="background-color:${IC}">
                <div class="AreaSelectANDInput">
                    <div style="color:${TC}" class="AreaSelect1">Kilogram</div>
                </div>
                <div class="AreaInput">
                    <input  style="color:${TC}" type="text" class="ArIn">
                </div>
            </div>
            <div class="AreaTwo" style="background-color:${IC}" >
                <div class="AreaSelectANDResult">
                    <div style="color:${TC}" class="AreaSelect2">Kilogram</div>
                    <div style="color:${TC}" class="areaResult"></div>
                </div>
            </div>
        </div>
        <div class="AreaBt">
            <button style="background-color:${IC};color:${TC}" class="abt">7</button>
            <button style="background-color:${IC};color:${TC}" class="abt">8</button>
            <button style="background-color:${IC};color:${TC}" class="abt">9</button>
            <button style="background-color:${IC};color:${TC}" class="abt">4</button>
            <button style="background-color:${IC};color:${TC}" class="abt">5</button>
            <button style="background-color:${IC};color:${TC}" class="abt">6</button>
            <button style="background-color:${IC};color:${TC}" class="abt">1</button>
            <button style="background-color:${IC};color:${TC}" class="abt">2</button>
            <button style="background-color:${IC};color:${TC}" class="abt">3</button>
            <button style="background-color:${IC};color:${TC}" class="abt">00</button>
            <button style="background-color:${IC};color:${TC}" class="abt">0</button>
            <button style="background-color:${IC};color:${TC}" class="abt">.</button>
            <button style="background-color:${IC};color:${TC}" class="abt">AC</button>
            <button style="background-color:${IC}" class="rem abt"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                    width="30px" fill="${TC}">
                    <path
                        d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
                </svg></button>
        </div>
    </div>`;
        Weight.append(WeightNav);
        Weight.append(WeightPage)
        document.body.appendChild(Weight);

        document.querySelector("#back").addEventListener('click', () => {
            Weight.remove();
            mainContainer.style.display = 'block';
        })
    }
    let AreaButtons = document.querySelectorAll('.abt');
    let Areaselect1 = document.querySelector('.AreaSelect1');
    let AreaInput = document.querySelector('.ArIn');
    let Areaselect2 = document.querySelector('.AreaSelect2');
    let AreaResult = document.querySelector('.areaResult');
    let Areapage = document.querySelector('.areaPage');
    let closeArea = document.querySelector('.cl');
    let AllUnits = document.querySelectorAll('#units');

    let AreaConversion = {
        KG: 1,
        G: 1000,
        MG: 1000000,
        T: 0.001,
        MCG: 1000000000,
        Q: 0.01,
        CT: 5000,
        P: 2.2046e-4,
        O: 35.2739619,
        GR: 15432.3584,
        LT: 0.0009842065,
        ST: 0.0011023,
        LHW: 0.0196841,
        SHW: 0.0220462,
        ST: 0.157473,
        DR: 564.3833912
    };

    AreaButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.innerText);
            if (e.target.innerText == 'AC') {
                AreaInput.value = '';
            } else if (e.target.closest('.rem')) {
                AreaInput.value = AreaInput.value.slice(0, -1);
            } else {
                AreaInput.value += e.target.innerText;
            }
            AreaConvertor();
        });
    });

    let ActiveArea = null;

    Areaselect1.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect1;
    });

    Areaselect2.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect2;
    });

    closeArea.addEventListener('click', () => {
        Areapage.style.bottom = '-90%';
        ActiveArea = null;
    });

    let toarea = 1;
    let fromarea = 1;
    let m = '';

    AllUnits.forEach((unit) => {
        unit.addEventListener('click', (e) => {
            m = e.target.classList[0];
            if (ActiveArea) {
                if (ActiveArea === Areaselect1) {
                    Areaselect1.innerText = e.target.innerText;
                    fromarea = AreaConversion[m];
                } else {
                    Areaselect2.innerText = e.target.innerText;
                    toarea = AreaConversion[m];
                }
                AreaConvertor();
            }
            Areapage.style.bottom = '-90%';
        });
    });

    let AreaConvertor = () => {
        if (!AreaInput.value) {
            AreaResult.innerText = 0;
            return;
        } else {
            let convertValue = (AreaInput.value * toarea) / fromarea;
            AreaResult.innerText = convertValue.toFixed(2);
        }
    };

    AreaInput.addEventListener('input', AreaConvertor);
    AreaConvertor();
}

let TemperatureCalculate = () => {
    let TemperaturePage = document.querySelector('#Temperature');
    if (!TemperaturePage) {
        mainContainer.style.display = 'none';
        let Temperature = document.createElement('div');
        let TemperatureNav = document.createElement('div')
        let TemperaturePage = document.createElement('div')
        Temperature.setAttribute('id', 'Area');
        Temperature.className = 'content';
        TemperatureNav.className = 'TemperatureNav'
        TemperaturePage.className = 'TemperaturePage'
        let IC=null;
        let TC=null;
        let PB=null;
        let NC=null;
        if(Color==1){
            Temperature.style.backgroundColor='rgb(173, 232, 250)';
            IC='White';
            TC='black';
            PB='rgb(173, 232, 250)';
             NC='#6cd5e5';
        }
        else{
           Temperature.style.backgroundColor='rgb(21, 23, 21)';
           IC='black'
           TC='white';
           PB='rgb(22, 20, 20)';
            NC='#323434';
        }
        TemperatureNav.innerHTML = `<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="${TC}"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg><p style=color:${TC}>Temperature Conversion</p>`;
        TemperaturePage.innerHTML = ` <div class="areaContainer">
        <div class="areaPage" style="background-color:${PB}">
            <div class="closeArea" style=background-color:${NC}>
                <div style=color:${TC} class="areaUnit"><i style=color:${TC} class="fa-solid fa-xmark cl"></i>Select Unit</div>
            </div>
            <div class="pages" style="background-color:${PB}">
                <h1 style=color:${TC} id="units" class="DC">Degree Celcious (C)</h1>
                <h1 style=color:${TC} id="units" class="DF">Degree Fahrenheit (F)</h1>
                <h1 style=color:${TC} id="units" class="DR">Degree Reaumur (Re)</h1>
                <h1 style=color:${TC} id="units" class="Dr">Degree Rankine (R)</h1>
                <h1 style=color:${TC} id="units" class="K">Kelvin (K)</h1>
            </div>
        </div>
        <div class="areaoneANDtwo">
            <div class="AreaOne" style=background-color:${IC}>
                <div class="AreaSelectANDInput">
                    <div style=color:${TC} class="AreaSelect1">Degree Celcious (C)</div>
                </div>
                <div class="AreaInput">
                    <input style=color:${TC} type="text" class="ArIn">
                </div>
            </div>
            <div class="AreaTwo" style=background-color:${IC}>
                <div class="AreaSelectANDResult">
                    <div style=color:${TC} class="AreaSelect2">Degree Celcious (C)</div>
                    <div style=color:${TC} class="areaResult"></div>
                </div>
            </div>
        </div>
        <div class="AreaBt">
            <button style="background-color:${IC};color:${TC}" class="abt">7</button>
            <button style="background-color:${IC};color:${TC}" class="abt">8</button>
            <button style="background-color:${IC};color:${TC}" class="abt">9</button>
            <button style="background-color:${IC};color:${TC}" class="abt">4</button>
            <button style="background-color:${IC};color:${TC}" class="abt">5</button>
            <button style="background-color:${IC};color:${TC}" class="abt">6</button>
            <button style="background-color:${IC};color:${TC}" class="abt">1</button>
            <button style="background-color:${IC};color:${TC}" class="abt">2</button>
            <button style="background-color:${IC};color:${TC}" class="abt">3</button>
            <button style="background-color:${IC};color:${TC}" class="abt">00</button>
            <button style="background-color:${IC};color:${TC}" class="abt">0</button>
            <button style="background-color:${IC};color:${TC}" class="abt">.</button>
            <button style="background-color:${IC};color:${TC}" class="abt">AC</button>
            <button style="background-color:${IC}" class="rem abt"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                    width="30px" fill="${TC}">
                    <path
                        d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
                </svg></button>
        </div>
    </div>`
        Temperature.append(TemperatureNav);
        Temperature.append(TemperaturePage);
        document.body.appendChild(Temperature);

        document.querySelector('#back').addEventListener('click', () => {
            Temperature.remove();
            mainContainer.style.display = 'block';
        })
    }
    let AreaButtons = document.querySelectorAll('.abt');
    let Areaselect1 = document.querySelector('.AreaSelect1');
    let AreaInput = document.querySelector('.ArIn');
    let Areaselect2 = document.querySelector('.AreaSelect2');
    let AreaResult = document.querySelector('.areaResult');
    let Areapage = document.querySelector('.areaPage');
    let closeArea = document.querySelector('.cl');
    let AllUnits = document.querySelectorAll('#units');

    let AreaConversion = {
        DC: 1,
        DF: 33.8,
        DR: 0.8,
        Dr: 493.46999,
        K: 274.15
    };

    AreaButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.innerText);
            if (e.target.innerText == 'AC') {
                AreaInput.value = '';
            } else if (e.target.closest('.rem')) {
                AreaInput.value = AreaInput.value.slice(0, -1);
            } else {
                AreaInput.value += e.target.innerText;
            }
            AreaConvertor();
        });
    });

    let ActiveArea = null;

    Areaselect1.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect1;
    });

    Areaselect2.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect2;
    });

    closeArea.addEventListener('click', () => {
        Areapage.style.bottom = '-90%';
        ActiveArea = null;
    });

    let toarea = 1;
    let fromarea = 1;
    let m = '';

    AllUnits.forEach((unit) => {
        unit.addEventListener('click', (e) => {
            m = e.target.classList[0];
            if (ActiveArea) {
                if (ActiveArea === Areaselect1) {
                    Areaselect1.innerText = e.target.innerText;
                    fromarea = AreaConversion[m];
                } else {
                    Areaselect2.innerText = e.target.innerText;
                    toarea = AreaConversion[m];
                }
                AreaConvertor();
            }
            Areapage.style.bottom = '-90%';
        });
    });

    let AreaConvertor = () => {
        if (!AreaInput.value) {
            AreaResult.innerText = 0;
            return;
        } else {
            let convertValue = (AreaInput.value * toarea) / fromarea;
            AreaResult.innerText = convertValue.toFixed(2);
        }
    };

    AreaInput.addEventListener('input', AreaConvertor);
    AreaConvertor();

}


let SpeedCalculate = () => {
    let SpeedPage = document.querySelector('#Speed');
    if (!SpeedPage) {
        mainContainer.style.display = 'none';
        let Speed = document.createElement('div');
        let SpeedNav = document.createElement('div');
        let SpeedPage = document.createElement('div');
        Speed.setAttribute('id', 'Speed');
        SpeedNav.className = 'SpeedNav';
        Speed.className = 'content';
        SpeedPage.className = 'SpeedPage';
        let IC=null;
        let TC=null;
        let PB=null;
        let NC=null;
        if(Color==1){
            Speed.style.backgroundColor='rgb(173, 232, 250)';
            IC='White';
            TC='black';
            PB='rgb(173, 232, 250)';
             NC='#6cd5e5';
        }
        else{
           Speed.style.backgroundColor='rgb(21, 23, 21)';
           IC='black'
           TC='white';
           PB='rgb(22, 20, 20)';
            NC='#323434';
        }
        SpeedNav.innerHTML = `<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="${TC}"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg><p style="color:${TC}">Speed Conversion</p>`;
        SpeedPage.innerHTML = ` <div class="areaContainer">
        <div class="areaPage" style="background-color:${PB}">
            <div class="closeArea" style="background-color:${NC}">
                <div style="color:${TC}" class="areaUnit"><i style="color:${TC}" class="fa-solid fa-xmark cl"></i>Select Unit</div>
            </div>
            <div class="pages" style="background-color:${PB}">
                <h1 style="color:${TC}" id="units" class="MS">Metre/second (m/s)</h1>
                <h1 style="color:${TC}" id="units" class="KS">Kilometre/second (Km/s)</h1>                
                <h1 style="color:${TC}" id="units" class="KH">Kilometre/hour (Km/h)</h1>                
                <h1 style="color:${TC}" id="units" class="SL">Speed of light (c)</h1>
                <h1 style="color:${TC}" id="units" class="MH">Mile/hour (mph)</h1>
                <h1 style="color:${TC}" id="units" class="M">Mach (Ma)</h1>
                <h1 style="color:${TC}" id="units" class="IS">Inch/second (in/s)</h1>
            </div>
        </div>
        <div class="areaoneANDtwo">
            <div class="AreaOne" style="background-color:${IC}">
                <div class="AreaSelectANDInput">
                    <div style="color:${TC}"  class="AreaSelect1">Metre/second (m/s)</div>
                </div>
                <div class="AreaInput">
                    <input style="color:${TC}" type="text" class="ArIn">
                </div>
            </div>
            <div class="AreaTwo" style="background-color:${IC}">
                <div class="AreaSelectANDResult">
                    <div style="color:${TC}" class="AreaSelect2">Metre/second (m/s)</div>
                    <div style="color:${TC}" class="areaResult"></div>
                </div>
            </div>
        </div>
        <div class="AreaBt">
            <button style="background-color:${IC};color:${TC}" class="abt">7</button>
            <button style="background-color:${IC};color:${TC}" class="abt">8</button>
            <button style="background-color:${IC};color:${TC}" class="abt">9</button>
            <button style="background-color:${IC};color:${TC}" class="abt">4</button>
            <button style="background-color:${IC};color:${TC}" class="abt">5</button>
            <button style="background-color:${IC};color:${TC}" class="abt">6</button>
            <button style="background-color:${IC};color:${TC}" class="abt">1</button>
            <button style="background-color:${IC};color:${TC}" class="abt">2</button>
            <button style="background-color:${IC};color:${TC}" class="abt">3</button>
            <button style="background-color:${IC};color:${TC}" class="abt">00</button>
            <button style="background-color:${IC};color:${TC}" class="abt">0</button>
            <button style="background-color:${IC};color:${TC}" class="abt">.</button>
            <button style="background-color:${IC};color:${TC}" class="abt">AC</button>
            <button style="background-color:${IC}" class="rem abt"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                    width="30px" fill="${TC}">
                    <path
                        d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
                </svg></button>
        </div>
    </div>`
        Speed.append(SpeedNav)
        Speed.append(SpeedPage);
        document.body.appendChild(Speed);

        document.querySelector("#back").addEventListener('click', () => {
            Speed.remove();
            mainContainer.style.display = 'block';
        })
    }
    let AreaButtons = document.querySelectorAll('.abt');
    let Areaselect1 = document.querySelector('.AreaSelect1');
    let AreaInput = document.querySelector('.ArIn');
    let Areaselect2 = document.querySelector('.AreaSelect2');
    let AreaResult = document.querySelector('.areaResult');
    let Areapage = document.querySelector('.areaPage');
    let closeArea = document.querySelector('.cl');
    let AllUnits = document.querySelectorAll('#units');

    let AreaConversion = {
        MS: 1,
        KS: 0.001,
        KH: 3.6,
        SL: 3.3356E-9,
        MH: 2.236936,
        M: 0.0029386,
        IS: 39.370079
    };

    AreaButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.innerText);
            if (e.target.innerText == 'AC') {
                AreaInput.value = '';
            } else if (e.target.closest('.rem')) {
                AreaInput.value = AreaInput.value.slice(0, -1);
            } else {
                AreaInput.value += e.target.innerText;
            }
            AreaConvertor();
        });
    });

    let ActiveArea = null;

    Areaselect1.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect1;
    });

    Areaselect2.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect2;
    });

    closeArea.addEventListener('click', () => {
        Areapage.style.bottom = '-90%';
        ActiveArea = null;
    });

    let toarea = 1;
    let fromarea = 1;
    let m = '';

    AllUnits.forEach((unit) => {
        unit.addEventListener('click', (e) => {
            m = e.target.classList[0];
            if (ActiveArea) {
                if (ActiveArea === Areaselect1) {
                    Areaselect1.innerText = e.target.innerText;
                    fromarea = AreaConversion[m];
                } else {
                    Areaselect2.innerText = e.target.innerText;
                    toarea = AreaConversion[m];
                }
                AreaConvertor();
            }
            Areapage.style.bottom = '-90%';
        });
    });

    let AreaConvertor = () => {
        if (!AreaInput.value) {
            AreaResult.innerText = 0;
            return;
        } else {
            let convertValue = (AreaInput.value * toarea) / fromarea;
            AreaResult.innerText = convertValue.toFixed(2);
        }
    };

    AreaInput.addEventListener('input', AreaConvertor);
    AreaConvertor();

}

let PressureCalculate = () => {
    let PressurePage = document.querySelector('#Pressure');
    if (!PressurePage) {
        mainContainer.style.display = 'none';
        let Pressure = document.createElement('div');
        let PressureNav = document.createElement('div');
        let PressurePage = document.createElement('div');
        Pressure.setAttribute('id', 'Pressure');
        Pressure.className = 'content';
        PressureNav.className = 'PressureNav';
        PressurePage.className = 'PressurePage';
        let IC=null;
        let TC=null;
        let PB=null;
        let NC=null;
        if(Color==1){
            Pressure.style.backgroundColor='rgb(173, 232, 250)';
            IC='White';
            TC='black';
            PB='rgb(173, 232, 250)';
             NC='#6cd5e5';
        }
        else{
           Pressure.style.backgroundColor='rgb(21, 23, 21)';
           IC='black'
           TC='white';
           PB='rgb(22, 20, 20)';
            NC='#323434';
        }
        PressureNav.innerHTML = `<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="${TC}"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg><p style="color:${TC}">Pressure Conversion</p>`;
        PressurePage.innerHTML = `<div class="areaContainer">
        <div class="areaPage" style="Background-color:${PB}">
            <div class="closeArea" style="Background-color:${NC}">
                <div style="color:${TC}" class="areaUnit"><i style="color:${TC}" class="fa-solid fa-xmark cl"></i>Select Unit</div>
            </div>
            <div class="pages" style="Background-color:${PB}">
                <h1 style="color:${TC}" id="units" class="ATM">Standard atmosphere (atm)</h1>
                <h1 style="color:${TC}" id="units" class="HPA">Hectopascal (hPa)</h1>                
                <h1 style="color:${TC}" id="units" class="KPA">Kilopascal (kPa)</h1>                
                <h1 style="color:${TC}" id="units" class="MPA">Megapascal (MPa)</h1>
                <h1 style="color:${TC}" id="units" class="MMHG">Millimetre of mercury (mmHg)</h1>
                <h1 style="color:${TC}" id="units" class="INHG">Inch of mercury (inHg)</h1>
                <h1 style="color:${TC}" id="units" class="B">Bar</h1>
                <h1 style="color:${TC}" id="units" class="MBAR">Millibar (mbar)</h1>
                <h1 style="color:${TC}" id="units" class="PSI">Pounds/square inch (psi)</h1>
                <h1 style="color:${TC}" id="units" class="PSF">Pounds/square foot (psf)</h1>
                <h1 style="color:${TC}" id="units" class="KGFM2">Kilogram-force/square metre (kgf/m2)</h1>
                <h1 style="color:${TC}" id="units" class="KGFCM2">Kilogram-force/square centimetre (kgf/cm2)</h1>
                <h1 style="color:${TC}" id="units" class="MMH2O">Millimetre of water (mmh2O)</h1>
            </div>
        </div>
        <div class="areaoneANDtwo">
            <div class="AreaOne" style="background-color:${IC}">
                <div class="AreaSelectANDInput">
                    <div style="color:${TC}" class="AreaSelect1">Standard atmosphere (atm)</div>
                </div>
                <div class="AreaInput">
                    <input style="color:${TC}" type="text" class="ArIn">
                </div>
            </div>
            <div class="AreaTwo" style="background-color:${IC}">
                <div class="AreaSelectANDResult">
                    <div style="color:${TC}" class="AreaSelect2">Standard atmosphere (atm)</div>
                    <div style="color:${TC}" class="areaResult"></div>
                </div>
            </div>
        </div>
        <div class="AreaBt">
            <button style="background-color:${IC};color:${TC}" class="abt">7</button>
            <button style="background-color:${IC};color:${TC}" class="abt">8</button>
            <button style="background-color:${IC};color:${TC}" class="abt">9</button>
            <button style="background-color:${IC};color:${TC}" class="abt">4</button>
            <button style="background-color:${IC};color:${TC}" class="abt">5</button>
            <button style="background-color:${IC};color:${TC}" class="abt">6</button>
            <button style="background-color:${IC};color:${TC}" class="abt">1</button>
            <button style="background-color:${IC};color:${TC}" class="abt">2</button>
            <button style="background-color:${IC};color:${TC}" class="abt">3</button>
            <button style="background-color:${IC};color:${TC}" class="abt">00</button>
            <button style="background-color:${IC};color:${TC}" class="abt">0</button>
            <button style="background-color:${IC};color:${TC}" class="abt">.</button>
            <button style="background-color:${IC};color:${TC}" class="abt">AC</button>
            <button style="background-color:${IC}" class="rem abt"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                    width="30px" fill="${TC}">
                    <path
                        d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
                </svg></button>
        </div>
    </div>`
        Pressure.append(PressureNav);
        Pressure.append(PressurePage);
        document.body.appendChild(Pressure);

        document.querySelector("#back").addEventListener('click', () => {
            Pressure.remove();
            mainContainer.style.display = 'block';
        })
    }
    let AreaButtons = document.querySelectorAll('.abt');
    let Areaselect1 = document.querySelector('.AreaSelect1');
    let AreaInput = document.querySelector('.ArIn');
    let Areaselect2 = document.querySelector('.AreaSelect2');
    let AreaResult = document.querySelector('.areaResult');
    let Areapage = document.querySelector('.areaPage');
    let closeArea = document.querySelector('.cl');
    let AllUnits = document.querySelectorAll('#units');

    let AreaConversion = {
        ATM: 1,
        HPA: 1013.25027,
        KPA: 101.32502,
        MPA: 0.10132,
        MMHG: 760.0002299,
        INHG: 29.921,
        B: 1.0132,
        MBAR: 1013.250,
        PSI: 14.6959,
        PSF: 2116.217,
        KGFM2: 10332.277,
        KGFCM2: 10222.11,
        MMH2O: 10332.2751
    };

    AreaButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.innerText);
            if (e.target.innerText == 'AC') {
                AreaInput.value = '';
            } else if (e.target.closest('.rem')) {
                AreaInput.value = AreaInput.value.slice(0, -1);
            } else {
                AreaInput.value += e.target.innerText;
            }
            AreaConvertor();
        });
    });

    let ActiveArea = null;

    Areaselect1.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect1;
    });

    Areaselect2.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect2;
    });

    closeArea.addEventListener('click', () => {
        Areapage.style.bottom = '-90%';
        ActiveArea = null;
    });

    let toarea = 1;
    let fromarea = 1;
    let m = '';

    AllUnits.forEach((unit) => {
        unit.addEventListener('click', (e) => {
            m = e.target.classList[0];
            if (ActiveArea) {
                if (ActiveArea === Areaselect1) {
                    Areaselect1.innerText = e.target.innerText;
                    fromarea = AreaConversion[m];
                } else {
                    Areaselect2.innerText = e.target.innerText;
                    toarea = AreaConversion[m];
                }
                AreaConvertor();
            }
            Areapage.style.bottom = '-90%';
        });
    });

    let AreaConvertor = () => {
        if (!AreaInput.value) {
            AreaResult.innerText = 0;
            return;
        } else {
            let convertValue = (AreaInput.value * toarea) / fromarea;
            AreaResult.innerText = convertValue.toFixed(2);
        }
    };

    AreaInput.addEventListener('input', AreaConvertor);
    AreaConvertor();

}

let PowerCalculate = () => {
    let PowerPage = document.querySelector('#Power');
    if (!PowerPage) {
        mainContainer.style.display = 'none';
        let Power = document.createElement('div');
        let PowerNav = document.createElement('div');
        let PowerPage = document.createElement('div');
        Power.setAttribute('id', 'Power');
        Power.className = 'content';
        PowerNav.className = 'PowerNav';
        PowerPage.className = 'PowerPage';
        let IC=null;
        let TC=null;
        let PB=null;
        let NC=null;
        if(Color==1){
            Power.style.backgroundColor='rgb(173, 232, 250)';
            IC='White';
            TC='black';
            PB='rgb(173, 232, 250)';
             NC='#6cd5e5';
        }
        else{
           Power.style.backgroundColor='rgb(21, 23, 21)';
           IC='black'
           TC='white';
           PB='rgb(22, 20, 20)';
            NC='#323434';
        }
        PowerNav.innerHTML = `<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="${TC}"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg><p style="color:${TC}">Power Conversion</p>`;
        PowerPage.innerHTML = `  <div class="areaContainer">
        <div class="areaPage" style="background-color:${PB}">
            <div class="closeArea" style="background-color:${NC}">
                <div style="color:${TC}" class="areaUnit"><i style="color:${TC}" class="fa-solid fa-xmark cl"></i>Select Unit</div>
            </div>
            <div class="pages" style="background-color:${PB}">
                <h1 style="color:${TC}" id="units" class="KW">Kilowatt (kW)</h1>
                <h1 style="color:${TC}" id="units" class="W">Watt (W)</h1>                
                <h1 style="color:${TC}" id="units" class="JS">Joule/second (j/s)</h1>                
                <h1 style="color:${TC}" id="units" class="HP">Imperial horsepower (hp)</h1>
                <h1 style="color:${TC}" id="units" class="PS">Metric horsepower (PS)</h1>
                <h1 style="color:${TC}" id="units" class="KGMS">Kilgram-metre/second (kg.m/s)</h1>
                <h1 style="color:${TC}" id="units" class="KCALS">Kilocalorie/second (kcal/s)</h1>
                <h1 style="color:${TC}" id="units" class="BTUS">British thermal unit/second (Btu/s)</h1>
                <h1 style="color:${TC}" id="units" class="FTLBS">Foot-pound/second (ft.lb/s)</h1>
                <h1 style="color:${TC}" id="units" class="NMS">Newton-metre/second (N.m/s)</h1>
            </div>
        </div>
        <div class="areaoneANDtwo">
            <div class="AreaOne" style="background-color:${IC}">
                <div class="AreaSelectANDInput">
                    <div style="color:${TC}" class="AreaSelect1">Kilowatt (kW)</div>
                </div>
                <div class="AreaInput">
                    <input style="color:${TC}" type="text" class="ArIn">
                </div>
            </div>
            <div class="AreaTwo" style="background-color:${IC}">
                <div class="AreaSelectANDResult">
                    <div style="color:${TC}" class="AreaSelect2">Kilowatt (kW)</div>
                    <div style="color:${TC}" class="areaResult"></div>
                </div>
            </div>
        </div>
        <div class="AreaBt">
            <button style="background-color:${IC};color:${TC}" class="abt">7</button>
            <button style="background-color:${IC};color:${TC}" class="abt">8</button>
            <button style="background-color:${IC};color:${TC}" class="abt">9</button>
            <button style="background-color:${IC};color:${TC}" class="abt">4</button>
            <button style="background-color:${IC};color:${TC}" class="abt">5</button>
            <button style="background-color:${IC};color:${TC}" class="abt">6</button>
            <button style="background-color:${IC};color:${TC}" class="abt">1</button>
            <button style="background-color:${IC};color:${TC}" class="abt">2</button>
            <button style="background-color:${IC};color:${TC}" class="abt">3</button>
            <button style="background-color:${IC};color:${TC}" class="abt">00</button>
            <button style="background-color:${IC};color:${TC}" class="abt">0</button>
            <button style="background-color:${IC};color:${TC}" class="abt">.</button>
            <button style="background-color:${IC};color:${TC}" class="abt">AC</button>
            <button style="background-color:${IC}" class="rem abt"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                    width="30px" fill="${TC}">
                    <path
                        d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
                </svg></button>
        </div>
    </div>`
        Power.append(PowerNav)
        Power.append(PowerPage);
        document.body.appendChild(Power);

        document.querySelector("#back").addEventListener('click', () => {
            Power.remove();
            mainContainer.style.display = 'block';
        })
    }
    let AreaButtons = document.querySelectorAll('.abt');
    let Areaselect1 = document.querySelector('.AreaSelect1');
    let AreaInput = document.querySelector('.ArIn');
    let Areaselect2 = document.querySelector('.AreaSelect2');
    let AreaResult = document.querySelector('.areaResult');
    let Areapage = document.querySelector('.areaPage');
    let closeArea = document.querySelector('.cl');
    let AllUnits = document.querySelectorAll('#units');

    let AreaConversion = {
        KW: 1,
        W: 1000,
        JS: 1000,
        HP: 1.34102,
        PS: 1.359,
        KGMS: 101.97,
        KCALS: 0.239,
        BTUS: 0.9478,
        FTLBS: 737.56,
        NMS: 1000
    };

    AreaButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.innerText);
            if (e.target.innerText == 'AC') {
                AreaInput.value = '';
            } else if (e.target.closest('.rem')) {
                AreaInput.value = AreaInput.value.slice(0, -1);
            } else {
                AreaInput.value += e.target.innerText;
            }
            AreaConvertor();
        });
    });

    let ActiveArea = null;

    Areaselect1.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect1;
    });

    Areaselect2.addEventListener('click', () => {
        Areapage.style.bottom = '0px';
        ActiveArea = Areaselect2;
    });

    closeArea.addEventListener('click', () => {
        Areapage.style.bottom = '-90%';
        ActiveArea = null;
    });

    let toarea = 1;
    let fromarea = 1;
    let m = '';

    AllUnits.forEach((unit) => {
        unit.addEventListener('click', (e) => {
            m = e.target.classList[0];
            if (ActiveArea) {
                if (ActiveArea === Areaselect1) {
                    Areaselect1.innerText = e.target.innerText;
                    fromarea = AreaConversion[m];
                } else {
                    Areaselect2.innerText = e.target.innerText;
                    toarea = AreaConversion[m];
                }
                AreaConvertor();
            }
            Areapage.style.bottom = '-90%';
        });
    });

    let AreaConvertor = () => {
        if (!AreaInput.value) {
            AreaResult.innerText = 0;
            return;
        } else {
            let convertValue = (AreaInput.value * toarea) / fromarea;
            AreaResult.innerText = convertValue.toFixed(2);
        }
    };

    AreaInput.addEventListener('input', AreaConvertor);
    AreaConvertor();
}
