$(window).scroll(function(){
$(".fade-custom").css("opacity", 1 - $(window).scrollTop() / 400);
});