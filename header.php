<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . '/style.css'; ?>">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
        <nav id="site-navigation" class="main-navigation">
          <div>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-title"><?php bloginfo( 'name' ); ?></a>
          </div>
          <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" id="icons">

          </button>
            <div class="burger-menu">
                <ul>
                    <img src="<?php echo  get_theme_file_uri() . '/assets/images/menu_logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
                    <li class="burger-menu__story"><a href="#story">Histoire</a></li>
                    <li class="burger-menu__characters"><a href="#characters">Personnages</a></li>
                    <li class="burger-menu__place"><a href="#place">Lieu</a></li>
                    <li class="burger-menu__studio"><a href="#studio">Studio Koukaki</a></li>
                    <li class="burger-menu__footer"><a href="#footer">Studio Koukaki</a></li>
                </ul>
            </div>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/skrollr.min.js"></script>
    <script src="<?php echo get_theme_file_uri() . '/js/skrollr.min.js'; ?>"></script>
    <script src="<?php echo get_theme_file_uri('/js/parallax.min.js'); ?>"></script>
    <script src="<?php echo get_theme_file_uri('/js/script.js'); ?>"></script>

    <!-- Initialize Swiper -->
    <script>
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
    </script>
    
    <script> // Initialize skrollr
      var s = skrollr.init();
    </script>
</body>
</html>