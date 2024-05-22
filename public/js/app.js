function close_mobile_menu(){
    document.documentElement.style.overflow = "";
    document.getElementsByTagName("body")[0].style.overflow = "";
    document.querySelector(".navbar_mobile").classList.toggle("open");
    document.querySelector(".backdrop").classList.toggle("open");
}

function show_mobile_menu(){
    document.documentElement.style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.querySelector(".navbar_mobile").classList.toggle("open");
    document.querySelector(".backdrop").classList.toggle("open");
}



function open_sub_menu(evt){
    let handle = evt.id;
    let menu_to_open = (evt.id);
    menu_to_open = menu_to_open.substr(0,menu_to_open.indexOf("_handle"));
    if(document.querySelector("#"+menu_to_open).classList.contains("submenu-open")){   
        document.querySelector("#"+menu_to_open).classList.remove("submenu-open");
        $("#"+menu_to_open).slideUp(200);
        $(".submenu").removeClass("submenu-open");
        setTimeout(()=>{
            document.querySelector("#"+handle).parentElement.classList.remove("handle-on-submenu-open");
            document.querySelector("#"+handle+" i").classList.add("fa-angle-down");
            document.querySelector("#"+handle+" i").classList.remove("fa-angle-up");
        },220);
        // document.getElementsByTagName("body")[0].style.overflow = "";
    }
    else{
        $(".submenu").removeClass("submenu-open");
        $(".submenu").hide();
        $(".navbar .menu_div div").removeClass("handle-on-submenu-open");
        $(".navbar_mobile .menu_div div").removeClass("handle-on-submenu-open");
        document.querySelector("#"+menu_to_open).classList.add("submenu-open");
        $("#"+menu_to_open).slideDown(500);
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