let display_btn = document.querySelector(".display_btn")
let nav = document.querySelector(".nav")
let close_btn = document.querySelector(".close_btn")


display_btn.addEventListener("click", function () {
    nav.classList.add("toggle_btn")
})

close_btn.addEventListener("click", function () {
    nav.classList.remove("toggle_btn")
})