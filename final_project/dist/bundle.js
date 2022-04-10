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

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://final_project/./src/styles/style.scss?");

/***/ }),

/***/ "./src/components/API.js":
/*!*******************************!*\
  !*** ./src/components/API.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TOKEN_STR\": () => (/* binding */ TOKEN_STR),\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\nconst TOKEN_STR = 'token';\r\n\r\nclass ApiError extends Error {\r\n  constructor ({message, data, status}) { \r\n    super(message);\r\n    this.status = status;\r\n    this.data = data;\r\n  }\r\n}\r\n\r\nclass API {\r\n  constructor () {\r\n    this.baseUrl = 'https://byte-tasks.herokuapp.com';\r\n    this.headers = {\r\n      Authorization: null,\r\n      'Content-Type': 'application/json',\r\n    };\r\n  }\r\n\r\n  async handleError (response) {\r\n    if (!response.ok) {\r\n      // throw new Error (\r\n      //   `ON URL ${response.url} RESPONSE STATUS: ${response.status}`\r\n      // );\r\n      throw new ApiError({\r\n        message: `Error`,\r\n        data: await response.json (),\r\n        status: response.status\r\n      })\r\n    }\r\n  }\r\n\r\n  async regUser (userData) {\r\n    const response = await fetch (`${this.baseUrl}/api/auth/register`, {\r\n      method: 'POST',\r\n      headers: this.headers,\r\n      body: JSON.stringify (userData),\r\n    });\r\n\r\n    await this.handleError (response);\r\n\r\n    const user = await response.json ();\r\n    return user;\r\n  }\r\n\r\n  async logUser (userData) {\r\n    const response = await fetch (`${this.baseUrl}/api/auth/login`, {\r\n      method: 'POST',\r\n      headers: this.headers,\r\n      body: JSON.stringify (userData),\r\n    });\r\n\r\n    await this.handleError (response);\r\n\r\n    const result = await response.json ();\r\n\r\n    this.headers.Authorization = `Bearer ${result.token}`;\r\n\r\n    localStorage.setItem (TOKEN_STR, result.token);\r\n  }\r\n\r\n  async getUser () {\r\n    const response = await fetch (`${this.baseUrl}/api/auth/user/self`, {\r\n      method: 'GET',\r\n      headers: this.headers,\r\n    });\r\n\r\n    await this.handleError (response);\r\n\r\n    const user = await response.json ();\r\n    return user;\r\n  }\r\n\r\n  isLoggedIn () {\r\n    return Boolean (localStorage.getItem (TOKEN_STR));\r\n  }\r\n\r\n  autoLogin () {\r\n    const storageToken = localStorage.getItem (TOKEN_STR);\r\n    this.headers.Authorization = `Bearer ${storageToken}`;\r\n\r\n    return this.getUser ();\r\n  }\r\n\r\n  async addTask (taskData) {\r\n    const response = await fetch (`${this.baseUrl}/api/task`, {\r\n      method: 'POST',\r\n      headers: this.headers,\r\n      body: JSON.stringify (taskData),\r\n    });\r\n\r\n    await this.handleError (response);\r\n\r\n    const task = await response.json ();\r\n    return task;\r\n  }\r\n\r\n  async getAllTasks () {\r\n    const response = await fetch (`${this.baseUrl}/api/task`, {\r\n      method: 'GET',\r\n      headers: this.headers,\r\n    });\r\n\r\n    await this.handleError (response);\r\n\r\n    const tasks = await response.json ();\r\n    return tasks;\r\n  }\r\n\r\n  async getTaskById (taskId) {\r\n    const response = await fetch (`${this.baseUrl}/api/task/${taskId}`, {\r\n      method: 'GET',\r\n      headers: this.headers,\r\n    });\r\n\r\n    await this.handleError (response);\r\n    const task = await response.json ();\r\n    return task;\r\n  }\r\n\r\n  async editTask (taskId, editTask) {\r\n    const response = await fetch (`${this.baseUrl}/api/task/${taskId}`, {\r\n      method: 'PATCH',\r\n      headers: this.headers,\r\n      body: JSON.stringify (editTask),\r\n    });\r\n\r\n    await this.handleError (response);\r\n    const task = await response.json ();\r\n    return task;\r\n  }\r\n\r\n  taskTimer () {}\r\n\r\n  async removeTask (taskId) {\r\n    const response = await fetch (`${this.baseUrl}/api/task/${taskId}`, {\r\n      method: 'DELETE',\r\n      headers: this.headers,\r\n    });\r\n\r\n    await this.handleError (response);\r\n  }\r\n}\r\n\r\nconst api = new API ();\r\n\n\n//# sourceURL=webpack://final_project/./src/components/API.js?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.js */ \"./src/components/Input.js\");\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API.js */ \"./src/components/API.js\");\n\r\n\r\n\r\nclass Form {\r\n  constructor (\r\n    title,\r\n    allowSwitchBtn,\r\n    switchInner,\r\n    inputs,\r\n    submitBtnText,\r\n    submitHandler,\r\n    parentDiv,\r\n    afterSubmit\r\n  ) {\r\n    this.title = title;\r\n    this.allowSwitchBtn = allowSwitchBtn;\r\n    this.switchInner = switchInner;\r\n    this.inputs = inputs;\r\n    this.submitBtnText = submitBtnText;\r\n    this.submitHandler = submitHandler;\r\n    this.parentDiv = parentDiv;\r\n    this.afterSubmit = afterSubmit;\r\n\r\n    this.formTitle = document.createElement ('h3');\r\n    this.formBody = document.createElement ('form');\r\n    this.formSwitchButton = document.createElement ('button');\r\n    this.formSubmitButton = document.createElement ('button');\r\n    this.formWrapper = document.createElement ('div');\r\n\r\n    this.render ();\r\n  }\r\n\r\n  static getInputValues (inputs) {\r\n    let values = {};\r\n    inputs.forEach (input => {\r\n      // console.log (input);\r\n      values[input.name.toLowerCase ()] = input.inputField.value;\r\n    });\r\n    return values;\r\n  }\r\n\r\n  render () {\r\n    if (this.allowSwitchBtn) {\r\n      this.formSwitchButton.innerText = this.switchInner;\r\n    } else {\r\n      this.formSwitchButton.style.display = 'none';\r\n    }\r\n\r\n    const idString = String (this.title).split (' ').join ('_');\r\n    this.formBody.id = idString;\r\n\r\n    this.formTitle.classList.add ('form-label');\r\n    this.formTitle.innerHTML = this.title;\r\n\r\n    this.formSwitchButton.classList.add ('form-switch');\r\n\r\n    this.formSubmitButton.classList.add ('form-btn');\r\n    this.formSubmitButton.type = 'submit';\r\n    this.formSubmitButton.innerText = this.submitBtnText;\r\n\r\n    this.inputs.forEach (input => {\r\n      input.render (this.formBody);\r\n    });\r\n\r\n    const preloader = document.querySelector ('.preloader__wrapper');\r\n\r\n    this.formBody.addEventListener ('submit', async event => {\r\n      event.preventDefault ();\r\n\r\n      this.formValues = Form.getInputValues (this.inputs);\r\n      this.formSubmitButton.setAttribute ('disabled', '');\r\n      // console.log (this.formValues);\r\n      preloader.classList.toggle ('hidden');\r\n      try {\r\n        await this.submitHandler (this.formValues).then(result => {\r\n          this.afterSubmit (result);\r\n        });\r\n      } catch (error) {\r\n        if (!error.data.details) {\r\n          if (error.data.email) {\r\n            alert (error.data.email);\r\n          } else {\r\n            alert (error.data.message);\r\n          }\r\n        } else {\r\n          error.data.details.forEach (({message, path}) => {\r\n            const invalidInput = this.inputs.find (input => {\r\n              return input.inputField.name === path[0];\r\n            });\r\n            invalidInput.setErrorMessage (message);\r\n          });\r\n        }\r\n      }\r\n      this.inputs.forEach (input => {\r\n        input.inputField.value = \"\";\r\n      })\r\n      preloader.classList.toggle ('hidden');\r\n      this.formSubmitButton.removeAttribute ('disabled');\r\n    });\r\n\r\n    this.formBody.append (this.formSubmitButton);\r\n\r\n    this.formWrapper.append (\r\n      this.formSwitchButton,\r\n      this.formTitle,\r\n      this.formBody\r\n    );\r\n  }\r\n\r\n  switchToFormEvent (form) {\r\n    this.formSwitchButton.addEventListener ('click', () => {\r\n      this.hide ();\r\n      form.show (this.parentDiv);\r\n    });\r\n  }\r\n\r\n  switchToForm (form) {\r\n    this.hide ();\r\n    form.show (this.parentDiv);\r\n  }\r\n\r\n  show () {\r\n    this.parentDiv.append (this.formWrapper);\r\n  }\r\n\r\n  hide () {\r\n    this.formWrapper.remove ();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://final_project/./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input)\n/* harmony export */ });\nclass Input {\r\n  constructor (name, type, id) {\r\n    this.name = name;\r\n    this.type = type;\r\n    this.id = id;\r\n    this.inputWrapper = document.createElement ('div');\r\n    this.inputWrapper.classList.add ('form-field-wrapper');\r\n    this.errorSpan = document.createElement ('span');\r\n    this.inputField = document.createElement ('input');\r\n  }\r\n\r\n  render (form) {\r\n    this.inputField.type = this.type;\r\n    this.inputField.id = this.id;\r\n    this.inputField.name =  this.name.toLowerCase();\r\n    this.inputField.classList.add ('form-input');\r\n    const label = document.createElement ('label');\r\n    label.htmlFor = this.id;\r\n    label.innerText = this.name;\r\n    this.errorSpan.classList.add ('input-error');\r\n\r\n    this.inputField.addEventListener(\"input\", () => {\r\n      this.errorSpan.innerText = \"\";\r\n    })\r\n\r\n    this.inputWrapper.append(label, this.inputField, this.errorSpan);\r\n    form.append(this.inputWrapper);\r\n  }\r\n\r\n  setErrorMessage (message) {\r\n    this.errorSpan.innerText = message;\r\n  }\r\n  \r\n\r\n}\r\n\n\n//# sourceURL=webpack://final_project/./src/components/Input.js?");

/***/ }),

/***/ "./src/components/Task.js":
/*!********************************!*\
  !*** ./src/components/Task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ \"./src/components/API.js\");\n\r\n\r\nconst msToTime = duration => {\r\n  let seconds = Math.floor (duration / 1000 % 60),\r\n    minutes = Math.floor (duration / (1000 * 60) % 60),\r\n    hours = Math.floor (duration / (1000 * 60 * 60) % 24);\r\n\r\n  hours = hours < 10 ? '0' + hours : hours;\r\n  minutes = minutes < 10 ? '0' + minutes : minutes;\r\n  seconds = seconds < 10 ? '0' + seconds : seconds;\r\n\r\n  return hours + ':' + minutes + ':' + seconds;\r\n};\r\n\r\nlet interval = null;\r\n\r\nclass Task {\r\n  constructor (options) {\r\n    const {name, description, _id:taskId, timeTracked, isFinished, isActive} = options;\r\n    this.name = name;\r\n    this.description = description;\r\n    this.taskId = taskId;\r\n    this.timer = timeTracked;\r\n    this.IsFinished = isFinished;\r\n    this.isActive = isActive;\r\n    this.taskContainer = document.createElement ('div');\r\n    this.closeButton = document.createElement ('button');\r\n    this.render ();\r\n  }\r\n\r\n  render () {\r\n    const CLASS_NAME = 'todo__list-item';\r\n    this.taskContainer.classList.add ('todo__list-item');\r\n\r\n    const taskName = document.createElement ('h3');\r\n    const taskDescription = document.createElement ('p');\r\n\r\n    const taskTracker = document.createElement ('div');\r\n    const trackerButton = document.createElement ('button');\r\n    const trackerIcon = document.createElement ('i');\r\n    trackerIcon.classList.add ('fas');\r\n    trackerButton.append (trackerIcon);\r\n    this.trackerCountdown = document.createElement ('span');\r\n    taskTracker.append (trackerButton, this.trackerCountdown);\r\n\r\n    const taskDate = document.createElement ('p');\r\n    const taskCompleteButton = document.createElement ('button');\r\n\r\n    taskName.classList.add (`${CLASS_NAME}-task-name`);\r\n    taskDescription.classList.add (`${CLASS_NAME}-task-description`);\r\n    taskTracker.classList.add (`${CLASS_NAME}-timer`);\r\n    trackerButton.classList.add (`${CLASS_NAME}-timer-btn`);\r\n    taskDate.classList.add (`${CLASS_NAME}-task-date`);\r\n    taskCompleteButton.classList.add (`${CLASS_NAME}-task-btn`);\r\n    this.closeButton.classList.add (`${CLASS_NAME}-close-btn`);\r\n\r\n    taskName.innerText = this.name;\r\n    taskDescription.innerText = this.description;\r\n    taskDate.innerText = new Date ().toLocaleString (undefined, {\r\n      year: 'numeric',\r\n      month: '2-digit',\r\n      day: '2-digit',\r\n      hour: '2-digit',\r\n      hour12: false,\r\n      minute: '2-digit',\r\n      second: '2-digit',\r\n    });\r\n    let interval = null;\r\n    let timer = this.timer;\r\n    this.trackerCountdown.innerHTML = msToTime(timer);\r\n    taskCompleteButton.innerText = 'Mark as done';\r\n    this.closeButton.innerHTML = '<i class=\"fas fa-times\"></i>';\r\n\r\n    const startTimer = () => {\r\n      trackerButton.classList.add ('btn-stop');\r\n      trackerIcon.classList.remove ('fa-play');\r\n      trackerIcon.classList.add ('fa-pause');\r\n      return new Promise (resolve => {\r\n        interval = setInterval (() => {\r\n          timer += 1000;\r\n          this.trackerCountdown.innerHTML = msToTime(timer);\r\n        }, 1000);\r\n      });\r\n    };\r\n\r\n    const stopTimer = () => {\r\n      trackerButton.classList.remove ('btn-stop');\r\n      trackerIcon.classList.remove ('fa-pause');\r\n      trackerIcon.classList.add ('fa-play');\r\n      clearInterval (interval);\r\n      interval = null;\r\n    };\r\n\r\n    if(this.isActive) {\r\n      startTimer();\r\n    } else {\r\n      stopTimer();\r\n    }\r\n\r\n    trackerButton.addEventListener ('click', () => {\r\n      if (trackerButton.classList.contains('btn-stop')) {\r\n        _API_js__WEBPACK_IMPORTED_MODULE_0__.api.editTask (this.taskId, {isActive: false});\r\n        stopTimer ();\r\n      } else {\r\n        _API_js__WEBPACK_IMPORTED_MODULE_0__.api.editTask (this.taskId, {isActive: true});\r\n        startTimer ();\r\n        console.log (timer)\r\n      }\r\n    });\r\n\r\n    const finishTask = () => {\r\n      this.taskContainer.classList.add ('task-finished');\r\n      taskCompleteButton.innerText = 'Restart';\r\n      trackerButton.setAttribute ('disabled', '');\r\n    };\r\n\r\n    const restartTask = () => {\r\n      this.taskContainer.classList.remove ('task-finished');\r\n      taskCompleteButton.innerText = 'Mark as done';\r\n      trackerButton.removeAttribute ('disabled', '');\r\n    };\r\n\r\n    if(this.IsFinished) {\r\n      finishTask();\r\n    } else {\r\n      restartTask();\r\n    }\r\n\r\n    taskCompleteButton.addEventListener ('click', () => {\r\n      if (this.taskContainer.classList.contains ('task-finished')) {\r\n        restartTask();\r\n        this.trackerCountdown.innerHTML = \"00:00:00\"\r\n        _API_js__WEBPACK_IMPORTED_MODULE_0__.api.editTask (this.taskId, {\r\n          isFinished: false,\r\n          timeTracked: 0,\r\n        });\r\n      } else {\r\n        finishTask();\r\n        stopTimer ();\r\n        _API_js__WEBPACK_IMPORTED_MODULE_0__.api.editTask (this.taskId, {\r\n          isActive: false,\r\n          isFinished: true,\r\n        });\r\n      }\r\n    });\r\n\r\n    this.closeButton.addEventListener ('click', () => {\r\n      this.taskContainer.remove ();\r\n      _API_js__WEBPACK_IMPORTED_MODULE_0__.api.removeTask (this.taskId);\r\n    });\r\n\r\n    this.taskContainer.append (\r\n      taskName,\r\n      taskDescription,\r\n      taskTracker,\r\n      taskDate,\r\n      taskCompleteButton,\r\n      this.closeButton\r\n    );\r\n  }\r\n\r\n  show (div) {\r\n    div.append (this.taskContainer);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://final_project/./src/components/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _components_Form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Form.js */ \"./src/components/Form.js\");\n/* harmony import */ var _components_Input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Input.js */ \"./src/components/Input.js\");\n/* harmony import */ var _src_components_Task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Task.js */ \"./src/components/Task.js\");\n/* harmony import */ var _src_components_API_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/API.js */ \"./src/components/API.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst logContainer = document.querySelector ('.login');\r\nconst container = document.querySelector ('.wrapper');\r\nconst todoConfigWrapper = document.querySelector ('.todo__config-wrapper');\r\nconst headerNav = document.querySelector ('.header__nav');\r\nconst headerUserLogo = document.querySelector ('.header__nav-user');\r\nconst logoutButton = document.querySelector ('.header__nav-logout');\r\nconst taskList = document.querySelector ('.todo__list');\r\nconst formWrapper = document.createElement ('div');\r\nconst addTaskForm = document.querySelector ('.add');\r\nformWrapper.classList.add ('login__form');\r\nlogContainer.append (formWrapper);\r\n\r\nconst todoConfigClose = document.createElement ('button');\r\ntodoConfigClose.innerHTML = '<i class=\"fas fa-times\"></i>';\r\ntodoConfigClose.classList.add ('todo__config-wrapper-close');\r\ntodoConfigClose.addEventListener ('click', () =>\r\n  todoConfigWrapper.classList.add ('hidden')\r\n);\r\n\r\ntodoConfigWrapper.addEventListener ('click', (event) => {\r\n  if(event.target.contains(todoConfigWrapper)){\r\n    todoConfigWrapper.classList.add ('hidden')\r\n  }\r\n})\r\n\r\nconst taskInnerText = document.createElement ('p');\r\ntaskInnerText.innerText = 'No tasks yet!';\r\ntaskInnerText.classList.add ('todo__info', 'hidden');\r\ncontainer.append (taskInnerText);\r\naddTaskForm.addEventListener ('click', () =>\r\n  todoConfigWrapper.classList.remove ('hidden')\r\n);\r\n// Login form\r\n\r\nconst forLogin = data => {\r\n  return _src_components_API_js__WEBPACK_IMPORTED_MODULE_4__.api.logUser (data);\r\n};\r\n\r\nconst loginAfterSubmit = () => {\r\n  const isAuthSuccess = _src_components_API_js__WEBPACK_IMPORTED_MODULE_4__.api.isLoggedIn ();\r\n  if (isAuthSuccess) {\r\n    scriptAfterLogin ();\r\n  } else {\r\n    login.show ();\r\n  }\r\n};\r\n\r\nconst login = new _components_Form_js__WEBPACK_IMPORTED_MODULE_1__.Form (\r\n  'login',\r\n  true,\r\n  'register',\r\n  [\r\n    new _components_Input_js__WEBPACK_IMPORTED_MODULE_2__.Input ('Email', 'text', 'login-email'),\r\n    new _components_Input_js__WEBPACK_IMPORTED_MODULE_2__.Input ('Password', 'password', 'login-password'),\r\n  ],\r\n  'submit',\r\n  forLogin,\r\n  formWrapper,\r\n  loginAfterSubmit\r\n);\r\n\r\n// Register form\r\n\r\nconst forRegister = data => {\r\n  return _src_components_API_js__WEBPACK_IMPORTED_MODULE_4__.api.regUser (data);\r\n};\r\n\r\nconst registerAfterSubmit = () => {\r\n  register.hide ();\r\n  login.show ();\r\n};\r\n\r\nconst register = new _components_Form_js__WEBPACK_IMPORTED_MODULE_1__.Form (\r\n  'register',\r\n  true,\r\n  'login',\r\n  [\r\n    new _components_Input_js__WEBPACK_IMPORTED_MODULE_2__.Input ('Email', 'text', 'reg-email'),\r\n    new _components_Input_js__WEBPACK_IMPORTED_MODULE_2__.Input ('Name', 'text', 'reg-name'),\r\n    new _components_Input_js__WEBPACK_IMPORTED_MODULE_2__.Input ('Password', 'password', 'reg-password'),\r\n  ],\r\n  'submit',\r\n  forRegister,\r\n  formWrapper,\r\n  registerAfterSubmit\r\n);\r\n\r\nlogin.switchToFormEvent (register);\r\nregister.switchToFormEvent (login);\r\n\r\nconst scriptAfterLogin = () => {\r\n  _src_components_API_js__WEBPACK_IMPORTED_MODULE_4__.api.autoLogin ().then (user => (headerUserLogo.innerText = user.name[0]));\r\n  hideBlock (logContainer);\r\n  addTaskForm.classList.remove ('hidden');\r\n  configTask.show ();\r\n  headerNav.classList.toggle ('logged');\r\n  _src_components_API_js__WEBPACK_IMPORTED_MODULE_4__.api.getAllTasks ().then (results => {\r\n    if (results.length) {\r\n      taskInnerText.classList.add ('hidden');\r\n      results.forEach (res => {\r\n        const newTask = new _src_components_Task_js__WEBPACK_IMPORTED_MODULE_3__.Task (res);\r\n        newTask.show (taskList);\r\n      });\r\n    } else {\r\n      taskInnerText.classList.remove ('hidden');\r\n    }\r\n  });\r\n};\r\n\r\n// Task configuration form\r\n\r\nconst forConfig = data => {\r\n  return _src_components_API_js__WEBPACK_IMPORTED_MODULE_4__.api.addTask (data);\r\n};\r\n\r\nconst afterConfigSubmit = (res) => {\r\n  todoConfigWrapper.classList.add('hidden');\r\n  const newTask = new _src_components_Task_js__WEBPACK_IMPORTED_MODULE_3__.Task (res);\r\n  newTask.show (taskList);\r\n  taskInnerText.classList.add ('hidden');\r\n};\r\n\r\nconst configTask = new _components_Form_js__WEBPACK_IMPORTED_MODULE_1__.Form (\r\n  'add task',\r\n  false,\r\n  '',\r\n  [\r\n    new _components_Input_js__WEBPACK_IMPORTED_MODULE_2__.Input ('Name', 'text', 'task-add-name'),\r\n    new _components_Input_js__WEBPACK_IMPORTED_MODULE_2__.Input ('Description', 'text', 'task-add-description'),\r\n  ],\r\n  'add',\r\n  forConfig,\r\n  todoConfigWrapper,\r\n  afterConfigSubmit\r\n);\r\n\r\nconfigTask.formWrapper.append(todoConfigClose);\r\n\r\nconst hideBlock = block => {\r\n  block.classList.toggle ('hidden');\r\n};\r\n\r\nlogoutButton.addEventListener ('click', () => {\r\n  localStorage.removeItem (_src_components_API_js__WEBPACK_IMPORTED_MODULE_4__.TOKEN_STR);\r\n  addTaskForm.classList.add ('hidden');\r\n  document.location.reload ();\r\n});\r\n\r\nloginAfterSubmit ();\r\n\r\ntaskList.addEventListener ('click', (e) => {\r\n  const taskCloseBtns = document.querySelectorAll('.todo__list-item-close-btn');\r\n  if(!taskCloseBtns.length) {\r\n    taskInnerText.classList.remove ('hidden');\r\n  }\r\n})\r\n\r\n\n\n//# sourceURL=webpack://final_project/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;