$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
    $('header').addClass('fixed');
    } else {
    $('header').removeClass('fixed');
    }
});

jQuery(document).ready(function(){
    /**** Our Product ****/
    jQuery('.our-product .product-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1300,
        nextArrow: '<span class="arrow-right"></span>',
        prevArrow: '<span class="arrow-left"></span>',
        responsive: [   
            {
                breakpoint: 1200,
                settings: {
                    arrows:false,                              
                }
            },  
            {
                breakpoint: 1024,
                settings: {
                    arrows:false,  
                    slidesToShow: 4,                          
                }
            },                 
            {
                breakpoint: 768,
                settings: {
                    arrows:false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows:false,
                    slidesToShow: 1
                }
            }
        ]                        
    });
    /**** Blog Post****/
    jQuery('.our-blog-wrapper .blog-list ').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: false,
        responsive: [                    
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]                        
    });

     /**** Testimonial ****/
     jQuery('.testimonial-content').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        responsive: [                    
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]                        
    });

    /**** Humburger Menu****/
    const toggleButton = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");

    toggleButton.addEventListener("click", () => {
        toggleButton.classList.toggle("active");
        navigation.classList.toggle("active");
    });

    navigation.addEventListener("click", () => {
        toggleButton.classList.toggle("active");
        navigation.classList.toggle("active");
    });
    /***** Contact us form validation *****/
    $("#contactForm").validate({
        rules: {
            firstname: { required: true },
            lastname: { required: true },
            message: { required: true },
            phone: { required: true, number: true, minlength: 10, maxlength: 10 },
            email: { required: true, email: true },
        },
        message: {
            firstname: { required: "Enter your firstname" },
            lastname: { required: "Enter your lastname" },
            message: { required: "Enter your message" },
            phone: { required: "Enter your Phone", minlength: "phone number must 10 digit" },
            email: { required: "Enter your Email", email: "Please enter valid email address" },
        }
    });

    var form = $('#contactForm');
    form.addClass('hide');
    var h2 = $('.form h2');
    h2.addClass('show');
    setTimeout(function() {
        form.removeClass('hide');
        h2.addClass('hide');
        h2.removeClass('show');
    }, 5000);
    /**** Humburger Menu****/
    $('a.scroll-nav[href^=#]')
    .bind('click.smoothScroll', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top - 70 }, 1000);
    });
});
