# Landing Page — beginner friendly

A single-page site you can publish free on **GitHub Pages**. No framework, no build step,
no npm install. Three files: `index.html`, `styles.css`, `script.js`.

---

## 1. Make it yours (10 minutes)

Open `index.html` and change these:

| Where | Change it to |
|---|---|
| `<title>` and `<meta name="description">` | Your name + what you actually sell |
| `.brand` text ("Your Name") | Your name or brand, in the header and footer |
| Hero `<h1>` and `.lede` | One clear sentence about the specific thing you sell |
| "The Starter Kit" card | Your real product name and real price |
| The three `.card` articles | Your real offers (delete the ones you don't offer) |
| `#proof` blockquotes | Real buyer feedback only — never invented reviews |
| `action="https://formspree.io/f/YOUR_FORM_ID"` | Your Formspree ID (free signup at formspree.io) |

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

Until you replace `YOUR_FORM_ID`, the contact form shows a notice instead of sending.
That is intentional — it means the page is not silently swallowing your visitors' messages.

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

- **Do not** send traffic to a page with placeholder text. Publish only when the hero,
  the offer, and the price are real.
- One offer, one price, one button beats a page with six vague offers.
- Add a real product first, then come back and update this page.
- Optional custom domain (~$10/yr): GitHub Pages → **Custom domain**, then follow GitHub's
  DNS instructions at your registrar.

## Things this page deliberately does *not* claim

No income promises, no fake testimonials, no countdown timers, no "limited spots". Those
convert worse over time and get pages flagged. The copy here is honest by design — keep it that way.
