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
let mainContainer = document.querySelector('.container');
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
    let currencyPage = document.querySelector("#currency");

    if (!currencyPage) {
        mainContainer.style.display = "none";
        let currency = document.createElement("div");
       
        currency.setAttribute("id", "currency");
        currency.className = "content";
        document.body.appendChild(currency);
        let mainPage=document.createElement('div');
        mainPage.className='mainPage';
        mainPage.innerText='hi my name is subhadip Mondal'
        let coment = document.createElement('div');
        coment.id = 'navShow';
        coment.style.color = 'white';
        coment.innerHTML = `<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="white"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg>Currency Convertor`;
        mainPage.innerHTML=` <div class="page">
        <div class="SelectPage">
            <div class="note">
                <div class="cut"><svg id="close" id="back" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
                <p class="n" >Select currency</p>
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
        <div class="input1">
            <div class="he"><div class="selectInput">USD</div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></div>
            <input type="text" id="upper">
        </div>
        <div class="input2">
             <div class="he"><div class="selectInput1">INR</div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></div>
            <div class="result" id="lower">0</div>
        </div>
    </div>
    <div class="exchange"><i id="rotate" class="fa-solid fa-2x fa-rotate"></i></div> 
</div>
 <div class="currencyButtons">
    <div class="numbers">
    <button id="CB">7</button>
    <button id="CB">8</button>
    <button id="CB">9</button>
    <button id="CB">4</button>
    <button id="CB">5</button>
    <button id="CB">6</button>
    <button id="CB">1</button>
    <button id="CB">2</button>
    <button id="CB">3</button>
    <button id="CB">00</button>
    <button id="CB">0</button>
    <button id="CB">.</button>
</div>
<div class="oprator">
    <button id="CB">AC</button>
    <button id="CB" class="rem" ><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3"><path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z"/></svg></button>
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
let search=document.querySelector('#searchInput');
let Refresh=document.querySelector('.exchange');
let APIURL = "https://api.exchangerate-api.com/v4/latest/USD";

let str = '';

AllButtons.forEach((Button) => {
    Button.addEventListener('click', (e) => {
        let val = e.target.innerText;
        if (val === 'AC') {
               str='';
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
            List.innerText = val;
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
search.addEventListener('input',()=>{
    let query=search.value.toLowerCase();
    document.querySelectorAll('.list').forEach((list)=>{
        let listName=list.innerText.toLowerCase();
        if(listName.includes(query)){
            list.style.display='flex';
        }
        else{
            list.style.display='none';
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

Refresh.addEventListener('click',(e)=>{
    Input.value='';
    result.innerText=0;
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
        let coment=document.createElement('div');
        let lengthPage=document.createElement('div');
        lengthPage.id='lengthPage';
        coment.id='CL';
        mainContainer.style.display = 'none';
        length.setAttribute('id', 'length');
        length.className = 'content';
        coment.innerHTML='<svg id="back" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="white"><path d="M359.33-241.33 120-480.67 359.33-720l47.34 47.33L248-514h592v66.67H248l158.67 158.66-47.34 47.34Z"/></svg>Length Conversion';
        lengthPage.innerHTML=`  <div class="mainlengthContainer">
    <div class="lengthContainer">
        <div class="inputs">
            <div class="lengthInput1">
                <div class="selectLenght1">
                    <div class="selectUnit1">Metres</div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>he</svg>
                </div>
                </div>
                <div class="Unit1">
                    <input id="lInput" type="text" >
                </div>
            </div>
            <div class="lengthInput2">
                <div class="selectLenght2">
                    <div class="selectUnit2">Kilometres</div>  
                    <div> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>he</svg>
                </div>
                </div>
                <div class="Unit2">
                    <div class="lresult"></div>
                </div>
            </div>
            </div>
        <div class="lengthButtons">
            <div class="lnum">
          <button class="allb">7</button>
          <button class="allb">8</button>
          <button class="allb">9</button>
          <button class="allb">4</button>
          <button class="allb">5</button>
          <button class="allb">6</button>
          <button class="allb">1</button>
          <button class="allb">2</button>
          <button class="allb">3</button>
          <button class="allb">00</button>
          <button class="allb">0</button>
          <button class="allb">.</button>
        </div>
        <div class="lop">
          <button class="allb">AC</button>
          <button class="allb re"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3"><path d="M450.67-324 560-433.33 669.33-324l47.34-47.33-110-108.67 108.66-108.67L668-636 560-526.67 450.67-636l-47.34 47.33 110 108.67-110 108.67L450.67-324Zm-97.34 164q-15.83 0-30-7.08-14.16-7.09-23.33-19.59L80-480l219.33-293.33q9.17-12.5 23.34-19.59 14.16-7.08 30-7.08H814q27.5 0 47.08 19.58 19.59 19.59 19.59 47.09v506.66q0 27.5-19.59 47.09Q841.5-160 814-160H353.33Zm-190-320 190 253.33H814v-506.66H353.33L163.33-480ZM584-480Z"/></svg></button>
        </div>
        </div>
    </div>
    <div class="selectLengthUnit">
        <div class="closeLengthPage">
            <svg id="closePage" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
            <h1>Select unit</h1>
        </div>
        <div class="listLength">
            <div class="lengthlist" id="m">Metre</div>
            <div class="lengthlist" id="km">Kilometres</div>
            <div class="lengthlist" id="mm">Millimetres</div>
            <div class="lengthlist" id="mile">Miles</div>
            <div class="lengthlist" id="yard">Yard</div>
            <div class="lengthlist" id="cm">Centimetres</div>
            <div class="lengthlist" id="foot">Feet</div>
            <div class="lengthlist" id="inch">Inches</div>
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
let LResult=document.querySelector('.lresult');
let lengthButtons=document.querySelectorAll('.allb');
let Lenghtinput=document.querySelector('#lInput');
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
let str='';
lengthButtons.forEach((val)=>{
    val.addEventListener('click',(e)=>{
       let m=e.target.innerText;
 
       if(m=='AC'){
        str='';
        Lenghtinput.value=str;
       }
       else if(e.target.closest('.re')){
         str=str.slice(0,str.length-1);
         Lenghtinput.value=str;
       }
       else{
        str+=m;
        Lenghtinput.value=str;
       }
       LengthConvertor();
    })
})
let ActiveLength = null;
let id = null;
let fromlength = 1;
let tolength=0.001;
AllList.forEach((list) => {
    list.addEventListener('click', (e) => {
        m = list.id;
        if (ActiveLength) {
            ActiveLength.innerText = e.target.innerText;
            if(ActiveLength==selectUnit){
                fromlength=Lengthconversion[m];
            }
            else if(ActiveLength==selectUni2){
                tolength=Lengthconversion[m];
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
const LengthConvertor=()=>{
    if(!Lenghtinput.value){
        LResult.innerText=0;
        return;
    }
   let ConvertValue=(Lenghtinput.value/fromlength)*tolength;
   LResult.innerText=ConvertValue.toFixed(2);
}
LengthConvertor();
Lenghtinput.addEventListener("input", LengthConvertor);


}

let AreaCalculate = () => {
    let AreaPage = document.querySelector('#area');
    if (!AreaPage) {
        mainContainer.style.display = 'none';
        let Area = document.createElement('div');
        Area.setAttribute('id', 'Area');
        Area.className = 'content';
        Area.innerText = 'This is Area Page';
        document.body.appendChild(Area);

        Area.addEventListener('click', () => {
            Area.remove();
            mainContainer.style.display = 'block';
        })
    }
}

let VolumeCalculate = () => {
    let VolumePage = document.querySelector('#Volume');
    if (!VolumePage) {
        mainContainer.style.display = 'none';
        let Volume = document.createElement('div');
        Volume.setAttribute('id', 'Volume');
        Volume.className = 'content';
        Volume.innerText = 'This is Volume Page';
        document.body.appendChild(Volume);

        Volume.addEventListener('click', () => {
            Volume.remove();
            mainContainer.style.display = 'block';
        })
    }
}

let WeightCalculate = () => {
    let WeightPage = document.querySelector('#Weight');
    if (!WeightPage) {
        mainContainer.style.display = 'none';
        let Weight = document.createElement('div');
        Weight.setAttribute('id', 'Weight');
        Weight.className = 'content';
        Weight.innerText = 'This is Weight Page';
        document.body.appendChild(Weight);

        Weight.addEventListener('click', () => {
            Weight.remove();
            mainContainer.style.display = 'block';
        })
    }
}

let TemperatureCalculate = () => {
    let TemperaturePage = document.querySelector('#Temperature');
    if (!TemperaturePage) {
        mainContainer.style.display = 'none';
        let Temperature = document.createElement('div');
        Temperature.setAttribute('id', 'Area');
        Temperature.className = 'content';
        Temperature.innerText = 'This is Temperature Page';
        document.body.appendChild(Temperature);

        Temperature.addEventListener('click', () => {
            Temperature.remove();
            mainContainer.style.display = 'block';
        })
    }
}


let SpeedCalculate = () => {
    let SpeedPage = document.querySelector('#Speed');
    if (!SpeedPage) {
        mainContainer.style.display = 'none';
        let Speed = document.createElement('div');
        Speed.setAttribute('id', 'Speed');
        Speed.className = 'content';
        Speed.innerText = 'This is Speed Page';
        document.body.appendChild(Speed);

        Speed.addEventListener('click', () => {
            Speed.remove();
            mainContainer.style.display = 'block';
        })
    }
}

let PressureCalculate = () => {
    let PressurePage = document.querySelector('#Pressure');
    if (!PressurePage) {
        mainContainer.style.display = 'none';
        let Pressure = document.createElement('div');
        Pressure.setAttribute('id', 'Pressure');
        Pressure.className = 'content';
        Pressure.innerText = 'This is Pressure Page';
        document.body.appendChild(Pressure);

        Pressure.addEventListener('click', () => {
            Pressure.remove();
            mainContainer.style.display = 'block';
        })
    }
}

let PowerCalculate = () => {
    let PowerPage = document.querySelector('#Power');
    if (!PowerPage) {
        mainContainer.style.display = 'none';
        let Power = document.createElement('div');
        Power.setAttribute('id', 'Power');
        Power.className = 'content';
        Power.innerText = 'This is Power Page';
        document.body.appendChild(Power);

        Power.addEventListener('click', () => {
            Power.remove();
            mainContainer.style.display = 'block';
        })
    }
}
