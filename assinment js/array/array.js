// -> make one array who have value from 1 to 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. print 9th and 10th element of array
console.log(arr[8])
console.log(arr[9])

// 2. print every element of array by map reduce and for loop

let map = arr.map((a) => {
    return a
})
console.log(map)

let x = arr.reduce((lastEle, ele) => {
    return lastEle
})
console.log(x)

for (let i = 0; i < 10; i++) {
    console.log(i)
}


// 3. change a value of 6th element with 100
let change = arr.splice(6)
console.log(change)

// 4. print a array till element value not gratter then 100
// for (let i = 0; i < 100; i++) {
//     console.log(arr[i])
// }












// 4. print a array till element value not gratter then 100
// 5. add 1 in every element of an array
// 6. add one 0 in start of array
// 7. add one 99 in end of array
// 8. remove 1 element from start of  array
// 9. remove 1 element from end of  array
// 10. do sum of all value of an array with use of map, reduce and for-loop
// 11. sort a array in acending decending
// 12. reverce an array with use of method
// 13. reverce an array with use of for-loop