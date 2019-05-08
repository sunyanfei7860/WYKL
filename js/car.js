// 数据
var datas = [
    { pName: '鞋子', src: '../img/4/01.jpg', price: 100, count: 1 },
    { pName: '纸尿布', src: '../img/4/2.jpg', price: 30, count: 1 },
    { pName: '口红', src: '../img/4/04.jpg', price: 180, count: 1 },
    { pName: '衣服', src: '../img/4/1.jpg', price: 500, count: 1 },
    { pName: '雅诗兰黛', src: '../img/4/03.jpg', price: 110, count: 1 },
    { pName: '奶粉', src: '../img/4/3.jpg', price: 280, count: 1 }
];

// 【功能：根据数据生成表格】
// 1,循环遍历datas生成tr
for(var i =0, len = datas.length; i < len; i++) {
    // 取出某一个对象
    var obj = datas[i]
    // 2 创建tr，追加到tbody中
    var $tr = $('<tr></tr>').appendTo('tbody');
    // 3. 创建第1个td
    $('<td></td>').html('<input type="checkbox">').appendTo($tr);
    // 4. 创建第2个td
    $('<td></td>').html('<img src="'+obj.src+'"> <p>' + obj.pName + '</p>').appendTo($tr);
    // 5. 创建第3个td
    $('<td></td>').text(obj.price + '￥').appendTo($tr);
    // 6. 创建第4个td
    $('<td></td>').html(' <div class="count-c clearfix"> <a href="javascript:" class="reduce">-</a> <input type="text"  value="'+obj.count+'"> <a href="javascript:" class="add">+</a></div>').appendTo($tr)
    // $('<td></td>').html(' <div class="count-c clearfix"> <a href="javascript:" class="reduce disabled">-</a> <input type="text" value="'+obj.count+'"> <a href="javascript:" class="add">+</a></div>').appendTo($tr);
    // 7. 创建第5个td
    $('<td></td>').text(obj.price * obj.count + '￥').appendTo($tr)
    // 8. 创建第6个td
    $('<td></td>').html('<a href="javascript:" class="del">删除</a>').appendTo($tr)

}

// 【功能1：全选】
// 1. 给thead中的复选框注册点击事件
$('thead input').click(function () {
    // 2.获取当前点击的复选框的checked值
    var isChange = $(this).prop('checked');
    // 3. 设置tbody中的复选框
    $('tbody input[type=checkbox]').prop('checked',isChange)
    // 4.计算总数量和总价格
    getTotalCountAndPrice()
})

// 【功能2：点击tbody中的复选框，检测thead中复选框是否选中】
// 1.给tbody中的复选框注册点击事件
$('tbody input[type=checkbox]').click(function () {
    // 选中的数量
    var len1 = $('tbody input[type=checkbox]:checked').length
    // tbody中所有的复选框数量
    var len2 = $('tbody input[type=checkbox]').length
    // 判断是否一致
    if (len1 == len2){
        // 全选
        $('thead input').prop('checked',true)
    }else {
        // 不全选
        $('thead input').prop('checked',false)
    }

    // 计算总数量和总价格
    getTotalCountAndPrice()
})

// 【功能3：封装实现计算总数量和总价格】
function getTotalCountAndPrice () {
    // 获取到选中复选框
    var $cked = $('tbody input[type=checkbox]:checked')
    // 创建变量分别存放总数量和总价格，初始化为0
    var sunCount = 0,sumPrice = 0;
    // 循环遍历选中复选框
    for(var i = 0,len = $cked.length; i < len; i++) {
        // 找到当前行中的文本框取出值，累计sunCount
        var count = $cked
        .eq(i) //取出某一个选中的复选框
        .parent() //找到当前td
        .parent() //找到当前tr
        .find('input[type=text]') //找到当前tr中的文本框
        .val() //取出值
        // 累计
        sunCount = sunCount + Number(count)

    // 把统计好的数量赋值给id为totalCount的span
    $('#totalCount').text(sunCount)
    // 找每一行的小计
     var price = $cked.eq(i)
    .parent()   //取出某一个选中的复选框
    .parent()   //找到当前td
    .children()  //找到当前tr
    .eq(4) //取出索引为4的td
    .text() //取出内容
    // 累计
    sumPrice = sumPrice + parseFloat(price)
    } 
    // 把统计好的数量赋值给id为totalCount的span
    $('#totalCount').text(sunCount)
    //把统计好的价格赋值给id为totalPrice的span
    $('#totalPrice').text(sumPrice)
}  

