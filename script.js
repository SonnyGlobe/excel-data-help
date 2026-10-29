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
     Endpoint: https://formsubmit.co/sonnyboyortiz@gmail.com
     FormSubmit forwards every submission to that inbox. The FIRST submission
     triggers an activation email to it — click that link once and later
     messages arrive automatically. The /ajax/ variant returns JSON so the page
     can show a confirmation without navigating away. */
  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");
  var EMAIL = "sonnyboyortiz@gmail.com";

  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Honeypot: a filled _honey means a bot. Pretend to succeed, send nothing.
      var honey = form.elements["_honey"];
      if (honey && honey.value) {
        note.classList.remove("error");
        note.textContent = "Sent. I'll reply by email.";
        form.reset();
        return;
      }

      var action = (form.getAttribute("action") || "").replace(
        /^https:\/\/formsubmit\.co\//,
        "https://formsubmit.co/ajax/"
      );

      note.classList.remove("error");
      note.textContent = "Sending…";

      /* If the form service is down or the inbox is not activated yet, build a
         mailto: link pre-filled with whatever the visitor already typed, so the
         enquiry is never lost. */
      function fail(reason) {
        note.classList.add("error");
        note.textContent = "";
        note.appendChild(document.createTextNode(
          "Couldn't send automatically" + (reason ? " (" + reason + ")" : "") +
          ". Use this direct email link, or write to " + EMAIL + ":"
        ));
        note.appendChild(document.createTextNode(" "));

        var d = new FormData(form);
        var body =
          (d.get("message") || "") +
          "\n\n—\nName: " + (d.get("name") || "") +
          "\nEmail: " + (d.get("email") || "") +
          "\nInterested in: " + (d.get("interest") || "") +
          "\nBudget: " + (d.get("budget") || "");

        var a = document.createElement("a");
        a.href =
          "mailto:" + EMAIL +
          "?subject=" + encodeURIComponent("New project enquiry — " + (d.get("name") || "website form")) +
          "&body=" + encodeURIComponent(body);
        a.textContent = "Open it in your email app instead";
        note.appendChild(a);
      }

      fetch(action, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      })
        .then(function (res) {
          return res.json()
            .catch(function () { return {}; })
            .then(function (data) { return { ok: res.ok, data: data }; });
        })
        .then(function (result) {
          var msg = (result.data && (result.data.message || result.data.error)) || "";

          if (result.ok && result.data && result.data.success) {
            note.textContent = "Sent. I'll reply to your email shortly.";
            form.reset();
            return;
          }

          // FormSubmit returns an error before the inbox is activated.
          fail(msg);
        })
        .catch(function () {
          fail("network");
        });
    });
  }
})();
