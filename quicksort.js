import {remove} from './remove.js';
import{display} from './display.js';

export async function Quicksort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = partition(arr, start, end);
    display(arr,149);
    await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 500)
      );
    Quicksort(arr, start, index - 1);
    Quicksort(arr, index + 1, end);
}

function partition(arr, start, end){
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    remove(); 
    return pivotIndex;
};
