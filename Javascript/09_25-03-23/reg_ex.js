function reg_ex_name() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let reg_ex = /^[a-zA-Z]*$/
    if (reg_ex.test(fname)) {
        document.getElementById("msg1").innerHTML = ""
        return false
    } else {
        document.getElementById("msg1").innerHTML = "Invalis Name"

    }

}