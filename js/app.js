$('.my-skills-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

//******************************************************* 
//scrollspy correcting active link
// *****************************************************
let count = document.querySelectorAll(".nav-link").length;

for (let i = 0; i < count; i++) {
    document.querySelectorAll(".nav-link")[i].addEventListener('click',function(e){
        for(let j = 0; j < count; j++){
           document.querySelectorAll(".nav-link")[j].classList.remove("active");
        }
        e.target.classList.add('active')
    })
}


