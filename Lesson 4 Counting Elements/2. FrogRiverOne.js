FrogRiverOne
Find the earliest time when a frog can jump to the other side of a river.

https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

Score - 81%

Solution - https://app.codility.com/demo/results/trainingY3HJ5Y-C2V/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0;
    for(let i=1; i<=X; i++){
        //console.log(A.indexOf(i) + '_' + i);
        let index = A.indexOf(i);
        if( index != -1){
            if(index > result){
                result = index;
            }
        }   
        else {
            return -1;
        }
    }
    return result;
}