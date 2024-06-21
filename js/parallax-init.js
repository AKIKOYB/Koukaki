document.addEventListener('DOMContentLoaded', function() {
    // Initialize skrollr
    var s = skrollr.init({
        smoothScrolling: true,
        forceHeight: false
    });

    // Refresh skrollr on window resize
    window.addEventListener('resize', function() {
        s.refresh();
    });

    // Log message to confirm script is loaded
    console.log('parallax-init.js script loaded successfully');

    // Initialize Parallax.js if needed (uncomment if using Parallax.js)
    // var scene = document.getElementById('scene');
    // var parallax = new Parallax(scene);
});
