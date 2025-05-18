// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  ham.addEventListener('click', e => {
    e.preventDefault();
    nav.classList.toggle('open');
  });
});


// Gallery
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');

  const totalImages = 7;
  for (let i = 1; i <= totalImages; i++) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = `images/gallery-${i}.jpg`;
    img.alt = `Gallery Image ${i}`;

    wrapper.appendChild(img);
    gallery.appendChild(wrapper);

    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  }
  for (let i = 1; i <= totalImages; i++) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = `images/gallery-${i}.jpg`;
    img.alt = `Gallery Image ${i}`;

    wrapper.appendChild(img);
    gallery.appendChild(wrapper);

    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  }

  
  

  // Close lightbox on close icon or backdrop click
  closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });
});

// contact
const emailLink = document.getElementById('emailLink');
const tooltip = document.getElementById('tooltip');

emailLink.addEventListener('click', function(e) {
  e.preventDefault();
  const email = this.textContent;
  navigator.clipboard.writeText(email).then(() => {
    tooltip.classList.add('show');
    setTimeout(() => tooltip.classList.remove('show'), 2000);
  });
});

// about
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle-more');
  const more = document.querySelector('.more-text');
  btn.addEventListener('click', () => {
    const isHidden = more.classList.toggle('visible');
    more.classList.toggle('hidden', false);
    btn.textContent = isHidden ? 'Read Less' : 'Read More';
  });
});

// Project Filtering
    document.addEventListener('DOMContentLoaded', () => {
      const filterBtns = document.querySelectorAll('.filter-btn');
      const projectCards = document.querySelectorAll('.project-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.getAttribute('data-filter');

          projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            card.style.display = (filter === 'all' || category === filter) ? 'flex' : 'none';
          });
        });
      });
    });