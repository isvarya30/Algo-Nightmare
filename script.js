window.onload = () => {
  const music = document.getElementById('bgMusic');
  music.volume = 0.6;

  gsap.to(".title", {
    delay: 1,
    duration: 2,
    opacity: 1,
    ease: "power2.inOut"
  });

  gsap.to(".gate.left", {
    delay: 2,
    duration: 3,
    x: "-100%",
    ease: "power4.inOut"
  });

  gsap.to(".gate.right", {
    delay: 2,
    duration: 3,
    x: "100%",
    ease: "power4.inOut"
  });
};
