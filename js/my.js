/*
* @Author: admin
* @Date:   2017-08-10 22:07:15
* @Last Modified by:   admin
* @Last Modified time: 2017-08-14 17:07:34
*/

'use strict'
 $(function(){
        var i=0;
        var timer;
        var num=0
        function aa(){
            clearInterval(timer);
            timer=setInterval(function(){
                i+=1;
                if(i>2){
                    i=0
                }
                $('.banner ul').animate({left:-1364*i+'px'})
                },2000)
              }
              aa();
              $('.banner ul').hover(function() {
                    /* Stuff to do when the mouse enters the element */clearInterval(timer);
                }, function() {
                    /* Stuff to do when the mouse leaves the element */
                    aa();
            });
              $('.NR .zr .scope li').hover(function() {
                  $(this).children('img').stop().slideDown(500);
              }, function() {
                 $(this).children('img').stop().slideUp(500);
              });
              $('.NR>ul p').click(function(event) {
                  var a=$(this).index('p')
                  $('.NR .zr div').eq(a).css('display', 'block').siblings().css('display', 'none');
              });
              $('.six li').hover(function() {  
                  $(this).children('span').stop().fadeIn(100);
              }, function(){
                  $(this).children('span').stop().fadeOut(100);
              });
              $('.banner span:nth-of-type(1)').click(function(event) {
                    num=num-1
                    if(num<0){
                      num=0
                    }
                    $('.banner ul').css('left', -1364*num+'px');
              });
              $('.banner span:nth-of-type(2)').click(function(event) {
                    num=num+1
                    if(num>2){
                      num=2
                    }
                    $('.banner ul').css('left', -1364*num+'px');
              });
              $('.present p').hover(function(){
                  $(this).parent().siblings('span').stop().fadeIn();
              }, function() {
                  $(this).parent().siblings('span').stop().fadeOut();
              });
        })






















 