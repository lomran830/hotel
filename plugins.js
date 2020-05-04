$(function () {
    'use strict';
    $(window).on("scroll", function () {
        
        console.log($(this).scrollTop())
        console.log("offset"+($(".part3").offset().top-302))
    if($(this).scrollTop()>=($(".view").offset().top)-343){
        $(".view").fadeIn(5000);
        $(".room-1").fadeIn(6000);
    }
    if($(this).scrollTop()>=($(".part3").offset().top)){
        $(".part3").fadeIn(5000);
    }
    if($(this).scrollTop()>=($(".part7").offset().top)){
        $(".part7").fadeIn(5000);
    }
        if ($(window).scrollTop()) {
            $(".up").on("click",function(){
                $(".sign").hide();
                    $(".back").hide();
                    $(window).scrollTop(0);
            })
            $(".disc").fadeOut();

            $("nav").addClass("text")
            $(".hsg").show();
            $(".book").css("top",-52);
            $(".span").css("border-color","#000");
            $("i,.li_yu").css("color","#000");

            $(".minue").on("mouseenter scrollTop",function(e){
                $(".test").show().css("color","black");
                $(".div2").css("margin-top",7)

            })
            $(".custom").css("color","white")
            $(".minue").on("click scrollTop",function(){
                $(".minue-o").css({
                    "top":-7,
                    "left":0
                });
            })
            $(".minue").on("click scrollTop",function(){
            $(".list-minue").fadeIn();
            })
            $(".ul_minue").css("top",-58);
            $(".ul_minue1").css("top",-77);
            $(".ert").css("top",-120);
            $(".list-minue").css({
                "margin-top":-117,
                "left":-1
            })
            $(".span_min").css("top",-15)
            $(".ui").css("top",4);

        }
        else {
            $(".disc").fadeIn();
            $('nav').removeClass('text');
            $(".hsg").hide();
            $(".book").css("top",0);
            $(".list-minue").css("margin-top",0);
            $("i,.li_yu").css("color","white");
            $(".span").css("border-color","white");
            $(".minue").on("mouseenter scrollTop",function(e){
                $(".test").show().css("color","white");
            })
            $(".list-minue").css({
                "margin-top":-70
            })
            $(".minue-o").css("top",-7);
            $(".span_min").css("top",18);
            $(".ul_minue").css("top",3);
            $(".ul_minue1").css("top",-13);
            $(".ert").css("top",-64);
            $(".ui").css("top",-18)
        }
        // if($(window)>=$('.view').offset().top){
            
        // }

    })
    $(".minue").on("mouseenter",function(e){
    
        $(".div").hide();
        $(".test").show().css("color","white");
        $(".div2").css("top",0)
    })
    $(".minue").on("mouseleave",function(){
        
        $(".div").show();
        $(".test").hide();
        $(".div2").css("margin-top",14)

        })
        $(".minue").on("click",function(){
            $(".list-minue").fadeIn().animate({
                
                height:"10%",
                height:"20%",
                height:"30%",
                height:"40%",
                height:"50%",
                height:"60%",
                height:"70%",
                height:"80%",
                height:"90%",
                height:"100%",
                marginTop:6
            },2000,function(){
                $(".ul_minue").fadeIn(2000);
                $(".ul_minue1").fadeIn(5000,function(){
                    $(".ert").fadeIn(2000)
                });
                
            });
            $(".custom").fadeIn();
            $(".span_min").toggle();
            $(".u").fadeIn();
            $(".minue-o").css({
                "background-color":" #0f6cb6",
                "position":"relative",
                "top":-8
            });
            
        })
        $(".custom").on("click",function(){
            $(".list-minue").fadeOut(2000,function(){
                $(".u").hide();
            $(".minue").css("background-color","transparent");
            $(".ul_minue").fadeOut(4000);
            $(".span_min").fadeIn();
            })
            
        })
        $(".fa-stack-1x").on("click",function(){
            $(".sign").fadeOut(2000,function(){
                $(".back").hide();
            });
            
        })
        $(".up").on("click",function(){
            $(".sign").hide();
                $(".back").hide();
            
        })
        
        $(".con,.con1").on("click",function(){
            $(".sign").fadeIn(2000);
            $(".back").show()
        })
        $(".fa-chevron-down").on("click",function(){
            $(window).scrollTop(730);
        })
    }
)


