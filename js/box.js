var i = -1;
var time = 0;
junmper();
function junmper() {
    i++;
    if (i > 4)
        i = 0;
    $(".nav ul li").eq(i).addClass("bg").siblings().removeClass("bg");
    $(".pic ul li").eq(i).fadeIn(100).siblings().fadeOut(100);
    $(".pic ul li").eq(i).find(".img1").css({ left: "-760px" });
    $(".pic ul li").eq(i).find(".img2").css({ left: "-15px", display: "none" });
    $(".pic ul li").eq(i).find(".img1").animate({ left: "0px" }, 500, function () {
        $(".pic ul li").eq(i).find(".img2").css({ display: "block" });
        $(".pic ul li").eq(i).find(".img2").animate({ left: "0px" }, 500);
    });
}
time = setInterval("junmper()", 3700);
$(".nav ul li").click(function () {
    $(this).addClass("bg").siblings().removeClass("bg");
    i = $(this).index();
    $(".pic ul li").eq(i).fadeIn(100).siblings().fadeOut(100);
    $(".pic ul li").eq(i).find(".img1").css({ left: "-760px" });
    $(".pic ul li").eq(i).find(".img2").css({ left: "-15px", display: "none" });
    $(".pic ul li").eq(i).find(".img1").animate({ left: "0px" }, 500, function () {
        $(".pic ul li").eq(i).find(".img2").css({ display: "block" });
        $(".pic ul li").eq(i).find(".img2").animate({ left: "0px" }, 500);
    });
})
$().hover(function () {
    clearInterval(time);
}, function () {
    time = setInterval("junmper()", 3700);
})