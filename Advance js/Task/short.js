let arr = [1, 9, 15, 27, 39, 46, 57, 62, 70, 84, 99, 100]
let output = arr.sort((a, b) => {
    return (a - b)
})
console.log(output)