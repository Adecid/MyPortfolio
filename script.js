//********************** sticky script *********************//
const header = document.querySelector("header");

document.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})


//********************** model script *********************//
const modelItem = document.querySelectorAll(".service-modal-container"),
      modelBtn = document.querySelectorAll(".service-click"),
      modelClose = document.querySelectorAll(".service-model-close");

let model = (activeModel) => {
    modelItem[activeModel].classList.add("active-model");
}
modelBtn.forEach((mb, i) => {
    mb.addEventListener("click", () => {
        model(i);
    })
})
modelClose.forEach((mc) => {
    mc.addEventListener("click", () => {
        modelItem.forEach((mi) => {
            mi.classList.remove("active-model");
        })
    })
})

//********************** work, portfolio ************************//
const workList = document.querySelectorAll(".work-list"),
      portfolio = document.querySelectorAll(".portfolio-content");

      workList.forEach(btn => {
        btn.addEventListener("click", () => {
            workList.forEach(btn => {
                btn.classList.remove("active-item");
            })
            btn.classList.add("active-item");

            let value = btn.getAttribute("data-filter");

            portfolio.forEach(element => {
                element.classList.add("hide");
                if(element.getAttribute("data-item") == value || value == "All") {
                    element.classList.remove("hide");
                }
            })
        })
      })

//********************* menu bar *********************//  
 const sectionAll = document.querySelectorAll("section[id]"),
       navLinks = document.querySelectorAll('.navbar li a');

       window.addEventListener("scroll", () => {
        sectionAll.forEach((sectn) => {

          let scrollPos = window.scrollY;
          let secTop = sectn.offsetTop - 100;
          let secHeight = sectn.offsetHeight;
          let secId = sectn.getAttribute('id');
          
          if(scrollPos >= secTop && scrollPos < secTop + secHeight) {
            navLinks.forEach(links => {
              links.classList.remove('highlight');
              document.querySelector(`.navbar li a[href*= ${secId}]`).classList.add('highlight');
            })
          }
        })
       })


//******************** switch mode ************************//
const body = document.querySelector("body"),
switchMode = document.querySelector(".switch-mode");

if(localStorage.getItem("mode") === "white") {
    body.classList.add("switch");

    switchMode.innerHTML = "<i class='bx bxs-sun sun'></i>";
}

      switchMode.addEventListener("click", () => {
        body.classList.toggle("switch");

        const containVal = body.classList.contains("switch");

        localStorage.setItem("mode", containVal ? "white" : "black");
        switchMode.innerHTML = containVal ? "<i class='bx bxs-sun sun'></i>" : "<i class='bx bxs-moon moon'></i>";
      })

      //******************** animation script ************************//  
        TweenMax.from('.navbar', 2, {
            delay: .8,
            opacity: 0,
            ease: Expo.easeInOut
          })
          TweenMax.from('.home-text h1', 2,{ 
            delay: .9,
            x: -1000,
            ease: Circ.bounce
          })
          TweenMax.from('.home-text p', 2, {
            delay: .7,
            x: -1000,
            ease: Circ.easeInOut
          })
          TweenMax.from('.text-circle', 2, {
            delay: .7,
            y: -1000,
            ease: Circ.easeInOut
          })
          TweenMax.from('.home-box', 2, {
            delay: .9,
            x: 1000,
            ease: Circ.easeInOut
          })
          TweenMax.from('.bottom-box, .bottom-text', 2, {
            delay: 1,
            opacity: 0,
            y: 100,
            ease: Circ.easeIn
          });      
   //******************** scroll top script ************************//  
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scroll-up");
    let scrollMove = window.scrollY;

    if(scrollMove >= 1200) {
      scrollUp.classList.add("scroll-active");
    } 
    else {
      scrollUp.classList.remove("scroll-active");
    }
  })

//********************** observer animation *********************//
const translateXlElement = document.querySelectorAll(".translateXl"),
      translateXrElement = document.querySelectorAll(".translateXr"),
      hiddenElement = document.querySelectorAll(".hidden"),
      trasTopElement = document.querySelectorAll(".translateY"),
      fromTopElement = document.querySelectorAll(".fromTop");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      entry.target.classList.toggle("changeDirTo", entry.isIntersecting );
      entry.target.classList.toggle("show", entry.isIntersecting);
      entry.target.classList.toggle("drop", entry.isIntersecting);

      if(entry.isIntersecting) observer.unobserve(entry.target); 
  }) 
}, {
  threshold: 0.6
});

translateXlElement.forEach((trl) => observer.observe(trl));
translateXrElement.forEach((trr) => observer.observe(trr));
hiddenElement.forEach((hl) => observer.observe(hl));
trasTopElement.forEach((trt) => observer.observe(trt));
fromTopElement.forEach((frt) => observer.observe(frt));