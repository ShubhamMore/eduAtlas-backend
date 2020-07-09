function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3], {
  /***/
  "./src/app/services/auth-services/auth-guards/student-ealive-auth.guard.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/services/auth-services/auth-guards/student-ealive-auth.guard.ts ***!
    \*********************************************************************************/

  /*! exports provided: StudentEaLiveGuard */

  /***/
  function srcAppServicesAuthServicesAuthGuardsStudentEaliveAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentEaLiveGuard", function () {
      return StudentEaLiveGuard;
    });
    /* harmony import */


    var _institute_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../institute.service */
    "./src/app/services/institute.service.ts");
    /* harmony import */


    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth-services/auth.service */
    "./src/app/services/auth-services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentEaLiveGuard = /*@__PURE__*/function () {
      var StudentEaLiveGuard = /*#__PURE__*/function () {
        function StudentEaLiveGuard(authService, instituteService) {
          _classCallCheck(this, StudentEaLiveGuard);

          this.authService = authService;
          this.instituteService = instituteService;
        }

        _createClass(StudentEaLiveGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var user = this.authService.getUser();

            if (user && user.role === 'student' && this.instituteService.getInstitute().currentPlan !== 'Lite') {
              return true;
            } else {
              alert('You are not allowed to access this page'); // return true;
            }
          } // tslint:disable-next-line: max-line-length

        }, {
          key: "canActivateChild",
          value: function canActivateChild(route, state) {
            return this.canActivate(route, state);
          }
        }]);

        return StudentEaLiveGuard;
      }();

      StudentEaLiveGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function StudentEaLiveGuard_Factory() {
          return new StudentEaLiveGuard(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_institute_service__WEBPACK_IMPORTED_MODULE_0__["InstituteService"]));
        },
        token: StudentEaLiveGuard,
        providedIn: "root"
      });
      return StudentEaLiveGuard;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-dashboard/student-dashboard.component.ngfactory.js":
  /*!************************************************************************************!*\
    !*** ./src/app/student/student-dashboard/student-dashboard.component.ngfactory.js ***!
    \************************************************************************************/

  /*! exports provided: RenderType_StudentDashboardComponent, View_StudentDashboardComponent_0, View_StudentDashboardComponent_Host_0, StudentDashboardComponentNgFactory */

  /***/
  function srcAppStudentStudentDashboardStudentDashboardComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentDashboardComponent", function () {
      return RenderType_StudentDashboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentDashboardComponent_0", function () {
      return View_StudentDashboardComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentDashboardComponent_Host_0", function () {
      return View_StudentDashboardComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentDashboardComponentNgFactory", function () {
      return StudentDashboardComponentNgFactory;
    });
    /* harmony import */


    var _student_dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-dashboard.component.scss.shim.ngstyle */
    "./src/app/student/student-dashboard/student-dashboard.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _student_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-dashboard.component */
    "./src/app/student/student-dashboard/student-dashboard.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_institute_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/institute.service */
    "./src/app/services/institute.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/student.service */
    "./src/app/services/student.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentDashboardComponent = [_student_dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentDashboardComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentDashboardComponent,
      data: {}
    });

    function View_StudentDashboardComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.announcements.attachment.secure_url;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.announcements.attachment.file_name;

        _ck(_v, 1, 0, currVal_1);
      });
    }

    function View_StudentDashboardComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["--"]))], null, null);
    }

    function View_StudentDashboardComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentDashboardComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noFile", 2]], null, 0, null, View_StudentDashboardComponent_5))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit.announcements.attachment.secure_url;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10);

        _ck(_v, 9, 0, currVal_3, currVal_4);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.announcements.title;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.announcements.date;

        _ck(_v, 6, 0, currVal_2);
      });
    }

    function View_StudentDashboardComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attachment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentDashboardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.announcements;

        _ck(_v, 14, 0, currVal_0);
      }, null);
    }

    function View_StudentDashboardComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Announcements"]))], null, null);
    }

    function View_StudentDashboardComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.batchCode;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.lecture.date;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.lecture.topic;

        _ck(_v, 8, 0, currVal_3);
      });
    }

    function View_StudentDashboardComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Batch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Topic"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentDashboardComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.schedules;

        _ck(_v, 14, 0, currVal_0);
      }, null);
    }

    function View_StudentDashboardComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Upcoming Classes"]))], null, null);
    }

    function View_StudentDashboardComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 37, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 7, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 5, "div", [["class", "instituteBox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "img", [["class", "my-auto float-left"], ["height", "40px"], ["style", "border-radius: 100%; border: 1px solid #000;"], ["width", "40px"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "span", [["class", "ml-3 my-auto verticalCenter"], ["style", "color: #ffd500; font-size: 30px; padding-top: 10px; font-weight: bold;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 24, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 11, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 10, "nb-card", [["class", "card-height-1"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 3, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ANNOUNCEMENTS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentDashboardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noAnnouncements", 2]], 0, 0, null, View_StudentDashboardComponent_6)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 11, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 10, "nb-card", [["class", "card-height-1"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 3, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CLASS SCHEDULE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentDashboardComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noSchedules", 2]], 0, 0, null, View_StudentDashboardComponent_9))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_42 = _co.announcements.length > 0;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25);

        _ck(_v, 24, 0, currVal_42, currVal_43);

        var currVal_64 = _co.schedules.length > 0;

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37);

        _ck(_v, 36, 0, currVal_64, currVal_65);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).controlAccent;

        _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _co.institute.basicInfo.logo.secure_url;

        _ck(_v, 9, 0, currVal_20);

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.institute.basicInfo.name));

        _ck(_v, 11, 0, currVal_21);

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).tiny;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).small;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).medium;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).large;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).giant;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).primary;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).info;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).success;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).warning;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).danger;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).basic;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).control;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).hasAccent;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).primaryAccent;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).infoAccent;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).successAccent;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).warningAccent;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).dangerAccent;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).basicAccent;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).controlAccent;

        _ck(_v, 15, 1, [currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41]);

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).tiny;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).small;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).medium;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).large;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).giant;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).primary;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).info;

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).success;

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).warning;

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).danger;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).basic;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).control;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).hasAccent;

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).primaryAccent;

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).infoAccent;

        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).successAccent;

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).warningAccent;

        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).dangerAccent;

        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).basicAccent;

        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).controlAccent;

        _ck(_v, 27, 1, [currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63]);
      });
    }

    function View_StudentDashboardComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentDashboardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_StudentDashboardComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-dashboard", [], null, null, null, View_StudentDashboardComponent_0, RenderType_StudentDashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["StudentDashboardComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_institute_service__WEBPACK_IMPORTED_MODULE_7__["InstituteService"], _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _services_student_service__WEBPACK_IMPORTED_MODULE_9__["StudentService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentDashboardComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-dashboard", _student_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["StudentDashboardComponent"], View_StudentDashboardComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-dashboard/student-dashboard.component.scss.shim.ngstyle.js":
  /*!********************************************************************************************!*\
    !*** ./src/app/student/student-dashboard/student-dashboard.component.scss.shim.ngstyle.js ***!
    \********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentDashboardStudentDashboardComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".card-height-1[_ngcontent-%COMP%], .body-height-1[_ngcontent-%COMP%] {\n  height: 50vh;\n  max-height: 50vh;\n  overflow-y: auto; }"];
    /***/
  },

  /***/
  "./src/app/student/student-dashboard/student-dashboard.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/student/student-dashboard/student-dashboard.component.ts ***!
    \**************************************************************************/

  /*! exports provided: StudentDashboardComponent */

  /***/
  function srcAppStudentStudentDashboardStudentDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentDashboardComponent", function () {
      return StudentDashboardComponent;
    });
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_institute_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/institute.service */
    "./src/app/services/institute.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _student_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../student-menu */
    "./src/app/student/student-menu.ts");

    var StudentDashboardComponent = /*#__PURE__*/function () {
      function StudentDashboardComponent(active, instituteService, api, studentService) {
        var _this = this;

        _classCallCheck(this, StudentDashboardComponent);

        this.active = active;
        this.instituteService = instituteService;
        this.api = api;
        this.studentService = studentService;
        this.announcements = [];
        this.schedules = [];
        active.params.subscribe(function (val) {
          // put the code from `ngOnInit` here
          _this.ngOnInit();
        });
      }

      _createClass(StudentDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.display = false;
          this.instituteId = this.active.snapshot.paramMap.get('id');
          this.institute = this.studentService.getInstitute();
          this.setInstituteIdForMenus();
          this.showDashboardMenus();
          this.getDashboardData(this.instituteId);
          this.studentService.getStudentCoursesByInstitutes(this.instituteId).subscribe(function (res) {});
          this.api.getInstitute(this.instituteId).subscribe(function (res) {
            _this2.institute = res.institute;

            _this2.instituteService.setInstitute(_this2.institute);

            _this2.showDashboardMenus();

            _this2.display = true;
          });
        }
      }, {
        key: "getDashboardData",
        value: function getDashboardData(id) {
          var _this3 = this;

          this.studentService.getInstitutesDashboardDataForStudent(id).subscribe(function (res) {
            _this3.announcements = res.announcements;
            _this3.schedules = res.schedule;
            _this3.display = true;
          });
        }
      }, {
        key: "setInstituteIdForMenus",
        value: function setInstituteIdForMenus() {
          var _this4 = this;

          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"].map(function (menu, i) {
            if (i !== 0 && i !== 1) {
              var link = menu.link.substring(0, menu.link.lastIndexOf('/'));
              menu.link = link + '/' + _this4.instituteId;

              if (menu.children) {
                menu.children.map(function (menuChildren) {
                  var childrenLink = menuChildren.link.substring(0, menuChildren.link.lastIndexOf('/'));
                  menuChildren.link = childrenLink + '/' + _this4.instituteId;
                  return menuChildren;
                });
              }

              return menu;
            }
          });
        }
      }, {
        key: "showDashboardMenus",
        value: function showDashboardMenus() {
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][2].hidden = false;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][3].hidden = false;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][4].hidden = false;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][5].hidden = false;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][6].hidden = false;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][7].hidden = false;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][8].hidden = false;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][9].hidden = false;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][10].hidden = false;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][11].hidden = false;

          if (this.institute.currentPlan !== 'Lite') {
            _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][12].hidden = false;
          } else {
            _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][12].hidden = true;
          }
        }
      }]);

      return StudentDashboardComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-home/student-home.component.ngfactory.js":
  /*!**************************************************************************!*\
    !*** ./src/app/student/student-home/student-home.component.ngfactory.js ***!
    \**************************************************************************/

  /*! exports provided: RenderType_StudentHomeComponent, View_StudentHomeComponent_0, View_StudentHomeComponent_Host_0, StudentHomeComponentNgFactory */

  /***/
  function srcAppStudentStudentHomeStudentHomeComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentHomeComponent", function () {
      return RenderType_StudentHomeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentHomeComponent_0", function () {
      return View_StudentHomeComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentHomeComponent_Host_0", function () {
      return View_StudentHomeComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentHomeComponentNgFactory", function () {
      return StudentHomeComponentNgFactory;
    });
    /* harmony import */


    var _student_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-home.component.scss.shim.ngstyle */
    "./src/app/student/student-home/student-home.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _student_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-home.component */
    "./src/app/student/student-home/student-home.component.ts");
    /* harmony import */


    var _services_institute_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/institute.service */
    "./src/app/services/institute.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/student.service */
    "./src/app/services/student.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentHomeComponent = [_student_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentHomeComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentHomeComponent,
      data: {}
    });

    function View_StudentHomeComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.announcements.attachment.secure_url;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.announcements.attachment.file_name;

        _ck(_v, 1, 0, currVal_1);
      });
    }

    function View_StudentHomeComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["--"]))], null, null);
    }

    function View_StudentHomeComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentHomeComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noFile", 2]], null, 0, null, View_StudentHomeComponent_5))], function (_ck, _v) {
        var currVal_5 = _v.context.$implicit.announcements.attachment.secure_url;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14);

        _ck(_v, 13, 0, currVal_5, currVal_6);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.instituteName;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.batchCode;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.announcements.title;

        _ck(_v, 8, 0, currVal_3);

        var currVal_4 = _v.context.$implicit.announcements.date;

        _ck(_v, 10, 0, currVal_4);
      });
    }

    function View_StudentHomeComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Institute"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Batch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attachment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentHomeComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.announcements;

        _ck(_v, 18, 0, currVal_0);
      }, null);
    }

    function View_StudentHomeComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Announcements"]))], null, null);
    }

    function View_StudentHomeComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.instituteName;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.courseName + " (" + _v.context.$implicit.batchCode + ")";

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.lecture.date;

        _ck(_v, 8, 0, currVal_3);

        var currVal_4 = _v.context.$implicit.lecture.topic;

        _ck(_v, 10, 0, currVal_4);
      });
    }

    function View_StudentHomeComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Institute"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Topic"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentHomeComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.schedules;

        _ck(_v, 16, 0, currVal_0);
      }, null);
    }

    function View_StudentHomeComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Upcoming Classes"]))], null, null);
    }

    function View_StudentHomeComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.instituteName;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.courseName + " (" + _v.context.$implicit.batchCode + ")";

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.test.date;

        _ck(_v, 8, 0, currVal_3);

        var currVal_4 = _v.context.$implicit.test.testName;

        _ck(_v, 10, 0, currVal_4);
      });
    }

    function View_StudentHomeComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Institute"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Test Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentHomeComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.tests;

        _ck(_v, 16, 0, currVal_0);
      }, null);
    }

    function View_StudentHomeComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Upcoming Tests"]))], null, null);
    }

    function View_StudentHomeComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 22, "div", [["class", "col-sm-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 21, "nb-card", [["class", "card-height-1"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 1, 19, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 17, "nb-tabset", [["fullWidth", ""]], [[2, "full-width", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbTabsetComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbTabsetComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 1097728, null, 1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabsetComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        fullWidth: [0, "fullWidth"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        tabs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 4, "nb-tab", [["tabTitle", "IMPORTANT ANNOUNCEMENTS"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabComponent"], [], {
        tabTitle: [0, "tabTitle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentHomeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noAnnouncements", 2]], 0, 0, null, View_StudentHomeComponent_6)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 4, "nb-tab", [["tabTitle", "UPCOMING CLASSES"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabComponent"], [], {
        tabTitle: [0, "tabTitle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentHomeComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noSchedules", 2]], 0, 0, null, View_StudentHomeComponent_9)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 4, "nb-tab", [["tabTitle", "UPCOMING TESTS"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 49152, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabComponent"], [], {
        tabTitle: [0, "tabTitle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentHomeComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noTests", 2]], 0, 0, null, View_StudentHomeComponent_12)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 9, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 8, "nb-card", [["class", "card-height-2"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 1, 6, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 1, "div", [["class", "image-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "img", [["alt", "Institute"], ["class", "inst-logo"], ["src", "../../../assets/img/home-yellow.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 1, "button", [["class", "btn btn-yellow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Join Institute "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_21 = "";

        _ck(_v, 7, 0, currVal_21);

        var currVal_24 = "IMPORTANT ANNOUNCEMENTS";

        _ck(_v, 10, 0, currVal_24);

        var currVal_25 = _co.announcements.length > 0;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13);

        _ck(_v, 12, 0, currVal_25, currVal_26);

        var currVal_29 = "UPCOMING CLASSES";

        _ck(_v, 15, 0, currVal_29);

        var currVal_30 = _co.schedules.length > 0;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18);

        _ck(_v, 17, 0, currVal_30, currVal_31);

        var currVal_34 = "UPCOMING TESTS";

        _ck(_v, 20, 0, currVal_34);

        var currVal_35 = _co.tests.length > 0;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23);

        _ck(_v, 22, 0, currVal_35, currVal_36);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).controlAccent;

        _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).fullWidthValue;

        _ck(_v, 6, 0, currVal_20);

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).disabled;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).activeValue;

        _ck(_v, 9, 0, currVal_22, currVal_23);

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).activeValue;

        _ck(_v, 14, 0, currVal_27, currVal_28);

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).disabled;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).activeValue;

        _ck(_v, 19, 0, currVal_32, currVal_33);

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).tiny;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).small;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).medium;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).large;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).giant;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).primary;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).info;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).success;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).warning;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).danger;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).basic;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).control;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).hasAccent;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).primaryAccent;

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).infoAccent;

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).successAccent;

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).warningAccent;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).dangerAccent;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).basicAccent;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).controlAccent;

        _ck(_v, 25, 1, [currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56]);
      });
    }

    function View_StudentHomeComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentHomeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_StudentHomeComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-home", [], null, null, null, View_StudentHomeComponent_0, RenderType_StudentHomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_home_component__WEBPACK_IMPORTED_MODULE_6__["StudentHomeComponent"], [_services_institute_service__WEBPACK_IMPORTED_MODULE_7__["InstituteService"], _services_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentHomeComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-home", _student_home_component__WEBPACK_IMPORTED_MODULE_6__["StudentHomeComponent"], View_StudentHomeComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-home/student-home.component.scss.shim.ngstyle.js":
  /*!**********************************************************************************!*\
    !*** ./src/app/student/student-home/student-home.component.scss.shim.ngstyle.js ***!
    \**********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentHomeStudentHomeComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["#date[_ngcontent-%COMP%] {\n  width: 26%;\n  float: right;\n  padding: 11px;\n  border-radius: 6px;\n  border: none;\n  font-size: 11px;\n  text-align: center; }\n\n.image-container[_ngcontent-%COMP%], .btn-container[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center; }\n\n.inst-logo[_ngcontent-%COMP%] {\n  width: 40px;\n  margin-bottom: 25px; }\n\n.card-height-1[_ngcontent-%COMP%], .body-height-1[_ngcontent-%COMP%] {\n  height: 50vh;\n  max-height: 50vh;\n  overflow-y: auto; }\n\n.card-height-2[_ngcontent-%COMP%] {\n  height: 25vh;\n  max-height: 50vh;\n  text-align: center; }\n\n.verticalCenter[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-bottom: 15px; }\n\n.instituteBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: inline-block; }\n\n.planDiv[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  font-size: 10px;\n  font-weight: normal;\n  background-color: #009acd;\n  color: #fff;\n  padding: 0px 8px;\n  border-radius: 10px;\n  position: absolute;\n  line-height: 17px; }"];
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


    var _services_institute_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../services/institute.service */
    "./src/app/services/institute.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _student_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../student-menu */
    "./src/app/student/student-menu.ts");

    var StudentHomeComponent = /*#__PURE__*/function () {
      function StudentHomeComponent(instituteService, studentService) {
        _classCallCheck(this, StudentHomeComponent);

        this.instituteService = instituteService;
        this.studentService = studentService;
        this.announcements = [];
        this.schedules = [];
        this.tests = [];
        this.display = false;
      }

      _createClass(StudentHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instituteService.publishData('');
          this.hideOtherMenus();
          this.getDashboardData();
        }
      }, {
        key: "hideOtherMenus",
        value: function hideOtherMenus() {
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][2].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][3].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][4].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][5].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][6].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][7].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][8].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][9].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][10].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][11].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"][12].hidden = true;
        }
      }, {
        key: "getDashboardData",
        value: function getDashboardData() {
          var _this5 = this;

          this.studentService.getStudentDashboard().subscribe(function (res) {
            _this5.announcements = res.announcements;
            _this5.tests = res.test;
            _this5.schedules = res.schedule;
            _this5.display = true;
          });
        }
      }]);

      return StudentHomeComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-institutes/student-institutes.component.ngfactory.js":
  /*!**************************************************************************************!*\
    !*** ./src/app/student/student-institutes/student-institutes.component.ngfactory.js ***!
    \**************************************************************************************/

  /*! exports provided: RenderType_StudentInstitutesComponent, View_StudentInstitutesComponent_0, View_StudentInstitutesComponent_Host_0, StudentInstitutesComponentNgFactory */

  /***/
  function srcAppStudentStudentInstitutesStudentInstitutesComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentInstitutesComponent", function () {
      return RenderType_StudentInstitutesComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentInstitutesComponent_0", function () {
      return View_StudentInstitutesComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentInstitutesComponent_Host_0", function () {
      return View_StudentInstitutesComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentInstitutesComponentNgFactory", function () {
      return StudentInstitutesComponentNgFactory;
    });
    /* harmony import */


    var _student_institutes_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-institutes.component.scss.shim.ngstyle */
    "./src/app/student/student-institutes/student-institutes.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _student_institutes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-institutes.component */
    "./src/app/student/student-institutes/student-institutes.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/auth-services/auth.service */
    "./src/app/services/auth-services/auth.service.ts");
    /* harmony import */


    var _services_institute_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/institute.service */
    "./src/app/services/institute.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentInstitutesComponent = [_student_institutes_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentInstitutesComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentInstitutesComponent,
      data: {}
    });

    function View_StudentInstitutesComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "tr", [["class", "border-bottom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "td", [["class", "td-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["height", "35px"], ["style", "border: 1px solid #ffd500; border-radius: 100%;"], ["width", "35px"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "span", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "span", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "td", [["class", "td-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [["class", "pointer float-right"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.viewInstitute(_v.context.$implicit._id) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "img", [["height", "30px"], ["src", "../../../assets/img/rarrow.png"], ["width", "30px"]], null, null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.basicInfo.logo.secure_url;

        _ck(_v, 4, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.basicInfo.name;

        _ck(_v, 8, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.currentPlan;

        _ck(_v, 12, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.address.city;

        _ck(_v, 15, 0, currVal_3);
      });
    }

    function View_StudentInstitutesComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "table", [["class", "table"], ["style", "max-height: 35vh;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentInstitutesComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.institutes;

        _ck(_v, 4, 0, currVal_0);
      }, null);
    }

    function View_StudentInstitutesComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "pt-5 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Student Found"]))], null, null);
    }

    function View_StudentInstitutesComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 12, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "nb-card", [["status", "basic"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], {
        status: [0, "status"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "nb-card-header", [["style", "background-color: #00d68f;"]], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 1, "h5", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["MY INSTITUTES"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 1, 5, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentInstitutesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noInstitutes", 2]], null, 0, null, View_StudentInstitutesComponent_4))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_20 = "basic";

        _ck(_v, 3, 0, currVal_20);

        var currVal_21 = _co.institutes.length > 0;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13);

        _ck(_v, 12, 0, currVal_21, currVal_22);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).controlAccent;

        _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);
      });
    }

    function View_StudentInstitutesComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentInstitutesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_StudentInstitutesComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-institutes", [], null, null, null, View_StudentInstitutesComponent_0, RenderType_StudentInstitutesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_institutes_component__WEBPACK_IMPORTED_MODULE_5__["StudentInstitutesComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_student_service__WEBPACK_IMPORTED_MODULE_7__["StudentService"], _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_institute_service__WEBPACK_IMPORTED_MODULE_9__["InstituteService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentInstitutesComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-institutes", _student_institutes_component__WEBPACK_IMPORTED_MODULE_5__["StudentInstitutesComponent"], View_StudentInstitutesComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-institutes/student-institutes.component.scss.shim.ngstyle.js":
  /*!**********************************************************************************************!*\
    !*** ./src/app/student/student-institutes/student-institutes.component.scss.shim.ngstyle.js ***!
    \**********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentInstitutesStudentInstitutesComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-institutes/student-institutes.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/student/student-institutes/student-institutes.component.ts ***!
    \****************************************************************************/

  /*! exports provided: StudentInstitutesComponent */

  /***/
  function srcAppStudentStudentInstitutesStudentInstitutesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentInstitutesComponent", function () {
      return StudentInstitutesComponent;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth-services/auth.service */
    "./src/app/services/auth-services/auth.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _services_institute_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/institute.service */
    "./src/app/services/institute.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _student_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../student-menu */
    "./src/app/student/student-menu.ts");

    var StudentInstitutesComponent = /*#__PURE__*/function () {
      function StudentInstitutesComponent(router, route, studentService, authService, instituteService) {
        _classCallCheck(this, StudentInstitutesComponent);

        this.router = router;
        this.route = route;
        this.studentService = studentService;
        this.authService = authService;
        this.instituteService = instituteService;
        this.institutes = [];
      }

      _createClass(StudentInstitutesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.display = false;
          this.instituteService.publishData('');
          this.hideOtherMenus();
          this.user = this.authService.getUser();
          this.studentService.getInstitutesOfStudent(this.user._id).subscribe(function (inst) {
            _this6.instituteService.setInstitutes(inst);

            _this6.institutes = inst;
            _this6.display = true;
          });
        }
      }, {
        key: "hideOtherMenus",
        value: function hideOtherMenus() {
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][2].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][3].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][4].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][5].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][6].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][7].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][8].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][9].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][10].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][11].hidden = true;
          _student_menu__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"][12].hidden = true;
        }
      }, {
        key: "viewInstitute",
        value: function viewInstitute(id) {
          this.instituteService.publishData(id);
          var institute = this.institutes.find(function (inst) {
            return inst._id === id;
          });
          this.studentService.setInstitute(institute);
          this.router.navigate(['/student/dashboard', id], {
            relativeTo: this.route
          });
        }
      }]);

      return StudentInstitutesComponent;
    }();
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

    var MENU_ITEMS = [{
      title: 'Home',
      icon: 'home-outline',
      link: '/student/home/',
      home: true
    }, {
      title: 'My Institutes',
      link: '/student/my-institutes/',
      home: true
    }, {
      title: 'Dashboard',
      link: '/student/dashboard/',
      home: true,
      hidden: true
    }, {
      title: 'Announcements',
      link: '/student/announcements/',
      home: true,
      hidden: true
    }, {
      title: 'Schedule',
      link: '/student/schedule/',
      home: true,
      hidden: true
    }, {
      title: 'Attendance',
      link: '/student/attendance/',
      home: true,
      hidden: true
    }, {
      title: 'Performance Report',
      link: '/student/performanceReport/',
      home: true,
      hidden: true
    }, {
      title: 'Study Materials',
      link: '/student/studentMaterial/',
      home: true,
      hidden: true
    }, {
      title: 'Forums',
      link: '/student/forumsAndChats/',
      home: true,
      hidden: true
    }, {
      title: 'Enrollment Details',
      link: '/student/enrollmentDetails/',
      home: true,
      hidden: true
    }, {
      title: 'Meetings',
      link: '/student/meeting/',
      home: true,
      hidden: true
    }, {
      title: 'Mentoring',
      link: '/student/mentoring/',
      home: true,
      hidden: true
    }, {
      title: 'EA Live',
      link: '/student/onlineClasses/',
      home: true,
      hidden: true
    }];
    /***/
  },

  /***/
  "./src/app/student/student-pages/onlinee-class/onlinee-class.component.ngfactory.js":
  /*!******************************************************************************************!*\
    !*** ./src/app/student/student-pages/onlinee-class/onlinee-class.component.ngfactory.js ***!
    \******************************************************************************************/

  /*! exports provided: RenderType_OnlineeClassComponent, View_OnlineeClassComponent_0, View_OnlineeClassComponent_Host_0, OnlineeClassComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesOnlineeClassOnlineeClassComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_OnlineeClassComponent", function () {
      return RenderType_OnlineeClassComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_OnlineeClassComponent_0", function () {
      return View_OnlineeClassComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_OnlineeClassComponent_Host_0", function () {
      return View_OnlineeClassComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineeClassComponentNgFactory", function () {
      return OnlineeClassComponentNgFactory;
    });
    /* harmony import */


    var _onlinee_class_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./onlinee-class.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/onlinee-class/onlinee-class.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _onlinee_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./onlinee-class.component */
    "./src/app/student/student-pages/onlinee-class/onlinee-class.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_OnlineeClassComponent = [_onlinee_class_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_OnlineeClassComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_OnlineeClassComponent,
      data: {}
    });

    function View_OnlineeClassComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit._id;

        _ck(_v, 1, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _v.context.$implicit.courseName + " (" + _v.context.$implicit.batchCode + ")";

        _ck(_v, 2, 0, currVal_4);
      });
    }

    function View_OnlineeClassComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "nb-list-item", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 18, "div", [["class", "row"], ["style", "width: 100%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [["class", "date-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "month"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [["class", "day"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "div", [["class", "meeting-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "detail1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["Topic: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["class", "detail1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["Start Time: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "div", [["class", "detail2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["Host: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "div", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "button", [["class", "mr-3 mb-1"], ["nbButton", ""], ["status", "info"]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.joinMeeting(_v.context.$implicit.joinUrl) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        status: [0, "status"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Join "]))], function (_ck, _v) {
        var currVal_32 = "info";

        _ck(_v, 19, 0, currVal_32);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co.month(_v.context.$implicit.startTime);

        _ck(_v, 6, 0, currVal_1);

        var currVal_2 = _co.day(_v.context.$implicit.startTime);

        _ck(_v, 8, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.topic;

        _ck(_v, 11, 0, currVal_3);

        var currVal_4 = _co.createTime(_v.context.$implicit.startTime);

        _ck(_v, 13, 0, currVal_4);

        var currVal_5 = _v.context.$implicit.hostName;

        _ck(_v, 15, 0, currVal_5);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).filled;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).outline;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ghost;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).hero;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).fullWidth;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).tabbable;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).tiny;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).small;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).medium;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).large;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).giant;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).primary;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).info;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).success;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).warning;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).danger;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).basic;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).control;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).rectangle;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).round;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).semiRound;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).iconLeft;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).iconRight;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).transitions;

        _ck(_v, 18, 1, [currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31]);
      });
    }

    function View_OnlineeClassComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-list", [], [[1, "role", 0]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbListComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_OnlineeClassComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.meetings;

        _ck(_v, 3, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).role;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_OnlineeClassComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "mt-5 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Meetings Available"]))], null, null);
    }

    function View_OnlineeClassComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "nb-card", [["status", "info"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], {
        status: [0, "status"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 16, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" UPCOMING CLASSES "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 11, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 10, "nb-select", [["fullWidth", ""], ["placeholder", "Select Course"], ["status", "basic"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null]], [[null, "selectedChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectedChange" === en) {
          var pd_0 = _co.onSelectCourse($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectedChange" === en) {
          var pd_1 = (_co.courseId = $event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], {
        status: [0, "status"],
        fullWidth: [1, "fullWidth"],
        placeholder: [2, "placeholder"],
        selected: [3, "selected"]
      }, {
        selectedChange: "selectedChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        customLabel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Select Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_OnlineeClassComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_OnlineeClassComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noMeetings", 2]], 0, 0, null, View_OnlineeClassComponent_5))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_20 = "info";

        _ck(_v, 1, 0, currVal_20);

        var currVal_41 = "basic";
        var currVal_42 = "";
        var currVal_43 = "Select Course";
        var currVal_44 = _co.courseId;

        _ck(_v, 10, 0, currVal_41, currVal_42, currVal_43, currVal_44);

        var currVal_48 = "";

        _ck(_v, 15, 0, currVal_48);

        var currVal_49 = _co.courses;

        _ck(_v, 18, 0, currVal_49);

        var currVal_50 = _co.meetings.length > 0;

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23);

        _ck(_v, 22, 0, currVal_50, currVal_51);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).outline;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).filled;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).hero;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).fullWidth;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).isOpen;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).tiny;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).small;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).medium;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).large;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).giant;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).primary;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).info;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).success;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).warning;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).danger;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).basic;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).control;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).rectangle;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).round;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).semiRound;

        _ck(_v, 8, 1, [currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40]);

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).selectedClass;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabledAttribute;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).tabindex;

        _ck(_v, 14, 0, currVal_45, currVal_46, currVal_47);
      });
    }

    function View_OnlineeClassComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_OnlineeClassComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_OnlineeClassComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-onlinee-class", [], null, null, null, View_OnlineeClassComponent_0, RenderType_OnlineeClassComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _onlinee_class_component__WEBPACK_IMPORTED_MODULE_6__["OnlineeClassComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"], _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var OnlineeClassComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-onlinee-class", _onlinee_class_component__WEBPACK_IMPORTED_MODULE_6__["OnlineeClassComponent"], View_OnlineeClassComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/onlinee-class/onlinee-class.component.scss.shim.ngstyle.js":
  /*!**************************************************************************************************!*\
    !*** ./src/app/student/student-pages/onlinee-class/onlinee-class.component.scss.shim.ngstyle.js ***!
    \**************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesOnlineeClassOnlineeClassComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".month[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n  margin-top: 10px;\n  font-size: 30px; }\n\n.day[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: #fff;\n  margin-top: 10px;\n  font-size: 20px; }\n\n.date-block[_ngcontent-%COMP%] {\n  float: left;\n  width: 75px;\n  height: 75px;\n  background-color: #0095ff; }\n\n.meeting-details[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 25px;\n  width: 60%; }\n\n.meeting-details[_ngcontent-%COMP%]   .detail1[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  display: block;\n  font-weight: bold; }\n\n.meeting-details[_ngcontent-%COMP%]   .detail2[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  color: #a3a2a2; }"];
    /***/
  },

  /***/
  "./src/app/student/student-pages/onlinee-class/onlinee-class.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/student/student-pages/onlinee-class/onlinee-class.component.ts ***!
    \********************************************************************************/

  /*! exports provided: OnlineeClassComponent */

  /***/
  function srcAppStudentStudentPagesOnlineeClassOnlineeClassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineeClassComponent", function () {
      return OnlineeClassComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");

    var OnlineeClassComponent = /*#__PURE__*/function () {
      function OnlineeClassComponent(route, studentService, api) {
        _classCallCheck(this, OnlineeClassComponent);

        this.route = route;
        this.studentService = studentService;
        this.api = api;
        this.courses = [];
        this.courseId = '';
        this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      }

      _createClass(OnlineeClassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.meetings = [];
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.getBatchesOfCourses(this.instituteId);
        }
      }, {
        key: "getBatchesOfCourses",
        value: function getBatchesOfCourses(instituteId) {
          var _this7 = this;

          this.studentService.getStudentCoursesByInstitutes(instituteId).subscribe(function (res) {
            _this7.courses = res;

            if (_this7.courses.length > 0) {
              _this7.courseId = _this7.courses[0]._id;

              _this7.onSelectCourse(_this7.courseId);
            }

            _this7.display = true;
          }, function (err) {});
        }
      }, {
        key: "month",
        value: function month(time) {
          var month = time.split('T')[0].split('-')[1];
          return this.months[+month - 1];
        }
      }, {
        key: "day",
        value: function day(time) {
          return time.split('T')[0].split('-')[2];
        }
      }, {
        key: "onSelectCourse",
        value: function onSelectCourse(id) {
          if (id !== '') {
            this.courseId = id;
            var course = this.courses.find(function (curCourse) {
              return curCourse._id === id;
            });
            this.batchId = course.batchId;
            this.getUpcomingClasses(this.instituteId, this.batchId);
          }
        }
      }, {
        key: "joinMeeting",
        value: function joinMeeting(joinUrl) {
          window.open(joinUrl, 'Zoom', 'scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no');
        }
      }, {
        key: "createTime",
        value: function createTime(time) {
          var dateTime = time.split('T');
          return dateTime[0] + ' ' + dateTime[1].substring(0, 5);
        }
      }, {
        key: "getUpcomingClasses",
        value: function getUpcomingClasses(instituteId, batchId) {
          var _this8 = this;

          this.api.getMeetingByBatch({
            instituteId: instituteId,
            batchId: batchId,
            type: 'upcoming'
          }).subscribe(function (res) {
            _this8.meetings = res;
          }, function (err) {});
        }
      }]);

      return OnlineeClassComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-announcements/student-announcements.component.ngfactory.js":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-announcements/student-announcements.component.ngfactory.js ***!
    \**********************************************************************************************************/

  /*! exports provided: RenderType_StudentAnnouncementsComponent, View_StudentAnnouncementsComponent_0, View_StudentAnnouncementsComponent_Host_0, StudentAnnouncementsComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentAnnouncementsStudentAnnouncementsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentAnnouncementsComponent", function () {
      return RenderType_StudentAnnouncementsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentAnnouncementsComponent_0", function () {
      return View_StudentAnnouncementsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentAnnouncementsComponent_Host_0", function () {
      return View_StudentAnnouncementsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAnnouncementsComponentNgFactory", function () {
      return StudentAnnouncementsComponentNgFactory;
    });
    /* harmony import */


    var _student_announcements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-announcements.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-announcements/student-announcements.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _student_announcements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-announcements.component */
    "./src/app/student/student-pages/student-announcements/student-announcements.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/communication/announcement.service */
    "./src/app/services/communication/announcement.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentAnnouncementsComponent = [_student_announcements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentAnnouncementsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentAnnouncementsComponent,
      data: {}
    });

    function View_StudentAnnouncementsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", " "]))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit.batchCode;

        _ck(_v, 1, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _v.context.$implicit.courseName + " (" + _v.context.$implicit.batchCode + ")";

        _ck(_v, 2, 0, currVal_4);
      });
    }

    function View_StudentAnnouncementsComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.attachment.secure_url;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.attachment.file_name;

        _ck(_v, 1, 0, currVal_1);
      });
    }

    function View_StudentAnnouncementsComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["--"]))], null, null);
    }

    function View_StudentAnnouncementsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentAnnouncementsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentAnnouncementsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "button", [["class", "mr-3 mb-2"], ["nbButton", ""]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.onView(_v.context.$implicit._id) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["View"]))], function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.attachment;

        _ck(_v, 9, 0, currVal_2);

        var currVal_3 = !_v.context.$implicit.attachment;

        _ck(_v, 11, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.title;

        _ck(_v, 6, 0, currVal_1);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).filled;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).outline;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ghost;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).hero;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).fullWidth;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).tabbable;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).tiny;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).small;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).medium;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).large;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).giant;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).primary;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).info;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).success;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).warning;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).danger;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).basic;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).control;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).rectangle;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).round;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).semiRound;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).iconLeft;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).iconRight;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transitions;

        _ck(_v, 13, 1, [currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29]);
      });
    }

    function View_StudentAnnouncementsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 13, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 12, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 8, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ID"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attachment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentAnnouncementsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.announcements;

        _ck(_v, 16, 0, currVal_0);
      }, null);
    }

    function View_StudentAnnouncementsComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Announcements"]))], null, null);
    }

    function View_StudentAnnouncementsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 18, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Announcements"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 12, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 10, "nb-select", [["fullWidth", ""], ["placeholder", "Select Course"], ["status", "basic"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null]], [[null, "selectedChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectedChange" === en) {
          var pd_0 = _co.onSelectCourse($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectedChange" === en) {
          var pd_1 = (_co.batchCode = $event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], {
        status: [0, "status"],
        fullWidth: [1, "fullWidth"],
        placeholder: [2, "placeholder"],
        selected: [3, "selected"]
      }, {
        selectedChange: "selectedChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        customLabel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Select Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_StudentAnnouncementsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentAnnouncementsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noAnnouncements", 2]], 0, 0, null, View_StudentAnnouncementsComponent_7))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_40 = "basic";
        var currVal_41 = "";
        var currVal_42 = "Select Course";
        var currVal_43 = _co.batchCode;

        _ck(_v, 12, 0, currVal_40, currVal_41, currVal_42, currVal_43);

        var currVal_47 = "";

        _ck(_v, 17, 0, currVal_47);

        var currVal_48 = _co.courses;

        _ck(_v, 20, 0, currVal_48);

        var currVal_49 = _co.announcements.length > 0;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25);

        _ck(_v, 24, 0, currVal_49, currVal_50);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).outline;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).filled;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).hero;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).fullWidth;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isOpen;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).tiny;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).small;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).medium;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).large;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).giant;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).primary;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).info;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).success;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).warning;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).danger;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).basic;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).control;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).rectangle;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).round;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).semiRound;

        _ck(_v, 10, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]);

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).selectedClass;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabledAttribute;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).tabindex;

        _ck(_v, 16, 0, currVal_44, currVal_45, currVal_46);
      });
    }

    function View_StudentAnnouncementsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentAnnouncementsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_StudentAnnouncementsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-announcements", [], null, null, null, View_StudentAnnouncementsComponent_0, RenderType_StudentAnnouncementsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_announcements_component__WEBPACK_IMPORTED_MODULE_6__["StudentAnnouncementsComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_8__["AnnouncementService"], _services_student_service__WEBPACK_IMPORTED_MODULE_9__["StudentService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentAnnouncementsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-announcements", _student_announcements_component__WEBPACK_IMPORTED_MODULE_6__["StudentAnnouncementsComponent"], View_StudentAnnouncementsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-announcements/student-announcements.component.scss.shim.ngstyle.js":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-announcements/student-announcements.component.scss.shim.ngstyle.js ***!
    \******************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentAnnouncementsStudentAnnouncementsComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-announcements/student-announcements.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-announcements/student-announcements.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: StudentAnnouncementsComponent */

  /***/
  function srcAppStudentStudentPagesStudentAnnouncementsStudentAnnouncementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAnnouncementsComponent", function () {
      return StudentAnnouncementsComponent;
    });
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/communication/announcement.service */
    "./src/app/services/communication/announcement.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentAnnouncementsComponent = /*#__PURE__*/function () {
      function StudentAnnouncementsComponent(toastrService, router, route, announceService, studentService) {
        _classCallCheck(this, StudentAnnouncementsComponent);

        this.toastrService = toastrService;
        this.router = router;
        this.route = route;
        this.announceService = announceService;
        this.studentService = studentService;
        this.announcements = [];
        this.courses = [];
        this.batchCode = '';
        this.display = false;
      }

      _createClass(StudentAnnouncementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.studentId = this.studentService.getStudent()._id;
          this.getCourses();
        }
      }, {
        key: "getCourses",
        value: function getCourses() {
          var _this9 = this;

          this.studentService.getStudentCoursesByInstitutes(this.instituteId).subscribe(function (res) {
            _this9.courses = res;

            if (_this9.courses.length > 0) {
              _this9.batchCode = _this9.courses[0].batchCode;

              _this9.onSelectCourse(_this9.batchCode);
            }

            _this9.display = true;
          });
        }
      }, {
        key: "onSelectCourse",
        value: function onSelectCourse(batchCode) {
          this.getAnnouncements(this.instituteId, batchCode);
        }
      }, {
        key: "onView",
        value: function onView(id) {
          this.router.navigate(['/student/view-announcement/', this.instituteId], {
            queryParams: {
              announcement: id
            }
          });
        }
      }, {
        key: "getAnnouncements",
        value: function getAnnouncements(id, batch) {
          var _this10 = this;

          this.announceService.getStudentAnnouncements(id, batch).subscribe(function (data) {
            _this10.announcements = data;
            _this10.display = true;
          });
        }
      }, {
        key: "showToast",
        value: function showToast(position, status, message) {
          this.toastrService.show(status, message, {
            position: position,
            status: status
          });
        }
      }]);

      return StudentAnnouncementsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.ngfactory.js":
  /*!****************************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.ngfactory.js ***!
    \****************************************************************************************************************************************/

  /*! exports provided: RenderType_StudentViewAnnouncementComponent, View_StudentViewAnnouncementComponent_0, View_StudentViewAnnouncementComponent_Host_0, StudentViewAnnouncementComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentAnnouncementsStudentViewAnnouncementStudentViewAnnouncementComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentViewAnnouncementComponent", function () {
      return RenderType_StudentViewAnnouncementComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentViewAnnouncementComponent_0", function () {
      return View_StudentViewAnnouncementComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentViewAnnouncementComponent_Host_0", function () {
      return View_StudentViewAnnouncementComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentViewAnnouncementComponentNgFactory", function () {
      return StudentViewAnnouncementComponentNgFactory;
    });
    /* harmony import */


    var _student_view_announcement_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-view-announcement.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../pipe/safe-html.pipe */
    "./src/app/pipe/safe-html.pipe.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _student_view_announcement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student-view-announcement.component */
    "./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../services/communication/announcement.service */
    "./src/app/services/communication/announcement.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentViewAnnouncementComponent = [_student_view_announcement_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentViewAnnouncementComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentViewAnnouncementComponent,
      data: {}
    });

    function View_StudentViewAnnouncementComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.announcement.attachment.secure_url;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.announcement.attachment.file_name;

        _ck(_v, 2, 0, currVal_1);
      });
    }

    function View_StudentViewAnnouncementComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 12, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "button", [["class", "btn btn-yellow float-right"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.back() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Back "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentViewAnnouncementComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 5, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 1, "div", [["style", "font-weight: bold;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Announcement Details:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](20, 1)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_21 = _co.announcement.attachment;

        _ck(_v, 9, 0, currVal_21);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _co.announcement.title;

        _ck(_v, 7, 0, currVal_20);

        var currVal_22 = _co.announcement.date;

        _ck(_v, 14, 0, currVal_22);

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _ck(_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.announcement.text));

        _ck(_v, 19, 0, currVal_23);
      });
    }

    function View_StudentViewAnnouncementComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__["SafeHtmlPipe"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentViewAnnouncementComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_StudentViewAnnouncementComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-view-announcement", [], null, null, null, View_StudentViewAnnouncementComponent_0, RenderType_StudentViewAnnouncementComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_view_announcement_component__WEBPACK_IMPORTED_MODULE_7__["StudentViewAnnouncementComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_9__["AnnouncementService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentViewAnnouncementComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-view-announcement", _student_view_announcement_component__WEBPACK_IMPORTED_MODULE_7__["StudentViewAnnouncementComponent"], View_StudentViewAnnouncementComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.scss.shim.ngstyle.js":
  /*!************************************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.scss.shim.ngstyle.js ***!
    \************************************************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentAnnouncementsStudentViewAnnouncementStudentViewAnnouncementComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: StudentViewAnnouncementComponent */

  /***/
  function srcAppStudentStudentPagesStudentAnnouncementsStudentViewAnnouncementStudentViewAnnouncementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentViewAnnouncementComponent", function () {
      return StudentViewAnnouncementComponent;
    });
    /* harmony import */


    var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../services/communication/announcement.service */
    "./src/app/services/communication/announcement.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var StudentViewAnnouncementComponent = /*#__PURE__*/function () {
      function StudentViewAnnouncementComponent(toastrService, route, location, announceService) {
        _classCallCheck(this, StudentViewAnnouncementComponent);

        this.toastrService = toastrService;
        this.route = route;
        this.location = location;
        this.announceService = announceService;
      }

      _createClass(StudentViewAnnouncementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.display = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.route.queryParams.subscribe(function (data) {
            _this11.announcementId = data.announcement;
          });

          if (this.announcementId) {
            this.getAnnouncement(this.announcementId);
          } else {
            this.location.back();
          }
        }
      }, {
        key: "getAnnouncement",
        value: function getAnnouncement(id) {
          var _this12 = this;

          this.announceService.getSingleAnnouncement(this.announcementId).subscribe(function (res) {
            _this12.announcement = res;
            _this12.display = true;
          }, function (err) {
            _this12.showToast('top-right', 'danger', 'Announcement Not Found');

            _this12.location.back();
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "showToast",
        value: function showToast(position, status, message) {
          this.toastrService.show(status, message, {
            position: position,
            status: status
          });
        }
      }]);

      return StudentViewAnnouncementComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-attendance/student-attendance.component.ngfactory.js":
  /*!****************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-attendance/student-attendance.component.ngfactory.js ***!
    \****************************************************************************************************/

  /*! exports provided: RenderType_StudentAttendanceComponent, View_StudentAttendanceComponent_0, View_StudentAttendanceComponent_Host_0, StudentAttendanceComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentAttendanceStudentAttendanceComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentAttendanceComponent", function () {
      return RenderType_StudentAttendanceComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentAttendanceComponent_0", function () {
      return View_StudentAttendanceComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentAttendanceComponent_Host_0", function () {
      return View_StudentAttendanceComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAttendanceComponentNgFactory", function () {
      return StudentAttendanceComponentNgFactory;
    });
    /* harmony import */


    var _student_attendance_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-attendance.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-attendance/student-attendance.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _student_attendance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-attendance.component */
    "./src/app/student/student-pages/student-attendance/student-attendance.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentAttendanceComponent = [_student_attendance_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentAttendanceComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentAttendanceComponent,
      data: {}
    });

    function View_StudentAttendanceComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit._id;

        _ck(_v, 1, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _v.context.$implicit.courseName + " (" + _v.context.$implicit.batchCode + ")";

        _ck(_v, 2, 0, currVal_4);
      });
    }

    function View_StudentAttendanceComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.date;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.status ? "Present" : "Absent";

        _ck(_v, 6, 0, currVal_2);
      });
    }

    function View_StudentAttendanceComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 40, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 39, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 25, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Total Lectures: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Total Present: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Total Absent: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attendance Percentage: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, [" ", "% "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Student Name : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 12, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 11, "table", [["class", "table table-borderless text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attendance Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentAttendanceComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_5 = _co.attendance;

        _ck(_v, 40, 0, currVal_5);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.total;

        _ck(_v, 7, 0, currVal_0);

        var currVal_1 = _co.present;

        _ck(_v, 12, 0, currVal_1);

        var currVal_2 = _co.absent;

        _ck(_v, 17, 0, currVal_2);

        var currVal_3 = (_co.present * 100 / _co.total).toFixed(2);

        _ck(_v, 22, 0, currVal_3);

        var currVal_4 = _co.studentName;

        _ck(_v, 27, 0, currVal_4);
      });
    }

    function View_StudentAttendanceComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "mt-5 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.noAttendanceData;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_StudentAttendanceComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 18, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [["class", "font-weight-bolder"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ATTENDANCE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 12, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 10, "nb-select", [["fullWidth", ""], ["placeholder", "Select Course"], ["status", "basic"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null]], [[null, "selectedChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectedChange" === en) {
          var pd_0 = _co.onSelectCourse($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectedChange" === en) {
          var pd_1 = (_co.courseId = $event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], {
        status: [0, "status"],
        fullWidth: [1, "fullWidth"],
        placeholder: [2, "placeholder"],
        selected: [3, "selected"]
      }, {
        selectedChange: "selectedChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        customLabel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Select Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_StudentAttendanceComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentAttendanceComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noAttendance", 2]], 0, 0, null, View_StudentAttendanceComponent_5))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_40 = "basic";
        var currVal_41 = "";
        var currVal_42 = "Select Course";
        var currVal_43 = _co.courseId;

        _ck(_v, 12, 0, currVal_40, currVal_41, currVal_42, currVal_43);

        var currVal_47 = "";

        _ck(_v, 17, 0, currVal_47);

        var currVal_48 = _co.courses;

        _ck(_v, 20, 0, currVal_48);

        var currVal_49 = _co.total > 0;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25);

        _ck(_v, 24, 0, currVal_49, currVal_50);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).outline;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).filled;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).hero;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).fullWidth;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isOpen;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).tiny;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).small;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).medium;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).large;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).giant;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).primary;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).info;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).success;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).warning;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).danger;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).basic;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).control;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).rectangle;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).round;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).semiRound;

        _ck(_v, 10, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]);

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).selectedClass;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).disabledAttribute;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).tabindex;

        _ck(_v, 16, 0, currVal_44, currVal_45, currVal_46);
      });
    }

    function View_StudentAttendanceComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentAttendanceComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_StudentAttendanceComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-attendance", [], null, null, null, View_StudentAttendanceComponent_0, RenderType_StudentAttendanceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_attendance_component__WEBPACK_IMPORTED_MODULE_6__["StudentAttendanceComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _services_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentAttendanceComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-attendance", _student_attendance_component__WEBPACK_IMPORTED_MODULE_6__["StudentAttendanceComponent"], View_StudentAttendanceComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-attendance/student-attendance.component.scss.shim.ngstyle.js":
  /*!************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-attendance/student-attendance.component.scss.shim.ngstyle.js ***!
    \************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentAttendanceStudentAttendanceComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-attendance/student-attendance.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-attendance/student-attendance.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: StudentAttendanceComponent */

  /***/
  function srcAppStudentStudentPagesStudentAttendanceStudentAttendanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAttendanceComponent", function () {
      return StudentAttendanceComponent;
    });
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var StudentAttendanceComponent = /*#__PURE__*/function () {
      function StudentAttendanceComponent(api, studentService, route, location) {
        _classCallCheck(this, StudentAttendanceComponent);

        this.api = api;
        this.studentService = studentService;
        this.route = route;
        this.location = location;
        this.present = 0;
        this.absent = 0;
        this.total = 0;
        this.courseId = '';
      }

      _createClass(StudentAttendanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.noAttendanceData = 'Select Course';
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.studentId = this.studentService.getStudent()._id;
          this.studentName = this.studentService.getStudent().name;
          this.attendance = [];
          this.courses = [];
          this.getCourses(this.instituteId);
        }
      }, {
        key: "getCourses",
        value: function getCourses(instituteId) {
          var _this13 = this;

          this.studentService.getStudentCoursesByInstitutes(instituteId).subscribe(function (res) {
            _this13.courses = res;

            if (_this13.courses.length > 0) {
              _this13.courseId = _this13.courses[0]._id;

              _this13.onSelectCourse(_this13.courseId);
            }

            _this13.display = true;
          }, function (err) {});
        }
      }, {
        key: "onSelectCourse",
        value: function onSelectCourse(id) {
          if (id !== '') {
            this.getAttendance(id);
          }
        }
      }, {
        key: "getAttendance",
        value: function getAttendance(courseId) {
          var _this14 = this;

          this.api.getStudentAttendanceByCourse({
            studentId: this.studentId,
            instituteId: this.instituteId,
            courseId: courseId
          }).subscribe(function (res) {
            _this14.total = res.length;
            _this14.present = 0;
            _this14.absent = 0;
            _this14.attendance = [];

            if (_this14.total === 0) {
              _this14.noAttendanceData = 'No Attendance Found';
            } else {
              res.sort(function (a1, a2) {
                if (new Date(a1.date).getTime() >= new Date(a2.date).getTime()) {
                  return 1;
                } else {
                  return -1;
                }
              });
              res.forEach(function (atten) {
                var newAtten = {
                  date: _this14.getScheduleDate(atten.date),
                  status: atten.attendance.attendanceStatus
                };

                _this14.attendance.push(newAtten);

                if (newAtten.status) {
                  _this14.present += 1;
                } else {
                  _this14.absent += 1;
                }
              });
            }
          }, function (err) {});
        }
      }, {
        key: "getScheduleDate",
        value: function getScheduleDate(date) {
          var d = date.split('-');
          return "".concat(d[2], "-").concat(d[1], "-").concat(d[0]);
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }]);

      return StudentAttendanceComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.ngfactory.js":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.ngfactory.js ***!
    \********************************************************************************************************************/

  /*! exports provided: RenderType_StudentEnrollmentDetailsComponent, View_StudentEnrollmentDetailsComponent_0, View_StudentEnrollmentDetailsComponent_Host_0, StudentEnrollmentDetailsComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentEnrollmentDetailsStudentEnrollmentDetailsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentEnrollmentDetailsComponent", function () {
      return RenderType_StudentEnrollmentDetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentEnrollmentDetailsComponent_0", function () {
      return View_StudentEnrollmentDetailsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentEnrollmentDetailsComponent_Host_0", function () {
      return View_StudentEnrollmentDetailsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentEnrollmentDetailsComponentNgFactory", function () {
      return StudentEnrollmentDetailsComponentNgFactory;
    });
    /* harmony import */


    var _student_enrollment_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-enrollment-details.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _student_enrollment_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-enrollment-details.component */
    "./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentEnrollmentDetailsComponent = [_student_enrollment_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentEnrollmentDetailsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentEnrollmentDetailsComponent,
      data: {}
    });

    function View_StudentEnrollmentDetailsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "button", [["class", "mr-2 mb-2"], ["nbButton", ""], ["status", "primary"]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.view(_v.context.$implicit.instituteDetails.courseId) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        status: [0, "status"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" View "]))], function (_ck, _v) {
        var currVal_29 = "primary";

        _ck(_v, 9, 0, currVal_29);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.courseDetails.name;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.instituteDetails.rollNumber;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.instituteDetails.active ? "Active" : "Pending";

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).filled;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).outline;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ghost;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).hero;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).fullWidth;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).tabbable;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).tiny;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).small;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).medium;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).large;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).giant;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).primary;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).info;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).success;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).warning;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).danger;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).basic;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).control;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).rectangle;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).round;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).semiRound;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).iconLeft;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).iconRight;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transitions;

        _ck(_v, 8, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28]);
      });
    }

    function View_StudentEnrollmentDetailsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Roll No."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentEnrollmentDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.courses;

        _ck(_v, 11, 0, currVal_0);
      }, null);
    }

    function View_StudentEnrollmentDetailsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Courses Found"]))], null, null);
    }

    function View_StudentEnrollmentDetailsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 5, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [["class", "font-weight-bolder"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Courses"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentEnrollmentDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noCourses", 2]], 0, 0, null, View_StudentEnrollmentDetailsComponent_3))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_20 = _co.courses.length > 0;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12);

        _ck(_v, 11, 0, currVal_20, currVal_21);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);
      });
    }

    function View_StudentEnrollmentDetailsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-enrollment-details", [], null, null, null, View_StudentEnrollmentDetailsComponent_0, RenderType_StudentEnrollmentDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_enrollment_details_component__WEBPACK_IMPORTED_MODULE_5__["StudentEnrollmentDetailsComponent"], [_services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentEnrollmentDetailsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-enrollment-details", _student_enrollment_details_component__WEBPACK_IMPORTED_MODULE_5__["StudentEnrollmentDetailsComponent"], View_StudentEnrollmentDetailsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.scss.shim.ngstyle.js":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.scss.shim.ngstyle.js ***!
    \****************************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentEnrollmentDetailsStudentEnrollmentDetailsComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: StudentEnrollmentDetailsComponent */

  /***/
  function srcAppStudentStudentPagesStudentEnrollmentDetailsStudentEnrollmentDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentEnrollmentDetailsComponent", function () {
      return StudentEnrollmentDetailsComponent;
    });
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StudentEnrollmentDetailsComponent = /*#__PURE__*/function () {
      function StudentEnrollmentDetailsComponent(studentService, router, route) {
        _classCallCheck(this, StudentEnrollmentDetailsComponent);

        this.studentService = studentService;
        this.router = router;
        this.route = route;
      }

      _createClass(StudentEnrollmentDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.courses = [];
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.getCourses(this.instituteId);
        }
      }, {
        key: "getCourses",
        value: function getCourses(id) {
          var _this15 = this;

          this.studentService.getStudentAllCoursesByInstitute(id).subscribe(function (data) {
            _this15.courses = data;
            _this15.display = true;
          });
        }
      }, {
        key: "view",
        value: function view(course) {
          this.router.navigate(["/student/viewEnrollment/".concat(this.instituteId)], {
            queryParams: {
              student: this.studentService.getStudent().eduAtlasId,
              course: course
            }
          });
        }
      }]);

      return StudentEnrollmentDetailsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.ngfactory.js":
  /*!*****************************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.ngfactory.js ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: RenderType_StudentViewEnrollmentComponent, View_StudentViewEnrollmentComponent_0, View_StudentViewEnrollmentComponent_Host_0, StudentViewEnrollmentComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentEnrollmentDetailsStudentViewEnrollmentStudentViewEnrollmentComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentViewEnrollmentComponent", function () {
      return RenderType_StudentViewEnrollmentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentViewEnrollmentComponent_0", function () {
      return View_StudentViewEnrollmentComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentViewEnrollmentComponent_Host_0", function () {
      return View_StudentViewEnrollmentComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentViewEnrollmentComponentNgFactory", function () {
      return StudentViewEnrollmentComponentNgFactory;
    });
    /* harmony import */


    var _student_view_enrollment_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-view-enrollment.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _student_view_enrollment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-view-enrollment.component */
    "./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentViewEnrollmentComponent = [_student_view_enrollment_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentViewEnrollmentComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentViewEnrollmentComponent,
      data: {}
    });

    function View_StudentViewEnrollmentComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 42, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 39, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 38, "table", [["class", "table table-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 37, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Batch: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Roll No: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date of Admission: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](36, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Net Payable: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.getCourse(_co.student.instituteDetails.courseId);

        _ck(_v, 11, 0, currVal_0);

        var currVal_1 = _co.getBatch(_co.student.instituteDetails.batchId);

        _ck(_v, 17, 0, currVal_1);

        var currVal_2 = _co.student.instituteDetails.status ? "Active" : "Pending";

        _ck(_v, 23, 0, currVal_2);

        var currVal_3 = _co.student.instituteDetails.rollNumber;

        _ck(_v, 30, 0, currVal_3);

        var currVal_4 = _co.student.fees.date;

        _ck(_v, 36, 0, currVal_4);

        var currVal_5 = _co.student.instituteDetails.netPayable;

        _ck(_v, 42, 0, currVal_5);
      });
    }

    function View_StudentViewEnrollmentComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["class", "receipt"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Receipt"]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.receiptLink;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_StudentViewEnrollmentComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "tr", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        ngClass: [0, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["Installment ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentViewEnrollmentComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.paidStatus === "true" ? "paid-installment" : "unpaid-installment";

        _ck(_v, 2, 0, currVal_0);

        var currVal_8 = _v.context.$implicit.paidStatus === "true" && _v.context.$implicit.receiptLink;

        _ck(_v, 20, 0, currVal_8);
      }, function (_ck, _v) {
        var currVal_1 = _v.context.index + 1;

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.paidOn;

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.amount;

        _ck(_v, 9, 0, currVal_3);

        var currVal_4 = _v.context.$implicit.amountPending;

        _ck(_v, 11, 0, currVal_4);

        var currVal_5 = _v.context.$implicit.paymentMode;

        _ck(_v, 13, 0, currVal_5);

        var currVal_6 = _v.context.$implicit.bankDetails;

        _ck(_v, 15, 0, currVal_6);

        var currVal_7 = _v.context.$implicit.transDetails;

        _ck(_v, 17, 0, currVal_7);
      });
    }

    function View_StudentViewEnrollmentComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 57, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 3, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "button", [["class", "btn float-right mr-3 btn btn-yellow"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.back() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Back"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 51, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 49, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentViewEnrollmentComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 46, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Payment/Installment Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 20, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 19, "table", [["class", "table table-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 18, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Total Payable Amount: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount Collected: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pending Amount: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](34, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 22, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 21, "table", [["class", "table table-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 17, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 16, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Installment No."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Installment Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pending Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Payment Mode"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Bank Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Transaction Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Receipt"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentViewEnrollmentComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_20 = _co.display;

        _ck(_v, 10, 0, currVal_20);

        var currVal_24 = _co.student.fees.installments;

        _ck(_v, 57, 0, currVal_24);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_21 = _co.student.fees.totalAmount;

        _ck(_v, 22, 0, currVal_21);

        var currVal_22 = _co.student.fees.amountCollected;

        _ck(_v, 28, 0, currVal_22);

        var currVal_23 = _co.student.fees.pendingAmount;

        _ck(_v, 34, 0, currVal_23);
      });
    }

    function View_StudentViewEnrollmentComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentViewEnrollmentComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.student;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_StudentViewEnrollmentComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-view-enrollment", [], null, null, null, View_StudentViewEnrollmentComponent_0, RenderType_StudentViewEnrollmentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_view_enrollment_component__WEBPACK_IMPORTED_MODULE_5__["StudentViewEnrollmentComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentViewEnrollmentComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-view-enrollment", _student_view_enrollment_component__WEBPACK_IMPORTED_MODULE_5__["StudentViewEnrollmentComponent"], View_StudentViewEnrollmentComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.scss.shim.ngstyle.js":
  /*!*************************************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.scss.shim.ngstyle.js ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentEnrollmentDetailsStudentViewEnrollmentStudentViewEnrollmentComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".paid-installment[_ngcontent-%COMP%] {\n  background-color: #00d68f;\n  color: #fff; }\n\n.unpaid-installment[_ngcontent-%COMP%] {\n  background-color: #c80505;\n  color: #fff; }\n\n.receipt[_ngcontent-%COMP%] {\n  color: #ffd500;\n  font-weight: bold; }"];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.ts":
  /*!*******************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.ts ***!
    \*******************************************************************************************************************************/

  /*! exports provided: StudentViewEnrollmentComponent */

  /***/
  function srcAppStudentStudentPagesStudentEnrollmentDetailsStudentViewEnrollmentStudentViewEnrollmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentViewEnrollmentComponent", function () {
      return StudentViewEnrollmentComponent;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var StudentViewEnrollmentComponent = /*#__PURE__*/function () {
      function StudentViewEnrollmentComponent(api, toasterService, route, location) {
        _classCallCheck(this, StudentViewEnrollmentComponent);

        this.api = api;
        this.toasterService = toasterService;
        this.route = route;
        this.location = location;
      }

      _createClass(StudentViewEnrollmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.display = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.route.queryParams.subscribe(function (data) {
            _this16.studentEduId = data.student;
            _this16.courseId = data.course;
          });
          this.getCourses();
          this.getStudent(this.studentEduId, this.instituteId, this.courseId);
        }
      }, {
        key: "getCourses",
        value: function getCourses() {
          var _this17 = this;

          this.api.getCourseTD(this.instituteId).subscribe(function (res) {
            _this17.institute = res;
            _this17.display = true;
          });
        }
      }, {
        key: "getCourse",
        value: function getCourse(id) {
          return this.institute.course.find(function (course) {
            return course._id === id;
          }).name;
        }
      }, {
        key: "getBatch",
        value: function getBatch(id) {
          if (id !== '') {
            return this.institute.batch.find(function (batch) {
              return batch._id === id;
            }).batchCode;
          }
        }
      }, {
        key: "getStudent",
        value: function getStudent(student, institute, course) {
          var _this18 = this;

          this.api.getOneStudentByInstitute({
            eduatlasId: student,
            instituteId: institute,
            courseId: course
          }).subscribe(function (data) {
            _this18.student = data[0];
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        } // Show Toaster

      }, {
        key: "showToaster",
        value: function showToaster(position, status, message) {
          this.toasterService.show(status, message, {
            position: position,
            status: status
          });
        }
      }]);

      return StudentViewEnrollmentComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.ngfactory.js":
  /*!*******************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.ngfactory.js ***!
    \*******************************************************************************************************************************/

  /*! exports provided: RenderType_StudentForumCommentComponent, View_StudentForumCommentComponent_0, View_StudentForumCommentComponent_Host_0, StudentForumCommentComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentForumsChatsStudentForumCommentStudentForumCommentComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentForumCommentComponent", function () {
      return RenderType_StudentForumCommentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentForumCommentComponent_0", function () {
      return View_StudentForumCommentComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentForumCommentComponent_Host_0", function () {
      return View_StudentForumCommentComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentForumCommentComponentNgFactory", function () {
      return StudentForumCommentComponentNgFactory;
    });
    /* harmony import */


    var _student_forum_comment_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-forum-comment.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _student_forum_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-forum-comment.component */
    "./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../services/auth-services/auth.service */
    "./src/app/services/auth-services/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentForumCommentComponent = [_student_forum_comment_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentForumCommentComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentForumCommentComponent,
      data: {}
    });

    function View_StudentForumCommentComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course Name : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.forumCommentData.courseName;

        _ck(_v, 4, 0, currVal_0);
      });
    }

    function View_StudentForumCommentComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "deleteComment"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.deleteComment(_v.parent.context.$implicit._id) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-trash"]], null, null, null, null, null))], null, null);
    }

    function View_StudentForumCommentComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [["class", "commentBox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comment By : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comment At : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "div", [["class", "my-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentForumCommentComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_3 = _v.context.$implicit.userId == _co.authService.getUser()._id;

        _ck(_v, 15, 0, currVal_3);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.$implicit.userName;

        _ck(_v, 6, 0, currVal_0);

        var currVal_1 = _co.getFormattedDateTime(_v.context.$implicit.commentDate);

        _ck(_v, 11, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.comment;

        _ck(_v, 13, 0, currVal_2);
      });
    }

    function View_StudentForumCommentComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["You Are The First One To Comment"]))], null, null);
    }

    function View_StudentForumCommentComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 47, "nb-card", [["status", "info"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], {
        status: [0, "status"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 22, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "div", [["class", "row mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h3", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["Description : ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Created By :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Created at :"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentForumCommentComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 1, 22, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentForumCommentComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentForumCommentComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 0, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 10, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Your Comment: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 7, "textarea", [["fullWidth", ""], ["nbInput", ""], ["placeholder", "Comment"], ["rows", "5"], ["status", "basic"], ["type", "text"]], [[2, "input-full-width", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-semi-round", null], [2, "shape-round", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.userComment = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], [], {
        status: [0, "status"],
        fullWidth: [1, "fullWidth"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 0, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, 0, 1, "button", [["class", "float-right mt-3 btn btn-yellow-black"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.submitComment() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Submit "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_20 = "info";

        _ck(_v, 1, 0, currVal_20);

        var currVal_25 = _co.forumCommentData.courseName;

        _ck(_v, 24, 0, currVal_25);

        var currVal_26 = _co.forumCommentData.comments;

        _ck(_v, 29, 0, currVal_26);

        var currVal_27 = _co.forumCommentData.comments.length === 0;

        _ck(_v, 31, 0, currVal_27);

        var currVal_51 = "basic";
        var currVal_52 = "";

        _ck(_v, 38, 0, currVal_51, currVal_52);

        var currVal_53 = _co.userComment;

        _ck(_v, 41, 0, currVal_53);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_21 = _co.forumCommentData.title;

        _ck(_v, 7, 0, currVal_21);

        var currVal_22 = _co.forumCommentData.description;

        _ck(_v, 10, 0, currVal_22);

        var currVal_23 = _co.forumCommentData.createdByName;

        _ck(_v, 17, 0, currVal_23);

        var currVal_24 = _co.getFormattedDateTime(_co.forumCommentData.date);

        _ck(_v, 22, 0, currVal_24);

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).fullWidth;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).tiny;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).small;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).medium;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).large;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).giant;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).primary;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).info;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).success;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).warning;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).danger;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).basic;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).control;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).rectangle;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).semiRound;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).round;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassUntouched;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassTouched;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPristine;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassDirty;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassValid;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassInvalid;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPending;

        _ck(_v, 37, 1, [currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50]);
      });
    }

    function View_StudentForumCommentComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "py-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-yellow-black float-right"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.back() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Back "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentForumCommentComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.forumCommentData;

        _ck(_v, 6, 0, currVal_0);
      }, null);
    }

    function View_StudentForumCommentComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-forum-comment", [], null, null, null, View_StudentForumCommentComponent_0, RenderType_StudentForumCommentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_forum_comment_component__WEBPACK_IMPORTED_MODULE_6__["StudentForumCommentComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"], _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentForumCommentComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-forum-comment", _student_forum_comment_component__WEBPACK_IMPORTED_MODULE_6__["StudentForumCommentComponent"], View_StudentForumCommentComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.scss.shim.ngstyle.js":
  /*!***************************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.scss.shim.ngstyle.js ***!
    \***************************************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentForumsChatsStudentForumCommentStudentForumCommentComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".commentBox[_ngcontent-%COMP%] {\n  background-color: #f1efef;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 10px;\n  position: relative; }\n\n.commentBox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold; }\n\n.commentBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold; }\n\n.deleteComment[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  cursor: pointer; }\n\n.deleteComment[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: red; }"];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: StudentForumCommentComponent */

  /***/
  function srcAppStudentStudentPagesStudentForumsChatsStudentForumCommentStudentForumCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentForumCommentComponent", function () {
      return StudentForumCommentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/auth-services/auth.service */
    "./src/app/services/auth-services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var StudentForumCommentComponent = /*#__PURE__*/function () {
      function StudentForumCommentComponent(api, location, route, toasterService, authService) {
        _classCallCheck(this, StudentForumCommentComponent);

        this.api = api;
        this.location = location;
        this.route = route;
        this.toasterService = toasterService;
        this.authService = authService;
        this.messages = [];
      }

      _createClass(StudentForumCommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.route.queryParams.subscribe(function (data) {
            _this19.forumId = data.forumId;

            _this19.getForum();
          });
        }
      }, {
        key: "getForum",
        value: function getForum() {
          var _this20 = this;

          this.api.getSingleForum({
            _id: this.forumId
          }).subscribe(function (data) {
            _this20.forumCommentData = data;
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "submitComment",
        value: function submitComment() {
          var _this21 = this;

          if (!this.userComment) {
            return;
          }

          var comment = {
            userId: this.authService.getUser()._id,
            userName: this.authService.getUser().name,
            comment: this.userComment
          };
          this.api.addComment({
            _id: this.forumId,
            comment: comment
          }).subscribe(function (data) {
            _this21.userComment = null;

            _this21.showToast('top-right', 'success', 'Comment Added Successfully');

            _this21.getForum();
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "getFormattedDateTime",
        value: function getFormattedDateTime(dateTime) {
          var date = new Date(dateTime);
          return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' : ' + date.getHours() + ':' + date.getMinutes();
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(commentId) {
          var _this22 = this;

          if (window.confirm('Do you want to delete your comment ?')) {
            this.api.deleteComment({
              _id: this.forumId,
              commentId: commentId,
              userId: this.authService.getUser()._id
            }).subscribe(function (data) {
              _this22.showToast('top-right', 'success', 'Comment Deleted Successfully');

              _this22.getForum();
            }, function (err) {
              return _this22.showToast('top-right', 'danger', err.error.message);
            });
          }
        }
      }, {
        key: "showToast",
        value: function showToast(position, status, message) {
          this.toasterService.show(status, message, {
            position: position,
            status: status
          });
        }
      }]);

      return StudentForumCommentComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.ngfactory.js":
  /*!********************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.ngfactory.js ***!
    \********************************************************************************************************/

  /*! exports provided: RenderType_StudentForumsChatsComponent, View_StudentForumsChatsComponent_0, View_StudentForumsChatsComponent_Host_0, StudentForumsChatsComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentForumsChatsStudentForumsChatsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentForumsChatsComponent", function () {
      return RenderType_StudentForumsChatsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentForumsChatsComponent_0", function () {
      return View_StudentForumsChatsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentForumsChatsComponent_Host_0", function () {
      return View_StudentForumsChatsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentForumsChatsComponentNgFactory", function () {
      return StudentForumsChatsComponentNgFactory;
    });
    /* harmony import */


    var _student_forums_chats_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-forums-chats.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _student_forums_chats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-forums-chats.component */
    "./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentForumsChatsComponent = [_student_forums_chats_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentForumsChatsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentForumsChatsComponent,
      data: {}
    });

    function View_StudentForumsChatsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit._id;

        _ck(_v, 1, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _v.context.$implicit.courseName + " (" + _v.context.$implicit.batchCode + ")";

        _ck(_v, 2, 0, currVal_4);
      });
    }

    function View_StudentForumsChatsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "row mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [["class", "text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Forum"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 12, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "nb-select", [["fullWidth", ""], ["placeholder", "Select Course"], ["status", "basic"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null]], [[null, "selectedChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectedChange" === en) {
          var pd_0 = _co.onSelectCourse($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectedChange" === en) {
          var pd_1 = (_co.courseId = $event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], {
        status: [0, "status"],
        fullWidth: [1, "fullWidth"],
        placeholder: [2, "placeholder"],
        selected: [3, "selected"]
      }, {
        selectedChange: "selectedChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        customLabel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Select Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_StudentForumsChatsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_20 = "basic";
        var currVal_21 = "";
        var currVal_22 = "Select Course";
        var currVal_23 = _co.courseId;

        _ck(_v, 8, 0, currVal_20, currVal_21, currVal_22, currVal_23);

        var currVal_27 = "";

        _ck(_v, 13, 0, currVal_27);

        var currVal_28 = _co.courses;

        _ck(_v, 16, 0, currVal_28);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).outline;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).filled;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).hero;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).fullWidth;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).isOpen;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).tiny;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).small;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).medium;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).large;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).giant;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).primary;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).info;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).success;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).warning;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).danger;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).basic;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).control;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).rectangle;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).round;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).semiRound;

        _ck(_v, 6, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).selectedClass;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).disabledAttribute;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).tabindex;

        _ck(_v, 12, 0, currVal_24, currVal_25, currVal_26);
      });
    }

    function View_StudentForumsChatsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "td", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "button", [["class", "mr-3 mb-2 btn btn-yellow-black"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.comment(_v.context.$implicit._id) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Comment "]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.title;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.courseId;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.date;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.createdByName;

        _ck(_v, 8, 0, currVal_3);
      });
    }

    function View_StudentForumsChatsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "table", [["class", "table table-borderless text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Topic"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Created By"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentForumsChatsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.allForums;

        _ck(_v, 13, 0, currVal_0);
      }, null);
    }

    function View_StudentForumsChatsComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "mt-5 mb-5 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Record Found"]))], null, null);
    }

    function View_StudentForumsChatsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "nb-card", [["status", "info"]], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], {
        status: [0, "status"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 3, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentForumsChatsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentForumsChatsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noForums", 2]], 0, 0, null, View_StudentForumsChatsComponent_5))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_20 = "info";

        _ck(_v, 1, 0, currVal_20);

        var currVal_21 = _co.courses;

        _ck(_v, 5, 0, currVal_21);

        var currVal_22 = _co.allForums.length > 0;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10);

        _ck(_v, 9, 0, currVal_22, currVal_23);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);
      });
    }

    function View_StudentForumsChatsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-forums-chats", [], null, null, null, View_StudentForumsChatsComponent_0, RenderType_StudentForumsChatsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_forums_chats_component__WEBPACK_IMPORTED_MODULE_6__["StudentForumsChatsComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _services_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentForumsChatsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-forums-chats", _student_forums_chats_component__WEBPACK_IMPORTED_MODULE_6__["StudentForumsChatsComponent"], View_StudentForumsChatsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.scss.shim.ngstyle.js":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.scss.shim.ngstyle.js ***!
    \****************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentForumsChatsStudentForumsChatsComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: StudentForumsChatsComponent */

  /***/
  function srcAppStudentStudentPagesStudentForumsChatsStudentForumsChatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentForumsChatsComponent", function () {
      return StudentForumsChatsComponent;
    });
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StudentForumsChatsComponent = /*#__PURE__*/function () {
      function StudentForumsChatsComponent(api, studentService, router, route) {
        _classCallCheck(this, StudentForumsChatsComponent);

        this.api = api;
        this.studentService = studentService;
        this.router = router;
        this.route = route;
        this.courseId = '';
        this.courses = [];
        this.allForums = [];
      }

      _createClass(StudentForumsChatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.getCourses(this.instituteId);
        }
      }, {
        key: "getCourses",
        value: function getCourses(instituteId) {
          var _this23 = this;

          this.studentService.getStudentCoursesByInstitutes(instituteId).subscribe(function (res) {
            _this23.courses = res;

            if (_this23.courses.length > 0) {
              _this23.courseId = _this23.courses[0]._id;

              _this23.onSelectCourse(_this23.courseId);
            }

            _this23.display = true;
          }, function (err) {});
        }
      }, {
        key: "onSelectCourse",
        value: function onSelectCourse(courseId) {
          if (courseId !== '') {
            this.courseId = courseId;
            this.getForums();
          }
        }
      }, {
        key: "getForums",
        value: function getForums() {
          var _this24 = this;

          this.api.getForumsByInstitute({
            instituteId: this.instituteId,
            courseId: this.courseId
          }).subscribe(function (res) {
            _this24.allForums = res;

            _this24.allForums.map(function (myForum) {
              var date = new Date(myForum.date);
              myForum.date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
              return myForum;
            });
          });
        }
      }, {
        key: "comment",
        value: function comment(id) {
          this.router.navigate(["/student/forumsAndChats/comments/".concat(this.instituteId)], {
            queryParams: {
              forumId: id,
              edit: true
            }
          });
        }
      }]);

      return StudentForumsChatsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-meeting/student-meeting.component.ngfactory.js":
  /*!**********************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-meeting/student-meeting.component.ngfactory.js ***!
    \**********************************************************************************************/

  /*! exports provided: RenderType_StudentMeetingComponent, View_StudentMeetingComponent_0, View_StudentMeetingComponent_Host_0, StudentMeetingComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentMeetingStudentMeetingComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentMeetingComponent", function () {
      return RenderType_StudentMeetingComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentMeetingComponent_0", function () {
      return View_StudentMeetingComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentMeetingComponent_Host_0", function () {
      return View_StudentMeetingComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentMeetingComponentNgFactory", function () {
      return StudentMeetingComponentNgFactory;
    });
    /* harmony import */


    var _student_meeting_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-meeting.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-meeting/student-meeting.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _student_meeting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student-meeting.component */
    "./src/app/student/student-pages/student-meeting/student-meeting.component.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentMeetingComponent = [_student_meeting_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentMeetingComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentMeetingComponent,
      data: {}
    });

    function View_StudentMeetingComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit._id;

        _ck(_v, 1, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _v.context.$implicit.courseName + " (" + _v.context.$implicit.batchCode + ")";

        _ck(_v, 2, 0, currVal_4);
      });
    }

    function View_StudentMeetingComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.getDate(_v.context.$implicit.meeting.date);

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.getTime(_v.context.$implicit.meeting.time);

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.meeting.description;

        _ck(_v, 8, 0, currVal_3);
      });
    }

    function View_StudentMeetingComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentMeetingComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.pastMeetings;

        _ck(_v, 14, 0, currVal_0);
      }, null);
    }

    function View_StudentMeetingComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Past Meetings"]))], null, null);
    }

    function View_StudentMeetingComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.getDate(_v.context.$implicit.meeting.date);

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.getTime(_v.context.$implicit.meeting.time);

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.meeting.description;

        _ck(_v, 8, 0, currVal_3);
      });
    }

    function View_StudentMeetingComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentMeetingComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.upcomingMeetings;

        _ck(_v, 14, 0, currVal_0);
      }, null);
    }

    function View_StudentMeetingComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Upcoming Meetings"]))], null, null);
    }

    function View_StudentMeetingComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 34, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 17, "nb-card-header", [["style", "background-color: #ffd500;"]], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 15, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["MEETING"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 11, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 10, "nb-select", [["fullWidth", ""], ["placeholder", "Select Course"], ["status", "basic"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null]], [[null, "selectedChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectedChange" === en) {
          var pd_0 = _co.onSelectCourse($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectedChange" === en) {
          var pd_1 = (_co.courseId = $event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], {
        status: [0, "status"],
        fullWidth: [1, "fullWidth"],
        placeholder: [2, "placeholder"],
        selected: [3, "selected"]
      }, {
        selectedChange: "selectedChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        customLabel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Select Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_StudentMeetingComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 1, 14, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 12, "nb-tabset", [["fullWidth", ""]], [[2, "full-width", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbTabsetComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbTabsetComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 1097728, null, 1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabsetComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        fullWidth: [0, "fullWidth"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        tabs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 4, "nb-tab", [["tabTitle", "PAST MEETINGS"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 49152, [[3, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabComponent"], [], {
        tabTitle: [0, "tabTitle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentMeetingComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noPastMeetings", 2]], 0, 0, null, View_StudentMeetingComponent_5)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 4, "nb-tab", [["tabTitle", "UPCOMING MEETING"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 49152, [[3, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabComponent"], [], {
        tabTitle: [0, "tabTitle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentMeetingComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noUpcomingMeetings", 2]], 0, 0, null, View_StudentMeetingComponent_8))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_40 = "basic";
        var currVal_41 = "";
        var currVal_42 = "Select Course";
        var currVal_43 = _co.courseId;

        _ck(_v, 11, 0, currVal_40, currVal_41, currVal_42, currVal_43);

        var currVal_47 = "";

        _ck(_v, 16, 0, currVal_47);

        var currVal_48 = _co.courses;

        _ck(_v, 19, 0, currVal_48);

        var currVal_50 = "";

        _ck(_v, 23, 0, currVal_50);

        var currVal_53 = "PAST MEETINGS";

        _ck(_v, 26, 0, currVal_53);

        var currVal_54 = _co.pastMeetings.length > 0;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29);

        _ck(_v, 28, 0, currVal_54, currVal_55);

        var currVal_58 = "UPCOMING MEETING";

        _ck(_v, 31, 0, currVal_58);

        var currVal_59 = _co.upcomingMeetings.length > 0;

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34);

        _ck(_v, 33, 0, currVal_59, currVal_60);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).outline;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).filled;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).hero;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).fullWidth;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isOpen;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).tiny;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).small;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).medium;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).large;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).giant;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).primary;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).info;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).success;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).warning;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).danger;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).basic;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).control;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).rectangle;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).round;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).semiRound;

        _ck(_v, 9, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]);

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).selectedClass;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabledAttribute;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).tabindex;

        _ck(_v, 15, 0, currVal_44, currVal_45, currVal_46);

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).fullWidthValue;

        _ck(_v, 22, 0, currVal_49);

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled;

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).activeValue;

        _ck(_v, 25, 0, currVal_51, currVal_52);

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).disabled;

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).activeValue;

        _ck(_v, 30, 0, currVal_56, currVal_57);
      });
    }

    function View_StudentMeetingComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentMeetingComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_StudentMeetingComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-meeting", [], null, null, null, View_StudentMeetingComponent_0, RenderType_StudentMeetingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_meeting_component__WEBPACK_IMPORTED_MODULE_7__["StudentMeetingComponent"], [_services_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentMeetingComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-meeting", _student_meeting_component__WEBPACK_IMPORTED_MODULE_7__["StudentMeetingComponent"], View_StudentMeetingComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-meeting/student-meeting.component.scss.shim.ngstyle.js":
  /*!******************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-meeting/student-meeting.component.scss.shim.ngstyle.js ***!
    \******************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentMeetingStudentMeetingComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-meeting/student-meeting.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-meeting/student-meeting.component.ts ***!
    \************************************************************************************/

  /*! exports provided: StudentMeetingComponent */

  /***/
  function srcAppStudentStudentPagesStudentMeetingStudentMeetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentMeetingComponent", function () {
      return StudentMeetingComponent;
    });
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StudentMeetingComponent = /*#__PURE__*/function () {
      function StudentMeetingComponent(studentService, toasterService, route) {
        _classCallCheck(this, StudentMeetingComponent);

        this.studentService = studentService;
        this.toasterService = toasterService;
        this.route = route;
        this.courses = [];
        this.courseId = '';
        this.pastMeetings = [];
        this.upcomingMeetings = [];
      }

      _createClass(StudentMeetingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.getBatchesOfCourses(this.instituteId);
        }
      }, {
        key: "getBatchesOfCourses",
        value: function getBatchesOfCourses(instituteId) {
          var _this25 = this;

          this.studentService.getStudentCoursesByInstitutes(instituteId).subscribe(function (res) {
            _this25.courses = res;

            if (_this25.courses.length > 0) {
              _this25.courseId = _this25.courses[0]._id;

              _this25.onSelectCourse(_this25.courseId);
            }

            _this25.display = true;
          }, function (err) {});
        }
      }, {
        key: "onSelectCourse",
        value: function onSelectCourse(id) {
          if (id !== '') {
            this.courseId = id;
            var course = this.courses.find(function (curCourse) {
              return curCourse._id === id;
            });
            this.batchId = course.batchId;
            this.getMentoring({
              instituteId: this.instituteId,
              courseId: this.courseId,
              batchId: this.batchId
            });
          }
        }
      }, {
        key: "getMentoring",
        value: function getMentoring(data) {
          var _this26 = this;

          this.studentService.getPTMForStudent(data).subscribe(function (res) {
            _this26.pastMeetings = res.pastMeetings;
            _this26.upcomingMeetings = res.upcomingMeetings;
          });
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          var hour = +time.split(':')[0];
          var min = time.split(':')[1];
          var t = '';

          if (hour > 12) {
            t = (hour - 12).toString() + ':' + min + ' PM';
          } else {
            t = hour.toString() + ':' + min + ' AM';
          }

          return t;
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          var d = date.split('-');
          return "".concat(d[2], "-").concat(d[1], "-").concat(d[0]);
        }
      }, {
        key: "showToast",
        value: function showToast(position, status, message) {
          this.toasterService.show(status, message, {
            position: position,
            status: status
          });
        }
      }]);

      return StudentMeetingComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-mentoring/student-mentoring.component.ngfactory.js":
  /*!**************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-mentoring/student-mentoring.component.ngfactory.js ***!
    \**************************************************************************************************/

  /*! exports provided: RenderType_StudentMentoringComponent, View_StudentMentoringComponent_0, View_StudentMentoringComponent_Host_0, StudentMentoringComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentMentoringStudentMentoringComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentMentoringComponent", function () {
      return RenderType_StudentMentoringComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentMentoringComponent_0", function () {
      return View_StudentMentoringComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentMentoringComponent_Host_0", function () {
      return View_StudentMentoringComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentMentoringComponentNgFactory", function () {
      return StudentMentoringComponentNgFactory;
    });
    /* harmony import */


    var _student_mentoring_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-mentoring.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-mentoring/student-mentoring.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _student_mentoring_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-mentoring.component */
    "./src/app/student/student-pages/student-mentoring/student-mentoring.component.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentMentoringComponent = [_student_mentoring_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentMentoringComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentMentoringComponent,
      data: {}
    });

    function View_StudentMentoringComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.getDate(_v.context.$implicit.date);

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.getTime(_v.context.$implicit.time);

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.note;

        _ck(_v, 8, 0, currVal_3);
      });
    }

    function View_StudentMentoringComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Note"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentMentoringComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.pastMentorings;

        _ck(_v, 14, 0, currVal_0);
      }, null);
    }

    function View_StudentMentoringComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Past Mentoring Sessions"]))], null, null);
    }

    function View_StudentMentoringComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.getDate(_v.context.$implicit.date);

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.getTime(_v.context.$implicit.time);

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.note;

        _ck(_v, 8, 0, currVal_3);
      });
    }

    function View_StudentMentoringComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Note"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentMentoringComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.upcomingMentorings;

        _ck(_v, 14, 0, currVal_0);
      }, null);
    }

    function View_StudentMentoringComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Upcoming Mentoring Sessions"]))], null, null);
    }

    function View_StudentMentoringComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 5, "nb-card-header", [["style", "background-color: #ffd500;"]], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["mentoring"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 1, 14, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 12, "nb-tabset", [["fullWidth", ""]], [[2, "full-width", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbTabsetComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbTabsetComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1097728, null, 1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabsetComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        fullWidth: [0, "fullWidth"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        tabs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 4, "nb-tab", [["tabTitle", "PAST mentoringS"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 49152, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabComponent"], [], {
        tabTitle: [0, "tabTitle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentMentoringComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noPastMentorings", 2]], 0, 0, null, View_StudentMentoringComponent_4)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 4, "nb-tab", [["tabTitle", "UPCOMING mentoring"]], [[2, "disabled", null], [2, "content-active", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbTabComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabComponent"], [], {
        tabTitle: [0, "tabTitle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentMentoringComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noUpcomingMentorings", 2]], 0, 0, null, View_StudentMentoringComponent_7))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_21 = "";

        _ck(_v, 11, 0, currVal_21);

        var currVal_24 = "PAST mentoringS";

        _ck(_v, 14, 0, currVal_24);

        var currVal_25 = _co.pastMentorings.length > 0;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17);

        _ck(_v, 16, 0, currVal_25, currVal_26);

        var currVal_29 = "UPCOMING mentoring";

        _ck(_v, 19, 0, currVal_29);

        var currVal_30 = _co.upcomingMentorings.length > 0;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22);

        _ck(_v, 21, 0, currVal_30, currVal_31);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).fullWidthValue;

        _ck(_v, 10, 0, currVal_20);

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).activeValue;

        _ck(_v, 13, 0, currVal_22, currVal_23);

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).activeValue;

        _ck(_v, 18, 0, currVal_27, currVal_28);
      });
    }

    function View_StudentMentoringComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentMentoringComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_StudentMentoringComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-mentoring", [], null, null, null, View_StudentMentoringComponent_0, RenderType_StudentMentoringComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_mentoring_component__WEBPACK_IMPORTED_MODULE_6__["StudentMentoringComponent"], [_services_student_service__WEBPACK_IMPORTED_MODULE_7__["StudentService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentMentoringComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-mentoring", _student_mentoring_component__WEBPACK_IMPORTED_MODULE_6__["StudentMentoringComponent"], View_StudentMentoringComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-mentoring/student-mentoring.component.scss.shim.ngstyle.js":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-mentoring/student-mentoring.component.scss.shim.ngstyle.js ***!
    \**********************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentMentoringStudentMentoringComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-mentoring/student-mentoring.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-mentoring/student-mentoring.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: StudentMentoringComponent */

  /***/
  function srcAppStudentStudentPagesStudentMentoringStudentMentoringComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentMentoringComponent", function () {
      return StudentMentoringComponent;
    });
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StudentMentoringComponent = /*#__PURE__*/function () {
      function StudentMentoringComponent(studentService, toasterService, route) {
        _classCallCheck(this, StudentMentoringComponent);

        this.studentService = studentService;
        this.toasterService = toasterService;
        this.route = route;
        this.pastMentorings = [];
        this.upcomingMentorings = [];
      }

      _createClass(StudentMentoringComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.getMentorings({
            instituteId: this.instituteId
          });
        }
      }, {
        key: "getMentorings",
        value: function getMentorings(data) {
          var _this27 = this;

          this.studentService.getMentoringForStudent(data).subscribe(function (res) {
            _this27.pastMentorings = res.pastMentorings;
            _this27.upcomingMentorings = res.upcomingMentorings;
            _this27.display = true;
          });
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          var hour = +time.split(':')[0];
          var min = time.split(':')[1];
          var t = '';

          if (hour > 12) {
            t = (hour - 12).toString() + ':' + min + ' PM';
          } else {
            t = hour.toString() + ':' + min + ' AM';
          }

          return t;
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          var d = date.split('-');
          return "".concat(d[2], "-").concat(d[1], "-").concat(d[0]);
        }
      }, {
        key: "showToast",
        value: function showToast(position, status, message) {
          this.toasterService.show(status, message, {
            position: position,
            status: status
          });
        }
      }]);

      return StudentMentoringComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-performance-report/student-performance-report.component.ngfactory.js":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-performance-report/student-performance-report.component.ngfactory.js ***!
    \********************************************************************************************************************/

  /*! exports provided: RenderType_StudentPerformanceReportComponent, View_StudentPerformanceReportComponent_0, View_StudentPerformanceReportComponent_Host_0, StudentPerformanceReportComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentPerformanceReportStudentPerformanceReportComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentPerformanceReportComponent", function () {
      return RenderType_StudentPerformanceReportComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentPerformanceReportComponent_0", function () {
      return View_StudentPerformanceReportComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentPerformanceReportComponent_Host_0", function () {
      return View_StudentPerformanceReportComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentPerformanceReportComponentNgFactory", function () {
      return StudentPerformanceReportComponentNgFactory;
    });
    /* harmony import */


    var _student_performance_report_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-performance-report.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-performance-report/student-performance-report.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _student_performance_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student-performance-report.component */
    "./src/app/student/student-pages/student-performance-report/student-performance-report.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/role/role-assign.service */
    "./src/app/services/role/role-assign.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentPerformanceReportComponent = [_student_performance_report_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentPerformanceReportComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentPerformanceReportComponent,
      data: {}
    });

    function View_StudentPerformanceReportComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[3, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _v.context.$implicit.courseName + " (" + _v.context.$implicit.batchCode + ")";

        _ck(_v, 2, 0, currVal_4);
      });
    }

    function View_StudentPerformanceReportComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "nb-checkbox", [["checked", "true"], ["status", "warning"]], [[2, "status-primary", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-info", null], [2, "status-basic", null], [2, "status-control", null]], [[null, "checkedChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("checkedChange" === en) {
          var pd_0 = _co.changeGraph(_v.context.$implicit, $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCheckboxComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCheckboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        checked: [0, "checked"],
        status: [1, "status"]
      }, {
        checkedChange: "checkedChange"
      })], function (_ck, _v) {
        var currVal_12 = "true";
        var currVal_13 = "warning";

        _ck(_v, 14, 0, currVal_12, currVal_13);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.testName;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.highestScore + "/" + _v.context.$implicit.totalMarks;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.averageMarks + "/" + _v.context.$implicit.totalMarks;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.lowestMarks + "/" + _v.context.$implicit.totalMarks;

        _ck(_v, 8, 0, currVal_3);

        var currVal_4 = _v.context.$implicit.students.marks + "/" + _v.context.$implicit.totalMarks;

        _ck(_v, 10, 0, currVal_4);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).success;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).warning;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).danger;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).info;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).control;

        _ck(_v, 12, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11);
      });
    }

    function View_StudentPerformanceReportComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TEACHER REMARKS"]))], null, null);
    }

    function View_StudentPerformanceReportComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.constructDate(_v.context.$implicit.remarks.date);

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.remarks.teacherName;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.remarks.remark;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.remarks.suggestion;

        _ck(_v, 8, 0, currVal_3);
      });
    }

    function View_StudentPerformanceReportComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "table", [["class", "table table-borderless text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DATE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TEACHER"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["REMARK"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SUGGESTION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentPerformanceReportComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.remarks;

        _ck(_v, 14, 0, currVal_0);
      }, null);
    }

    function View_StudentPerformanceReportComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 31, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 3, "div", [["class", "text-center py-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["style", "display: inline-block; width: 1000px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "canvas", [["baseChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]], {
        datasets: [0, "datasets"],
        labels: [1, "labels"],
        options: [2, "options"],
        chartType: [3, "chartType"],
        colors: [4, "colors"],
        legend: [5, "legend"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TEST PERFORMANCE SUMMARY"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 18, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 17, "table", [["class", "table table-borderless text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 13, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TEST NAME"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["HIGHEST"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AVERAGE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["LOWEST"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["YOUR MARKS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PLOT ON GRAPH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentPerformanceReportComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentPerformanceReportComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentPerformanceReportComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.barChartData;
        var currVal_1 = _co.barChartLabels;
        var currVal_2 = _co.barChartOptions;
        var currVal_3 = _co.barChartType;
        var currVal_4 = _co.chartColors;
        var currVal_5 = _co.barChartLegend;

        _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);

        var currVal_6 = _co.test;

        _ck(_v, 27, 0, currVal_6);

        var currVal_7 = _co.remarks && _co.remarks.length > 0;

        _ck(_v, 29, 0, currVal_7);

        var currVal_8 = _co.remarks && _co.remarks.length > 0;

        _ck(_v, 31, 0, currVal_8);
      }, null);
    }

    function View_StudentPerformanceReportComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 13, "nb-card-header", [["style", "background-color: #ffd500; color: black;"]], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 7, "nb-select", [["fullWidth", ""], ["placeholder", "Select Course"], ["status", "basic"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null]], [[null, "selectedChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectedChange" === en) {
          var pd_0 = _co.onSelectCourse($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectedChange" === en) {
          var pd_1 = (_co.course = $event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], {
        status: [0, "status"],
        fullWidth: [1, "fullWidth"],
        placeholder: [2, "placeholder"],
        selected: [3, "selected"]
      }, {
        selectedChange: "selectedChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        customLabel: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_StudentPerformanceReportComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_StudentPerformanceReportComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_40 = "basic";
        var currVal_41 = "";
        var currVal_42 = "Select Course";
        var currVal_43 = _co.course;

        _ck(_v, 11, 0, currVal_40, currVal_41, currVal_42, currVal_43);

        var currVal_44 = _co.courses;

        _ck(_v, 15, 0, currVal_44);

        var currVal_45 = _co.test;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 4);

        _ck(_v, 17, 0, currVal_45, currVal_46);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).outline;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).filled;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).hero;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).fullWidth;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isOpen;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).tiny;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).small;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).medium;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).large;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).giant;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).primary;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).info;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).success;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).warning;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).danger;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).basic;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).control;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).rectangle;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).round;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).semiRound;

        _ck(_v, 8, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]);
      });
    }

    function View_StudentPerformanceReportComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "mt-5 mb-5 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.noData;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_StudentPerformanceReportComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        escCloseTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
        disabledEscTemplate: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentPerformanceReportComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noCourseSelected", 2]], null, 0, null, View_StudentPerformanceReportComponent_8))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_StudentPerformanceReportComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-performance-report", [], null, null, null, View_StudentPerformanceReportComponent_0, RenderType_StudentPerformanceReportComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_performance_report_component__WEBPACK_IMPORTED_MODULE_7__["StudentPerformanceReportComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_10__["RoleAssignService"], _services_student_service__WEBPACK_IMPORTED_MODULE_11__["StudentService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentPerformanceReportComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-performance-report", _student_performance_report_component__WEBPACK_IMPORTED_MODULE_7__["StudentPerformanceReportComponent"], View_StudentPerformanceReportComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-performance-report/student-performance-report.component.scss.shim.ngstyle.js":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-performance-report/student-performance-report.component.scss.shim.ngstyle.js ***!
    \****************************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentPerformanceReportStudentPerformanceReportComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-performance-report/student-performance-report.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-performance-report/student-performance-report.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: StudentPerformanceReportComponent */

  /***/
  function srcAppStudentStudentPagesStudentPerformanceReportStudentPerformanceReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentPerformanceReportComponent", function () {
      return StudentPerformanceReportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/role/role-assign.service */
    "./src/app/services/role/role-assign.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");

    var StudentPerformanceReportComponent = /*#__PURE__*/function () {
      function StudentPerformanceReportComponent(api, route, toasterService, roleService, studentService) {
        _classCallCheck(this, StudentPerformanceReportComponent);

        this.api = api;
        this.route = route;
        this.toasterService = toasterService;
        this.roleService = roleService;
        this.studentService = studentService;
        this.courses = [];
        this.noData = 'Select Course To View Data';
        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                max: 100
              }
            }]
          }
        };
        this.barChartLabels = [];
        this.barChartType = 'line';
        this.barChartLegend = true;
        this.barChartData = [];
        this.chartColors = [{
          borderColor: ['#FFD500'],
          backgroundColor: ['rgba(250,214,1,0.1)']
        }, {
          borderColor: ['#EA596B'],
          backgroundColor: ['rgba(239,86,107,0.1)']
        }, {
          borderColor: ['#30BD9A'],
          backgroundColor: ['rgba(48,189,154,0.1)']
        }, {
          borderColor: ['#009BCC'],
          backgroundColor: ['rgba(0,154,204,0.1)']
        }];
      }

      _createClass(StudentPerformanceReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.studentId = this.studentService.getStudent()._id;
          this.getCourses();
          this.students = [];
          this.studentScore = [];

          if (this.roleService.getEmployeeRole(this.instituteId) && this.roleService.getEmployeeRole(this.instituteId) === 'Teacher') {
            this.showRemarksOption = true;
          } else {
            this.showRemarksOption = false;
          }
        }
      }, {
        key: "getRemarks",
        value: function getRemarks() {
          var _this28 = this;

          var data = {
            instituteId: this.instituteId,
            courseId: this.courseId,
            batchId: this.batchId,
            studentId: this.studentId
          };
          this.api.getRemarkOfStudentByInstitute(data).subscribe(function (res) {
            _this28.remarks = res;
          });
        }
      }, {
        key: "getCourses",
        value: function getCourses() {
          var _this29 = this;

          this.studentService.getStudentCoursesByInstitutes(this.instituteId).subscribe(function (res) {
            _this29.courses = res;

            if (_this29.courses.length > 0) {
              _this29.course = _this29.courses[0];

              _this29.onSelectCourse(_this29.course);
            }

            _this29.display = true;
          });
        }
      }, {
        key: "onSelectCourse",
        value: function onSelectCourse(course) {
          if (course) {
            this.courseId = course._id;
            this.batchId = course.batchId;
          }

          this.getRemarks();
          this.getScoreOfStudentByBatch();
        }
      }, {
        key: "getScoreOfStudentByBatch",
        value: function getScoreOfStudentByBatch() {
          var _this30 = this;

          this.api.getScoreOfStudentByBatch({
            studentId: this.studentId,
            batchId: this.batchId
          }).subscribe(function (res) {
            if (res) {
              _this30.test = res;
            }

            if (_this30.test && _this30.test.length === 0) {
              _this30.noData = 'No Data Found';
            }

            res.sort(function (test1, test2) {
              var test1Date = new Date(test1.date);
              var test2Date = new Date(test2.date);

              if (test1Date > test2Date) {
                return 1;
              } else {
                return -1;
              }
            });

            _this30.generateGraph();

            _this30.display = true;
          }, function (err) {});
        }
      }, {
        key: "generateGraph",
        value: function generateGraph() {
          var percentageArray = [];
          var highestArray = [];
          var lowestArray = [];
          var averageArray = [];
          var labelsArray = [];
          this.test.forEach(function (test) {
            if (!test.hide) {
              test.students.studentPercentage ? percentageArray.push(test.students.studentPercentage) : percentageArray.push(0);
              test.highestPercentage ? highestArray.push(test.highestPercentage) : highestArray.push(0);
              test.lowestPercentage ? lowestArray.push(test.lowestPercentage) : lowestArray.push(0);
              test.averagePercentage ? averageArray.push(test.averagePercentage) : averageArray.push(0);
              labelsArray.push(test.testName + '(' + test.date + ')');
            }
          });
          this.barChartLabels = labelsArray;
          this.barChartType = 'line';
          this.barChartLegend = true;
          this.barChartData = [{
            data: highestArray,
            label: 'HIGHEST'
          }, {
            data: lowestArray,
            label: 'LOWEST'
          }, {
            data: averageArray,
            label: 'AVERAGE'
          }, {
            data: percentageArray,
            label: 'STUDENT MARKS'
          }];
        }
      }, {
        key: "changeGraph",
        value: function changeGraph(singleTest, checkBoxValue) {
          singleTest.hide = !checkBoxValue;
          this.generateGraph();
        }
      }, {
        key: "showToast",
        value: function showToast(position, status, message) {
          this.toasterService.show(status, message, {
            position: position,
            status: status
          });
        }
      }, {
        key: "constructDate",
        value: function constructDate(dateInMillisecond) {
          var date = new Date(dateInMillisecond);
          return "".concat(date.getFullYear(), "-").concat(this.appendZero(date.getMonth() + 1), "-").concat(this.appendZero(date.getDate()));
        }
      }, {
        key: "appendZero",
        value: function appendZero(n) {
          if (n < 10) {
            return '0' + n;
          }

          return '' + n;
        }
      }]);

      return StudentPerformanceReportComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-schedule/student-schedule.component.ngfactory.js":
  /*!************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-schedule/student-schedule.component.ngfactory.js ***!
    \************************************************************************************************/

  /*! exports provided: RenderType_StudentScheduleComponent, View_StudentScheduleComponent_0, View_StudentScheduleComponent_Host_0, StudentScheduleComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentScheduleStudentScheduleComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentScheduleComponent", function () {
      return RenderType_StudentScheduleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentScheduleComponent_0", function () {
      return View_StudentScheduleComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentScheduleComponent_Host_0", function () {
      return View_StudentScheduleComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentScheduleComponentNgFactory", function () {
      return StudentScheduleComponentNgFactory;
    });
    /* harmony import */


    var _student_schedule_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-schedule.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-schedule/student-schedule.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _student_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-schedule.component */
    "./src/app/student/student-pages/student-schedule/student-schedule.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/schedule/schedule.service */
    "./src/app/services/schedule/schedule.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentScheduleComponent = [_student_schedule_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentScheduleComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentScheduleComponent,
      data: {}
    });

    function View_StudentScheduleComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit._id;

        _ck(_v, 1, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _v.context.$implicit.courseName + " (" + _v.context.$implicit.batchCode + ")";

        _ck(_v, 2, 0, currVal_4);
      });
    }

    function View_StudentScheduleComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "date-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "day"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "month"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "meeting-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "detail1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["Date: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "div", [["class", "detail1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" Time: ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 5, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "div", [["class", "meeting-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "div", [["class", "detail1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["Topic: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "div", [["class", "detail1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, [" Teacher: ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "div", [["class", "meeting-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "div", [["class", "detail1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["Course: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "div", [["class", "detail2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, ["Batch: ", ""]))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.getDay(_v.parent.context.$implicit.date);

        _ck(_v, 4, 0, currVal_0);

        var currVal_1 = _co.getMonth(_v.parent.context.$implicit.date);

        _ck(_v, 6, 0, currVal_1);

        var currVal_2 = _co.getScheduleDate(_v.parent.context.$implicit.date);

        _ck(_v, 10, 0, currVal_2);

        var currVal_3 = _co.time(_v.parent.context.$implicit.startTime) + " to " + _co.time(_v.parent.context.$implicit.endTime);

        _ck(_v, 12, 0, currVal_3);

        var currVal_4 = _v.parent.context.$implicit.topic;

        _ck(_v, 16, 0, currVal_4);

        var currVal_5 = _v.parent.parent.context.$implicit.teacherData[_v.parent.context.index].teacherName;

        _ck(_v, 18, 0, currVal_5);

        var currVal_6 = _v.parent.parent.context.$implicit.courseId;

        _ck(_v, 22, 0, currVal_6);

        var currVal_7 = _v.parent.parent.context.$implicit.batchId;

        _ck(_v, 24, 0, currVal_7);
      });
    }

    function View_StudentScheduleComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentScheduleComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.select;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_StudentScheduleComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "nb-accordion-item", [], [[2, "collapsed", null], [2, "expanded", null], [2, "disabled", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbAccordionItemComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbAccordionItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 13, "nb-accordion-item-header", [["style", "width: 100%;"]], [[2, "accordion-item-header-collapsed", null], [2, "accordion-item-header-expanded", null], [1, "aria-expanded", 0], [1, "tabindex", 0], [1, "aria-disabled", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).toggle() !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).toggle() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbAccordionItemHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbAccordionItemHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 245760, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemHeaderComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 2, 11, "div", [["class", "row"], ["style", "width: 100%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "col-12 pt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "button", [["class", "mr-3 float-right"], ["nbButton", ""], ["status", "primary"]], [[2, "appearance-filled", null], [2, "appearance-outline", null], [2, "appearance-ghost", null], [2, "appearance-hero", null], [2, "full-width", null], [1, "aria-disabled", 0], [2, "btn-disabled", null], [1, "tabindex", 0], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null], [2, "icon-start", null], [2, "icon-end", null], [2, "transitions", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.viewSchedule(_v.context.$implicit._id) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbButtonComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4243456, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        status: [0, "status"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" View "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "p", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Schedule From"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["to"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 1, 6, "nb-accordion-item-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbAccordionItemBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbAccordionItemBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 245760, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemBodyComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 4, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentScheduleComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 3, 0);

        var currVal_34 = "primary";

        _ck(_v, 7, 0, currVal_34);

        _ck(_v, 17, 0);

        var currVal_37 = _v.context.$implicit.days;

        _ck(_v, 22, 0, currVal_37);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).collapsed;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).expanded;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isCollapsed;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).expanded;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).expanded;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).tabbable;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled;

        _ck(_v, 2, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).filled;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).outline;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ghost;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).hero;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).fullWidth;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).tabbable;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).tiny;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).small;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).medium;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).large;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).giant;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).primary;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).info;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).success;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).warning;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).danger;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).basic;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).control;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).rectangle;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).round;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).semiRound;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).iconLeft;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).iconRight;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transitions;

        _ck(_v, 6, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33]);

        var currVal_35 = _co.getScheduleDate(_v.context.$implicit.scheduleStart);

        _ck(_v, 12, 0, currVal_35);

        var currVal_36 = _co.getScheduleDate(_v.context.$implicit.scheduleEnd);

        _ck(_v, 15, 0, currVal_36);
      });
    }

    function View_StudentScheduleComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "nb-accordion", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbAccordionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbAccordionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentScheduleComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.schedules;

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_StudentScheduleComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h6", [["class", "text-center mt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Schedule"]))], null, null);
    }

    function View_StudentScheduleComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 17, "nb-card-header", [["style", "background-color: #ffd500;"]], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 15, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SCHEDULED CLASS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 11, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 10, "nb-select", [["fullWidth", ""], ["placeholder", "Select Course"], ["status", "basic"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null]], [[null, "selectedChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectedChange" === en) {
          var pd_0 = _co.onSelectCourse($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectedChange" === en) {
          var pd_1 = (_co.courseId = $event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], {
        status: [0, "status"],
        fullWidth: [1, "fullWidth"],
        placeholder: [2, "placeholder"],
        selected: [3, "selected"]
      }, {
        selectedChange: "selectedChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        customLabel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Select Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_StudentScheduleComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentScheduleComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["no_schedule", 2]], 0, 0, null, View_StudentScheduleComponent_7))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_40 = "basic";
        var currVal_41 = "";
        var currVal_42 = "Select Course";
        var currVal_43 = _co.courseId;

        _ck(_v, 11, 0, currVal_40, currVal_41, currVal_42, currVal_43);

        var currVal_47 = "";

        _ck(_v, 16, 0, currVal_47);

        var currVal_48 = _co.courses;

        _ck(_v, 19, 0, currVal_48);

        var currVal_49 = _co.schedules.length > 0;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24);

        _ck(_v, 23, 0, currVal_49, currVal_50);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).outline;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).filled;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).hero;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).fullWidth;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isOpen;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).tiny;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).small;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).medium;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).large;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).giant;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).primary;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).info;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).success;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).warning;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).danger;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).basic;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).control;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).rectangle;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).round;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).semiRound;

        _ck(_v, 9, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]);

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).selectedClass;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabledAttribute;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).tabindex;

        _ck(_v, 15, 0, currVal_44, currVal_45, currVal_46);
      });
    }

    function View_StudentScheduleComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentScheduleComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_StudentScheduleComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-schedule", [], null, null, null, View_StudentScheduleComponent_0, RenderType_StudentScheduleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_schedule_component__WEBPACK_IMPORTED_MODULE_6__["StudentScheduleComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"], _services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_9__["ScheduleService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentScheduleComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-schedule", _student_schedule_component__WEBPACK_IMPORTED_MODULE_6__["StudentScheduleComponent"], View_StudentScheduleComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-schedule/student-schedule.component.scss.shim.ngstyle.js":
  /*!********************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-schedule/student-schedule.component.scss.shim.ngstyle.js ***!
    \********************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentScheduleStudentScheduleComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".month[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: #000;\n  font-weight: bold;\n  margin-top: 10px;\n  font-size: 30px; }\n\n.day[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: #000;\n  font-weight: bold;\n  margin-top: 10px;\n  font-size: 20px; }\n\n.date-block[_ngcontent-%COMP%] {\n  float: left;\n  width: 70px;\n  height: 70px;\n  background-color: #ffd500; }\n\n.meeting-details[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 25px;\n  width: 60%; }\n\n.meeting-details[_ngcontent-%COMP%]   .detail1[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  display: block;\n  font-weight: bold; }\n\n.meeting-details[_ngcontent-%COMP%]   .detail2[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  color: #a3a2a2; }"];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-schedule/student-schedule.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-schedule/student-schedule.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: StudentScheduleComponent */

  /***/
  function srcAppStudentStudentPagesStudentScheduleStudentScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentScheduleComponent", function () {
      return StudentScheduleComponent;
    });
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/schedule/schedule.service */
    "./src/app/services/schedule/schedule.service.ts");

    var StudentScheduleComponent = /*#__PURE__*/function () {
      function StudentScheduleComponent(router, studentService, scheduleService, toasterService, route) {
        _classCallCheck(this, StudentScheduleComponent);

        this.router = router;
        this.studentService = studentService;
        this.scheduleService = scheduleService;
        this.toasterService = toasterService;
        this.route = route;
        this.courses = [];
        this.schedules = [];
        this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      }

      _createClass(StudentScheduleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.getBatchesOfCourses(this.instituteId);
        }
      }, {
        key: "getBatchesOfCourses",
        value: function getBatchesOfCourses(instituteId) {
          var _this31 = this;

          this.studentService.getStudentCoursesByInstitutes(instituteId).subscribe(function (res) {
            _this31.courses = res;

            if (_this31.courses.length > 0) {
              _this31.courseId = _this31.courses[0]._id;

              _this31.onSelectCourse(_this31.courseId);
            }

            _this31.display = true;
          }, function (err) {});
        }
      }, {
        key: "getMonth",
        value: function getMonth(date) {
          var month = date.split('-')[1];
          return this.months[+month - 1];
        }
      }, {
        key: "getDay",
        value: function getDay(date) {
          return date.split('-')[2];
        }
      }, {
        key: "time",
        value: function time(_time) {
          var hour = +_time.split(':')[0];

          var min = _time.split(':')[1];

          var t = '';

          if (hour > 12) {
            t = (hour - 12).toString() + ':' + min + ' PM';
          } else {
            t = hour.toString() + ':' + min + ' AM';
          }

          return t;
        }
      }, {
        key: "onSelectCourse",
        value: function onSelectCourse(id) {
          if (id !== '') {
            this.courseId = id;
            var course = this.courses.find(function (curCourse) {
              return curCourse._id === id;
            });
            this.batchId = course.batchId;
            this.getSchedules({
              instituteId: this.instituteId,
              courseId: this.courseId,
              batchId: this.batchId
            });
          }
        }
      }, {
        key: "getSchedules",
        value: function getSchedules(data) {
          var _this32 = this;

          this.scheduleService.getScheduleByInstitute(data).subscribe(function (res) {
            _this32.schedules = res;
          });
        }
      }, {
        key: "viewSchedule",
        value: function viewSchedule(code) {
          this.router.navigate(['/student/view-schedule', this.instituteId], {
            queryParams: {
              schedule: code
            }
          });
        }
      }, {
        key: "getScheduleDate",
        value: function getScheduleDate(date) {
          var d = date.split('-');
          return "".concat(d[2], "-").concat(d[1], "-").concat(d[0]);
        }
      }, {
        key: "showToast",
        value: function showToast(position, status, message) {
          this.toasterService.show(status, message, {
            position: position,
            status: status
          });
        }
      }]);

      return StudentScheduleComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.ngfactory.js":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.ngfactory.js ***!
    \***************************************************************************************************************************/

  /*! exports provided: RenderType_StudentViewScheduleComponent, View_StudentViewScheduleComponent_0, View_StudentViewScheduleComponent_Host_0, StudentViewScheduleComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentScheduleStudentViewScheduleStudentViewScheduleComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentViewScheduleComponent", function () {
      return RenderType_StudentViewScheduleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentViewScheduleComponent_0", function () {
      return View_StudentViewScheduleComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentViewScheduleComponent_Host_0", function () {
      return View_StudentViewScheduleComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentViewScheduleComponentNgFactory", function () {
      return StudentViewScheduleComponentNgFactory;
    });
    /* harmony import */


    var _student_view_schedule_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-view-schedule.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _student_view_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-view-schedule.component */
    "./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../services/schedule/schedule.service */
    "./src/app/services/schedule/schedule.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentViewScheduleComponent = [_student_view_schedule_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentViewScheduleComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentViewScheduleComponent,
      data: {}
    });

    function View_StudentViewScheduleComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.parent.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.day;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.getScheduleDate(_v.parent.context.$implicit.date);

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.parent.context.$implicit.startTime ? _v.parent.context.$implicit.startTime : "--";

        _ck(_v, 8, 0, currVal_3);

        var currVal_4 = _v.parent.context.$implicit.endTime ? _v.parent.context.$implicit.endTime : "--";

        _ck(_v, 10, 0, currVal_4);

        var currVal_5 = _v.parent.context.$implicit.topic ? _v.parent.context.$implicit.topic : "--";

        _ck(_v, 12, 0, currVal_5);

        var currVal_6 = _v.parent.context.$implicit.teacher ? _v.parent.context.$implicit.teacher : "--";

        _ck(_v, 14, 0, currVal_6);
      });
    }

    function View_StudentViewScheduleComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentViewScheduleComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.select;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_StudentViewScheduleComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 58, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 3, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "button", [["class", "btn btn-yellow-black float-right"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.back() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Back "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 52, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Batch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Schedule Start"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 2, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Schedule End"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 2, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](35, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 22, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 21, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 20, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 19, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 15, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 14, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Day"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Start Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["End Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Topic"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Teacher"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentViewScheduleComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_24 = _co.schedule.days;

        _ck(_v, 58, 0, currVal_24);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _co.schedule.courseId;

        _ck(_v, 14, 0, currVal_20);

        var currVal_21 = _co.schedule.batchId;

        _ck(_v, 21, 0, currVal_21);

        var currVal_22 = _co.getScheduleDate(_co.schedule.scheduleStart);

        _ck(_v, 28, 0, currVal_22);

        var currVal_23 = _co.getScheduleDate(_co.schedule.scheduleEnd);

        _ck(_v, 35, 0, currVal_23);
      });
    }

    function View_StudentViewScheduleComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentViewScheduleComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_StudentViewScheduleComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-view-schedule", [], null, null, null, View_StudentViewScheduleComponent_0, RenderType_StudentViewScheduleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_view_schedule_component__WEBPACK_IMPORTED_MODULE_5__["StudentViewScheduleComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentViewScheduleComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-view-schedule", _student_view_schedule_component__WEBPACK_IMPORTED_MODULE_5__["StudentViewScheduleComponent"], View_StudentViewScheduleComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.scss.shim.ngstyle.js":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.scss.shim.ngstyle.js ***!
    \***********************************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentScheduleStudentViewScheduleStudentViewScheduleComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: StudentViewScheduleComponent */

  /***/
  function srcAppStudentStudentPagesStudentScheduleStudentViewScheduleStudentViewScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentViewScheduleComponent", function () {
      return StudentViewScheduleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/schedule/schedule.service */
    "./src/app/services/schedule/schedule.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var StudentViewScheduleComponent = /*#__PURE__*/function () {
      function StudentViewScheduleComponent(active, scheduleService, location) {
        _classCallCheck(this, StudentViewScheduleComponent);

        this.active = active;
        this.scheduleService = scheduleService;
        this.location = location;
      }

      _createClass(StudentViewScheduleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.display = false;
          this.instituteId = this.active.snapshot.paramMap.get('id');
          this.active.queryParams.subscribe(function (param) {
            var schedule = param.schedule;

            _this33.getSchedule(schedule);
          });
        }
      }, {
        key: "getSchedule",
        value: function getSchedule(id) {
          var _this34 = this;

          this.scheduleService.getScheduleDetails(id).subscribe(function (res) {
            _this34.schedule = res;
            _this34.display = true;
          }, function (error) {
            return console.error(error);
          });
        }
      }, {
        key: "getScheduleDate",
        value: function getScheduleDate(date) {
          var d = date.split('-');
          return "".concat(d[2], "-").concat(d[1], "-").concat(d[0]);
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }]);

      return StudentViewScheduleComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-study-material/student-study-material.component.ngfactory.js":
  /*!************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-study-material/student-study-material.component.ngfactory.js ***!
    \************************************************************************************************************/

  /*! exports provided: RenderType_StudentStudyMaterialComponent, View_StudentStudyMaterialComponent_0, View_StudentStudyMaterialComponent_Host_0, StudentStudyMaterialComponentNgFactory */

  /***/
  function srcAppStudentStudentPagesStudentStudyMaterialStudentStudyMaterialComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentStudyMaterialComponent", function () {
      return RenderType_StudentStudyMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentStudyMaterialComponent_0", function () {
      return View_StudentStudyMaterialComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentStudyMaterialComponent_Host_0", function () {
      return View_StudentStudyMaterialComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentStudyMaterialComponentNgFactory", function () {
      return StudentStudyMaterialComponentNgFactory;
    });
    /* harmony import */


    var _student_study_material_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-study-material.component.scss.shim.ngstyle */
    "./src/app/student/student-pages/student-study-material/student-study-material.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _student_study_material_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-study-material.component */
    "./src/app/student/student-pages/student-study-material/student-study-material.component.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentStudyMaterialComponent = [_student_study_material_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentStudyMaterialComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentStudyMaterialComponent,
      data: {}
    });

    function View_StudentStudyMaterialComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "nb-option", [], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit.batchCode;

        _ck(_v, 1, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectedClass;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabledAttribute;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tabindex;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _v.context.$implicit.courseName + " (" + _v.context.$implicit.batchCode + ")";

        _ck(_v, 2, 0, currVal_4);
      });
    }

    function View_StudentStudyMaterialComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.title;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.category;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.file.secure_url;

        _ck(_v, 8, 0, currVal_3);

        var currVal_4 = _v.context.$implicit.file.file_name;

        _ck(_v, 9, 0, currVal_4);
      });
    }

    function View_StudentStudyMaterialComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "table", [["class", "table table-borderless"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TITLE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CATEGORY"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FILE/LINK"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentStudyMaterialComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.materials;

        _ck(_v, 14, 0, currVal_0);
      }, null);
    }

    function View_StudentStudyMaterialComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-center pt-5 pb-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Study Material Available"]))], null, null);
    }

    function View_StudentStudyMaterialComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "nb-card", [], [[2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "accent", null], [2, "accent-primary", null], [2, "accent-info", null], [2, "accent-success", null], [2, "accent-warning", null], [2, "accent-danger", null], [2, "accent-basic", null], [2, "accent-control", null]], null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 17, "nb-card-header", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardHeaderComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 15, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "col-md-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["STUDY MATERIAL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 11, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 10, "nb-select", [["fullWidth", ""], ["placeholder", "Select Course"]], [[2, "appearance-outline", null], [2, "appearance-filled", null], [2, "appearance-hero", null], [2, "full-width", null], [2, "open", null], [2, "size-tiny", null], [2, "size-small", null], [2, "size-medium", null], [2, "size-large", null], [2, "size-giant", null], [2, "status-primary", null], [2, "status-info", null], [2, "status-success", null], [2, "status-warning", null], [2, "status-danger", null], [2, "status-basic", null], [2, "status-control", null], [2, "shape-rectangle", null], [2, "shape-round", null], [2, "shape-semi-round", null]], [[null, "selectedChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectedChange" === en) {
          var pd_0 = _co.onSelectCourse($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectedChange" === en) {
          var pd_1 = (_co.batchCode = $event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbSelectComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 5423104, null, 2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOverlayService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPositionBuilderService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTriggerStrategyBuilderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], {
        fullWidth: [0, "fullWidth"],
        placeholder: [1, "placeholder"],
        selected: [2, "selected"]
      }, {
        selectedChange: "selectedChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        customLabel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], null, [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 2, "nb-option", [["value", ""]], [[2, "selected", null], [1, "disabled", 0], [8, "tabIndex", 0]], [[null, "click"], [null, "keydown.space"], [null, "keydown.enter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown.space" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("keydown.enter" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbOptionComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 180224, [[1, 4]], 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_SELECT_INJECTION_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Select Course"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_StudentStudyMaterialComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 1, 4, "nb-card-body", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NbCardBodyComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 49152, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_StudentStudyMaterialComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["noMaterial", 2]], 0, 0, null, View_StudentStudyMaterialComponent_5))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_40 = "";
        var currVal_41 = "Select Course";
        var currVal_42 = _co.batchCode;

        _ck(_v, 11, 0, currVal_40, currVal_41, currVal_42);

        var currVal_46 = "";

        _ck(_v, 16, 0, currVal_46);

        var currVal_47 = _co.courses;

        _ck(_v, 19, 0, currVal_47);

        var currVal_48 = _co.materials.length > 0;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24);

        _ck(_v, 23, 0, currVal_48, currVal_49);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).tiny;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).small;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).medium;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).large;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).giant;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primary;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).info;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).success;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warning;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).danger;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basic;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).control;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hasAccent;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).primaryAccent;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).infoAccent;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).successAccent;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).warningAccent;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dangerAccent;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).basicAccent;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).controlAccent;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).outline;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).filled;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).hero;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).fullWidth;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isOpen;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).tiny;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).small;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).medium;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).large;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).giant;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).primary;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).info;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).success;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).warning;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).danger;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).basic;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).control;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).rectangle;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).round;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).semiRound;

        _ck(_v, 9, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39]);

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).selectedClass;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabledAttribute;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).tabindex;

        _ck(_v, 15, 0, currVal_43, currVal_44, currVal_45);
      });
    }

    function View_StudentStudyMaterialComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_StudentStudyMaterialComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_StudentStudyMaterialComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student-study-material", [], null, null, null, View_StudentStudyMaterialComponent_0, RenderType_StudentStudyMaterialComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_study_material_component__WEBPACK_IMPORTED_MODULE_6__["StudentStudyMaterialComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"], _services_student_service__WEBPACK_IMPORTED_MODULE_7__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentStudyMaterialComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student-study-material", _student_study_material_component__WEBPACK_IMPORTED_MODULE_6__["StudentStudyMaterialComponent"], View_StudentStudyMaterialComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student-pages/student-study-material/student-study-material.component.scss.shim.ngstyle.js":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-study-material/student-study-material.component.scss.shim.ngstyle.js ***!
    \********************************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentPagesStudentStudyMaterialStudentStudyMaterialComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/student/student-pages/student-study-material/student-study-material.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/student/student-pages/student-study-material/student-study-material.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: StudentStudyMaterialComponent */

  /***/
  function srcAppStudentStudentPagesStudentStudyMaterialStudentStudyMaterialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentStudyMaterialComponent", function () {
      return StudentStudyMaterialComponent;
    });
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var StudentStudyMaterialComponent = /*#__PURE__*/function () {
      function StudentStudyMaterialComponent(toastrService, studentService, route) {
        _classCallCheck(this, StudentStudyMaterialComponent);

        this.toastrService = toastrService;
        this.studentService = studentService;
        this.route = route;
        this.materials = [];
        this.courses = [];
        this.batchCode = '';
      }

      _createClass(StudentStudyMaterialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.getCourses(this.instituteId);
          this.onSelectCourse('all');
        }
      }, {
        key: "getCourses",
        value: function getCourses(instituteId) {
          var _this35 = this;

          this.studentService.getStudentCoursesByInstitutes(instituteId).subscribe(function (res) {
            _this35.courses = res;

            if (_this35.courses.length > 0) {
              _this35.batchCode = _this35.courses[0].batchCode;

              _this35.onSelectCourse(_this35.batchCode);
            }

            _this35.display = true;
          }, function (err) {});
        }
      }, {
        key: "onSelectCourse",
        value: function onSelectCourse(batchCode) {
          this.getStudyMaterial({
            instituteId: this.instituteId,
            batch: batchCode
          });
        }
      }, {
        key: "getStudyMaterial",
        value: function getStudyMaterial(data) {
          var _this36 = this;

          this.studentService.getStudyMaterialForStudent(data).subscribe(function (res) {
            _this36.materials = res;
          }, function (err) {});
        }
      }, {
        key: "showToast",
        value: function showToast(position, status, message) {
          this.toastrService.show(status, message, {
            position: position,
            status: status
          });
        }
      }]);

      return StudentStudyMaterialComponent;
    }();
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


    var _student_pages_onlinee_class_onlinee_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-pages/onlinee-class/onlinee-class.component */
    "./src/app/student/student-pages/onlinee-class/onlinee-class.component.ts");
    /* harmony import */


    var _student_pages_student_enrollment_details_student_view_enrollment_student_view_enrollment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component */
    "./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.ts");
    /* harmony import */


    var _student_institutes_student_institutes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-institutes/student-institutes.component */
    "./src/app/student/student-institutes/student-institutes.component.ts");
    /* harmony import */


    var _student_pages_student_announcements_student_view_announcement_student_view_announcement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-pages/student-announcements/student-view-announcement/student-view-announcement.component */
    "./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.ts");
    /* harmony import */


    var _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./student-home/student-home.component */
    "./src/app/student/student-home/student-home.component.ts");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/student/student.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student-dashboard/student-dashboard.component */
    "./src/app/student/student-dashboard/student-dashboard.component.ts");
    /* harmony import */


    var _student_pages_student_announcements_student_announcements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./student-pages/student-announcements/student-announcements.component */
    "./src/app/student/student-pages/student-announcements/student-announcements.component.ts");
    /* harmony import */


    var _student_pages_student_schedule_student_schedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./student-pages/student-schedule/student-schedule.component */
    "./src/app/student/student-pages/student-schedule/student-schedule.component.ts");
    /* harmony import */


    var _student_pages_student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./student-pages/student-attendance/student-attendance.component */
    "./src/app/student/student-pages/student-attendance/student-attendance.component.ts");
    /* harmony import */


    var _student_pages_student_performance_report_student_performance_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./student-pages/student-performance-report/student-performance-report.component */
    "./src/app/student/student-pages/student-performance-report/student-performance-report.component.ts");
    /* harmony import */


    var _student_pages_student_study_material_student_study_material_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./student-pages/student-study-material/student-study-material.component */
    "./src/app/student/student-pages/student-study-material/student-study-material.component.ts");
    /* harmony import */


    var _student_pages_student_forums_chats_student_forums_chats_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./student-pages/student-forums-chats/student-forums-chats.component */
    "./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.ts");
    /* harmony import */


    var _student_pages_student_enrollment_details_student_enrollment_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./student-pages/student-enrollment-details/student-enrollment-details.component */
    "./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.ts");
    /* harmony import */


    var _student_pages_student_schedule_student_view_schedule_student_view_schedule_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./student-pages/student-schedule/student-view-schedule/student-view-schedule.component */
    "./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.ts");
    /* harmony import */


    var _student_pages_student_meeting_student_meeting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./student-pages/student-meeting/student-meeting.component */
    "./src/app/student/student-pages/student-meeting/student-meeting.component.ts");
    /* harmony import */


    var _student_pages_student_mentoring_student_mentoring_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./student-pages/student-mentoring/student-mentoring.component */
    "./src/app/student/student-pages/student-mentoring/student-mentoring.component.ts");
    /* harmony import */


    var _student_pages_student_forums_chats_student_forum_comment_student_forum_comment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component */
    "./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.ts");
    /* harmony import */


    var _services_auth_services_auth_guards_student_ealive_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../services/auth-services/auth-guards/student-ealive-auth.guard */
    "./src/app/services/auth-services/auth-guards/student-ealive-auth.guard.ts");

    var routes = [{
      path: '',
      component: _student_component__WEBPACK_IMPORTED_MODULE_5__["StudentComponent"],
      children: [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_4__["StudentHomeComponent"]
      }, {
        path: 'my-institutes',
        component: _student_institutes_student_institutes_component__WEBPACK_IMPORTED_MODULE_2__["StudentInstitutesComponent"]
      }, {
        path: 'dashboard/:id',
        component: _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["StudentDashboardComponent"]
      }, {
        path: 'announcements/:id',
        component: _student_pages_student_announcements_student_announcements_component__WEBPACK_IMPORTED_MODULE_8__["StudentAnnouncementsComponent"]
      }, {
        path: 'view-announcement/:id',
        component: _student_pages_student_announcements_student_view_announcement_student_view_announcement_component__WEBPACK_IMPORTED_MODULE_3__["StudentViewAnnouncementComponent"]
      }, {
        path: 'schedule/:id',
        component: _student_pages_student_schedule_student_schedule_component__WEBPACK_IMPORTED_MODULE_9__["StudentScheduleComponent"]
      }, {
        path: 'view-schedule/:id',
        component: _student_pages_student_schedule_student_view_schedule_student_view_schedule_component__WEBPACK_IMPORTED_MODULE_15__["StudentViewScheduleComponent"]
      }, {
        path: 'attendance/:id',
        component: _student_pages_student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_10__["StudentAttendanceComponent"]
      }, {
        path: 'performanceReport/:id',
        component: _student_pages_student_performance_report_student_performance_report_component__WEBPACK_IMPORTED_MODULE_11__["StudentPerformanceReportComponent"]
      }, {
        path: 'studentMaterial/:id',
        component: _student_pages_student_study_material_student_study_material_component__WEBPACK_IMPORTED_MODULE_12__["StudentStudyMaterialComponent"]
      }, {
        path: 'forumsAndChats/:id',
        component: _student_pages_student_forums_chats_student_forums_chats_component__WEBPACK_IMPORTED_MODULE_13__["StudentForumsChatsComponent"]
      }, {
        path: 'forumsAndChats/comments/:id',
        component: _student_pages_student_forums_chats_student_forum_comment_student_forum_comment_component__WEBPACK_IMPORTED_MODULE_18__["StudentForumCommentComponent"]
      }, {
        path: 'enrollmentDetails/:id',
        component: _student_pages_student_enrollment_details_student_enrollment_details_component__WEBPACK_IMPORTED_MODULE_14__["StudentEnrollmentDetailsComponent"]
      }, {
        path: 'viewEnrollment/:id',
        component: _student_pages_student_enrollment_details_student_view_enrollment_student_view_enrollment_component__WEBPACK_IMPORTED_MODULE_1__["StudentViewEnrollmentComponent"]
      }, {
        path: 'meeting/:id',
        component: _student_pages_student_meeting_student_meeting_component__WEBPACK_IMPORTED_MODULE_16__["StudentMeetingComponent"]
      }, {
        path: 'mentoring/:id',
        component: _student_pages_student_mentoring_student_mentoring_component__WEBPACK_IMPORTED_MODULE_17__["StudentMentoringComponent"]
      }, {
        path: 'onlineClasses/:id',
        component: _student_pages_onlinee_class_onlinee_class_component__WEBPACK_IMPORTED_MODULE_0__["OnlineeClassComponent"],
        canActivate: [_services_auth_services_auth_guards_student_ealive_auth_guard__WEBPACK_IMPORTED_MODULE_19__["StudentEaLiveGuard"]]
      }, {
        path: '**',
        redirectTo: 'home'
      }]
    }];

    var StudentRoutingModule = function StudentRoutingModule() {
      _classCallCheck(this, StudentRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/student/student.component.ngfactory.js":
  /*!********************************************************!*\
    !*** ./src/app/student/student.component.ngfactory.js ***!
    \********************************************************/

  /*! exports provided: RenderType_StudentComponent, View_StudentComponent_0, View_StudentComponent_Host_0, StudentComponentNgFactory */

  /***/
  function srcAppStudentStudentComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_StudentComponent", function () {
      return RenderType_StudentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentComponent_0", function () {
      return View_StudentComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_StudentComponent_Host_0", function () {
      return View_StudentComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComponentNgFactory", function () {
      return StudentComponentNgFactory;
    });
    /* harmony import */


    var _student_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student.component.scss.shim.ngstyle */
    "./src/app/student/student.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _theme_layouts_one_column_one_column_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../@theme/layouts/one-column/one-column.layout.ngfactory */
    "./src/app/@theme/layouts/one-column/one-column.layout.ngfactory.js");
    /* harmony import */


    var _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../@theme/layouts/one-column/one-column.layout */
    "./src/app/@theme/layouts/one-column/one-column.layout.ts");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/student/student.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_StudentComponent = [_student_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_StudentComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_StudentComponent,
      data: {}
    });

    function View_StudentComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "ngx-one-column-layout", [], null, null, null, _theme_layouts_one_column_one_column_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_OneColumnLayoutComponent_0"], _theme_layouts_one_column_one_column_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_OneColumnLayoutComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_3__["OneColumnLayoutComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "nb-menu", [], null, null, null, _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NbMenuComponent_0"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NbMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4440064, null, 0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuComponent"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NB_WINDOW"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]], {
        items: [0, "items"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, 1, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.menu;

        _ck(_v, 3, 0, currVal_0);

        _ck(_v, 5, 0);
      }, null);
    }

    function View_StudentComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-student", [], null, null, null, View_StudentComponent_0, RenderType_StudentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var StudentComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-student", _student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"], View_StudentComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/student/student.component.scss.shim.ngstyle.js":
  /*!****************************************************************!*\
    !*** ./src/app/student/student.component.scss.shim.ngstyle.js ***!
    \****************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStudentStudentComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _student_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student-menu */
    "./src/app/student/student-menu.ts");

    var StudentComponent = /*#__PURE__*/function () {
      function StudentComponent() {
        _classCallCheck(this, StudentComponent);
      }

      _createClass(StudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu = _student_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"];
          this.institutes = [];
        }
      }]);

      return StudentComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/student.module.ngfactory.js":
  /*!*****************************************************!*\
    !*** ./src/app/student/student.module.ngfactory.js ***!
    \*****************************************************/

  /*! exports provided: StudentModuleNgFactory */

  /***/
  function srcAppStudentStudentModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentModuleNgFactory", function () {
      return StudentModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _student_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student.module */
    "./src/app/student/student.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _student_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student.component.ngfactory */
    "./src/app/student/student.component.ngfactory.js");
    /* harmony import */


    var _student_home_student_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./student-home/student-home.component.ngfactory */
    "./src/app/student/student-home/student-home.component.ngfactory.js");
    /* harmony import */


    var _student_institutes_student_institutes_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-institutes/student-institutes.component.ngfactory */
    "./src/app/student/student-institutes/student-institutes.component.ngfactory.js");
    /* harmony import */


    var _student_dashboard_student_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-dashboard/student-dashboard.component.ngfactory */
    "./src/app/student/student-dashboard/student-dashboard.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_announcements_student_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./student-pages/student-announcements/student-announcements.component.ngfactory */
    "./src/app/student/student-pages/student-announcements/student-announcements.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_announcements_student_view_announcement_student_view_announcement_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./student-pages/student-announcements/student-view-announcement/student-view-announcement.component.ngfactory */
    "./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_schedule_student_schedule_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./student-pages/student-schedule/student-schedule.component.ngfactory */
    "./src/app/student/student-pages/student-schedule/student-schedule.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_schedule_student_view_schedule_student_view_schedule_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./student-pages/student-schedule/student-view-schedule/student-view-schedule.component.ngfactory */
    "./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_attendance_student_attendance_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./student-pages/student-attendance/student-attendance.component.ngfactory */
    "./src/app/student/student-pages/student-attendance/student-attendance.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_performance_report_student_performance_report_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./student-pages/student-performance-report/student-performance-report.component.ngfactory */
    "./src/app/student/student-pages/student-performance-report/student-performance-report.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_study_material_student_study_material_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./student-pages/student-study-material/student-study-material.component.ngfactory */
    "./src/app/student/student-pages/student-study-material/student-study-material.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_forums_chats_student_forums_chats_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./student-pages/student-forums-chats/student-forums-chats.component.ngfactory */
    "./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_forums_chats_student_forum_comment_student_forum_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.ngfactory */
    "./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_enrollment_details_student_enrollment_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./student-pages/student-enrollment-details/student-enrollment-details.component.ngfactory */
    "./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_enrollment_details_student_view_enrollment_student_view_enrollment_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.ngfactory */
    "./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_meeting_student_meeting_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./student-pages/student-meeting/student-meeting.component.ngfactory */
    "./src/app/student/student-pages/student-meeting/student-meeting.component.ngfactory.js");
    /* harmony import */


    var _student_pages_student_mentoring_student_mentoring_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./student-pages/student-mentoring/student-mentoring.component.ngfactory */
    "./src/app/student/student-pages/student-mentoring/student-mentoring.component.ngfactory.js");
    /* harmony import */


    var _student_pages_onlinee_class_onlinee_class_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./student-pages/onlinee-class/onlinee-class.component.ngfactory */
    "./src/app/student/student-pages/onlinee-class/onlinee-class.component.ngfactory.js");
    /* harmony import */


    var _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../node_modules/@nebular/theme/index.ngfactory */
    "./node_modules/@nebular/theme/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _services_shared_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ../services/shared.module */
    "./src/app/services/shared.module.ts");
    /* harmony import */


    var _student_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./student-routing.module */
    "./src/app/student/student-routing.module.ts");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _nebular_security__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @nebular/security */
    "./node_modules/@nebular/security/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var primeng_components_button_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! primeng/components/button/button */
    "./node_modules/primeng/components/button/button.js");
    /* harmony import */


    var primeng_components_button_button__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(primeng_components_button_button__WEBPACK_IMPORTED_MODULE_36__);
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _student_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./student.component */
    "./src/app/student/student.component.ts");
    /* harmony import */


    var _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./student-home/student-home.component */
    "./src/app/student/student-home/student-home.component.ts");
    /* harmony import */


    var _student_institutes_student_institutes_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./student-institutes/student-institutes.component */
    "./src/app/student/student-institutes/student-institutes.component.ts");
    /* harmony import */


    var _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./student-dashboard/student-dashboard.component */
    "./src/app/student/student-dashboard/student-dashboard.component.ts");
    /* harmony import */


    var _student_pages_student_announcements_student_announcements_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./student-pages/student-announcements/student-announcements.component */
    "./src/app/student/student-pages/student-announcements/student-announcements.component.ts");
    /* harmony import */


    var _student_pages_student_announcements_student_view_announcement_student_view_announcement_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./student-pages/student-announcements/student-view-announcement/student-view-announcement.component */
    "./src/app/student/student-pages/student-announcements/student-view-announcement/student-view-announcement.component.ts");
    /* harmony import */


    var _student_pages_student_schedule_student_schedule_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./student-pages/student-schedule/student-schedule.component */
    "./src/app/student/student-pages/student-schedule/student-schedule.component.ts");
    /* harmony import */


    var _student_pages_student_schedule_student_view_schedule_student_view_schedule_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./student-pages/student-schedule/student-view-schedule/student-view-schedule.component */
    "./src/app/student/student-pages/student-schedule/student-view-schedule/student-view-schedule.component.ts");
    /* harmony import */


    var _student_pages_student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./student-pages/student-attendance/student-attendance.component */
    "./src/app/student/student-pages/student-attendance/student-attendance.component.ts");
    /* harmony import */


    var _student_pages_student_performance_report_student_performance_report_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./student-pages/student-performance-report/student-performance-report.component */
    "./src/app/student/student-pages/student-performance-report/student-performance-report.component.ts");
    /* harmony import */


    var _student_pages_student_study_material_student_study_material_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./student-pages/student-study-material/student-study-material.component */
    "./src/app/student/student-pages/student-study-material/student-study-material.component.ts");
    /* harmony import */


    var _student_pages_student_forums_chats_student_forums_chats_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./student-pages/student-forums-chats/student-forums-chats.component */
    "./src/app/student/student-pages/student-forums-chats/student-forums-chats.component.ts");
    /* harmony import */


    var _student_pages_student_forums_chats_student_forum_comment_student_forum_comment_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component */
    "./src/app/student/student-pages/student-forums-chats/student-forum-comment/student-forum-comment.component.ts");
    /* harmony import */


    var _student_pages_student_enrollment_details_student_enrollment_details_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./student-pages/student-enrollment-details/student-enrollment-details.component */
    "./src/app/student/student-pages/student-enrollment-details/student-enrollment-details.component.ts");
    /* harmony import */


    var _student_pages_student_enrollment_details_student_view_enrollment_student_view_enrollment_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component */
    "./src/app/student/student-pages/student-enrollment-details/student-view-enrollment/student-view-enrollment.component.ts");
    /* harmony import */


    var _student_pages_student_meeting_student_meeting_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./student-pages/student-meeting/student-meeting.component */
    "./src/app/student/student-pages/student-meeting/student-meeting.component.ts");
    /* harmony import */


    var _student_pages_student_mentoring_student_mentoring_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./student-pages/student-mentoring/student-mentoring.component */
    "./src/app/student/student-pages/student-mentoring/student-mentoring.component.ts");
    /* harmony import */


    var _student_pages_onlinee_class_onlinee_class_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./student-pages/onlinee-class/onlinee-class.component */
    "./src/app/student/student-pages/onlinee-class/onlinee-class.component.ts");
    /* harmony import */


    var _services_auth_services_auth_guards_student_ealive_auth_guard__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ../services/auth-services/auth-guards/student-ealive-auth.guard */
    "./src/app/services/auth-services/auth-guards/student-ealive-auth.guard.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var StudentModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_student_module__WEBPACK_IMPORTED_MODULE_1__["StudentModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _student_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["StudentComponentNgFactory"], _student_home_student_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["StudentHomeComponentNgFactory"], _student_institutes_student_institutes_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["StudentInstitutesComponentNgFactory"], _student_dashboard_student_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["StudentDashboardComponentNgFactory"], _student_pages_student_announcements_student_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["StudentAnnouncementsComponentNgFactory"], _student_pages_student_announcements_student_view_announcement_student_view_announcement_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["StudentViewAnnouncementComponentNgFactory"], _student_pages_student_schedule_student_schedule_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["StudentScheduleComponentNgFactory"], _student_pages_student_schedule_student_view_schedule_student_view_schedule_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["StudentViewScheduleComponentNgFactory"], _student_pages_student_attendance_student_attendance_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["StudentAttendanceComponentNgFactory"], _student_pages_student_performance_report_student_performance_report_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["StudentPerformanceReportComponentNgFactory"], _student_pages_student_study_material_student_study_material_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["StudentStudyMaterialComponentNgFactory"], _student_pages_student_forums_chats_student_forums_chats_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["StudentForumsChatsComponentNgFactory"], _student_pages_student_forums_chats_student_forum_comment_student_forum_comment_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["StudentForumCommentComponentNgFactory"], _student_pages_student_enrollment_details_student_enrollment_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["StudentEnrollmentDetailsComponentNgFactory"], _student_pages_student_enrollment_details_student_view_enrollment_student_view_enrollment_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["StudentViewEnrollmentComponentNgFactory"], _student_pages_student_meeting_student_meeting_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["StudentMeetingComponentNgFactory"], _student_pages_student_mentoring_student_mentoring_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["StudentMentoringComponentNgFactory"], _student_pages_onlinee_class_onlinee_class_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["OnlineeClassComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbSearchFieldComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbContextMenuComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbPopoverComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbWindowsContainerComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbWindowComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbCalendarDayCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbCalendarMonthCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbCalendarYearCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbCalendarRangeDayCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbCalendarRangeYearCellComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbCalendarComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbCalendarRangeComponentNgFactory"], _node_modules_nebular_theme_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["NbDatepickerContainerComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbRestoreScrollTopHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbRestoreScrollTopHelper"], [_angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbSearchService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbSearchService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbWindowService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbWindowService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbOverlayService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbOverlayPositionBuilder"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbBlockScrollStrategyAdapter"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NB_WINDOW_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NB_DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbDateService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbNativeDateService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCalendarMonthModelService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCalendarMonthModelService"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbDateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _services_shared_module__WEBPACK_IMPORTED_MODULE_28__["SharedModule"], _services_shared_module__WEBPACK_IMPORTED_MODULE_28__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _student_routing_module__WEBPACK_IMPORTED_MODULE_29__["StudentRoutingModule"], _student_routing_module__WEBPACK_IMPORTED_MODULE_29__["StudentRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["ɵc"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbIconModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbUserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbActionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_30__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_30__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCdkMappingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCdkMappingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCdkAdapterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCdkAdapterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbOverlayModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbSearchModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbSidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbContextMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbContextMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_security__WEBPACK_IMPORTED_MODULE_33__["NbSecurityModule"], _nebular_security__WEBPACK_IMPORTED_MODULE_33__["NbSecurityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_34__["NbEvaIconsModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_34__["NbEvaIconsModule"], [_nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbIconLibraries"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbPopoverModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbWindowModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbWindowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbChatModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbChatModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _theme_theme_module__WEBPACK_IMPORTED_MODULE_35__["ThemeModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_35__["ThemeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_components_button_button__WEBPACK_IMPORTED_MODULE_36__["ButtonModule"], primeng_components_button_button__WEBPACK_IMPORTED_MODULE_36__["ButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCalendarKitModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCalendarKitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbBaseCalendarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbBaseCalendarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCalendarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCalendarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCalendarRangeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbCalendarRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbAccordionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_37__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_37__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _student_module__WEBPACK_IMPORTED_MODULE_1__["StudentModule"], _student_module__WEBPACK_IMPORTED_MODULE_1__["StudentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ROUTES"], function () {
        return [[{
          path: "",
          component: _student_component__WEBPACK_IMPORTED_MODULE_38__["StudentComponent"],
          children: [{
            path: "",
            redirectTo: "home",
            pathMatch: "full"
          }, {
            path: "home",
            component: _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_39__["StudentHomeComponent"]
          }, {
            path: "my-institutes",
            component: _student_institutes_student_institutes_component__WEBPACK_IMPORTED_MODULE_40__["StudentInstitutesComponent"]
          }, {
            path: "dashboard/:id",
            component: _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_41__["StudentDashboardComponent"]
          }, {
            path: "announcements/:id",
            component: _student_pages_student_announcements_student_announcements_component__WEBPACK_IMPORTED_MODULE_42__["StudentAnnouncementsComponent"]
          }, {
            path: "view-announcement/:id",
            component: _student_pages_student_announcements_student_view_announcement_student_view_announcement_component__WEBPACK_IMPORTED_MODULE_43__["StudentViewAnnouncementComponent"]
          }, {
            path: "schedule/:id",
            component: _student_pages_student_schedule_student_schedule_component__WEBPACK_IMPORTED_MODULE_44__["StudentScheduleComponent"]
          }, {
            path: "view-schedule/:id",
            component: _student_pages_student_schedule_student_view_schedule_student_view_schedule_component__WEBPACK_IMPORTED_MODULE_45__["StudentViewScheduleComponent"]
          }, {
            path: "attendance/:id",
            component: _student_pages_student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_46__["StudentAttendanceComponent"]
          }, {
            path: "performanceReport/:id",
            component: _student_pages_student_performance_report_student_performance_report_component__WEBPACK_IMPORTED_MODULE_47__["StudentPerformanceReportComponent"]
          }, {
            path: "studentMaterial/:id",
            component: _student_pages_student_study_material_student_study_material_component__WEBPACK_IMPORTED_MODULE_48__["StudentStudyMaterialComponent"]
          }, {
            path: "forumsAndChats/:id",
            component: _student_pages_student_forums_chats_student_forums_chats_component__WEBPACK_IMPORTED_MODULE_49__["StudentForumsChatsComponent"]
          }, {
            path: "forumsAndChats/comments/:id",
            component: _student_pages_student_forums_chats_student_forum_comment_student_forum_comment_component__WEBPACK_IMPORTED_MODULE_50__["StudentForumCommentComponent"]
          }, {
            path: "enrollmentDetails/:id",
            component: _student_pages_student_enrollment_details_student_enrollment_details_component__WEBPACK_IMPORTED_MODULE_51__["StudentEnrollmentDetailsComponent"]
          }, {
            path: "viewEnrollment/:id",
            component: _student_pages_student_enrollment_details_student_view_enrollment_student_view_enrollment_component__WEBPACK_IMPORTED_MODULE_52__["StudentViewEnrollmentComponent"]
          }, {
            path: "meeting/:id",
            component: _student_pages_student_meeting_student_meeting_component__WEBPACK_IMPORTED_MODULE_53__["StudentMeetingComponent"]
          }, {
            path: "mentoring/:id",
            component: _student_pages_student_mentoring_student_mentoring_component__WEBPACK_IMPORTED_MODULE_54__["StudentMentoringComponent"]
          }, {
            path: "onlineClasses/:id",
            component: _student_pages_onlinee_class_onlinee_class_component__WEBPACK_IMPORTED_MODULE_55__["OnlineeClassComponent"],
            canActivate: [_services_auth_services_auth_guards_student_ealive_auth_guard__WEBPACK_IMPORTED_MODULE_56__["StudentEaLiveGuard"]]
          }, {
            path: "**",
            redirectTo: "home"
          }]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NB_WINDOW_CONFIG"], {
        windowClass: "chatWindow"
      }, [])]);
    });
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

    var StudentModule = function StudentModule() {
      _classCallCheck(this, StudentModule);
    };
    /***/

  }
}]);