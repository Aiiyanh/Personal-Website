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