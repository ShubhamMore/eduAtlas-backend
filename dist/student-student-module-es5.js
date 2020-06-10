function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-student-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-home/student-home.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-home/student-home.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentHomeStudentHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-12\">\n    <table class=\"table table-borderless\">\n      <thead>\n        <tr>\n          <th>Id</th>\n          <th>Topic</th>\n          <th>Join</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let meeting of meetings; let i = index\">\n          <td>{{ i + 1 }}</td>\n          <td>{{ meeting.topic }}</td>\n          <td>\n            <button\n              type=\"button\"\n              class=\"btn btn-warning\"\n              (click)=\"joinMeeting(meeting.joinUrl, meeting.meetingId, meeting.password)\"\n            >\n              Join\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<!-- <div class=\"zoom-box\">\n  <div id=\"zmmtg-root\"></div>\n</div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ngx-one-column-layout>\n  <nb-menu [items]=\"menu\"></nb-menu>\n\n  <router-outlet></router-outlet>\n</ngx-one-column-layout>\n";
    /***/
  },

  /***/
  "./src/app/student/student-home/student-home.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/student/student-home/student-home.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudentHomeStudentHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC1ob21lL3N0dWRlbnQtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/student/student-home/student-home.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/student/student-home/student-home.component.ts ***!
    \****************************************************************/

  /*! exports provided: StudentHomeComponent */

  /***/
  function srcAppStudentStudentHomeStudentHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentHomeComponent", function () {
      return StudentHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); // import { ZoomMtg } from '@zoomus/websdk';
    // ZoomMtg.preLoadWasm();
    // ZoomMtg.prepareJssdk();


    var StudentHomeComponent = /*#__PURE__*/function () {
      function StudentHomeComponent(api, document) {
        _classCallCheck(this, StudentHomeComponent);

        this.api = api;
        this.signatureEndpoint = '';
        this.apiKey = '-e4wJMiURO-i3gr436TgsQ';
        this.apiSecret = '6QqeDEM10eYQCV5gpdpPN06QsIWV04mmyzzz';
        this.role = 0;
        this.leaveUrl = 'http://localhost:4200';
        this.userName = 'Angular';
        this.userEmail = 'angular@gmail.com';
        this.passWord = '';
        this.meetings = [];
      }

      _createClass(StudentHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMeetings(); // this.getSignature('73736782741', 'Abcd@123');
        }
      }, {
        key: "getMeetings",
        value: function getMeetings() {
          var _this = this;

          this.api.getAllMeetings().subscribe(function (res) {
            _this.meetings = res;
          });
        }
      }, {
        key: "joinMeeting",
        value: function joinMeeting(url, meetingNumber, passWord) {
          console.log(url); // this.meetingNumber = meetingNumber;
          // this.passWord = passWord;
          // this.meeting = true;

          window.open(url, 'Zoom', 'scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no');
        }
      }]);

      return StudentHomeComponent;
    }();

    StudentHomeComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    StudentHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ngx-student-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-home/student-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-home.component.scss */
      "./src/app/student/student-home/student-home.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], Object])], StudentHomeComponent);
    /***/
  },

  /***/
  "./src/app/student/student-menu.ts":
  /*!*****************************************!*\
    !*** ./src/app/student/student-menu.ts ***!
    \*****************************************/

  /*! exports provided: MENU_ITEMS */

  /***/
  function srcAppStudentStudentMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function () {
      return MENU_ITEMS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MENU_ITEMS = [{
      title: 'Home',
      icon: 'home-outline',
      link: '/student/home',
      home: true
    }];
    /***/
  },

  /***/
  "./src/app/student/student-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/student/student-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: StudentRoutingModule */

  /***/
  function srcAppStudentStudentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function () {
      return StudentRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student-home/student-home.component */
    "./src/app/student/student-home/student-home.component.ts");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/student/student.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _student_component__WEBPACK_IMPORTED_MODULE_2__["StudentComponent"],
      children: [{
        path: 'home',
        component: _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_1__["StudentHomeComponent"]
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: '**'
      }]
    }];

    var StudentRoutingModule = function StudentRoutingModule() {
      _classCallCheck(this, StudentRoutingModule);
    };

    StudentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], StudentRoutingModule);
    /***/
  },

  /***/
  "./src/app/student/student.component.scss":
  /*!************************************************!*\
    !*** ./src/app/student/student.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/student/student.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/student/student.component.ts ***!
    \**********************************************/

  /*! exports provided: StudentComponent */

  /***/
  function srcAppStudentStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComponent", function () {
      return StudentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _student_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-menu */
    "./src/app/student/student-menu.ts");

    var StudentComponent = /*#__PURE__*/function () {
      function StudentComponent() {
        _classCallCheck(this, StudentComponent);
      }

      _createClass(StudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu = _student_menu__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"];
          this.institutes = [];
        }
      }]);

      return StudentComponent;
    }();

    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-student',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student.component.scss */
      "./src/app/student/student.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StudentComponent);
    /***/
  },

  /***/
  "./src/app/student/student.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/student/student.module.ts ***!
    \*******************************************/

  /*! exports provided: StudentModule */

  /***/
  function srcAppStudentStudentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentModule", function () {
      return StudentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/student/student.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/button.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _student_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student-routing.module */
    "./src/app/student/student-routing.module.ts");
    /* harmony import */


    var _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./student-home/student-home.component */
    "./src/app/student/student-home/student-home.component.ts");

    var StudentModule = function StudentModule() {
      _classCallCheck(this, StudentModule);
    };

    StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_student_routing_module__WEBPACK_IMPORTED_MODULE_7__["StudentRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"]],
      declarations: [_student_component__WEBPACK_IMPORTED_MODULE_1__["StudentComponent"], _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_8__["StudentHomeComponent"]]
    })], StudentModule);
    /***/
  }
}]);
//# sourceMappingURL=student-student-module-es5.js.map