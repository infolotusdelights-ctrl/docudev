document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks! DocuDev will contact you soon 🚀");
    this.reset();
});
gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero h1", {
  opacity: 0,
  y: 60,
  duration: 1,
  delay: 0.3
});

gsap.from(".hero p", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.6
});

// SERVICES CARDS
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%"
  },
  opacity: 0,
  y: 50,
  stagger: 0.15,
  duration: 0.8
});

// PLANS
gsap.from(".plan-card", {
  scrollTrigger: {
    trigger: ".plans",
    start: "top 80%"
  },
  scale: 0.9,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8
});

// PROJECTS
gsap.from(".proj", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 85%"
  },
  opacity: 0,
  x: -40,
  stagger: 0.15
});
