$(function(){
    let header = $("#header");
    let group1 = $("#group1");
    let group1H = group1.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load", function(){
        scrollPos = $(this).scrollTop();

        if(scrollPos > group1H - 250){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
    console.log(group1H)
    header.addClass("fixed");

/*------======scroll======------*/

    $("[data-scroll]").on("click", function(event){
    event.preventDefault();
        let blockID = $(this).data("scroll");
        let blockOffset = $(blockID).offset().top;
        console.log(blockOffset);
        console.log(blockID)

        if(blockID == "#group2"){
            $("html, body").animate({
                scrollTop: blockOffset - 100}, 600);
        } else {
            $("html, body").animate({
                scrollTop: blockOffset}, 600);
            }
        })
    });

