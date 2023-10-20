let arr = [1,5,9,6,7,5,9,2,1,5]

function findDuplicate(){
    let duplicate= arr.filter((e,i)=>{
        return arr.indexOf(e)===i
    })
    return duplicate
}

let removeDuplicate = findDuplicate()
console.log(removeDuplicate)