$(document).ready(function(){
    $('.r1').click(function(){
        $('.r1_t').slideToggle()
    });
    $('.r2').click(function(){
        $('.r2_t').slideToggle()
    });
    $('.r3').click(function(){
        $('.r3_t').slideToggle()
    });
});

$(function(){
$('.prev').click(function(){
$('.slide li:last').prependTo('.slide');
$('.slide').css('margin-left',-200);
$('.slide').stop().animate({marginLeft:0},800);
});

$('.next').click(function(){        
$('.slide').stop().animate({marginLeft:-200},800, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({marginLeft:0});
});
});
});