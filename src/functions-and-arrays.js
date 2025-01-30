// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if(a>b){
        return a;}
    else{
        return b;
    }
}

console.log(maxOfTwoNumbers(3, 5)); 



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if(arr.length === 0){
        return null;
    }
    let resultMax = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > resultMax.length){
            resultMax = arr[i];
        }
    }
    return resultMax;
}

console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sumResult = 0;
    for (let j=0; j < arr.length; j++){
        sumResult = sumResult + arr[j];
    }
    return sumResult;
}

console.log(sumNumbers(numbers)); 



// Iteration 4 | Numbers Average
const numbers2 = [2, 2, 2];

function averageNumbers(arr) {
    if(arr == 0 || arr == []){
        return 0 ;
    } else {
        let sumResult =0;
        let averageResult = 0;
        for (let k=0; k < arr.length; k++){
            sumResult = sumResult + arr[k];
            averageResult = sumResult / arr.length;
        } return averageResult;
    } 
}

console.log(averageNumbers(numbers2));
console.log(averageNumbers([]));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if(arr == 0 || arr == []){
        return null;
    } else {
        for (let l=0; l < arr.length; l++){
            if(arr[l] == word){
                return true;
            } 
        } return false;
    }
}

console.log(doesWordExist(words2, "machine"));
console.log(doesWordExist([], "machines"));
