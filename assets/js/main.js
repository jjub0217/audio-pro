

window.dispatchEvent(new Event("scroll"));

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf);


const textTl = gsap.timeline({
  onComplete: function(){
    document.body.classList.remove("hidden");
  }
})

textTl
  .from(".loading_page .count", {
    textContent: 76,
    duration: 2.5,
    ease: "slow(0.9, 0.1, true)",
    snap: { textContent: 1 },
  })
  .addLabel("a")
  .to(".loading_page .loading_page_header", { yPercent: -150 }, "a")
  .to(".loading_page .count", { yPercent: 150 }, "a")
  .to(".loading_page", { display: "none" }, "a")


const canvas1 = document.querySelector("#canvas1");

canvas1.width =  window.innerWidth > 990 ? 2880 : 1080;
canvas1.height = window.innerWidth > 990 ? 1600 : 1920;
const ctx1 = canvas1.getContext('2d');
const frameCount1 = window.innerWidth > 990 ? 90 : 41;
const images1 = [];
const card1 = {
  frame: 0,
};

const currentFrame1 = (idx) => {
  return window.innerWidth > 990
  ? `./assets/images/img_desktop_speaker${idx
      .toString()
      .padStart(3, "0")}.png`
  : `./assets/images/img_mobile_speaker${idx
      .toString()
      .padStart(3, "0")}.png`;
}


for (let i = 0; i < frameCount1; i++) {
  const img = new Image();
  img.src = currentFrame1(i + 1);
  images1.push(img);
}

const render1 = () => {
  ctx1.clearRect(0, 0, canvas1.width , canvas1.height);
  ctx1.drawImage(images1[card1.frame], 0, 0);
}

images1[0].onload = render1;

const canvas2 = document.querySelector("#canvas2");
canvas2.width = window.innerWidth > 990 ? 2880 : 1080;
canvas2.height = window.innerWidth > 990 ? 1600 : 1080;
const ctx2 = canvas2.getContext("2d");
const frameCount2 = window.innerWidth > 990 ? 90 : 55;
const images2 = [];
const card2 = {
  frame: 0,
};

const currentFrame2 = (idx) => {
  return window.innerWidth > 990
    ? `./assets/images/img_desktop_engineered${idx
        .toString()
        .padStart(3, "0")}.png`
    : `./assets/images/img_mobile_engineered${idx
        .toString()
        .padStart(3, "0")}.png`;
};

for (let i = 0; i < frameCount2; i++) {
  const img = new Image();
  img.src = currentFrame2(i + 1);
  images2.push(img);
}

const render2 = () => {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.drawImage(images2[card2.frame], 0, 0);
};

images2[0].onload = render2;


gsap
  .timeline({
    scrollTrigger: {
      trigger: document.querySelector(".section_speaker"),
      start: "0% 0%",
      end: "100% 50%",
      markers: false,
      scrub: 1,
    },
    onUpdate: render1,
  })
  .addLabel("a")
  .to(
    card1,
    {
      duration: 1,
      frame: frameCount1 - 1,
      snap: "frame",
      ease: "none",
    },
    "a"
  )
  .to(
    document.querySelector("#canvas1"),
    {
      yPercent: window.innerWidth > 990 ? 0 : -25,
      duration: 1,
    },
    "a"
  )
  .to(
    document.querySelector(".header"),
    {
      height: 80,
      borderBottomWidth: 0,
    },
    "a"
  )
  .to(
    document.querySelector(".header .inner"),
    {
      borderBottomWidth: 0,
    },
    "a"
  )
  .to(
    document.querySelector(".header .logo"),
    {
      scale: 0.78,
    },
    "a"
  )
  .to(
    document.querySelector(
      ".section_speaker .text_box:first-child .description"
    ),
    {
      opacity: 0,
    },
    "a"
  )
  .to(
    document.querySelector(".section_speaker .headline"),
    {
      opacity: 0,
    },
    "a"
  )
  .to(document.querySelector(".section_speaker .title"), {
    opacity: 1,
  })
  .to(document.querySelector(".section_speaker .description_box"), {
    opacity: 1,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: document.querySelector(".section_wireless"),
      start: "0% 100%",
      end: "100% 0%",
      markers: false,
      scrub: 1,
      duration: 5,
    },
  })
  .to(document.querySelector(".section_wireless .text_wrap"), {
    y: -140,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: document.querySelector(".section_old_school"),
      start: "0% 0%",
      end: "100% 0%",
      markers: false,
      scrub: 1,
      duration: 5,
    },
  })
  .to(document.querySelector(".section_old_school .text_wrap"), {
    y: -100,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: document.querySelector(".section_engineered"),
      start: "0% 0%",
      end: "100% 0%",
      markers: false,
      scrub: 1,
    },
    onUpdate: render2,
  })
  .addLabel("a")
  .to(
    card2,
    {
      duration: 1,
      frame: frameCount2 - 1,
      snap: "frame",
      ease: "none",
    },
    "a"
  )
  .to(
    document.querySelector("#canvas2"),
    {
      delay: 10,
      yPercent: window.innerWidth > 990 ? 0 : -80,
      duration: 1,
      ease: "power2.out",
    },
    "a"
  )
  .to(
    document.querySelector(
      ".section_engineered .engineering_promotion .description_box"
    ),
    {
      opacity: 0,
    },
    "a"
  )
  .to(
    document.querySelector(
      ".section_engineered .engineering_promotion .headline"
    ),
    {
      duration: 1,
      opacity: 0,
    },
    "a"
  )
  .to(
    document.querySelector(".background_overlay"),
    {
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    },
    "a+=0.3"
  )
  .to(
    document.querySelector(
      ".section_engineered .engineering_description .headline"
    ),
    {
      duration: 1,
      opacity: 1, 
      ease: "power2.out",
      color: "#fff",
    },
    "a+=0.5"
  )
  .to(
    document.querySelector(
      ".section_engineered .engineering_description .description_box"
    ),
    {
      duration: 1,
      opacity: 1,
    },
    "a+=2"
  );


