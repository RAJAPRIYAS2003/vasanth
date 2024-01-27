/* heder toggle */
let menubtn = document.getElementById('menubtn')

menubtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//typing effect
let typed = new Typed('.auto-input',{
    strings:['AC Mechanic!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true,
})

//Active link state on scrool

//get all links
let navlinks = document.querySelectorAll('nav ul li a')
//get all sections
let sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll', function (){
    const scrollPos = window.scrollY
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }

    });
    
});