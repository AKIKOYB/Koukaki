<!doctype html>
<html>
<?php
$args = array(
    'post_type' => 'characters',
    'posts_per_page' => -1,
    'meta_key'  => '_main_char_field',
    'orderby'   => 'meta_value_num',
);

$characters_query = new WP_Query($args);
if ($characters_query->have_posts()) : ?>

<div class="swiper-container mySwiper">  
    <div class="swiper-wrapper">   
        <?php while ($characters_query->have_posts()) : $characters_query->the_post(); ?>
            <div class="swiper-slide">
                <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail(); ?>
                <?php endif; ?>
                    <div class="swiper-slide-caption"><?php the_title(); ?></div>
            </div>
        <?php endwhile; ?>
    </div>
</div>
<?php wp_reset_postdata(); ?>
<?php else : ?>
    <p><?php esc_html_e('No characters found.', 'foce-child'); ?></p>
<?php endif; ?>
</html>