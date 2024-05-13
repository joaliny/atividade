/* <script>
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
</script> */



//  var swiper = new Swiper(".mySwiper", {
//    slidesPerView: 1,
//     spaceBetween: 30,
//     centeredSlides: true,
//      pagination: {
//         el: ".swiper-pagination",
//          clickable: true,
//      },
//      navigation: {
//        nextEl: ".swiper-button-next",
//          prevEl: ".swiper-button-prev",
//     }
//  });


//  const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })

var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true

setInterval(() => {
  proximaImg()
}, 5000)

function proximaImg(){
  cont++

  if(cont>3){
    cont = 1
  }

  document.getElementById('radio'+ ).checked = true
}