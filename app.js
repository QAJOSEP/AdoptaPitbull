const menuBtn = document.querySelector(".menu-div");
const exitBtn = document.querySelector(".exit");

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", {
     y: "0%", 
     duration: 1, 
     stagger: 0.25 });

tl.to(".slider", { 
    y: "-100%", 
    duration: 1.5, 
    delay: 0.5 });

tl.to(".intro", { 
    y: "-100%", 
    duration: 1 }, "-=1");

tl.fromTo("nav", {
     opacity: 0 },
      { opacity: 1, duration: 1 });

tl.fromTo(".big-text", {
     opacity: 0 }, 
     { opacity: 1, duration: 1 }, "-=1");

TweenMax.staggerFrom(".media ul li", 2, {
    opacity: 0,
    delay: 3.2,
    y: 40,
    ease: Expo.easeInOut
}, 0.2)



let t1 = gsap.timeline({ paused: true });
t1.to(".menu", { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
t1.to(
    ".nav",
    {
        opacity: 1,
        marginBottom: 0,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: 0.3,
    },
    ">-0.5"
);

menuBtn.addEventListener("click", () => {
    t1.play().timeScale(1);
});

exitBtn.addEventListener("click", () => {
    t1.timeScale(2.5);
    t1.reverse();
});
