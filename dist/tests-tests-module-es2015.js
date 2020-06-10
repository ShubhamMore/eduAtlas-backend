(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tests-tests-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-test/create-test.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-test/create-test.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p style=\"color: black; font-weight: bold;\">Create Tesr</p>\r\n\r\n<nb-card *ngIf=\"display\">\r\n  <nb-card-body>\r\n    <form [formGroup]=\"createTestForm\" (submit)=\"createTest()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"courseId\">*Course</label>\r\n          <nb-select\r\n            placeholder=\"Select Course\"\r\n            id=\"courseId\"\r\n            [status]=\"\r\n              createTestForm.get('courseId').invalid && createTestForm.get('courseId').touched\r\n                ? 'danger'\r\n                : 'basic'\r\n            \"\r\n            fullWidth\r\n            formControlName=\"courseId\"\r\n            (selectedChange)=\"onSelectCourse($event)\"\r\n          >\r\n            <nb-option value=\"\">Select Course</nb-option>\r\n            <nb-option *ngFor=\"let i of institute.course\" [value]=\"i._id\">{{ i.name }}</nb-option>\r\n          </nb-select>\r\n          <small\r\n            *ngIf=\"createTestForm.get('courseId').invalid && createTestForm.get('courseId').touched\"\r\n            >*Course is required</small\r\n          >\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"batchId\">*Batch</label>\r\n          <nb-select\r\n            placeholder=\"Select Batch\"\r\n            id=\"batchId\"\r\n            formControlName=\"batchId\"\r\n            fullWidth\r\n            [status]=\"\r\n              createTestForm.get('batchId').invalid && createTestForm.get('batchId').touched\r\n                ? 'danger'\r\n                : 'basic'\r\n            \"\r\n          >\r\n            <nb-option value=\"\">Select Batch</nb-option>\r\n            <nb-option *ngFor=\"let item of batches\" [value]=\"item._id\">{{\r\n              item.batchCode\r\n            }}</nb-option>\r\n          </nb-select>\r\n          <small\r\n            *ngIf=\"createTestForm.get('batchId').invalid && createTestForm.get('batchId').touched\"\r\n            >*Batch is required</small\r\n          >\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"date\">*Date</label>\r\n            <input\r\n              type=\"date\"\r\n              nbInput\r\n              [status]=\"\r\n                createTestForm.get('date').invalid && createTestForm.get('date').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"date\"\r\n              fullWidth\r\n              formControlName=\"date\"\r\n              placeholder=\"date\"\r\n            />\r\n            <small *ngIf=\"createTestForm.get('date').invalid && createTestForm.get('date').touched\"\r\n              >*Date is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"testName\">*Test Name</label>\r\n            <input\r\n              type=\"text\"\r\n              nbInput\r\n              [status]=\"\r\n                createTestForm.get('testName').invalid && createTestForm.get('testName').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"testName\"\r\n              fullWidth\r\n              formControlName=\"testName\"\r\n              placeholder=\"testName\"\r\n            />\r\n            <small\r\n              *ngIf=\"\r\n                createTestForm.get('testName').invalid && createTestForm.get('testName').touched\r\n              \"\r\n              >*Test Name is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"totalMarks\">*Total Marks</label>\r\n            <input\r\n              type=\"text\"\r\n              nbInput\r\n              pattern=\"\\d*\"\r\n              maxlength=\"3\"\r\n              [status]=\"\r\n                createTestForm.get('totalMarks').invalid && createTestForm.get('totalMarks').touched\r\n                  ? 'danger'\r\n                  : 'basic'\r\n              \"\r\n              id=\"totalMarks\"\r\n              fullWidth\r\n              formControlName=\"totalMarks\"\r\n              placeholder=\"Total Marks\"\r\n            />\r\n            <small\r\n              *ngIf=\"\r\n                createTestForm.get('totalMarks').invalid && createTestForm.get('totalMarks').touched\r\n              \"\r\n              >*Marks is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <button type=\"submit\" class=\"btn btn-primary float-right\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p style=\"color: black; font-weight: bold;\"></p>\n\n<nb-card *ngIf=\"display\">\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <label for=\"courseId\"><strong>Course: </strong>{{ course }}</label>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <label for=\"batchId\"><strong>Batch: </strong>{{ batch }}</label>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"date\"><strong>Date: </strong>{{ test.date }}</label>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"testName\"><strong>Test Name: </strong>{{ test.testName }}</label>\n        </div>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <div class=\"form-group\">\n          <label for=\"totalMarks\"><strong>Total Marks: </strong>{{ test.totalMarks }}</label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <nb-checkbox\n          (checkedChange)=\"changeFieUpload($event)\"\n          [(ngModel)]=\"fileUpload\"\n          fullWidth\n          status=\"basic\"\n          >Upload Test File</nb-checkbox\n        >\n      </div>\n    </div>\n\n    <div *ngIf=\"!fileUpload\">\n      <div *ngIf=\"studentScore.length > 0; else noStudents\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <table class=\"table table-borderless text-center\">\n              <thead>\n                <tr>\n                  <th class=\"\">Roll No</th>\n                  <th class=\"\">Score</th>\n                </tr>\n              </thead>\n              <tbody>\n                <ng-container *ngFor=\"let student of studentScore; let i = index\">\n                  <tr>\n                    <td>{{ student.rollNo }}</td>\n\n                    <td>\n                      <input\n                        type=\"number\"\n                        nbInput\n                        pattern=\"\\d*\"\n                        maxlength=\"3\"\n                        [id]=\"student.studentId\"\n                        [value]=\"student.marks\"\n                        (input)=\"addMarks($event, i)\"\n                      />\n                    </td>\n                  </tr>\n                </ng-container>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <ng-template #noStudents>\n        <p class=\"pt-5 text-center\">No Students Found</p>\n      </ng-template>\n    </div>\n    <div *ngIf=\"fileUpload\">\n      <input\n        type=\"file\"\n        nbInput\n        status=\"basic\"\n        fullWidth\n        id=\"score\"\n        (change)=\"onFilePicked($event)\"\n      />\n      <span style=\"color: #f00;\" *ngIf=\"invalidFile\"\n        >*File format must be *.xsl, *.xlsx, *.csv</span\n      >\n      <p *ngIf=\"file && !invalidFile\">{{ file.name }}</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <button type=\"submit\" class=\"btn btn-primary float-right\" (click)=\"addScore()\">\n          Save\n        </button>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2\">\n  <div class=\"col-12\">\n    <p style=\"color: black; font-weight: bold;\">Test Score</p>\n  </div>\n</div>\n\n<nb-card status=\"info\" *ngIf=\"display\">\n  <nb-card-header>\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h3 class=\"text-white\">Test</h3>\n      </div>\n      <div class=\"col-sm-3\">\n        <nb-select\n          placeholder=\"Select Course\"\n          status=\"basic\"\n          fullWidth\n          (selectedChange)=\"onSelectCourse($event)\"\n        >\n          <nb-option value=\"\">Select Course</nb-option>\n          <nb-option *ngFor=\"let course of institute.course\" [value]=\"course._id\">{{\n            course.name\n          }}</nb-option>\n        </nb-select>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <nb-select\n          placeholder=\"Select Batch\"\n          fullWidth\n          status=\"basic\"\n          (selectedChange)=\"onSelectBatch($event)\"\n        >\n          <nb-option value=\"\">Select Batch</nb-option>\n          <nb-option *ngFor=\"let batch of batches\" [value]=\"batch._id\">{{\n            batch.batchCode\n          }}</nb-option>\n        </nb-select>\n      </div>\n    </div>\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\" style=\"width: 100%;\">\n      <div class=\"col-md-12\">\n        <div class=\"table-responsive\" *ngIf=\"tests.length > 0; else noTests\">\n          <table class=\"table table-borderless\">\n            <thead>\n              <tr>\n                <th>Test Title</th>\n                <th>Test Date</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let test of tests; let i = index\">\n                <td>{{ test.testName }}</td>\n                <td>{{ test.date }}</td>\n                <td>\n                  <button class=\"mr-3 mb-1\" nbButton status=\"warning\" (click)=\"edit(test._id)\">\n                    Edit\n                  </button>\n                </td>\n                <td>\n                  <button\n                    class=\"mr-3 mb-1\"\n                    nbButton\n                    status=\"warning\"\n                    (click)=\"createTestScore(test._id)\"\n                  >\n                    Upload Score\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <ng-template #noTests>\n          <p class=\"text-center pt-5\">No Tests Available</p>\n        </ng-template>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests/manage-tests.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests/manage-tests.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2\">\n  <div class=\"col-12\">\n    <button class=\"btn btn-warning text-white float-right\" (click)=\"createTest()\">\n      Create Test\n    </button>\n    <p style=\"color: black; font-weight: bold;\">Define Tests</p>\n  </div>\n</div>\n\n<nb-card status=\"info\" *ngIf=\"display\">\n  <nb-card-header>\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h3 class=\"text-white\">Test</h3>\n      </div>\n      <div class=\"col-sm-3\">\n        <nb-select\n          placeholder=\"Select Course\"\n          status=\"basic\"\n          fullWidth\n          (selectedChange)=\"onSelectCourse($event)\"\n        >\n          <nb-option value=\"\">Select Course</nb-option>\n          <nb-option *ngFor=\"let course of institute.course\" [value]=\"course._id\">{{\n            course.name\n          }}</nb-option>\n        </nb-select>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <nb-select\n          placeholder=\"Select Batch\"\n          fullWidth\n          status=\"basic\"\n          (selectedChange)=\"onSelectBatch($event)\"\n        >\n          <nb-option value=\"\">Select Batch</nb-option>\n          <nb-option *ngFor=\"let batch of batches\" [value]=\"batch._id\">{{\n            batch.batchCode\n          }}</nb-option>\n        </nb-select>\n      </div>\n    </div>\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\" style=\"width: 100%;\">\n      <div class=\"col-md-12\">\n        <div class=\"table-responsive\" *ngIf=\"tests.length > 0; else noTests\">\n          <table class=\"table table-borderless\">\n            <thead>\n              <tr>\n                <th>Test Title</th>\n                <th>Test Date</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let test of tests; let i = index\">\n                <td>{{ test.testName }}</td>\n                <td>{{ test.date }}</td>\n                <td>\n                  <button class=\"mr-3 mb-1\" nbButton status=\"warning\" (click)=\"edit(test._id)\">\n                    Edit\n                  </button>\n                  <button\n                    class=\"mr-3 mb-1\"\n                    nbButton\n                    status=\"warning\"\n                    (click)=\"score(test._id, test.batchId)\"\n                  >\n                    Score\n                  </button>\n                  <button\n                    class=\"mr-3 mb-1\"\n                    nbButton\n                    status=\"danger\"\n                    (click)=\"deleteTest(test._id, i)\"\n                  >\n                    Delete\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <ng-template #noTests>\n          <p class=\"text-center pt-5\">No Tests Available</p>\n        </ng-template>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/tests.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/tests.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/pages/institute/tests/create-test/create-test.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/institute/tests/create-test/create-test.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS90ZXN0cy9jcmVhdGUtdGVzdC9jcmVhdGUtdGVzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/institute/tests/create-test/create-test.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/institute/tests/create-test/create-test.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTestComponent", function() { return CreateTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let CreateTestComponent = class CreateTestComponent {
    constructor(fb, api, router, location, route, toasterService) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.location = location;
        this.route = route;
        this.toasterService = toasterService;
        this.batches = [];
    }
    ngOnInit() {
        this.display = false;
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe((param) => {
            this.testId = param.test;
            this.edit = param.edit;
        });
        this.getCourses(this.instituteId);
        this.createTestForm = this.fb.group({
            batchId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            courseId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            instituteId: [this.instituteId],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            testName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    getTest(id) {
        this.api.getSingleTest({ _id: id }).subscribe((data) => {
            this.test = data;
            this.createTestForm.patchValue({
                instituteId: this.test.instituteId,
                courseId: this.test.courseId,
                date: this.test.date,
                testName: this.test.testName,
                totalMarks: this.test.totalMarks,
            });
            this.onSelectCourse(this.test.courseId);
            this.createTestForm.patchValue({
                batchId: this.test.batchId,
            });
            this.display = true;
        }, (err) => { });
    }
    getCourses(id) {
        this.api.getCourseTD(id).subscribe((data) => {
            this.institute = data;
            if (this.edit) {
                this.getTest(this.testId);
            }
            else {
                this.display = true;
            }
        });
    }
    onSelectCourse(id) {
        this.batches = this.institute.batch.filter((b) => b.course === id);
    }
    createTest() {
        this.createTestForm.markAllAsTouched();
        if (this.createTestForm.valid) {
            if (!this.edit) {
                this.api.addTest(this.createTestForm.value).subscribe((res) => {
                    this.showToast('top right', 'success', 'Test Added Successfully');
                    this.location.back();
                }, (err) => {
                    this.showToast('top right', 'danger', err.err.message);
                });
            }
            else {
                const test = this.createTestForm.value;
                test._id = this.test._id;
                this.api.updateTest(test).subscribe((res) => {
                    this.showToast('top right', 'success', 'Test Updated Successfully');
                    this.location.back();
                }, (err) => {
                    this.showToast('top right', 'danger', err.err.message);
                });
            }
        }
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, { position, status });
    }
};
CreateTestComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }
];
CreateTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ngx-create-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-test/create-test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-test.component.scss */ "./src/app/pages/institute/tests/create-test/create-test.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])
], CreateTestComponent);



