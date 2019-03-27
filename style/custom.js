
function scrollToHome() {
    var x = document.getElementById("home");
    x.scrollIntoView({behavior: 'smooth'});
}
function scrollToProjects() {
    var x = document.getElementById("projects-section");
    x.scrollIntoView({behavior: 'smooth'});
}
function scrollToAbout() {
    var x = document.getElementById("about");
    x.scrollIntoView({behavior: 'smooth'});
}
function scrollToContact() {
    var x = document.getElementById("contact");
    x.scrollIntoView({behavior: 'smooth'});
}
// active navbar selection code

var btns = document.getElementsByClassName("navbar-item header");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("is-active");
    current[0].classList.remove("is-active");
    this.classList.add("is-active");
  });
}

//Active scroll navbar activation
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

window.addEventListener('scroll', function (e) {
        const nav = document.getElementById('navbar');
        const navitem = document.getElementById('navbar');
        if (window.scrollY >= window.innerHeight*.9) {
                nav.classList.add('nav-colored');
                nav.classList.remove('nav-transparent');
            } else {
                nav.classList.add('nav-transparent');
                nav.classList.remove('nav-colored');
            }
    });

var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "sendgrid";
  var template_id = "template_zwK1InUE";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){
    	alert("Sent!");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});