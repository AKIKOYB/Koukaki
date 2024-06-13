document.addEventListener('DOMContentLoaded', function() {
    // Initialize skrollr
    const s = skrollr.init({
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
});
