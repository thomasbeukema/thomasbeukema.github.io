(function () {
  var nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  function reveal(el) {
    el.classList.add("is-in");
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach(reveal);
    return;
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(reveal);
    return;
  }

  var vh = window.innerHeight || document.documentElement.clientHeight;

  function alreadyVisible(el) {
    var r = el.getBoundingClientRect();
    return r.top < vh * 0.95 && r.bottom > 0;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0, rootMargin: "0px 0px -4% 0px" }
  );

  nodes.forEach(function (el) {
    if (alreadyVisible(el)) {
      reveal(el);
    } else {
      observer.observe(el);
    }
  });
})();
