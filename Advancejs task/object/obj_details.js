// ---> make one object who contain your detail like - name,age,multiple vehicles
// -name,and one function print your name and then do below given task

// 1. print all value of your details object 
// 2. add a function name printAge inside object who print age from outside
// 3. get all key
// 4. get all value
// 5. add one key for city name and store your city name on it  from outside
// 6. delete age key from object 
// 7. make one function name addAge who print age with add some year which one pass by user

let person = {
    name: "Yash",
    age: "25",
    Vehicals: ["activa", "access"],

}
console.log(person)

// 2. add a function name printAge inside object who print age from outside
person.printAge = function () {
    return this.age
}
console.log(person.printAge())

// 3. get all key
console.log(Object.keys(person))


// 4. get all value
console.log(Object.values(person))


// 5. add one key for city name and store your city name on it  from outside
person.city = "Surat"
console.log(person.city)

// 6. delete age key from object 
// delete person.age
// console.log(person)

// 7. make one function name addAge who print age with add some year which one pass by user
person.addAge = function () {
    return this.age + 25
}
console.log(person.addAge())