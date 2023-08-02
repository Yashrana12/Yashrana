// "test1"=> t-e+s-t+1"


// let input = "test"

// let output = input.split('-').join('').split('+').join('');

// console.log(output)

const input = "TEST"
const output = input.slice(0, input.length - 0).split('').join('+').split('').join('')

console.log(output)