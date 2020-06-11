(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-student-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-home/student-home.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-home/student-home.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <nb-card>\n      <nb-card-header>\n        <h5>Meetings</h5>\n      </nb-card-header>\n      <nb-card-body>\n        <table class=\"table table-borderless\">\n          <thead>\n            <tr>\n              <th>Id</th>\n              <th>Topic</th>\n              <th>Join</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let meeting of meetings; let i = index\">\n              <td>{{ i + 1 }}</td>\n              <td>{{ meeting.topic }}</td>\n              <td>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-warning\"\n                  (click)=\"joinMeeting(meeting.joinUrl, meeting.meetingId, meeting.password)\"\n                >\n                  Join\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <!-- <div class=\"col-sm-6\" *ngIf=\"meetingNumber\">\n    {{ meetingNumber }}\n    <button class=\"btn btn-sm btn-danger float-right\" (click)=\"close()\">X</button>\n    <iframe\n      class=\"zoom\"\n      src=\"https://zoom.us/wc/{{ meetingNumber }}/join?prefer=1&un=dG9tbXk=\"\n      sandbox=\"allow-same-origin allow-forms allow-scripts\"\n      allow=\"microphone; camera\"\n      *ngIf=\"meetingNumber\"\n    ></iframe>\n  </div> -->\n</div>\n\n<!-- <div class=\"zoom-box\">\n  <div id=\"zmmtg-root\"></div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-one-column-layout>\n  <nb-menu [items]=\"menu\"></nb-menu>\n\n  <router-outlet></router-outlet>\n</ngx-one-column-layout>\n");

/***/ }),

/***/ "./src/app/student/student-home/student-home.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/student/student-home/student-home.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".zoom {\n  border: none;\n  width: 100%;\n  height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LWhvbWUvRTpcXFByb2plY3RzXFxGcmVlbGFuY2UgUHJvamVjdHNcXEVkdUF0bGFzXFxlZHVhdGxhczFcXGNsaWVudC9zcmNcXGFwcFxcc3R1ZGVudFxcc3R1ZGVudC1ob21lXFxzdHVkZW50LWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3N0dWRlbnQtaG9tZS9zdHVkZW50LWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAjem1tdGctcm9vdCB7XHJcbi8vICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4vLyAgIHdpZHRoOiA1MCU7XHJcbi8vICAgaGVpZ2h0OiA1MCU7XHJcbi8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgIHRvcDogMDtcclxuLy8gICBsZWZ0OiAwO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4vLyAgIHotaW5kZXg6IDA7XHJcbi8vIH1cclxuXHJcbi8vIC56b29tLWJveCB7XHJcbi8vICAgbWF4LXdpZHRoOiA1MCU7XHJcbi8vICAgbWF4LWhlaWdodDogNTAlO1xyXG4vLyB9XHJcblxyXG4uem9vbSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/student/student-home/student-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/student/student-home/student-home.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHomeComponent", function() { return StudentHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




// import { ZoomMtg } from '@zoomus/websdk';
// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareJssdk();
let StudentHomeComponent = class StudentHomeComponent {
    constructor(api, document) {
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
    ngOnInit() {
        this.getMeetings();
        // this.getSignature('73736782741', 'Abcd@123');
    }
    getMeetings() {
        this.api.getAllMeetings().subscribe((res) => {
            this.meetings = res;
        });
    }
    close() {
        this.meetingNumber = null;
    }
    joinMeeting(url, meetingNumber, passWord) {
        console.log(url);
        this.meetingNumber = meetingNumber;
        this.passWord = passWord;
        // this.meeting = true;
        window.open(url, 'Zoom', 'scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no');
    }
};
StudentHomeComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
StudentHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ngx-student-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student-home/student-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-home.component.scss */ "./src/app/student/student-home/student-home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], Object])
], StudentHomeComponent);



/***/ }),

/***/ "./src/app/student/student-menu.ts":
/*!*****************************************!*\
  !*** ./src/app/student/student-menu.ts ***!
  \*****************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const MENU_ITEMS = [
    {
        title: 'Home',
        icon: 'home-outline',
        link: '/student/home',
        home: true,
    },
];


/***/ }),

/***/ "./src/app/student/student-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function() { return StudentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-home/student-home.component */ "./src/app/student/student-home/student-home.component.ts");
/* harmony import */ var _student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _student_component__WEBPACK_IMPORTED_MODULE_2__["StudentComponent"],
        children: [
            {
                path: 'home',
                component: _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_1__["StudentHomeComponent"],
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: '**',
            },
        ],
    },
];
let StudentRoutingModule = class StudentRoutingModule {
};
StudentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
    })
], StudentRoutingModule);



/***/ }),

/***/ "./src/app/student/student.component.scss":
/*!************************************************!*\
  !*** ./src/app/student/student.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-menu */ "./src/app/student/student-menu.ts");



let StudentComponent = class StudentComponent {
    constructor() { }
    ngOnInit() {
        this.menu = _student_menu__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"];
        this.institutes = [];
    }
};
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student.component.scss */ "./src/app/student/student.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StudentComponent);



/***/ }),

/***/ "./src/app/student/student.module.ts":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _student_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-routing.module */ "./src/app/student/student-routing.module.ts");
/* harmony import */ var _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-home/student-home.component */ "./src/app/student/student-home/student-home.component.ts");









let StudentModule = class StudentModule {
};
StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _student_routing_module__WEBPACK_IMPORTED_MODULE_7__["StudentRoutingModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
        ],
        declarations: [_student_component__WEBPACK_IMPORTED_MODULE_1__["StudentComponent"], _student_home_student_home_component__WEBPACK_IMPORTED_MODULE_8__["StudentHomeComponent"]],
    })
], StudentModule);



/***/ })

}]);
//# sourceMappingURL=student-student-module-es2015.js.map