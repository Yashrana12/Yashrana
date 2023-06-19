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



let print = person.map((e) => {
    return e.name
})
console.log(print)