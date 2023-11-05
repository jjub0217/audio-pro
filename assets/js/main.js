$(window).trigger('scroll')

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const textTl = gsap.timeline()
textTl.from(".loading .bottom .count", {
  textContent: 76,
  duration: 2.5,
  ease:"slow(0.9, 0.1, true)",
  snap: { textContent: 1 },
})
.addLabel('a')
.to('.loading .top',{ yPercent:-150 }, 'a')
.to('.loading .bottom',{ yPercent:150 }, 'a')
.to('.loading',{ display: "none" }, 'a')
.to('.wrapper',{ opacity: 1,display: "block" })

$(".burgerBtn").click(function(){
  $(".mo-gnb").toggleClass("isAct")
  $(this).toggleClass("on");
  if ($(this).attr('aria-expanded') === 'false') {
    $(this).attr('aria-expanded', 'true' )
  } else {
    $(this).attr('aria-expanded', 'false' )
  }
})



const canvas1 = document.querySelector("#canvas1");
const ctx1 = canvas1.getContext('2d');

// canvas.width = 2880;
// canvas1.width = 1124;
canvas1.width = 2880;
// canvas.height = 1720;
canvas1.height = 1600;
const frameCount1 = 90;

const currentFrame1 = (idx) => {
  // console.log(`./assets/images/audio${idx.toString().padStart(3, '0')}.png`);
  return `./assets/images/audio${idx.toString().padStart(3, '0')}.png`;
}
const images1 = [];
const card1 = {
  frame: 0,
};

for (let i = 0; i < frameCount1; i++) {
  const img = new Image();
  img.src = currentFrame1(i + 1);
  images1.push(img);
}

images1[0].onload = render1;

function render1() {
  ctx1.clearRect(0, 0, canvas1.width , canvas1.height);
  ctx1.drawImage(images1[card1.frame], 0, 0);
}
console.log(window.outerWidth);
console.log(window.innerWidth);
// 시작부터 시작?
gsap.timeline({
  scrollTrigger:{
  trigger:$(".section-speaker"), 
  start:"-5% 0%",
  end:"100% 50%",
  markers:true,
  scrub:1,
  },
    onUpdate: render1,
})
.addLabel('a')
.to(card1, {
  duration: 1,
  frame: frameCount1 - 1,
  snap: 'frame',
  ease: 'none',
},'a')
.to($(".header"), {
  height: 80
}, 'a')
.to($(".header .inner1"), {
  borderBottomWidth:0,
}, 'a')
.to($(".header .logo"), {
  scale: 0.78
}, 'a')
.to($(".section-speaker .headline-small"), {
  opacity: 0
}, 'a')
.to($(".section-speaker .headline"), {
  opacity: 0
}, 'a')
.to($(".section-speaker .desc-title"), {
  opacity: 1
})
.to($(".section-speaker .desc"), {
  opacity: 1
})



gsap.timeline({
  scrollTrigger:{
    trigger:$(".section-wireless"), 
    start:"0% 100%",
    end:"100% 0%",
    markers:false,
    scrub:1,
    duration: 5
  },
})
.to($(".section-wireless .text-box"), {
  y: -140
})




gsap.timeline({
  scrollTrigger:{
    trigger:$(".section-oldschool"), 
    start:"0% 100%",
    end:"100% 0%",
    markers:false,
    scrub:1,
    duration: 5
  },
})
.to($(".section-oldschool .text-box"), {
  y: -100
})



// 아... 개짜증나네.... 아 왜 되다 안되다 하는거야...
$(".section-oldschool .point").hover(function(e){
  console.log('호버');
  $(this).find(".text").addClass("hov")
  $(this).find(".center").addClass("hov")
  },function(e){
    console.log('호버제외');
    $(this).find(".text").removeClass("hov")
    $(this).find(".center").removeClass("hov")
  })

gsap.timeline({
  scrollTrigger:{
  trigger:$(".section-cta"), 
  start:"0% 0%",
  end:"100% 50%",
  markers:false,
  scrub:1,
  },
})
.addLabel('a')
.to($(".section-cta .right .desc"), {
  opacity: 0
}, 'a')
.to($(".section-cta .right .headline"), {
  duration: 1,
  opacity: 0
}, 'a')
.addLabel('b')
.to($(".section-cta .cta-wrapper"), {
  background: "transparent"
}, 'b')
.to($(".section-cta .left .headline"), {
  opacity: 1
}, 'b')
.to($(".section-cta .left .desc"), {
  duration: 1,
  opacity: 1
}, 'b')




const canvas2 = document.querySelector("#canvas2");
const ctx2 = canvas2.getContext('2d');
canvas2.width = 700;
canvas2.height = 700;
const frameCount2 = 91;
const currentFrame2 = (idx) => {
  // console.log(`./assets/images/audio${idx.toString().padStart(3, '0')}.png`);
  return `./assets/images/container${idx.toString().padStart(3, '0')}.png`;
}
const images2 = [];
const card2 = {
  frame: 0,
};
for (let i = 0; i < frameCount2; i++) {
  const img = new Image();
  img.src = currentFrame2(i + 1);
  images2.push(img);
}
images2[0].onload = render2;
function render2() {
  ctx2.clearRect(0, 0, canvas2.width , canvas2.height);
  ctx2.drawImage(images2[card2.frame], 0, 0);
}





gsap.timeline({
  scrollTrigger:{ 
    trigger: $(".section-features .grid-area"),  
    start:"0% 100%",
    end:"100% 100%",
    markers:false,
    }
  }
)
.addLabel('a')
.to(card2, {
  duration: 1,
  frame: frameCount2 - 1,
  snap: 'frame',
  ease: 'none',
},'a')
.to(".section-features .grid-area .top",{
  y: 0,     
  opacity: 1,
})
.to(".section-features .grid-area .top-desc", {
  y: 0,
  opacity: 1,
  
})
.to(".section-features .grid-area .top-sub", {
  y: 0,
  opacity: 1,
})
.to(".section-features .grid-area .middle", {
  y: 0,
  opacity: 1,
})
.to(".section-features .grid-area .middle-desc", {
  y: 0,
  opacity: 1,
})
.to(".section-features .grid-area .middle-sub", {
  y: 0,
  opacity: 1,
})
.to(".section-features .grid-area .bottom", {
  y: 0,
  opacity: 1,
})






  $('.section-faq .faq-item').click(function(e){
    e.preventDefault();
    $(this).find('.sub-list').toggleClass('on')
    $(this).find(".title").toggleClass("on")
  })


$("body").mousemove(function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to(".cursor",{
      x: mouseX,
      y: mouseY
  })
})




// 줌이 안되고 있다.
$(".cursorEffect").hover(function(e){
  $(".cursor").addClass("isZoom")
  $(this).addClass("on")
})
.mouseleave(function(){
  $(".cursor").removeClass("isZoom")
    $(this).removeClass("on")
})

  
