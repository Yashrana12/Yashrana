let john = {
    name: "John",
    age: 25
};
let pete = {
    name: "Pete",
    age: 30
};
let mary = {
    name: "Mary",
    age: 28
};
let user = [john, pete, mary];
let res = user.map((e) => {
    return e.name
})
console.log("🚀 ~ file: 3_Map_to_names.html:25 ~ res ~ res:", res)