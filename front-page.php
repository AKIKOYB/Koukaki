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

        <section id="story" class="story anim_article article_animate">
            <h2><span>L'histoire</span></h2>
            <article id="" class="story__article title_animate_1">
                <p class="anim_article article_animate"><?php echo get_theme_mod('story'); ?></p>
            </article>
        </section>

        <section id="characters" class="characters anim_article article_animate">
            <div>
                <h3 class="title_animate_1">Les personnages</h3>
            </div>
            <div>
                <?php get_template_part('characters-section'); ?><!-- brings characters-section.php-->
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
            </div>
        </section>

        <section id="place" class="title_animate_1">
            <div class="cloud-container">
                <img src="<?php echo  get_theme_file_uri() . '/assets/images/big_cloud.png'; ?> " class="cloud big-cloud" alt="Big Cloud">
                <img src="<?php echo  get_theme_file_uri() . '/assets/images/little_cloud.png'; ?> " class="cloud little-cloud" alt="Little Cloud">
            </div>
            <div>
                <h3 class="title_animate_1">Le Lieu</h3>
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>
        </section>
        
        <section id="studio" class="anim_article article_animate">
            <h2 class="anim_article article_animate">Studio Koukaki</h2>
            <div>
                <p class="anim_article article_animate">Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p class="anim_article article_animate">Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>

        <section id="oscars" class="anim_article article_animate">
            <h3>Fleurs d’oranger & chats errants <span></span>est nominé aux Oscars Short<span></span>Film Animated de 2022 !</h3>
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/oscars.png" alt="Oscars">
        </section>
    </main>

<?php
get_footer();
?>