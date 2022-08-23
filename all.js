let btn = document.querySelector('#btn');
let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let v = document.querySelector('.value');
let m = document.querySelector('.memo_1');
let b = document.querySelector('.body');
let re = document.querySelector('#reset');
let box = document.querySelector('.box');

re.addEventListener('click',function(){
    height.value='';
    weight.value= '';
    v.innerHTML='';
    m.innerHTML= '';
    b.innerHTML= '';
    box.classList.toggle('#none');
})

btn.addEventListener('click',function(){ 
    box.classList.add('move');
    let h = height.value;
    let w = weight.value;
    var bmi = (w / ((h/100)*(h/100))).toFixed(2);
    v.innerHTML=bmi;
    if(bmi<18.5){
        m.innerHTML=('體重過輕囉');
        b.innerHTML=('太瘦了喔')
    }else if(bmi>=18.5 && bmi<24){
        m.innerHTML=('體重正常，請保持');
        b.innerHTML=('太棒了');
    }else if(bmi>=24 && bmi < 27){
        m.innerHTML=('體重過重囉!請注意!')
        b.innerHTML=('異常了喔');
    }else if (bmi >= 30 && bmi<35){
        m.innerHTML=('中度肥胖囉!趕快運動!')
        b.innerHTML=('要高血壓了喔');
    }else{
        m.innerHTML=('體重爆表了喔!!!!')
        b.innerHTML=('要暈倒了喔');
    }
})
