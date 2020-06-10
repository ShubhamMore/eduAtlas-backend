function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tests-tests-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-test/create-test.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-test/create-test.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteTestsCreateTestCreateTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p style=\"color: black; font-weight: bold;\">Create Tesr</p>\r\n\r\n<nb-card *ngIf=\"display\">\r\n  <nb-card-body>\r\n    <form [formGroup]=\"createTestForm\" (submit)=\"createTest()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"courseId\">*Course</label>\r\n          <nb-select\r\n            placeholder=\"Select Course\"\r\n            id=\"courseId\"\r\n            [status]=\"\r\n              createTestForm.get('courseId').invalid && createTestForm.get('courseId').touched\r\n                ? 'danger'\r\n                : 'basic'\r\n            \"\r\n            fullWidth\r\n            formControlName=\"courseId\"\r\n            (selectedChange)=\"onSelectCourse($event)\"\r\n          >\r\n            <nb-option value=\"\">Select Course</nb-option>\r\n            <nb-option *ngFor=\"let i of institute.course\" [value]=\"i._id\">{{ i.name }}</nb-option>\r\n          </nb-select>\r\n          <small\r\n            *ngIf=\"createTestForm.get('courseId').invalid && createTestForm.get('courseId').touched\"\r\n            >*Course is required</small\r\n          >\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"batchId\">*Batch</label>\r\n          <nb-select\r\n            placeholder=\"Select Batch\"\r\n            id=\"batchId\"\r\n            formControlName=\"batchId\"\r\n            fullWidth\r\n            [status]=\"\r\n              createTestForm.get('batchId').invalid && createTestForm.get('batchId').touched\r\n                ? 'danger'\r\n                : 'basic'\r\n            \"\r\n          >\r\n            <nb-option value=\"\">Select Batch</nb-option>\r\n            <nb-option *ngFor=\"let item of batches\" [value]=\"item._id\">{{\r\n              item.batchCode\r\n            }}</nb-option>\r\n          </nb-select>\r\n          <small\r\n            *ngIf=\"createTestForm.get('batchId').invalid && createTestForm.get('batchId').touched\"\r\n            >*Batch is required</small\r\n          >\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"date\">*Date</label>\r\n            <input\r\n              type=\"date\"\r\n              nbInput\r\n              [status]=\"\r\n                createTestForm.get('date').invalid && createTestForm.get('date').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"date\"\r\n              fullWidth\r\n              formControlName=\"date\"\r\n              placeholder=\"date\"\r\n            />\r\n            <small *ngIf=\"createTestForm.get('date').invalid && createTestForm.get('date').touched\"\r\n              >*Date is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"testName\">*Test Name</label>\r\n            <input\r\n              type=\"text\"\r\n              nbInput\r\n              [status]=\"\r\n                createTestForm.get('testName').invalid && createTestForm.get('testName').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"testName\"\r\n              fullWidth\r\n              formControlName=\"testName\"\r\n              placeholder=\"testName\"\r\n            />\r\n            <small\r\n              *ngIf=\"\r\n                createTestForm.get('testName').invalid && createTestForm.get('testName').touched\r\n              \"\r\n              >*Test Name is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"totalMarks\">*Total Marks</label>\r\n            <input\r\n              type=\"text\"\r\n              nbInput\r\n              pattern=\"\\d*\"\r\n              maxlength=\"3\"\r\n              [status]=\"\r\n                createTestForm.get('totalMarks').invalid && createTestForm.get('totalMarks').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"totalMarks\"\r\n              fullWidth\r\n              formControlName=\"totalMarks\"\r\n              placeholder=\"Total Marks\"\r\n            />\r\n            <small\r\n              *ngIf=\"\r\n                createTestForm.get('totalMarks').invalid && createTestForm.get('totalMarks').touched\r\n              \"\r\n              >*Marks is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button type=\"submit\" class=\"btn btn-primary float-right\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteTestsCreateTestsScoreCreateTestsScoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p style=\"color: black; font-weight: bold;\"></p>\n\n<nb-card *ngIf=\"display\">\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <label for=\"courseId\"><strong>Course: </strong>{{ course }}</label>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <label for=\"batchId\"><strong>Batch: </strong>{{ batch }}</label>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"date\"><strong>Date: </strong>{{ test.date }}</label>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"testName\"><strong>Test Name: </strong>{{ test.testName }}</label>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"totalMarks\"><strong>Total Marks: </strong>{{ test.totalMarks }}</label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <nb-checkbox\n          (checkedChange)=\"changeFieUpload($event)\"\n          [(ngModel)]=\"fileUpload\"\n          fullWidth\n          status=\"basic\"\n          >Upload Test File</nb-checkbox\n        >\n      </div>\n    </div>\n\n    <div *ngIf=\"!fileUpload\">\n      <div *ngIf=\"studentScore.length > 0; else noStudents\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <table class=\"table table-borderless text-center\">\n              <thead>\n                <tr>\n                  <th class=\"\">Roll No</th>\n                  <th class=\"\">Score</th>\n                </tr>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let student of studentScore; let i = index\">\n                  <tr>\n                    <td>{{ student.rollNo }}</td>\n\n                    <td>\n                      <input\n                        type=\"number\"\n                        nbInput\n                        pattern=\"\\d*\"\n                        maxlength=\"3\"\n                        [id]=\"student.studentId\"\n                        [value]=\"student.marks\"\n                        (input)=\"addMarks($event, i)\"\n                      />\n                    </td>\n                  </tr>\n                </ng-container>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <ng-template #noStudents>\n        <p class=\"pt-5 text-center\">No Students Found</p>\n      </ng-template>\n    </div>\n    <div *ngIf=\"fileUpload\">\n      <input\n        type=\"file\"\n        nbInput\n        status=\"basic\"\n        fullWidth\n        id=\"score\"\n        (change)=\"onFilePicked($event)\"\n      />\n      <span style=\"color: #f00;\" *ngIf=\"invalidFile\"\n        >*File format must be *.xsl, *.xlsx, *.csv</span\n      >\n      <p *ngIf=\"file && !invalidFile\">{{ file.name }}</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <button type=\"submit\" class=\"btn btn-primary float-right\" (click)=\"addScore()\">\n          Save\n        </button>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteTestsManageTestsScoreManageTestsScoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mb-2\">\n  <div class=\"col-12\">\n    <p style=\"color: black; font-weight: bold;\">Test Score</p>\n  </div>\n</div>\n\n<nb-card status=\"info\" *ngIf=\"display\">\n  <nb-card-header>\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h3 class=\"text-white\">Test</h3>\n      </div>\n      <div class=\"col-sm-3\">\n        <nb-select\n          placeholder=\"Select Course\"\n          status=\"basic\"\n          fullWidth\n          (selectedChange)=\"onSelectCourse($event)\"\n        >\n          <nb-option value=\"\">Select Course</nb-option>\n          <nb-option *ngFor=\"let course of institute.course\" [value]=\"course._id\">{{\n            course.name\n          }}</nb-option>\n        </nb-select>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <nb-select\n          placeholder=\"Select Batch\"\n          fullWidth\n          status=\"basic\"\n          (selectedChange)=\"onSelectBatch($event)\"\n        >\n          <nb-option value=\"\">Select Batch</nb-option>\n          <nb-option *ngFor=\"let batch of batches\" [value]=\"batch._id\">{{\n            batch.batchCode\n          }}</nb-option>\n        </nb-select>\n      </div>\n    </div>\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\" style=\"width: 100%;\">\n      <div class=\"col-md-12\">\n        <div class=\"table-responsive\" *ngIf=\"tests.length > 0; else noTests\">\n          <table class=\"table table-borderless\">\n            <thead>\n              <tr>\n                <th>Test Title</th>\n                <th>Test Date</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let test of tests; let i = index\">\n                <td>{{ test.testName }}</td>\n                <td>{{ test.date }}</td>\n                <td>\n                  <button class=\"mr-3 mb-1\" nbButton status=\"warning\" (click)=\"edit(test._id)\">\n                    Edit\n                  </button>\n                </td>\n                <td>\n                  <button\n                    class=\"mr-3 mb-1\"\n                    nbButton\n                    status=\"warning\"\n                    (click)=\"createTestScore(test._id)\"\n                  >\n                    Upload Score\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <ng-template #noTests>\n          <p class=\"text-center pt-5\">No Tests Available</p>\n        </ng-template>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests/manage-tests.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests/manage-tests.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteTestsManageTestsManageTestsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row mb-2\">\n  <div class=\"col-12\">\n    <button class=\"btn btn-warning text-white float-right\" (click)=\"createTest()\">\n      Create Test\n    </button>\n    <p style=\"color: black; font-weight: bold;\">Define Tests</p>\n  </div>\n</div>\n\n<nb-card status=\"info\" *ngIf=\"display\">\n  <nb-card-header>\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h3 class=\"text-white\">Test</h3>\n      </div>\n      <div class=\"col-sm-3\">\n        <nb-select\n          placeholder=\"Select Course\"\n          status=\"basic\"\n          fullWidth\n          (selectedChange)=\"onSelectCourse($event)\"\n        >\n          <nb-option value=\"\">Select Course</nb-option>\n          <nb-option *ngFor=\"let course of institute.course\" [value]=\"course._id\">{{\n            course.name\n          }}</nb-option>\n        </nb-select>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <nb-select\n          placeholder=\"Select Batch\"\n          fullWidth\n          status=\"basic\"\n          (selectedChange)=\"onSelectBatch($event)\"\n        >\n          <nb-option value=\"\">Select Batch</nb-option>\n          <nb-option *ngFor=\"let batch of batches\" [value]=\"batch._id\">{{\n            batch.batchCode\n          }}</nb-option>\n        </nb-select>\n      </div>\n    </div>\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\" style=\"width: 100%;\">\n      <div class=\"col-md-12\">\n        <div class=\"table-responsive\" *ngIf=\"tests.length > 0; else noTests\">\n          <table class=\"table table-borderless\">\n            <thead>\n              <tr>\n                <th>Test Title</th>\n                <th>Test Date</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let test of tests; let i = index\">\n                <td>{{ test.testName }}</td>\n                <td>{{ test.date }}</td>\n                <td>\n                  <button class=\"mr-3 mb-1\" nbButton status=\"warning\" (click)=\"edit(test._id)\">\n                    Edit\n                  </button>\n                  <button\n                    class=\"mr-3 mb-1\"\n                    nbButton\n                    status=\"warning\"\n                    (click)=\"score(test._id, test.batchId)\"\n                  >\n                    Score\n                  </button>\n                  <button\n                    class=\"mr-3 mb-1\"\n                    nbButton\n                    status=\"danger\"\n                    (click)=\"deleteTest(test._id, i)\"\n                  >\n                    Delete\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <ng-template #noTests>\n          <p class=\"text-center pt-5\">No Tests Available</p>\n        </ng-template>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/tests.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/tests.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteTestsTestsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/create-test/create-test.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/institute/tests/create-test/create-test.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteTestsCreateTestCreateTestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS90ZXN0cy9jcmVhdGUtdGVzdC9jcmVhdGUtdGVzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/create-test/create-test.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/institute/tests/create-test/create-test.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CreateTestComponent */

  /***/
  function srcAppPagesInstituteTestsCreateTestCreateTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTestComponent", function () {
      return CreateTestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var CreateTestComponent = /*#__PURE__*/function () {
      function CreateTestComponent(fb, api, router, location, route, toasterService) {
        _classCallCheck(this, CreateTestComponent);

        this.fb = fb;
        this.api = api;
        this.router = router;
        this.location = location;
        this.route = route;
        this.toasterService = toasterService;
        this.batches = [];
      }

      _createClass(CreateTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.display = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.route.queryParams.subscribe(function (param) {
            _this.testId = param.test;
            _this.edit = param.edit;
          });
          this.getCourses(this.instituteId);
          this.createTestForm = this.fb.group({
            batchId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            courseId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            instituteId: [this.instituteId],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            testName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "getTest",
        value: function getTest(id) {
          var _this2 = this;

          this.api.getSingleTest({
            _id: id
          }).subscribe(function (data) {
            _this2.test = data;

            _this2.createTestForm.patchValue({
              instituteId: _this2.test.instituteId,
              courseId: _this2.test.courseId,
              date: _this2.test.date,
              testName: _this2.test.testName,
              totalMarks: _this2.test.totalMarks
            });

            _this2.onSelectCourse(_this2.test.courseId);

            _this2.createTestForm.patchValue({
              batchId: _this2.test.batchId
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

            if (_this3.edit) {
              _this3.getTest(_this3.testId);
            } else {
              _this3.display = true;
            }
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
        key: "createTest",
        value: function createTest() {
          var _this4 = this;

          this.createTestForm.markAllAsTouched();

          if (this.createTestForm.valid) {
            if (!this.edit) {
              this.api.addTest(this.createTestForm.value).subscribe(function (res) {
                _this4.showToast('top right', 'success', 'Test Added Successfully');

                _this4.location.back();
              }, function (err) {
                _this4.showToast('top right', 'danger', err.err.message);
              });
            } else {
              var test = this.createTestForm.value;
              test._id = this.test._id;
              this.api.updateTest(test).subscribe(function (res) {
                _this4.showToast('top right', 'success', 'Test Updated Successfully');

                _this4.location.back();
              }, function (err) {
                _this4.showToast('top right', 'danger', err.err.message);
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

      return CreateTestComponent;
    }();

    CreateTestComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]
      }];
    };

    CreateTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ngx-create-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-test/create-test.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-test.component.scss */
      "./src/app/pages/institute/tests/create-test/create-test.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])], CreateTestComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteTestsCreateTestsScoreCreateTestsScoreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS90ZXN0cy9jcmVhdGUtdGVzdHMtc2NvcmUvY3JlYXRlLXRlc3RzLXNjb3JlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CreateTestsScoreComponent */

  /***/
  function srcAppPagesInstituteTestsCreateTestsScoreCreateTestsScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTestsScoreComponent", function () {
      return CreateTestsScoreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CreateTestsScoreComponent = /*#__PURE__*/function () {
      function CreateTestsScoreComponent(fb, api, route, location, toasterService) {
        _classCallCheck(this, CreateTestsScoreComponent);

        this.fb = fb;
        this.api = api;
        this.route = route;
        this.location = location;
        this.toasterService = toasterService;
      }

      _createClass(CreateTestsScoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.display = false;
          this.invalidFile = false;
          this.fileUpload = false;
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.route.queryParams.subscribe(function (param) {
            _this5.testId = param.test;
          });
          this.getCourses(this.instituteId);
          this.students = [];
          this.studentScore = [];
        }
      }, {
        key: "changeFieUpload",
        value: function changeFieUpload(event) {
          this.fileUpload = event;
        }
      }, {
        key: "onFilePicked",
        value: function onFilePicked(event) {
          var file = event.target.files[0];
          var imgExt = ['xsl', 'xlsx', 'csv'];
          var ext = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();

          if (!(imgExt.indexOf(ext) !== -1)) {
            this.invalidFile = true;
            return;
          }

          this.invalidFile = false;
          this.file = file;
        }
      }, {
        key: "getCourses",
        value: function getCourses(id) {
          var _this6 = this;

          this.api.getCourseTD(id).subscribe(function (data) {
            _this6.institute = data;

            if (_this6.testId) {
              _this6.getTest(_this6.testId);
            } else {
              _this6.location.back();
            }
          });
        }
      }, {
        key: "getTest",
        value: function getTest(id) {
          var _this7 = this;

          this.api.getSingleTest({
            _id: id
          }).subscribe(function (res) {
            _this7.test = res;
            _this7.course = _this7.institute.course.find(function (c) {
              return c._id === _this7.test.courseId;
            }).courseCode;
            _this7.batch = _this7.institute.batch.find(function (b) {
              return b._id === _this7.test.batchId;
            }).batchCode;

            if (_this7.test.students.length > 0) {
              _this7.studentScore = _this7.test.students;
            } else {
              _this7.getStudents(res.instituteId, res.batchId, res.courseId);
            }

            _this7.display = true;
          }, function (err) {});
        }
      }, {
        key: "getStudents",
        value: function getStudents(instituteID, batchId, courseId) {
          var _this8 = this;

          this.api.getStudentsByBatch(instituteID, courseId, batchId).subscribe(function (res) {
            _this8.students = res;

            _this8.students.sort(function (student1, student2) {
              if (+student1.instituteDetails.rollNumber >= +student2.instituteDetails.rollNumber) {
                return 1;
              } else {
                return -1;
              }
            });

            _this8.students.forEach(function (student) {
              var scoreData = {
                studentId: student._id,
                rollNo: student.instituteDetails.rollNumber,
                marks: ''
              };

              _this8.studentScore.push(scoreData);
            });
          });
        }
      }, {
        key: "addMarks",
        value: function addMarks(event, i) {
          var mark = event.target.value;
          this.studentScore[i].marks = mark;
        }
      }, {
        key: "addScore",
        value: function addScore() {
          var _this9 = this;

          if (!this.fileUpload) {
            this.api.addTestScore({
              _id: this.test._id,
              scores: this.studentScore
            }).subscribe(function (res) {
              _this9.showToast('top right', 'success', 'Score Updated Successfully');

              _this9.location.back();
            }, function (err) {
              _this9.showToast('top right', 'danger', err.err.message);
            });
          } else {
            if (this.file) {
              var scoreFile = new FormData();
              scoreFile.append('_id', this.test._id);
              scoreFile.append('uploadfile', this.file, this.test.testName);
              this.api.addScoreUsingExcel(scoreFile).subscribe(function (res) {
                _this9.showToast('top right', 'success', 'Score File Updated Successfully');

                _this9.location.back();
              }, function (err) {
                _this9.showToast('top right', 'danger', err.err.message);
              });
            } else {
              this.invalidFile = true;
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

      return CreateTestsScoreComponent;
    }();

    CreateTestsScoreComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]
      }];
    };

    CreateTestsScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'ngx-create-tests-score',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-tests-score.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-tests-score.component.scss */
      "./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])], CreateTestsScoreComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteTestsManageTestsScoreManageTestsScoreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS90ZXN0cy9tYW5hZ2UtdGVzdHMtc2NvcmUvbWFuYWdlLXRlc3RzLXNjb3JlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ManageTestsScoreComponent */

  /***/
  function srcAppPagesInstituteTestsManageTestsScoreManageTestsScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageTestsScoreComponent", function () {
      return ManageTestsScoreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ManageTestsScoreComponent = /*#__PURE__*/function () {
      function ManageTestsScoreComponent(api, router, route, toasterService) {
        _classCallCheck(this, ManageTestsScoreComponent);

        this.api = api;
        this.router = router;
        this.route = route;
        this.toasterService = toasterService;
        this.batches = [];
      }

      _createClass(ManageTestsScoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.tests = [];
          this.instituteId = this.route.snapshot.paramMap.get('id');
          this.getCourses(this.instituteId);
        }
      }, {
        key: "getCourses",
        value: function getCourses(id) {
          var _this10 = this;

          this.api.getCourseTD(id).subscribe(function (data) {
            _this10.institute = data;
            _this10.display = true;
          });
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
          this.getTests(this.instituteId, batchId);
        }
      }, {
        key: "createTestScore",
        value: function createTestScore(id) {
          this.router.navigate(["/pages/institute/test/add-test-score/".concat(this.instituteId)], {
            queryParams: {
              test: id
            }
          });
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.router.navigate(["/pages/institute/test/add-test-score/".concat(this.instituteId, "/edit")], {
            queryParams: {
              test: id,
              edit: 'true'
            }
          });
        }
      }, {
        key: "getTests",
        value: function getTests(instituteId, batchId) {
          var _this11 = this;

          this.api.getTestByBatch({
            instituteId: instituteId,
            batchId: batchId
          }).subscribe(function (res) {
            _this11.tests = res;
          }, function (err) {
            _this11.showToast('top right', 'danger', err.err.message);
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
      }]);

      return ManageTestsScoreComponent;
    }();

    ManageTestsScoreComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]
      }];
    };

    ManageTestsScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'ngx-manage-tests-score',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-tests-score.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-tests-score.component.scss */
      "./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])], ManageTestsScoreComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/manage-tests/manage-tests.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/institute/tests/manage-tests/manage-tests.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteTestsManageTestsManageTestsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS90ZXN0cy9tYW5hZ2UtdGVzdHMvbWFuYWdlLXRlc3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/manage-tests/manage-tests.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/institute/tests/manage-tests/manage-tests.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ManageTestsComponent */

  /***/
  function srcAppPagesInstituteTestsManageTestsManageTestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageTestsComponent", function () {
      return ManageTestsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ManageTestsComponent = /*#__PURE__*/function () {
      function ManageTestsComponent(api, router, route, toasterService) {
        _classCallCheck(this, ManageTestsComponent);

        this.api = api;
        this.router = router;
        this.route = route;
        this.toasterService = toasterService;
        this.batches = [];
      }

      _createClass(ManageTestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.display = false;
          this.tests = [];
          this.instituteId = this.route.snapshot.paramMap.get('id');
          console.log(this.route.snapshot.paramMap, this.instituteId);
          this.getCourses(this.instituteId);
        }
      }, {
        key: "getCourses",
        value: function getCourses(id) {
          var _this12 = this;

          this.api.getCourseTD(id).subscribe(function (data) {
            _this12.institute = data;
            console.log(data);
            _this12.display = true;
          });
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
          this.getTests(this.instituteId, batchId);
        }
      }, {
        key: "createTest",
        value: function createTest() {
          this.router.navigate(["/pages/institute/test/create-test/".concat(this.instituteId)], {
            queryParams: {}
          });
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.router.navigate(["/pages/institute/test/create-test/".concat(this.instituteId, "/edit")], {
            queryParams: {
              test: id,
              edit: 'true'
            }
          });
        }
      }, {
        key: "score",
        value: function score(id, batchId) {
          this.router.navigate(["/pages/institute/test/add-test-score/".concat(this.instituteId)], {
            queryParams: {
              test: id,
              batch: batchId
            }
          });
        }
      }, {
        key: "deleteTest",
        value: function deleteTest(id, i) {
          var _this13 = this;

          this.api.deleteTest({
            _id: id
          }).subscribe(function (res) {
            _this13.tests.splice(i, 1);

            _this13.showToast('top right', 'success', 'Test Deleted Successfully');
          }, function (err) {
            _this13.showToast('top right', 'danger', err.err.message);
          });
        }
      }, {
        key: "getTests",
        value: function getTests(instituteId, batchId) {
          var _this14 = this;

          this.api.getTestByBatch({
            instituteId: instituteId,
            batchId: batchId
          }).subscribe(function (res) {
            _this14.tests = res;
            console.log(res);
          }, function (err) {
            console.log(err);
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
      }]);

      return ManageTestsComponent;
    }();

    ManageTestsComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]
      }];
    };

    ManageTestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'ngx-manage-tests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-tests.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests/manage-tests.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-tests.component.scss */
      "./src/app/pages/institute/tests/manage-tests/manage-tests.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])], ManageTestsComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/tests-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/institute/tests/tests-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: TestsRoutingModule */

  /***/
  function srcAppPagesInstituteTestsTestsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestsRoutingModule", function () {
      return TestsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tests_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tests.component */
    "./src/app/pages/institute/tests/tests.component.ts");
    /* harmony import */


    var _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./manage-tests/manage-tests.component */
    "./src/app/pages/institute/tests/manage-tests/manage-tests.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-test/create-test.component */
    "./src/app/pages/institute/tests/create-test/create-test.component.ts");
    /* harmony import */


    var _manage_tests_score_manage_tests_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./manage-tests-score/manage-tests-score.component */
    "./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.ts");
    /* harmony import */


    var _create_tests_score_create_tests_score_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./create-tests-score/create-tests-score.component */
    "./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.ts");

    var routes = [{
      path: '',
      component: _tests_component__WEBPACK_IMPORTED_MODULE_1__["TestsComponent"],
      children: [{
        path: 'create-test/:id',
        component: _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_5__["CreateTestComponent"]
      }, {
        path: 'create-test/:id/edit',
        component: _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_5__["CreateTestComponent"]
      }, {
        path: 'manage-test/:id',
        component: _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_2__["ManageTestsComponent"]
      }, {
        path: 'add-test-score/:id',
        component: _create_tests_score_create_tests_score_component__WEBPACK_IMPORTED_MODULE_7__["CreateTestsScoreComponent"]
      }, {
        path: 'add-test-score/:id/edit',
        component: _create_tests_score_create_tests_score_component__WEBPACK_IMPORTED_MODULE_7__["CreateTestsScoreComponent"]
      }, {
        path: 'manage-test-score/:id',
        component: _manage_tests_score_manage_tests_score_component__WEBPACK_IMPORTED_MODULE_6__["ManageTestsScoreComponent"]
      }]
    }];

    var TestsRoutingModule = function TestsRoutingModule() {
      _classCallCheck(this, TestsRoutingModule);
    };

    TestsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], TestsRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/tests.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/institute/tests/tests.component.ts ***!
    \**********************************************************/

  /*! exports provided: TestsComponent */

  /***/
  function srcAppPagesInstituteTestsTestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestsComponent", function () {
      return TestsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TestsComponent = /*#__PURE__*/function () {
      function TestsComponent() {
        _classCallCheck(this, TestsComponent);
      }

      _createClass(TestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestsComponent;
    }();

    TestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-tests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tests.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/tests.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TestsComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/tests/tests.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/institute/tests/tests.module.ts ***!
    \*******************************************************/

  /*! exports provided: TestsModule */

  /***/
  function srcAppPagesInstituteTestsTestsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestsModule", function () {
      return TestsModule;
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


    var _tests_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tests-routing.module */
    "./src/app/pages/institute/tests/tests-routing.module.ts");
    /* harmony import */


    var _tests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tests.component */
    "./src/app/pages/institute/tests/tests.component.ts");
    /* harmony import */


    var _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-test/create-test.component */
    "./src/app/pages/institute/tests/create-test/create-test.component.ts");
    /* harmony import */


    var _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./manage-tests/manage-tests.component */
    "./src/app/pages/institute/tests/manage-tests/manage-tests.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _manage_tests_score_manage_tests_score_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./manage-tests-score/manage-tests-score.component */
    "./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.ts");
    /* harmony import */


    var _create_tests_score_create_tests_score_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./create-tests-score/create-tests-score.component */
    "./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.ts");

    var TestsModule = function TestsModule() {
      _classCallCheck(this, TestsModule);
    };

    TestsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_tests_component__WEBPACK_IMPORTED_MODULE_4__["TestsComponent"], _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_5__["CreateTestComponent"], _create_tests_score_create_tests_score_component__WEBPACK_IMPORTED_MODULE_11__["CreateTestsScoreComponent"], _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_6__["ManageTestsComponent"], _manage_tests_score_manage_tests_score_component__WEBPACK_IMPORTED_MODULE_10__["ManageTestsScoreComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tests_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAccordionModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_8__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbListModule"]]
    })], TestsModule);
    /***/
  }
}]);
//# sourceMappingURL=tests-tests-module-es5.js.map