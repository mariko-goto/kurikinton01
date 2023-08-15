//スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//フェードイン
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50){
                $(this).addClass('scrollin');
            }
        });
    });
});

//ローディングアニメーション
$(function() {
var h = $(window).height(); //ブラウザウィンドウの高さを取得
$('#loader-bg ,.spinner').height(h).css('display','block'); //ウィンドウの高さに合わせてローディング画面を表示
});

$(window).on('load', function () {
$('#loader-bg').delay(900).fadeOut(800); //$('#loader-bg').fadeOut(800);でも可
$('.spinner').delay(600).fadeOut(300); //$('#loader').fadeOut(300);でも可
});
