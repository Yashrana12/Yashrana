let obj = {
    a: 10,
    b: 20
}

console.log("obj:", obj.b)

//let m = obj.c.m;
//let m = (obj.c)?((obj.c.m)?(obj.c.m.n):(null)

let m = obj ? .c ? .m ? .c;
//obj?.sum?.()
console.log("obj:", m)