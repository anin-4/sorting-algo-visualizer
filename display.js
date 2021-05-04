
const body=document.querySelector('.container');

export function display(input, inputnum){
    console.log(input)
    for(let num=0;num<inputnum;num++){
        let height=input[num]*7;
        let element=document.createElement('div');
        body.append(element);
        element.setAttribute("class","heights");
        element.style.height=height+"px";
        
    }
}