(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ "./assets/css/normalize.css");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.scss */ "./assets/css/styles.scss");
/* harmony import */ var _js_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/accordion.js */ "./assets/js/accordion.js");
/* harmony import */ var _js_accordion_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_accordion_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/scroll.js */ "./assets/js/scroll.js");
/* harmony import */ var _js_scroll_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_scroll_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_courrielForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/courrielForm.js */ "./assets/js/courrielForm.js");
/* harmony import */ var _js_courrielForm_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_courrielForm_js__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';





/***/ }),

/***/ "./assets/js/accordion.js":
/*!********************************!*\
  !*** ./assets/js/accordion.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
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

$(function () {
  // Sur le burger, on met un ecouteur, pour derouler/enrouler le menus principal
  $("#navMenu").on("click", openMenu);
  $(".success, .warning").delay(1500).hide(200);
  var divInBar = $(".barre>div");

  var _iterator = _createForOfIteratorHelper(divInBar),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var div = _step.value;
      $(div).css('width', div.dataset.rate + '%');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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

/***/ }),

/***/ "./assets/js/courrielForm.js":
/*!***********************************!*\
  !*** ./assets/js/courrielForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

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

var fields;
var observer = new MutationObserver(refresh);
$(function () {
  $(".success, .form-error-message").delay(1500).hide(200);
  /*Validation des champs du formulaire */

  fields = $("#courriels .form-control");
  onCheckFields();
  fields.on('keyup', onCheckFields);
  observerConnect();
  document.querySelector("form>button").addEventListener("click", extractFormData);
});

function checkField(elementObject) {
  var minLength = $(elementObject).attr('minlength');
  var maxLength = $(elementObject).attr('maxlength');
  var str = $(elementObject).val();

  if (str.length > maxLength) {
    return false;
  } else if (str.length < minLength) {
    return false;
  } else if (/[&<>"']/.test(str)) {
    return false;
  }

  return true;
}

function onCheckFields() {
  for (var index = 0; index < fields.length; index++) {
    if (!checkField(fields[index])) {
      observer.disconnect();
      document.querySelector("form>button").disabled = true;
      observerConnect();
      return false;
    }

    if (index == fields.length - 1) {
      observer.disconnect();
      document.querySelector("form>button").disabled = false;
      observerConnect();
    }
  }

  return true;
}

function refresh() {
  window.location.reload();
}

function observerConnect() {
  var form = document.querySelector("form");
  observer.observe(form, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  });
}

function extractFormData(e) {
  e.preventDefault();

  var _token = $("#courriels__token").val();

  var nosiar = $('#courriels_nosiar').val();

  if (this.disabled == false && onCheckFields && _token != "" && nosiar === "") {
    var formData = {};

    var _iterator = _createForOfIteratorHelper(fields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var field = _step.value;
        formData[field.id.replace('courriels_', '')] = escapeHtml($(field).val());
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    formData.nosiar = escapeHtml(nosiar);
    formData._token = escapeHtml(_token);
    ajaxCall(formData);
  } else {
    $("#courriel_sent").text('Un problème est surnenu. Le courriel n\'a pas été enregistré.').addClass("form-error-message").show();
    setTimeout(function () {
      $("#courriel_sent").hide();
    }, 2000);
  }
}

function ajaxCall(formData) {
  fetch('/api/courriels/', {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      "Authorization": formData._token,
      "Content-type": 'application/json',
      "X-Requested-With": 'XMLHttpRequest'
    },
    body: JSON.stringify(formData)
  }).then(function (response) {
    if (response.status == 201) {
      fields.val('');
      $("#email_sent").text('Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.').removeClass("form-error-message").addClass("success").show();
      setTimeout(function () {
        $("#email_sent").hide();
      }, 2000);
    } else {
      $("#email_sent").text('Un problème est surnenu. Le courriel n\'a pas été enregistré.').removeClass("success").addClass("form-error-message").show();
      setTimeout(function () {
        $("#email_sent").hide();
      }, 2000);
    }

    onCheckFields();
  });
}

function escapeHtml(str) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return str.replace(/[&<>"']/g, function (m) {
    return map[m];
  });
}

