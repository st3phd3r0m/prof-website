(self.webpackChunk=self.webpackChunk||[]).push([[886],{6970:(e,t,n)=>{var r=n(9755);function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(7327),n(1539),n(8674),n(2564),n(7042),n(8309),n(1038),n(8783),n(2526),n(1817),n(2165),n(6992),n(3948),n(9753);var o=[];function s(){var e={id:this.dataset.courrielid,token:r(this).siblings("input[type='hidden']").val()};this.checked?o.push(e):o=o.filter(u,e),0==o.length?r("#trash").addClass("d-none"):r("#trash").removeClass("d-none")}function u(e){return e.id!=this.id||e.token!=this.token}function l(){var e,t=0,n=a(o);try{var i=function(){var n=e.value;fetch("/admin/api/courriels/"+n.id,{method:"DELETE",mode:"same-origin",headers:{Authorization:n.token,"X-Requested-With":"XMLHttpRequest"}}).then((function(e){200==e.status?(r("#courriel_"+n.id).parents("tr").remove(),r("#message-api").html("Elément(s) supprimés"),r("#message-api").removeClass("d-none").addClass("alert-success")):(r("#message-api").html("Une erreur est survenue: "+e.status+" "+e.statusText),r("#message-api").removeClass("d-none").addClass("alert-warning")),++t==o.length&&function(){o=[];try{window.location.reload()}catch(e){console.log(e)}setTimeout((function(){r("#message-api").addClass("d-none")}),2e3)}()})).catch((function(e){r("#message-api").html("Une erreur est survenue: "+e.message),r("#message-api").removeClass("d-none").addClass("alert-danger")}))};for(n.s();!(e=n.n()).done;)i()}catch(e){n.e(e)}finally{n.f()}}r((function(){r("input[name^='delete_courriel_']").on("click",s),r("#confirm_delete").on("click",l)}))},7327:(e,t,n)=>{"use strict";var r=n(2109),a=n(2092).filter,i=n(1194),o=n(9207),s=i("filter"),u=o("filter");r({target:"Array",proto:!0,forced:!s||!u},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}},e=>{"use strict";e.O(0,[710,408],(()=>{return t=6970,e(e.s=t);var t}));e.O()}]);