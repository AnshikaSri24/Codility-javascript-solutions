CountDiv
Compute number of integers divisible by k in range [a..b].

https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

Score - 100%

Solution - https://app.codility.com/demo/results/training7BA27N-K68/

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let b = parseInt( B/K);
    let a = parseInt( (A > 0 ? (A - 1)/K: 0));
    if(A == 0){
        b++;
    }
    return b - a;
    //Got 50%
    //let count= 0 ;
    //for(let i=A; i<= B; i++){
    //    if(i % K == 0){
    //        count++;
    //    }
    //}
    //return count;
}