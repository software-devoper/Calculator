let buttons=document.querySelectorAll('button');
let display=document.querySelector('.display');
let str='';
let RGB=()=>{
    color1=Math.ceil(Math.random()*255);
    color2=Math.ceil(Math.random()*255);
    color3=Math.ceil(Math.random()*255);
    // console.log(color1);
    // console.log(color2);
    // console.log(color3);
    return `rgb(${color1},${color2},${color3})`;
}
buttons.forEach((btn)=>{
   btn.addEventListener('click',(e)=>{
    let val=e.target.innerText;
      btn.style.backgroundColor=RGB();
    display.style.color=RGB();
    if(val=='DEL'){
        str=' ';
        display.innerText=str;
    }
    else if(val=='AC'){
        str=display.innerText.slice(0,str.length-1);
        display.innerText=str;

    }
    else if(val=='='){
        str=eval(display.innerText);
        display.innerText=str;
    }
    else{
        if(display.innerText==0){
            display.innerText=' ';
        }
        display.innerText+=val;
    }
   })
})


