const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // If the element is visible then stop
      if (entry.isIntersecting) {
          fadeInAnimation(entry)
          observer.unobserve(entry.target);
      }
    });
  });
  
const sections = document.querySelectorAll('#story, #characters, #place, #studio, #Oscars,footer');

    document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.fade-in');

    sections.forEach(function(section) {
        section.classList.add('fade-in');
    });
});

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const bannerTitle = document.querySelector('.banner-title');
  
  bannerTitle.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
});