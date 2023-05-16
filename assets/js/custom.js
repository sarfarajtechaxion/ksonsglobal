 // document.getElementById("send").addEventListener("click", function(event){ 
        //     event.preventDefault();
        //     console.log("Send button clicked."); 

        //     // let contactForm = document.getElementById('contactForm');
        //     let firstname = document.getElementById('firstname');
        //     let lastname = document.getElementById('lastname');
        //     let email = document.getElementById('email');
        //     let phone = document.getElementById('phone');
        //     let message = document.getElementById('message');

        //     if(firstname === "" || firstname === null) {
        //         firstname.classList.add('error');
        //         alert('error added');
        //     }
        //     else {                
        //         alert('All good..!');
        //     }
        // });
        // document.getElementById("send").addEventListener("mouseenter", function(event){             
        //     event.target.style.backgroundColor = "purple";
        //     event.target.style.color = "orange";
        //     event.target.style.border = "0";
        // });
        // document.getElementById("send").addEventListener("mouseleave", function(event){             
        //     event.target.style.backgroundColor = "#18352D";
        //     event.target.style.color = "#FFFFFF";
        // });

$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
    $('header').addClass('fixed');
    } else {
    $('header').removeClass('fixed');
    }
});

function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function(){
    $('.mobile-menu').click(function(){    
        $('.header nav').toggleClass('active');
    });
}) 