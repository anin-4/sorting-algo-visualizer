let input=[10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58];

let body=document.querySelector('.container');

let inputnum= input.length;

for(let num=0;num<inputnum;num++){
    let height=input[num]*10;
    let element=document.createElement('div');
    body.append(element);
    element.setAttribute("class","heights");
    element.style.height=height+"px";
    
}