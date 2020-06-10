function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["online-classes-online-classes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/add-online-class/add-online-class.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/add-online-class/add-online-class.component.html ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteOnlineClassesOnlineClassesConfAddOnlineClassAddOnlineClassComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p style=\"color: black; font-weight: bold;\">Schedule A Live Class</p>\r\n\r\n<nb-card *ngIf=\"display\">\r\n  <nb-card-body>\r\n    <form [formGroup]=\"onlineClassForm\" (submit)=\"saveOnlineClass()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"teacherId\">*Teacher</label>\r\n          <nb-select\r\n            placeholder=\"Select Teacher\"\r\n            id=\"teacherId\"\r\n            [status]=\"\r\n              onlineClassForm.get('teacherId').invalid && onlineClassForm.get('teacherId').touched\r\n                ? 'danger'\r\n                : 'basic'\r\n            \"\r\n            fullWidth\r\n            formControlName=\"teacherId\"\r\n          >\r\n            <nb-option value=\"\">Select Teacher</nb-option>\r\n            <nb-option *ngFor=\"let i of teachers\" [value]=\"i._id\">{{\r\n              i.basicDetails.name\r\n            }}</nb-option>\r\n          </nb-select>\r\n          <small\r\n            *ngIf=\"\r\n              onlineClassForm.get('teacherId').invalid && onlineClassForm.get('teacherId').touched\r\n            \"\r\n            >*Course is required</small\r\n          >\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"courseId\">*Course</label>\r\n          <nb-select\r\n            placeholder=\"Select Course\"\r\n            id=\"courseId\"\r\n            [status]=\"\r\n              onlineClassForm.get('courseId').invalid && onlineClassForm.get('courseId').touched\r\n                ? 'danger'\r\n                : 'basic'\r\n            \"\r\n            fullWidth\r\n            formControlName=\"courseId\"\r\n            (selectedChange)=\"onSelectCourse($event)\"\r\n          >\r\n            <nb-option value=\"\">Select Course</nb-option>\r\n            <nb-option *ngFor=\"let i of institute.course\" [value]=\"i._id\">{{ i.name }}</nb-option>\r\n          </nb-select>\r\n          <small\r\n            *ngIf=\"\r\n              onlineClassForm.get('courseId').invalid && onlineClassForm.get('courseId').touched\r\n            \"\r\n            >*Course is required</small\r\n          >\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"batchId\">*Batch</label>\r\n          <nb-select\r\n            placeholder=\"Select Batch\"\r\n            id=\"batchId\"\r\n            formControlName=\"batchId\"\r\n            fullWidth\r\n            [status]=\"\r\n              onlineClassForm.get('batchId').invalid && onlineClassForm.get('batchId').touched\r\n                ? 'danger'\r\n                : 'basic'\r\n            \"\r\n          >\r\n            <nb-option value=\"\">Select Batch</nb-option>\r\n            <nb-option *ngFor=\"let item of batches\" [value]=\"item._id\">{{\r\n              item.batchCode\r\n            }}</nb-option>\r\n          </nb-select>\r\n          <small\r\n            *ngIf=\"onlineClassForm.get('batchId').invalid && onlineClassForm.get('batchId').touched\"\r\n            >*Batch is required</small\r\n          >\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"startDate\">*Start Date</label>\r\n            <input\r\n              type=\"date\"\r\n              nbInput\r\n              [status]=\"\r\n                onlineClassForm.get('startDate').invalid && onlineClassForm.get('startDate').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"startDate\"\r\n              fullWidth\r\n              formControlName=\"startDate\"\r\n              placeholder=\"startDate\"\r\n            />\r\n            <small\r\n              *ngIf=\"\r\n                onlineClassForm.get('startDate').invalid && onlineClassForm.get('startDate').touched\r\n              \"\r\n              >*Start Date is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"startTime\">*Start Time</label>\r\n            <input\r\n              type=\"time\"\r\n              nbInput\r\n              [status]=\"\r\n                onlineClassForm.get('startTime').invalid && onlineClassForm.get('startTime').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"startTime\"\r\n              fullWidth\r\n              formControlName=\"startTime\"\r\n              placeholder=\"startTime\"\r\n            />\r\n            <small\r\n              *ngIf=\"\r\n                onlineClassForm.get('startTime').invalid && onlineClassForm.get('startTime').touched\r\n              \"\r\n              >*Start Time is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"duration\">*Duration (in Min)</label>\r\n            <input\r\n              type=\"duration\"\r\n              nbInput\r\n              pattern=\"\\d*\"\r\n              maxlength=\"3\"\r\n              [status]=\"\r\n                onlineClassForm.get('duration').invalid && onlineClassForm.get('duration').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"duration\"\r\n              fullWidth\r\n              formControlName=\"duration\"\r\n              placeholder=\"duration\"\r\n            />\r\n            <small\r\n              *ngIf=\"\r\n                onlineClassForm.get('duration').invalid && onlineClassForm.get('duration').touched\r\n              \"\r\n              >*Duration is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"topic\">*Topic</label>\r\n            <input\r\n              type=\"topic\"\r\n              nbInput\r\n              [status]=\"\r\n                onlineClassForm.get('topic').invalid && onlineClassForm.get('topic').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"topic\"\r\n              fullWidth\r\n              formControlName=\"topic\"\r\n              placeholder=\"topic\"\r\n            />\r\n            <small\r\n              *ngIf=\"onlineClassForm.get('topic').invalid && onlineClassForm.get('topic').touched\"\r\n              >*Topic is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"agenda\">*Agenda</label>\r\n            <input\r\n              type=\"startTime\"\r\n              nbInput\r\n              status=\"basic\"\r\n              id=\"agenda\"\r\n              fullWidth\r\n              formControlName=\"agenda\"\r\n              placeholder=\"Agenda\"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">*Password</label>\r\n            <input\r\n              type=\"topic\"\r\n              nbInput\r\n              [status]=\"\r\n                onlineClassForm.get('password').invalid && onlineClassForm.get('password').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"password\"\r\n              fullWidth\r\n              formControlName=\"password\"\r\n              placeholder=\"password\"\r\n            />\r\n            <small\r\n              *ngIf=\"\r\n                onlineClassForm.get('password').invalid && onlineClassForm.get('password').touched\r\n              \"\r\n              >*Password is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button type=\"submit\" class=\"btn btn-primary float-right\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/manage-online-class/manage-online-class.component.html":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/manage-online-class/manage-online-class.component.html ***!
    \*****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteOnlineClassesOnlineClassesConfManageOnlineClassManageOnlineClassComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mb-2\" *ngIf=\"display\">\r\n  <div class=\"col-sm-6\">\r\n    <p style=\"color: black; font-weight: bold;\">Schedule A Live Class</p>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <nb-select\r\n      placeholder=\"Select Course\"\r\n      status=\"basic\"\r\n      fullWidth\r\n      (selectedChange)=\"onSelectCourse($event)\"\r\n    >\r\n      <nb-option value=\"\">Select Course</nb-option>\r\n      <nb-option *ngFor=\"let course of institute.course\" [value]=\"course._id\">{{\r\n        course.name\r\n      }}</nb-option>\r\n    </nb-select>\r\n  </div>\r\n\r\n  <div class=\"col-sm-3\">\r\n    <nb-select\r\n      placeholder=\"Select Batch\"\r\n      fullWidth\r\n      status=\"basic\"\r\n      (selectedChange)=\"onSelectBatch($event)\"\r\n    >\r\n      <nb-option value=\"\">Select Batch</nb-option>\r\n      <nb-option *ngFor=\"let batch of batches\" [value]=\"batch._id\">{{ batch.batchCode }}</nb-option>\r\n    </nb-select>\r\n  </div>\r\n</div>\r\n\r\n<nb-card status=\"info\">\r\n  <nb-card-header>UPCOMING CLASSES</nb-card-header>\r\n  <nb-card-body>\r\n    <nb-list *ngIf=\"meetings.length > 0; else noMeetings\">\r\n      <nb-list-item *ngFor=\"let meeting of meetings; let i = index\">\r\n        <div class=\"row\" style=\"width: 100%;\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"date-block\">\r\n              <span class=\"month\">{{ month(meeting.startTime) }}</span>\r\n              <span class=\"day\">{{ day(meeting.startTime) }}</span>\r\n            </div>\r\n            <div class=\"meeting-details\">\r\n              <div class=\"detail1\">Topic: {{ meeting.topic }}</div>\r\n              <div class=\"detail1\">Start Time: {{ createTime(meeting.startTime) }}</div>\r\n              <div class=\"detail2\">Host: {{ meeting.hostName }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"text-right\">\r\n              <button class=\"mr-3 mb-1\" nbButton status=\"info\" (click)=\"goLive(meeting.startUrl)\">\r\n                Go Live\r\n              </button>\r\n              <button class=\"mr-3 mb-1\" nbButton status=\"warning\" (click)=\"notify(i)\">\r\n                Notify\r\n              </button>\r\n              <button class=\"mr-3 mb-1\" nbButton status=\"warning\" (click)=\"edit(meeting._id)\">\r\n                Edit\r\n              </button>\r\n              <button\r\n                class=\"mr-3 mb-1\"\r\n                nbButton\r\n                status=\"danger\"\r\n                (click)=\"deleteMeeting(meeting._id, meeting.meetingId)\"\r\n              >\r\n                Delete\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </nb-list-item>\r\n    </nb-list>\r\n    <ng-template #noMeetings>\r\n      <p class=\"mt-5 text-center\">No Meetings Available</p>\r\n    </ng-template>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<!-- <nb-card status=\"warning\">\r\n  <nb-card-header>RECORDED CLASSES</nb-card-header>\r\n  <nb-card-body>\r\n    <p class=\"mt-5 text-center\">No Recorded Classes</p>\r\n  </nb-card-body>\r\n</nb-card> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/online-class-settings/online-class-settings.component.html":
  /*!*********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/online-class-settings/online-class-settings.component.html ***!
    \*********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteOnlineClassesOnlineClassesConfOnlineClassSettingsOnlineClassSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p style=\"color: black; font-weight: bold;\">Settings</p>\r\n\r\n<nb-card>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"settingForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"publicKey\">Public Key</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"publicKey\"\r\n            fullWidth\r\n            [status]=\"f.publicKey.errors && f.publicKey.touched ? 'danger' : 'basic'\"\r\n            formControlName=\"publicKey\"\r\n            placeholder=\"Public Key\"\r\n          />\r\n          <small *ngIf=\"f.publicKey.errors && f.publicKey.touched\">*Public Key is req.</small>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"secretKey\">Secret Key</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"secretKey\"\r\n            fullWidth\r\n            [status]=\"f.secretKey.errors && f.secretKey.touched ? 'danger' : 'basic'\"\r\n            formControlName=\"secretKey\"\r\n            placeholder=\"Secret Key\"\r\n          />\r\n          <small *ngIf=\"f.secretKey.errors && f.secretKey.touched\">*Secret Key is req.</small>\r\n        </div>\r\n      </div>\r\n      <div style=\"display: block; margin-top: 1rem; text-align: right;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">\r\n          {{ edit === 'true' ? 'Update Keys' : 'Add Keys' }}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/online-classes-conf.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/online-classes-conf.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteOnlineClassesOnlineClassesConfOnlineClassesConfComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/institute/online-classes/online-classes-conf/add-online-class/add-online-class.component.scss":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/pages/institute/online-classes/online-classes-conf/add-online-class/add-online-class.component.scss ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteOnlineClassesOnlineClassesConfAddOnlineClassAddOnlineClassComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9vbmxpbmUtY2xhc3Nlcy9vbmxpbmUtY2xhc3Nlcy1jb25mL2FkZC1vbmxpbmUtY2xhc3MvYWRkLW9ubGluZS1jbGFzcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/institute/online-classes/online-classes-conf/add-online-class/add-online-class.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/pages/institute/online-classes/online-classes-conf/add-online-class/add-online-class.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: AddOnlineClassComponent */

  /***/
  function srcAppPagesInstituteOnlineClassesOnlineClassesConfAddOnlineClassAddOnlineClassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOnlineClassComponent", function () {
      return AddOnlineClassComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddOnlineClassComponent = /*#__PURE__*/function () {
      function AddOnlineClassComponent(fb, api, router, location, route, toasterService) {
        _classCallCheck(this, AddOnlineClassComponent);

        this.fb = fb;
        this.api = api;
        this.router = router;
        this.location = location;
        this.route = route;
        this.toasterService = toasterService;
        this.batches = [];
        this.teachers = [];
      }

      _createClass(AddOnlineClassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.display = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.route.queryParams.subscribe(function (param) {
            _this.meetingId = param.meeting;
            _this.edit = param.edit;
          });
          this.getCourses(this.instituteId);
          this.onlineClassForm = this.fb.group({
            teacherId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            instituteId: [this.instituteId],
            courseId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            batchId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            agenda: [''],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }
      }, {
        key: "getMeeting",
        value: function getMeeting(id) {
          var _this2 = this;

          this.api.getOneMeeting({
            id: id
          }).subscribe(function (data) {
            _this2.meeting = data;

            _this2.onlineClassForm.patchValue({
              teacherId: _this2.meeting.hostId,
              instituteId: _this2.meeting.instituteId,
              courseId: _this2.meeting.courseId,
              startDate: _this2.meeting.startTime.split('T')[0],
              startTime: _this2.meeting.startTime.split('T')[1].substring(0, 5),
              duration: _this2.meeting.duration,
              topic: _this2.meeting.topic,
              agenda: _this2.meeting.agenda,
              password: _this2.meeting.password
            });

            _this2.onSelectCourse(_this2.meeting.courseId);

            _this2.onlineClassForm.patchValue({
              batchId: _this2.meeting.batchId
            });

            _this2.display = true;
          }, function (err) {});
        }
      }, {
        key: "getCourses",
        value: function getCourses(id) {
          var _this3 = this;

          this.api.getCourseTD(id).subscribe(function (data) {
            _this3.institute = data;

            _this3.getEmployees(_this3.instituteId);
          });
        }
      }, {
        key: "onSelectCourse",
        value: function onSelectCourse(id) {
          this.batches = this.institute.batch.filter(function (b) {
            return b.course === id;
          });
        }
      }, {
        key: "getEmployees",
        value: function getEmployees(instituteId) {
          var _this4 = this;

          this.api.getEmployeesByInstituteId(instituteId).subscribe(function (data) {
            _this4.teachers = data;

            if (_this4.edit) {
              _this4.getMeeting(_this4.meetingId);
            } else {
              _this4.display = true;
            }
          });
        }
      }, {
        key: "saveOnlineClass",
        value: function saveOnlineClass() {
          var _this5 = this;

          if (this.onlineClassForm.valid) {
            var date = this.onlineClassForm.value.startDate + 'T' + this.onlineClassForm.value.startTime + ':00Z';

            if (!this.edit) {
              var onlineClass = {
                teacherId: this.onlineClassForm.value.teacherId,
                instituteId: this.instituteId,
                batchId: this.onlineClassForm.value.batchId,
                courseId: this.onlineClassForm.value.courseId,
                startTime: date,
                duration: this.onlineClassForm.value.duration,
                topic: this.onlineClassForm.value.topic,
                agenda: this.onlineClassForm.value.agenda,
                password: this.onlineClassForm.value.password
              };
              this.api.createMeeting(onlineClass).subscribe(function (res) {
                _this5.showToast('top right', 'success', 'Meeting Added Successfully');

                _this5.location.back();
              }, function (err) {
                _this5.showToast('top right', 'danger', err.err.message);
              });
            } else {
              var _onlineClass = {
                _id: this.meetingId,
                meetingId: this.meeting.meetingId,
                teacherId: this.onlineClassForm.value.teacherId,
                instituteId: this.instituteId,
                batchId: this.onlineClassForm.value.batchId,
                courseId: this.onlineClassForm.value.courseId,
                startTime: date,
                duration: this.onlineClassForm.value.duration,
                topic: this.onlineClassForm.value.topic,
                agenda: this.onlineClassForm.value.agenda,
                password: this.onlineClassForm.value.password
              };
              this.api.updateMeeting(_onlineClass).subscribe(function (res) {
                _this5.showToast('top right', 'success', 'Meeting Updated Successfully');

                _this5.location.back();
              }, function (err) {
                _this5.showToast('top right', 'danger', err.err.message);
              });
            }
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

      return AddOnlineClassComponent;
    }();

    AddOnlineClassComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]
      }];
    };

    AddOnlineClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'ngx-add-online-class',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-online-class.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/add-online-class/add-online-class.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-online-class.component.scss */
      "./src/app/pages/institute/online-classes/online-classes-conf/add-online-class/add-online-class.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]])], AddOnlineClassComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/online-classes/online-classes-conf/manage-online-class/manage-online-class.component.scss":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/pages/institute/online-classes/online-classes-conf/manage-online-class/manage-online-class.component.scss ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteOnlineClassesOnlineClassesConfManageOnlineClassManageOnlineClassComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".month {\n  display: block;\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n  margin-top: 10px;\n  font-size: 30px; }\n\n.day {\n  display: block;\n  text-align: center;\n  color: #fff;\n  margin-top: 10px;\n  font-size: 20px; }\n\n.date-block {\n  float: left;\n  width: 75px;\n  height: 75px;\n  background-color: #0095ff; }\n\n.meeting-details {\n  float: left;\n  padding-left: 25px;\n  width: 60%; }\n\n.meeting-details .detail1 {\n  padding-bottom: 10px;\n  display: block;\n  font-weight: bold; }\n\n.meeting-details .detail2 {\n  display: block;\n  font-weight: bold;\n  color: #a3a2a2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL29ubGluZS1jbGFzc2VzL29ubGluZS1jbGFzc2VzLWNvbmYvbWFuYWdlLW9ubGluZS1jbGFzcy9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxvbmxpbmUtY2xhc3Nlc1xcb25saW5lLWNsYXNzZXMtY29uZlxcbWFuYWdlLW9ubGluZS1jbGFzc1xcbWFuYWdlLW9ubGluZS1jbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL29ubGluZS1jbGFzc2VzL29ubGluZS1jbGFzc2VzLWNvbmYvbWFuYWdlLW9ubGluZS1jbGFzcy9tYW5hZ2Utb25saW5lLWNsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vbnRoIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5kYXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZGF0ZS1ibG9jayB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk1ZmY7XHJcbn1cclxuLm1lZXRpbmctZGV0YWlscyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuLm1lZXRpbmctZGV0YWlscyAuZGV0YWlsMSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1lZXRpbmctZGV0YWlscyAuZGV0YWlsMiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNhM2EyYTI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/institute/online-classes/online-classes-conf/manage-online-class/manage-online-class.component.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/pages/institute/online-classes/online-classes-conf/manage-online-class/manage-online-class.component.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: ManageOnlineClassComponent */

  /***/
  function srcAppPagesInstituteOnlineClassesOnlineClassesConfManageOnlineClassManageOnlineClassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageOnlineClassComponent", function () {
      return ManageOnlineClassComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/api.service */
    "./src/app/services/api.service.ts");

    var ManageOnlineClassComponent = /*#__PURE__*/function () {
      function ManageOnlineClassComponent(active, api, router, route) {
        _classCallCheck(this, ManageOnlineClassComponent);

        this.active = active;
        this.api = api;
        this.router = router;
        this.route = route;
        this.batches = [];
        this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      }

      _createClass(ManageOnlineClassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.meetings = [];
          this.instituteId = this.active.snapshot.paramMap.get('id');
          this.getCourses(this.instituteId);
        }
      }, {
        key: "getCourses",
        value: function getCourses(id) {
          var _this6 = this;

          this.api.getCourseTD(id).subscribe(function (data) {
            _this6.institute = data;
            _this6.display = true;
          });
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
          this.courseId = id;
          this.batches = this.institute.batch.filter(function (b) {
            return b.course === id;
          });
        }
      }, {
        key: "onSelectBatch",
        value: function onSelectBatch(batchId) {
          this.batch = batchId;
          this.getUpcomingClasses(this.instituteId, batchId);
        }
      }, {
        key: "goLive",
        value: function goLive(startUrl) {
          window.open(startUrl, 'Zoom', 'scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no');
        }
      }, {
        key: "notify",
        value: function notify(i) {}
      }, {
        key: "edit",
        value: function edit(id) {
          this.router.navigate(["/pages/institute/online-classes/create-class/".concat(this.instituteId, "/edit")], {
            queryParams: {
              meeting: id,
              edit: 'true'
            }
          });
        }
      }, {
        key: "deleteMeeting",
        value: function deleteMeeting(id, meetingId) {
          this.api.deleteMeeting({
            _id: id,
            meetingId: meetingId
          }).subscribe(function (res) {}, function (err) {});
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
          var _this7 = this;

          this.api.getMeetingByBatch({
            instituteId: instituteId,
            batchId: batchId,
            type: 'upcoming'
          }).subscribe(function (res) {
            _this7.meetings = res;
          }, function (err) {});
        }
      }]);

      return ManageOnlineClassComponent;
    }();

    ManageOnlineClassComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ManageOnlineClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-manage-online-class',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-online-class.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/manage-online-class/manage-online-class.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-online-class.component.scss */
      "./src/app/pages/institute/online-classes/online-classes-conf/manage-online-class/manage-online-class.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], ManageOnlineClassComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/online-classes/online-classes-conf/online-class-settings/online-class-settings.component.scss":
  /*!*******************************************************************************************************************************!*\
    !*** ./src/app/pages/institute/online-classes/online-classes-conf/online-class-settings/online-class-settings.component.scss ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteOnlineClassesOnlineClassesConfOnlineClassSettingsOnlineClassSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9vbmxpbmUtY2xhc3Nlcy9vbmxpbmUtY2xhc3Nlcy1jb25mL29ubGluZS1jbGFzcy1zZXR0aW5ncy9vbmxpbmUtY2xhc3Mtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/institute/online-classes/online-classes-conf/online-class-settings/online-class-settings.component.ts":
  /*!*****************************************************************************************************************************!*\
    !*** ./src/app/pages/institute/online-classes/online-classes-conf/online-class-settings/online-class-settings.component.ts ***!
    \*****************************************************************************************************************************/

  /*! exports provided: OnlineClassSettingsComponent */

  /***/
  function srcAppPagesInstituteOnlineClassesOnlineClassesConfOnlineClassSettingsOnlineClassSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineClassSettingsComponent", function () {
      return OnlineClassSettingsComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services/auth-services/auth.service */
    "./src/app/services/auth-services/auth.service.ts");

    var OnlineClassSettingsComponent = /*#__PURE__*/function () {
      function OnlineClassSettingsComponent(fb, api, route, toasterService, authService, router) {
        _classCallCheck(this, OnlineClassSettingsComponent);

        this.fb = fb;
        this.api = api;
        this.route = route;
        this.toasterService = toasterService;
        this.authService = authService;
        this.router = router;
      }

      _createClass(OnlineClassSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.route.queryParams.subscribe(function (param) {
            _this8.edit = param.edit;
          });
          this.api.getCredentials().subscribe(function (res) {
            if (res && res.client_id) {
              _this8.edit = 'true';

              _this8.settingForm.patchValue({
                publicKey: res.client_id,
                secretKey: res.client_secret_id
              });
            }
          });
          this.settingForm = this.fb.group({
            publicKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            secretKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          this.settingForm.markAllAsTouched();

          var userId = this.authService.getUser()._id;

          var requestData = {
            client_id: this.settingForm.get('publicKey').value,
            client_secret_id: this.settingForm.get('secretKey').value,
            user_id: userId
          };
          this.api.addCredentials(requestData).subscribe(function (res) {
            _this9.showToast('top-right', 'success', 'Settings Updated');

            _this9.api.getZoomAuth({
              userId: res.user_id
            }).subscribe(function (data) {
              window.open(data.authLink, '_blank', 'toolbar,scrollbars,resizable,top=500,left=500,width=400,height=400');
            });

            _this9.router.navigate(['/pages/institute/online-classes/create-class/', _this9.instituteId]);
          }, function (error) {
            return console.error(error);
          });
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
        key: "f",
        get: function get() {
          return this.settingForm.controls;
        }
      }]);

      return OnlineClassSettingsComponent;
    }();

    OnlineClassSettingsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]
      }, {
        type: _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    OnlineClassSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-online-class-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./online-class-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/online-class-settings/online-class-settings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./online-class-settings.component.scss */
      "./src/app/pages/institute/online-classes/online-classes-conf/online-class-settings/online-class-settings.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"], _services_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], OnlineClassSettingsComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/online-classes/online-classes-conf/online-classes-conf.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/institute/online-classes/online-classes-conf/online-classes-conf.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteOnlineClassesOnlineClassesConfOnlineClassesConfComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9vbmxpbmUtY2xhc3Nlcy9vbmxpbmUtY2xhc3Nlcy1jb25mL29ubGluZS1jbGFzc2VzLWNvbmYuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/institute/online-classes/online-classes-conf/online-classes-conf.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/institute/online-classes/online-classes-conf/online-classes-conf.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: OnlineClassesConfComponent */

  /***/
  function srcAppPagesInstituteOnlineClassesOnlineClassesConfOnlineClassesConfComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineClassesConfComponent", function () {
      return OnlineClassesConfComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OnlineClassesConfComponent = /*#__PURE__*/function () {
      function OnlineClassesConfComponent() {
        _classCallCheck(this, OnlineClassesConfComponent);
      }

      _createClass(OnlineClassesConfComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OnlineClassesConfComponent;
    }();

    OnlineClassesConfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-branch-conf',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./online-classes-conf.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/online-classes/online-classes-conf/online-classes-conf.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./online-classes-conf.component.scss */
      "./src/app/pages/institute/online-classes/online-classes-conf/online-classes-conf.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OnlineClassesConfComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/online-classes/online-classes-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/institute/online-classes/online-classes-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: OnlineClassesRoutingModule */

  /***/
  function srcAppPagesInstituteOnlineClassesOnlineClassesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineClassesRoutingModule", function () {
      return OnlineClassesRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _online_classes_conf_online_classes_conf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./online-classes-conf/online-classes-conf.component */
    "./src/app/pages/institute/online-classes/online-classes-conf/online-classes-conf.component.ts");
    /* harmony import */


    var _online_classes_conf_add_online_class_add_online_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./online-classes-conf/add-online-class/add-online-class.component */
    "./src/app/pages/institute/online-classes/online-classes-conf/add-online-class/add-online-class.component.ts");
    /* harmony import */


    var _online_classes_conf_online_class_settings_online_class_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./online-classes-conf/online-class-settings/online-class-settings.component */
    "./src/app/pages/institute/online-classes/online-classes-conf/online-class-settings/online-class-settings.component.ts");
    /* harmony import */


    var _online_classes_conf_manage_online_class_manage_online_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./online-classes-conf/manage-online-class/manage-online-class.component */
    "./src/app/pages/institute/online-classes/online-classes-conf/manage-online-class/manage-online-class.component.ts");

    var routes = [{
      path: '',
      component: _online_classes_conf_online_classes_conf_component__WEBPACK_IMPORTED_MODULE_3__["OnlineClassesConfComponent"],
      children: [{
        path: 'settings/:id',
        component: _online_classes_conf_online_class_settings_online_class_settings_component__WEBPACK_IMPORTED_MODULE_5__["OnlineClassSettingsComponent"]
      }, {
        path: 'create-class/:id',
        component: _online_classes_conf_add_online_class_add_online_class_component__WEBPACK_IMPORTED_MODULE_4__["AddOnlineClassComponent"]
      }, {
        path: 'create-class/:id/edit',
        component: _online_classes_conf_add_online_class_add_online_class_component__WEBPACK_IMPORTED_MODULE_4__["AddOnlineClassComponent"]
      }, {
        path: 'manage-class/:id',
        component: _online_classes_conf_manage_online_class_manage_online_class_component__WEBPACK_IMPORTED_MODULE_6__["ManageOnlineClassComponent"]
      }]
    }];

    var OnlineClassesRoutingModule = function OnlineClassesRoutingModule() {
      _classCallCheck(this, OnlineClassesRoutingModule);
    };

    OnlineClassesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OnlineClassesRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/institute/online-classes/online-classes.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/institute/online-classes/online-classes.module.ts ***!
    \*************************************************************************/

  /*! exports provided: OnlineClassesModule */

  /***/
  function srcAppPagesInstituteOnlineClassesOnlineClassesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineClassesModule", function () {
      return OnlineClassesModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _online_classes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./online-classes-routing.module */
    "./src/app/pages/institute/online-classes/online-classes-routing.module.ts");
    /* harmony import */


    var _online_classes_conf_online_class_settings_online_class_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./online-classes-conf/online-class-settings/online-class-settings.component */
    "./src/app/pages/institute/online-classes/online-classes-conf/online-class-settings/online-class-settings.component.ts");
    /* harmony import */


    var _online_classes_conf_manage_online_class_manage_online_class_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./online-classes-conf/manage-online-class/manage-online-class.component */
    "./src/app/pages/institute/online-classes/online-classes-conf/manage-online-class/manage-online-class.component.ts");
    /* harmony import */


    var _online_classes_conf_add_online_class_add_online_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./online-classes-conf/add-online-class/add-online-class.component */
    "./src/app/pages/institute/online-classes/online-classes-conf/add-online-class/add-online-class.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var _online_classes_conf_online_classes_conf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./online-classes-conf/online-classes-conf.component */
    "./src/app/pages/institute/online-classes/online-classes-conf/online-classes-conf.component.ts");

    var OnlineClassesModule = function OnlineClassesModule() {
      _classCallCheck(this, OnlineClassesModule);
    };

    OnlineClassesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_online_classes_conf_online_classes_conf_component__WEBPACK_IMPORTED_MODULE_10__["OnlineClassesConfComponent"], _online_classes_conf_online_class_settings_online_class_settings_component__WEBPACK_IMPORTED_MODULE_4__["OnlineClassSettingsComponent"], _online_classes_conf_manage_online_class_manage_online_class_component__WEBPACK_IMPORTED_MODULE_5__["ManageOnlineClassComponent"], _online_classes_conf_add_online_class_add_online_class_component__WEBPACK_IMPORTED_MODULE_6__["AddOnlineClassComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _online_classes_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnlineClassesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAccordionModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbListModule"]]
    })], OnlineClassesModule);
    /***/
  }
}]);
//# sourceMappingURL=online-classes-online-classes-module-es5.js.map