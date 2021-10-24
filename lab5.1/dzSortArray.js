// function getSortedArray(name, age) {
//     let n = array.lenght;
//     let min = 0;
//     for (let i = 0; i < n-1; i++ ){      
//            for (let j = i; j< n-1; j++ ){
//               if ( array[age] < min){
//                 min = array
//                 array[i] = array[j]
//               }        
//            } 
//            min = 0;
//         }
// }

// let array = [{name: 'Макар', age: 20}, {name: 'Роберт', age: 32}, {name: 'Екатерина', age: 50}, {name: 'Оксана', age: 24}, {name: 'Святослав', age: 43}];
// array = getSortedArray(array);
// console.log(array);

//Задание 1 =>
function bubbleSort(Arr){       

    let n = Arr.length;
    for (let i = 0; i < n-1; i++)
     { for (let j = 0; j < n-1-i; j++)
        { if (Arr[j+1] < Arr[j])
           { let t = Arr[j+1]; Arr[j+1] = Arr[j]; Arr[j] = t; }
        }
     }                     
    return Arr; 
}

//Задание 2 => 

// function schitatel(Arr){
//     let n = Arr.length;
//     let k = 0; // считает кол-во чисел которых больше одного 
//     for (let i = 0; i < n-1; i++){

//     }
// }

// function copySorted(arr) {
//     return arr.slice().sort();
//   }
// let sorted = copySorted(arr);
// while(arr[i] == arr[i + 1], )
// for (let i = 0; i < arr.length - 1; i++){
//     while(arr[i])
// }
function Sort(arr) {
    let array = {};
    for(var i = 0; i < arr.length; ++i){
    array[arr[i]]=0;
    }
    for(var j = 0; j < arr.length; ++j){
    array[arr[j]]++;
    }
    console.log(array);
    }
    var sort = [3,2,1,2,8,2,4,1,13,3,2];
    Sort(sort);
//Задание 3 => 
function mattrix(arr){
    let max = -1;
    let minarr = [];
    for (let i = 0; i < n-1; i++){
        for (let j = 0; j < n-1-i; j++){
            let min = 0;
            if(arr[i,j]< min){
                min = a[i,j]
            }
        }
        minarr.push(min);
        min = 0; 
    }
    for(let i = 0; i < minarr.length - 1; i++){
        if(minarr[i]> max){
            max = minarr[i]
        }
    }
    console.log(max); 
}
//Задание 4 => 
//Задание 5 => 

