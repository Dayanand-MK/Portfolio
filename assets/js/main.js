/**
 * main.js — All portfolio logic & rendering.
 * Reads from DATA (data.js) and renders into index.html.
 */

/* ============================================================
   1. THEME
   ============================================================ */
function initTheme() {
  const stored = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', stored);
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

/* ============================================================
   2. CUSTOM CURSOR
   ============================================================ */
function initCursor() {
  const c = document.getElementById('cursor');
  const f = document.getElementById('cursor-follower');
  document.addEventListener('mousemove', e => {
    c.style.left = e.clientX + 'px';
    c.style.top = e.clientY + 'px';
    f.style.left = e.clientX + 'px';
    f.style.top = e.clientY + 'px';
  });
  const hoverEls = 'a, button, .project-card, .skill-cat, .cert-card, .faq-question';
  document.querySelectorAll(hoverEls).forEach(el => {
    el.addEventListener('mouseenter', () => {
      c.style.transform = 'translate(-50%,-50%) scale(2.5)';
      f.style.opacity = '0.2';
    });
    el.addEventListener('mouseleave', () => {
      c.style.transform = 'translate(-50%,-50%) scale(1)';
      f.style.opacity = '0.5';
    });
  });
}

/* ============================================================
   3. NAVBAR — scroll spy + mobile menu
   ============================================================ */
function initNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a, .mobile-nav a');
  const prog = document.getElementById('scroll-progress');
  const scrollBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;

    // progress bar
    prog.style.width = (scrolled / total * 100) + '%';

    // scroll-to-top visibility
    scrollBtn.classList.toggle('visible', scrolled > 400);

    // active nav link
    let cur = '';
    sections.forEach(s => { if (scrolled >= s.offsetTop - 200) cur = s.id; });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  });

  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Hamburger toggle
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-nav');
  ham.addEventListener('click', () => mob.classList.toggle('open'));
  document.querySelectorAll('.mobile-nav a').forEach(a =>
    a.addEventListener('click', () => mob.classList.remove('open'))
  );
}

/* ============================================================
   4. TYPING ANIMATION
   ============================================================ */
function initTyped() {
  const roles = DATA.roles;
  let ri = 0, ci = 0, deleting = false;
  const el = document.getElementById('typed-text');

  function tick() {
    const cur = roles[ri];
    if (!deleting) {
      el.textContent = cur.slice(0, ++ci);
      if (ci === cur.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = cur.slice(0, --ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 60 : 100);
  }
  tick();
}

/* ============================================================
   5. HERO CANVAS — particle network
   ============================================================ */
function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59,130,246,${p.opacity})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    // connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - d / 120)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================================
   6. SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
}

/* ============================================================
   7. CONTACT FORM VALIDATION
   ============================================================ */
function initForm() {
  const show = (id, visible) => {
    document.getElementById(id).style.display = visible ? 'block' : 'none';
  };

  document.getElementById('contact-submit').addEventListener('click', () => {
    const name = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const subject = document.getElementById('f-subject').value.trim();
    const msg = document.getElementById('f-message').value.trim();
    const emailOk = /\S+@\S+\.\S+/.test(email);

    show('err-name', !name);
    show('err-email', !email || !emailOk);
    show('err-subject', !subject);
    show('err-message', !msg);

    if (!name || !email || !emailOk || !subject || !msg) return;

    const fmsg = document.getElementById('form-msg');
    fmsg.className = 'form-msg success';
    fmsg.style.display = 'block';
    fmsg.textContent = "✅ Message sent! I'll get back to you soon.";
    ['f-name', 'f-email', 'f-subject', 'f-message'].forEach(id => {
      document.getElementById(id).value = '';
    });
    setTimeout(() => fmsg.style.display = 'none', 5000);
  });
}

/* ============================================================
   8. PROJECT MODAL
   ============================================================ */
function openModal(i) {
  const p = DATA.projects[i];
  document.getElementById('modal-content-inner').innerHTML = `
    <div class="modal-img">
      <i class="fa-solid fa-diagram-project"></i>
    </div>
    <div class="modal-content">
      <div class="project-tags" style="margin-bottom:1.2rem">
        ${p.tech.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <h2>${p.name}</h2>
      <p class="section-label" style="margin:.8rem 0">Duration: ${p.duration}</p>
      <div class="modal-section-title">Description</div>
      <p>${p.desc}</p>
      <div class="modal-section-title">Key Features</div>
      <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <div class="modal-section-title">Challenges Solved</div>
      <p>${p.challenges}</p>
      <div class="modal-section-title">Learnings</div>
      <p>${p.learnings}</p>
      <div style="display:flex;gap:1.2rem;margin-top:2.4rem;flex-wrap:wrap">
        <a href="${p.github}" target="_blank" rel="noopener" class="btn-primary">
          <i class="fa-brands fa-github"></i> GitHub
        </a>
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn-outline"><i class="fa fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
      </div>
    </div>`;
  document.getElementById('modal-overlay').classList.add('open');
}

