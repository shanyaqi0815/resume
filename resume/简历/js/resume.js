$("#xiugai").click(function(){
    $(".hader").hide();
    $(".hader1").show();
});
//按钮1的js
$("#bot1").click(function(){
    $(".hader").show();
    $(".hader1").hide();
});
//按钮2的js
$("#bot2").click(function(){
    $(".hader").show();
    $(".hader1").hide();
});
//第二个修改按钮js
$("#xiugai2").click(function(){
    $("#gongzuo-jingyan").show();
    $(".hader-bot").hide()
});
//按钮3的js
$("#bot3").click(function(){
    $("#gongzuo-jingyan").hide();
    $(".hader-bot").show();
    alert("确认保存")
});
//按钮4的js
$("#bot4").click(function(){
    $("#gongzuo-jingyan").hide();
    $(".hader-bot").show();
    alert("确认取消")
});
//删除按钮1的js
$("#delete").click(function(){
    alert("是否删除！");
    $(".hader-bot").remove()
});
$("#box5").click(function(){
    $("#zhanshi").hide();
    $("#xinzeng-xiangmu").show()
});
$("#box6").click(function(){
    alert("是否删除！");
    $("#zhanshi").remove()
});
$("#bot7").click(function(){
    $("#zhanshi").show();

    $("#xinzeng-xiangmu").hide();

    alert("确认保存")
});
//按钮4的js
$("#bot8").click(function(){
    $("#zhanshi").show();
    $("#xinzeng-xiangmu").hide();

    alert("确认取消")
});
$("#box11").click(function(){
    $(".Education-cent").hide();
    $("#jiaoyu-jingli").show()
});
$("#box12").click(function(){
    alert("你确定删除吗？");
    $(".Education-cent").remove();
});
$("#bot15").click(function(){
    $("#jiaoyu-jingli").hide();
    $(".Education-cent").show()
});
$("#bot16").click(function(){
    $("#jiaoyu-jingli").hide();
    $(".Education-cent").show()
});



$("#add-Field").click(function(){
    $("#gongzuo-jingyan").show();
    $(".hader-bot").hide()
});
$("#bot18").click(function(){
    $("#gongzuo-jingyan").hide();
    $(".hader-bot").show();
    alert("确认保存")
});
//按钮4的js
$("#bot19").click(function(){
    $("#gongzuo-jingyan").hide();
    $(".hader-bot").show();
    alert("确认取消")
});
$("#add-project").click(function(){
    $("#zhanshi").hide();
    $("#xinzeng-xiangmu").show()
});
$("#box20").click(function(){
    $("#zhanshi").hide();
    $("#xinzeng-xiangmu").show()
});
$("#box21").click(function(){
    alert("是否删除！");
    $("#zhanshi").remove()
});
$("#add-jiaoyu").click(function(){
    $(".Education-cent").hide();
    $("#jiaoyu-jingli2").show()
});
$("#bot30").click(function(){
    $("#jiaoyu-jingli2").hide();
    $(".Education-cent").show()
});
$("#bot31").click(function(){
    $("#jiaoyu-jingli2").hide();
    $(".Education-cent").show()
});
$("#yanzheng").blur(function(){
    var ss=$("#yanzheng").val();
    var reDateTime =/([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))/
   ;
 if(this.value==""){
     alert("请输入日期")
 }else if(!(reDateTime.test(ss))){
     alert("请按照格式输入：2017-12-12VB");
     this.value="";
 }
});

