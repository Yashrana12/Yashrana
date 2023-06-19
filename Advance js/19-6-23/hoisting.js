let x = "value";
console.log("x:", x)

function fun1() {

    // let v;

    {
        var v;
        v = "test"
    }
    return v;
}



console.log("fun1() :", fun1())