PermCheck
Check whether array A is a permutation.

https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

Score - 75%

Solution - https://app.codility.com/demo/results/training6V86MP-N68/
		   https://app.codility.com/demo/results/trainingSJR8NF-76C/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort();
    for(var i=1; i<=A.length; i++){
        if(A[i-1] != i){
            return 0;
        }
    }
    return 1;
    
}