/***/ }),

/***/ "./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS90ZXN0cy9jcmVhdGUtdGVzdHMtc2NvcmUvY3JlYXRlLXRlc3RzLXNjb3JlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CreateTestsScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTestsScoreComponent", function() { return CreateTestsScoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let CreateTestsScoreComponent = class CreateTestsScoreComponent {
    constructor(fb, api, route, location, toasterService) {
        this.fb = fb;
        this.api = api;
        this.route = route;
        this.location = location;
        this.toasterService = toasterService;
    }
    ngOnInit() {
        this.display = false;
        this.invalidFile = false;
        this.fileUpload = false;
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe((param) => {
            this.testId = param.test;
        });
        this.getCourses(this.instituteId);
        this.students = [];
        this.studentScore = [];
    }
    changeFieUpload(event) {
        this.fileUpload = event;
    }
    onFilePicked(event) {
        const file = event.target.files[0];
        const imgExt = ['xsl', 'xlsx', 'csv'];
        const ext = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
        if (!(imgExt.indexOf(ext) !== -1)) {
            this.invalidFile = true;
            return;
        }
        this.invalidFile = false;
        this.file = file;
    }
    getCourses(id) {
        this.api.getCourseTD(id).subscribe((data) => {
            this.institute = data;
            if (this.testId) {
                this.getTest(this.testId);
            }
            else {
                this.location.back();
            }
        });
    }
    getTest(id) {
        this.api.getSingleTest({ _id: id }).subscribe((res) => {
            this.test = res;
            this.course = this.institute.course.find((c) => c._id === this.test.courseId).courseCode;
            this.batch = this.institute.batch.find((b) => b._id === this.test.batchId).batchCode;
            if (this.test.students.length > 0) {
                this.studentScore = this.test.students;
            }
            else {
                this.getStudents(res.instituteId, res.batchId, res.courseId);
            }
            this.display = true;
        }, (err) => { });
    }
    getStudents(instituteID, batchId, courseId) {
        this.api.getStudentsByBatch(instituteID, courseId, batchId).subscribe((res) => {
            this.students = res;
            this.students.sort((student1, student2) => {
                if (+student1.instituteDetails.rollNumber >= +student2.instituteDetails.rollNumber) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
            this.students.forEach((student) => {
                const scoreData = {
                    studentId: student._id,
                    rollNo: student.instituteDetails.rollNumber,
                    marks: '',
                };
                this.studentScore.push(scoreData);
            });
        });
    }
    addMarks(event, i) {
        const mark = event.target.value;
        this.studentScore[i].marks = mark;
    }
    addScore() {
        if (!this.fileUpload) {
            this.api.addTestScore({ _id: this.test._id, scores: this.studentScore }).subscribe((res) => {
                this.showToast('top right', 'success', 'Score Updated Successfully');
                this.location.back();
            }, (err) => {
                this.showToast('top right', 'danger', err.err.message);
            });
        }
        else {
            if (this.file) {
                const scoreFile = new FormData();
                scoreFile.append('_id', this.test._id);
                scoreFile.append('uploadfile', this.file, this.test.testName);
                this.api.addScoreUsingExcel(scoreFile).subscribe((res) => {
                    this.showToast('top right', 'success', 'Score File Updated Successfully');
                    this.location.back();
                }, (err) => {
                    this.showToast('top right', 'danger', err.err.message);
                });
            }
            else {
                this.invalidFile = true;
            }
        }
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, { position, status });
    }
};
CreateTestsScoreComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }
];
CreateTestsScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'ngx-create-tests-score',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-tests-score.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-tests-score.component.scss */ "./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])
], CreateTestsScoreComponent);



