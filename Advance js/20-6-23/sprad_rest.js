// spread op
// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr;
// let arr3 = [...arr, 6]
// arr[2] = 33;

// console.log("arr2:", arr2)
// console.log("arr3:", arr3)



// let obj1 = {
//     a: 10,
//     b: 20
// };
// let obj2 = obj1

// let obj3 = {
//     ...obj1
// }

// obj1.a = 30
// console.log("obj2:", obj2)
// console.log("obj3:", obj3)

// Rest
function sum(x, y, ...z) {
    console.log("x,y", x, y);
    console.log("z", z)
    return x + y;
}


console.log("sum()", sum(10, 20, 30, 40, 50))