let student = {
    name: "Yash"
}
try {
    function Yash() {
        student.age = '26'

    }

    function Y1() {
        student.address = 'A108 Adam Street,New York, NY 535022 United States'
        console.log(student)
    }

    let blank = ''
    let x1 = Yash(blank)
    let x2 = Y1(x1)
} catch (error) {
    console.log("error", error)
}