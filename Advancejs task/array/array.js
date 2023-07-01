// -> make one array who have value from 1 to 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. print 9th and 10th element of array
// console.log(arr[9])
// console.log(arr[10])



// 2. print every element of array by map reduce and for loop
// let map = arr.map((a) => {
//     return a
// })
// console.log(`map=${arr}`)

// let x = arr.reduce((lastEle, ele) => {
//     return lastEle || ele
// })
// console.log(`reduce =${x}`)

// for (let i = 0; i < 10; i++) {
//     console.log('loop= ', arr[i])
// }



// 3. change a value of 6th element with 100
// let change = arr.splice(5, 1, 100)
arr[5] = 100
console.log(arr)



// 4. print a array till element value not gratter then 100
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 100) {
        break;
    }
    console.log(arr[i])
}


// 5. add 1 in every element of an array
// let ele = arr.map((a) => {
//     return a + 1
// })
// console.log(ele)


// 6. add one 0 in start of array
// arr.unshift(0)
// console.log(arr)


// 7. add one 99 in end of array
// arr.push(99)
// console.log(arr)


// 8. remove 1 element from start of  array
// arr.shift()
// console.log(arr)


// 9. remove 1 element from end of  array
// arr.pop()
// console.log(arr)


// 10. do sum of all value of an array with use of map, reduce and for-loop
// reduce
// let c = arr.reduce((lastEle, ele) => {
//     return lastEle + ele
// })
// console.log(c)

// //map
let b = 0
let sum = arr.map((a) => {
    return a += b
})
console.log(sum)

// // loop
// let loop = 0
// for (i = 0; i < arr.length; i++) {
//     loop += arr[i]
// }
// console.log(loop)



// 11. sort a array in acending decending
// let sort = arr.sort((a, b) => {
//     return b - a
//     // return a - b
// })
// console.log(sort)


// 12. reverce an array with use of method
// arr.reverse();
// console.log(arr)



// 13. reverce an array with use of for-loop
let newarr = []

for (let i = 0; i < arr.length; i++) {
    newarr.unshift(arr[i])
}
console.log(arr)