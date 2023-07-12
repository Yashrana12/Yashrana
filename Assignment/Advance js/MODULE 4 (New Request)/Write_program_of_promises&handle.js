let myPromise = new Promise((res, rej) => {
    let person = {
        name: "Yash"
    }
    res(person)
})


setTimeout(() => {
    myPromise.then((person) => {
        person.age = '26'
        console.log(person)
    }).catch((err) => {
        return err
    })
}, 3000)


console.log(myPromise)