function initModal() {
  document.getElementById('modal-close').addEventListener('click', () =>
    document.getElementById('modal-overlay').classList.remove('open')
  );
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget)
      e.currentTarget.classList.remove('open');
  });
}

/* ============================================================
   9. PROJECT FILTER + SEARCH
   ============================================================ */
function initProjectControls() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProjects();
    });
  });
  document.getElementById('project-search').addEventListener('input', filterProjects);
}

function filterProjects() {
  const filter = document.querySelector('.filter-btn.active').dataset.filter;
  const q = document.getElementById('project-search').value.toLowerCase();
  document.querySelectorAll('.project-card').forEach(card => {
    const tagMatch = filter === 'all' || card.dataset.tags.includes(filter);
    const nameMatch = !q || card.dataset.name.includes(q);
    card.classList.toggle('hidden', !(tagMatch && nameMatch));
  });
}

/* ============================================================
   10. FAQ ACCORDION
   ============================================================ */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ============================================================
   11. EASTER EGG — logo clicks + Konami code
   ============================================================ */
function initEasterEgg() {
  let logoClicks = 0;
  document.getElementById('logo-click').addEventListener('click', () => {
    if (++logoClicks >= 5) {
      logoClicks = 0;
      document.getElementById('easter-egg').classList.add('show');
    }
  });

  const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let ki = 0;
  document.addEventListener('keydown', e => {
    ki = e.keyCode === konami[ki] ? ki + 1 : 0;
    if (ki === konami.length) {
      ki = 0;
      document.getElementById('easter-egg').classList.add('show');
    }
  });

  document.getElementById('egg-close-btn').addEventListener('click', () =>
    document.getElementById('easter-egg').classList.remove('show')
  );
}

/* ============================================================
   12. LOADER
   ============================================================ */
function initLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.4s ease';
      setTimeout(() => loader.style.display = 'none', 400);
    }, 2000);
  });
}

/* ============================================================
   13. RENDERERS — build HTML from DATA
   ============================================================ */

