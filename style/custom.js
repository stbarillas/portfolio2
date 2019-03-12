
function scrollToHome() {
    var x = document.getElementById("home");
    x.scrollIntoView({behavior: 'smooth'});
}
function scrollToProjects() {
    var x = document.getElementById("projects");
    x.scrollIntoView({behavior: 'smooth'});
}
function scrollToAbout() {
    var x = document.getElementById("abouts");
    x.scrollIntoView({behavior: 'smooth'});
}
function scrollToContact() {
    var x = document.getElementById("contact");
    x.scrollIntoView({behavior: 'smooth'});
}
active navbar selection code

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
console.log(links)

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('is-active'));
  links[index].classList.add('is-active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);