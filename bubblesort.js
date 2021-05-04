import {remove} from './remove.js';
import{display} from './display.js';

export async function bubbleSort(input,inputnum){
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