/* Hero */
function renderHero() {
  const p = DATA.personal;
  const initialsEl = document.getElementById('hero-initials');
  if (initialsEl) initialsEl.textContent = p.initials;
  document.getElementById('hero-name-accent').textContent = p.name;
  document.getElementById('hero-bio').textContent = p.bio[0];
  document.querySelector('.nav-resume-btn').href = p.resume;
  document.querySelector('a[download]').href = p.resume;

  // stats
  document.getElementById('hero-stats').innerHTML = p.stats.map(s => `
    <div class="stat-card">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
}

/* About */
function renderAbout() {
  const p = DATA.personal;
  document.getElementById('about-bio').innerHTML = p.bio.map(b => `<p>${b}</p>`).join('');
  document.getElementById('about-focus').textContent = p.currentFocus;
  document.getElementById('about-strengths').innerHTML =
    p.strengths.map(s => `<span class="strength-tag">${s}</span>`).join('');
  document.getElementById('info-location').textContent = p.location;
  document.getElementById('info-email').textContent = p.email;
}

/* Skills */
function renderSkills() {
  document.getElementById('skills-grid').innerHTML = DATA.skills.map(c => `
    <div class="skill-cat reveal">
      <div class="skill-cat-header">
        <div class="skill-cat-icon"><i class="${c.icon}"></i></div>
        <div class="skill-cat-name">${c.cat}</div>
      </div>
      <div class="skill-tags">
        ${c.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    </div>`).join('');
}

/* Tech marquee */
function renderTech() {
  const items = [...DATA.tech, ...DATA.tech]
    .map(t => `<div class="tech-item"><i class="${t.icon}"></i>${t.name}</div>`)
    .join('');
  document.getElementById('tech-track').innerHTML = items;
}

/* Projects */
function renderProjects() {
  document.getElementById('projects-grid').innerHTML = DATA.projects.map((p, i) => {
    const imgHTML = p.thumbnail
      ? `<img src="assets/images/${p.thumbnail}" alt="${p.name}" loading="lazy">`
      : `<div class="project-img-placeholder"><i class="fa-solid fa-diagram-project"></i></div>`;
    const demoBtn = p.demo
      ? `<a href="${p.demo}" class="project-link" target="_blank" rel="noopener"><i class="fa fa-arrow-up-right-from-square"></i> Live Demo</a>`
      : '';
    return `
    <div class="project-card reveal"
         data-tags="${p.tags.join(',')}"
         data-name="${p.name.toLowerCase()} ${p.desc.toLowerCase()}"
         data-index="${i}">
      <div class="project-img">${imgHTML}</div>
      <div class="project-body">
        <div class="project-tags">
          ${p.tech.slice(0, 3).map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-name">${p.name}</div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-links">
          <a href="${p.github}" class="project-link" target="_blank" rel="noopener">
            <i class="fa-brands fa-github"></i> Code
          </a>
          ${demoBtn}
          <button class="project-link" onclick="openModal(${i})">
            <i class="fa fa-expand"></i> Details
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* Internships */
function renderInternships() {
  document.getElementById('timeline').innerHTML = DATA.internships.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <div class="timeline-role">${exp.role}</div>
            <div class="timeline-company">${exp.company}</div>
          </div>
          <div class="timeline-meta">
            <div class="timeline-period"><i class="fa fa-calendar"></i> ${exp.period}</div>
            <div class="timeline-location"><i class="fa fa-location-dot"></i> ${exp.location}</div>
          </div>
        </div>
        <div class="timeline-body">
          <p>${exp.responsibilities}</p>
          <div class="timeline-tech">
            ${exp.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
          </div>
          ${exp.certificate ? `<a href="${exp.certificate}" class="cert-btn" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> View Certificate</a>` : ''}
        </div>
      </div>
    </div>`).join('');
}

/* Education */
function renderEducation() {
  document.getElementById('edu-grid').innerHTML = DATA.education.map(e => `
    <div class="edu-card reveal">
      <div class="edu-icon"><i class="fa fa-graduation-cap"></i></div>
      <div>
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-dept">${e.dept}</div>
        <div class="edu-school">${e.school}</div>
        <div class="edu-meta">
          <span><i class="fa fa-calendar"></i>${e.year}</span>
          <span><i class="fa fa-star"></i>${e.cgpa}</span>
        </div>
        ${e.coursework.length ? `
          <div class="edu-coursework">
            ${e.coursework.map(c => `<span class="skill-tag">${c}</span>`).join('')}
          </div>` : ''}
      </div>
    </div>`).join('');
}

/* Certifications */
function renderCerts() {
  document.getElementById('certs-grid').innerHTML = DATA.certifications.map(c => `
    <div class="cert-card reveal">
      <div class="cert-issuer-logo"><i class="${c.icon}"></i></div>
      <div class="cert-title">${c.title}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-date"><i class="fa fa-calendar"></i> ${c.date}</div>
      <div class="cert-id">ID: ${c.id}</div>
      ${c.link ? `<a href="${c.link}" target="_blank" rel="noopener" class="verify-btn"><i class="fa-brands fa-linkedin"></i> View on LinkedIn</a>` : ''}
    </div>`).join('');
}

/* Achievements */
function renderAchievements() {
  document.getElementById('achievements-grid').innerHTML = DATA.achievements.map(a => `
    <div class="ach-card reveal">
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-type">${a.type}</div>
      <div class="ach-title">${a.title}</div>
      <div class="ach-detail">${a.detail}</div>
    </div>`).join('');
}

/* Coding Profiles */
function renderProfiles() {
  document.getElementById('profiles-grid').innerHTML = DATA.profiles.map(p => `
    <div class="profile-card reveal">
      <div class="profile-icon"><i class="${p.icon}"></i></div>
      <div class="profile-name">${p.name}</div>
      <div class="profile-handle">${p.handle}</div>
      <a href="${p.link}" target="_blank" class="profile-btn">
        <i class="fa fa-arrow-up-right-from-square"></i> Visit Profile
      </a>
    </div>`).join('');
}

/* GitHub */
function renderGithub() {
  const g = DATA.github;
  document.getElementById('github-stats').innerHTML = g.stats.map(s => `
    <div class="gh-stat">
      <div class="gh-stat-num">${s.num}</div>
      <div class="gh-stat-label">${s.label}</div>
    </div>`).join('');
  document.getElementById('github-profile-btn').href = g.profileUrl;
}

/* Currently Learning */
function renderLearning() {
  document.getElementById('learning-grid').innerHTML = DATA.learning.map(l => `
    <div class="learning-card reveal">
      <div class="learning-dot"></div>
      <div>
        <div class="learning-name">${l.name}</div>
        <div class="learning-sub">${l.sub}</div>
      </div>
    </div>`).join('');
}



/* FAQ */
function renderFAQ() {
  document.getElementById('faq-list').innerHTML = DATA.faq.map((f, i) => `
    <div class="faq-item" data-i="${i}">
      <div class="faq-question">
        <span class="faq-q-text">${f.q}</span>
        <i class="fa fa-plus faq-icon"></i>
      </div>
      <div class="faq-answer">${f.a}</div>
    </div>`).join('');
}

/* ============================================================
   14. BOOT — run everything on DOM ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Theme must be first to avoid flash
  initTheme();

  // Render all sections from DATA
  renderHero();
  renderAbout();
  renderSkills();
  renderTech();
  renderProjects();
  renderInternships();
  renderEducation();
  renderCerts();
  renderAchievements();
  renderProfiles();
  renderGithub();
  renderLearning();
  renderFAQ();

  // Init all interactive behaviours
  initCursor();
  initNav();
  initTyped();
  initCanvas();
  initModal();
  initProjectControls();
  initFAQ();
  initForm();
  initEasterEgg();
  initLoader();

  // Reveal animations — slight delay so elements are painted first
  setTimeout(initReveal, 120);
});
