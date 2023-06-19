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
]

let age = person.filter((e) => {
    return e.age < 18
})
console.log(age)