/***/ }),

/***/ "./assets/js/scroll.js":
/*!*****************************!*\
  !*** ./assets/js/scroll.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
//Attente chargement page web
$(function () {
  // double Flèche en bas à droite de la fenetre en position:fixed pour retour à l'acceuil du site
  $("#scroll").on("click", goToHomeSite); // Aller vers la zone du site désirée en scrolling

  $(".menuPrincipal>a").on("click", goTo); //Changer la couleur du burger selon qu'il est en dehors ou non du header
  // burgerColor();

  $(document).on("scroll", burgerColor);
}); // Fin chargement page web

/**Fonction qui ajuste la couleur du burger (en lui attribuant une classe) lorsqu'il est en dehaors du
 * header (probleme de contraste entre le header et le main)
 */

function burgerColor() {
  var hauteurNav = $("nav").height();
  var hauteurHeader = $("header").height();
  var positionContact = $(document).height() - $("#contact").height();
  var positionScroll = $(document).scrollTop();

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
  var targetPosition = $(this).attr("href");
  targetPosition = document.querySelector(targetPosition); //Si la longueur de cet objet est nulle, c'est que l'élément de destination n'est
  //pas dans le même fichier que la balise <a> appellante.

  if (targetPosition.length != 0 && targetPosition != null) {
    event.preventDefault(); //Et, dans le cas, la balise appelante remplira sa fonctionnalité initiale
    //Si au contraire l'élément appelant et l'élément de destination sont dans le même fichier, on récupère la position verticale de l'élément de destination dans le document

    targetPosition = targetPosition.offsetTop; //La méthode suivante dirige l'utilisateur vers l'élément de destination

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

/***/ }),

