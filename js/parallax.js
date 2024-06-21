console.log('parallax.js script loaded successfully');
document.addEventListener('DOMContentLoaded', function() {
     // Initialize skrollr
    const s = skrollr.init({
         smoothScrolling: true,
         forceHeight: false
     });
});

//     // Check if skrollr is working correctly
//     if (!s.isMobile()) {
//         // Refresh skrollr on window resize
//         window.addEventListener('resize', function() {
//             s.refresh();
//         });
//     } else {
//         s.destroy(); // Destroy skrollr if it's a mobile device
//     }
// });
/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
