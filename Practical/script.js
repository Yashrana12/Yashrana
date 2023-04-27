let open_btn = document.getElementById("open_bars")
let nav = document.querySelector(".nav")
open_btn.addEventListener("click", () => {
    nav.classList.toggle("show_menu")
})

function changebg() {
    let header = document.querySelector(".header")
    let current = window.scrollY
    if (current > 0) {
        header.classList.add("header_fix")
    } else {
        header.classList.remove("header_fix")
    }
}
window.addEventListener("scroll", changebg)