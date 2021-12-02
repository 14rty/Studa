function getSortedArray(arr, key) {
    if(key == 'age'){
        arr.sort((a, b) => a.age > b.age ? 1 : -1);
    }else{
        arr.sort((a, b) => a.name > b.name ? 1 : -1);
    }

}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let artem = { name: "Артем", age: 63 };
let esin = { name: "Есин", age: 17 };

let arr = [ vasya, petya, masha, artem, esin ];

getSortedArray(arr, 'age');
alert(arr[0].name); 
alert(arr[1].name);
alert(arr[2].name);
alert(arr[3].name); 
alert(arr[4].name); 