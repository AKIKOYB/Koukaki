if (!window.scriptLoaded) {
  window.scriptLoaded = true;
  // the script is only loaded once, not multiple time.

  document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for sections
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '-100px 0px -100px 0px' });

    // Observe sections
    const sections = document.querySelectorAll('#story, #characters, #place, #studio, #Oscars, footer');
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    // Intersection Observer for title animations
    const titleObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry.target); // Log the observed elements
        if (entry.isIntersecting) {
          console.log('Element is intersecting:', entry.target); // Log when the element is in view
          entry.target.classList.add('reveal'); // Add 'reveal' class when element is in view
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, { rootMargin: '0px 0px -20% 0px' });

    // Select elements to observe
    const titles = document.querySelectorAll('.story h2 span, .characters h3 span, .place h3 span, .studio h2 span, .oscars h3 span');
    titles.forEach(el => {
      titleObserver.observe(el);
      console.log('Observing element:', el); // Log each element being observed
    });

    // Banner title scroll effect
    const bannerTitle = document.querySelector('.banner-title');
    if (bannerTitle) {
      window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        bannerTitle.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
        //-50% for the X, centers the element horizontally.
        //scrollPosition * 0.5, half the speed of the scroll.
      });
    }

    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
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

    // Parallax effect for the place section
    const place = document.querySelector('.place');
    if (place) {
      const placeOffsetTop = place.offsetTop;

      window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;

        if (scrollY >= placeOffsetTop) {
          let parallaxValue = scrollY - placeOffsetTop;
          parallaxValue = Math.min(parallaxValue, 300);
          place.style.transform = `translateY(${parallaxValue}px)`;
        } else {
          place.style.transform = 'translateY(0px)';
        }
      });
    }
  });
}
