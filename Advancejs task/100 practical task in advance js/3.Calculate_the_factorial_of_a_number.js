let arr = [10,20,80,70,6,23,5,41,99]

function fact(x){
    return (x==0)?1:x*fact(x-1)
}

console.log(arr.map(fact))