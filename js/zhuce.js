
// 1. 给按钮注册点击事件
$('input[type=button]').click(function () {
  // 1.1 禁用按钮
  $('input[type=button]').prop('disabled', true);
  // 1.2 定义一个变量，赋值数字5
  var num = 10;
  $('input[type=button]').val(num + '秒后重新发送');
  // 1.3 定义一个定时器
  var timer = setInterval(function () {
    // 1.4 更改数字-1
    num--;
    // 1.5 更新按钮的内容
    $('input[type=button]').val(num + '秒后重新发送');
    // 1.6 判断数字是否等于0，若等于0，清除定时器，按钮不再禁用，按钮内容更新为发送
    if(num==0) {
      clearInterval(timer);
      $('input[type=button]').prop('disabled', false);
      $('input[type=button]').val('获取验证码');
    }
  },1000);

});

$('input[type=button1]').click(function(){
    alert('注册成功');
})

