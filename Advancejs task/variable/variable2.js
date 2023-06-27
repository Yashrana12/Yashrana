let x = 100
var y = 100
const z = 100
// const m 
{
    x = 90
    y = 90
    z = 90
    console.log(x) // 90 point - x1
    console.log(y) // 90 point - y1
    console.log(z) // error - z1

}

console.log(x) // 90    point - x2
console.log(y) // 90    point - y2
console.log(z) // error point - z2



// what will print at x1- => 90
// what will print at y1- => 90
// what will print at z1- => trow error 
// what will print at x2- => 90
// what will print at y2- => 90 
// what will print at z2- => trow error