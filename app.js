
let body=document.querySelector('.container');
let input=[10,12,4,56,10,23,15,16,11,2,4,5,19,29,30,44,1,2,9,32,33,21,44,31];
let inputnum= input.length;


function display(){
    console.log(input)
    for(let num=0;num<inputnum;num++){
        let height=input[num]*10;
        let element=document.createElement('div');
        body.append(element);
        element.setAttribute("class","heights");
        element.style.height=height+"px";
        
    }
}


const mypromise= new Promise ((resolve) =>{
    bubbleSort();
    async function bubbleSort()
{
   for (let i = 0; i < inputnum-1; i++){
      display();
     
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
        }, 300)
    );
    remove();
}
resolve(); 

}});

function remove(){
    const elements= body.querySelectorAll('.heights');
   for(let ele of elements){
       ele.remove();
   }
}


async function main(){
   await mypromise;
   display();




}
main();


