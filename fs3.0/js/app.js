new WOW().init();

function updateTab(tab_id){
    title = tab_id+"_title";
    tab = tab_id+"_tab";
    let tabs_container_id = document.querySelector("#"+title).parentElement.parentElement.id;
    $("#"+tabs_container_id+" .tabs_title").removeClass("title_active");
    $("#"+tabs_container_id+" #"+title).addClass("title_active");
    $("#"+tabs_container_id+" .tabs_content").removeClass("content_active");
    $("#"+tabs_container_id+" #"+tab).addClass("content_active");
}