
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
      if(i!=0)
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

class utilities{
    constructor(input,inputnum){
        this.input=[];
        this.inputnum=0;
    }

    randomizer(){
        for(let i=0;i<100;i++){
            let random=Math.floor(Math.random()*(99))+1;
            this.input.push(random);
        
        }
        this.inputnum=this.input.length;
        remove();
        display(this.input,this.inputnum);
    }

   runner(){
        bubbleSort(this.input,this.inputnum);
    }
}

const utility=new utilities([],0);
utility.randomizer();

startButton.addEventListener('submit',(e)=>{
    utility.runner();
    e.preventDefault();
});
randombutton.addEventListener('submit',(e)=>{
    utility.input=[];
    utility.inputnum=0;
    utility.randomizer();
    e.preventDefault();
});



