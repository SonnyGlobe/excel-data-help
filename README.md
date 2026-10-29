# Sonny Ortiz — Excel & Data Services landing page

A single-page freelance site you can publish free on **GitHub Pages**. No framework, no build step,
no npm install. Files: `index.html`, `styles.css`, `script.js`, `listing-copy.md`.

---

## 1. Make it yours (10 minutes)

The page is already written for **Excel automation / data cleanup / database help**. Change only
what isn't true for you:

| Where | Change it to |
|---|---|
| `<title>` and `<meta name="description">` | Keep if the services match; adjust if you drop one |
| Hero `<h1>` and `.lede` | Keep — it already says "database manager by day, evenings and weekends" |
| Hero card ($35 Cleanup Sprint) | Your real headline offer and real price |
| The four `.card` articles | Delete any service you can't confidently deliver |
| `#rates` table rows | Your real prices and real turnaround times |
| `#skills` grid | Only tools you've actually used at work |
| `#proof` blockquotes | Real buyer feedback only — never invented reviews |
| `action="https://formsubmit.co/sonnyboyortiz@gmail.com"` | Already wired to your inbox — change only if you switch emails |

Then open `styles.css` and change the three brand lines to re-colour the whole page:

```css
--brand: #7c5cff;      /* main accent  */
--brand-dark: #5b3fd6; /* hover accent */
--ink: #12121a;        /* text         */
```

---

## 2. Preview it on your computer

Double-click `index.html`, or right-click it in VS Code and choose **Open with Live Server**
if you have that extension.

### Activate the contact form (do this once)

The form posts to FormSubmit, which forwards enquiries to **sonnyboyortiz@gmail.com**. No account,
no API key, no cost.

1. After the page is live, submit the form yourself once as a test.
2. Gmail will receive an **activation email** from FormSubmit. Open it and click the activation link.
3. Every submission after that lands in your inbox automatically (check Spam once, then mark "not spam").

If you ever change the address, update it in **two** places: the `<form action="...">` in
`index.html` and the `EMAIL` constant in `script.js`, then submit once again to re-activate.

The form also has a hidden `_honey` honeypot field that catches bot spam.

### If the form ever fails

FormSubmit is a free third-party service and it does have outages (it was returning HTTP 521 when
this page was last checked). The page is built so a visitor never gets stuck: if the submission
fails, the message area shows a **pre-filled `mailto:` link** containing everything they typed, plus
your address in plain text. Email is the primary route anyway — the copy puts
`sonnyboyortiz@gmail.com` above the form.

Optional upgrade if you want a more reliable form backend: **Formspree** (free tier, 50 submissions
/month). You sign up, create a form, and replace the `action` with `https://formspree.io/f/XXXXXXX`
and the `/ajax/` prefix in `script.js`. Not required to launch.

---

## 3. Push it to GitHub

Run these in the terminal, from this folder:

```powershell
git init
git add .
git commit -m "Add landing page"
```

Now create the repo on GitHub in the browser:

1. Go to https://github.com/new
2. **Repository name:** `landing-page` (or your own name)
3. Choose **Public**, do **not** tick "add a README" (one already exists), click **Create repository**
4. Copy the two commands GitHub shows you and run them — they look like:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/landing-page.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. If GitHub asks for credentials, use a
**Personal Access Token** (GitHub → Settings → Developer settings → Personal access tokens →
Fine-grained, with **Contents: Read and write** permission) as the password — GitHub no longer
accepts your account password for `git push`.

---

## 4. Turn on GitHub Pages (free hosting)

1. Open your repo on GitHub → **Settings** → **Pages** (left sidebar)
2. **Source:** `Deploy from a branch`
3. **Branch:** `main` / `/ (root)` → **Save**
4. Wait 1–2 minutes, then visit:

```
https://YOUR_USERNAME.github.io/landing-page/
```

That URL is the one you put in your bio, on Gumroad, on Fiverr, in DMs.

---

## 5. What to do after it's live

- Submit the contact form **once after deploying** and click FormSubmit's activation link, or the
  first real client enquiry bounces.
- Publish only when the prices and turnaround times are ones you can actually honour.
- The page is a **hub, not the source of orders**. Your first orders come from Fiverr/Upwork and
  from people you already know — see `listing-copy.md` for paste-ready gig text and the reply
  template that wins jobs.
- Put the live URL in your Fiverr/Upwork profile, email signature, and any FB group replies.
- Optional custom domain (~$10/yr): GitHub Pages → **Custom domain**, then follow GitHub's DNS
  instructions at your registrar.

## Things this page deliberately does *not* claim

No income promises, no fake testimonials, no countdown timers, no "limited spots". Those convert
worse over time and get marketplace accounts flagged. The copy here is honest by design — keep it
that way. The `#proof` quotes are placeholders on purpose: replace them with real buyer messages,
even if you only have two.
