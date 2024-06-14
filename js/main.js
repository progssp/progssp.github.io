(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);



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

function updateModalVisibility(modal_id){
    if(document.getElementById(modal_id).classList.contains("modal-open")){
        document.getElementById(modal_id).classList.remove("modal-open");
        document.getElementsByTagName("body")[0].style.overflow = "";
    }
    else{
        document.getElementById(modal_id).classList.add("modal-open");
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
}



function open_sub_menu(evt){
    let handle = evt.id;
    let menu_to_open = (evt.id);
    menu_to_open = menu_to_open.substr(0,menu_to_open.indexOf("_handle"));
    if(document.querySelector("#"+menu_to_open).classList.contains("submenu-open")){   
        document.querySelector("#"+menu_to_open).classList.remove("submenu-open");
        $("#"+menu_to_open).slideUp(150);
        $(".submenu").removeClass("submenu-open");
        setTimeout(()=>{
            document.querySelector("#"+handle).parentElement.classList.remove("handle-on-submenu-open");
            document.querySelector("#"+handle+" i").classList.add("fa-angle-down");
            document.querySelector("#"+handle+" i").classList.remove("fa-angle-up");
        },150);
        // document.getElementsByTagName("body")[0].style.overflow = "";
    }
    else{
        $(".submenu").removeClass("submenu-open");
        $(".submenu").hide();
        $(".navbar .menu_div div").removeClass("handle-on-submenu-open");
        $(".navbar_mobile .menu_div .menu-list-option").removeClass("handle-on-submenu-open");
        document.querySelector("#"+menu_to_open).classList.add("submenu-open");
        $("#"+menu_to_open).slideDown(140);
        document.querySelector("#"+handle).parentElement.classList.add("handle-on-submenu-open");
        $(".navbar_mobile .menu_div .menu-list-option i").addClass("fa-angle-down");
        $(".navbar_mobile .menu_div .menu-list-option i").removeClass("fa-angle-up");
        $(".navbar .menu_div div a i").addClass("fa-angle-down");
        $(".navbar .menu_div div a i").removeClass("fa-angle-up");
        document.querySelector("#"+handle+" i").classList.remove("fa-angle-down");
        document.querySelector("#"+handle+" i").classList.add("fa-angle-up");
        // document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
    
}

document.addEventListener("click",function(evt){
    if((evt.target.classList.contains("open"))&&(evt.target.classList.contains("backdrop"))){
        close_mobile_menu();
    }
    // $(".submenu").slideUp(200);
    // $(".submenu").removeClass("submenu-open");
    // console.log(evt);
});

function updateTab(tab_id){
    title = tab_id+"_title";
    tab = tab_id+"_tab";
    console.log(tab);
    $("#details_tab .tabs_title").removeClass("title_active");
    $("#details_tab #"+title).addClass("title_active");
    $("#details_tab .tabs_content").removeClass("content_active");
    $("#details_tab #"+tab).addClass("content_active");
}