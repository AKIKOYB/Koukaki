<?php
get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner">
            <img class="banner__logo hidden" src="<?php echo  get_theme_file_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            <!-- Récupération de l'image de background, désactivée dans le CSS -->
            <img class="banner__background move-down hidden" src="<?php echo get_theme_file_uri() . '/assets/images/banner.png'; ?>" alt="Arrière plan de couleur orange, avec des images de type cartoon de chats et de fleurs.">
            <!-- Ajout de la vidéo -->
            <video class="banner__video move-down hidden" autoplay loop muted>
                <source src="<?php echo get_theme_file_uri() . '/assets/video/banner-video.mp4'; ?>">
            </video>
        </section>

        <section id="story" class="story">
        <h2><span class="anim_title">L'histoire</span></h2>
            <article id="" class="story__article">
                <p class="anim_article article_animate"><?php echo get_theme_mod('story'); ?></p>
            </article>
        </section>

        <section id="characters" class="characters anim_article article_animate">
            <div>
                <h3><span class="anim_title">Les personnages</span></h3>
            </div>
            <div>
                <?php get_template_part('characters-section'); ?><!-- brings characters-section.php-->
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
            </div>
        </section>

        <section id="place" class="place title_animate_1">
            <div class="cloud">
            <img src="<?php echo get_theme_file_uri() . '/assets/images/big_cloud.png'; ?>" class="cloud big_cloud"  
                data-bottom-top="transform:translateX(-700px);" data-center-center="transform:translateX(0px);" alt="Big Cloud">
            <img src="<?php echo get_theme_file_uri() . '/assets/images/little_cloud.png'; ?>" class="cloud little_cloud"  
                data-bottom-top="transform:translateX(-900px);" data-center-center="transform:translateX(0px);" alt="Little Cloud">
            </div>
            <div class="place_text_nuages">
                <h3><span class="anim_title">Le Lieu</span></h3>
                <p class="anim_article article_animate"><?php echo get_theme_mod('place'); ?></p>
            </div>
        </section>

         <script>
            var clouds = document.querySelectorAll('.cloud');
            clouds.forEach(function(cloud) {
                var parallax = new Parallax(cloud);
            });

            // Intersection Observer for animating titles and articles
            document.addEventListener('DOMContentLoaded', function () {
                const observerOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.1
                };

                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('title_animate_1');
                            entry.target.classList.add('article_animate');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);

                document.querySelectorAll('.anim_title, .anim_article').forEach(el => {
                    observer.observe(el);
                });
            });
        </script>

        <section id="studio" class="studio title_animate_1">
            <h2><span class="anim_title">Studio Koukaki</span></h2>
            <div>
                <p class="anim_article article_animate">Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p class="anim_article article_animate">Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>

        <section id="oscars" class="oscars title_animate_1">
            <h3><span class="anim_title">Fleurs d’oranger & chats errants <span></span>est nominé aux Oscars Short<span></span>Film Animated de 2022 !</h3>
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/oscars1.png" alt="Oscars">
        </section>
    </main>
<?php
get_footer();
?>