// 【功能4：点击加按钮实现数量递增】
//给加按钮注册点击事件
$('.add').click(function () {
    // [更新数量]
    // 找到文本框
    var $tet = $(this).prev()
    //获取原有的数量
    var count = $tet.val()
    // 更新
    count++;
    $tet.val(count)

    // [更新小计]
    // 获取单价
    var price = $(this)
    .parent()  // 获取div
    .parent()   // 获取的是当前td
    .prev()    // 找到单价所在的td
    .text();
// 计算小计
var r = parseFloat(price) * count;
// 更新
$(this)
    .parent()  // 获取div
    .parent()   // 获取的是当前td
    .next()    // 找到小计所在的td
    .text(r + '￥');


// [当前行的复选框变为选中]
// 找当前行的tr
var $tr = $(this)
    .parent()  // 获取div
    .parent()   // 获取的是当前td
    .parent();
// 更改复选框的checked值
$tr.find('input[type=checkbox]').prop('checked', true);

// [减按钮要变为不禁用]
$tet.prev().removeClass('disabled');
// [统计总数量和总价格]
getTotalCountAndPrice();
});


// 【功能5：点击减按钮实现数量递减】
$('.reduce').click(function () { 
// [更新数量]
// 找到文本框
var $txt = $(this).next();
// 获取原有的数量
var count = $txt.val();
// 更新
count--;
// 限制
if (count <= 1) {
    // count 设置为1
    count = 1;
    // 禁用按钮
    $(this).addClass('disabled');
} 
$txt.val(count);

// [更新小计]
// 获取单价
var price = $(this)
    .parent()  // 获取div
    .parent()   // 获取的是当前td
    .prev()    // 找到单价所在的td
    .text();
// 计算小计
var r = parseFloat(price) * count;
// 更新
$(this)
    .parent()  // 获取div
    .parent()   // 获取的是当前td
    .next()    // 找到小计所在的td
    .text(r + '￥');


// [当前行的复选框变为选中]
// 找当前行的tr
var $tr = $(this)
    .parent()  // 获取div
    .parent()   // 获取的是当前td
    .parent();
// 更改复选框的checked值
$tr.find('input[type=checkbox]').prop('checked', true);

// [统计总数量和总价格]
getTotalCountAndPrice();
})

// 【功能6：点击删除按钮删除某一项】
$('.del').click(function(){
    var isOk = confirm('要删除吗');
    if(isOk){
        // 找到当前行移除
        $(this).parent().parent().remove();
        // 更新价格和数量
        getTotalCountAndPrice();
         // 是否显示购物车为空的信息
         isShowInfo()
    }
});

// 【功能7：点击按钮实现删除所选商品】
$('.del-all').click(function(){
    var isOk = confirm('确定删除？')
    if(isOk) {
        // 找到选中的复选框tr删除
        $('tbody input[type=checkbox]:checked').parent().parent().remove()
        // 更新数量和总价格
        getTotalCountAndPrice()
        // 是否显示购物车为空的信息
        isShowInfo()
    } 

    
})

// 【功能8：清理购物车】
function isShowInfo() {
    // 检测tbody中是否还有tr
    var len = $('tbody tr').length
    // 判断
    if(len == 0) {
        // 隐藏car
        $('.car').hide()
        // 显示提示信息
        $('.info').show(500)
    }
}