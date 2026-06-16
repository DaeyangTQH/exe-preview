(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Hero video: respect reduced-motion, give the user a pause control */
  var heroVideo = document.querySelector("[data-hero-video]");
  var videoToggle = document.querySelector("[data-video-toggle]");
  if (heroVideo && videoToggle) {
    var label = videoToggle.querySelector(".vt-label");
    var syncToggle = function () {
      var paused = heroVideo.paused;
      videoToggle.dataset.state = paused ? "paused" : "playing";
      videoToggle.setAttribute("aria-pressed", String(!paused));
      if (label) label.textContent = paused ? "Phát video" : "Tạm dừng video";
    };
    if (reduceMotion) {
      heroVideo.removeAttribute("autoplay");
      heroVideo.pause();
    }
    videoToggle.addEventListener("click", function () {
      if (heroVideo.paused) {
        var p = heroVideo.play();
        if (p && typeof p.catch === "function") p.catch(function () {});
      } else {
        heroVideo.pause();
      }
      syncToggle();
    });
    heroVideo.addEventListener("play", syncToggle);
    heroVideo.addEventListener("pause", syncToggle);
    syncToggle();
  }

  /* Sticky header border once scrolled past the hero top */
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Scroll reveal — enhances an already-visible default.
     CSS only hides [data-reveal] once .reveal-ready is set here,
     so content stays visible if JS or motion is unavailable. */
  var revealItems = Array.prototype.slice.call(
    document.querySelectorAll("[data-reveal]")
  );

  if (reduceMotion || !("IntersectionObserver" in window) || !revealItems.length) {
    return;
  }

  document.documentElement.classList.add("reveal-ready");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var siblings = Array.prototype.slice.call(
            el.parentElement.querySelectorAll(":scope > [data-reveal]")
          );
          var index = siblings.indexOf(el);
          var delay = index > 0 ? Math.min(index * 80, 320) : 0;
          el.style.transitionDelay = delay + "ms";
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach(function (el) {
    observer.observe(el);
  });
})();
