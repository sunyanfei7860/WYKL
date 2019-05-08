/**
 * Created by Administrator on 2019/1/12.
 */
//顶部导航
$('#tel').mouseenter(function () {
    $('.erweima').show();
});
$('#tel').mouseleave(function () {
    $('.erweima').hide();
});
$('.more').mouseenter(function () {
    $(this).css('background-color','#fff').find('.list').show();
    $(this).find('.arr').css({
        transform: 'rotateZ(180deg)',
        transition: '0.5s'
    })
    // alert(1)
});
$('.more').mouseleave(function () {
    $(this).css('background-color','#000').find('.list').hide();
    $(this).find('.arr').css({
        transform: 'rotateZ(0deg)',
        transition: '0.5s'
    })
});
$('.more .list .erweima').mouseenter(function () {
    $(this).find('img').show();
});
$('.more .list .erweima').mouseleave(function () {
    $(this).find('img').hide();
});


//搜索框顶部固定
var sTOP = $('.search').offset().top;
$(window).scroll(function () {
    if ($('html,body').scrollTop() >= sTOP){
        $('.search').addClass('searchFixed');
        $('.searchTips').hide();
        $('.rightCar').hide();
        $('.leftLogo a').css({
            'background-size':'40%',
            height:40
        });

    }else {
        $('.search').removeClass('searchFixed');
        $('.searchTips').show();
        $('.rightCar').show();
        $('.leftLogo a').css({
            'background-size':'70%',
            height:65
        });
    }

});