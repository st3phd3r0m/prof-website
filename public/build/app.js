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
/* harmony import */ var _css_w3_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/w3.css */ "./assets/css/w3.css");
/* harmony import */ var _js_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/accordion.js */ "./assets/js/accordion.js");
/* harmony import */ var _js_accordion_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_accordion_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/scroll.js */ "./assets/js/scroll.js");
/* harmony import */ var _js_scroll_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_scroll_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_courrielForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/courrielForm.js */ "./assets/js/courrielForm.js");
/* harmony import */ var _js_courrielForm_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_courrielForm_js__WEBPACK_IMPORTED_MODULE_5__);
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
$(function () {
  // Sur le burger, on met un ecouteur, pour derouler/enrouler le menus principal
  $("#navMenu").on("click", openMenu);
  $(".success, .warning").delay(1500).hide(200);
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

/***/ "./assets/css/w3.css":
/*!***************************!*\
  !*** ./assets/css/w3.css ***!
  \***************************/
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-18e252","vendors-node_modules_core-js_modules_es_promise_js-node_modules_core-js_modules_web_timers_js","vendors-node_modules_core-js_modules_es_string_replace_js","assets_css_normalize_css-assets_css_w3_css"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvdXJyaWVsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3Mvbm9ybWFsaXplLmNzcz8yMzIzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvdzMuY3NzP2FlMDciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6WyIkIiwib24iLCJvcGVuTWVudSIsImRlbGF5IiwiaGlkZSIsIm5leHQiLCJzbGlkZURvd24iLCJkb2N1bWVudENsb3NlTWVudSIsImRvY3VtZW50Iiwib25lIiwiY2xvc2VNZW51Iiwic2xpZGVVcCIsImZpZWxkcyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsInJlZnJlc2giLCJvbkNoZWNrRmllbGRzIiwib2JzZXJ2ZXJDb25uZWN0IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJleHRyYWN0Rm9ybURhdGEiLCJjaGVja0ZpZWxkIiwiZWxlbWVudE9iamVjdCIsIm1pbkxlbmd0aCIsImF0dHIiLCJtYXhMZW5ndGgiLCJzdHIiLCJ2YWwiLCJsZW5ndGgiLCJ0ZXN0IiwiaW5kZXgiLCJkaXNjb25uZWN0IiwiZGlzYWJsZWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZvcm0iLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJzdWJ0cmVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3Rva2VuIiwibm9zaWFyIiwiZm9ybURhdGEiLCJmaWVsZCIsImlkIiwicmVwbGFjZSIsImVzY2FwZUh0bWwiLCJhamF4Q2FsbCIsInRleHQiLCJhZGRDbGFzcyIsInNob3ciLCJzZXRUaW1lb3V0IiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVtb3ZlQ2xhc3MiLCJtYXAiLCJtIiwiZ29Ub0hvbWVTaXRlIiwiZ29UbyIsImJ1cmdlckNvbG9yIiwiaGF1dGV1ck5hdiIsImhlaWdodCIsImhhdXRldXJIZWFkZXIiLCJwb3NpdGlvbkNvbnRhY3QiLCJwb3NpdGlvblNjcm9sbCIsInNjcm9sbFRvcCIsImV2ZW50IiwidGFyZ2V0UG9zaXRpb24iLCJvZmZzZXRUb3AiLCJhbmltYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQUEsQ0FBQyxDQUFDLFlBQVk7QUFDVjtBQUNBQSxHQUFDLENBQUMsVUFBRCxDQUFELENBQWNDLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEJDLFFBQTFCO0FBQ0FGLEdBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCRyxLQUF4QixDQUE4QixJQUE5QixFQUFvQ0MsSUFBcEMsQ0FBeUMsR0FBekM7QUFDSCxDQUpBLENBQUQ7QUFNQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0YsUUFBVCxHQUFvQjtBQUNoQkYsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxJQUFSLEdBQWVDLFNBQWYsQ0FBeUIsR0FBekIsRUFBOEJDLGlCQUE5QjtBQUNIO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQSxpQkFBVCxHQUE2QjtBQUN6QlAsR0FBQyxDQUFDUSxRQUFELENBQUQsQ0FBWUMsR0FBWixDQUFnQixPQUFoQixFQUF5QkMsU0FBekI7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQlYsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JXLE9BQXBCLENBQTRCLEdBQTVCO0FBQ0gsQzs7Ozs7Ozs7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LElBQVQsQ0FBY1EsS0FBZCxFQUFxQjtBQUNqQjtBQUNBO0FBQ0EsTUFBSUMsY0FBYyxHQUFHL0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRd0IsSUFBUixDQUFhLE1BQWIsQ0FBckI7QUFDQXVELGdCQUFjLEdBQUd2RSxRQUFRLENBQUNVLGFBQVQsQ0FBdUI2RCxjQUF2QixDQUFqQixDQUppQixDQUtqQjtBQUNBOztBQUNBLE1BQUlBLGNBQWMsQ0FBQ25ELE1BQWYsSUFBeUIsQ0FBekIsSUFBOEJtRCxjQUFjLElBQUksSUFBcEQsRUFBMEQ7QUFDdERELFNBQUssQ0FBQ25DLGNBQU4sR0FEc0QsQ0FDOUI7QUFDeEI7O0FBQ0FvQyxrQkFBYyxHQUFHQSxjQUFjLENBQUNDLFNBQWhDLENBSHNELENBSXREOztBQUNBaEYsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVaUYsT0FBVixDQUFrQjtBQUNkSixlQUFTLEVBQUVFO0FBREcsS0FBbEI7QUFHSDtBQUNKO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNWLFlBQVQsR0FBd0I7QUFDcEJyRSxHQUFDLENBQUMsTUFBRCxDQUFELENBQVVpRixPQUFWLENBQWtCO0FBQ2RKLGFBQVMsRUFBRTtBQURHLEdBQWxCO0FBR0gsQzs7Ozs7Ozs7Ozs7O0FDM0REOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL2Nzcy9ub3JtYWxpemUuY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0ICcuL2Nzcy93My5jc3MnO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJy4vanMvYWNjb3JkaW9uLmpzJztcbmltcG9ydCAnLi9qcy9zY3JvbGwuanMnO1xuaW1wb3J0ICcuL2pzL2NvdXJyaWVsRm9ybS5qcyc7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3VyIGxlIGJ1cmdlciwgb24gbWV0IHVuIGVjb3V0ZXVyLCBwb3VyIGRlcm91bGVyL2Vucm91bGVyIGxlIG1lbnVzIHByaW5jaXBhbFxuICAgICQoXCIjbmF2TWVudVwiKS5vbihcImNsaWNrXCIsIG9wZW5NZW51KTtcbiAgICAkKFwiLnN1Y2Nlc3MsIC53YXJuaW5nXCIpLmRlbGF5KDE1MDApLmhpZGUoMjAwKTtcbn0pO1xuXG4vKipcbiAqIEZvbmN0aW9uIHF1aSBkw6lyb3VsZS9lbnJvdWxlIGwnw6lsw6ltZW50IGh0bWwgc3VpdmFudFxuICovXG5mdW5jdGlvbiBvcGVuTWVudSgpIHtcbiAgICAkKHRoaXMpLm5leHQoKS5zbGlkZURvd24oMjAwLCBkb2N1bWVudENsb3NlTWVudSk7XG59XG5cbi8qKlxuICogRm9uY3Rpb24gcXVpIGFqb3V0ZSB1biBldmVudCBcImNsaWNrXCIgc3VyIGxlIGRvY3VtZW50IHBvdXIgZmVybWVyIGxlIG1lbnVcbiAqL1xuZnVuY3Rpb24gZG9jdW1lbnRDbG9zZU1lbnUoKSB7XG4gICAgJChkb2N1bWVudCkub25lKFwiY2xpY2tcIiwgY2xvc2VNZW51KTtcbn1cblxuLyoqXG4gKiBGb25jdGlvbiBxdWkgZW5yb3VsZSBsZXMgbWVudXMgc2Vjb25kYWlyZSBldCBwcmluY2lwYWxcbiAqL1xuZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgICQoXCIubWVudVByaW5jaXBhbFwiKS5zbGlkZVVwKDIwMCk7XG59IiwibGV0IGZpZWxkcztcbmxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHJlZnJlc2gpO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLnN1Y2Nlc3MsIC5mb3JtLWVycm9yLW1lc3NhZ2VcIikuZGVsYXkoMTUwMCkuaGlkZSgyMDApO1xuXG4gICAgLypWYWxpZGF0aW9uIGRlcyBjaGFtcHMgZHUgZm9ybXVsYWlyZSAqL1xuICAgIGZpZWxkcyA9ICQoXCIjY291cnJpZWxzIC5mb3JtLWNvbnRyb2xcIik7XG4gICAgb25DaGVja0ZpZWxkcygpO1xuICAgIGZpZWxkcy5vbigna2V5dXAnLCBvbkNoZWNrRmllbGRzKTtcbiAgICBvYnNlcnZlckNvbm5lY3QoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtPmJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXh0cmFjdEZvcm1EYXRhKTtcbn0pO1xuXG5mdW5jdGlvbiBjaGVja0ZpZWxkKGVsZW1lbnRPYmplY3QpIHtcbiAgICBsZXQgbWluTGVuZ3RoID0gJChlbGVtZW50T2JqZWN0KS5hdHRyKCdtaW5sZW5ndGgnKTtcbiAgICBsZXQgbWF4TGVuZ3RoID0gJChlbGVtZW50T2JqZWN0KS5hdHRyKCdtYXhsZW5ndGgnKTtcbiAgICBsZXQgc3RyID0gJChlbGVtZW50T2JqZWN0KS52YWwoKTtcbiAgICBpZiAoc3RyLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdHIubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ICBlbHNlIGlmICggL1smPD5cIiddLy50ZXN0KHN0cikgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9uQ2hlY2tGaWVsZHMoKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCFjaGVja0ZpZWxkKGZpZWxkc1tpbmRleF0pKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybT5idXR0b25cIikuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgb2JzZXJ2ZXJDb25uZWN0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09IGZpZWxkcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybT5idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG9ic2VydmVyQ29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZXJDb25uZWN0KCkge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShmb3JtLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEZvcm1EYXRhKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IF90b2tlbiA9ICQoXCIjY291cnJpZWxzX190b2tlblwiKS52YWwoKTtcbiAgICBsZXQgbm9zaWFyID0gJCgnI2NvdXJyaWVsc19ub3NpYXInKS52YWwoKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCA9PSBmYWxzZSAmJiBvbkNoZWNrRmllbGRzICYmIF90b2tlbiAhPVwiXCIgJiYgbm9zaWFyPT09XCJcIikge1xuICAgICAgICBsZXQgZm9ybURhdGEgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5pZC5yZXBsYWNlKCdjb3VycmllbHNfJywgJycpXSA9IGVzY2FwZUh0bWwoJChmaWVsZCkudmFsKCkpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1EYXRhLm5vc2lhciA9IGVzY2FwZUh0bWwobm9zaWFyKTtcbiAgICAgICAgZm9ybURhdGEuX3Rva2VuID0gZXNjYXBlSHRtbChfdG9rZW4pO1xuICAgICAgICBhamF4Q2FsbChmb3JtRGF0YSk7XG4gICAgfWVsc2V7XG4gICAgICAgICQoXCIjY291cnJpZWxfc2VudFwiKS50ZXh0KCdVbiBwcm9ibMOobWUgZXN0IHN1cm5lbnUuIExlIGNvdXJyaWVsIG5cXCdhIHBhcyDDqXTDqSBlbnJlZ2lzdHLDqS4nKS5hZGRDbGFzcyhcImZvcm0tZXJyb3ItbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChcIiNjb3VycmllbF9zZW50XCIpLmhpZGUoKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhamF4Q2FsbChmb3JtRGF0YSkge1xuICAgIGZldGNoKFxuICAgICAgICAnL2FwaS9jb3VycmllbHMvJyxcbiAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBmb3JtRGF0YS5fdG9rZW4sXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXG4gICAgICAgIH1cbiAgICApLnRoZW4oXG4gICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgZmllbGRzLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgJChcIiNlbWFpbF9zZW50XCIpLnRleHQoJ1ZvdHJlIG1lc3NhZ2UgYSBiaWVuIMOpdMOpIGVudm95w6kuIEplIHZvdXMgcsOpcG9uZHJhaSBkYW5zIGxlcyBwbHVzIGJyZWZzIGTDqWxhaXMuJykucmVtb3ZlQ2xhc3MoXCJmb3JtLWVycm9yLW1lc3NhZ2VcIikuYWRkQ2xhc3MoXCJzdWNjZXNzXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNlbWFpbF9zZW50XCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNlbWFpbF9zZW50XCIpLnRleHQoJ1VuIHByb2Jsw6htZSBlc3Qgc3VybmVudS4gTGUgY291cnJpZWwgblxcJ2EgcGFzIMOpdMOpIGVucmVnaXN0csOpLicpLnJlbW92ZUNsYXNzKFwic3VjY2Vzc1wiKS5hZGRDbGFzcyhcImZvcm0tZXJyb3ItbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjZW1haWxfc2VudFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNoZWNrRmllbGRzKCk7XG4gICAgICAgIH0sXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHtcbiAgICBsZXQgbWFwID1cbiAgICB7XG4gICAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAgICc+JzogJyZndDsnLFxuICAgICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICAgXCInXCI6ICcmIzAzOTsnXG4gICAgfTtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1smPD5cIiddL2csIGZ1bmN0aW9uIChtKSB7IHJldHVybiBtYXBbbV07IH0pO1xufSIsIi8vQXR0ZW50ZSBjaGFyZ2VtZW50IHBhZ2Ugd2ViXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBkb3VibGUgRmzDqGNoZSBlbiBiYXMgw6AgZHJvaXRlIGRlIGxhIGZlbmV0cmUgZW4gcG9zaXRpb246Zml4ZWQgcG91ciByZXRvdXIgw6AgbCdhY2NldWlsIGR1IHNpdGVcbiAgICAkKFwiI3Njcm9sbFwiKS5vbihcImNsaWNrXCIsIGdvVG9Ib21lU2l0ZSk7XG4gICAgLy8gQWxsZXIgdmVycyBsYSB6b25lIGR1IHNpdGUgZMOpc2lyw6llIGVuIHNjcm9sbGluZ1xuICAgICQoXCIubWVudVByaW5jaXBhbD5hXCIpLm9uKFwiY2xpY2tcIiwgZ29Ubyk7XG4gICAgLy9DaGFuZ2VyIGxhIGNvdWxldXIgZHUgYnVyZ2VyIHNlbG9uIHF1J2lsIGVzdCBlbiBkZWhvcnMgb3Ugbm9uIGR1IGhlYWRlclxuICAgIC8vIGJ1cmdlckNvbG9yKCk7XG4gICAgJChkb2N1bWVudCkub24oXCJzY3JvbGxcIiwgYnVyZ2VyQ29sb3IpO1xufSk7IC8vIEZpbiBjaGFyZ2VtZW50IHBhZ2Ugd2ViXG5cblxuLyoqRm9uY3Rpb24gcXVpIGFqdXN0ZSBsYSBjb3VsZXVyIGR1IGJ1cmdlciAoZW4gbHVpIGF0dHJpYnVhbnQgdW5lIGNsYXNzZSkgbG9yc3F1J2lsIGVzdCBlbiBkZWhhb3JzIGR1XG4gKiBoZWFkZXIgKHByb2JsZW1lIGRlIGNvbnRyYXN0ZSBlbnRyZSBsZSBoZWFkZXIgZXQgbGUgbWFpbilcbiAqL1xuZnVuY3Rpb24gYnVyZ2VyQ29sb3IoKSB7XG4gICAgbGV0IGhhdXRldXJOYXYgPSAkKFwibmF2XCIpLmhlaWdodCgpO1xuICAgIGxldCBoYXV0ZXVySGVhZGVyID0gJChcImhlYWRlclwiKS5oZWlnaHQoKTtcbiAgICBsZXQgcG9zaXRpb25Db250YWN0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCkgLSAkKFwiI2NvbnRhY3RcIikuaGVpZ2h0KCk7XG4gICAgbGV0IHBvc2l0aW9uU2Nyb2xsID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAocG9zaXRpb25TY3JvbGwgPCBoYXV0ZXVySGVhZGVyIC0gaGF1dGV1ck5hdiB8fCBwb3NpdGlvblNjcm9sbCA+IHBvc2l0aW9uQ29udGFjdCAtIGhhdXRldXJOYXYpIHtcbiAgICAgICAgJChcIi5sYS1iYXJzXCIpLnJlbW92ZUNsYXNzKFwib3V0T2ZIZWFkZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIi5sYS1iYXJzXCIpLmFkZENsYXNzKFwib3V0T2ZIZWFkZXJcIik7XG4gICAgfVxufVxuXG4vKipcbiAqIEZvbmN0aW9uIHF1aSBkaXJpZ2UgbCd1dGlsaXNhdGV1ciB2ZXJzIGxhIHBhcnRpZSBkdSBzaXRlIHF1J2lsIHNvdWhhaXRlXG4gKiBlbiBzY3JvbGxpbmdcbiAqIEBwYXJhbSB7Kn0gZXZlbnQgXG4gKi9cbmZ1bmN0aW9uIGdvVG8oZXZlbnQpIHtcbiAgICAvL09uIHZldXQgcsOpY3Vww6lyZXIgbCdpZGVudGlmaWFudCBkZSBsJ8OpbMOpbWVudCBkZSBkZXN0aW5hdGlvblxuICAgIC8vT24gcsOpY3Vww6hyZSBsYSB2YWxldXIgZGUgbCdhdHRyaWJ1dCBocmVmIGRlIGwnw6lsw6ltZW50IGFwcGVsYW50IDxhPlxuICAgIGxldCB0YXJnZXRQb3NpdGlvbiA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gICAgdGFyZ2V0UG9zaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFBvc2l0aW9uKTtcbiAgICAvL1NpIGxhIGxvbmd1ZXVyIGRlIGNldCBvYmpldCBlc3QgbnVsbGUsIGMnZXN0IHF1ZSBsJ8OpbMOpbWVudCBkZSBkZXN0aW5hdGlvbiBuJ2VzdFxuICAgIC8vcGFzIGRhbnMgbGUgbcOqbWUgZmljaGllciBxdWUgbGEgYmFsaXNlIDxhPiBhcHBlbGxhbnRlLlxuICAgIGlmICh0YXJnZXRQb3NpdGlvbi5sZW5ndGggIT0gMCAmJiB0YXJnZXRQb3NpdGlvbiAhPSBudWxsKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vRXQsIGRhbnMgbGUgY2FzLCBsYSBiYWxpc2UgYXBwZWxhbnRlIHJlbXBsaXJhIHNhIGZvbmN0aW9ubmFsaXTDqSBpbml0aWFsZVxuICAgICAgICAvL1NpIGF1IGNvbnRyYWlyZSBsJ8OpbMOpbWVudCBhcHBlbGFudCBldCBsJ8OpbMOpbWVudCBkZSBkZXN0aW5hdGlvbiBzb250IGRhbnMgbGUgbcOqbWUgZmljaGllciwgb24gcsOpY3Vww6hyZSBsYSBwb3NpdGlvbiB2ZXJ0aWNhbGUgZGUgbCfDqWzDqW1lbnQgZGUgZGVzdGluYXRpb24gZGFucyBsZSBkb2N1bWVudFxuICAgICAgICB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uLm9mZnNldFRvcDtcbiAgICAgICAgLy9MYSBtw6l0aG9kZSBzdWl2YW50ZSBkaXJpZ2UgbCd1dGlsaXNhdGV1ciB2ZXJzIGwnw6lsw6ltZW50IGRlIGRlc3RpbmF0aW9uXG4gICAgICAgICQoJ2h0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0UG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEZvbmN0aW9uIHF1aSB2YSB2ZXJzIGwnYWNjZXVpbCBlbiBzY3JvbGxpbmdcbiAqIEBwYXJhbSB7Kn0gZXZlbnQgXG4gKi9cbmZ1bmN0aW9uIGdvVG9Ib21lU2l0ZSgpIHtcbiAgICAkKCdodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogMFxuICAgIH0pO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=