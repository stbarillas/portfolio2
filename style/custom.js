
function scrollToHome() {
    var x = document.getElementById("home");
    x.scrollIntoView({behavior: 'smooth'});
    toggleBurger();
}
function scrollToProjects() {
    var x = document.getElementById("projects-section");
    x.scrollIntoView({behavior: 'smooth'});
    toggleBurger();
}
function scrollToAbout() {
    var x = document.getElementById("about");
    x.scrollIntoView({behavior: 'smooth'});
    toggleBurger();
}
function scrollToContact() {
    var x = document.getElementById("contact");
    x.scrollIntoView({behavior: 'smooth'});
    toggleBurger();
}
// Toggles burger menu on and off
function toggleBurger() {
    const burger = document.getElementById('navbar-burger')
    const menu = document.getElementById('navbar-menu')
    if (burger.classList.contains('is-active')){
        burger.classList.remove('is-active')
        menu.classList.remove('is-active')
    }
    else {
        burger.classList.add('is-active')
        menu.classList.add('is-active')
    }
}

// Active scroll navbar activation
const links = document.querySelectorAll('.navbar-item.header');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('is-active'));
  links[index].classList.add('is-active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

// Event listener changes navbar from transparent to opaque when scrolling down
window.addEventListener('scroll', function (e) {
        const nav = document.getElementById('navbar');
        const navitem = document.getElementById('nav-name');
        if (window.scrollY >= window.innerHeight*.85) {
                nav.classList.add('nav-colored');
                nav.classList.remove('nav-transparent');
                navitem.classList.add('is-white')
                navitem.classList.remove('is-gray')
            } else {
                nav.classList.add('nav-transparent');
                nav.classList.remove('nav-colored');
                navitem.classList.add('is-gray')
                navitem.classList.remove('is-white')
            }
    });

// Code for form submission and email using sendgrid
var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Using default service
  var service_id = "sendgrid";
  var template_id = "template_zwK1InUE";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){
    	alert(" Message Sent!");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});

// Toggles modal on and off
function toggleModal() {
    const modal = document.getElementById('projects-modal')
    const html = document.getElementById('html')
    if (modal.classList.contains('is-active')){
        modal.classList.remove('is-active')
        html.classList.remove('is-clipped')
    }
    else {
        modal.classList.add('is-active')
        html.classList.add('is-clipped')
    }
}
