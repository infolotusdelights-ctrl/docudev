gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero h1", {
    opacity: 0,
    y: 60,
    duration: 1
});

gsap.from(".hero p", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.3
});

gsap.from(".hero-btns a", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    delay: 0.6
});

// SERVICES
gsap.from(".services .card", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%"
    },
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 0.8
});

// PLANS
gsap.from(".plan-card", {
    scrollTrigger: {
        trigger: ".plans",
        start: "top 80%"
    },
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 0.8
});

// PROJECTS
gsap.from(".project", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 85%"
    },
    opacity: 0,
    x: -40,
    stagger: 0.15
});

// CONTACT
gsap.from("#contact form", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 85%"
    },
    opacity: 0,
    y: 40,
    duration: 0.8
});

// FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks! DocuDev will contact you soon 🚀");
    this.reset();
});