gsap
  .timeline({
    scrollTrigger: {
      trigger: document.querySelector(".section_features .features_area"),
      start: "0% 100%",
      end: "100% 100%",
      markers: false,
    },
  })
  .addLabel("a")
  .to(document.querySelector(".section_features .feature_area .design"), {
    y: 0,
    opacity: 1,
  })
  .to(
    document.querySelector(
      ".section_features .feature_area .design_description"
    ),
    {
      y: 0,
      opacity: 1,
    }
  )
  .to(
    document.querySelector(".section_features .feature_area .design_detail"),
    {
      y: 0,
      opacity: 1,
    }
  )
  .to(document.querySelector(".section_features .feature_area .application"), {
    y: 0,
    opacity: 1,
  })
  .to(
    document.querySelector(
      ".section_features .feature_area .application_description"
    ),
    {
      y: 0,
      opacity: 1,
    }
  )
  .to(document.querySelector(".section_features .feature_area .easy_mount"), {
    y: 0,
    opacity: 1,
  })
  .to(document.querySelector(".section_features .feature_area .white_layout"), {
    y: 0,
    opacity: 1,
  });


const menuButton = document.querySelector(".menu_button");
const gnbMobile = document.querySelector(".gnb_mobile");
const faqItem = document.querySelectorAll(".section_faq .faq_item");
const cursorEffect = document.querySelectorAll(".cursor_effect");
const toEnglish = document.querySelector(".to_eng");

menuButton.addEventListener("click", function (e) {
  gnbMobile.classList.toggle("is_show");
  if (e.currentTarget.ariaExpanded === "false") {
    e.currentTarget.setAttribute("aria-expanded", "true");
    e.currentTarget.setAttribute("aria-label", "메뉴닫기");
  } else {
    e.currentTarget.setAttribute("aria-expanded", "false");
    e.currentTarget.setAttribute("aria-label", "메뉴열기");
  }
});


faqItem.forEach(item => {
  item.addEventListener("click", function (e) {
    if (item.contains(e.target)) {
      const faqItemTitle = item.querySelector(".faq_item_title");
      const subList = faqItemTitle.nextElementSibling;
      let subListId = subList.getAttribute("id");
      if (!subListId) {
        subListId = `sub_list_${Math.random().toString(36).substring(2, 9)}`;
        subList.setAttribute("id", subListId);
      }

      faqItemTitle.setAttribute("aria-controls", subListId);

      if (faqItemTitle.ariaExpanded === "false") {
        faqItemTitle.setAttribute("aria-expanded", "true");
        faqItemTitle.classList.add("is_active");
        subList.classList.add("is_show");
      } else {
        faqItemTitle.setAttribute("aria-expanded", "false");
        faqItemTitle.classList.remove("is_active");
        subList.classList.remove("is_show");
      }
    }
  })
});


document.body.addEventListener("mousemove", function(e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  gsap.to(".cursor", 0, { x: mouseX, y: mouseY });
});


cursorEffect.forEach(element => {
  element.addEventListener("mouseover", function(e){
    gsap.to(".cursor", {
      scale: 1.5,
    });
  });

  element.addEventListener("mouseout", function (e) {
    gsap.to(".cursor", { scale: 1 });
  });

})
