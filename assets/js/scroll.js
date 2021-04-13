//Attente chargement page web
$(function () {
    // double Flèche en bas à droite de la fenetre en position:fixed pour retour à l'acceuil du site
    $("#scroll").on("click", goToHomeSite);
    // Aller vers la zone du site désirée en scrolling
    $(".menuPrincipal>a").on("click", goTo);
    //Changer la couleur du burger selon qu'il est en dehors ou non du header
    // burgerColor();
    $(document).on("scroll", burgerColor);
}); // Fin chargement page web


/**Fonction qui ajuste la couleur du burger (en lui attribuant une classe) lorsqu'il est en dehaors du
 * header (probleme de contraste entre le header et le main)
 */
function burgerColor() {
    let hauteurNav = $("nav").height();
    let hauteurHeader = $("header").height();
    let positionContact = $(document).height() - $("#contact").height();
    let positionScroll = $(document).scrollTop();

    if (positionScroll < hauteurHeader - hauteurNav || positionScroll > positionContact - hauteurNav) {
        $(".la-bars").removeClass("outOfHeader");
    } else {
        $(".la-bars").addClass("outOfHeader");
    }
}

/**
 * Fonction qui dirige l'utilisateur vers la partie du site qu'il souhaite
 * en scrolling
 * @param {*} event 
 */
function goTo(event) {
    //On veut récupérer l'identifiant de l'élément de destination
    //On récupère la valeur de l'attribut href de l'élément appelant <a>
    let targetPosition = $(this).attr("href");
    targetPosition = document.querySelector(targetPosition);
    //Si la longueur de cet objet est nulle, c'est que l'élément de destination n'est
    //pas dans le même fichier que la balise <a> appellante.
    if (targetPosition.length != 0 && targetPosition != null) {
        event.preventDefault(); //Et, dans le cas, la balise appelante remplira sa fonctionnalité initiale
        //Si au contraire l'élément appelant et l'élément de destination sont dans le même fichier, on récupère la position verticale de l'élément de destination dans le document
        targetPosition = targetPosition.offsetTop;
        //La méthode suivante dirige l'utilisateur vers l'élément de destination
        $('html').animate({
            scrollTop: targetPosition
        });
    }
}

/**
 * Fonction qui va vers l'acceuil en scrolling
 * @param {*} event 
 */
function goToHomeSite() {
    $('html').animate({
        scrollTop: 0
    });
}