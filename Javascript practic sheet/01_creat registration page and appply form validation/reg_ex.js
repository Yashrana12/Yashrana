function reg_ex_name(uname, spanid) {
    let reg_ex = /^[a-zA-Z]*$/
    if (reg_ex.test(uname.value)) {
        document.getElementById(spanid).innerText = "";
        return false
    } else {
        document.getElementById(spanid).innerText = "invalid name";
        return false
    }
}

function check_value(blnk, spanid) {
    if (blnk.value == "" || blnk.value == null || blnk.value == -1) {
        document.getElementById(spanid).innerHTML = "Please fill this"
        return false
    } else {
        document.getElementById(spanid).innerHTML = ""
        return false
    }
}

function check_address_length() {
    let addr = document.getElementById("addr").value;
    if (addr.length < 20) {
        document.getElementById("msg5").innerHTML = "must have 20 letters";
        return false;
    } else {
        document.getElementById("msg5").innerHTML = "";
        return false;
    }
}

function mobile_ex(exchk, spanid) {
    let regEx = / ^[0-9]*$/;
    if (regEx.test(exchk.value)) {
        document.getElementById(spanid).innerHTML = ""
        return false
    } else {
        document.getElementById(spanid).innerHTML = "Enter Digit Only"
        return false
    }
}

function mobile_length() {
    let mno = document.getElementById("mno").value
    if (mno.length < 10) {
        document.getElementById("msg7").innerHTML = "Enter proper number"
        return false
    } else {
        document.getElementById("msg7").innerHTML = ""
        return false
    }
}

function regex_email(emailex, spanid) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(emailex.value)) {
        document.getElementById(spanid).innerHTML = ""
        return false
    } else {
        document.getElementById(spanid).innerHTML = "Enter proper emailid"
        return false
    }
}


// pass reg ex
function pass_reg_ex() {
    let passex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let pass = document.getElementById("pass").value;
    if (passex.test(pass)) {
        document.getElementById("msg9").innerHTML = "";
        return false
    } else {
        document.getElementById("msg9").innerHTML = "Enter proper password";
        return false
    }
}

function match_password() {
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (cpass != pass) {
        document.getElementById("msg10").innerHTML = "Password Does Not Match"
    } else {
        document.getElementById("msg10").innerHTML = ""
    }

}