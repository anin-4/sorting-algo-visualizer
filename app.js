
let body=document.querySelector('.container');



function display(input,inputnum){
    console.log(input)
    for(let num=0;num<inputnum;num++){
        let height=input[num]*10;
        let element=document.createElement('div');
        body.append(element);
        element.setAttribute("class","heights");
        element.style.height=height+"px";
        
    }
}


function bubbleSort(input,inputnum)
{
   for (let i = 0; i < inputnum-1; i++){ 
       for (let j = 0; j < inputnum-1; j++){
           if (input[j] > input[j+1])
                {
                    let temp=input[j];
                    input[j]=input[j+1];
                    input[j+1]=temp;
                }
       }
    }
}

function remove(input,inputnum){
    const elements= body.querySelectorAll('.heights');
   for(let ele of elements){
       ele.remove();
   }
}


function main(){
    let input=[10,12,4,56,10,23,15,16,11,2,4,5,19,29,30,44,1,2,9,32,33,21,44,31];
    let inputnum= input.length;
    display(input,inputnum);
    bubbleSort(input,inputnum);
    remove(input,inputnum);
    display(input,inputnum);




}
main();


