MinAvgTwoSlice
Find the minimal average of any slice containing at least two elements.

https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/

Score - 100%

Solution - https://app.codility.com/demo/results/trainingVX3B3U-GYD/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
        let minAvgIdx=0;
        let minAvgVal=(A[0]+A[1])/2; //At least two elements in A.
        let currAvg;
        for(let i=0; i<A.length-2; i++){
            /**
             * We check first the two-element slice
             */
            currAvg = ((A[i] + A[i+1]))/2;
            if(currAvg < minAvgVal){
                minAvgVal = currAvg;
                minAvgIdx = i;
            }
            /**
             * We check the three-element slice
             */
            currAvg = ((A[i] + A[i+1] + A[i+2]))/3;
            if(currAvg < minAvgVal){
                minAvgVal = currAvg;
                minAvgIdx = i;
            }
        }
        /**
         * Now we have to check the remaining two elements of the array
         * Inside the for we checked ALL the three-element slices (the last one
         * began at A.length-3) and all but one two-element slice (the missing
         * one begins at A.length-2).
         */
        currAvg = ((A[A.length-2] + A[A.length-1]))/2;
        if(currAvg < minAvgVal){
            minAvgVal = currAvg;
            minAvgIdx = A.length-2;
        }
        return minAvgIdx;
}