/***/ }),

/***/ "./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS90ZXN0cy9tYW5hZ2UtdGVzdHMtc2NvcmUvbWFuYWdlLXRlc3RzLXNjb3JlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ManageTestsScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTestsScoreComponent", function() { return ManageTestsScoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ManageTestsScoreComponent = class ManageTestsScoreComponent {
    constructor(api, router, route, toasterService) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.toasterService = toasterService;
        this.batches = [];
    }
    ngOnInit() {
        this.display = false;
        this.tests = [];
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.getCourses(this.instituteId);
    }
    getCourses(id) {
        this.api.getCourseTD(id).subscribe((data) => {
            this.institute = data;
            this.display = true;
        });
    }
    onSelectCourse(id) {
        this.courseId = id;
        this.batches = this.institute.batch.filter((b) => b.course === id);
    }
    onSelectBatch(batchId) {
        this.batch = batchId;
        this.getTests(this.instituteId, batchId);
    }
    createTestScore(id) {
        this.router.navigate([`/pages/institute/test/add-test-score/${this.instituteId}`], {
            queryParams: { test: id },
        });
    }
    edit(id) {
        this.router.navigate([`/pages/institute/test/add-test-score/${this.instituteId}/edit`], {
            queryParams: { test: id, edit: 'true' },
        });
    }
    getTests(instituteId, batchId) {
        this.api.getTestByBatch({ instituteId: instituteId, batchId: batchId }).subscribe((res) => {
            this.tests = res;
        }, (err) => {
            this.showToast('top right', 'danger', err.err.message);
        });
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, { position, status });
    }
};
ManageTestsScoreComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }
];
ManageTestsScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ngx-manage-tests-score',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-tests-score.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-tests-score.component.scss */ "./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])
], ManageTestsScoreComponent);



