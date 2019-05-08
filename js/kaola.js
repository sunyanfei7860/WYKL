
//nav
$('.shouji').mouseenter(function(){
    $('.phone').css('display','block')
})
$('.shouji').mouseleave(function(){
    $('.phone').css('display','none')
})





$('.xiala').mouseenter(function(){
    $(this).css('background','white')
    
})
$('.xiala ').mouseleave(function(){
    $('.xiala').css('background','black')
    
})

$('.xiala').mouseenter(function(){
    var sum1=$(this).index()
    $(' .xiala ul').eq(sum1-2).css('display','block')
})
$('.xiala').mouseleave(function(){
    var sum1=$(this).index()
    $(' .xiala ul').eq(sum1-2).css('display','none')
})


// $('.xiala').mouseenter(function(){
//    //$('.xiangshang').
//    $('.xiangxia').remove()

// })
$('.xiala').mouseenter(function(){

    $('.xiangxia').css({
        transform:'rotateY(180deg)',
        transition: '0.5s'

    })
 
 })

//  $('.xiala').mouseenter(function(){
//     $('.xiangxia').append()
//     $('.xiangshang').remove()
 
//  })

//  $('.xiala').mouseleave(function(){
//     $('.xiangshang').
//     $('.xiangxia').remove()
 
//  })






$('.xiala').mouseleave(function(){
    var sum1=$(this).index()
    $(' .xiala ul').eq(sum1-2).css('display','none')
})


//侧栏

$('.all').mouseenter(function(){
    $('.mei').css('display','block')
})
$('.mei').mouseleave(function(){
    $('.mei').css('display','none')
})
$('.all ').mouseenter(function(){
    $('.mei').css('display','block')
})
$('.nav').mouseleave(function(){
    $('.mei').css('display','none')
})

$('.mei li ').mouseenter(function(){
    var sum=$(this).index()
    $('.tupian ').eq(sum).css('display','block').siblings().css('display','none')
})
$('.nav .mei ').mouseleave(function(){
    
    $('.tupian ').css('display','none')
})



//微信

$('.weibo').mouseenter(function(){
    $('.xia1').css('display','block')
})
$('.weibo').mouseleave(function(){
    $('.xia1').css('display','none')
})


$('.weixin').mouseenter(function(){
    $('.xia2').css('display','block')
})
$('.weixin').mouseleave(function(){
    $('.xia2').css('display','none')
})


$('.feixin').mouseenter(function(){
    $('.xia3').css('display','block')
})
$('.feixin').mouseleave(function(){
    $('.xia3').css('display','none')
})



//礼品卡
