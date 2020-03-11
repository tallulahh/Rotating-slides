$(document).ready(function() {
  gsap.fromTo(".heading h1", {
    opacity: 0,
    scale: 0.1
  }, {
    opacity: 1,
    scale: 1,
    duration: 2.7
  });

  var t1 = gsap.timeline({
    paused: true
  })
  .to("#one", {
    x: '100%',
    y: '100%',
    rotation: 360,
    ease: "power2"
  })
  .to("#two", {
    x: '100%',
    y: '100%',
    rotation: 360,
    ease: "power2"
  })
  .to("#three", {
    x: '100%',
    y: '100%',
    rotation: 360,
    ease: "power2"
  })
  .to("#four", {
    x: '100%',
    y: '100%',
    rotation: 360,
    ease: "power2"
  });

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  var winHeight = $(window).height();
  if (scrollTop >= 0) {
    t1.progress(scrollTop / (docHeight - winHeight));
  }
});
  });
