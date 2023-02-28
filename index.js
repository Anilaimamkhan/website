let bars = document.querySelector(".header .fa-bars");


let ul = document.querySelector("nav ul");
let times = document.querySelector("ul .fa-times");

bars.onclick = () =>{
bars.classList.toggle("fa-times") ;

   ul.classList.toggle("active");
}
times.onclick = () => {
    ul.classList.remove("active");

}

window.scroll = () => {
  ul.classList.remove("active");
  ul.classList.remove("active");
  bars.classList.remove("fa-times") ;

}

// accordion start



let accordion = document.querySelectorAll(".accordion-2 .accordion");

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(subaccor => {
            subaccor.classList.remove("active");
        });

        acco.classList.add("active")
    }
});
// accordion and


// AOS.init({
//     offset: 300,
//     duration: 1000,
// });



// var swiper = new Swiper(".slider", {
//     spaceBetween: 30,
//     autoplay:true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });


// var swiper = new Swiper(".slider", {
//     spaceBetween: 30,
//     autoplay:true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });



// $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });







