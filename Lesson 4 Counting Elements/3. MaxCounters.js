MaxCounters
Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.

https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/


Score - 100%

Solution - https://app.codility.com/demo/results/trainingY767U6-ETR/


function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
        var max = 0;
        var min =0;
        let my_array = new Array(N + 1).join('0').split('').map(parseFloat);
        
        for(let i=0; i<A.length; i++){
            if( A[i] >= 1 && A[i] <= N){ //case 1
                //console.log(my_array[ A[i] -1] );
                if(my_array[ A[i] -1] < min){
                    my_array[ A[i] -1] = min;
                }
                my_array[ A[i] -1 ] ++;  
                
                if( my_array[ A[i] -1 ] > max){ 
                    max = my_array[ A[i] -1 ];
                }
            }
            else if( A[i] == N+1){      // case 2
                min = max; 
            }
        }
        //console.log(my_array.length);
        for(let j=0; j<my_array.length; j++){
            if(my_array[j] < min){
                my_array[j] = min; 
            }
        }
        
        return my_array;
}
