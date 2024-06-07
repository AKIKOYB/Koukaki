// On récupère les données pour les variables principales
const articlePlace = document.getElementById('place');
const clouds = document.querySelectorAll('#place .cloud');
let cloudsAnimated = 'clouds-animated'; // Marqueur qui contrôle le déclenchement de l'animation

// On créé un Observer
const observer = new IntersectionObserver(function (entries) {
    const entry = entries[0];

    if (entry.intersectionRatio > 0.5) {
        articlePlace.classList.add(cloudsAnimated);
    } else {
        articlePlace.classList.remove(cloudsAnimated);
    }
}, { threshold: 0.5 }); // Déclenchement de l'animation à 50% d'affichage au viewport

// Observer l'article #place
observer.observe(articlePlace);

// On créé la fonction de déplacement horizontal
function translateClouds() {
    let scrollY = window.scrollY;                 // Propriété qui calcul le nombre de pixels de la page défilés verticalement
    const topSpace = articlePlace.offsetTop + 0.5 * articlePlace.offsetHeight;      // Distance entre le haut de la page et le milieu de l'élément "#place"
    const cloudsStartPosition = 0;              // Position initiale des nuages

    clouds.forEach(cloud => {
        if (scrollY > topSpace) {
            let distance = scrollY - topSpace;
            let newPosition = cloudsStartPosition - distance * 0.68;        

            cloud.style.transform = 'translateX(' + newPosition + 'px)';
        } else {
            cloud.style.transform = 'translateX(' + cloudsStartPosition + 'px)';
        }
    });
}

function scrollReached() {
    if (articlePlace.classList.contains(cloudsAnimated)) {
        translateClouds();
    }
}

// On écoute le scroll pour gérer le déplacement des nuages
document.addEventListener('scroll', function () {
    scrollReached();
});

// Déclencher la mise à jour des nuages lors du chargement initial
scrollReached();
