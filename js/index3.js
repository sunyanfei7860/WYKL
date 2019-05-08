
// nav
// 二维码
$ ('.shouji').mouseenter (function () {
    $ ('.erweima').css('display','block')
})
$ ('.shouji').mouseleave (function () {
    $ ('.erweima').css('display','none')
})

// 个人中心
$ ('.zx ').mouseenter (function() {
    $ (this).addClass ('active')
    .siblings().removeClass ('active')
    $('.zhongxin').css('display','block')
    $('.zhongxin').parent ().siblings().find('ul').css('display','none')
})
$ ('.zx ').mouseleave (function () {
    $ ('.zx').removeClass('active')
    
    $ ('.zhongxin').css('display','none')

    
    
})
// 客服
$ ('.kf').mouseenter (function() {
    $ (this).addClass ('active')
    .siblings().removeClass ('active')
    $('.kefu').css('display','block')
    $('.kefu').parent ().siblings().find('ul').css('display','none')
})
$ ('.kefu').mouseleave (function () {
    $ ('.kefu').css('display','none')
    $ ('.kf').removeClass('active')
    
})
// 消费者权益
$ ('.xf').mouseenter (function() {
    $ (this).addClass ('active')
    .siblings().removeClass ('active')
    $('.xiaofei').css('display','block')
    $('.xiaofei').parent ().siblings().find('ul').css('display','none')
})
$ ('.xiaofei').mouseleave (function () {
    $ ('.xiaofei').css('display','none')
    $ ('.xf').removeClass('active')
    
})
// 更多
$ ('.gd').mouseenter (function() {
    $ (this).addClass ('active')
    .siblings().removeClass ('active')
    $('.gengduo').css('display','block')
    $('.gengduo').parent ().siblings().find('ul').css('display','none')
})
$ ('.gengduo').mouseleave (function () {
    $ ('.gengduo').css('display','none')
    $ ('.gd').removeClass('active')
    
})


// 所有分类

$ ('.l_product h4').mouseenter (function () {
    $(this).next ().css ('display','block')
    
})
$ ('.m_nav').mouseleave (function () {
    $(this).find('.l_product').children('ul').css ('display','none')
    $ ('.caidan img').css ('display','none')
    
})
$('.l_product li').mouseenter (function () {
    var index = $ (this).index()
    $ ('.caidan img').eq (index).css ('display','block')
    .siblings ().css ('display','none')
})


// 侧边栏

// 显示侧边栏
var v1 = $ ('.Rq').offset().top
$ (window).scroll (function () {
    var v = $ (window).scrollTop()
    if (v>=v1) {
        $ ('aside').css ('display','block')
    }else {
        $ ('aside').css ('display','none')
    }

    // 楼梯样式
    if (v>=$('.Rq').offset().top) {
        $ ('aside li').eq (0).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Xp').offset().top) {
        $ ('aside li').eq (1).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Pp').offset().top) {
        $ ('aside li').eq (2).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Md').offset().top) {
        $ ('aside li').eq (3).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Jay').offset().top) {
        $ ('aside li').eq (4).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Ahc').offset().top) {
        $ ('aside li').eq (5).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Lw').offset().top) {
        $ ('aside li').eq (6).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Dr').offset().top) {
        $ ('aside li').eq (7).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Ldz').offset().top) {
        $ ('aside li').eq (8).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.St').offset().top) {
        $ ('aside li').eq (9).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Snp').offset().top) {
        $ ('aside li').eq (10).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Ytl').offset().top) {
        $ ('aside li').eq (11).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Mdan').offset().top) {
        $ ('aside li').eq (12).addClass ('active')
        .siblings ().removeClass ('active')
    }
    if (v>=$('.Tj').offset().top) {
        $ ('aside li').eq (13).addClass ('active')
        .siblings ().removeClass ('active')
    }
    
    
})

$('aside li').click(function () { 
    // 获取当前点击的li的索引
    var index = $(this).index();
    // 找到对应的楼层,并获取距离文档的top值
    var t = $('.content').eq(index).offset().top;
    // 设置页面卷去的间距
    // $(window).scrollTop(t);
    $('html,body').animate({ scrollTop: t }, 500, 'linear');
});
$ ('aside .aside_gettop').click (function () {
    $('html,body').animate({ scrollTop: 0 }, 500, 'linear');
})


$ (' .aaa').mouseenter (function () {
    $(this).addClass ('active')
    .find ('h3').css ('height','44')
    $ (this).parent().siblings ().removeClass ('active')
    $ (this).parent ().css ('height','300px')
})