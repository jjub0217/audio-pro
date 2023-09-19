
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

$(".buttonBurger").click(function(){
  $(".mo-gnb").toggleClass("isAct")
  $(this).toggleClass("on")
})

$(".button").mouseenter(function(e){
  $(this).addClass("on")
  // $(".cursor").addClass("isZoom")
})
$(".button").mouseleave(function(){
  $(this).removeClass("on")
  // $(".cursor").removeClass("isZoom")
})


gsap.timeline({
  scrollTrigger:{
  trigger:$(".section-speaker"), 
  start:"0% 0%",
  end:"100% 50%",
  markers:false,
  scrub:1,
  },
})
.addLabel('a')
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
  duration: 2,
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

gsap.timeline({
  scrollTrigger:{ 
    trigger: $(".section-features .grid-area"),
    markers:false,
    }
  }
)
.addLabel('a')
.to(".section-features .grid-area .top",{
  y: 0,     
  opacity: 1,
}, 'a')
.to(".section-features .grid-area .top-desc", {
  y: 0,
  opacity: 1,
  delay: 0.2
}, 'a')
.to(".section-features .grid-area .top-sub", {
  y: 0,
  opacity: 1,
  delay: 0.5
}, 'a')
.to(".section-features .grid-area .middle", {
  y: 0,
  opacity: 1,
  delay: 0.8
}, 'a')
.to(".section-features .grid-area .middle-desc", {
  y: 0,
  opacity: 1,
  delay: 1.1
}, 'a')
.to(".section-features .grid-area .middle-sub", {
  y: 0,
  opacity: 1,
  delay: 1.4
}, 'a')
.to(".section-features .grid-area .bottom", {
  y: 0,
  opacity: 1,
  delay: 1.7
}, 'a')

  $('.section-faq .faq-item').click(function(e){
    e.preventDefault();
    $(this).find('.sub-list').toggleClass('on')
    $(this).find(".title").toggleClass("on")
  })

var posX = 0;
var posY = 0;
var mouseX = 0
var mouseY = 0;


TweenMax.to({}, 0.016, { 
  repeat: -1,
  onRepeat: function() {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      TweenMax.set($(".cursor"), {
        css: {
          left: mouseX,
          top: mouseY,
        }
      });
    }

  });


$("body").mousemove(function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
})


// 너무 깜박이는데..?
$(".cursorEffect").hover(function(e){
  $(".cursor").addClass("isZoom")
})
.mouseleave(function(){
  $(".cursor").removeClass("isZoom")
})
  
