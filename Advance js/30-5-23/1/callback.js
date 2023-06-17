console.log("this is Callback Function")

let students = [{
    name: harry,
    subject: javascript
}, {
    name: ram,
    subject: ajs
}]

function enrollStudent(student) {
    setTimeout(function () {
        students.push(student);
    }, 3000);
}

function getStudent() {
    setTimeout(function () {

    }, 3000);
}