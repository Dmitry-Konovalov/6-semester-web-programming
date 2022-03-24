$(function(){
    let header = $("#header");
    let group1 = $("#group1");
    let group1H = group1.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll", function(){
        scrollPos = $(this).scrollTop();

        if(scrollPos > group1H){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    console.log(group1H)
    header.addClass("fixed");

});
