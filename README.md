<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ian Rey Duenas</title>

<!-- ============================================================
     GOOGLE FONTS
     ============================================================ -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<style>
/* ============================================================
   CSS - RESET & BASE
   ============================================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'DM Sans', sans-serif;
  background: #0a0f1e;
  color: #e8eaf0;
  min-height: 100vh;
  overflow-x: hidden;
}

/* ============================================================
   CSS - HERO SECTION
   ============================================================ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99,179,237,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99,179,237,0.07) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
}

.bg-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(66,153,225,0.15) 0%, transparent 70%);
  top: -100px;
  left: -100px;
  z-index: 0;
  pointer-events: none;
}

.bg-glow2 {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(159,122,234,0.12) 0%, transparent 70%);
  bottom: 0;
  right: 0;
  z-index: 0;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  width: 100%;
  align-items: center;
}

/* ============================================================
   CSS - TAG / BADGE
   ============================================================ */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(66,153,225,0.12);
  border: 1px solid rgba(66,153,225,0.3);
  color: #63b3ed;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 1.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #63b3ed;
  animation: pulse 2s infinite;
}

/* ============================================================
   CSS - ANIMATIONS
   ============================================================ */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.animate-up {
  opacity: 0;
  animation: fadeInUp 0.7s ease forwards;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.25s; }
.delay-3 { animation-delay: 0.4s; }
.delay-4 { animation-delay: 0.55s; }
.delay-5 { animation-delay: 0.7s; }

/* ============================================================
   CSS - TYPOGRAPHY
   ============================================================ */
h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 0.5rem;
}

h1 span { color: #63b3ed; }

.subtitle {
  font-size: 1rem;
  color: #718096;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.subtitle strong {
  color: #a0aec0;
  font-weight: 500;
}

/* ============================================================
   CSS - GOAL CARD
   ============================================================ */
.goal-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-left: 3px solid #63b3ed;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin-bottom: 2rem;
}

.goal-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #63b3ed;
  font-weight: 500;
  margin-bottom: 4px;
}

.goal-text {
  font-size: 0.95rem;
  color: #e2e8f0;
  font-weight: 400;
}

/* ============================================================
   CSS - CHIPS
   ============================================================ */
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #a0aec0;
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 100px;
  font-weight: 400;
  cursor: default;
  transition: background 0.2s, border-color 0.2s;
}

.chip:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.2);
}

.chip.accent {
  background: rgba(159,122,234,0.12);
  border-color: rgba(159,122,234,0.3);
  color: #b794f4;
}

/* ============================================================
   CSS - PROFILE CARD
   ============================================================ */
.hero-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.profile-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s;
}

.profile-card:hover {
  border-color: rgba(99,179,237,0.3);
}

.profile-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #63b3ed, #b794f4);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2b6cb0, #553c9a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin: 0 auto 1rem;
  border: 2px solid rgba(99,179,237,0.4);
}

.profile-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}

.profile-course {
  font-size: 0.8rem;
  color: #63b3ed;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2px;
}

.profile-school {
  font-size: 0.8rem;
  color: #718096;
}

/* ============================================================
   CSS - STATS ROW
   ============================================================ */
.stats-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-box {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: border-color 0.2s, background 0.2s;
  cursor: default;
}

.stat-box:hover {
  background: rgba(255,255,255,0.06);
  border-color: rgba(99,179,237,0.3);
}

