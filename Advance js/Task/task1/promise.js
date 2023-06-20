let promise = new Promise((resolve, reject) => {
    let person = {
        name: "Yash"
    }
    resolve(person)
})

promise.then((person) => {
        person.age = "26"
        console.log(person)
    })
    .catch((err) => {
        return err
    })