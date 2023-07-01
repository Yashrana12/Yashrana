// 1. ['i','am', 'yash'] ==> want ['yash','am','i']
// by use of map, loop and reducer 
//map 
let arr = ['i', 'am', 'yash']
// let revarr = []

// let output = arr.map((x) => {
//     revarr.unshift(x)
// })
// console.log(revarr)


//loop
// const revarr = []
// for (let i = arr.length - 1; i >= 0; i--) {
//     revarr.push(arr[i]);
// }
// console.log(revarr)

//reduce
let red = []
let x = arr.reduce((lastEle, ele) => {
    return ele
})
console.log(x)


















// 2. want "i am yash" without use join method
// let arr = ['i', 'am', 'yash'];
// let total = ["  "]
// for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i];
// }
// console.log(total);