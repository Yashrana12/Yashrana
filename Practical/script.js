let open_btn = document.getElementById("open_bars")
let nav = document.querySelector(".nav")
open_btn.addEventListener("click", () => {
    nav.classList.toggle("p-menu")
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
window.addEventListener("scroll", changebg(white))