/***/ }),

/***/ "./src/app/pages/institute/tests/manage-tests/manage-tests.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/institute/tests/manage-tests/manage-tests.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS90ZXN0cy9tYW5hZ2UtdGVzdHMvbWFuYWdlLXRlc3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/institute/tests/manage-tests/manage-tests.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/institute/tests/manage-tests/manage-tests.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTestsComponent", function() { return ManageTestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ManageTestsComponent = class ManageTestsComponent {
    constructor(api, router, route, toasterService) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.toasterService = toasterService;
        this.batches = [];
    }
    ngOnInit() {
        this.display = false;
        this.tests = [];
        this.instituteId = this.route.snapshot.paramMap.get('id');
        console.log(this.route.snapshot.paramMap, this.instituteId);
        this.getCourses(this.instituteId);
    }
    getCourses(id) {
        this.api.getCourseTD(id).subscribe((data) => {
            this.institute = data;
            console.log(data);
            this.display = true;
        });
    }
    onSelectCourse(id) {
        this.courseId = id;
        this.batches = this.institute.batch.filter((b) => b.course === id);
    }
    onSelectBatch(batchId) {
        this.batch = batchId;
        this.getTests(this.instituteId, batchId);
    }
    createTest() {
        this.router.navigate([`/pages/institute/test/create-test/${this.instituteId}`], {
            queryParams: {},
        });
    }
    edit(id) {
        this.router.navigate([`/pages/institute/test/create-test/${this.instituteId}/edit`], {
            queryParams: { test: id, edit: 'true' },
        });
    }
    score(id, batchId) {
        this.router.navigate([`/pages/institute/test/add-test-score/${this.instituteId}`], {
            queryParams: { test: id, batch: batchId },
        });
    }
    deleteTest(id, i) {
        this.api.deleteTest({ _id: id }).subscribe((res) => {
            this.tests.splice(i, 1);
            this.showToast('top right', 'success', 'Test Deleted Successfully');
        }, (err) => {
            this.showToast('top right', 'danger', err.err.message);
        });
    }
    getTests(instituteId, batchId) {
        this.api.getTestByBatch({ instituteId: instituteId, batchId: batchId }).subscribe((res) => {
            this.tests = res;
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, { position, status });
    }
};
ManageTestsComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }
];
ManageTestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ngx-manage-tests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-tests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/manage-tests/manage-tests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-tests.component.scss */ "./src/app/pages/institute/tests/manage-tests/manage-tests.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])
], ManageTestsComponent);



