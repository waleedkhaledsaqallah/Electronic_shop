
// change-img
let smallimg = document.querySelectorAll(".small-img #tap")
let bigimg = document.querySelector("#big-show")
let color = document.querySelectorAll(".colors #tap")

for (let i = 0; i < smallimg.length; i++) {
smallimg[i].onclick = function (){
  let srcshow = smallimg[i].getAttribute("src")
  bigimg.setAttribute("src" , srcshow);
  clearBorder() 
  smallimg[i].style = "border: 2px solid #000000"
  color[i].style = "border: 5px solid #F00"

}
};

for (let i = 0; i < color.length; i++) {
  color[i].onclick = function (){
    let srcshow = smallimg[i].getAttribute("src")
    bigimg.setAttribute("src" , srcshow);
    clearBorder() 
    color[i].style = "border: 5px solid #F00"
  smallimg[i].style = "border: 2px solid #000000"
  }
  };

function clearBorder() {
  for (let i = 0; i < smallimg.length; i++) {
    smallimg[i].style=""
  }
};

// plus & minus
let
   BTNLEASTE = document.querySelector("#leaste") ,
   BTNNUM = document.querySelector("#number") ,
   BTNMORE = document.querySelector("#more") ;


BTNMORE.onclick = function(){
    let num = +BTNNUM.innerText 
     BTNNUM.innerText = num + 1
};

   BTNLEASTE.onclick = function(){
        let num = +(BTNNUM.innerText)

        if ( num > 0) {
        BTNNUM.innerText = num - 1
        }
    };

    
let 
    min = document.querySelector("#minus") ,
    btnum = document.querySelector("#num") ,
    btmore = document.querySelector("#plus") ;


    btmore.onclick = function(){
    let num = +btnum.innerText 
    btnum.innerText = num + 1
};

min.onclick = function(){
        let num = +(btnum.innerText)

        if ( num > 0) {
          btnum.innerText = num - 1
        }
    };
    


let 
    btnLEASTE = document.querySelector("#btnleaste") ,
    btnNUM = document.querySelector("#btnnumber") ,
    btnMORE = document.querySelector("#btnmore") ;


btnMORE.onclick = function(){
    let num = +btnNUM.innerText 
    btnNUM.innerText = num + 1
};

btnLEASTE.onclick = function(){
        let num = +(btnNUM.innerText)

        if(num > 0 ) {
            btnNUM.innerText = num - 1
        }
    };


// pic-moving
const swiper = new Swiper('.swiper', {
    loop: false,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 25,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // responsive
    breakpoints:{
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });

  // flag Login
  const input = document.querySelector("#phone");
intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("us"));
  },
  utilsScript: "/intl-tel-input/js/utils.js?1690975972744" // just for formatting/placeholders etc
});

// Scroll to Top
let btnup = document.querySelector(".up")

onscroll = function (){
  if (this.scrollY >= 100){
    btnup.classList.add("show")
  } else{
    btnup.classList.remove("show");
  }
}

btnup.onclick = function (){
 scrollTo ({
    top: 0,
    behavior: "smooth",
  });
};