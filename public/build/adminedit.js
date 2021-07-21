(self["webpackChunk"] = self["webpackChunk"] || []).push([["adminedit"],{

/***/ "./assets/js/add-collection-widget.js":
/*!********************************************!*\
  !*** ./assets/js/add-collection-widget.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**Code js destiné à la gestion d'ajout dynamiques d'éléments de fomulaire pour l'édition et la création d'un produit ou d'une catégorie.
 * Les ajouts d'éléments permettent d'associer plusieurs images, plusieurs catégories ou plusieurs attributs à un produit lors de son édition/création.
 * On peut aussi ajouter plusieurs images à une catégorie lors de son édition/création.
 * 
*/
var id;
var attributesFormElements;
var attributes;
var counter = 0;
$(function () {
  //Ecouteur d'évémenents sur le bouton d'ajout de champ (en lien avec les collectionType) 
  //Ajout champ categorie du produit
  $('.add-another-author-collection-widget').on('click', addAnotherCollectionWidget); //Un champ ajoutés via le prototype du collectionType est encapsulé par des balises <li>
  //Pour les champs catégorie pré-remplis (mapping des catégories qui sont déjà liés au produit en bdd) :
  //Selection des éléments li de la collection des catégories

  var categoriesFormElements = $('#authors-fields-list>li');

  var _iterator = _createForOfIteratorHelper(categoriesFormElements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var categoriesFormElement = _step.value;
      //Unne balise <a> dans le template sert accéssoirement à supprimer une catégorie du produit
      //Un écouteur d'événement y est adossé
      $(categoriesFormElement).find('a').on('click', removeElementFromProduct);
    } //On veut afficher l'image que l'utilisateur vient de sélectionner
    //Champ input d'ajout d'image

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var input = $(".vich-image").find('input')[0]; //Création d'une balise <img>

  var img = document.createElement('img');
  $(img).css('width', '200px').addClass('img-fluid mb-1 d-none');
  $(img).appendTo(".vich-image"); //Ecouteur d'événements sur le champ <input>

  $(input).on('change', pickFileName);
});
/**
 * Cette fonction ajoute un groupe de champs "catégories" ou "images", à l'image des prototypes délivrés 
 * par les collectionType du formulaire ProductsType 
 */

function addAnotherCollectionWidget(event) {
  event.preventDefault();
  var list = $($(this).data('list-selector')); //Donne le nombre d'éléments dans la liste de collection, soit via le data dans l'élément 'list', soit
  //en utilisant la méthode children

  counter = list.data('widget-counter') || list.children().length; // Récupération en data du prototype qui se trouve dans l'élément 'list'

  var newWidget = list.data('prototype'); // Remplacement, dans le prototype (qui est très basiquement une chaine de caractères), de 
  //"__name__" par un identifiant numérique unique qu'on incrémente par la suite : counter

  newWidget = newWidget.replace(/__name__/g, counter); // Incrémentation de counter

  counter++; // Ecrasement de counter en data dans l'élément 'list'

  list.data('widget-counter', counter); // Création d'un nouvel élément encapsulé dans un élément li grace au prototype encodé dans 'newWidget'

  var newElement = $(list.data('widget-tags')).html(newWidget); //Insertion du nouvel élément dans l'élément 'list' 

  newElement.appendTo(list); //Ajout d'un écouteur d'évènements sur les balises option de la première balise select dans le nouvel élément

  var selectElement = $(newElement).children()[0]; //Insertion dans le DOM d'une balise <a> pour la suppression individuelle de catégories

  if (selectElement.id.includes('publications_authors')) {
    var deleteLink = document.createElement('a');
    deleteLink.setAttribute('href', '#');
    deleteLink.classList.add("float-right");
    deleteLink.textContent = "Retirer l'auteur de la publication ?";
    newElement.prepend(deleteLink);
    deleteLink.addEventListener('click', removeElementFromProduct);
  }
}
/**
 * Fonction qui efface un par un les champs d'une catégorie, d'une image ou d'un attribut (même ceux mappés par les collectionType sur symfony) que l'utilisateur veut enlever d'un produit
 */


function removeElementFromProduct(event) {
  event.preventDefault();
  this.parentElement.remove();
}
/**
 * Fonction qui affiche l'image sélectionnée par l'utilisateur dans le formulaire
 */


function pickFileName() {
  //Instanciation de FileReader
  var reader = new FileReader(); //L'instance lit le fichier image

  reader.readAsDataURL(this.files[0]); //Récupération de l'élément <img>

  var img = $(this).parent().next()[0]; //On met un écouteur d'événements sur l'instance reader

  reader.addEventListener("load", function () {
    //Une fois la lecture du fichier image par reader est terminée, on récupère l'url de l'image que l'on charge dans l'attribut src de la balise <img>
    img.src = reader.result;
  }, false); //On fait apparaître la balise <img> dans le DOM

  $(img).removeClass('d-none').addClass('d-inline');
}

/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-18e252","vendors-node_modules_core-js_modules_es_string_replace_js"], () => (__webpack_exec__("./assets/js/add-collection-widget.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRkLWNvbGxlY3Rpb24td2lkZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ub3QtYS1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaW5jbHVkZXMuanMiXSwibmFtZXMiOlsiaWQiLCJhdHRyaWJ1dGVzRm9ybUVsZW1lbnRzIiwiYXR0cmlidXRlcyIsImNvdW50ZXIiLCIkIiwib24iLCJhZGRBbm90aGVyQ29sbGVjdGlvbldpZGdldCIsImNhdGVnb3JpZXNGb3JtRWxlbWVudHMiLCJjYXRlZ29yaWVzRm9ybUVsZW1lbnQiLCJmaW5kIiwicmVtb3ZlRWxlbWVudEZyb21Qcm9kdWN0IiwiaW5wdXQiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjc3MiLCJhZGRDbGFzcyIsImFwcGVuZFRvIiwicGlja0ZpbGVOYW1lIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxpc3QiLCJkYXRhIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuZXdXaWRnZXQiLCJyZXBsYWNlIiwibmV3RWxlbWVudCIsImh0bWwiLCJzZWxlY3RFbGVtZW50IiwiaW5jbHVkZXMiLCJkZWxldGVMaW5rIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJwcmVwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsImZpbGVzIiwicGFyZW50IiwibmV4dCIsInNyYyIsInJlc3VsdCIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxFQUFKO0FBQ0EsSUFBSUMsc0JBQUo7QUFDQSxJQUFJQyxVQUFKO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFFQUMsQ0FBQyxDQUFDLFlBQVk7QUFDVjtBQUVBO0FBQ0FBLEdBQUMsQ0FBQyx1Q0FBRCxDQUFELENBQTJDQyxFQUEzQyxDQUE4QyxPQUE5QyxFQUF1REMsMEJBQXZELEVBSlUsQ0FNVjtBQUVBO0FBQ0E7O0FBQ0EsTUFBSUMsc0JBQXNCLEdBQUdILENBQUMsQ0FBQyx5QkFBRCxDQUE5Qjs7QUFWVSw2Q0FZd0JHLHNCQVp4QjtBQUFBOztBQUFBO0FBWVYsd0RBQTBEO0FBQUEsVUFBakRDLHFCQUFpRDtBQUN0RDtBQUNBO0FBQ0FKLE9BQUMsQ0FBQ0kscUJBQUQsQ0FBRCxDQUF5QkMsSUFBekIsQ0FBOEIsR0FBOUIsRUFBbUNKLEVBQW5DLENBQXNDLE9BQXRDLEVBQStDSyx3QkFBL0M7QUFDSCxLQWhCUyxDQWtCVjtBQUNBOztBQW5CVTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CVixNQUFJQyxLQUFLLEdBQUdQLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJLLElBQWpCLENBQXNCLE9BQXRCLEVBQStCLENBQS9CLENBQVosQ0FwQlUsQ0FxQlY7O0FBQ0EsTUFBSUcsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBVixHQUFDLENBQUNRLEdBQUQsQ0FBRCxDQUFPRyxHQUFQLENBQVcsT0FB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NUUsMkJBQTJCLG1CQUFPLENBQUMseUdBQXNDOztBQUV6RTtBQUNBO0FBQ0EsR0FBRywyRUFBMkU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFkbWluZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKkNvZGUganMgZGVzdGluw6kgw6AgbGEgZ2VzdGlvbiBkJ2Fqb3V0IGR5bmFtaXF1ZXMgZCfDqWzDqW1lbnRzIGRlIGZvbXVsYWlyZSBwb3VyIGwnw6lkaXRpb24gZXQgbGEgY3LDqWF0aW9uIGQndW4gcHJvZHVpdCBvdSBkJ3VuZSBjYXTDqWdvcmllLlxuICogTGVzIGFqb3V0cyBkJ8OpbMOpbWVudHMgcGVybWV0dGVudCBkJ2Fzc29jaWVyIHBsdXNpZXVycyBpbWFnZXMsIHBsdXNpZXVycyBjYXTDqWdvcmllcyBvdSBwbHVzaWV1cnMgYXR0cmlidXRzIMOgIHVuIHByb2R1aXQgbG9ycyBkZSBzb24gw6lkaXRpb24vY3LDqWF0aW9uLlxuICogT24gcGV1dCBhdXNzaSBham91dGVyIHBsdXNpZXVycyBpbWFnZXMgw6AgdW5lIGNhdMOpZ29yaWUgbG9ycyBkZSBzb24gw6lkaXRpb24vY3LDqWF0aW9uLlxuICogXG4qL1xuXG5sZXQgaWQ7XG5sZXQgYXR0cmlidXRlc0Zvcm1FbGVtZW50cztcbmxldCBhdHRyaWJ1dGVzO1xubGV0IGNvdW50ZXIgPSAwO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAvL0Vjb3V0ZXVyIGQnw6l2w6ltZW5lbnRzIHN1ciBsZSBib3V0b24gZCdham91dCBkZSBjaGFtcCAoZW4gbGllbiBhdmVjIGxlcyBjb2xsZWN0aW9uVHlwZSkgXG5cbiAgICAvL0Fqb3V0IGNoYW1wIGNhdGVnb3JpZSBkdSBwcm9kdWl0XG4gICAgJCgnLmFkZC1hbm90aGVyLWF1dGhvci1jb2xsZWN0aW9uLXdpZGdldCcpLm9uKCdjbGljaycsIGFkZEFub3RoZXJDb2xsZWN0aW9uV2lkZ2V0KTtcblxuICAgIC8vVW4gY2hhbXAgYWpvdXTDqXMgdmlhIGxlIHByb3RvdHlwZSBkdSBjb2xsZWN0aW9uVHlwZSBlc3QgZW5jYXBzdWzDqSBwYXIgZGVzIGJhbGlzZXMgPGxpPlxuXG4gICAgLy9Qb3VyIGxlcyBjaGFtcHMgY2F0w6lnb3JpZSBwcsOpLXJlbXBsaXMgKG1hcHBpbmcgZGVzIGNhdMOpZ29yaWVzIHF1aSBzb250IGTDqWrDoCBsacOpcyBhdSBwcm9kdWl0IGVuIGJkZCkgOlxuICAgIC8vU2VsZWN0aW9uIGRlcyDDqWzDqW1lbnRzIGxpIGRlIGxhIGNvbGxlY3Rpb24gZGVzIGNhdMOpZ29yaWVzXG4gICAgbGV0IGNhdGVnb3JpZXNGb3JtRWxlbWVudHMgPSAkKCcjYXV0aG9ycy1maWVsZHMtbGlzdD5saScpO1xuXG4gICAgZm9yIChsZXQgY2F0ZWdvcmllc0Zvcm1FbGVtZW50IG9mIGNhdGVnb3JpZXNGb3JtRWxlbWVudHMpIHtcbiAgICAgICAgLy9Vbm5lIGJhbGlzZSA8YT4gZGFucyBsZSB0ZW1wbGF0ZSBzZXJ0IGFjY8Opc3NvaXJlbWVudCDDoCBzdXBwcmltZXIgdW5lIGNhdMOpZ29yaWUgZHUgcHJvZHVpdFxuICAgICAgICAvL1VuIMOpY291dGV1ciBkJ8OpdsOpbmVtZW50IHkgZXN0IGFkb3Nzw6lcbiAgICAgICAgJChjYXRlZ29yaWVzRm9ybUVsZW1lbnQpLmZpbmQoJ2EnKS5vbignY2xpY2snLCByZW1vdmVFbGVtZW50RnJvbVByb2R1Y3QpO1xuICAgIH1cblxuICAgIC8vT24gdmV1dCBhZmZpY2hlciBsJ2ltYWdlIHF1ZSBsJ3V0aWxpc2F0ZXVyIHZpZW50IGRlIHPDqWxlY3Rpb25uZXJcbiAgICAvL0NoYW1wIGlucHV0IGQnYWpvdXQgZCdpbWFnZVxuICAgIGxldCBpbnB1dCA9ICQoXCIudmljaC1pbWFnZVwiKS5maW5kKCdpbnB1dCcpWzBdO1xuICAgIC8vQ3LDqWF0aW9uIGQndW5lIGJhbGlzZSA8aW1nPlxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAkKGltZykuY3NzKCd3aWR0aCcsICcyMDBweCcpLmFkZENsYXNzKCdpbWctZmx1aWQgbWItMSBkLW5vbmUnKTtcbiAgICAkKGltZykuYXBwZW5kVG8oXCIudmljaC1pbWFnZVwiKTtcbiAgICAvL0Vjb3V0ZXVyIGQnw6l2w6luZW1lbnRzIHN1ciBsZSBjaGFtcCA8aW5wdXQ+XG4gICAgJChpbnB1dCkub24oJ2NoYW5nZScsIHBpY2tGaWxlTmFtZSk7XG59KTtcblxuXG4vKipcbiAqIENldHRlIGZvbmN0aW9uIGFqb3V0ZSB1biBncm91cGUgZGUgY2hhbXBzIFwiY2F0w6lnb3JpZXNcIiBvdSBcImltYWdlc1wiLCDDoCBsJ2ltYWdlIGRlcyBwcm90b3R5cGVzIGTDqWxpdnLDqXMgXG4gKiBwYXIgbGVzIGNvbGxlY3Rpb25UeXBlIGR1IGZvcm11bGFpcmUgUHJvZHVjdHNUeXBlIFxuICovXG5mdW5jdGlvbiBhZGRBbm90aGVyQ29sbGVjdGlvbldpZGdldChldmVudCkge1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBsaXN0ID0gJCgkKHRoaXMpLmRhdGEoJ2xpc3Qtc2VsZWN0b3InKSk7XG4gICAgLy9Eb25uZSBsZSBub21icmUgZCfDqWzDqW1lbnRzIGRhbnMgbGEgbGlzdGUgZGUgY29sbGVjdGlvbiwgc29pdCB2aWEgbGUgZGF0YSBkYW5zIGwnw6lsw6ltZW50ICdsaXN0Jywgc29pdFxuICAgIC8vZW4gdXRpbGlzYW50IGxhIG3DqXRob2RlIGNoaWxkcmVuXG4gICAgY291bnRlciA9IGxpc3QuZGF0YSgnd2lkZ2V0LWNvdW50ZXInKSB8fCBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgLy8gUsOpY3Vww6lyYXRpb24gZW4gZGF0YSBkdSBwcm90b3R5cGUgcXVpIHNlIHRyb3V2ZSBkYW5zIGwnw6lsw6ltZW50ICdsaXN0J1xuICAgIGxldCBuZXdXaWRnZXQgPSBsaXN0LmRhdGEoJ3Byb3RvdHlwZScpO1xuXG4gICAgLy8gUmVtcGxhY2VtZW50LCBkYW5zIGxlIHByb3RvdHlwZSAocXVpIGVzdCB0csOocyBiYXNpcXVlbWVudCB1bmUgY2hhaW5lIGRlIGNhcmFjdMOocmVzKSwgZGUgXG4gICAgLy9cIl9fbmFtZV9fXCIgcGFyIHVuIGlkZW50aWZpYW50IG51bcOpcmlxdWUgdW5pcXVlIHF1J29uIGluY3LDqW1lbnRlIHBhciBsYSBzdWl0ZSA6IGNvdW50ZXJcbiAgICBuZXdXaWRnZXQgPSBuZXdXaWRnZXQucmVwbGFjZSgvX19uYW1lX18vZywgY291bnRlcik7XG4gICAgLy8gSW5jcsOpbWVudGF0aW9uIGRlIGNvdW50ZXJcbiAgICBjb3VudGVyKys7XG4gICAgLy8gRWNyYXNlbWVudCBkZSBjb3VudGVyIGVuIGRhdGEgZGFucyBsJ8OpbMOpbWVudCAnbGlzdCdcbiAgICBsaXN0LmRhdGEoJ3dpZGdldC1jb3VudGVyJywgY291bnRlcik7XG5cbiAgICAvLyBDcsOpYXRpb24gZCd1biBub3V2ZWwgw6lsw6ltZW50IGVuY2Fwc3Vsw6kgZGFucyB1biDDqWzDqW1lbnQgbGkgZ3JhY2UgYXUgcHJvdG90eXBlIGVuY29kw6kgZGFucyAnbmV3V2lkZ2V0J1xuICAgIGxldCBuZXdFbGVtZW50ID0gJChsaXN0LmRhdGEoJ3dpZGdldC10YWdzJykpLmh0bWwobmV3V2lkZ2V0KTtcbiAgICAvL0luc2VydGlvbiBkdSBub3V2ZWwgw6lsw6ltZW50IGRhbnMgbCfDqWzDqW1lbnQgJ2xpc3QnIFxuICAgIG5ld0VsZW1lbnQuYXBwZW5kVG8obGlzdCk7XG5cbiAgICAvL0Fqb3V0IGQndW4gw6ljb3V0ZXVyIGQnw6l2w6huZW1lbnRzIHN1ciBsZXMgYmFsaXNlcyBvcHRpb24gZGUgbGEgcHJlbWnDqHJlIGJhbGlzZSBzZWxlY3QgZGFucyBsZSBub3V2ZWwgw6lsw6ltZW50XG4gICAgbGV0IHNlbGVjdEVsZW1lbnQgPSAkKG5ld0VsZW1lbnQpLmNoaWxkcmVuKClbMF07XG5cbiAgICAvL0luc2VydGlvbiBkYW5zIGxlIERPTSBkJ3VuZSBiYWxpc2UgPGE+IHBvdXIgbGEgc3VwcHJlc3Npb24gaW5kaXZpZHVlbGxlIGRlIGNhdMOpZ29yaWVzXG4gICAgaWYgKHNlbGVjdEVsZW1lbnQuaWQuaW5jbHVkZXMoJ3B1YmxpY2F0aW9uc19hdXRob3JzJykpIHtcbiAgICAgICAgbGV0IGRlbGV0ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGRlbGV0ZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgZGVsZXRlTGluay5jbGFzc0xpc3QuYWRkKFwiZmxvYXQtcmlnaHRcIik7XG4gICAgICAgIGRlbGV0ZUxpbmsudGV4dENvbnRlbnQgPSBcIlJldGlyZXIgbCdhdXRldXIgZGUgbGEgcHVibGljYXRpb24gP1wiO1xuICAgICAgICBuZXdFbGVtZW50LnByZXBlbmQoZGVsZXRlTGluayk7XG4gICAgICAgIGRlbGV0ZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFbGVtZW50RnJvbVByb2R1Y3QpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBGb25jdGlvbiBxdWkgZWZmYWNlIHVuIHBhciB1biBsZXMgY2hhbXBzIGQndW5lIGNhdMOpZ29yaWUsIGQndW5lIGltYWdlIG91IGQndW4gYXR0cmlidXQgKG3Dqm1lIGNldXggbWFwcMOpcyBwYXIgbGVzIGNvbGxlY3Rpb25UeXBlIHN1ciBzeW1mb255KSBxdWUgbCd1dGlsaXNhdGV1ciB2ZXV0IGVubGV2ZXIgZCd1biBwcm9kdWl0XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRGcm9tUHJvZHVjdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xufVxuXG4vKipcbiAqIEZvbmN0aW9uIHF1aSBhZmZpY2hlIGwnaW1hZ2Ugc8OpbGVjdGlvbm7DqWUgcGFyIGwndXRpbGlzYXRldXIgZGFucyBsZSBmb3JtdWxhaXJlXG4gKi9cbmZ1bmN0aW9uIHBpY2tGaWxlTmFtZSgpIHtcblxuICAgIC8vSW5zdGFuY2lhdGlvbiBkZSBGaWxlUmVhZGVyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgLy9MJ2luc3RhbmNlIGxpdCBsZSBmaWNoaWVyIGltYWdlXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlc1swXSk7XG5cbiAgICAvL1LDqWN1cMOpcmF0aW9uIGRlIGwnw6lsw6ltZW50IDxpbWc+XG4gICAgbGV0IGltZyA9ICQodGhpcykucGFyZW50KCkubmV4dCgpWzBdO1xuICAgIFxuICAgIC8vT24gbWV0IHVuIMOpY291dGV1ciBkJ8OpdsOpbmVtZW50cyBzdXIgbCdpbnN0YW5jZSByZWFkZXJcbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL1VuZSBmb2lzIGxhIGxlY3R1cmUgZHUgZmljaGllciBpbWFnZSBwYXIgcmVhZGVyIGVzdCB0ZXJtaW7DqWUsIG9uIHLDqWN1cMOocmUgbCd1cmwgZGUgbCdpbWFnZSBxdWUgbCdvbiBjaGFyZ2UgZGFucyBsJ2F0dHJpYnV0IHNyYyBkZSBsYSBiYWxpc2UgPGltZz5cbiAgICAgICAgaW1nLnNyYyA9IHJlYWRlci5yZXN1bHQ7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgLy9PbiBmYWl0IGFwcGFyYcOudHJlIGxhIGJhbGlzZSA8aW1nPiBkYW5zIGxlIERPTVxuICAgICQoaW1nKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtaW5saW5lJyk7XG59IiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHZhciByZWdleHAgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIHRyeSB7XG4gICAgICByZWdleHBbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZXJyb3IyKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG4vLyBgSXNSZWdFeHBgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc3JlZ2V4cFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY2xhc3NvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsInZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzUmVnRXhwKGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIlRoZSBtZXRob2QgZG9lc24ndCBhY2NlcHQgcmVndWxhciBleHByZXNzaW9uc1wiKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5jbHVkZXM7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygnaW5jbHVkZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIG5vdEFSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbm90LWEtcmVnZXhwJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBjb3JyZWN0SXNSZWdFeHBMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYycpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhY29ycmVjdElzUmVnRXhwTG9naWMoJ2luY2x1ZGVzJykgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhflN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKVxuICAgICAgLmluZGV4T2Yobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==