.stat-icon { font-size: 1.4rem; margin-bottom: 6px; }
.stat-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #718096; margin-bottom: 2px; }
.stat-value { font-size: 0.85rem; font-weight: 500; color: #e2e8f0; }

/* ============================================================
   CSS - SECTIONS
   ============================================================ */
.section {
  padding: 5rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.section-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #63b3ed;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2.5rem;
}

/* ============================================================
   CSS - SKILLS GRID
   ============================================================ */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.skill-item {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1.25rem;
  transition: border-color 0.2s, transform 0.2s;
  cursor: default;
}

.skill-item:hover {
  border-color: rgba(99,179,237,0.4);
  transform: translateY(-3px);
}

.skill-icon  { font-size: 1.5rem; margin-bottom: 8px; }
.skill-name  { font-size: 0.9rem; font-weight: 500; color: #e2e8f0; margin-bottom: 4px; }
.skill-desc  { font-size: 0.75rem; color: #718096; }

.bar-track {
  background: rgba(255,255,255,0.06);
  border-radius: 100px;
  height: 4px;
  margin-top: 10px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 100px;
  background: linear-gradient(90deg, #63b3ed, #b794f4);
  width: 0%;
  transition: width 1.2s ease;
}

/* ============================================================
   CSS - FOOTER
   ============================================================ */
footer {
  text-align: center;
  padding: 2rem;
  border-top: 1px solid rgba(255,255,255,0.06);
  color: #4a5568;
  font-size: 0.8rem;
}

/* ============================================================
   CSS - RESPONSIVE
   ============================================================ */
@media (max-width: 700px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .hero-right { order: -1; }
  .stats-row  { grid-template-columns: 1fr 1fr; }
}
</style>
</head>
<body>

<!-- ============================================================
     HTML - HERO SECTION
     ============================================================ -->
<section class="hero">
  <div class="bg-grid"></div>
  <div class="bg-glow"></div>
  <div class="bg-glow2"></div>

  <div class="hero-content">

    <!-- LEFT SIDE -->
    <div class="hero-left">
      <div class="tag animate-up delay-1"><span class="dot"></span> Student Profile</div>
      <h1 class="animate-up delay-2">Ian Rey <span>Duenas</span></h1>
      <p class="subtitle animate-up delay-3">
        <strong>BS Computer Engineering</strong> &nbsp;·&nbsp; University of San Agustin
      </p>

      <div class="goal-card animate-up delay-4">
        <div class="goal-label">Career Goal</div>
        <div class="goal-text">Research Lead of Company Projects</div>
      </div>

      <div class="chips animate-up delay-5">
        <span class="chip">Computer Engineering</span>
        <span class="chip accent">Research Lead</span>
        <span class="chip">Football</span>
        <span class="chip">University of San Agustin</span>
      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="hero-right animate-up delay-2">
      <div class="profile-card">
        <div class="avatar">ID</div>
        <div class="profile-name">Ian Rey Duenas</div>
        <div class="profile-course">BSCPE</div>
        <div class="profile-school">University of San Agustin</div>
      </div>

      <div class="stats-row">
        <div class="stat-box">
          <div class="stat-icon">🎓</div>
          <div class="stat-label">Program</div>
          <div class="stat-value">BSCPE</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">⚽</div>
          <div class="stat-label">Hobby</div>
          <div class="stat-value">Football</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">🏫</div>
          <div class="stat-label">University</div>
          <div class="stat-value">San Agustin</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">🔬</div>
          <div class="stat-label">Goal</div>
          <div class="stat-value">Research Lead</div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ============================================================
     HTML - ABOUT ME SECTION
     ============================================================ -->
<div style="background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);">
  <div class="section" style="padding: 3rem 2rem;">
    <div class="section-label">About Me</div>
    <div class="section-title">Hello, I'm Ian 👋</div>
    <p id="about-text" style="color: #a0aec0; font-size: 1rem; line-height: 1.9; max-width: 680px;">
      I'm a Computer Engineering student at the
      <strong style="color:#e2e8f0;">University of San Agustin</strong>,
      driven by a passion for technology, innovation, and research. My goal is to become a
      <strong style="color:#63b3ed;">Research Lead</strong>
      where I can spearhead meaningful company projects that push the boundaries of engineering.
      Outside the lab, you'll find me on the football field — where teamwork and strategy
      are just as important as they are in tech.
    </p>
  </div>
</div>

<!-- ============================================================
     HTML - SKILLS SECTION
     ============================================================ -->
<div class="section">
  <div class="section-label">Core Skills</div>
  <div class="section-title">What I Bring</div>
  <div class="skills-grid">

    <div class="skill-item">
      <div class="skill-icon">💻</div>
      <div class="skill-name">Computer Engineering</div>
      <div class="skill-desc">Hardware & software integration, embedded systems</div>
      <div class="bar-track"><div class="bar-fill" data-width="85%"></div></div>
    </div>

    <div class="skill-item">
      <div class="skill-icon">🔬</div>
      <div class="skill-name">Research & Analysis</div>
      <div class="skill-desc">Technical research, data gathering & reporting</div>
      <div class="bar-track"><div class="bar-fill" data-width="80%"></div></div>
    </div>

    <div class="skill-item">
      <div class="skill-icon">🧩</div>
      <div class="skill-name">Problem Solving</div>
      <div class="skill-desc">Logical thinking, debugging, system design</div>
      <div class="bar-track"><div class="bar-fill" data-width="88%"></div></div>
    </div>

    <div class="skill-item">
      <div class="skill-icon">🤝</div>
      <div class="skill-name">Team Leadership</div>
      <div class="skill-desc">Coordination, communication, project management</div>
      <div class="bar-track"><div class="bar-fill" data-width="75%"></div></div>
    </div>

  </div>
</div>

<!-- ============================================================
     HTML - FOOTER
     ============================================================ -->
<footer>
  © 2026 Ian Rey Duenas &nbsp;·&nbsp; BSCPE &nbsp;·&nbsp; University of San Agustin
</footer>

<!-- ============================================================
     JAVASCRIPT - SKILL BAR ANIMATION (Intersection Observer)
     ============================================================ -->
<script>
  // Animate skill bars when they scroll into view
  const bars = document.querySelectorAll('.bar-fill');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth;
        observer.unobserve(bar); // only animate once
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(function(bar) {
    observer.observe(bar);
  });

  // Add hover glow effect to stat boxes
  const statBoxes = document.querySelectorAll('.stat-box');
  statBoxes.forEach(function(box) {
    box.addEventListener('mouseenter', function() {
      box.style.boxShadow = '0 0 20px rgba(99,179,237,0.1)';
    });
    box.addEventListener('mouseleave', function() {
      box.style.boxShadow = 'none';
    });
  });

  // Smooth scroll for any anchor links (future use)
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
</script>

</body>
</html>
