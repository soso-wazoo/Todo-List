const kiran = 'Kiran'; // string
let c = 'c';    // char
let num = 19; // number
// int => 19
// float => 2.45
// double => 2.48548595959590505404004040404004303030300303
// long => 4647338399929220200000200220220200202
let raining = true; //boolean
let x = null; // null

// 10/29
"hoisting"
// var 
function func() {

}

// func();

// const 
// let 
// arrow function
const func1 = () => {

}

// func1();

// global scope
// available everywhere in the File, or program
// const global = "global";

// console.log("1 g:", global);

// function func2() {
    
//     // local scope
//     // only available in the scope { } it's defined
//     const local = "local";
//     console.log("2 g:", global, "l:", local);
// }

// console.log("3 g:", global);

// func2();


// double a number
let a = 11;

// input placeholder "num" is a PARAMETER
function doubleNumber(num){

    if (num) {
        return 2 * num;
    }

    console.error("No argument given");
}

// input to function is an ARGUMENT
// console.log("double:", doubleNumber(a));

// Array [1, 2, 3]
// zero-indexed - start at index 0

/*
all of  thw
dnfknfk;fn4fn2f;
*/
const itemsList = [1, 'extra', true, doubleNumber, null];   // this code does this
             //   [0,     1,      2,      3,          4]
console.log("itemsList:", itemsList[(itemsList.length) - 1]);

console.log("WHILE");

let index = 0;
while (index < itemsList.length) {
    console.log("index:", itemsList[index]);
    ++index;
}

console.log("FOR");

for (let index = 0; index < itemsList.length; ++index) {
    console.log("index:", itemsList[index]);
}

console.log("ForEach");
const nums = [1, 2, 3, 4, 5];

nums.forEach((num) => console.log(num));

console.log("itemslist");

itemsList.forEach((item) => console.log(item));