$(function ($) {
    var $btnAdd = $('.btnAdd');
    var $btnNot = $('.btnNot');
    var index = 1;
    var $box = $('.box');
    var $price = $('.price');
    var cur = $price.html();
    var $content = $('.content');
    var $total = $('.total');
    var storage = window.localStorage;
    var str = '';
    var $isOk = $('.isOk');
    var obj = '';
    var obj1 = '';
    $btnNot.click(function () {
       index--;
        if(index<=1){
            index=1
        }
        $content.val(index);
        $total.html(function(){
            str = index*cur;
            return str;
        });
        storage.setItem('bb',index);
        storage.setItem('aa',str)
    });
    $btnAdd.click(function () {
        index++;
        $content.val(index);
        $box.show();

        $total.html(function(){
            str = index*cur;
            return str;
        });
        storage.setItem('bb',index);
        storage.setItem('aa',str)
    });
    if(!storage){
        return false
    }else{
         obj =storage.getItem('aa');
        obj1 =storage.getItem('bb');
        $box.show();
        $content.val(obj1);
        $total.html(obj);
        $btnAdd.click(function () {
            obj1++;
            $content.val(obj1);
            $box.show();
            $total.html(function(){
                str = obj1*cur;
                return str;
            });
            storage.setItem('bb',obj1);
            storage.setItem('aa',str)
        });
        $btnNot.click(function () {
            obj1--;
            if(obj1<=1){
                obj1=1
            }
            $content.val(obj1);
            $total.html(function(){
                str = obj1*cur;
                return str;
            });
            storage.setItem('bb',obj1);
            storage.setItem('aa',str)
        });
    }
$isOk.click(function () {
    $.post({
        url:'/push',
        data:{
            aa:str,
            bb:obj1
        },
        type:'json'
    })
})
});