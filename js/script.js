if (!window.scriptLoaded) {
  window.scriptLoaded = true;
  // the script is only loaded once, not multiple time.

  document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for each sections
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
        console.log(entry.target); 
        if (entry.isIntersecting) {
          console.log('Element is intersecting:', entry.target); // when the element is in view
          entry.target.classList.add('reveal'); // Add 'reveal' class when element is in view
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, { rootMargin: '0px 0px 0px 0px' });

    // Select elements
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
//comment dor try
    // Parallax effect for the place section
    //const place = document.querySelector('.place');
    //if (place) {
      //const placeOffsetTop = place.offsetTop;

      //window.addEventListener('scroll', function() {
        //const scrollY = window.scrollY;

        //if (scrollY >= placeOffsetTop) {
          //let parallaxValue = scrollY - placeOffsetTop;
          //parallaxValue = Math.min(parallaxValue, 300);
          //place.style.transform = `translateY(${parallaxValue}px)`;
        //} else {
          //place.style.transform = 'translateY(0px)';
        //}
      //});
    //}

     // Parallax effect for the place section
     const place = document.querySelector('.place');
     const littleCloud = document.querySelector('.little_cloud');
     const bigCloud = document.querySelector('.big_cloud');
     let isPlaceVisible = false;
     let ticking = false;
     
     // Intersection Observer for place section
     const placeObserver = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
           isPlaceVisible = true;
           console.log('Place section is visible'); 
         } else {
           isPlaceVisible = false;
           console.log('Place section is not visible'); 
         }
       });
     }, { rootMargin: '-90% 0px' });
   
     // observe 
     if (place) {
       placeObserver.observe(place);
     }
   
     // scroll
     window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;
      const placeOffsetTop = place.offsetTop;
      const windowHeight = window.innerHeight;
      
      // Calculate when to start the parallax, 90% before section is fully visible
      const triggerPoint = placeOffsetTop - windowHeight * 0.9;
      
      if (scrollY >= triggerPoint) {
        // Calculate parallax value
        let parallaxValue = scrollY - triggerPoint;
        parallaxValue = Math.min(parallaxValue, 700); 
    
        // Apply parallax effect to clouds
        littleCloud.style.transform = `translateX(${-60 - parallaxValue}px)`;
        bigCloud.style.transform = `translateX(${-30 - parallaxValue}px)`;
        
        console.log('Parallax triggered, parallaxValue:', parallaxValue); // when parallax is triggered
      } else {
        // Reset to orignal positions
        littleCloud.style.transform = 'translateX(-60px)';
        bigCloud.style.transform = 'translateX(-30px)';
      }
    });
  });
}
