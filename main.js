/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  /* color: white; */\n}\nbody {\n  background-color: #001d3d;\n}\n\n.title {\n  font-family: \"Michroma\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 1fr 0.4fr;\n  grid-template-rows: 0.4fr 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"main main\";\n  /* border: 5px solid white; */\n}\n.header {\n  grid-area: header;\n  display: flex;\n\n  flex-direction: column;\n  /* border: 5px solid white; */\n  padding: 20px;\n}\n.title {\n  color: #fefae0;\n  align-self: center;\n  font-size: 47px;\n}\n\n.logo {\n  display: block;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 130px;\n  border-radius: 50%;\n  opacity: 60%;\n}\n\nimg {\n  display: block;\n}\n.main-container {\n  grid-area: main;\n  /* border: 5px dotted red; */\n  display: grid;\n  gap: 20px;\n  grid-template-columns: 1fr 0.4fr;\n  grid-template-rows: auto;\n  grid-template-areas: \"item sideline\";\n  color: black;\n  height: 100%;\n  margin: 20px;\n  font-family: \"Michroma\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 33px;\n  padding: 23px;\n}\n.item-container {\n  grid-area: item;\n  /* border: 5px solid white; */\n  background-color: #003566;\n  border-radius: 9%;\n  color: #fefae0;\n  font-family: \"Michroma\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 33px;\n  padding: 23px;\n}\n.side-container {\n  grid-area: sideline;\n  background-color: #ffc300;\n  color: black;\n  padding: 23px;\n  border-radius: 11%;\n}\n.side-title,\n.item-title {\n  font-size: 43px;\n  padding-bottom: 17px;\n}\n\n.project,\n.task {\n  font-size: 23px;\n  background-color: #001d3d;\n  margin: 10px;\n  border-radius: 9%;\n  height: auto;\n  padding: 10px;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr 50px 50px 50px;\n  gap: 10px;\n  align-items: center;\n  align-content: center;\n}\n.edit-button,\n.close,\n.delete,\n.done,\n.save-project,\n.cancel-project,\ninput,\nselect {\n  height: 35px;\n  background-color: #ffd60a;\n  color: black;\n  /* width: 50px; */\n  /* border-radius: 21%; */\n}\n.delete {\n  grid-column-start: 4;\n}\n.project {\n  background-color: #ffd60a;\n}\nbutton.task {\n  background-color: #ffd60a;\n  display: flex;\n}\nbutton.project {\n  background-color: #001d3d;\n  color: #fefae0;\n  display: flex;\n}\nbutton.project:hover {\n  opacity: 100%;\n}\n.new-project {\n  display: grid;\n  flex-basis: 20em;\n  justify-content: center;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-template-areas:\n    \"input input\"\n    \"save cancel\";\n  padding: 10px;\n  gap: 10px;\n  align-items: center;\n  align-content: center;\n  font-family: \"Michroma\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\ninput.add-project-title {\n  background-color: #001d3d;\n  color: #fefae0;\n  font-size: 31px;\n  border-radius: 3%;\n  grid-area: input;\n  width: auto;\n  /* margin: 10px; */\n}\nbutton.cancel-project {\n  font-size: 25px;\n}\nbutton.save-project {\n  grid-area: save;\n  font-size: 25px;\n}\nbutton:hover {\n  background-color: #003566;\n  color: #fefae0;\n}\n.new-task-container {\n  display: grid;\n  color: black;\n  width: auto;\n  padding: 13px;\n  gap: 9px;\n  /* background-color: #ffc300; */\n  /* font-size: 27px; */\n}\n.new-task-container > input,\n.new-task-container > select {\n  font-size: 25px;\n  border: 2px solid #003566;\n}\n.task-button-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  padding: 10px;\n  gap: 10px;\n  align-items: center;\n  align-content: center;\n  font-family: \"Michroma\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\nbutton.save-task,\nbutton.cancel-task {\n  background-color: #ffd60a;\n  height: 35px;\n  color: black;\n  font-size: 25px;\n}\na.project.active {\n  background-color: #fefae0;\n}\na.task.finished {\n  opacity: 100%;\n  /* text-decoration: line-through; */\n  background-color: #8d99ae;\n}\na.task.finished > .task-title {\n  text-decoration: line-through;\n}\na.edit-container {\n  display: grid;\n  height: auto;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas:\n    \"title title\"\n    \"desc desc\"\n    \"date priority\"\n    \"button button\";\n}\na.edit-container > .task-title {\n  grid-area: title;\n}\na.edit-container > .task-description {\n  grid-area: desc;\n}\na.edit-container > .task-date {\n  grid-area: date;\n}\na.edit-container > .priority {\n  grid-area: priority;\n}\na.edit-container > .task-title {\n  grid-area: title;\n}\na.edit-container > .task-button-container {\n  grid-area: button;\n}\n/* .task-button-container > .canceltask {\n  grid-area: cancelEdit;\n} */\na.view-task {\n  /* background-color: #fefae0;\n  color: #003566; */\n  display: grid;\n  grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr;\n  grid-template-columns: 1fr;\n  height: auto;\n  font-size: 17px;\n}\na.view-task > .task-title {\n  font-weight: bold;\n  font-size: 25px;\n}\n.high {\n  background-color: #d00000;\n}\n.medium {\n  background-color: #e85d04;\n}\n.low {\n  background-color: #faa307;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odinproject-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odinproject-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odinproject-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odinproject-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odinproject-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odinproject-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odinproject-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odinproject-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odinproject-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayManager: () => (/* binding */ DisplayManager)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _img_fastRabbit_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/fastRabbit.jpeg */ \"./src/img/fastRabbit.jpeg\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nconst createDomElement = (parentElement, type, className, text = \"\") => {\n  const newElement = document.createElement(type);\n  newElement.classList.add(className);\n  if (text !== \"\") {\n    newElement.textContent = text;\n  }\n  parentElement.append(newElement);\n  return newElement;\n};\nconst createInputElement = (parentElement, type, className, placeholder) => {\n  const newInput = document.createElement(\"input\");\n  newInput.type = `${type}`;\n  newInput.classList.add(`${className}`);\n  newInput.placeholder = `${placeholder}`;\n  parentElement.append(newInput);\n  return newInput;\n};\nconst createHeader = () => {\n  const contentBlock = document.getElementById(\"content\");\n  const headerContainer = createDomElement(contentBlock, \"div\", \"header\");\n  const logo = createDomElement(headerContainer, \"img\", \"logo\");\n  createDomElement(headerContainer, \"div\", \"title\", \"TaskRabbit\");\n  logo.src = _img_fastRabbit_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n};\nconst createMainContainer = () => {\n  const contentBlock = document.getElementById(\"content\");\n  const mainContainer = createDomElement(contentBlock, \"div\", \"main-container\");\n\n  let itemContainer = createDomElement(mainContainer, \"div\", \"item-container\");\n\n  let sideLine = createDomElement(mainContainer, \"div\", \"side-container\");\n};\nconst createSideBar = () => {\n  const container = document.querySelector(\".side-container\");\n\n  // containerTitle.textContent = \"Categories\";\n};\nconst addNewItemButton = (container, type) => {\n  const buttonContainer = createDomElement(\n    container,\n    \"div\",\n    `add-${type.toLowerCase()}`\n  );\n  const newContainerButton = createDomElement(\n    buttonContainer,\n    \"button\",\n    `${type.toLowerCase()}`\n  );\n  newContainerButton.addEventListener(\"click\", () => {\n    const taskTitle = document.querySelector(\".task-title\");\n    const taskDescription = document.querySelector(\".task-description\");\n    if (type === \"Project\") {\n      createNewProject();\n    }\n    if (type === \"Task\") {\n      createNewTask();\n    }\n  });\n  newContainerButton.textContent = `Add New ${type}`;\n};\nconst displayEditTask = (newItem, task) => {\n  newItem.textContent = \"\";\n  newItem.classList.add(\"edit-container\");\n  createTaskInputs(newItem, true);\n  createTaskPriority(newItem, true);\n  createTaskButtons(newItem, true, task);\n  const editFields = document.querySelectorAll(\".edit\");\n  editFields.forEach((field) => {\n    if (field.classList.contains(\"task-title\")) {\n      field.value = task.title;\n    }\n    if (field.classList.contains(\"task-description\")) {\n      field.value = task.description;\n    }\n    if (field.classList.contains(\"task-date\")) {\n      field.value = task.date;\n    }\n    if (field.classList.contains(\"priority\")) {\n      field.value = task.priority;\n    }\n  });\n};\n\nconst displayTask = (container, task, count) => {\n  let newItem = createDomElement(container, \"a\", `task`);\n  newItem.classList.add(`${count}`);\n  const title = createDomElement(newItem, \"div\", `task-title`, `${task.title}`);\n\n  title.addEventListener(\"click\", () => {\n    viewTaskDetails(newItem, task);\n  });\n  const done = createDomElement(newItem, \"button\", \"done\", \"Done\");\n  done.addEventListener(\"click\", () => {\n    _project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.getActiveProject().completeTask(task.title);\n    newItem.classList.add(\"finished\");\n    _project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.getActiveProject().getTasks();\n  });\n  const edit = createDomElement(newItem, \"button\", `edit-button`, \"Edit\");\n  edit.addEventListener(\"click\", () => {\n    displayEditTask(newItem, task);\n  });\n  const deleteItem = createDomElement(newItem, \"button\", `delete`, \"Delete\");\n  deleteItem.addEventListener(\"click\", () => {\n    _project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.getActiveProject().removeTask(task.title);\n    DisplayManager.renderTasks(_project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.getActiveProject().getTasks());\n    DisplayManager.renderProjects();\n  });\n  return newItem;\n};\nconst displayItem = (container, itemName, type, count) => {\n  let newItem = createDomElement(container, \"a\", `${type}`);\n  newItem.classList.add(`${count}`);\n  const title = createDomElement(\n    newItem,\n    \"div\",\n    `${type}-title`,\n    `${itemName}`\n  );\n  const deleteItem = createDomElement(newItem, \"button\", `delete`, \"Delete\");\n  deleteItem.addEventListener(\"click\", () => {\n    _project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.removeProject(itemName);\n    DisplayManager.renderProjects();\n  });\n  return newItem;\n};\n\nconst createNewProject = () => {\n  const sideContainer = document.querySelector(\".side-container\");\n\n  const addProjectContainer = document.querySelector(\".add-project\");\n  addProjectContainer.textContent = \"\";\n  const newProjectContainer = createDomElement(\n    addProjectContainer,\n    \"div\",\n    \"new-project\"\n  );\n  const inputName = createInputElement(\n    newProjectContainer,\n    \"text\",\n    \"add-project-title\",\n    \"New Category\"\n  );\n  const saveButton = createDomElement(\n    newProjectContainer,\n    \"button\",\n    \"save-project\"\n  );\n  saveButton.textContent = \"Save\";\n  saveButton.addEventListener(\"click\", () => {\n    const input = document.querySelector(\".add-project-title\").value;\n    const newProject = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.addProject(input);\n    _project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.setActive(newProject.getName());\n    DisplayManager.renderProjects();\n    DisplayManager.renderTasks(newProject.getTasks());\n    _home__WEBPACK_IMPORTED_MODULE_2__.home;\n  });\n  const cancelButton = createDomElement(\n    newProjectContainer,\n    \"button\",\n    \"cancel-project\"\n  );\n  cancelButton.textContent = \"Cancel\";\n  cancelButton.addEventListener(\"click\", () => {\n    DisplayManager.renderProjects();\n  });\n};\nconst createTaskInputs = (container, editing = false) => {\n  const taskTitle = createInputElement(\n    container,\n    \"text\",\n    \"task-title\",\n    \"Title\"\n  );\n  const taskDescription = createInputElement(\n    container,\n    \"text\",\n    \"task-description\",\n    \"Description\"\n  );\n  const taskDate = createInputElement(container, \"date\", \"task-date\", \"\");\n  if (editing === true) {\n    taskTitle.classList.add(\"edit\");\n    taskDescription.classList.add(\"edit\");\n    taskDate.classList.add(\"edit\");\n  }\n};\nconst createTaskPriority = (container, editing = false) => {\n  const taskPriority = createDomElement(container, \"select\", \"priority\");\n  const priorityHigh = createDomElement(\n    taskPriority,\n    \"option\",\n    \"level\",\n    \"High\"\n  );\n  priorityHigh.value = \"High\";\n  const priorityMedium = createDomElement(\n    taskPriority,\n    \"option\",\n    \"level\",\n    \"Medium\"\n  );\n  priorityMedium.value = \"Medium\";\n  const priorityLow = createDomElement(taskPriority, \"option\", \"level\", \"Low\");\n  priorityLow.value = \"Low\";\n  if (editing === true) {\n    taskPriority.classList.add(\"edit\");\n  }\n};\nconst createTaskButtons = (container, editing = false, task = null) => {\n  const newTaskButtonContainer = createDomElement(\n    container,\n    \"div\",\n    \"task-button-container\"\n  );\n  const saveTask = createDomElement(\n    newTaskButtonContainer,\n    \"button\",\n    \"save-task\",\n    \"Save\"\n  );\n  const cancelTask = createDomElement(\n    newTaskButtonContainer,\n    \"button\",\n    \"cancel-task\",\n    \"Cancel\"\n  );\n\n  saveTask.addEventListener(\"click\", () => {\n    const activeProject = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.getActiveProject();\n    let taskTitle = document.querySelector(\"input.task-title\").value;\n    let taskDescription = document.querySelector(\n      \"input.task-description\"\n    ).value;\n    let taskDate = document.querySelector(\"input.task-date\").value;\n    let taskPriority = document.querySelector(\"select.priority\").value;\n    if (!taskTitle) {\n      alert(\"Task title cannot be empty.\");\n      return;\n    }\n    if (!activeProject) {\n      alert(\"Select a project\");\n      return;\n    }\n    if (editing === false) {\n      activeProject.addTask(\n        taskTitle,\n        taskDescription,\n        taskDate,\n        taskPriority,\n        false\n      );\n    }\n    if (editing === true) {\n      activeProject.updateTask(\n        task.title,\n        taskTitle,\n        taskDescription,\n        taskDate,\n        taskPriority\n      );\n    }\n    DisplayManager.renderTasks(activeProject.getTasks());\n    taskTitle = \"\";\n    taskDescription = \"\";\n    taskDate = \"\";\n    taskPriority = \"\";\n  });\n\n  cancelTask.addEventListener(\"click\", () => {\n    DisplayManager.renderTasks(_project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.getActiveProject().getTasks());\n  });\n};\nconst createNewTask = () => {\n  const addTaskContainer = document.querySelector(\".add-task\");\n  addTaskContainer.textContent = \"\";\n  const newTaskContainer = createDomElement(\n    addTaskContainer,\n    \"div\",\n    \"new-task-container\"\n  );\n  createTaskInputs(newTaskContainer);\n  createTaskPriority(newTaskContainer);\n  createTaskButtons(newTaskContainer);\n};\nconst viewTaskDetails = (itemContainer, task) => {\n  itemContainer.classList.add(\"view-task\");\n  itemContainer.textContent = \"\";\n  const title = createDomElement(\n    itemContainer,\n    \"div\",\n    \"task-title\",\n    task.title\n  );\n  const description = createDomElement(\n    itemContainer,\n    \"div\",\n    \"task-description\",\n    `Description: ${task.description}`\n  );\n  let dateDisplay = \"\";\n  if (task.date === undefined) {\n    dateDisplay = \"No due date\";\n  } else {\n    dateDisplay = `Due: ${task.date}`;\n  }\n  const date = createDomElement(itemContainer, \"div\", \"task-date\", dateDisplay);\n  if (task.priority === undefined) {\n    task.priority = \"Low\";\n  }\n  const priority = createDomElement(\n    itemContainer,\n    \"div\",\n    \"priority\",\n    `Priority: ${task.priority}`\n  );\n  title.classList.add(\"view\");\n  description.classList.add(\"view\");\n  date.classList.add(\"view\");\n  priority.classList.add(\"view\");\n  const close = createDomElement(itemContainer, \"button\", \"close\", \"Close\");\n  close.addEventListener(\"click\", () => {\n    DisplayManager.renderTasks(_project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.getActiveProject().getTasks());\n  });\n};\nconst displayPriorityColor = (container, task) => {\n  if (task.priority === \"High\") {\n    container.classList.add(\"high\");\n  } else if (task.priority === \"Medium\") {\n    container.classList.add(\"medium\");\n  } else {\n    container.classList.add(\"low\");\n  }\n};\nconst DisplayManager = (() => {\n  const renderProjects = () => {\n    let count = 0;\n    const sideContainer = document.querySelector(\".side-container\");\n    sideContainer.textContent = \"\";\n    createDomElement(sideContainer, \"div\", \"side-title\", \"Categories\");\n    _project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.getProjects().forEach((project) => {\n      const item = displayItem(\n        sideContainer,\n        project.getName(),\n        \"project\",\n        count++\n      );\n      if (_project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.getActiveProject() === project) {\n        item.classList.add(\"active\");\n      }\n      item.addEventListener(\"click\", () => {\n        _project__WEBPACK_IMPORTED_MODULE_0__.ProjectManager.setActive(project.getName());\n        renderProjects(); // Re-render UI to highlight selection\n        renderTasks(project.getTasks());\n      });\n    });\n    addNewItemButton(sideContainer, \"Project\");\n  };\n  const renderTasks = (tasks) => {\n    let count = 0;\n    const taskContainer = document.querySelector(\".item-container\");\n    taskContainer.textContent = \"\";\n    createDomElement(taskContainer, \"div\", \"item-title\", \"Tasks\");\n    tasks.forEach((task) => {\n      const item = displayTask(taskContainer, task, count++);\n      if (task.complete == true) {\n        item.classList.add(\"finished\");\n      }\n      displayPriorityColor(item, task);\n    });\n    addNewItemButton(taskContainer, \"Task\");\n  };\n  const renderPage = () => {\n    createHeader();\n    createMainContainer();\n    createSideBar();\n    renderProjects();\n  };\n  const renderNewProject = (name) => {\n    createNewProject(name);\n  };\n  const renderNewTask = () => {\n    createNewTask();\n  };\n\n  return {\n    renderPage,\n    renderProjects,\n    renderTasks,\n    renderNewProject,\n    renderNewTask,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://odinproject-todo/./src/display.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst home = (function () {\n  const project1 = _project__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.addProject(\"The Odin Project\");\n  project1.addTask(\n    \"Finish Organizing Your Javascript Code\",\n    \"Complete the ToDo project\",\n    \"2025-03-27\",\n    \"High\"\n  );\n  project1.addTask(\n    \"Finish Javascript in the Real World\",\n    \"Answer: What is ES6?\",\n    \"2025-03-28\",\n    \"Medium\"\n  );\n  project1.addTask(\n    \"Finish Introduction\",\n    \"Complete Quick Review\",\n    \"03-10-2025\",\n    \"Medium\",\n    true\n  );\n  const project2 = _project__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.addProject(\"Business\");\n  project2.addTask(\n    \"Order Business Cards\",\n    \"Develop custom design\",\n    \"2025-03-31\",\n    \"High\"\n  );\n  project2.addTask(\"Create Prints\", \"Buy Scanner, order prints\");\n\n  const project3 = _project__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.addProject(\"Personal\");\n  project3.addTask(\"Go to Gym\", \"Leg day\", \"03-03-2025\");\n  project3.addTask(\n    \"Call Grandparents\",\n    \"make plans to hang out\",\n    \"03-03-2025\",\n    \"top\",\n    true\n  );\n\n  _project__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.setActive(project1.getName());\n  _display__WEBPACK_IMPORTED_MODULE_0__.DisplayManager.renderPage(project1);\n  _display__WEBPACK_IMPORTED_MODULE_0__.DisplayManager.renderTasks(project1.getTasks());\n})();\n\n\n\n\n//# sourceURL=webpack://odinproject-todo/./src/home.js?");

/***/ }),

