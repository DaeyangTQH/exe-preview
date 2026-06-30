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

  /* QR story media: real controls once video/audio files are inserted */
  var storyVideo = document.querySelector("[data-story-video]");
  if (storyVideo) {
    var storyVideoFrame = storyVideo.closest(".story-video-frame");
    var hasStoryVideo =
      storyVideo.currentSrc ||
      storyVideo.getAttribute("src") ||
      storyVideo.querySelector("source[src]");

    if (storyVideoFrame && hasStoryVideo) {
      storyVideoFrame.classList.add("has-media");
    }
  }

  var storyAudio = document.querySelector("[data-story-audio]");
  var storyAudioToggle = document.querySelector("[data-story-audio-toggle]");
  if (storyAudio && storyAudioToggle) {
    var storyAudioTitle = document.querySelector("[data-story-audio-title]");
    var storyAudioStatus = document.querySelector("[data-story-audio-status]");
    var hasStoryAudio =
      storyAudio.currentSrc ||
      storyAudio.getAttribute("src") ||
      storyAudio.querySelector("source[src]");

    var formatDuration = function (seconds) {
      var total = Math.max(0, Math.round(seconds || 0));
      var minutes = Math.floor(total / 60);
      var rest = total % 60;
      return minutes + ":" + String(rest).padStart(2, "0");
    };

    var syncStoryAudio = function () {
      var playing = !storyAudio.paused && !storyAudio.ended;
      storyAudioToggle.dataset.state = playing ? "playing" : "paused";
      storyAudioToggle.setAttribute("aria-pressed", String(playing));
      if (storyAudioStatus) {
        storyAudioStatus.textContent = playing ? "Đang phát giọng kể Tháp Rùa" : "Kể chuyện Tháp Rùa";
      }
    };

    if (!hasStoryAudio) {
      storyAudioToggle.disabled = true;
      storyAudioToggle.setAttribute("aria-disabled", "true");
    } else {
      if (storyAudioTitle) storyAudioTitle.textContent = "Audio · 1 phút";
      storyAudioToggle.addEventListener("click", function () {
        if (storyAudio.paused || storyAudio.ended) {
          var audioPlay = storyAudio.play();
          if (audioPlay && typeof audioPlay.catch === "function") audioPlay.catch(function () {});
        } else {
          storyAudio.pause();
        }
        syncStoryAudio();
      });
      storyAudio.addEventListener("play", syncStoryAudio);
      storyAudio.addEventListener("pause", syncStoryAudio);
      storyAudio.addEventListener("ended", syncStoryAudio);
      storyAudio.addEventListener("loadedmetadata", function () {
        if (storyAudioTitle && Number.isFinite(storyAudio.duration)) {
          storyAudioTitle.textContent = "Audio · " + formatDuration(storyAudio.duration);
        }
      });
      syncStoryAudio();
    }
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
