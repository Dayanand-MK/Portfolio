# Dayanand M K — Portfolio

A premium, fully responsive personal portfolio built with pure HTML, CSS, and JavaScript.
No frameworks. No build tools. Just drop it on GitHub Pages or Vercel and it works.

---

## 📁 Project Structure

```
portfolio/
├── index.html                  ← Page structure only (no inline CSS/JS)
├── assets/
│   ├── css/
│   │   └── style.css           ← All styles & theme tokens
│   ├── js/
│   │   ├── data.js             ← ✏️  ALL content lives here — edit this to update portfolio
│   │   └── main.js             ← All logic, renderers, animations
│   └── images/
│       └── profile.jpg         ← Add your photo here
│   Resume.pdf                  ← Add your resume here
└── README.md
```

---

## ✏️ How to Update Content

**Everything is in `assets/js/data.js`.** You never need to touch `index.html` or `main.js` to update content.

| What to update | Where in data.js |
|---|---|
| Name, bio, email, location | `DATA.personal` |
| Typed roles (hero animation) | `DATA.roles` |
| Skills categories | `DATA.skills` |
| Projects | `DATA.projects` |
| Internships | `DATA.internships` |
| Education | `DATA.education` |
| Certifications | `DATA.certifications` |
| Achievements | `DATA.achievements` |
| Coding profiles | `DATA.profiles` |
| GitHub stats | `DATA.github` |
| Currently learning | `DATA.learning` |
| Fun facts | `DATA.funFacts` |
| Testimonials | `DATA.testimonials` |
| FAQ | `DATA.faq` |

---

## 🖼️ Adding Your Photo

1. Add your photo as `assets/images/profile.jpg`
2. In `index.html`, find the two comments that say:
   ```html
   <!-- Replace with: <img src="assets/images/profile.jpg" alt="Dayanand M K"> -->
   ```
3. Replace the `<div class="hero-img-placeholder">` (or `<i>` tag) with:
   ```html
   <img src="assets/images/profile.jpg" alt="Dayanand M K">
   ```

---

## 📄 Adding Your Resume

Drop your resume PDF as `assets/Resume.pdf`. The download links already point there.

---

## 🚀 Deploying to GitHub Pages

```bash
# 1. Create a new repo on GitHub named: yourusername.github.io
# 2. Clone it
git clone https://github.com/yourusername/yourusername.github.io

# 3. Copy all portfolio files into it
cp -r portfolio/* yourusername.github.io/

# 4. Push
cd yourusername.github.io
git add .
git commit -m "Launch portfolio"
git push origin main

# ✅ Live at: https://yourusername.github.io
```

---

## ⚡ Deploying to Vercel (even easier)

1. Push this folder to any GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo → Deploy
4. ✅ Live instantly with a free `.vercel.app` domain

---

## 🎨 Theming

All design tokens are CSS custom properties at the top of `style.css`:

```css
:root {
  --accent: #3B82F6;   /* change this to retheme everything */
  --bg: #0A0A0F;
  --text: #E8EEFF;
  /* ... */
}
```

---

## 🥚 Easter Egg

Click the logo **5 times** or press the **Konami code** (↑↑↓↓←→←→BA) to activate Developer Mode.

---

## ✅ Features

- Dark / Light theme toggle (persists via localStorage)
- Animated particle canvas background
- Typing animation for roles
- Rotating glow ring around profile photo
- Project cards with filter + live search + modal
- Timeline for internships & education
- Scroll progress bar
- Custom cursor (desktop)
- Scroll reveal animations
- Fully accessible (semantic HTML + ARIA labels)
- Responsive: desktop → tablet → mobile
- SEO meta tags + Open Graph
- All content in one JSON-like data file