/***/ "./src/img/fastRabbit.jpeg":
/*!*********************************!*\
  !*** ./src/img/fastRabbit.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2aad8e63a1105d5a237a.jpeg\";\n\n//# sourceURL=webpack://odinproject-todo/./src/img/fastRabbit.jpeg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n_home__WEBPACK_IMPORTED_MODULE_0__.home;\n\n\n//# sourceURL=webpack://odinproject-todo/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager)\n/* harmony export */ });\nconst ProjectManager = (() => {\n  const projects = [];\n  let activeProject = null;\n\n  const createProject = (name) => {\n    const tasks = [];\n    const getName = () => name;\n    const getTasks = () => {\n      return tasks;\n    };\n    const addTask = (title, description, date, priority, complete) => {\n      tasks.push({ title, description, date, priority, complete });\n    };\n    const removeTask = (title) => {\n      const index = tasks.findIndex((task) => task.title === title);\n      if (index != -1) {\n        tasks.splice(index, 1);\n      }\n    };\n    const completeTask = (title) => {\n      const index = tasks.findIndex((task) => task.title === title);\n      if (index != -1) {\n        tasks[index].complete = true;\n      }\n    };\n    const updateTask = (\n      oldTitle,\n      newTitle,\n      newDescription,\n      newDate,\n      newPriority\n    ) => {\n      const index = tasks.findIndex((task) => task.title === oldTitle);\n      if (index != -1) {\n        tasks[index].title = newTitle;\n        tasks[index].description = newDescription;\n        tasks[index].date = newDate;\n        tasks[index].priority = newPriority;\n        tasks[index].complete = false;\n      }\n    };\n\n    return { getName, addTask, removeTask, getTasks, completeTask, updateTask };\n  };\n\n  const addProject = (name) => {\n    const newProject = createProject(name);\n    projects.push(newProject);\n    return newProject;\n  };\n  const removeProject = (name) => {\n    const index = projects.findIndex((project) => project.getName() === name);\n    if (index != -1) {\n      projects.splice(index, 1);\n    }\n  };\n\n  const getProjects = () => projects;\n\n  const setActive = (name) => {\n    activeProject =\n      projects.find((project) => project.getName() === name) || null;\n  };\n  const getActiveProject = () => activeProject;\n\n  return {\n    addProject,\n    removeProject,\n    getProjects,\n    setActive,\n    getActiveProject,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://odinproject-todo/./src/project.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odinproject-todo/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;