/***/ "./assets/css/normalize.css":
/*!**********************************!*\
  !*** ./assets/css/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/styles.scss":
/*!********************************!*\
  !*** ./assets/css/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-18e252","vendors-node_modules_core-js_modules_es_promise_js-node_modules_core-js_modules_web_timers_js","vendors-node_modules_core-js_modules_es_string_replace_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvdXJyaWVsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3Mvbm9ybWFsaXplLmNzcz8yMzIzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3Mvc3R5bGVzLnNjc3MiXSwibmFtZXMiOlsiJCIsIm9uIiwib3Blbk1lbnUiLCJkZWxheSIsImhpZGUiLCJkaXZJbkJhciIsImRpdiIsImNzcyIsImRhdGFzZXQiLCJyYXRlIiwibmV4dCIsInNsaWRlRG93biIsImRvY3VtZW50Q2xvc2VNZW51IiwiZG9jdW1lbnQiLCJvbmUiLCJjbG9zZU1lbnUiLCJzbGlkZVVwIiwiZmllbGRzIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwicmVmcmVzaCIsIm9uQ2hlY2tGaWVsZHMiLCJvYnNlcnZlckNvbm5lY3QiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4dHJhY3RGb3JtRGF0YSIsImNoZWNrRmllbGQiLCJlbGVtZW50T2JqZWN0IiwibWluTGVuZ3RoIiwiYXR0ciIsIm1heExlbmd0aCIsInN0ciIsInZhbCIsImxlbmd0aCIsInRlc3QiLCJpbmRleCIsImRpc2Nvbm5lY3QiLCJkaXNhYmxlZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9ybSIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJfdG9rZW4iLCJub3NpYXIiLCJmb3JtRGF0YSIsImZpZWxkIiwiaWQiLCJyZXBsYWNlIiwiZXNjYXBlSHRtbCIsImFqYXhDYWxsIiwidGV4dCIsImFkZENsYXNzIiwic2hvdyIsInNldFRpbWVvdXQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZW1vdmVDbGFzcyIsIm1hcCIsIm0iLCJnb1RvSG9tZVNpdGUiLCJnb1RvIiwiYnVyZ2VyQ29sb3IiLCJoYXV0ZXVyTmF2IiwiaGVpZ2h0IiwiaGF1dGV1ckhlYWRlciIsInBvc2l0aW9uQ29udGFjdCIsInBvc2l0aW9uU2Nyb2xsIiwic2Nyb2xsVG9wIiwiZXZlbnQiLCJ0YXJnZXRQb3NpdGlvbiIsIm9mZnNldFRvcCIsImFuaW1hdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FHQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQUEsQ0FBQyxDQUFDLFlBQVk7QUFDVjtBQUNBQSxHQUFDLENBQUMsVUFBRCxDQUFELENBQWNDLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEJDLFFBQTFCO0FBQ0FGLEdBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCRyxLQUF4QixDQUE4QixJQUE5QixFQUFvQ0MsSUFBcEMsQ0FBeUMsR0FBekM7QUFDQSxNQUFJQyxRQUFRLEdBQUdMLENBQUMsQ0FBQyxZQUFELENBQWhCOztBQUpVLDZDQUtNSyxRQUxOO0FBQUE7O0FBQUE7QUFLVix3REFBMEI7QUFBQSxVQUFqQkMsR0FBaUI7QUFDdEJOLE9BQUMsQ0FBQ00sR0FBRCxDQUFELENBQU9DLEdBQVAsQ0FBVyxPQUFYLEVBQW9CRCxHQUFHLENBQUNFLE9BQUosQ0FBWUMsSUFBWixHQUFpQixHQUFyQztBQUNIO0FBUFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFiLENBUkEsQ0FBRDtBQVVBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTUCxRQUFULEdBQW9CO0FBQ2hCRixHQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLElBQVIsR0FBZUMs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cCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL2Nzcy9ub3JtYWxpemUuY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGVzLnNjc3MnO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJy4vanMvYWNjb3JkaW9uLmpzJztcbmltcG9ydCAnLi9qcy9zY3JvbGwuanMnO1xuaW1wb3J0ICcuL2pzL2NvdXJyaWVsRm9ybS5qcyc7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3VyIGxlIGJ1cmdlciwgb24gbWV0IHVuIGVjb3V0ZXVyLCBwb3VyIGRlcm91bGVyL2Vucm91bGVyIGxlIG1lbnVzIHByaW5jaXBhbFxuICAgICQoXCIjbmF2TWVudVwiKS5vbihcImNsaWNrXCIsIG9wZW5NZW51KTtcbiAgICAkKFwiLnN1Y2Nlc3MsIC53YXJuaW5nXCIpLmRlbGF5KDE1MDApLmhpZGUoMjAwKTtcbiAgICBsZXQgZGl2SW5CYXIgPSAkKFwiLmJhcnJlPmRpdlwiKTtcbiAgICBmb3IgKGxldCBkaXYgb2YgZGl2SW5CYXIpIHtcbiAgICAgICAgJChkaXYpLmNzcygnd2lkdGgnLCBkaXYuZGF0YXNldC5yYXRlKyclJyk7XG4gICAgfVxufSk7XG5cbi8qKlxuICogRm9uY3Rpb24gcXVpIGTDqXJvdWxlL2Vucm91bGUgbCfDqWzDqW1lbnQgaHRtbCBzdWl2YW50XG4gKi9cbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgICQodGhpcykubmV4dCgpLnNsaWRlRG93bigyMDAsIGRvY3VtZW50Q2xvc2VNZW51KTtcbn1cblxuLyoqXG4gKiBGb25jdGlvbiBxdWkgYWpvdXRlIHVuIGV2ZW50IFwiY2xpY2tcIiBzdXIgbGUgZG9jdW1lbnQgcG91ciBmZXJtZXIgbGUgbWVudVxuICovXG5mdW5jdGlvbiBkb2N1bWVudENsb3NlTWVudSgpIHtcbiAgICAkKGRvY3VtZW50KS5vbmUoXCJjbGlja1wiLCBjbG9zZU1lbnUpO1xufVxuXG4vKipcbiAqIEZvbmN0aW9uIHF1aSBlbnJvdWxlIGxlcyBtZW51cyBzZWNvbmRhaXJlIGV0IHByaW5jaXBhbFxuICovXG5mdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgJChcIi5tZW51UHJpbmNpcGFsXCIpLnNsaWRlVXAoMjAwKTtcbn0iLCJsZXQgZmllbGRzO1xubGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocmVmcmVzaCk7XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgICQoXCIuc3VjY2VzcywgLmZvcm0tZXJyb3ItbWVzc2FnZVwiKS5kZWxheSgxNTAwKS5oaWRlKDIwMCk7XG5cbiAgICAvKlZhbGlkYXRpb24gZGVzIGNoYW1wcyBkdSBmb3JtdWxhaXJlICovXG4gICAgZmllbGRzID0gJChcIiNjb3VycmllbHMgLmZvcm0tY29udHJvbFwiKTtcbiAgICBvbkNoZWNrRmllbGRzKCk7XG4gICAgZmllbGRzLm9uKCdrZXl1cCcsIG9uQ2hlY2tGaWVsZHMpO1xuICAgIG9ic2VydmVyQ29ubmVjdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0+YnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleHRyYWN0Rm9ybURhdGEpO1xufSk7XG5cbmZ1bmN0aW9uIGNoZWNrRmllbGQoZWxlbWVudE9iamVjdCkge1xuICAgIGxldCBtaW5MZW5ndGggPSAkKGVsZW1lbnRPYmplY3QpLmF0dHIoJ21pbmxlbmd0aCcpO1xuICAgIGxldCBtYXhMZW5ndGggPSAkKGVsZW1lbnRPYmplY3QpLmF0dHIoJ21heGxlbmd0aCcpO1xuICAgIGxldCBzdHIgPSAkKGVsZW1lbnRPYmplY3QpLnZhbCgpO1xuICAgIGlmIChzdHIubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHN0ci5sZW5ndGggPCBtaW5MZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gIGVsc2UgaWYgKCAvWyY8PlwiJ10vLnRlc3Qoc3RyKSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb25DaGVja0ZpZWxkcygpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBpZiAoIWNoZWNrRmllbGQoZmllbGRzW2luZGV4XSkpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtPmJ1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBvYnNlcnZlckNvbm5lY3QoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT0gZmllbGRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtPmJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgb2JzZXJ2ZXJDb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlckNvbm5lY3QoKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGZvcm0sIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Rm9ybURhdGEoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgX3Rva2VuID0gJChcIiNjb3VycmllbHNfX3Rva2VuXCIpLnZhbCgpO1xuICAgIGxldCBub3NpYXIgPSAkKCcjY291cnJpZWxzX25vc2lhcicpLnZhbCgpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkID09IGZhbHNlICYmIG9uQ2hlY2tGaWVsZHMgJiYgX3Rva2VuICE9XCJcIiAmJiBub3NpYXI9PT1cIlwiKSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IHt9O1xuICAgICAgICBmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLmlkLnJlcGxhY2UoJ2NvdXJyaWVsc18nLCAnJyldID0gZXNjYXBlSHRtbCgkKGZpZWxkKS52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybURhdGEubm9zaWFyID0gZXNjYXBlSHRtbChub3NpYXIpO1xuICAgICAgICBmb3JtRGF0YS5fdG9rZW4gPSBlc2NhcGVIdG1sKF90b2tlbik7XG4gICAgICAgIGFqYXhDYWxsKGZvcm1EYXRhKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgJChcIiNjb3VycmllbF9zZW50XCIpLnRleHQoJ1VuIHByb2Jsw6htZSBlc3Qgc3VybmVudS4gTGUgY291cnJpZWwgblxcJ2EgcGFzIMOpdMOpIGVucmVnaXN0csOpLicpLmFkZENsYXNzKFwiZm9ybS1lcnJvci1tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFwiI2NvdXJyaWVsX3NlbnRcIikuaGlkZSgpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFqYXhDYWxsKGZvcm1EYXRhKSB7XG4gICAgZmV0Y2goXG4gICAgICAgICcvYXBpL2NvdXJyaWVscy8nLFxuICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGZvcm1EYXRhLl90b2tlbixcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcbiAgICAgICAgfVxuICAgICkudGhlbihcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcbiAgICAgICAgICAgICAgICBmaWVsZHMudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAkKFwiI2VtYWlsX3NlbnRcIikudGV4dCgnVm90cmUgbWVzc2FnZSBhIGJpZW4gw6l0w6kgZW52b3nDqS4gSmUgdm91cyByw6lwb25kcmFpIGRhbnMgbGVzIHBsdXMgYnJlZnMgZMOpbGFpcy4nKS5yZW1vdmVDbGFzcyhcImZvcm0tZXJyb3ItbWVzc2FnZVwiKS5hZGRDbGFzcyhcInN1Y2Nlc3NcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2VtYWlsX3NlbnRcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI2VtYWlsX3NlbnRcIikudGV4dCgnVW4gcHJvYmzDqG1lIGVzdCBzdXJuZW51LiBMZSBjb3VycmllbCBuXFwnYSBwYXMgw6l0w6kgZW5yZWdpc3Ryw6kuJykucmVtb3ZlQ2xhc3MoXCJzdWNjZXNzXCIpLmFkZENsYXNzKFwiZm9ybS1lcnJvci1tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNlbWFpbF9zZW50XCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2hlY2tGaWVsZHMoKTtcbiAgICAgICAgfSxcbiAgICApO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHN0cikge1xuICAgIGxldCBtYXAgPVxuICAgIHtcbiAgICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgICBcIidcIjogJyYjMDM5OydcbiAgICB9O1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWyY8PlwiJ10vZywgZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG1hcFttXTsgfSk7XG59IiwiLy9BdHRlbnRlIGNoYXJnZW1lbnQgcGFnZSB3ZWJcbiQoZnVuY3Rpb24gKCkge1xuICAgIC8vIGRvdWJsZSBGbMOoY2hlIGVuIGJhcyDDoCBkcm9pdGUgZGUgbGEgZmVuZXRyZSBlbiBwb3NpdGlvbjpmaXhlZCBwb3VyIHJldG91ciDDoCBsJ2FjY2V1aWwgZHUgc2l0ZVxuICAgICQoXCIjc2Nyb2xsXCIpLm9uKFwiY2xpY2tcIiwgZ29Ub0hvbWVTaXRlKTtcbiAgICAvLyBBbGxlciB2ZXJzIGxhIHpvbmUgZHUgc2l0ZSBkw6lzaXLDqWUgZW4gc2Nyb2xsaW5nXG4gICAgJChcIi5tZW51UHJpbmNpcGFsPmFcIikub24oXCJjbGlja1wiLCBnb1RvKTtcbiAgICAvL0NoYW5nZXIgbGEgY291bGV1ciBkdSBidXJnZXIgc2Vsb24gcXUnaWwgZXN0IGVuIGRlaG9ycyBvdSBub24gZHUgaGVhZGVyXG4gICAgLy8gYnVyZ2VyQ29sb3IoKTtcbiAgICAkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBidXJnZXJDb2xvcik7XG59KTsgLy8gRmluIGNoYXJnZW1lbnQgcGFnZSB3ZWJcblxuXG4vKipGb25jdGlvbiBxdWkgYWp1c3RlIGxhIGNvdWxldXIgZHUgYnVyZ2VyIChlbiBsdWkgYXR0cmlidWFudCB1bmUgY2xhc3NlKSBsb3JzcXUnaWwgZXN0IGVuIGRlaGFvcnMgZHVcbiAqIGhlYWRlciAocHJvYmxlbWUgZGUgY29udHJhc3RlIGVudHJlIGxlIGhlYWRlciBldCBsZSBtYWluKVxuICovXG5mdW5jdGlvbiBidXJnZXJDb2xvcigpIHtcbiAgICBsZXQgaGF1dGV1ck5hdiA9ICQoXCJuYXZcIikuaGVpZ2h0KCk7XG4gICAgbGV0IGhhdXRldXJIZWFkZXIgPSAkKFwiaGVhZGVyXCIpLmhlaWdodCgpO1xuICAgIGxldCBwb3NpdGlvbkNvbnRhY3QgPSAkKGRvY3VtZW50KS5oZWlnaHQoKSAtICQoXCIjY29udGFjdFwiKS5oZWlnaHQoKTtcbiAgICBsZXQgcG9zaXRpb25TY3JvbGwgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcblxuICAgIGlmIChwb3NpdGlvblNjcm9sbCA8IGhhdXRldXJIZWFkZXIgLSBoYXV0ZXVyTmF2IHx8IHBvc2l0aW9uU2Nyb2xsID4gcG9zaXRpb25Db250YWN0IC0gaGF1dGV1ck5hdikge1xuICAgICAgICAkKFwiLmxhLWJhcnNcIikucmVtb3ZlQ2xhc3MoXCJvdXRPZkhlYWRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiLmxhLWJhcnNcIikuYWRkQ2xhc3MoXCJvdXRPZkhlYWRlclwiKTtcbiAgICB9XG59XG5cbi8qKlxuICogRm9uY3Rpb24gcXVpIGRpcmlnZSBsJ3V0aWxpc2F0ZXVyIHZlcnMgbGEgcGFydGllIGR1IHNpdGUgcXUnaWwgc291aGFpdGVcbiAqIGVuIHNjcm9sbGluZ1xuICogQHBhcmFtIHsqfSBldmVudCBcbiAqL1xuZnVuY3Rpb24gZ29UbyhldmVudCkge1xuICAgIC8vT24gdmV1dCByw6ljdXDDqXJlciBsJ2lkZW50aWZpYW50IGRlIGwnw6lsw6ltZW50IGRlIGRlc3RpbmF0aW9uXG4gICAgLy9PbiByw6ljdXDDqHJlIGxhIHZhbGV1ciBkZSBsJ2F0dHJpYnV0IGhyZWYgZGUgbCfDqWzDqW1lbnQgYXBwZWxhbnQgPGE+XG4gICAgbGV0IHRhcmdldFBvc2l0aW9uID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICB0YXJnZXRQb3NpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0UG9zaXRpb24pO1xuICAgIC8vU2kgbGEgbG9uZ3VldXIgZGUgY2V0IG9iamV0IGVzdCBudWxsZSwgYydlc3QgcXVlIGwnw6lsw6ltZW50IGRlIGRlc3RpbmF0aW9uIG4nZXN0XG4gICAgLy9wYXMgZGFucyBsZSBtw6ptZSBmaWNoaWVyIHF1ZSBsYSBiYWxpc2UgPGE+IGFwcGVsbGFudGUuXG4gICAgaWYgKHRhcmdldFBvc2l0aW9uLmxlbmd0aCAhPSAwICYmIHRhcmdldFBvc2l0aW9uICE9IG51bGwpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy9FdCwgZGFucyBsZSBjYXMsIGxhIGJhbGlzZSBhcHBlbGFudGUgcmVtcGxpcmEgc2EgZm9uY3Rpb25uYWxpdMOpIGluaXRpYWxlXG4gICAgICAgIC8vU2kgYXUgY29udHJhaXJlIGwnw6lsw6ltZW50IGFwcGVsYW50IGV0IGwnw6lsw6ltZW50IGRlIGRlc3RpbmF0aW9uIHNvbnQgZGFucyBsZSBtw6ptZSBmaWNoaWVyLCBvbiByw6ljdXDDqHJlIGxhIHBvc2l0aW9uIHZlcnRpY2FsZSBkZSBsJ8OpbMOpbWVudCBkZSBkZXN0aW5hdGlvbiBkYW5zIGxlIGRvY3VtZW50XG4gICAgICAgIHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb24ub2Zmc2V0VG9wO1xuICAgICAgICAvL0xhIG3DqXRob2RlIHN1aXZhbnRlIGRpcmlnZSBsJ3V0aWxpc2F0ZXVyIHZlcnMgbCfDqWzDqW1lbnQgZGUgZGVzdGluYXRpb25cbiAgICAgICAgJCgnaHRtbCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXRQb3NpdGlvblxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogRm9uY3Rpb24gcXVpIHZhIHZlcnMgbCdhY2NldWlsIGVuIHNjcm9sbGluZ1xuICogQHBhcmFtIHsqfSBldmVudCBcbiAqL1xuZnVuY3Rpb24gZ29Ub0hvbWVTaXRlKCkge1xuICAgICQoJ2h0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==