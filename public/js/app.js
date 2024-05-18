function close_mobile_menu(){
    document.documentElement.style.overflow = "";
    document.getElementsByTagName("body")[0].style.overflow = "";
    document.querySelector(".navbar_mobile").classList.toggle("open");
    setTimeout(()=>{document.querySelector(".navbar_mobile").style.display = "none";},100);
}

function show_mobile_menu(){
    document.documentElement.style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.querySelector(".navbar_mobile").style.display = "block";
    setTimeout(()=>{document.querySelector(".navbar_mobile").classList.toggle("open");},100);
}