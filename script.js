/* Small, dependency-free page behaviour:
   1) mobile menu  2) scroll reveal  3) footer year  4) friendly form handling */

(function () {
  "use strict";

  /* 1. Mobile menu ------------------------------------------------ */
  var burger = document.getElementById("burger");
  var links = document.getElementById("navlinks");

  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the menu after a link is tapped (mobile).
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* 2. Reveal on scroll ------------------------------------------- */
  var revealables = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* 3. Footer year ------------------------------------------------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* 4. Contact form -------------------------------------------------
     NOTE: the form's action must be your own Formspree endpoint before
     submissions will actually reach you. Until then this shows a notice
     instead of failing silently. */
  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");

  if (form && note) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";

      if (action.indexOf("YOUR_FORM_ID") !== -1) {
        e.preventDefault();
        note.textContent =
          "Not wired up yet: replace YOUR_FORM_ID in index.html with your Formspree ID, then reload.";
        return;
      }

      note.textContent = "Sending…";

      // Progressive enhancement: submit with fetch so we can show a message
      // without navigating away. Formspree still works without this.
      e.preventDefault();
      fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (res) {
          if (res.ok) {
            note.textContent = "Sent. I'll reply by email — check your inbox too.";
            form.reset();
          } else {
            note.textContent = "Something went wrong. Email me directly instead.";
          }
        })
        .catch(function () {
          note.textContent = "Couldn't send right now. Try again or email me directly.";
        });
    });
  }
})();
