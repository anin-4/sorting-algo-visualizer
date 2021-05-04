const body=document.querySelector('.container');

export function remove(){
    const elements= body.querySelectorAll('.heights');
   for(let ele of elements){
       ele.remove();
   }
}