$(function ($) {
    "use strict";
 
    jQuery(document).ready(function () {


    //   magnific popup activation
    $('.video-play-btn, .play-video').magnificPopup({
        type: 'video'
    });
    
    $('.img-popup').magnificPopup({
        type: 'image'
    });

    // Product deal countdown
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
            
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span>%DD : </span> <span>%HH : </span>  <span>%MM : </span> <span>%SS</span>'));
        });
    });


    // Game Slider
    var $game_slider = $('.game-slider');
    $game_slider.owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        autoplay: true,
        margin: 0,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });


    // payment Slider
    var $method_slider = $('.method-slider');
    $method_slider.owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        autoplay: false,
        margin: 0,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            },
            1200: {
                items: 7
            },
            1920: {
                items: 7
            }
        }
    });

    // testimonial-slider
    var $testimonial_slider = $('.testimonial-slider');
    $testimonial_slider.owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        autoplay: false,
        margin: 30,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });


});



    /*-------------------------------
        back to top
    ------------------------------*/
    $(document).on('click', '.bottomtotop', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        var $window = $(window);
        if ($window.scrollTop( ) > 0 ) {
            $(".header").addClass('nav-fixed');
        } else {
            $(".header").removeClass('nav-fixed');
        }

        /*---------------------------
            back to top show / hide
        ---------------------------*/
        var st = $(this).scrollTop();
        var ScrollTop = $('.bottomtotop');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        lastScrollTop = st;

    });



    // Registr modal Start
    

        // Registr modal End
 

    $(window).on('load', function () {
  
    /*---------------------
        Preloader
    -----------------------*/
    var preLoder = $("#preloader");
    preLoder.addClass('hide');
    var backtoTop = $('.back-to-top');
    /*-----------------------------
        back to top
    -----------------------------*/
    var backtoTop = $('.bottomtotop');
    backtoTop.fadeOut(100);
    
    });

  
    
    /*-----------------------------
        Cart Page Quantity 
    -----------------------------*/
    $(document).on('click', '.qtminus', function () {
        var el = $(this);
        var $tselector = el.parent().parent().find('.qttotal');
        total = $($tselector).text();
        if (total > 1) {
            total--;
        }
        $($tselector).text(total);
    });

    $(document).on('click', '.qtplus', function () {
        var el = $(this);
        var $tselector = el.parent().parent().find('.qttotal');
        total = $($tselector).text();
        if(stock != "")
        {
            var stk = parseInt(stock);
              if(total < stk)
              {
                 total++;
                 $($tselector).text(total);              
              }
        }
        else {
        total++;            
        }

        $($tselector).text(total);
    });

   

});
let passChek= document.getElementById("passCheckbox");

let enterPass= document.getElementById("enterPass");

let count=0;
passChek.addEventListener("click", function(){
    if (count%2==0) 
    {
    enterPass.style.display = 'block';
    }else{
    enterPass.style.display = 'none';
    }
    count++;
});

  // let singgnin= document.getElementById("singgnin");
    
    // let singgnup= document.getElementById("singgnup");

    // let signhup= document.getElementById("signhup");

    // let personalInfo = document.getElementById("personalInfo");

    //     singgnin.addEventListener("click", function(){
    //          signhup.style.display = 'block';
    //          personalInfo.style.display = 'none';  

    //     })   

    //     singgnup.addEventListener("click", function(){
    //         personalInfo.style.display = 'block';
    //         signhup.style.display = 'none';
            
    //     })

    let elPrize= document.getElementById("elPrize");

    let dollar= document.getElementById("dollar");

    let chngBtn= document.getElementById("chngBtn1");

    let valyuta=elPrize.value;

    elPrize.addEventListener("focusout", function(){

         dollar.value=elPrize.value*50;
      
    })
    elPrize.addEventListener("mouseover", function(){

         dollar.value=elPrize.value*50;
      
    })

    chngBtn.addEventListener("mouseover", function(){
         dollar.value=elPrize.value*50;
    })
  






function Videoss() {

    let has_price=videosa;
    if (has_price == 'true') {
        swal({
           title: "Təbriklər",
           text: "Siz qazandınız!",
           icon: "success",
           button: "Ok",
      });
    }else {
        reklamSection.style.height = '300px'; 
        btn3.style.display = 'block' ;
        mp.style.display = 'none';
         $('#button-3').addClass('shrinkreverse');
         $('#button-3').removeClass('shrink-button')
    }
}
let per=document.querySelector(".per");

let acc= document.querySelector(".acc");

let personalInfo= document.getElementById("personalInfo1");

let account= document.getElementById("account");

per.addEventListener("click", function(){
    personalInfo.style.display = 'block';
    account.style.display = 'none';
})

acc.addEventListener("click", function(){
    account.style.display = 'block';
    personalInfo.style.display = 'none';
})

let directRegs= document.getElementById("directRegs");

let signin= document.getElementById("signin");

let login= document.getElementById("login");



 directRegs.addEventListener("click", function(e){
         login.style.display = 'none';
         signin.style.display = 'block';
        this.classList.remove("modal-backdrop") ;

 })


    $(document).ready(function(){
    $('#action_menu_btn').click(function(){
    $('.action_menu').toggle();
});
    });

