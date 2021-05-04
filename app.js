const startButton=document.querySelector('.button');

const randombutton= document.querySelector('.randomize');

const quicksortButton=document.querySelector('.Quicksort');

import {bubbleSort} from './bubblesort.js';

import {remove} from './remove.js';

import{display} from './display.js';

import{Quicksort} from './quicksort.js';

class utilities{
    constructor(input,inputnum){
        this.input=[];
        this.inputnum=0;
    }

    randomizer(){
        for(let i=0;i<150;i++){
            let random=Math.floor(Math.random()*(99))+1;
            this.input.push(random);
        
        }
        this.inputnum=this.input.length;
        remove();
        display(this.input,this.inputnum);
    }

   bubblesort(){
        bubbleSort(this.input,this.inputnum);
    }
    Quicksort(){
        Quicksort(this.input,0,this.inputnum-1);
    }
}

const utility=new utilities([],0);
utility.randomizer();

startButton.addEventListener('submit',(e)=>{
    utility.bubblesort();
    e.preventDefault();
});
quicksortButton.addEventListener('submit',(e)=>{
    utility.Quicksort();
    e.preventDefault();
});
randombutton.addEventListener('submit',(e)=>{
    utility.input=[];
    utility.inputnum=0;
    utility.randomizer();
    e.preventDefault();
});



