//
// let html = document.getElementById('html');
// var myTileMapping = {
//     tile1: 'modal1',
//     close1: 'modal1',
//     tile2: 'modal2',
//     close2: 'modal2',
//     tile3: 'modal3',
//     close3: 'modal3',
//     tile4: 'modal4',
//     close4: 'modal4',
//     tile5: 'modal5',
//     close5: 'modal5',
//     tile6: 'modal6',
//     close6: 'modal6',
//     tile7: 'modal7',
//     close7: 'modal7',
//     tile8: 'modal8',
//     close8: 'modal8',
//     tile9: 'modal9',
//     close9: 'modal9',
//     tile10: 'modal10',
//     close10: 'modal10',
// };
//
// var myModalMapping = {
//     tile1: 'bayStreetSlides',
//     arrow1a: 'bayStreetSlides',
//     arrow1b: 'bayStreetSlides',
//     tile2: 'coleSlides',
//     arrow2a: 'coleSlides',
//     arrow2b: 'coleSlides',
//     tile3: 'doloresSlides',
//     arrow3a: 'doloresSlides',
//     arrow3b: 'doloresSlides',
//     tile4: 'eurekaSlides',
//     arrow4a: 'eurekaSlides',
//     arrow4b: 'eurekaSlides',
//     tile5: 'noeSlides',
//     arrow5a: 'noeSlides',
//     arrow5b: 'noeSlides',
//     tile6: 'texasSlides',
//     arrow6a: 'texasSlides',
//     arrow6b: 'texasSlides',
//     tile7: 'greenwhichSlides',
//     arrow7a: 'greenwhichSlides',
//     arrow7b: 'greenwhichSlides',
//     tile8: 'marketStreetSlides',
//     arrow8a: 'marketStreetSlides',
//     arrow8b: 'marketStreetSlides',
//     tile9: 'willowGlenSlides',
//     arrow9a: 'willowGlenSlides',
//     arrow9b: 'willowGlenSlides',
//     tile10: 'bayStreetSlides',
//     arrow10a: 'bayStreetSlides',
//     arrow10b: 'bayStreetSlides',
// }
//
// var slideIndex = 1;
//
// function tile_click (tileId) {
//     let modal = document.getElementById(myTileMapping[tileId]);
//     modal.classList.add('is-active');
//     html.classList.add('is-clipped')
//     showDivs(slideIndex, tileId)
//
// };
//
// function tile_close(tileId) {
//     let modal = document.getElementById(myTileMapping[tileId]);
//     modal.classList.remove('is-active');
//     html.classList.remove('is-clipped')
// }
//
// // var slideIndex = 1;
// // showDivs(slideIndex);
//
// function plusDivs(n, tileId) {
//   showDivs(slideIndex += n, tileId);
// }
//
// function showDivs(n, tileId) {
//   var i;
//   var x = document.getElementsByClassName(myModalMapping[tileId]);
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }
// function scrollToHome() {
//     var x = document.getElementById("home");
//     x.scrollIntoView({behavior: 'smooth'});
// }
// function scrollToProjects() {
//     var x = document.getElementById("projects");
//     x.scrollIntoView({behavior: 'smooth'});
// }
// function scrollToAbout() {
//     var x = document.getElementById("abouts");
//     x.scrollIntoView({behavior: 'smooth'});
// }
// function scrollToContact() {
//     var x = document.getElementById("contact");
//     x.scrollIntoView({behavior: 'smooth'});
// }
// //active navbar selection code
// //
// // var btns = document.getElementsByClassName("navbar-item header");
// //
// // // Loop through the buttons and add the active class to the current/clicked button
// // for (var i = 0; i < btns.length; i++) {
// //   btns[i].addEventListener("click", function() {
// //     var current = document.getElementsByClassName("is-active");
// //     current[0].classList.remove("is-active");
// //     this.classList.add("is-active");
// //   });
// // }
//
// //Active scroll navbar activation
// const links = document.querySelectorAll('.navbar-item.header');
// const sections = document.querySelectorAll('section');
// console.log(links)
//
// function changeLinkState() {
//   let index = sections.length;
//
//   while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
//
//   links.forEach((link) => link.classList.remove('is-active'));
//   links[index].classList.add('is-active');
// }
//
// changeLinkState();
// window.addEventListener('scroll', changeLinkState);