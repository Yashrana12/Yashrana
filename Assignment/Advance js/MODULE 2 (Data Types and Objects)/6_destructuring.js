let user = {
    name: "john",
    age: 30
}
let {
    name,
    age: years,
    isAdmin = false
} = user

console.log(name) //john
console.log(years) //30
console.log(isAdmin) //fasle