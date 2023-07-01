// ['i','am', 'yash'] ==> want ['hsay','ma','i'  ]
// by use of map, loop and reducer 

let arr = ['i', 'am', 'yash']

// console.log(arr.reverse((x) => x))

let str = []
//map
let reverseArr = arr.map((value) => {
    let x = value.split('')

    let y = x.reverse()

    let z = y.join('')

    str.push(z)
})

let a = str.reverse()
console.log("map:", a)

//loop

// let arr1 = []
// for (let i = 0; i < arr.length; i++) {
//     let value = arr[i]
//     let revele = value.split('').reverse().join('')
//     arr1.push(revele)
// }
// console.log(arr1)

// //reduce
// let red = arr.reduce((lastele, ele) => {
//     let redu = ele.split('').reverse().join('')
//     return [...lastele, redu]
// }, "")
// console.log(red)

let red = arr.reduce((lastele, ele) => {
    let a = ele.split("")

    let b = a.reverse()

    let c = b.join("")

    str.push(c)

}, 0)
let x = str.reverse()

console.log("reduce:", x)