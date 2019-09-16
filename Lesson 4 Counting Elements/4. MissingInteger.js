MissingInteger
Find the smallest positive integer that does not occur in a given sequence.

https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

Score - 66%

Solution - https://app.codility.com/demo/results/trainingNE3NBX-H6H/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
     A.sort();
     let length = A.length + 1;
    for(let i=1;i< length;i++){
        if(A.indexOf(i) < 0){
            return i;  
        }
    }
    return length;
    
}

