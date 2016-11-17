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
    var $boxCon = $('.boxCon');
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
        storage.setItem('aa',str);
        $boxCon.show().html(obj1-1);
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
        storage.setItem('aa',str);
        var thrower = document.createElement('div');
        document.body.appendChild(thrower);
        $(thrower).addClass('thrower');
        var x = $btnAdd[0].offsetLeft;
        var y = $btnAdd[0].offsetTop;
        var ax = $box[0].offsetLeft;
        var ay = $box[0].offsetTop;
        var flyer = $('.thrower');
        flyer.fly({
            start: {
                left: x,
                top: y
            },
            end: {
                left: ax,
                top: ay
            },
            onEnd: function(){ //结束回调//提示信息
                $('.thrower').stop().hide();
                $boxCon.show().html(obj1)
            }
        });
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

});