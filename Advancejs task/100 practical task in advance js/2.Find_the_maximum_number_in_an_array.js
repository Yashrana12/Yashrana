let num =[1,26,78,12,96,45,336,2,7,999,100]
let maxNum = 0

// num.map((e)=>{
//     return e>maxNum?maxNum=e:null
// })
// console.log(maxNum)

let max=num.reduce((ele,lastele)=>{
    if(ele<lastele){
        ele=lastele
    }
    return ele
})

console.log(max)