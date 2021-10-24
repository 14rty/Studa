"use strict";

function factorialIter(x) {
  let result = 1;
  while (x) {
      x -= 1
      result *= x;
      x--;
  }
  return result;
}
console.log(factorialIter(5));

function factorialRec(x) {
    let result;
    if (x > 0) {
        factorialRec(x-1)
    } else{
        return 1;
    }
}

function poli(x) {
    let S = x;
    let size = S.length;
    let lastNum = size;
    for(let i = 0; i<size/2; i++){
        if(S[i]==S[lastNum-1]){
          lastNum = lastNum - 1;
          return true;
        } else {
            break;
            print("no.")
        }

        }
    console.log()
    }
