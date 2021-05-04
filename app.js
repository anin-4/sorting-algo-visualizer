const startButton=document.querySelector('.button');

const randombutton= document.querySelector('.randomize');

import {bubbleSort} from './bubblesort.js';

import {remove} from './remove.js';

import{display} from './display.js';

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
}

const utility=new utilities([],0);
utility.randomizer();

startButton.addEventListener('submit',(e)=>{
    utility.bubblesort();
    e.preventDefault();
});
randombutton.addEventListener('submit',(e)=>{
    utility.input=[];
    utility.inputnum=0;
    utility.randomizer();
    e.preventDefault();
});



