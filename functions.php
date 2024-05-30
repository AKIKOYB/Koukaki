<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // Enqueue the parent stylesheet
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // Enqueue the child stylesheet
    wp_enqueue_style( 'child-style', get_stylesheet_uri(), array('parent-style'), wp_get_theme()->get('Version') );

    // Enqueue the front page specific stylesheet
    wp_enqueue_style( 'foce-child-front-page-style', get_stylesheet_directory_uri() . '/css/front-page.css', array('child-style'), wp_get_theme()->get('Version') );
}

add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts' );
function theme_enqueue_scripts() {
    // Enqueue custom scripts
    wp_enqueue_script( 'custom-script', get_stylesheet_directory_uri() . '/js/script.js' );
}

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
?>