/***/ }),

/***/ "./src/app/pages/institute/tests/tests-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/institute/tests/tests-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsRoutingModule", function() { return TestsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tests_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tests.component */ "./src/app/pages/institute/tests/tests.component.ts");
/* harmony import */ var _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-tests/manage-tests.component */ "./src/app/pages/institute/tests/manage-tests/manage-tests.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-test/create-test.component */ "./src/app/pages/institute/tests/create-test/create-test.component.ts");
/* harmony import */ var _manage_tests_score_manage_tests_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-tests-score/manage-tests-score.component */ "./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.ts");
/* harmony import */ var _create_tests_score_create_tests_score_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-tests-score/create-tests-score.component */ "./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.ts");








const routes = [
    {
        path: '',
        component: _tests_component__WEBPACK_IMPORTED_MODULE_1__["TestsComponent"],
        children: [
            { path: 'create-test/:id', component: _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_5__["CreateTestComponent"] },
            { path: 'create-test/:id/edit', component: _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_5__["CreateTestComponent"] },
            { path: 'manage-test/:id', component: _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_2__["ManageTestsComponent"] },
            { path: 'add-test-score/:id', component: _create_tests_score_create_tests_score_component__WEBPACK_IMPORTED_MODULE_7__["CreateTestsScoreComponent"] },
            { path: 'add-test-score/:id/edit', component: _create_tests_score_create_tests_score_component__WEBPACK_IMPORTED_MODULE_7__["CreateTestsScoreComponent"] },
            { path: 'manage-test-score/:id', component: _manage_tests_score_manage_tests_score_component__WEBPACK_IMPORTED_MODULE_6__["ManageTestsScoreComponent"] },
        ],
    },
];
let TestsRoutingModule = class TestsRoutingModule {
};
TestsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
    })
], TestsRoutingModule);



