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

  // ============================================================
  // AVATAR URL UPLOADER
  // Lets you preview a profile picture instantly by pasting a
  // direct image URL. This only affects your own browser session
  // (it does not save automatically for other visitors). Once you
  // find a URL you like, copy it into the AVATAR_IMAGE_URL constant
  // near the top of this script to make it permanent for everyone.
  // ============================================================
  const AVATAR_IMAGE_URL = ""; // <-- paste your final image URL here to make it permanent

  const avatarEl = document.getElementById('avatar');
  const avatarInput = document.getElementById('avatar-url-input');
  const avatarBtn = document.getElementById('avatar-url-btn');

  function setAvatarImage(url) {
    if (!url) return;
    avatarEl.style.backgroundImage = `url("${url}")`;
    avatarEl.textContent = ''; // clear the "ID" initials
  }

  // Load the permanent image if one has been set in the code
  if (AVATAR_IMAGE_URL) {
    setAvatarImage(AVATAR_IMAGE_URL);
  }

  if (avatarBtn) {
    avatarBtn.addEventListener('click', function() {
      const url = avatarInput.value.trim();
      if (!url) return;

      // Block known non-working link types
      if (url.startsWith('blob:') || url.includes('facebook.com')) {
        alert('This link won\'t work here. Please use a direct image URL (ending in .jpg, .png, .webp, etc.), or upload the photo to a site like imgur.com and paste that link instead.');
        return;
      }

      setAvatarImage(url);
    });

    avatarInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        avatarBtn.click();
      }
    });
  }

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
