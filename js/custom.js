$(function(){
    $(".toggle").click(function(){
        $(".gnb, .icon").stop().slideToggle("fast");
    })
})

//banner
$(function(){
    const banner = $("#bannerList > ul > li");
    const button = $("#btnList > li");
    
    let current = 0;
    let timer;
    
    button.click(function(){
        let i = $(this).index();
        button.removeClass("on");
        $(this).addClass("on");
        move(i);
    });

    timer = setInterval(slide,5000);

    function slide(){
        let n = current+1;
        if(n == banner.length){
            n = 0;
        }
        button.eq(n).trigger("click");
    }

    function move(i){
        if(current == i) return;
        let currentEl = banner.eq(current);
        let nextEl = banner.eq(i);
        currentEl.css("left",0).stop().animate({"left":"-100%"},500);
        nextEl.css("left","100%").stop().animate({"left":0},500);
        current = i;
    }

    $("#btnList").mouseover(function(){
        clearInterval(timer);
    });
    $("#btnList").mouseout(function(){
        timer = setInterval(slide,5000);
    })
});