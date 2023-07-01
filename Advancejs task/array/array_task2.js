// 1. give all value which can devided by 2 - not use filter
let arr = [1, 2, 3, 6, 7, 9, 3, 56, 8]
let res = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        res.push(arr[i]);
    }
}
console.log(res)

// let data = arr.map((e) => {
//     return e % 2
// })
// console.log(data)


// 2. give all value above 3 by use of filter
// let above = arr.filter((x) => {
//     return x > 3
// })
// console.log(above)


// // 3. give index of 56
// let index = arr.indexOf(56)
// console.log(index)



// // 4. give true/false result when check given vale is exists in array or not