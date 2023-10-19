(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e){var r=e.url,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=r,this._headers=n}var r,n;return r=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers,method:"GET"}).then((function(t){if(t.ok)return t.json();Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"getUserProfile",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"GET"}).then((function(t){if(t.ok)return t.json();Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"editUserProfile",value:function(t){return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){if(t.ok)return t.json();Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"addCard",value:function(t){var e=t.name;return fetch("".concat(this._url,"/cards/"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e})}).then((function(t){if(t.ok)return t.json();Promise.reject("Ошибка: ".concat(t.status," ").concat(t.statusText))}))}},{key:"deleteCard",value:function(t){}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._templateSelector=e,this._handleCardClick=n}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"_handleDelete",value:function(){this._cardElement.remove()}},{key:"_handleLike",value:function(){this._likeButton.classList.toggle("elements__like-button_active")}},{key:"_setEventListeners",value:function(){var t=this;this._cardElement.querySelector(".elements__delete-button").addEventListener("click",(function(){t._handleDelete()})),this._likeButton=this._cardElement.querySelector(".elements__like-button"),this._likeButton.addEventListener("click",(function(){t._handleLike()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._data.name,t._data.link)}))}},{key:"getCardId",value:function(){return this._data._id}},{key:"createCardElement",value:function(){return this._cardElement=this._getTemplate(),this._cardName=this._cardElement.querySelector(".elements__item-title"),this._cardImage=this._cardElement.querySelector(".elements__image"),this._setEventListeners(),this._cardName.textContent=this._data.name,this._cardImage.src=this._data.link,this._cardImage.alt=this._data.name,this._cardElement}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var a=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){var r=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),r.textContent=e,r.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._disableSubmitButton(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var m=function(){function t(e){var r=e.nameInputSelector,n=e.jobInputSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameInputSelector=document.querySelector(r),this._jobInputSelector=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._nameInputSelector.textContent,about:this._jobInputSelector.textContent}}},{key:"setUserInfo",value:function(t){this._nameInputSelector.textContent=t.name,this._jobInputSelector.textContent=t.about}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupSelector.addEventListener("click",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__button-close"))&&t.close()}))}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(n);if(o){var r=w(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.handleProfileFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._handleProfileFormSubmit=n,e._formPopup=e._popupSelector.querySelector(".popup__form"),e._inputListPopup=e._formPopup.querySelectorAll(".popup__form-input"),e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputListPopup.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;S(w(u.prototype),"setEventListeners",this).call(this),this._formPopup.addEventListener("submit",(function(e){e.preventDefault(),t._handleProfileFormSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){S(w(u.prototype),"close",this).call(this),this._formPopup.reset()}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},O.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(n);if(o){var r=C(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imagePopup=e._popupSelector.querySelector(".popup__image-fullscreen"),e._titlePopup=e._popupSelector.querySelector(".popup__fullscreen-title"),e}return e=u,(r=[{key:"open",value:function(t,e){this._imagePopup.src=e,this._imagePopup.alt=t,this._titlePopup.textContent=t,O(C(u.prototype),"open",this).call(this)}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},q.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(n);if(o){var r=B(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._formPopup=e._popupSelector.querySelector(".popup__form"),e}return e=u,(r=[{key:"setEventListeners",value:function(){var t=this;q(B(u.prototype),"setEventListeners",this).call(this),this._formPopup.addEventListener("submit",(function(e){e.preventDefault(),t.close()}))}}])&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(d),V=document.querySelector(".profile__edit-button"),A=document.querySelector(".popup_type_edit-profile"),D=A.querySelector(".popup__form-input_type_name"),U=A.querySelector(".popup__form-input_type_job"),F=document.querySelector(".profile__add-button"),N=document.querySelector(".popup_type_add-card"),G=N.querySelector(".popup__form_type_add-card"),J=G.querySelector(".popup__form-input_type_title"),M=G.querySelector(".popup__form-input_type_link"),z={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button-submit_disabled",inputErrorClass:"popup__form-input_type_error",errorClass:"popup__error_visible"};function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var $=new r({url:"https://mesto.nomoreparties.co/v1/cohort-77",headers:{authorization:"b60af95c-ee22-4623-b633-9ce86ed2ed6a","Content-Type":"application/json"}});Promise.all([$.getUserProfile(),$.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];o._id,i._id,Z.setUserInfo(o),Q.renderItems(i)})).catch((function(t){console.log("Ошибка: ".concat(t))}));var K=new f(z,N);K.enableValidation(),new f(z,A).enableValidation();var Q=new a({renderer:function(t){var e=X(t);Q.addItem(e)}},".elements__items"),W=new I(".popup_type_fullscreen");function X(t){return new i("#elements__template-item",t,rt).createCardElement()}var Y=new P({popupSelector:"#popup_type_add-card",handleProfileFormSubmit:function(t){var e=X({name:t[J.name],link:t[M.name]});Q.addItem(e)}}),Z=new m({nameInputSelector:".profile__author-name",jobInputSelector:".profile__author-description"}),tt=new P({popupSelector:"#popup_type_edit-profile",handleProfileFormSubmit:function(t){$.editUserProfile({name:t.name,about:t.job}).then((function(t){Z.setUserInfo(t)})).catch((function(t){console.log(t)}))}}),et=new x("#popup_confirm");function rt(t,e){W.open(t,e)}W.setEventListeners(),Y.setEventListeners(),tt.setEventListeners(),et.setEventListeners(),F.addEventListener("click",(function(){Y.open(),K.resetValidation()})),V.addEventListener("click",(function(){var t;tt.open(),t=Z.getUserInfo(),D.value=t.name,U.value=t.about}))})();