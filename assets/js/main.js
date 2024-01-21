

$(window).trigger('scroll')

/**
 * @스크롤부드럽게해주는lenis라이브러리
 * 
 */
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf);

/**
 * @새로고침시로딩페이지내의텍스트들과영역애니메이션적용한gsap
 * 
 */
const textTl = gsap.timeline({
  onComplete: function(){
    $("body").removeClass("hidden")
  }
})
textTl.from(".loading-page .bottom .count", {
  textContent: 76,
  duration: 2.5,
  ease:"slow(0.9, 0.1, true)",
  snap: { textContent: 1 },
})
.addLabel('a')
.to('.loading-page .top',{ yPercent:-150 }, 'a')
.to('.loading-page .bottom',{ yPercent:150 }, 'a')
.to('.loading-page',{ display: "none" }, 'a')
.to('.wrapper',{ opacity: 1,display: "block" })



/**
 * @모바일버전에만나오는burger버튼클릭했을때모바일gnb나타내는기능
 * 
 */
$(".burgerBtn").click(function(){
  $(".mo-gnb").toggleClass("isAct")
  $(this).toggleClass("on");
  if ($(this).attr('aria-expanded') === 'false') {
    $(this).attr('aria-expanded', 'true' )
    $(this).attr('aria-label', '메뉴닫기' )
    $(this).attr('aria-selected', 'true' )
  } else {
    $(this).attr('aria-expanded', 'false' )
    $(this).attr('aria-label', '메뉴열기' )
    $(this).attr('aria-selected', 'false' )
  }
})



/**
 * @sectionspeaker영역의이미지canvas기능
 * 
 */
const canvas1 = document.querySelector("#canvas1");
canvas1.width =  window.innerWidth > 479 ? 2880 : 1080;
canvas1.height = window.innerWidth > 479 ? 1600 : 1920;
const ctx1 = canvas1.getContext('2d');
const frameCount1 = window.innerWidth > 479 ? 90 : 41;

const images1 = [];
const card1 = {
  frame: 0,
};

const currentFrame1 = (idx) => {
  return window.innerWidth > 479 ?  `./assets/images/audio${idx.toString().padStart(3, '0')}.png` :
  `./assets/images/move1-${idx.toString().padStart(3, '0')}.png` ;
}


for (let i = 0; i < frameCount1; i++) {
  const img = new Image();
  img.src = currentFrame1(i + 1);
  images1.push(img);
}


const render1 = () => {
  console.log('render1 실행');
  ctx1.clearRect(0, 0, canvas1.width , canvas1.height);
  ctx1.drawImage(images1[card1.frame], 0, 0);
}

images1[0].onload = render1;


/**
 * @sectionspeaker영역의canvas내에서이미지움직이는기능및텍스트움직이는기능의gsap
 * 
 */
