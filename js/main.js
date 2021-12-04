const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;


navBtn.addEventListener('click', function(event){
    event.stopPropagation();
    toggleMobileNav();
})

window.addEventListener('click', function(){
    // console.log('Click on window!!!');

    if(body.classList.contains('no-scroll')){
        toggleMobileNav();
    }
})

mobileNav.addEventListener('click', function(event){
    event.stopPropagation();
})

function toggleMobileNav(){
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
}