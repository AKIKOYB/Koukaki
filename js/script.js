if (!window.scriptLoaded) {
  window.scriptLoaded = true;

  document.addEventListener('DOMContentLoaded', function() {
    // Define fadeInAnimation if it's not already defined
    if (typeof fadeInAnimation !== 'function') {
      function fadeInAnimation(entry) {
        entry.target.classList.add('fade-in');
      }
    }

    // Intersection Observer for sections
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fadeInAnimation(entry);
          observer.unobserve(entry.target);
        }
      });
    },{ rootMargin:'-100px 0px -100px 0px'});

    // Observe sections
    const sections = document.querySelectorAll('#story, #characters, #place, #studio, #Oscars, footer');
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    // Banner title scroll effect
    const bannerTitle = document.querySelector('.banner-title');
    if (bannerTitle) {
      window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        bannerTitle.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
      });
    }


    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    // Burger menu toggle
    const navigation = document.getElementById("site-navigation");
    const burgerMenu = document.getElementById("icons");

    if (burgerMenu && navigation) {
      burgerMenu.addEventListener("click", () => {
        navigation.classList.toggle("open");
      });
    }
  });
}

 // Initialize skrollr
 var s = skrollr.init({
  smoothScrolling: true,
  forceHeight: false
});

// Check if skrollr is working correctly
if (!s.isMobile()) {
  // Refresh skrollr on window resize
  window.addEventListener('resize', function() {
    s.refresh();
  });
} else {
  s.destroy(); // Destroy skrollr if it's a mobile device
}

// Intersection Observer for title animations
const titleObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const spans = entry.target.querySelectorAll('span');
      spans.forEach(span => span.classList.add('reveal'));
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -20% 0px' });

// Observe titles
const titles = document.querySelectorAll('.story h2');
titles.forEach((title) => {
  titleObserver.observe(title);
});

// Intersection Observer for title animations
document.addEventListener('DOMContentLoaded', function() {
  const titleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('title_animate_1');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -20% 0px' });

  const titles = document.querySelectorAll('.anim_title_1');
  titles.forEach((title) => {
    titleObserver.observe(title);
  });
});
