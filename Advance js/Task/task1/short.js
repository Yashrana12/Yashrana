let arr = [1, 9, 15, 27, 39, 46, 57, 62, 70, 84, 99, 100]
let output = arr.sort((a, b) => {
    // return (a - b)
    return (b - a)
})

console.log(output)

// let arr1 = ["a", "b", "c"]
// let copy = arr1.slice(0);
// console.log(copy)

// let item = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// item.reverse()
// console.log(item)