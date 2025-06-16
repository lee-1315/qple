let panels = gsap.utils.toArray('.pin');

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: 'top top',
    pin: true,
    scrub: 0.5,
    pinSpacing: false,
  });
});
