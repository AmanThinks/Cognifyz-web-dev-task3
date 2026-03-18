document.addEventListener("DOMContentLoaded", () => {

  // POPUP
  const images = document.querySelectorAll(".gallery-grid img");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const close = document.getElementById("close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImg.src = img.src;
    });
  });

  close.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.addEventListener("click", (e) => {
    if(e.target !== popupImg){
      popup.style.display = "none";
    }
  });

  // SLIDESHOW
  const slide = document.getElementById("slide");

  const slides = [
    "images/img.1.jpg",
    "images/img.2.jpg",
    "images/img.3.jpg",
    "images/img.4.jpg",
    "images/img.5.jpg",
    "images/img.6.jpg",
    "images/img.7.jpg",
    "images/img.8.jpg"
  ];

  let index = 0;

  setInterval(() => {
    slide.style.opacity = "0";

    setTimeout(() => {
      index = (index + 1) % slides.length;
      slide.src = slides[index];
      slide.style.opacity = "1";
    }, 400);

  }, 3000);

  // DARK MODE
  const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
      toggleBtn.innerText = "🌞";
    } else {
      toggleBtn.innerText = "🌙";
    }
  });

});