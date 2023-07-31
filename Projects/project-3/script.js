function changbg(){
    let header = document.querySelector("header")
    let current= window.screenY

    if(current > 0){
        header.classList.add("header-fixed")
    }else{
        header.classList.remove("header-fixed")
    }
}
window.addEventListener("scroll",changbg)