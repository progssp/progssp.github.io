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
        $(".navbar_mobile .menu_div .menu-list-option").removeClass("handle-on-submenu-open");
        document.querySelector("#"+menu_to_open).classList.add("submenu-open");
        $("#"+menu_to_open).slideDown(500);
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





function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    let elements = document.querySelector(".skiptranslate");
    if(elements.childNodes.length > 1){
        for(let i=1;i<elements.childNodes.length;i++){
            elements.removeChild(elements.childNodes[i]);
        }
    }
    let element = document.querySelector(".skiptranslate span");
    element.remove();

    setTimeout(function(){
        let found_de = 0;
        let options = document.querySelector(".goog-te-combo").childNodes;
        // console.log(options.length);
        for(let i=0;i<options.length;i++){
            if(options[i] == "de"){
                found_de = 1;
                break;
            }
        }
        if(found_de == 0){
            let new_option = document.createElement("option");
            new_option.value = "de";
            new_option.innerHTML = "German";
            document.querySelector(".goog-te-combo").appendChild(new_option);
        }
    },3000);

}


document.addEventListener("DOMContentLoaded",function(evt){
});


function GTranslateGetCurrentLang() {
    var keyValue = document['cookie'].match('(^|;) ?googtrans=([^;]*)(;|$)');return keyValue ? keyValue[2].split('/')[2] : null;
}
function GTranslateFireEvent(element,event){
    try{
        if(document.createEventObject){
            var evt=document.createEventObject();
            element.fireEvent('on'+event,evt);
        }
        else{
            var evt=document.createEvent('HTMLEvents');
            evt.initEvent(event,true,true);
            element.dispatchEvent(evt)
        }
    }
    catch(e){}
}
function doGTranslate(lang_pair){
    
    
    console.log(lang_pair);
    if(lang_pair.value){
        lang_pair = lang_pair.value;
    }
    if(lang_pair == ''){
        return;
    }
    var lang = lang_pair.split('|')[1];
    console.log(lang);
    // if(GTranslateGetCurrentLang() == null && lang == lang_pair.split('|')[1]){
    //     return;
    // }
    if(typeof ga=='function'){
        ga('send', 'event', 'GTranslate', lang, location.hostname+location.pathname+location.search);
    }
    var teCombo;
    var sel = document.getElementsByTagName('select');
    for(var i=0;i<sel.length;i++){
        if(sel[i].className.indexOf('goog-te-combo')!=-1){
            teCombo=sel[i];
            break;
        }
    }
    if(document.getElementById('google_translate_element')==null||document.getElementById('google_translate_element').innerHTML.length==0||teCombo.length==0||teCombo.innerHTML.length==0){
        setTimeout(function(){
            doGTranslate(lang_pair)
        },500)
    }
    else{
        console.log("selected val: " + teCombo.value);
        teCombo.value=lang;
        console.log(teCombo.classList);
        // let element = document.querySelector("."+teCombo.classList[0]);
        // element.value = lang;
        // element.dispatchEvent(new Event("change"));
        GTranslateFireEvent(teCombo,'change');
        GTranslateFireEvent(teCombo,'change');
    }
}




























// city page scripting
function updateTab(tab_id){
    title = tab_id+"_title";
    tab = tab_id+"_tab";
    console.log(tab);
    document.querySelector("#details_tab #"+title).classList.toggle("tabs_title_active");
    $("#details_tab .tabs_content").hide();
    $("#details_tab #"+tab).addClass("tabs_content_active");
}

// city page scripting end