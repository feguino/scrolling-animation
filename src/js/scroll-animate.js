const scrollElements = document.querySelectorAll("[data-scroll]");
var throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;
	throttleTimer = true;
	setTimeout(() => {
    callback();
		throttleTimer = false;
	}, time);
}

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
    let scroll_Class = element.getAttribute("data-scroll").split(" ");
    element.classList.add(scroll_Class[0]);
    element.style.animationDuration = scroll_Class[1];
    element.style.animationDelay = scroll_Class[2];
    if (scroll_Class[3]=="hide"){
        console.log(scroll_Class[3]);
        element.parentElement.style.overflow = "hidden";
    }
};

const hideScrollElement = (element) => {
    let scroll_Class = element.getAttribute("data-scroll").split(" ");
    element.classList.remove(scroll_Class[0]);
    element.style.animationDuration = "";
    element.style.animationDelay = "";
    if (scroll_Class[3]=="hide"){
        element.parentElement.style.removeProperty("overflow");
    }
    
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  throttle(() => {
    handleScrollAnimation();
  }, 250);
});

window.addEventListener('load',()=>{
    throttle(() => {
        handleScrollAnimation();
      }, 250);
})