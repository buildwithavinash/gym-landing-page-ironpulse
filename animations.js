gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from(".hero", {
    scale: 0.1,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease : "power3.out",
})

tl.from(".hero__heading, .hero__subheading", {
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease : "power3.out"
})

tl.from(".section__heading", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out"
});

gsap.from(".feature", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
  ease: "power3.out",
   scrollTrigger:{
        trigger: ".features",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
        markers:true
    }
});

