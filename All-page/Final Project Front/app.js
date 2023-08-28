/*let 
    activewidth1 = document.getElementById(`img-width-one`),
    activewidth2 = document.getElementById(`img-width-tow`),
    activewidth3 = document.getElementById(`img-width-three`);
activewidth1.onclick = function(){
activewidth1.classList.toggle("active-small")
}
activewidth2.onclick = function(){
activewidth2.classList.toggle("active-img");
}
activewidth3.onclick = function(){
activewidth3.classList.toggle("active-img");
}
*/

var currentEnlarged = null;

function toggleEnlarge(image) {
  if (currentEnlarged !== image) {
    if (currentEnlarged) {
      currentEnlarged.classList.remove('active-img');
    }
    image.classList.add('active-img');
    currentEnlarged = image;
  } else {
    image.classList.remove('active-img');
    currentEnlarged = null;
  }
}




//*************** start box img next privy **********************
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
  spaceBetween: 0,
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
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    }
});
// *************** end box img next privy **********************




 

// plus & minus
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
 // Login
 const input = document.querySelector("#phone");
 window.intlTelInput(input, {
   initialCountry: "auto",
   geoIpLookup: callback => {
     fetch("https://ipapi.co/json")
       .then(res => res.json())
       .then(data => callback(data.country_code))
       .catch(() => callback("us"));
   },
   utilsScript: "/intl-tel-input/js/utils.js?1690975972744" // just for formatting/placeholders etc
 });