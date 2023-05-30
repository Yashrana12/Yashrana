let dis_btn = document.querySelector(".dis-btn");
let nav = document.querySelector(".navigations");
let close_btn = document.querySelector(".btn-close");

dis_btn.addEventListener("click", function () {
    nav.classList.add("show_menu");
})

close_btn.addEventListener("click", function () {
    nav.classList.remove("show_menu")
})