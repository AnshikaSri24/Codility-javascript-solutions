PassingCars
Count the number of passing cars on the road

https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/

Score - 100%

Solution - https://app.codility.com/demo/results/trainingR3CTEK-7KU/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let num_east = 0; 
    let num_pass = 0; 
    for(let i=0; i< A.length; i++){
       if(A[i] ==0){ // to east
                num_east++;
            }
            if(A[i] ==1){ // to west
                num_pass = num_pass + num_east;
            }
    }
    if(num_pass > 1000000000 || num_pass < 0) 
            return -1;
        else
            return num_pass;   
    
}