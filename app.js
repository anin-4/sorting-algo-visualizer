
const body=document.querySelector('.container');

const startButton=document.querySelector('.button');

const randombutton= document.querySelector('.randomize');

function display(input, inputnum){
    console.log(input)
    for(let num=0;num<inputnum;num++){
        let height=input[num]*7;
        let element=document.createElement('div');
        body.append(element);
        element.setAttribute("class","heights");
        element.style.height=height+"px";
        
    }
}

async function bubbleSort(input, inputnum)
{
   for (let i = 0; i < inputnum-1; i++){
      display(input,inputnum);
     
      for (let j = 0; j < inputnum-1; j++){
        if (input[j] > input[j+1])
             {
                 let temp=input[j];
                 input[j]=input[j+1];
                 input[j+1]=temp;
             }
    }
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
    );
    if(i!=inputnum-2){
        remove();
    }
   
}
}

function remove(){
    const elements= body.querySelectorAll('.heights');
   for(let ele of elements){
       ele.remove();
   }
}

async function main(e){
    let input=[];
    for(let i=0;i<100;i++){
        let random=Math.floor(Math.random()*(99))+1;
        input.push(random);
    
    }
    let inputnum=input.length;
    display(input,inputnum);
   bubbleSort(input,inputnum);
   e.preventDefault();
   

}

startButton.addEventListener('submit',main);



