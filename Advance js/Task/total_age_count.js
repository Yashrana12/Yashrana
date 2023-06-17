let person = [{
        name: "ram",
        age: 12
    },
    {
        name: "raj",
        age: 10
    },
    {
        name: "riya",
        age: 20
    },
    {
        name: "ved",
        age: 18
    },
];

let total = person.reduce((lastEle, ele) => {
    let total = (lastEle.age || lastEle) + ele.age
    return total
})
console.log(total)

let count = 0
let index = person.map((e) => {
    return count++
})
console.log(index)