gsap.timeline({
  scrollTrigger:{
  trigger:$(".section-speaker"), 
  start:"-5% 0%",
  end:"100% 50%",
  markers:false,
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
.to($("#canvas1"),{
  yPercent: window.innerWidth > 479 ? 0 :-20, 
  duration: 1,
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
.to($(".section-speaker .headline1-desc"), {
  opacity: 0
}, 'a')
.to($(".section-speaker .headline1 .headline"), {
  opacity: 0
}, 'a')
.to($(".section-speaker .headline2 .headline"), {
  opacity: 1
})
.to($(".section-speaker .desc"), {
  opacity: 1
})



/**
 * @sectionwireless영역의텍스트움직이는기능의gsap
 * 
 */
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



/**
 * @sectionoldschool영역의텍스트움직이는기능의gsap
 * 
 */
gsap.timeline({
  scrollTrigger:{
    trigger:$(".section-oldschool"), 
    start:"0% 0%",
    end:"100% 0%",
    markers:false,
    scrub:1,
    duration: 5
  },
})
.to($(".section-oldschool .text-box"), {
  y: -100,
})



/**
 * @sectionoldschool영역의이미지안에있는point요소에마우스호버했을때의기능
 * 
 */
$(".section-oldschool .point").hover(function(e){
  console.log('호버');
  $(this).find(".text").addClass("hov")
  $(this).find(".center").addClass("hov")
  },function(e){
    console.log('호버제외');
    $(this).find(".text").removeClass("hov")
    $(this).find(".center").removeClass("hov")
  })



/**
 * @sectioncta영역의이미지canvas기능
 * 
 */

const canvas2 = document.querySelector("#canvas2"); 
canvas2.width = window.innerWidth > 479 ? 2880 : 1080;
canvas2.height = window.innerWidth > 479 ? 1600 : 1080;
const ctx2 = canvas2.getContext('2d');

const frameCount2 = window.innerWidth > 479 ?  91 : 66;

const images2 = [];
const card2 = {
  frame: 0,
};


const currentFrame2 = (idx) => {
  return window.innerWidth > 479 ? `./assets/images/container${idx.toString().padStart(3, '0')}.png` :
  `./assets/images/move2-${idx.toString().padStart(3, '0')}.png` 
}

for (let i = 0; i < frameCount2; i++) {
  const img = new Image();
  img.src = currentFrame2(i + 1);
  images2.push(img);
}



const render2 = ()=> {
  console.log("render2 실행");
  ctx2.clearRect(0, 0, canvas2.width , canvas2.height) 
  ctx2.drawImage(images2[card2.frame], 0, 0);
}

images2[0].onload = render2;

/**
 * @sectioncta영역의canvas내에서이미지움직이는기능및텍스트움직이는기능의gsap
 * 
 */
gsap.timeline({
  scrollTrigger:{
  trigger:$(".section-cta"), 
  start:"0% 0%",
  end:"100% 50%",
  markers:false,
  scrub:1,
  },
  onUpdate: render2,
})
.addLabel('a')
.to(card2, {
  duration: 1,
  frame: frameCount2 - 1,
  snap: 'frame',
  ease: 'none',
},'a')
.to($("#canvas2"),{
  yPercent: window.innerWidth > 479  ? 0 : -80, 
  duration: 1,
},'a')
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



/**
 * @sectionspeaker영역의canvas내에서이미지움직이는기능및텍스트움직이는기능의gsap
 * 
 */
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



/**
 * @sectionfaq영역의서브리스트나타내는기능및화살표회전시키는기능
 * 
 */
  $('.section-faq .faq-item').click(function(e){
    e.preventDefault();
    $(this).find('.sub-list').toggleClass('on')
    $(this).find(".title").toggleClass("on")
  })



/**
 * @마우스커서디자인gsap
 * 
 */
$("body").mousemove(function(e){
  let mouseX = e.clientX;
  let mouseY = e.clientY;
    gsap.to(".cursor",0,{
      x: mouseX,
      y: mouseY
  })
})



/**
 * @마우스커서가cursorEffect와cursorEffectText와faqitem그리고toEng라는classname요소에마우스호버했을때커서가커지는기능및해당요소컬러변경기능
 * 
 */

cursorScale =  gsap.to(".cursor", {
    scale:1.5,
    paused: true
  })


$(".cursorEffect").hover(function(e){
  gsap.to(".cursor", {
    scale:1.5
  })
  $(this).addClass("on")
})
.mouseleave(function(){
    gsap.to(".cursor", {
    scale:1
  })
    $(this).removeClass("on")
})

$(".cursorEffectText").hover(function(e){
  gsap.to(".cursor", {
    scale:1.5
  })
})
.mouseleave(function(){
    gsap.to(".cursor", {
    scale:1
  })
})

$(".faq-item").hover(function(e){
  gsap.to(".cursor", {
    scale:1.5
  })
})
.mouseleave(function(){
    gsap.to(".cursor", {
    scale:1
  })
})
$(".toEng").hover(function(e){
  gsap.to(".cursor", {
    scale:1.5
  })
})
.mouseleave(function(){
    gsap.to(".cursor", {
    scale:1
  })
})

  
