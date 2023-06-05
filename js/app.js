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

//******************************************************* 
//NEW SKILLS SECTION
// *****************************************************
const theLinks = document.querySelectorAll('.skills-nav a')
const skillItems = document.querySelectorAll('.skill-new-item')

theLinks.forEach(link =>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        if(e.target.dataset.category == "all"){
            removeClassHiddenAll();
            return;
        }
        removeClassActive();
        e.target.classList.add("active");
        addHiddenClass();
        removeClassHidden(e);

    })
})
function removeClassHiddenAll(){
    skillItems.forEach( skillitem =>{
            skillitem.classList.remove('skill-item-hidden');
    })
}
function removeClassHidden(e){
    skillItems.forEach( skillitem =>{
        if(skillitem.dataset.category == e.target.dataset.category){
            skillitem.classList.remove('skill-item-hidden');
        }
    })
}

function removeClassActive(){
    theLinks.forEach(thisLink =>{
        thisLink.classList.remove("active");
    })
}

function addHiddenClass(){
    skillItems.forEach(skillItem => {
        skillItem.classList.add("skill-item-hidden");
    })
}
