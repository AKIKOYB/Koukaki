<?php
// Enqueue parent and child theme styles
function theme_enqueue_styles() {
    // Enqueue parent theme stylesheet
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    
    // Enqueue child theme stylesheet
    wp_enqueue_style('child-style', get_stylesheet_uri(), array('parent-style'), wp_get_theme()->get('Version'));
    
    // Enqueue front page stylesheet
    wp_enqueue_style('foce-child-front-page-style', get_stylesheet_directory_uri() . '/css/front-page.css', array('child-style'), wp_get_theme()->get('Version'));
    
    // Enqueue Swiper CSS
    wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

// Enqueue scripts
function theme_enqueue_scripts() {
    // Enqueue Swiper JS
    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), false, true);
    
    // Enqueue Skrollr JS
    wp_enqueue_script('skrollr', get_stylesheet_directory_uri() . '/js/skrollr.min.js', array(), null, true);
    
    // Enqueue Parallax JS
    wp_enqueue_script('parallax', get_stylesheet_directory_uri() . '/js/parallax.min.js', array(), null, true);
    
    // Enqueue custom script
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/js/script.js', array('jquery', 'swiper', 'skrollr', 'parallax'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');



//h2 animation, not working
function foce_child_enqueue_scripts() {
 // Enqueue the parent theme styles if needed
wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
 //Enqueue the child theme script
wp_enqueue_script('child-script', get_stylesheet_directory_uri() . '/js/script.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'foce_child_enqueue_scripts');

// Get customizer options from parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

// Deregister the parent theme's front-page SCSS file
function deregister_parent_theme_styles() {
    wp_dequeue_style( 'foce-style' ); 
    wp_deregister_style( 'foce-style' );
}
add_action( 'wp_enqueue_scripts', 'deregister_parent_theme_styles', 20 );
?>