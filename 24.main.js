(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./src/ninja.misc.js":
/*!***************************!*\
  !*** ./src/ninja.misc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(Buffer) {const tabSwitch = async function (walletTab) {\n  if (walletTab.className.indexOf(\"selected\") === -1) {\n    // unselect all tabs\n    const wallets = {\n      brainwallet: await __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.t.bind(null, /*! ./ninja.brainwallet.js */ \"./src/ninja.brainwallet.js\", 7)),\n      bulkwallet: await __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.t.bind(null, /*! ./ninja.bulkwallet.js */ \"./src/ninja.bulkwallet.js\", 7)),\n      detailwallet: await __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.t.bind(null, /*! ./ninja.detailwallet.js */ \"./src/ninja.detailwallet.js\", 7)),\n      paperwallet: await __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.t.bind(null, /*! ./ninja.paperwallet.js */ \"./src/ninja.paperwallet.js\", 7)),\n      singlewallet: await __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.t.bind(null, /*! ./ninja.singlewallet.js */ \"./src/ninja.singlewallet.js\", 7)),\n      donate: await __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.t.bind(null, /*! ./ninja.donatetab.js */ \"./src/ninja.donatetab.js\", 7))\n    };\n\n    for (const wType in wallets) {\n      if ({}.hasOwnProperty.call(wallets, wType)) {\n        document.getElementById(wType).className = \"tab\";\n        wallets[wType].close();\n      }\n    }\n\n    walletTab.className += \" selected\";\n    wallets[walletTab.getAttribute(\"id\")].open();\n  }\n};\n\nconst envSecurityCheck = async function () {\n  const translator = await __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.t.bind(null, /*! ./ninja.translator.js */ \"./src/ninja.translator.js\", 7));\n  let innerElement = createElement(\"div\", {});\n\n  switch (window.location.protocol) {\n    case \"http:\":\n    case \"https:\":\n      innerElement = createElement(\"span\", {\n        style: \"color: #990000;\"\n      }, translator.get(\"securitychecklistofflineNOK\"));\n      break;\n\n    case \"file:\":\n      innerElement = createElement(\"span\", {\n        style: \"color: #009900;\"\n      }, translator.get(\"securitychecklistofflineOK\"));\n      break;\n\n    default:\n  }\n\n  document.getElementById(\"envSecurityCheck\").appendChild(innerElement);\n};\n\nconst browserSecurityCheck = async function () {\n  var _window, _window$crypto;\n\n  const translator = await __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.t.bind(null, /*! ./ninja.translator.js */ \"./src/ninja.translator.js\", 7));\n  let innerElement;\n\n  if (typeof ((_window = window) === null || _window === void 0 ? void 0 : (_window$crypto = _window.crypto) === null || _window$crypto === void 0 ? void 0 : _window$crypto.getRandomValues) === \"function\") {\n    innerElement = createElement(\"span\", {\n      style: \"color: #009900;\"\n    }, translator.get(\"securitychecklistrandomOK\"));\n  } else {\n    innerElement = createElement(\"span\", {\n      style: \"color: #990000;\"\n    }, translator.get(\"securitychecklistrandomNOK\"));\n  }\n\n  document.getElementById(\"browserSecurityCheck\").appendChild(innerElement);\n};\n\nconst getQueryString = function () {\n  const result = {},\n        queryString = location.search.substring(1),\n        re = /([^&=]+)=([^&]*)/g;\n  let m;\n\n  while (m = re.exec(queryString)) {\n    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);\n  }\n\n  return result;\n};\n\nconst toggleFaqQuestion = function (elementId) {\n  const answerDiv = document.getElementById(elementId);\n  answerDiv.style.display = answerDiv.style.display === \"block\" ? \"none\" : \"block\";\n};\n\nconst printMany = async function () {\n  const paperwallet = await __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.t.bind(null, /*! ./ninja.paperwallet.js */ \"./src/ninja.paperwallet.js\", 7));\n  paperwallet.build(document.getElementById(\"paperpassphrase\").value, 10, function () {\n    window.print();\n  });\n};\n\nconst escapeRegExp = function (string) {\n  return string.replace(/[.*+?^=!:${}()|[\\]/\\\\]/g, Buffer.from(\"5c2426\", \"hex\").toString(\"utf8\"));\n};\n\nconst ev = function (selector, name, func) {\n  const list = document.querySelectorAll(selector);\n  Array.prototype.forEach.call(list, function (element) {\n    element.addEventListener(name, func, false);\n  });\n};\n\nconst createElement = function (n, v, content) {\n  const el = document.createElement(n);\n\n  for (const p in v) {\n    if ({}.hasOwnProperty.call(v, p) && v[p] !== undefined) {\n      el.setAttribute(p, v[p]);\n    }\n  }\n\n  if (content !== undefined) {\n    if (!Array.isArray(content)) {\n      content = [content];\n    }\n\n    for (let c of content) {\n      if (!c) {\n        continue;\n      } else if (typeof c === \"string\") {\n        c = document.createTextNode(c);\n      }\n\n      el.appendChild(c);\n    }\n  }\n\n  return el;\n};\n\nmodule.exports = {\n  tabSwitch,\n  envSecurityCheck,\n  browserSecurityCheck,\n  getQueryString,\n  toggleFaqQuestion,\n  printMany,\n  escapeRegExp,\n  ev,\n  createElement\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ \"./node_modules/node-libs-browser/node_modules/buffer/index.js\").Buffer))\n\n//# sourceURL=webpack:///./src/ninja.misc.js?");

/***/ })

}]);