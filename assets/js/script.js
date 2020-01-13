$(document).ready(function(){
    $('body').append('<div class="bg-white"></div>');

    $('.filters .arrow-bot').on('click',function(){
        $('.filters .group-filter .popup-filter').removeClass('active');
        $(this).parent().parent().find('.popup-filter').addClass('active');
        // $('body').append('<div class="manden"></div>')
        $('.bg-white').css({
            "opacity":"0.1",
            "visibility":"visible"
        })
    })

     // Index
     $('.step').on('click',function(){
        $(this).find('.group-content').toggleClass('active');
    })

    $('body .bg-white').on('click', function(){
        $('.filters .group-filter .popup-filter').removeClass('active');
        $(this).css({
            "opacity":"0",
            "visibility":"hidden"
        })
    })

    // Owlcarousel Knowledge Detail
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
       
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3,
                nav:true,
                dots:true,
                margin: 10,
            },
                1024:{
                items:3,
                // dotsEach: 1,
                // center: true,
                nav:true,
                navText: ["<span class='btn-slider-prev'><i class='fa fa-chevron-left' aria-hidden='true'></i></span>","<span class='btn-slider-next'><i class='fa fa-chevron-right' aria-hidden='true'></i></span>"],
                dots:true,
                margin: 10
            }
        }
    });

    $('.accordion').on('click', function(){
        $(this).toggleClass('icon-minus');
    })

    //plugin bootstrap minus and plus
    //http://jsfiddle.net/laelitenetwork/puJ6G/
    $('.btn-number').click(function(e){
        e.preventDefault();
        
        fieldName = $(this).attr('data-field');
        type      = $(this).attr('data-type');
        var input = $("input[name='"+fieldName+"']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if(type == 'minus') {
                
                if(currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                } 
                if(parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if(type == 'plus') {

                if(currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if(parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function(){
    $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {
        
        minValue =  parseInt($(this).attr('min'));
        maxValue =  parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());
        
        name = $(this).attr('name');
        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        
        
    });
    $(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    
    // Carousel Product detail
    $('.responsive').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        prevArrow:"<span class='btn-slider-prev'><i class='fa fa-chevron-up' aria-hidden='true'></i></span>",
        nextArrow:"<span class='btn-slider-next'><i class='fa fa-chevron-down' aria-hidden='true'></i></span>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      });

    $('.image-product img').on('click', function(){
        console.log($(this).attr('src'))
        let attrImg = $(this).attr('src');
        $('body').find('.main-image img').attr('src', attrImg);
    })
    $('.main-image img.main-img').on('click', function(){ 
        let attrImg = $(this).attr('src');
        let imagePopup = $('body').find('.main-image .pop-up-image');
        let bgWhite = $('.bg-white-opacity');
        $('body').find('.main-image .pop-up-image img').attr('src',attrImg);
        console.log(imagePopup)
        imagePopup.css({
            "opacity":"1",
            "visibility":"visible"
        });
        bgWhite.css({
            "opacity":"0.5",
            "visibility":"visible"
        })
    })
    $('.bg-white-opacity').on('click', function(){
        let imagePopup = $('body').find('.main-image .pop-up-image');
        $(this).css({
            "opacity":"0",
            "visibility":"hidden"
        });
        imagePopup.css({
            "opacity":"0",
            "visibility":"hidden"
        });
    })
})
// Knowledge Detail Tab
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}