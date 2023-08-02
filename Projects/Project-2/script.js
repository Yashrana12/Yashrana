let icon = document.querySelector(".fa-moon")
icon.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode")

    if (document.body.classList.contains("dark-mode") == true) {
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
        icon.style.backgroundColor = "white"
        icon.style.color = "black"
    } else {
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
        icon.style.backgroundColor = "black"
        icon.style.color = "white"
    }
})

let toggle_btn = document.getElementById("toggle_btn")
let nav = document.querySelector(".nav")
let sym = document.querySelector(".fa-bars")
toggle_btn.addEventListener("click", function () {
    nav.classList.toggle("open_menu")

    if (nav.classList.contains("open_menu") == true) {
        sym.classList.remove("fa-bars")
        sym.classList.add("fa-xmark")
    } else {
        sym.classList.remove("fa-xmark")
        sym.classList.add("fa-bars")
    }

})



function changebg() {
    let header = document.querySelector(".header")
    let current = window.scrollY

    if (current > 0) {
        header.classList.add("header-fix")
    } else {
        header.classList.remove("header-fix")
    }
}
window.addEventListener("scroll", changebg)