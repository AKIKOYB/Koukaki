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
        sections.forEach((section)=> {
          sectionObserver.observe(section);
    });
});

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const bannerTitle = document.querySelector('.banner-title');
  
  bannerTitle.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
});
/*'.'.'.'.'.'.'.'.'*/
 /*   swiper  */
 /*'.'.'.'.'.'.'.'.'*/
document.addEventListener('DOMContentLoaded', function() {
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

/*'.'.'.'.'.'.'.'.'*/
 /*   h2 animation  */
 /*'.'.'.'.'.'.'.'.'*
document.addEventListener('DOMContentLoaded', function() {
  const options = {
    threshold: 0.1 // Adjust this value as needed
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('span').classList.add('reveal');
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, options);

  const elements = document.querySelectorAll('.story h2');
  elements.forEach(element => {
    observer.observe(element);
  });
});
*/

/*'.'.'.'.'.'.'.'.'*/
 /*   BURGER MENU   */
 /*'.'.'.'.'.'.'.'.'*/

 const navigation = document.getElementById("site-navigation")
 const burgerMenu = document.getElementById("icons")

 burgerMenu.addEventListener("click", () => {
     navigation.classList.toggle("open");            // toggle => ajoute la classe quand elle n'y est pas.
 })  
});