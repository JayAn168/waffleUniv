window.onscroll = function () {
  if (
    document.body.scrollTop > 48 ||
    document.documentElement.scrollTop > 956
  ) {
    document.getElementById("blurheader").style.display = "block";
  } else {
    document.getElementById("blurheader").style.display = "none";
  }
};

new Swiper(".opencampus .swiper-container", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

function randombg() {
  let random = Math.floor(Math.random() * 3);
  let bigSize = [
    "url('./images/bg1.png')",
    "url('./images/bg2.png')",
    "url('./images/bg3.jpg')",
  ];
  document.getElementById("wrap").style.backgroundImage = bigSize[random];
  document.getElementById("wrap").style.transition = "all 1.5s";
}

setInterval(() => {
  randombg();
}, 3000);
