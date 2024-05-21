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



function open_sub_menu(evt){
    let handle = evt.id;
    let menu_to_open = (evt.id);
    menu_to_open = menu_to_open.substr(0,menu_to_open.indexOf("_handle"));
    if(document.querySelector("#"+menu_to_open).classList.contains("submenu-open")){   
        document.querySelector("#"+menu_to_open).classList.remove("submenu-open");
        $("#"+menu_to_open).slideUp(); 
        $(".submenu").removeClass("submenu-open");   
        document.querySelector("#"+handle).parentElement.classList.remove("handle-on-submenu-open");
        document.querySelector("#"+handle+" i").classList.add("fa-angle-down");
        document.querySelector("#"+handle+" i").classList.remove("fa-angle-up");
        // document.getElementsByTagName("body")[0].style.overflow = "";
    }
    else{
        $(".submenu").removeClass("submenu-open");
        $(".submenu").slideUp();
        $(".navbar .menu_div div").removeClass("handle-on-submenu-open");
        $(".navbar_mobile .menu_div div").removeClass("handle-on-submenu-open");
        document.querySelector("#"+menu_to_open).classList.add("submenu-open");
        $("#"+menu_to_open).slideDown();
        document.querySelector("#"+handle).parentElement.classList.add("handle-on-submenu-open");
        $(".navbar_mobile .menu_div div a i").addClass("fa-angle-down");
        $(".navbar_mobile .menu_div div a i").removeClass("fa-angle-up");
        $(".navbar .menu_div div a i").addClass("fa-angle-down");
        $(".navbar .menu_div div a i").removeClass("fa-angle-up");
        document.querySelector("#"+handle+" i").classList.remove("fa-angle-down");
        document.querySelector("#"+handle+" i").classList.add("fa-angle-up");
        // document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
    
}