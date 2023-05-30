function form_blank_value() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    if (fname == "" && lname == "") {
        document.getElementById("msg1").innerText = "Enter First Name"
        document.getElementById("msg2").innerText = "Enter Last Name"
        return false
    } else {
        document.getElementById("msg1").innerText = "";
        document.getElementById("msg2").innerText = "";
        return false
    }
}