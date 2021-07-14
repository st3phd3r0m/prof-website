$(function () {
    // Sur le burger, on met un ecouteur, pour derouler/enrouler le menus principal
    $("#navMenu").on("click", openMenu);
    $(".success, .warning").delay(1500).hide(200);
    let divInBar = $(".barre>div");
    for (let div of divInBar) {
        $(div).css('width', div.dataset.rate+'%');
    }
});

/**
 * Fonction qui déroule/enroule l'élément html suivant
 */
function openMenu() {
    $(this).next().slideDown(200, documentCloseMenu);
}

/**
 * Fonction qui ajoute un event "click" sur le document pour fermer le menu
 */
function documentCloseMenu() {
    $(document).one("click", closeMenu);
}

/**
 * Fonction qui enroule les menus secondaire et principal
 */
function closeMenu() {
    $(".menuPrincipal").slideUp(200);
}