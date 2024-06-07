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
