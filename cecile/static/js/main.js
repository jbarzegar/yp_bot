(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var discordUrl="https://discordapp.com",api={getDiscordUser:function(e){console.log(e)}};exports.default=api;

},{}],2:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _helpers=require("./helpers"),_helpers2=_interopRequireDefault(_helpers),_api=require("./api"),_api2=_interopRequireDefault(_api),auth={checkForKey:function(){var e=_helpers2.default.getQueryStringByName("code");if(e)return window.localStorage.setItem("bot_key",e),_helpers2.default.stripQueryString();null===e&&_helpers2.default.stripQueryString();var t=window.localStorage.getItem("bot_key");return t?_api2.default.getDiscordUser(t):void console.info("No key found.  Must login")},signOut:function(){window.localStorage.remoteItem("bot_key")}};exports.default=auth;

},{"./api":1,"./helpers":3}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var helpers={getQueryStringByName:function(e,r){r||(r=window.location.href);var t=/[[\]]/g,n=e.replace(t,"\\$&"),o=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)").exec(r);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null},stripQueryString:function(){window.history.replaceState({},null,"/")}};exports.default=helpers;

},{}],4:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _auth=require("./auth"),_auth2=_interopRequireDefault(_auth);_auth2.default.checkForKey();

},{"./auth":2}]},{},[4]);
