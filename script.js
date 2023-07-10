var btn=document.getElementById("icon");
// icon.onclick=function(){
//     document.body.classList.toggle("dark-theme");
// }
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});
























// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};






// scroll section active link

let sections =document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () =>{
    // sections.forEach(sec =>{
    //     let top=window.scrollY;
    //     let offset=sec.offsetTop - 150;
    //     let height= sec.offsetHeight;
    //     let id=sec.getAttribute('id');

    //     if(top >= offset && top < offset + height){
    //         navLinks.forEach(links=>{
    //             links.classList.remove('active');
    //             document.querySelector('header nav a[href*=' + id +']').classList.add('active');
    //         });
    //     };

    // });

// sticky navbar

// let header=document.querySelector('header');
// header.classList.toggle('sticky',window.scrollY > 100);

// // remove toggle icon 
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};



// scroll reveal

ScrollReveal({
    // reset: true,
    distance:'10px',
    duration:2000,
    delay:200
});


ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .education,.skills,.carousel,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});







// typing text

const typed=new Typed('.multiple-text',{
    strings: ['Web-Developer','Programmer','Android-Developer','Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const typed1=new Typed('.multiple-text1',{
    strings: ['Web-Developer','Programmer','Android-Developer','Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});






$(document).ready(function(){
    // $(window).scroll(function(){
    //     if(this.scrollY > 20){
    //         $('.navbar').addClass("sticky");
    //     }
    //     else{
    //         $('.navbar').removeClass("sticky");
    //     }
    //             // scroll-up button show/hide script
    //             if(this.scrollY > 500){
    //                 $('.scroll-up-btn').addClass("show");
    //             }else{
    //                 $('.scroll-up-btn').removeClass("show");
    //             }
    // });
    //     // slide-up script
    //     $('.scroll-up-btn').click(function(){
    //         console.log("hello");
    //         $('html').animate({scrollTop: 0});
    //         // removing smooth scroll on slide-up button click
    //         $('html').css("scrollBehavior", "auto");
    //     });
    //     $('.navbar .menu li a').click(function(){
    //         // applying again smooth scroll on menu items click
    //         $('html').css("scrollBehavior", "smooth");
    //     });



    // // toggle menu navbar script
    // $('.menu-btn').click(function(){
        
    //     $('.navbar .menu').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");

    // });

   
    // // typing text animation script
    // var typed = new Typed(".typing", {
    //     strings: [" Fresher", " Web-Developer",  " Designer", " Programmer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
    // var typed = new Typed(".typing-2", {
    //     strings: ["Fresher", "Web-Developer",  "Designer", "Programmer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });




     // owl carousel script
     $('.carousel').owlCarousel({
        margin: 20,
        loop: true, 
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });





});