/***/ }),

/***/ "./src/app/pages/institute/tests/tests.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/institute/tests/tests.component.ts ***!
  \**********************************************************/
/*! exports provided: TestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsComponent", function() { return TestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestsComponent = class TestsComponent {
    constructor() { }
    ngOnInit() { }
};
TestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-tests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/tests/tests.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TestsComponent);



/***/ }),

/***/ "./src/app/pages/institute/tests/tests.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/institute/tests/tests.module.ts ***!
  \*******************************************************/
/*! exports provided: TestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsModule", function() { return TestsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tests_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tests-routing.module */ "./src/app/pages/institute/tests/tests-routing.module.ts");
/* harmony import */ var _tests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tests.component */ "./src/app/pages/institute/tests/tests.component.ts");
/* harmony import */ var _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-test/create-test.component */ "./src/app/pages/institute/tests/create-test/create-test.component.ts");
/* harmony import */ var _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-tests/manage-tests.component */ "./src/app/pages/institute/tests/manage-tests/manage-tests.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _manage_tests_score_manage_tests_score_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manage-tests-score/manage-tests-score.component */ "./src/app/pages/institute/tests/manage-tests-score/manage-tests-score.component.ts");
/* harmony import */ var _create_tests_score_create_tests_score_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-tests-score/create-tests-score.component */ "./src/app/pages/institute/tests/create-tests-score/create-tests-score.component.ts");












let TestsModule = class TestsModule {
};
TestsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tests_component__WEBPACK_IMPORTED_MODULE_4__["TestsComponent"],
            _create_test_create_test_component__WEBPACK_IMPORTED_MODULE_5__["CreateTestComponent"],
            _create_tests_score_create_tests_score_component__WEBPACK_IMPORTED_MODULE_11__["CreateTestsScoreComponent"],
            _manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_6__["ManageTestsComponent"],
            _manage_tests_score_manage_tests_score_component__WEBPACK_IMPORTED_MODULE_10__["ManageTestsScoreComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tests_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAccordionModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_8__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbListModule"],
        ],
    })
], TestsModule);



/***/ })

}]);
//# sourceMappingURL=tests-tests-module-es2015.js.map