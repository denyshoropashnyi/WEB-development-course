'use strict';

let testArray = [1, 3, 2, 1];

init();

function init() {
    deleteOneInvalidArrValue(testArray);
};


function deleteOneInvalidArrValue(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[+i - 1] > arr[i]) {
            arr.splice(i--, i);
            break;
        }
    }
    IsArrValuesIncrease(arr);
}

function IsArrValuesIncrease(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[+i - 1] > arr[i]) {
            console.log('false');
            return false;
        }
    }
}