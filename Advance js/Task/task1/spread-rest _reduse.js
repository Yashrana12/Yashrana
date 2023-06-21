let arr = [1, 2, 3, 4, 5, 6]
let arr2 = [...arr, ]

console.log("arr2:", arr2)

let sum = arr.reduce((lastEle, ele) => {
    if (ele += lastEle) {
        lastEle = ele
    }
    return lastEle
})
console.log(sum)
return