//event_box2 slider//
$('.eb_slider_list').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    pauseOnHover:false, //마우스를 올렸을떄 autoplay가 멈추는 기능 해제
});


$('.page_act .btn_stop').click(function(e){
    e.preventDefault(); 
    if($('.event_box2 .page_act').hasClass("on")){
        $('.event_box2 .page_act').removeClass("on");
        $('.page_act .btn_stop').slick('slickPause');
    }
});


$('.page_act .btn_play').click(function(e){
    e.preventDefault(); 
    $('.event_box2 .page_act').addClass("on");
    $('.page_act .btn_stop').slick('slickPlay');
})


//event_box3-- slider//
let card =$('.card');
 card.slick({
    arrows:false,
    dots:true,
    autoplay:true,
    pauseOnHover:false,
});

$('.event_box3 .pagn_act .btn_stop').click(function(e){
    e.preventDefault();
    if($('.event_box3 .pagn_act').hasClass("on")){
        $('.event_box3 .pagn_act').removeClass("on")
        card.slick('slickPause');
    }

})

$('.event_box3 .pagn_act .btn_play').click(function(e){
    e.preventDefault();
    $('.event_box3 .pagn_act').addClass("on")
    card.slick('slickPlay');
})

//life 버튼
let tab=$('.life_menu ul li');
let menu=$('.life_style li');
tab.mouseover(function(){
    //태생적으로 태어날 때 가지고 나온 번호를 추출-->index()
    let target = $(this);
    let index = target.index(); 
    console.log(index)
    menu.css({opacity:0})
    menu.eq(index).css({opacity:1})

});
