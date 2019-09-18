GenomicRangeQuery
Find the minimal nucleotide from a range of sequence DNA.

https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/

Score - 62%

Solution - https://app.codility.com/demo/results/training4G92AE-4N6/

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let array = new Array();
    for(let i=0; i< P.length; i++){
        let initial = P[i];
        let end = Q[i];
        
        let newString = S.substring(initial,end + 1).split('');
        //console.log(newString);
        let min=10;
        for(let s=0; s< newString.length; s++){
            if(newString[s] == 'A'){
                if(min > 1){ min = 1;}
            }
            else if(newString[s] == 'C'){
                if(min > 2){ min = 2;}
            }
            else if(newString[s] == 'G'){
                if(min > 3){ min = 3;}
            }
            else if(newString[s] == 'T'){
                if(min > 4){ min = 4;}
            }
        }
        //console.log(min);
        array.push(min);
    }
    return array;
}
