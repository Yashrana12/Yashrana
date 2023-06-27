let obj = {
    a: 10,
    b: 20
};

// let x = obj.a;
// let y = obj.b;


let {
    a,
    b
} = obj;
console.log("a,b:", a, b)

// array
let arr = [1, 2, 3, 4, 5]
let [x, y] = arr
console.log(x)
console.log(y)