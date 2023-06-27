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



    printAge: (age) => {
        return "age:" + age
    }

}
person.printAge(25)

person.city = "Surat"
delete person.age

console.log(person)
console.log(person.printAge(25))
console.log('keys ====> ', Object.keys(person))
console.log('value ====> ', Object.values(person))

// 7. make one function name addAge who print age with add some year which one pass by user