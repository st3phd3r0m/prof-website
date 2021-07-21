(self["webpackChunk"] = self["webpackChunk"] || []).push([["adminDeleteCourriels"],{

/***/ "./assets/js/adminDeleteCourriels.js":
/*!*******************************************!*\
  !*** ./assets/js/adminDeleteCourriels.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

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

var courrielsToDelete = [];
$(function () {
  $("input[name^='delete_courriel_']").on('click', onStoreCourrielsToDelete);
  $("#confirm_delete").on('click', deleteCourriels);
});

function onStoreCourrielsToDelete() {
  var object = {
    'id': this.dataset.courrielid,
    'token': $(this).siblings("input[type='hidden']").val()
  };

  if (this.checked) {
    courrielsToDelete.push(object);
  } else {
    courrielsToDelete = courrielsToDelete.filter(isItStored, object);
  }

  toogleTrash();
}

function isItStored(el) {
  return el.id != this.id || el.token != this.token;
}

function toogleTrash() {
  if (courrielsToDelete.length == 0) {
    $("#trash").addClass('d-none');
  } else {
    $("#trash").removeClass('d-none');
  }
}

function deleteCourriels() {
  var doneCount = 0;

  var _iterator = _createForOfIteratorHelper(courrielsToDelete),
      _step;

  try {
    var _loop = function _loop() {
      var courriel = _step.value;
      fetch('/admin/api/courriels/' + courriel.id, {
        method: 'DELETE',
        mode: 'same-origin',
        headers: {
          "Authorization": courriel.token,
          "X-Requested-With": 'XMLHttpRequest'
        }
      }).then(function (response) {
        if (response.status == 200) {
          $("#courriel_" + courriel.id).parents("tr").remove();
          $("#message-api").html("Elément(s) supprimés");
          $("#message-api").removeClass("d-none").addClass('alert-success');
        } else {
          $("#message-api").html("Une erreur est survenue: " + response.status + " " + response.statusText);
          $("#message-api").removeClass("d-none").addClass('alert-warning');
        }

        doneCount++;

        if (doneCount == courrielsToDelete.length) {
          tryToRefresh();
        }
      })["catch"](function (error) {
        $("#message-api").html("Une erreur est survenue: " + error.message);
        $("#message-api").removeClass("d-none").addClass('alert-danger');
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function tryToRefresh() {
  courrielsToDelete = [];

  try {
    window.location.reload();
  } catch (error) {
    console.log(error);
  }

  setTimeout(function () {
    $("#message-api").addClass("d-none");
  }, 2000);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-18e252","vendors-node_modules_core-js_modules_es_promise_js-node_modules_core-js_modules_web_timers_js"], () => (__webpack_exec__("./assets/js/adminDeleteCourriels.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW5EZWxldGVDb3VycmllbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiXSwibmFtZXMiOlsiY291cnJpZWxzVG9EZWxldGUiLCIkIiwib24iLCJvblN0b3JlQ291cnJpZWxzVG9EZWxldGUiLCJkZWxldGVDb3VycmllbHMiLCJvYmplY3QiLCJkYXRhc2V0IiwiY291cnJpZWxpZCIsInNpYmxpbmdzIiwidmFsIiwiY2hlY2tlZCIsInB1c2giLCJmaWx0ZXIiLCJpc0l0U3RvcmVkIiwidG9vZ2xlVHJhc2giLCJlbCIsImlkIiwidG9rZW4iLCJsZW5ndGgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZG9uZUNvdW50IiwiY291cnJpZWwiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwicGFyZW50cyIsInJlbW92ZSIsImh0bWwiLCJzdGF0dXNUZXh0IiwidHJ5VG9SZWZyZXNoIiwiZXJyb3IiLCJtZXNzYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGlCQUFpQixHQUFHLEVBQXhCO0FBRUFDLENBQUMsQ0FBQyxZQUFZO0FBQ1ZBLEdBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDQyxFQUFyQyxDQUF3QyxPQUF4QyxFQUFpREMsd0JBQWpEO0FBRUFGLEdBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCQyxFQUFyQixDQUF3QixPQUF4QixFQUFpQ0UsZUFBakM7QUFDSCxDQUpBLENBQUQ7O0FBT0EsU0FBU0Qsd0JBQVQsR0FBb0M7QUFDaEMsTUFBSUUsTUFBTSxHQUFHO0FBQ1QsVUFBTSxLQUFL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QkMsTUFBaEI7QUFDSCxHQUZELENBRUUsT0FBT0osS0FBUCxFQUFjO0FBQ1pLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaO0FBQ0g7O0FBQ0RPLFlBQVUsQ0FBQyxZQUFZO0FBQ25CekMsS0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmtCLFFBQWxCLENBQTJCLFFBQTNCO0FBQ0gsR0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEM7Ozs7Ozs7Ozs7O0FDOUVZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLHFIQUE4QztBQUM1RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQTZEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYWRtaW5EZWxldGVDb3VycmllbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY291cnJpZWxzVG9EZWxldGUgPSBbXTtcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJChcImlucHV0W25hbWVePSdkZWxldGVfY291cnJpZWxfJ11cIikub24oJ2NsaWNrJywgb25TdG9yZUNvdXJyaWVsc1RvRGVsZXRlKTtcblxuICAgICQoXCIjY29uZmlybV9kZWxldGVcIikub24oJ2NsaWNrJywgZGVsZXRlQ291cnJpZWxzKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIG9uU3RvcmVDb3VycmllbHNUb0RlbGV0ZSgpIHtcbiAgICBsZXQgb2JqZWN0ID0ge1xuICAgICAgICAnaWQnOiB0aGlzLmRhdGFzZXQuY291cnJpZWxpZCxcbiAgICAgICAgJ3Rva2VuJzogJCh0aGlzKS5zaWJsaW5ncyhcImlucHV0W3R5cGU9J2hpZGRlbiddXCIpLnZhbCgpXG4gICAgfTtcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIGNvdXJyaWVsc1RvRGVsZXRlLnB1c2gob2JqZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VycmllbHNUb0RlbGV0ZSA9IGNvdXJyaWVsc1RvRGVsZXRlLmZpbHRlcihpc0l0U3RvcmVkLCBvYmplY3QpO1xuICAgIH1cbiAgICB0b29nbGVUcmFzaCgpO1xufVxuXG5mdW5jdGlvbiBpc0l0U3RvcmVkKGVsKSB7XG4gICAgcmV0dXJuIChlbC5pZCAhPSB0aGlzLmlkKSB8fCAoZWwudG9rZW4gIT0gdGhpcy50b2tlbik7XG59XG5cbmZ1bmN0aW9uIHRvb2dsZVRyYXNoKCkge1xuICAgIGlmIChjb3VycmllbHNUb0RlbGV0ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAkKFwiI3RyYXNoXCIpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI3RyYXNoXCIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUNvdXJyaWVscygpIHtcblxuICAgIGxldCBkb25lQ291bnQgPSAwO1xuICAgIGZvciAobGV0IGNvdXJyaWVsIG9mIGNvdXJyaWVsc1RvRGVsZXRlKSB7XG4gICAgICAgIGZldGNoKFxuICAgICAgICAgICAgJy9hZG1pbi9hcGkvY291cnJpZWxzLycgKyBjb3VycmllbC5pZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogY291cnJpZWwudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICQoXCIjY291cnJpZWxfXCIgKyBjb3VycmllbC5pZCkucGFyZW50cyhcInRyXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICQoXCIjbWVzc2FnZS1hcGlcIikuaHRtbChcIkVsw6ltZW50KHMpIHN1cHByaW3DqXNcIik7XG4gICAgICAgICAgICAgICAgJChcIiNtZXNzYWdlLWFwaVwiKS5yZW1vdmVDbGFzcyhcImQtbm9uZVwiKS5hZGRDbGFzcygnYWxlcnQtc3VjY2VzcycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI21lc3NhZ2UtYXBpXCIpLmh0bWwoXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZTogXCIgKyByZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICQoXCIjbWVzc2FnZS1hcGlcIikucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIikuYWRkQ2xhc3MoJ2FsZXJ0LXdhcm5pbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmVDb3VudCsrO1xuICAgICAgICAgICAgaWYgKGRvbmVDb3VudCA9PSBjb3VycmllbHNUb0RlbGV0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0cnlUb1JlZnJlc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAkKFwiI21lc3NhZ2UtYXBpXCIpLmh0bWwoXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZTogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICQoXCIjbWVzc2FnZS1hcGlcIikucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIikuYWRkQ2xhc3MoJ2FsZXJ0LWRhbmdlcicpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRyeVRvUmVmcmVzaCgpe1xuICAgIGNvdXJyaWVsc1RvRGVsZXRlID0gW107XG4gICAgdHJ5IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjbWVzc2FnZS1hcGlcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfSwgMjAwMCk7XG59IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=