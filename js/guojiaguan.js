
//app图标添加事件
$('.app').mouseenter(function () {

    $('.app a').eq(1).css('display','block')
})

$('.app').mouseleave(function () {

    $('.app a').eq(1).css('display','none')
})

// 顶部下拉列表

$('.rightopnav li').mouseenter(function () {

    $(this).css('background','#ffffff')

    $(this).find('a,span').css('color','red')

    $(this).find('.divbottom').stop().slideDown(200)
})

$('.rightopnav li').mouseleave(function () {

    $(this).css('background','')

    $(this).find('a,span').css('color','')

    $(this).find('.divbottom').stop().slideUp(200)
})

//购物车背景颜色
$('.cat').mouseenter(function () {

    $(this).css('background','#fff4f5')
})

$('.cat').mouseleave(function () {

    $(this).css('background','')
})

$('.TabBoxleft').mouseenter(function () {

    $('.TabBox_leftlist').stop().slideDown(200)
})

//顶部列表导航
$('.TabBox_leftlist li').mouseenter(function () {

    var index = $(this).index()

    $(this).css({
        background:'#ffffff',
        color:'red'
    }).siblings().css({
        background:'',
        color:''
    })

    $('.bannerlist .itme').eq(index).show().siblings().hide()
})

$('.TabBoxbottom').mouseleave(function () {

    $('.itme').hide()

    $('.TabBox_leftlist').stop().slideUp(200)
})


//第一个列表
$('.onelist li').mouseenter(function () {

    $(this).children().eq(0).css({'z-index': '100'})
    $(this).children().eq(0).css('border','1px solid red')
    $(this).children().children().eq(1).css({
        'white-space':'normal',
        'text-overflow':'',
        'overflow': 'auto',
        'line-height':'25px'
    })
})



$('.onelist li').mouseleave(function () {

    $(this).children().eq(0).css({'z-index': '0'})
    $(this).children().eq(0).css('border','1px solid rgb(255, 255, 255)')
    $(this).children().children().eq(1).css({
        'white-space':'nowrap',
        'text-overflow':'ellipsis',
        'overflow': 'hidden',
        'line-height':'normal'
    })
})


// 其他列表
$('.twolist li').mouseenter(function () {

    console.log()
    $(this).children().children().eq(1).css('line-height')
    $(this).children().eq(0).css({'z-index': '100'})
    $(this).children().eq(0).css('border','1px solid red')
    $(this).children().children().eq(1).css({
        'white-space':'normal',
        'text-overflow':'',
        'overflow': 'auto',
        'line-height':'25px'
    })
})


$('.twolist li').mouseleave(function () {

    $(this).children().eq(0).css({'z-index': '0'})
    $(this).children().eq(0).css('border','1px solid rgb(0, 0, 0)')
    $(this).children().children().eq(1).css({
        'white-space':'nowrap',
        'text-overflow':'ellipsis',
        'overflow': 'hidden',
        'line-height':'normal'
    })
})

//侧边栏滚动事件
$(window).scroll(function () {

    var riben = $('.ri').offset().top
    // 获取向上卷去的距离
    var juan = $('body,html').scrollTop()

    if (juan >= riben) {

        $('.righttap').slideDown(1000)
        $('.righttap li').eq(1).addClass('active').siblings().removeClass('active')
    }else {
        $('.righttap').slideUp(1000)
    }

    if ( juan >= $('.han').offset().top-2) {
        
        $('.righttap li').eq(2).addClass('active').siblings().removeClass('active')
    }
    if ( juan >= $('.mei').offset().top-2) {
        
        $('.righttap li').eq(3).addClass('active').siblings().removeClass('active')
    }
    if ( juan >= $('.ao').offset().top-2) {
        
        $('.righttap li').eq(4).addClass('active').siblings().removeClass('active')
    }
    if ( juan >= $('.de').offset().top-2) {
        
        $('.righttap li').eq(5).addClass('active').siblings().removeClass('active')
    }
    if ( juan >= $('.ying').offset().top-2) {
        
        $('.righttap li').eq(6).addClass('active').siblings().removeClass('active')
    }
    if ( juan >= $('.fa').offset().top-2) {
        
        $('.righttap li').eq(7).addClass('active').siblings().removeClass('active')
    }

})

$('.righttap li').click(function () {

    var index = $(this).index()

    if ( index == 8) {

        $('body,html').animate({scrollTop:0},300)
    }
    if ( index == 7) {

        $('body,html').animate({scrollTop:$('.fa').offset().top},300)
    }
    if ( index == 6) {

        $('body,html').animate({scrollTop:$('.ying').offset().top},300)
    }
    if ( index == 5) {

        $('body,html').animate({scrollTop:$('.de').offset().top},300)
    }
    if ( index == 4) {

        $('body,html').animate({scrollTop:$('.ao').offset().top},300)
    }
    if ( index == 3) {

        $('body,html').animate({scrollTop:$('.mei').offset().top},300)
    }
    if ( index == 2) {

        $('body,html').animate({scrollTop:$('.han').offset().top},300)
    }
    if ( index == 1) {

        $('body,html').animate({scrollTop:$('.ri').offset().top},300)
    }
})