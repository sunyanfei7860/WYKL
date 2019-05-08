// 头部导航
$('.left_lis .sjkl').on('mouseenter', function () {
  $('.s_erwei')
    .stop()
    .slideDown()
})
$('.left_lis .sjkl').on('mouseleave', function () {
  $('.s_erwei')
    .stop()
    .slideUp()
})
$('.geren_zx a').on('mouseenter', function () {
  $(this).addClass('active')
  $('.geren')
    .stop()
    .slideDown()
})
$('.geren_zx a').on('mouseleave', function () {
  $(this).removeClass('active')
  $('.geren')
    .stop()
    .slideUp()
})
$('.kehu_fuwu').on('mouseenter', function () {
  $('.fuwu')
    .stop()
    .slideDown()
})
$('.kehu_fuwu').on('mouseleave', function () {
  $('.fuwu')
    .stop()
    .slideUp()
})

$('.chongzhi').on('mouseenter', function () {
  $('.card')
    .stop()
    .slideDown()
})
$('.chongzhi').on('mouseleave', function () {
  $('.card')
    .stop()
    .slideUp()
})
$('.xiaofei').on('mouseenter', function () {
  $('.consumer')
    .stop()
    .slideDown()
})
$('.xiaofei').on('mouseleave', function () {
  $('.consumer')
    .stop()
    .slideUp()
})
$('.gengduo').on('mouseenter', function () {
  $('.more')
    .stop()
    .slideDown()
})
$('.gengduo').on('mouseleave', function () {
  $('.more')
    .stop()
    .slideUp()
})
$('.s_lis').on('mouseenter', function () {
  $('.x_lis ul')
    .stop()
    .slideDown()
})
$('.x_lis ul').on('mouseleave', function () {
  $('.x_lis ul')
    .stop()
    .slideUp()
})

$('.x_lis li').on('mouseenter', function () {
  $(this)
    .addClass('beijing')
    .siblings()
    .removeClass('beijing')
  var num = $(this).index()
  $('.itme')
    .eq(num)
    .css('display','block')
    .siblings()
    .css('display','none')
})
$('.mbody_nav').mouseleave(function () {
  $('.x_lis li').removeClass()
  $('.itme').css('display','none')
})

// 楼梯列表
// 获取热品分类
var r = $('.goods').offset().top
var h = $('.caption').offset().top
var b = $('.boom').offset().top
var x = $('.rexiao1').offset().top
var i = $('.rexiao2').offset().top
var o = $('.rexiao3').offset().top
$(window).scroll(function () {
  var v = $(this).scrollTop()
  if (v >= r) {
    $('.stair').slideDown()
  } else {
    $('.stair').slideUp()
  }
  if (v >= h) {
    $('.stair li').eq(1).addClass('current').siblings().removeClass('current')
  }
  if (v >= b) {
    $('.stair li').eq(2).addClass('current').siblings().removeClass('current')
  }
  if (v >= x) {
    $('.stair li').eq(3).addClass('current').siblings().removeClass('current')
  }
  if (v >= i) {
    $('.stair li').eq(4).addClass('current').siblings().removeClass('current')
  }
  if (v >= o) {
    $('.stair li').eq(5).addClass('current').siblings().removeClass('current')
  }
})

// 点击每一个li动画到对应的楼层
$('.stair li').click(function () {
  var index = $(this).index()

  if (index === $('.stair li').length - 1) {
    return
  }
  // 找到对应楼层
  var t = $('.jd').eq(index).offset().top
  // 动画滑到目的地
  $('html, body').stop().animate({ scrollTop: t }, 1000, 'linear')
})
// 回到顶部
$('.back').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 1000,'linear')
})

// 热销爆款
//第一个a
$('.x_rexiao a').mouseenter(function () {

  $(this).children().eq(0).css({ 'z-index': '100' })
  $(this).children().eq(0).css('border', '1px solid red')
  $(this).children().children().eq(1).find('h5').css({
    'white-space': 'normal',
    'text-overflow': '',
    'overflow': 'auto',
    'line-height': '25px'
  })
})

$('.x_rexiao a').mouseleave(function () {

  $(this).children().eq(0).css({ 'z-index': '0' })
  $(this).children().eq(0).css('border', '1px solid rgb(255, 255, 255)')
  $(this).children().children().eq(1).find('h5').css({
    'white-space': 'nowrap',
    'text-overflow': 'ellipsis',
    'overflow': 'hidden',
    'line-height': 'normal'
  })
})

// 底部样式
$('.a_one').mouseenter(function () {
  $('.a_one span').show()
})
$('.a_one').mouseleave(function () {
  $('.a_one span').hide()
})
$('.b_two').mouseenter(function () {
  $('.b_two span').show()
})
$('.b_two').mouseleave(function () {
  $('.b_two span').hide()
})
$('.c_three').mouseenter(function () {
  $('.c_three span').show()
})
$('.c_three').mouseleave(function () {
  $('.c_three span').hide()
})
























