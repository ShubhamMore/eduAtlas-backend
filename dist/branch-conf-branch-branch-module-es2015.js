(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch-conf-branch-branch-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/add-batches.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/add-batches.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button nbButton status=\"warning\" (click)=\"goManage()\" style=\"color: black;\">\r\n    Manage Batches\r\n  </button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Add Batches</p>\r\n<nb-card *ngIf=\"display\">\r\n  <nb-card-body>\r\n    <form [formGroup]=\"batchForm\" (ngSubmit)=\"onSubmit()\">\r\n      <p>Course</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"course\">Select Parent Course</label>\r\n          <nb-select\r\n            placeholder=\"Select Parent Course\"\r\n            id=\"course\"\r\n            fullWidth\r\n            formControlName=\"course\"\r\n            [status]=\"f.course.errors && submitted ? 'danger' : 'basic'\"\r\n          >\r\n            <!-- <nb-option value=\"\">Select Parent Course</nb-option> -->\r\n            <nb-option *ngFor=\"let course of courses\" [value]=\"course._id\"\r\n              >{{ course.name }}\r\n            </nb-option>\r\n          </nb-select>\r\n          <small *ngIf=\"f.course.errors && submitted\">*course is required</small>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"code\">Unique Code</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            id=\"code\"\r\n            placeholder=\"Unique Code\"\r\n            formControlName=\"batchCode\"\r\n            required\r\n            [status]=\"f.batchCode.errors && submitted ? 'danger' : 'basic'\"\r\n          />\r\n\r\n          <small *ngIf=\"f.batchCode.errors && submitted\">*Code is required</small>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"des\">Description</label>\r\n          <textarea\r\n            name=\"description\"\r\n            id=\"des\"\r\n            cols=\"30\"\r\n            rows=\"6\"\r\n            nbInput\r\n            status=\"basic\"\r\n            fullWidth\r\n            formControlName=\"description\"\r\n            placeholder=\"Description\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"text-align: left; margin: 1rem; text-align: right;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\n  <button nbButton status=\"warning\" (click)=\"onClick()\" style=\"color: black;\">Add Batch</button>\n</div>\n<p style=\"color: black; font-weight: bold;\">Manage Batch Here</p>\n<nb-card>\n  <nb-card-body>\n    <table *ngIf=\"batches.length > 0; else noBatches\">\n      <thead>\n        <tr>\n          <th>Course</th>\n          <th>Code</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let batch of batches\">\n          <td>{{ batch.course }}</td>\n          <td>{{ batch.batchCode }}</td>\n          <td>{{ batch.description }}</td>\n          <td class=\"text-right\">\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(batch._id)\">\n              Edit\n            </button>\n            <button nbButton status=\"danger\" (click)=\"delete(batch._id)\">\n              Del\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <ng-template #noBatches>\n      <p class=\"text-center mt-3\">No Batches Found</p>\n    </ng-template>\n  </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/add-course.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/add-course.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button nbButton class=\"pull right\" status=\"warning\" style=\"color: black;\" (click)=\"back()\">\r\n    MANAGE COURSES\r\n  </button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Add Course Here</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"course\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"name\">Course Name</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"name\"\r\n            fullWidth\r\n            [status]=\"f.name.errors && submitted ? 'danger' : 'basic'\"\r\n            formControlName=\"name\"\r\n            placeholder=\"Course Name\"\r\n          />\r\n          <small *ngIf=\"f.name.errors && submitted\">*Course name is req.</small>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"code\">Course Code</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"code\"\r\n            fullWidth\r\n            [status]=\"f.courseCode.errors && submitted ? 'danger' : 'basic'\"\r\n            formControlName=\"courseCode\"\r\n            placeholder=\"Course Code\"\r\n          />\r\n          <small *ngIf=\"f.courseCode.errors && submitted\">*Course code is required</small>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"fees\">Course Fees</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            status=\"basic\"\r\n            #fees\r\n            (keyup)=\"courseFee(fees.value)\"\r\n            id=\"fees\"\r\n            formControlName=\"fees\"\r\n            placeholder=\"Course Fees\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <hr />\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n          <label for=\"gst\">Course Duration (in Months)</label>\r\n          <input\r\n            nbInput\r\n            type=\"text\"\r\n            pattern=\"\\d*\"\r\n            fullWidth\r\n            formControlName=\"duration\"\r\n            maxlength=\"2\"\r\n            minlength=\"1\"\r\n            placeholder=\"Duration in Months\"\r\n          />\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <label for=\"gst\">GST</label>\r\n          <input\r\n            nbInput\r\n            type=\"text\"\r\n            pattern=\"\\d*\"\r\n            fullWidth\r\n            formControlName=\"gstValue\"\r\n            #ex\r\n            (keyup)=\"exclusive(ex.value)\"\r\n            placeholder=\"Exclusive GST in %\"\r\n          />\r\n        </div>\r\n        <div class=\"col-sm-1\"><br /><br />Or</div>\r\n        <div class=\"col-sm-2\">\r\n          <br />\r\n          <nb-checkbox\r\n            (checkedChange)=\"inclusiveGst($event)\"\r\n            [(ngModel)]=\"gstCheckBox\"\r\n            [ngModelOptions]=\"{ standalone: true }\"\r\n            fullWidth\r\n            status=\"warning\"\r\n            >Inclusive GST</nb-checkbox\r\n          >\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <label>Total Fees</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            status=\"basic\"\r\n            formControlName=\"totalFee\"\r\n            disabled=\"true\"\r\n            placeholder=\"TotalFee\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <hr />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"des\">Description</label>\r\n          <textarea\r\n            name=\"discription\"\r\n            id=\"des\"\r\n            status=\"basic\"\r\n            nbInput\r\n            fullWidth\r\n            formControlName=\"discription\"\r\n            placeholder=\"Description\"\r\n            cols=\"100\"\r\n            rows=\"4\"\r\n            id=\"dis\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"display: block; margin-top: 1rem; text-align: right;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">\r\n          {{ edit === 'true' ? 'Update Course' : 'Add Course' }}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\n  <button nbButton class=\"pull right\" status=\"warning\" style=\"color: black;\" (click)=\"onClick()\">\n    ADD COURSES\n  </button>\n</div>\n<p style=\"color: black; font-weight: bold;\">Manage Course Here</p>\n<nb-card>\n  <nb-card-body>\n    <table *ngIf=\"courses.length > 0; else no_courses\">\n      <thead>\n        <tr>\n          <th>Course Name</th>\n          <th>Code</th>\n          <th>Duration</th>\n          <th>Fees</th>\n          <th>GST</th>\n          <th>Total Fees (Rs.)</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of courses; let i = index\">\n          <td>{{ item.name }}</td>\n          <td>{{ item.courseCode }}</td>\n          <td>{{ item.duration }}</td>\n          <td>{{ item.fees }}</td>\n          <td>{{ item.gst }}</td>\n          <td>&#x20B9; {{ item.totalFee }}</td>\n          <td style=\"text-align: right;\">\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(item._id)\">Edit</button>\n            <button nbButton status=\"danger\" (click)=\"delete(item._id)\">Del</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <ng-template #no_courses>\n      <p class=\"mt-5 mb-5 text-center\">\n        No Courses Found\n      </p>\n    </ng-template>\n  </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Id</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.id }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Course Name</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.name }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Code</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.code }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Duration</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.duration }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Fees</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.fees }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>GST</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.gst }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Description</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.discription }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Total Fees</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.totalFee }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n  </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/branch-conf.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/branch-conf.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/discount.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/discount.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\n  <button nbButton status=\"warning\" (click)=\"back()\" style=\"color: black;\">Manage Discount</button>\n</div>\n<p style=\"color: black; font-weight: bold;\">Define Discount</p>\n<nb-card *ngIf=\"display\">\n  <nb-card-body>\n    <form [formGroup]=\"discountForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <label for=\"code\">Code</label>\n          <input\n            type=\"text\"\n            nbInput\n            fullWidth\n            id=\"code\"\n            status=\"basic\"\n            formControlName=\"discountCode\"\n            [status]=\"\n              discountForm.get('discountCode').invalid && discountForm.get('discountCode').touched\n                ? 'danger'\n                : 'basic'\n            \"\n            placeholder=\"Code\"\n          />\n          <small\n            *ngIf=\"\n              discountForm.get('discountCode').invalid && discountForm.get('discountCode').touched\n            \"\n            style=\"display: block;\"\n            >*This field Required</small\n          >\n        </div>\n\n        <div class=\"col-sm-4\">\n          <label for=\"discountType\">Discount Type</label>\n          <nb-select\n            placeholder=\"Select Amount Type\"\n            id=\"discountType\"\n            fullWidth\n            [status]=\"\n              discountForm.get('discountType').invalid && discountForm.get('discountType').touched\n                ? 'danger'\n                : 'basic'\n            \"\n            formControlName=\"discountType\"\n          >\n            <!-- <nb-option value=\"\">Select Parent Course</nb-option> -->\n            <nb-option value=\"percentage\">\n              Discount in Percentage\n            </nb-option>\n            <nb-option value=\"amount\">\n              Discount in Amount\n            </nb-option>\n          </nb-select>\n          <small\n            *ngIf=\"\n              discountForm.get('discountType').invalid && discountForm.get('discountType').touched\n            \"\n            style=\"display: block;\"\n            >*This field Required</small\n          >\n        </div>\n\n        <div class=\"col-sm-4\">\n          <label for=\"amt\"\n            >Amount\n            <span *ngIf=\"discountForm.get('discountType').value === 'percentage'\"\n              >(in %)</span\n            ></label\n          >\n          <input\n            type=\"text\"\n            pattern=\"\\d*\"\n            nbInput\n            fullWidth\n            id=\"amt\"\n            status=\"basic\"\n            formControlName=\"amount\"\n            [status]=\"\n              (discountForm.get('amount').invalid || discountForm.hasError('invalidDiscount')) &&\n              discountForm.get('amount').touched\n                ? 'danger'\n                : 'basic'\n            \"\n            placeholder=\"Amount\"\n          />\n          <small\n            *ngIf=\"\n              (discountForm.get('amount').invalid || discountForm.hasError('invalidDiscount')) &&\n              discountForm.get('amount').touched\n            \"\n            style=\"display: block;\"\n            >*Enter Valid Amount</small\n          >\n        </div>\n      </div>\n\n      <div class=\"mt-3\">\n        <label for=\"des\">Description</label>\n        <textarea\n          name=\"description\"\n          nbInput\n          id=\"description\"\n          fullWidth\n          status=\"basic\"\n          cols=\"40\"\n          rows=\"4\"\n          formControlName=\"description\"\n          placeholder=\"Description(Optional)\"\n        ></textarea>\n      </div>\n      <div class=\"mt-4\" style=\"text-align: right;\">\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">Submit</button>\n      </div>\n    </form>\n  </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\n  <button nbButton status=\"warning\" (click)=\"onClick()\" style=\"color: black;\">Add Discount</button>\n</div>\n<p style=\"color: black; font-weight: bold;\">Manage Discount Here</p>\n<nb-card>\n  <nb-card-body>\n    <table *ngIf=\"discounts.length > 0; else noDiscounts\">\n      <thead>\n        <tr>\n          <th>Code</th>\n          <th>Amount</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of discounts; let i = index\">\n          <td>{{ item.discountCode }}</td>\n          <td>{{ item.amount }}<span *ngIf=\"item.discountType === 'percentage'\">%</span></td>\n          <td>{{ item.description }}</td>\n          <td class=\"text-right\">\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(item._id)\">Edit</button>\n            <button nbButton status=\"danger\" (click)=\"delete(item._id)\">Del</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <ng-template #noDiscounts>\n      <p class=\"text-center mt-3\">No Discounts Found</p>\n    </ng-template>\n  </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/employee-management/add-employee.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/employee-management/add-employee.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p style=\"color: black; font-weight: bold;\">Add employeeForm Here</p>\r\n\r\n<nb-card status=\"warning\">\r\n  <nb-card-body>\r\n    <nb-checkbox\r\n      (checkedChange)=\"changeAlreadyRegistered($event)\"\r\n      [checked]=\"alreadyRegistered\"\r\n      fullWidth\r\n      status=\"warning\"\r\n      *ngIf=\"!edit\"\r\n      >Already Registered Employee</nb-checkbox\r\n    >\r\n    <form\r\n      [formGroup]=\"eduAtlasEmployeeForm\"\r\n      (ngSubmit)=\"onEmployeeFormSearch()\"\r\n      *ngIf=\"alreadyRegistered\"\r\n    >\r\n      <p>Fetch student</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            [status]=\"\r\n              eduAtlasEmployeeFormControl.eduAtlasId.errors &&\r\n              eduAtlasEmployeeFormControl.eduAtlasId.touched\r\n                ? 'danger'\r\n                : 'basic'\r\n            \"\r\n            id=\"eduAtlasId\"\r\n            fullWidth\r\n            formControlName=\"eduAtlasId\"\r\n          />\r\n        </div>\r\n        <div style=\"text-align: right;\">\r\n          <button\r\n            type=\"submit\"\r\n            nbButton\r\n            status=\"warning\"\r\n            style=\"color: black;\"\r\n            *ngIf=\"!edit && !dataFetched\"\r\n          >\r\n            Fetch\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <form [formGroup]=\"otpForm\" (ngSubmit)=\"verifyOtp()\" *ngIf=\"otpSent && alreadyRegistered\">\r\n      <p>OTP</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            [status]=\"otpForm.get('otp').errors && otpForm.get('otp').touched ? 'danger' : 'basic'\"\r\n            id=\"otp\"\r\n            fullWidth\r\n            formControlName=\"otp\"\r\n          />\r\n        </div>\r\n        <div style=\"text-align: right;\">\r\n          <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\" *ngIf=\"!edit\">\r\n            Verify\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <hr />\r\n    </form>\r\n\r\n    <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\r\n      <p>Employee Basic Details</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">*Name</label>\r\n            <input\r\n              type=\"text\"\r\n              nbInput\r\n              [status]=\"f.name.errors && f.name.touched ? 'danger' : 'basic'\"\r\n              id=\"name\"\r\n              fullWidth\r\n              formControlName=\"name\"\r\n              placeholder=\"Name\"\r\n            />\r\n            <small *ngIf=\"f.name.errors && f.name.touched\">*Employee name is required</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">*Email</label>\r\n            <input\r\n              type=\"email\"\r\n              nbInput\r\n              [status]=\"f.employeeEmail.errors && f.employeeEmail.touched ? 'danger' : 'basic'\"\r\n              id=\"email\"\r\n              formControlName=\"employeeEmail\"\r\n              fullWidth\r\n              placeholder=\"Email\"\r\n            />\r\n            <small *ngIf=\"f.employeeEmail.errors && f.employeeEmail.touched\"\r\n              >*Employee email is required</small\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"form-group\">\r\n            <label for=\"contact\">*Employee Contact Number</label>\r\n            <input\r\n              type=\"text\"\r\n              nbInput\r\n              maxlength=\"10\"\r\n              [status]=\"f.contact.errors && f.contact.touched ? 'danger' : 'basic'\"\r\n              id=\"contact\"\r\n              formControlName=\"contact\"\r\n              fullWidth\r\n              placeholder=\"Employee Contact No.\"\r\n            />\r\n            <small *ngIf=\"f.contact.errors && f.contact.touched\"\r\n              >*Employee Contact Number is required.</small\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <label>*Role</label>\r\n          <nb-select\r\n            placeholder=\"Select Role\"\r\n            [status]=\"f.role.errors && f.role.touched ? 'danger' : 'basic'\"\r\n            status=\"basic\"\r\n            formControlName=\"role\"\r\n          >\r\n            <nb-option [value]=\"null\">Select Role</nb-option>\r\n            <nb-option *ngFor=\"let role of roles\" value=\"{{ role }}\">{{ role }}</nb-option>\r\n          </nb-select>\r\n          <small *ngIf=\"f.role.errors && f.role.touched\">*Employee Role is required.</small>\r\n        </div>\r\n      </div>\r\n\r\n      <hr />\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"address\">Address</label>\r\n          <textarea\r\n            type=\"text\"\r\n            nbInput\r\n            status=\"basic\"\r\n            fullWidth\r\n            id=\"address\"\r\n            formControlName=\"address\"\r\n            fullWidth\r\n            placeholder=\"Address\"\r\n          >\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n      <div style=\"text-align: right;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">\r\n          {{ employeeEduId ? 'Update Employee' : 'Add Employee' }}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/employee-management/manage-employee/manage-employee.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/employee-management/manage-employee/manage-employee.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button nbButton status=\"warning\" (click)=\"onClick()\" style=\"color: black;\">\r\n    Add Employee\r\n  </button>\r\n</div>\r\n\r\n<div class=\"row mb-4\">\r\n  <div class=\"col-sm-6\">\r\n    <p class=\"font-weight-bolder\">Employees</p>\r\n  </div>\r\n</div>\r\n\r\n<nb-card *ngIf=\"employees.length > 0\">\r\n  <nb-card-body>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Contact</th>\r\n          <th>Role</th>\r\n          <!-- <th>Course Name</th> -->\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let employee of employees; let i = index\">\r\n          <td>{{ employee.basicDetails.name }}</td>\r\n          <td>{{ employee.basicDetails.employeeContact }}</td>\r\n          <td>{{ employee.instituteDetails.role }}</td>\r\n          <!-- <td>{{ employee.courseDetails.course }}</td> -->\r\n          <td>\r\n            <button\r\n              class=\"mr-2\"\r\n              nbButton\r\n              status=\"primary\"\r\n              (click)=\"view(employee.eduAtlasId, employee._id)\"\r\n            >\r\n              View\r\n            </button>\r\n            <button\r\n              class=\"mr-2\"\r\n              nbButton\r\n              status=\"warning`\"\r\n              (click)=\"edit(employee.eduAtlasId, employee._id)\"\r\n            >\r\n              Edit\r\n            </button>\r\n            <button class=\"mr-2\" nbButton status=\"danger\" (click)=\"delete(employee._id)\">\r\n              Delete\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </nb-card-body>\r\n</nb-card>\r\n<div *ngIf=\"employees.length == 0\" class=\"noRecFound\">\r\n  No Records Found\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/employee-management/view-employee/view-employee.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/employee-management/view-employee/view-employee.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card *ngIf=\"employee\">\r\n  <nb-card-body>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p class=\"font-weight-bold\">Name</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <p>{{ employee.basicDetails.name }}</p>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p class=\"font-weight-bold\">Role</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <p>{{ employee.instituteDetails[0].role }}</p>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p class=\"font-weight-bold\">Email</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <p>{{ employee.basicDetails.employeeEmail }}</p>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p class=\"font-weight-bold\">Contact</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <p>{{ employee.basicDetails.employeeContact }}</p>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p class=\"font-weight-bold\">Address</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <p>{{ employee.basicDetails.employeeAddress }}</p>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button nbButton status=\"warning\" (click)=\"onClick()\" style=\"color: black;\" [hidden]=\"receipts\">\r\n    Add Receipt\r\n  </button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Manage Receipt</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <table *ngIf=\"receipts; else noReceipt\">\r\n      <thead>\r\n        <tr>\r\n          <th>Business Name</th>\r\n          <th>Address</th>\r\n          <th>GST Number</th>\r\n          <th>Terms & Conditions</th>\r\n          <th>Fee</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>{{ receipts.businessName }}</td>\r\n          <td>{{ receipts.address }}</td>\r\n          <td>{{ receipts.gstNumber }}</td>\r\n          <td>{{ receipts.termsAndCondition }}</td>\r\n          <td>{{ receipts.fee }}</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(instituteId)\">Edit</button>\r\n            <button nbButton status=\"danger\" (click)=\"delete(instituteId)\">Del</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <ng-template #noReceipt><p class=\"mt-5 mb-5 text-center\">No Record Found</p></ng-template>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button (click)=\"back()\" nbButton status=\"warning\" style=\"color: black;\">Manage Receipt</button>\r\n</div>\r\n<p style=\"font-weight: bold;\">Receipt Configuration</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"receipt\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"name\">Business Name</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"name\"\r\n            fullWidth\r\n            status=\"basic\"\r\n            formControlName=\"businessName\"\r\n            [status]=\"f.businessName.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Business Name\"\r\n          />\r\n          <small *ngIf=\"f.businessName.errors && submitted\">*Business Name is Required</small>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"gst\">GST Number (Optional)</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            id=\"gst\"\r\n            status=\"basic\"\r\n            formControlName=\"gstNumber\"\r\n            placeholder=\"GST Number (optional)\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"fee\">Fee</label>\r\n          <nb-select\r\n            placeholder=\"Fee\"\r\n            id=\"fee\"\r\n            status=\"basic\"\r\n            [status]=\"f.fee.errors && submitted ? 'danger' : 'basic'\"\r\n            formControlName=\"fee\"\r\n          >\r\n            <nb-option *ngFor=\"let item of fees\" [value]=\"item\">{{ item }}</nb-option>\r\n          </nb-select>\r\n          <small *ngIf=\"f.fee.errors && submitted\">*Fee is Required</small>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"address\">Address</label>\r\n\r\n          <textarea\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            status=\"basic\"\r\n            formControlName=\"address\"\r\n            rows=\"5\"\r\n            [status]=\"f.address.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Address\"\r\n          >\r\n          </textarea>\r\n\r\n          <small *ngIf=\"f.address.errors && submitted\">*Address is Required</small>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"tc\">Terms & Conditions</label>\r\n          <textarea\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"tc\"\r\n            status=\"basic\"\r\n            fullWidth\r\n            formControlName=\"termsAndCondition\"\r\n            [status]=\"f.termsAndCondition.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Terms and Conditions\"\r\n            cols=\"15\"\r\n            rows=\"7\"\r\n          >\r\n          </textarea>\r\n          <small *ngIf=\"f.termsAndCondition.errors && submitted\"\r\n            >*Terms & Conditions is Required</small\r\n          >\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"text-align: right; margin: 1rem;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">\r\n          {{ edit ? 'Update' : 'Add' }}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/role-management/role-management.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/role-management/role-management.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p style=\"font-weight: bold;\">Role Management</p>\n<nb-card>\n  <nb-card-body *ngIf=\"!display\">\n    <form [formGroup]=\"roleManage\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <label for=\"phone\">*Phone Number</label>\n          <input\n            type=\"phone\"\n            nbInput\n            id=\"phone\"\n            maxlength=\"10\"\n            fullWidth\n            [status]=\"f.phone.errors && submitted ? 'danger' : 'basic'\"\n            formControlName=\"phone\"\n            placeholder=\"Phone Number\"\n          />\n          <small *ngIf=\"f.phone.errors && submitted\">*Phone Number is required</small>\n        </div>\n        <div class=\"col-sm-4\">\n          <label>*Password</label>\n          <input\n            type=\"password\"\n            nbInput\n            fullWidth\n            formControlName=\"password\"\n            placeholder=\"Password\"\n            [status]=\"f.phone.errors && submitted ? 'danger' : 'basic'\"\n          />\n          <small *ngIf=\"f.password.errors && submitted\">*Password is required</small>\n        </div>\n        <div class=\"col-sm-4\">\n          <label for=\"role\">*Assign Role</label>\n          <nb-select\n            status=\"basic\"\n            id=\"role\"\n            formControlName=\"role\"\n            fullWidth\n            [size]=\"selectedSize\"\n            placeholder=\"Assign Role\"\n          >\n            <nb-option value=\"branchManager\">Branch Manager</nb-option>\n            <nb-option value=\"teacher\">Teacher</nb-option>\n            <nb-option value=\"councillor\">Counselor</nb-option>\n          </nb-select>\n          <small *ngIf=\"f.role.errors && submitted\">*Role is required</small>\n        </div>\n      </div>\n      <div style=\"margin: 1rem; text-align: right;\">\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">Submit</button>\n      </div>\n    </form>\n  </nb-card-body>\n  <nb-card-body [ngClass]=\"{ hide: !display }\">\n    <input type=\"text\" maxlength=\"4\" [(ngModel)]=\"otp\" nbInput placeholder=\"Enter OTP\" />\n    <a class=\"btn btn-link\">Resend OTP</a>\n    <button nbButton (click)=\"varifyOtp()\">Varify OTP</button>\n  </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-batches/add-batches.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,\nnb-select,\ntextarea {\n  display: block; }\n\nsmall {\n  color: red; }\n\np {\n  color: black;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1iYXRjaGVzL0U6XFxQcm9qZWN0c1xcRnJlZWxhbmNlIFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxhZGQtYmF0Y2hlc1xcYWRkLWJhdGNoZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvYWRkLWJhdGNoZXMvYWRkLWJhdGNoZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCxcbm5iLXNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6IHJlZDtcbn1cbnAge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-batches/add-batches.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddBatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBatchesComponent", function() { return AddBatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");








let AddBatchesComponent = class AddBatchesComponent {
    constructor(fb, api, route, router, location, toasterService) {
        this.fb = fb;
        this.api = api;
        this.route = route;
        this.router = router;
        this.location = location;
        this.toasterService = toasterService;
        this.linearMode = true;
        this.submitted = false;
    }
    ngOnInit() {
        this.display = false;
        this.courses = [];
        this.route.queryParams.subscribe((data) => {
            this.batchId = data.batchId;
            this.edit = data.edit;
        });
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.getCourses(this.instituteId);
        this.batchForm = this.fb.group({
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            batchCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [''],
        });
        if (this.edit) {
            this.getBatch(this.batchId, this.instituteId);
        }
        else {
            this.display = true;
        }
    }
    getBatch(id, instituteId) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        param = param.append('instituteId', instituteId);
        param = param.append('batchId', id);
        this.api.getBatch(param).subscribe((res) => {
            this.batchUpdate = res[0];
            this.batchForm.patchValue({
                course: this.batchUpdate.course,
                batchCode: this.batchUpdate.batchCode,
                description: this.batchUpdate.description,
            });
            this.display = true;
        });
    }
    getCourses(id) {
        this.api.getCourses(id).subscribe((res) => {
            this.courses = res.course;
        });
    }
    get f() {
        return this.batchForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        this.batchForm.markAllAsTouched();
        if (this.batchForm.invalid) {
            return;
        }
        if (this.edit === 'true') {
            let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
            param = param.append('instituteId', this.instituteId);
            param = param.append('batchId', this.batchId);
            const batch = this.batchForm.value;
            batch._id = this.batchId;
            this.api.updateBatch(param, batch).subscribe((res) => {
                this.showToast('top-right', 'success', 'Successfully Updated');
                this.router.navigate(['/pages/institute/branch-config/manage-batch/', this.instituteId]);
            }, (error) => {
                this.showToast('top-right', 'danger', error.error.message);
            });
        }
        if (!this.edit) {
            this.api.addBatch(this.instituteId, this.batchForm.value).subscribe(() => {
                this.showToast('top-right', 'success', 'Successfully Added');
                setTimeout(() => {
                    this.router.navigate([
                        '/pages/institute/branch-config/manage-batch/',
                        this.instituteId,
                    ]);
                }, 1000);
            }, (err) => {
                this.showToast('top-right', 'danger', err.error.message);
            });
        }
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, { position, status });
    }
    goManage() {
        this.location.back();
    }
};
AddBatchesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"] }
];
AddBatchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-add-batches',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-batches.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/add-batches.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-batches.component.scss */ "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]])
], AddBatchesComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1iYXRjaGVzL21hbmFnZS1iYXRjaC9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxcYWRkLWJhdGNoZXNcXG1hbmFnZS1iYXRjaFxcbWFuYWdlLWJhdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FDRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1iYXRjaGVzL21hbmFnZS1iYXRjaC9tYW5hZ2UtYmF0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcblx0d2lkdGg6MTAwJVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ManageBatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBatchComponent", function() { return ManageBatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ManageBatchComponent = class ManageBatchComponent {
    constructor(api, router, route, toasterService) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.toasterService = toasterService;
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
    }
    ngOnInit() {
        this.batches = [];
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.getBatches(this.instituteId);
    }
    getBatches(id) {
        this.api.getBatches(id).subscribe((res) => {
            this.batches = res.batch;
        });
    }
    edit(id) {
        this.router.navigate([`/pages/institute/branch-config/add-batch/${this.instituteId}`], {
            queryParams: { batchId: id, edit: true },
        });
    }
    delete(id) {
        this.params = this.params.append('instituteId', this.instituteId);
        this.params = this.params.append('batchId', id);
        this.api.deleteBatch(this.params).subscribe((res) => { }, (err) => console.error(err));
        const i = this.batches.findIndex((e) => e._id === id);
        if (i !== -1) {
            this.batches.splice(i, 1);
        }
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, { position, status });
    }
    onClick() {
        this.router.navigate(['/pages/institute/branch-config/add-batch', this.instituteId]);
    }
};
ManageBatchComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }
];
ManageBatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ngx-manage-batch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-batch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-batch.component.scss */ "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])
], ManageBatchComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-course/add-course.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-course/add-course.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  color: red; }\n\ninput, textarea, nb-select {\n  display: block;\n  width: 100%; }\n\np {\n  color: black;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2UvRTpcXFByb2plY3RzXFxGcmVlbGFuY2UgUHJvamVjdHNcXEVkdUF0bGFzXFxlZHVhdGxhczFcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGluc3RpdHV0ZVxcYnJhbmNoLWNvbmZcXGFkZC1jb3Vyc2VcXGFkZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUVmO0VBQUUsWUFBVztFQUFDLGlCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2UvYWRkLWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuc21hbGx7XG4gICAgY29sb3I6IHJlZDtcbn1cbmlucHV0LHRleHRhcmVhLG5iLXNlbGVjdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbnB7Y29sb3I6YmxhY2s7Zm9udC13ZWlnaHQ6Ym9sZH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-course/add-course.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-course/add-course.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCourseComponent", function() { return AddCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let AddCourseComponent = class AddCourseComponent {
    constructor(fb, api, route, location, toasterService, router) {
        this.fb = fb;
        this.api = api;
        this.route = route;
        this.location = location;
        this.toasterService = toasterService;
        this.router = router;
        this.submitted = false;
        this.institutes = [];
        this.display = false;
        this.exclusiveGst = null;
        this.fees = 0;
    }
    ngOnInit() {
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe((param) => {
            this.courseId = param.courseId;
            this.edit = param.edit;
        });
        this.course = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            courseCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fees: [''],
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gst: [''],
            gstValue: [''],
            discription: [''],
            totalFee: [''],
        });
        if (this.edit === 'true') {
            this.getCourse(this.courseId);
        }
        else {
            this.inclusiveGst(false);
        }
    }
    getCourse(id) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]();
        param = param.append('instituteId', this.instituteId);
        param = param.append('courseId', id);
        this.api.getCourse(param).subscribe((res) => {
            this.updateCourse = res[0];
            this.course.patchValue({
                name: this.updateCourse.name,
                courseCode: this.updateCourse.courseCode,
                fees: this.updateCourse.fees,
                duration: this.updateCourse.duration,
                gst: this.updateCourse.gst,
                gstValue: this.updateCourse.gstValue,
                discription: this.updateCourse.discription,
                totalFee: this.updateCourse.totalFee,
            });
            this.exclusiveGst = Number(this.updateCourse.gstValue);
            this.fees = Number(this.updateCourse.fees);
            if (this.updateCourse.gst === 'Inclusive') {
                this.gstCheckBox = true;
                this.inclusiveGst(true);
                this.course.get('gstValue').disable();
            }
            else {
                this.gstCheckBox = false;
                this.inclusiveGst(false);
            }
        }, (error) => console.error(error));
    }
    getInstitutes() {
        this.api.getInstitutes().subscribe((data) => {
            this.institutes = data;
        });
        this.display = true;
    }
    get f() {
        return this.course.controls;
    }
    back() {
        this.location.back();
    }
    onSubmit() {
        this.submitted = true;
        this.course.markAllAsTouched();
        if (this.course.invalid) {
            return;
        }
        if (this.edit === 'true') {
            let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]();
            param = param.append('instituteId', this.instituteId);
            param = param.append('courseId', this.courseId);
            const course = this.course.value;
            course._id = this.courseId;
            this.api.updateCourse(param, course).subscribe((res) => {
                this.showToast('top-right', 'success', 'Course Updated');
                setTimeout(() => {
                    this.router.navigate([
                        '/pages/institute/branch-config/manage-course/',
                        this.instituteId,
                    ]);
                }, 1000);
            }, (error) => {
                this.showToast('top-right', 'danger', 'Course Updation Failed');
            });
        }
        if (!this.edit) {
            this.api.addCourse(this.instituteId, this.course.value).subscribe((data) => {
                this.showToast('top-right', 'success', 'Course Added Successfully');
                setTimeout(() => {
                    this.router.navigate([
                        '/pages/institute/branch-config/manage-course/',
                        this.instituteId,
                    ]);
                }, 1000);
            }, (err) => {
                console.error(err);
                this.showToast('top-right', 'danger', err.error.message ? err.error.message : 'This course id already added');
            });
        }
    }
    inclusiveGst(event) {
        const inclusive = event;
        if (inclusive) {
            this.course.get('gstValue').disable();
            this.course.patchValue({
                gst: 'Inclusive',
            });
        }
        else if (!inclusive || null) {
            this.course.get('gstValue').enable();
            this.course.patchValue({
                gst: 'Exclusive',
            });
        }
        this.calculateTotalFees();
    }
    calculateTotalFees() {
        let total = 0;
        if (this.course.get('gst').value === 'Inclusive') {
            total = this.fees;
        }
        else {
            if (this.exclusiveGst == null) {
                total = this.fees;
            }
            else {
                total = this.fees + (this.exclusiveGst / 100) * this.fees;
            }
        }
        this.course.get('totalFee').setValue(total.toString());
    }
    exclusive(event) {
        this.exclusiveGst = +event;
        const total = this.fees + (this.exclusiveGst / 100) * this.fees;
        this.course.patchValue({
            totalFee: total + '',
            gstValue: this.exclusiveGst === 0 ? '' : this.exclusiveGst + '',
        });
        this.calculateTotalFees();
    }
    courseFee(event) {
        this.fees = +event;
        this.calculateTotalFees();
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, {
            position,
            status,
        });
    }
};
AddCourseComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-add-course',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-course.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/add-course.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-course.component.scss */ "./src/app/pages/institute/branch-conf/add-course/add-course.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AddCourseComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2UvbWFuYWdlLWNvdXJzZS9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxcYWRkLWNvdXJzZVxcbWFuYWdlLWNvdXJzZVxcbWFuYWdlLWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9icmFuY2gtY29uZi9hZGQtY291cnNlL21hbmFnZS1jb3Vyc2UvbWFuYWdlLWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ManageCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCourseComponent", function() { return ManageCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ManageCourseComponent = class ManageCourseComponent {
    constructor(api, router, active) {
        this.api = api;
        this.router = router;
        this.active = active;
        this.display = false;
        this.courses = [];
        this.institutes = [];
        this.institute = [];
    }
    ngOnInit() {
        this.instituteId = this.active.snapshot.paramMap.get('id');
        this.getCourses(this.instituteId);
    }
    getCourses(id) {
        this.api.getCourses(id).subscribe((data) => {
            this.courses = data.course;
        });
    }
    delete(id) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        param = param.append('instituteId', this.instituteId);
        param = param.append('courseId', id);
        this.api.deleteCourse(param).subscribe((res) => {
            const i = this.courses.findIndex((e) => e._id === id);
            if (i !== -1) {
                this.courses.splice(i, 1);
            }
        }, (error) => console.error(error));
    }
    edit(id) {
        this.router.navigate([`/pages/institute/branch-config/add-courses/${this.instituteId}`], {
            queryParams: { courseId: id, edit: true },
        });
    }
    onClick() {
        this.router.navigate(['/pages/institute/branch-config/add-courses/', this.instituteId]);
    }
};
ManageCourseComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ManageCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-manage-course',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-course.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-course.component.scss */ "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ManageCourseComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2Uvdmlldy1jb3Vyc2UvRTpcXFByb2plY3RzXFxGcmVlbGFuY2UgUHJvamVjdHNcXEVkdUF0bGFzXFxlZHVhdGxhczFcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGluc3RpdHV0ZVxcYnJhbmNoLWNvbmZcXGFkZC1jb3Vyc2VcXHZpZXctY291cnNlXFx2aWV3LWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2Uvdmlldy1jb3Vyc2Uvdmlldy1jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ViewCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCourseComponent", function() { return ViewCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewCourseComponent = class ViewCourseComponent {
    constructor(api, active) {
        this.api = api;
        this.active = active;
    }
    ngOnInit() {
        this.instituteId = +this.active.snapshot.paramMap.get('id');
        this.api.getCourse(this.instituteId).subscribe((data) => {
            this.courses = data;
        }, (err) => console.error(err));
    }
};
ViewCourseComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-view-course',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-course.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-course.component.scss */ "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ViewCourseComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/branch-conf.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/branch-conf.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  color: red; }\n\ninput,\ntextarea {\n  margin: 10px; }\n\na {\n  margin: 1rem; }\n\n.active {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL0U6XFxQcm9qZWN0c1xcRnJlZWxhbmNlIFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxicmFuY2gtY29uZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVUsRUFBQTs7QUFFWjs7RUFFRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvYnJhbmNoLWNvbmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbWFsbCB7XG4gIGNvbG9yOiByZWQ7XG59XG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuYSB7XG4gIG1hcmdpbjogMXJlbTtcbn1cbi5hY3RpdmUge1xuICBjb2xvcjogcmVkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/branch-conf.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/branch-conf.component.ts ***!
  \**********************************************************************/
/*! exports provided: BranchConfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchConfComponent", function() { return BranchConfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BranchConfComponent = class BranchConfComponent {
    constructor() { }
    ngOnInit() { }
};
BranchConfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-branch-conf',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./branch-conf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/branch-conf.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./branch-conf.component.scss */ "./src/app/pages/institute/branch-conf/branch-conf.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BranchConfComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/branch/branch-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/branch/branch-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BranchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchRoutingModule", function() { return BranchRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _branch_conf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../branch-conf.component */ "./src/app/pages/institute/branch-conf/branch-conf.component.ts");
/* harmony import */ var _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-course/add-course.component */ "./src/app/pages/institute/branch-conf/add-course/add-course.component.ts");
/* harmony import */ var _add_batches_add_batches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-batches/add-batches.component */ "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.ts");
/* harmony import */ var _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../role-management/role-management.component */ "./src/app/pages/institute/branch-conf/role-management/role-management.component.ts");
/* harmony import */ var _discount_discount_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../discount/discount.component */ "./src/app/pages/institute/branch-conf/discount/discount.component.ts");
/* harmony import */ var _receipt_conf_receipt_conf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../receipt-conf/receipt-conf.component */ "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.ts");
/* harmony import */ var _branch_conf_add_course_manage_course_manage_course_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../branch-conf/add-course/manage-course/manage-course.component */ "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.ts");
/* harmony import */ var _branch_conf_add_course_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../branch-conf/add-course/view-course/view-course.component */ "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.ts");
/* harmony import */ var _add_batches_manage_batch_manage_batch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-batches/manage-batch/manage-batch.component */ "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.ts");
/* harmony import */ var _discount_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../discount/manage-discount/manage-discount.component */ "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.ts");
/* harmony import */ var _branch_conf_receipt_conf_manage_receipt_manage_receipt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../branch-conf/receipt-conf/manage-receipt/manage-receipt.component */ "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.ts");
/* harmony import */ var _employee_management_manage_employee_manage_employee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../employee-management/manage-employee/manage-employee.component */ "./src/app/pages/institute/branch-conf/employee-management/manage-employee/manage-employee.component.ts");
/* harmony import */ var _employee_management_add_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../employee-management/add-employee.component */ "./src/app/pages/institute/branch-conf/employee-management/add-employee.component.ts");
/* harmony import */ var _employee_management_view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../employee-management/view-employee/view-employee.component */ "./src/app/pages/institute/branch-conf/employee-management/view-employee/view-employee.component.ts");

















const routes = [
    {
        path: '',
        component: _branch_conf_component__WEBPACK_IMPORTED_MODULE_3__["BranchConfComponent"],
        children: [
            { path: 'add-courses/:id', component: _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_4__["AddCourseComponent"] },
            { path: 'manage-course/:id', component: _branch_conf_add_course_manage_course_manage_course_component__WEBPACK_IMPORTED_MODULE_9__["ManageCourseComponent"] },
            { path: 'view-course/:id', component: _branch_conf_add_course_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_10__["ViewCourseComponent"] },
            { path: 'add-batch/:id', component: _add_batches_add_batches_component__WEBPACK_IMPORTED_MODULE_5__["AddBatchesComponent"] },
            { path: 'manage-batch/:id', component: _add_batches_manage_batch_manage_batch_component__WEBPACK_IMPORTED_MODULE_11__["ManageBatchComponent"] },
            { path: 'add-discount/:id', component: _discount_discount_component__WEBPACK_IMPORTED_MODULE_7__["DiscountComponent"] },
            { path: 'manage-discount/:id', component: _discount_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_12__["ManageDiscountComponent"] },
            { path: 'manage-receipt/:id', component: _branch_conf_receipt_conf_manage_receipt_manage_receipt_component__WEBPACK_IMPORTED_MODULE_13__["ManageReceiptComponent"] },
            { path: 'add-receipt/:id', component: _receipt_conf_receipt_conf_component__WEBPACK_IMPORTED_MODULE_8__["ReceiptConfComponent"] },
            { path: 'manage-role-management/:id', component: _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_6__["RoleManagementComponent"] },
            { path: 'add-employee/:id', component: _employee_management_add_employee_component__WEBPACK_IMPORTED_MODULE_15__["AddEmployee"] },
            { path: 'add-employee/:id/edit', component: _employee_management_add_employee_component__WEBPACK_IMPORTED_MODULE_15__["AddEmployee"] },
            { path: 'manage-employee/:id', component: _employee_management_manage_employee_manage_employee_component__WEBPACK_IMPORTED_MODULE_14__["ManageEmployee"] },
            { path: 'view-employee/:id', component: _employee_management_view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_16__["ViewEmployee"] },
            { path: '', redirectTo: 'add-courses', pathMatch: 'full' },
        ],
    },
];
let BranchRoutingModule = class BranchRoutingModule {
};
BranchRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BranchRoutingModule);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/branch/branch.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/branch/branch.module.ts ***!
  \*********************************************************************/
/*! exports provided: BranchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchModule", function() { return BranchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _branch_conf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../branch-conf.component */ "./src/app/pages/institute/branch-conf/branch-conf.component.ts");
/* harmony import */ var _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-course/add-course.component */ "./src/app/pages/institute/branch-conf/add-course/add-course.component.ts");
/* harmony import */ var _add_batches_add_batches_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-batches/add-batches.component */ "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.ts");
/* harmony import */ var _branch_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./branch-routing.module */ "./src/app/pages/institute/branch-conf/branch/branch-routing.module.ts");
/* harmony import */ var _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../role-management/role-management.component */ "./src/app/pages/institute/branch-conf/role-management/role-management.component.ts");
/* harmony import */ var _employee_management_manage_employee_manage_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../employee-management/manage-employee/manage-employee.component */ "./src/app/pages/institute/branch-conf/employee-management/manage-employee/manage-employee.component.ts");
/* harmony import */ var _employee_management_add_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../employee-management/add-employee.component */ "./src/app/pages/institute/branch-conf/employee-management/add-employee.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _discount_discount_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../discount/discount.component */ "./src/app/pages/institute/branch-conf/discount/discount.component.ts");
/* harmony import */ var _receipt_conf_receipt_conf_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../receipt-conf/receipt-conf.component */ "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.ts");
/* harmony import */ var _branch_conf_add_course_manage_course_manage_course_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../branch-conf/add-course/manage-course/manage-course.component */ "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.ts");
/* harmony import */ var _branch_conf_add_course_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../branch-conf/add-course/view-course/view-course.component */ "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.ts");
/* harmony import */ var _branch_conf_add_batches_manage_batch_manage_batch_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../branch-conf/add-batches/manage-batch/manage-batch.component */ "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.ts");
/* harmony import */ var _branch_conf_discount_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../branch-conf/discount/manage-discount/manage-discount.component */ "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.ts");
/* harmony import */ var _branch_conf_receipt_conf_manage_receipt_manage_receipt_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../branch-conf/receipt-conf/manage-receipt/manage-receipt.component */ "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.ts");
/* harmony import */ var _employee_management_view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../employee-management/view-employee/view-employee.component */ "./src/app/pages/institute/branch-conf/employee-management/view-employee/view-employee.component.ts");





















let BranchModule = class BranchModule {
};
BranchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _branch_conf_component__WEBPACK_IMPORTED_MODULE_4__["BranchConfComponent"],
            _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_5__["AddCourseComponent"],
            _add_batches_add_batches_component__WEBPACK_IMPORTED_MODULE_6__["AddBatchesComponent"],
            _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_8__["RoleManagementComponent"],
            _employee_management_manage_employee_manage_employee_component__WEBPACK_IMPORTED_MODULE_9__["ManageEmployee"],
            _employee_management_add_employee_component__WEBPACK_IMPORTED_MODULE_10__["AddEmployee"],
            _employee_management_view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_20__["ViewEmployee"],
            _discount_discount_component__WEBPACK_IMPORTED_MODULE_13__["DiscountComponent"],
            _receipt_conf_receipt_conf_component__WEBPACK_IMPORTED_MODULE_14__["ReceiptConfComponent"],
            _branch_conf_add_course_manage_course_manage_course_component__WEBPACK_IMPORTED_MODULE_15__["ManageCourseComponent"],
            _branch_conf_add_course_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_16__["ViewCourseComponent"],
            _branch_conf_add_batches_manage_batch_manage_batch_component__WEBPACK_IMPORTED_MODULE_17__["ManageBatchComponent"],
            _branch_conf_discount_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_18__["ManageDiscountComponent"],
            _branch_conf_receipt_conf_manage_receipt_manage_receipt_component__WEBPACK_IMPORTED_MODULE_19__["ManageReceiptComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _branch_routing_module__WEBPACK_IMPORTED_MODULE_7__["BranchRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__["NbAccordionModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
        ],
    })
], BranchModule);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/discount/discount.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/discount/discount.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  color: red;\n  margin: 0 1rem; }\n\ninput,\ntextarea {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2Rpc2NvdW50L0U6XFxQcm9qZWN0c1xcRnJlZWxhbmNlIFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxkaXNjb3VudFxcZGlzY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYyxFQUFBOztBQUVoQjs7RUFFRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvZGlzY291bnQvZGlzY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbWFsbCB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMCAxcmVtO1xufVxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/discount/discount.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/discount/discount.component.ts ***!
  \****************************************************************************/
/*! exports provided: DiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountComponent", function() { return DiscountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");








let DiscountComponent = class DiscountComponent {
    constructor(fb, api, router, location, active, toasterService) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.location = location;
        this.active = active;
        this.toasterService = toasterService;
    }
    ngOnInit() {
        this.display = false;
        this.instituteId = this.active.snapshot.paramMap.get('id');
        this.active.queryParams.subscribe((data) => {
            this.edit = data.edit;
            this.discountId = data.discountId;
        });
        this.discountForm = this.fb.group({
            discountCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            discountType: ['percentage', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [''],
        }, {
            validator: this.discountValidator.bind(this),
        });
        if (this.edit) {
            this.getDiscount(this.discountId);
        }
        else {
            this.display = true;
        }
    }
    discountValidator(group) {
        const discountType = group.value.discountType;
        const amount = group.value.amount;
        if (discountType === 'percentage' && amount > 100) {
            return { invalidDiscount: true };
        }
        else if (amount < 0) {
            return { invalidDiscount: true };
        }
        return null;
    }
    getDiscount(id) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        param = param.append('instituteId', this.instituteId);
        param = param.append('discountId', id);
        this.api.getDiscount(param).subscribe((data) => {
            this.discountUpdate = data[0];
            this.discountForm.patchValue({
                discountCode: this.discountUpdate.discountCode,
                description: this.discountUpdate.description,
                discountType: this.discountUpdate.discountType,
                amount: this.discountUpdate.amount,
            });
            this.display = true;
        }, (err) => {
            this.display = true;
        });
    }
    onSubmit() {
        this.discountForm.markAllAsTouched();
        if (this.discountForm.invalid) {
            return;
        }
        if (this.edit === 'true') {
            let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            param = param.append('instituteId', this.instituteId);
            param = param.append('discountId', this.discountId);
            this.api.updateDiscount(param, this.discountForm.value).subscribe((res) => {
                this.showToast('top-right', 'success', 'Discount Updated');
                setTimeout(() => {
                    this.router.navigate([
                        '/pages/institute/branch-config/manage-discount/',
                        this.instituteId,
                    ]);
                }, 1000);
            }, (error) => {
                this.showToast('top-right', 'danger', 'Discount Updation Failed');
            });
        }
        else {
            this.api.addDiscount(this.instituteId, this.discountForm.value).subscribe((data) => {
                this.showToast('top-right', 'success', 'Discount Added Successfully');
                setTimeout(() => {
                    this.router.navigate([
                        '/pages/institute/branch-config/manage-discount/',
                        this.instituteId,
                    ]);
                }, 1000);
            }, (err) => {
                console.error(err);
                this.showToast('top-right', 'danger', 'This Discount already added');
            });
        }
    }
    back() {
        this.location.back();
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, { position, status });
    }
};
DiscountComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"] }
];
DiscountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-discount',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discount.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/discount.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discount.component.scss */ "./src/app/pages/institute/branch-conf/discount/discount.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]])
], DiscountComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2Rpc2NvdW50L21hbmFnZS1kaXNjb3VudC9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxcZGlzY291bnRcXG1hbmFnZS1kaXNjb3VudFxcbWFuYWdlLWRpc2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2Rpc2NvdW50L21hbmFnZS1kaXNjb3VudC9tYW5hZ2UtZGlzY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ManageDiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDiscountComponent", function() { return ManageDiscountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let ManageDiscountComponent = class ManageDiscountComponent {
    constructor(api, router, active, toasterService) {
        this.api = api;
        this.router = router;
        this.active = active;
        this.toasterService = toasterService;
    }
    ngOnInit() {
        this.discounts = [];
        this.instituteId = this.active.snapshot.paramMap.get('id');
        this.getDiscounts(this.instituteId);
    }
    getDiscounts(id) {
        this.api.getDiscounts(id).subscribe((data) => {
            this.discounts = data.discount;
        }, (err) => console.error(err));
    }
    edit(id) {
        this.router.navigate([`/pages/institute/branch-config/add-discount/${this.instituteId}`], {
            queryParams: { discountId: id, edit: true },
        });
    }
    delete(id) {
        const confirm = window.prompt('Are u sure, you want to Delete This Discount?');
        if (confirm) {
            let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
            param = param.append('instituteId', this.instituteId);
            param = param.append('discountId', id);
            this.api.deleteDiscount(param).subscribe((err) => console.error(err));
            const i = this.discounts.findIndex((e) => e._id === id);
            if (i !== -1) {
                this.discounts.splice(i, 1);
                this.showToast('top-right', 'success', 'Discount Deleted Successfully!');
            }
        }
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, { position, status });
    }
    onClick() {
        this.router.navigate(['/pages/institute/branch-config/add-discount/', this.instituteId]);
    }
};
ManageDiscountComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }
];
ManageDiscountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ngx-manage-discount',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-discount.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-discount.component.scss */ "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])
], ManageDiscountComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/employee-management/add-employee.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/employee-management/add-employee.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  color: red; }\n\n.details {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fill, 224px); }\n\n.feeDetail {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fill, 224px); }\n\nnb-select {\n  display: block; }\n\np {\n  color: black;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2VtcGxveWVlLW1hbmFnZW1lbnQvRTpcXFByb2plY3RzXFxGcmVlbGFuY2UgUHJvamVjdHNcXEVkdUF0bGFzXFxlZHVhdGxhczFcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGluc3RpdHV0ZVxcYnJhbmNoLWNvbmZcXGVtcGxveWVlLW1hbmFnZW1lbnRcXGFkZC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGFBQWE7RUFDYixjQUFhO0VBQ2IsK0NBQStDLEVBQUE7O0FBR25EO0VBQ0csYUFBYTtFQUNiLGNBQWM7RUFDZCwrQ0FBK0MsRUFBQTs7QUFHbEQ7RUFBVSxjQUFhLEVBQUE7O0FBQ3ZCO0VBQUUsWUFBVztFQUFDLGlCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2VtcGxveWVlLW1hbmFnZW1lbnQvYWRkLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnNtYWxse1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDoxMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyMjRweCk7IFxyXG59XHJcblxyXG4uZmVlRGV0YWlse1xyXG4gICBkaXNwbGF5OiBncmlkO1xyXG4gICBncmlkLWdhcDogMTBweDtcclxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyMjRweCk7IFxyXG4gICBcclxufVxyXG5uYi1zZWxlY3R7ZGlzcGxheTpibG9ja31cclxucHtjb2xvcjpibGFjaztmb250LXdlaWdodDpib2xkfVxyXG5cclxuICAgXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/employee-management/add-employee.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/employee-management/add-employee.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployee", function() { return AddEmployee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");






let AddEmployee = class AddEmployee {
    constructor(fb, api, router, active, toasterService) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.active = active;
        this.toasterService = toasterService;
        this.dataFetched = false;
        this.roles = ['Teacher', 'Manager', 'Counselor'];
    }
    ngOnInit() {
        this.alreadyRegistered = false;
        this.instituteId = this.active.snapshot.paramMap.get('id');
        this.active.queryParams.subscribe((data) => {
            this.employeeEduId = data.eduAtlasId;
            const employeeObjId = data.employeeObjId;
            this.edit = data.edit;
            this.employeeForm = this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                employeeEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
                contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                address: [''],
                role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            // Construct Eduatlas Id Form
            this.eduAtlasEmployeeForm = this.fb.group({
                eduAtlasId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            // Construct OTP Form
            this.otpForm = this.fb.group({
                otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            if (this.edit === 'true') {
                this.alreadyRegistered = true;
                this.getOneEmployeeByInstitute(employeeObjId, this.instituteId);
            }
        });
    }
    get f() {
        return this.employeeForm.controls;
    }
    get eduAtlasEmployeeFormControl() {
        return this.eduAtlasEmployeeForm.controls;
    }
    onEmployeeFormSearch() {
        if (this.eduAtlasEmployeeForm.valid) {
            const employeeEduId = `${this.eduAtlasEmployeeFormControl['eduAtlasId'].value}`;
            this.api.sendOtpForGetUserDetails(employeeEduId).subscribe((res) => {
                if (res) {
                    this.otpSent = true;
                    this.phone = res.phone;
                    this.showToaster('top-right', 'success', res.message);
                }
                else {
                    this.showToaster('top-right', 'danger', 'Invalid Eduatlas ID');
                }
            }, (err) => {
                this.showToaster('top-right', 'danger', 'Invalid Eduatlas ID');
            });
        }
    }
    verifyOtp() {
        if (this.otpSent && this.otpForm.valid) {
            const otp = this.otpForm.value.otp;
            const verificationData = {
                verifyType: 'verifyUser',
                otp: this.otpForm.value.otp,
                phone: this.phone,
            };
            this.api.verifyUserOtp(verificationData).subscribe((data) => {
                this.getOneEmployee(this.eduAtlasEmployeeForm.value.eduAtlasId);
            }, (error) => {
                this.showToaster('top-right', 'danger', 'Invalid OTP');
            });
        }
    }
    getOneEmployee(eduId) {
        this.api.getOneEmployee(eduId).subscribe((data) => {
            if (data) {
                this.employee = data;
                this.employeeForm.reset();
                this.employeeForm.patchValue({
                    name: this.employee.basicDetails.name,
                    employeeEmail: this.employee.basicDetails.employeeEmail,
                    contact: this.employee.basicDetails.employeeContact,
                    address: this.employee.basicDetails.employeeAddress,
                });
                this.employeeEduId = this.employee.eduAtlasId;
                this.eduAtlasEmployeeForm.get('eduAtlasId').disable();
                this.employeeForm.patchValue({
                    name: this.employee.basicDetails.name,
                    employeeEmail: this.employee.basicDetails.employeeEmail,
                    contact: this.employee.basicDetails.employeeContact,
                    address: this.employee.basicDetails.employeeAddress,
                });
                this.employeeForm.get('name').disable();
                this.employeeForm.get('employeeEmail').disable();
                this.employeeForm.get('address').disable();
                this.employeeForm.get('contact').disable();
                this.otpSent = false;
                this.phone = null;
                this.dataFetched = true;
            }
            else {
                this.showToaster('top-right', 'danger', 'Invalid Eduatlas ID');
            }
        }, (error) => {
            this.showToaster('top-right', 'danger', 'Invalid Eduatlas ID');
        });
    }
    changeAlreadyRegistered(e) {
        this.alreadyRegistered = e;
        if (!e) {
            this.eduAtlasEmployeeForm.reset();
        }
    }
    getOneEmployeeByInstitute(employeeObjId, institute) {
        this.api
            .getOneEmployeeByInstitute({
            empId: employeeObjId,
            instituteId: institute,
        })
            .subscribe((data) => {
            this.employee = data[0];
            // console.log(this.employee);
            const eduAtlId = this.employeeEduId;
            this.eduAtlasEmployeeForm.patchValue({
                eduAtlasId: eduAtlId,
            });
            this.eduAtlasEmployeeForm.get('eduAtlasId').disable();
            this.employeeForm.patchValue({
                name: this.employee.basicDetails.name,
                employeeEmail: this.employee.basicDetails.employeeEmail,
                contact: this.employee.basicDetails.employeeContact,
                address: this.employee.basicDetails.employeeAddress,
                role: this.employee.instituteDetails.role,
            });
            this.employeeForm.get('name').disable();
            this.employeeForm.get('address').disable();
            this.employeeForm.get('employeeEmail').disable();
            this.employeeForm.get('contact').disable();
        });
    }
    onSubmit() {
        if (this.employeeForm.invalid) {
            return;
        }
        if (this.edit === 'true') {
            this.api
                .updateEmployeeInstituteDetails(this.employee._id, this.instituteId, this.f['role'].value)
                .subscribe((res) => {
                this.showToaster('top-right', 'success', 'Employee Updated Successfully!');
                this.router.navigate([
                    `/pages/institute/branch-config/manage-employee/${this.instituteId}`,
                ]);
            }, (err) => this.showToaster('top-right', 'danger', err.error.message));
        }
        if (!this.edit) {
            if (!this.alreadyRegistered) {
                this.api.addEmployee(this.employeeForm.value, this.instituteId).subscribe((data) => {
                    this.showToaster('top-right', 'success', 'New Employee Added Successfully!');
                    setTimeout(() => {
                        this.router.navigate([
                            `/pages/institute/branch-config/manage-employee/${this.instituteId}`,
                        ]);
                    }, 1000);
                }, (err) => {
                    if (err.error.message.includes('E11000 duplicate key error collection')) {
                        this.showToaster('top-right', 'danger', 'This Employee Already Exist, Please Search Employee By EDU-Atlas ID');
                        this.alreadyRegistered = true;
                        return;
                    }
                    this.alreadyRegistered = true;
                    this.showToaster('top-right', 'danger', err.error.message);
                });
            }
            else {
                if (this.employeeEduId) {
                    this.api
                        .addEmployeeInstitute(this.employeeEduId, this.instituteId, this.employeeForm.value)
                        .subscribe((res) => {
                        this.showToaster('top-right', 'success', 'Employee Added to Institute Successfully!');
                        this.router.navigate([
                            `/pages/institute/branch-config/manage-employee/${this.instituteId}`,
                        ]);
                    }, (err) => this.showToaster('top-right', 'danger', err.error.message));
                }
                else {
                    this.showToaster('top-right', 'danger', 'Invalid Eduatlas ID');
                }
            }
        }
    }
    showToaster(position, status, message) {
        this.toasterService.show(status, message, {
            position,
            status,
        });
    }
};
AddEmployee.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"] }
];
AddEmployee = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-add-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/employee-management/add-employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-employee.component.scss */ "./src/app/pages/institute/branch-conf/employee-management/add-employee.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]])
], AddEmployee);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/employee-management/manage-employee/manage-employee.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/employee-management/manage-employee/manage-employee.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  height: 5vh; }\n\n.input-group-text {\n  background-color: #fce062;\n  color: #000; }\n\n.noRecFound {\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2VtcGxveWVlLW1hbmFnZW1lbnQvbWFuYWdlLWVtcGxveWVlL0U6XFxQcm9qZWN0c1xcRnJlZWxhbmNlIFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxlbXBsb3llZS1tYW5hZ2VtZW50XFxtYW5hZ2UtZW1wbG95ZWVcXG1hbmFnZS1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvZW1wbG95ZWUtbWFuYWdlbWVudC9tYW5hZ2UtZW1wbG95ZWUvbWFuYWdlLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNXZoO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZTA2MjtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4ubm9SZWNGb3VuZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/employee-management/manage-employee/manage-employee.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/employee-management/manage-employee/manage-employee.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ManageEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEmployee", function() { return ManageEmployee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ManageEmployee = class ManageEmployee {
    constructor(api, router, active) {
        this.api = api;
        this.router = router;
        this.active = active;
        this.employees = [];
    }
    ngOnInit() {
        this.employees = [];
        this.course = '';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            course: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [] }),
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [] }),
        });
        this.instituteId = this.active.snapshot.paramMap.get('id');
        this.getEmployees(this.instituteId);
    }
    getEmployees(instituteId) {
        this.api.getEmployeesByInstituteId(instituteId).subscribe((data) => {
            this.employees = data;
        });
    }
    view(eduAtlasId, employeeObjId) {
        this.router.navigate([`/pages/institute/branch-config/view-employee/${this.instituteId}`], {
            queryParams: { eduAtlasId, employeeObjId },
        });
    }
    edit(eduAtlasId, employeeObjId) {
        this.router.navigate([`/pages/institute/branch-config/add-employee/${this.instituteId}/edit`], {
            queryParams: { eduAtlasId, employeeObjId, edit: 'true' },
        });
    }
    delete(employeeObjId) {
        const confirm = window.confirm('Are u sure, You want to Delete this Employee?');
        if (confirm) {
            this.api.deleteEmployeeInstitute(this.instituteId, employeeObjId).subscribe(() => {
                const i = this.employees.findIndex((employee) => employee._id === employeeObjId);
                if (i !== -1) {
                    this.employees.splice(i, 1);
                }
            });
        }
    }
    onClick() {
        this.router.navigate([`/pages/institute/branch-config/add-employee/${this.instituteId}`]);
    }
};
ManageEmployee.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ManageEmployee = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-manage-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/employee-management/manage-employee/manage-employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-employee.component.scss */ "./src/app/pages/institute/branch-conf/employee-management/manage-employee/manage-employee.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], ManageEmployee);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/employee-management/view-employee/view-employee.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/employee-management/view-employee/view-employee.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9icmFuY2gtY29uZi9lbXBsb3llZS1tYW5hZ2VtZW50L3ZpZXctZW1wbG95ZWUvdmlldy1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/employee-management/view-employee/view-employee.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/employee-management/view-employee/view-employee.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ViewEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEmployee", function() { return ViewEmployee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewEmployee = class ViewEmployee {
    constructor(api, route) {
        this.api = api;
        this.route = route;
    }
    ngOnInit() {
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe((data) => {
            this.employeeEduId = data.eduAtlasId;
            this.employeeObjId = data.employeeObjId;
        });
        this.getEmployee(this.employeeObjId);
    }
    getEmployee(employeeObjId) {
        this.api
            .getOneEmployeeByInstitute({
            empId: employeeObjId,
            instituteId: this.instituteId,
        })
            .subscribe((data) => {
            this.employee = data[0];
        });
    }
};
ViewEmployee.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewEmployee = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-add-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/employee-management/view-employee/view-employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-employee.component.scss */ "./src/app/pages/institute/branch-conf/employee-management/view-employee/view-employee.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ViewEmployee);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JlY2VpcHQtY29uZi9tYW5hZ2UtcmVjZWlwdC9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxccmVjZWlwdC1jb25mXFxtYW5hZ2UtcmVjZWlwdFxcbWFuYWdlLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvcmVjZWlwdC1jb25mL21hbmFnZS1yZWNlaXB0L21hbmFnZS1yZWNlaXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ManageReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageReceiptComponent", function() { return ManageReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ManageReceiptComponent = class ManageReceiptComponent {
    constructor(api, router, route, toasterService) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.toasterService = toasterService;
        this.receipts = { businessName: '', address: '', fee: '', gstNumber: '', termsAndCondition: '' };
    }
    ngOnInit() {
        this.instituteId = this.route.snapshot.paramMap.get('id');
        this.getReceipts(this.instituteId);
    }
    getReceipts(id) {
        this.api.getReceipt(id).subscribe((data) => {
            this.receipts = JSON.parse(JSON.stringify(data));
        });
    }
    edit(id) {
        this.router.navigate([`/pages/institute/branch-config/add-receipt/${this.instituteId}`], {
            queryParams: { recieptId: id, edit: true },
        });
    }
    delete(id) {
        const confirm = window.prompt('Are u sure, You want to delete this Receipt?');
        if (confirm) {
            this.api.deleteReceipt(id).subscribe(() => {
                this.receipts = null;
                this.showToast('top-right', 'success', 'Receipt Deleted Successfully');
            }, (err) => console.error(err));
        }
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, { position, status });
    }
    onClick() {
        this.router.navigate([`/pages/institute/branch-config/add-receipt/${this.instituteId}`]);
    }
};
ManageReceiptComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }
];
ManageReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ngx-manage-receipt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-receipt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-receipt.component.scss */ "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])
], ManageReceiptComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nb-select {\n  width: 80%; }\n\n.col-sm-2 {\n  margin: 0 10px; }\n\nsmall {\n  display: block;\n  color: red;\n  margin-left: 10px; }\n\ninput,\nnb-select {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JlY2VpcHQtY29uZi9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxccmVjZWlwdC1jb25mXFxyZWNlaXB0LWNvbmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFFbkI7O0VBRUUsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JlY2VpcHQtY29uZi9yZWNlaXB0LWNvbmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1zZWxlY3Qge1xuICB3aWR0aDogODAlO1xufVxuLmNvbC1zbS0yIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5zbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlucHV0LFxubmItc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.ts ***!
  \************************************************************************************/
/*! exports provided: ReceiptConfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptConfComponent", function() { return ReceiptConfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");







let ReceiptConfComponent = class ReceiptConfComponent {
    constructor(fb, api, active, router, toasterService, location) {
        this.fb = fb;
        this.api = api;
        this.active = active;
        this.router = router;
        this.toasterService = toasterService;
        this.location = location;
        this.submitted = false;
        this.updateReceipt = { businessName: '', address: '', gstNumber: '', termsAndCondition: '', fee: '' };
        this.fees = ['Collection Basis', 'Course Fee Basis'];
    }
    ngOnInit() {
        this.instituteId = this.active.snapshot.paramMap.get('id');
        this.active.queryParams.subscribe((data) => {
            this.receiptId = data.receiptId;
            this.edit = data.edit;
            if (this.edit === 'true') {
                this.getReceipt(this.instituteId);
            }
        });
        this.receipt = this.fb.group({
            businessName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            termsAndCondition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gstNumber: [''],
        });
    }
    get f() {
        return this.receipt.controls;
    }
    getReceipt(id) {
        this.api.getReceipt(id).subscribe((data) => {
            this.updateReceipt = data;
            this.receipt.patchValue({
                businessName: this.updateReceipt.businessName,
                address: this.updateReceipt.address,
                gstNumber: this.updateReceipt.gstNumber,
                termsAndCondition: this.updateReceipt.termsAndCondition,
                fee: this.updateReceipt.fee,
            });
        }, (err) => console.error(err));
    }
    onSubmit() {
        this.submitted = true;
        this.receipt.markAllAsTouched();
        if (this.receipt.invalid) {
            return;
        }
        if (this.edit === 'true') {
            this.api.updateReceipt(this.instituteId, this.receipt.value).subscribe((data) => {
                this.showToast('top-right', 'success', 'receipt Updated Successfully');
                this.router.navigate([
                    '/pages/institute/branch-config/manage-receipt/',
                    this.instituteId,
                ]);
            }, (err) => {
                this.showToast('top-right', 'danger', err.error.message);
            });
        }
        if (!this.edit) {
            this.api.addReceipt(this.instituteId, this.receipt.value).subscribe(() => {
                this.showToast('top-right', 'success', 'Receipt Added Successfully');
                this.router.navigate([
                    '/pages/institute/branch-config/manage-receipt/',
                    this.instituteId,
                ]);
            }, (err) => {
                this.showToast('top-right', 'danger', err.error.message);
            });
        }
    }
    back() {
        this.location.back();
    }
    showToast(position, status, message) {
        this.toasterService.show(status, message, { position, status });
    }
};
ReceiptConfComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
ReceiptConfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-receipt-conf',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receipt-conf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receipt-conf.component.scss */ "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], ReceiptConfComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/role-management/role-management.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/role-management/role-management.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  display: block;\n  color: red; }\n\ninput,\nnb-select {\n  display: block; }\n\n.hide {\n  visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JvbGUtbWFuYWdlbWVudC9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxccm9sZS1tYW5hZ2VtZW50XFxyb2xlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUVaOztFQUVFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9icmFuY2gtY29uZi9yb2xlLW1hbmFnZW1lbnQvcm9sZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJlZDtcbn1cbmlucHV0LFxubmItc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGlkZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/role-management/role-management.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/role-management/role-management.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RoleManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function() { return RoleManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/role/role-assign.service */ "./src/app/services/role/role-assign.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let RoleManagementComponent = class RoleManagementComponent {
    constructor(fb, roleService, active, toasterService) {
        this.fb = fb;
        this.roleService = roleService;
        this.active = active;
        this.toasterService = toasterService;
        this.submitted = false;
        this.display = false;
        this.selectedSize = 'medium';
    }
    ngOnInit() {
        this.roleManage = this.fb.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            instituteId: this.active.snapshot.paramMap.get('id'),
        });
    }
    get f() {
        return this.roleManage.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.roleManage.invalid) {
            return;
        }
        // console.log(this.roleManage.value);
        this.roleService.addRole(this.roleManage.value).subscribe((data) => {
            // console.log(data);
            this.display = true;
            this.getOtp(this.roleManage.value.phone);
        });
    }
    getOtp(phone) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        param = param.append('register', '1');
        this.roleService.getOtp(phone, param).subscribe((res) => {
            // console.log(res);
        });
    }
    varifyOtp() {
        // console.log('otp====>', this.otp);
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        param = param.append('varifyType', 'roleAssign');
        param = param.append('phone', this.roleManage.value.phone);
        param = param.append('otp', this.otp);
        this.roleService.verifyOtp(param).subscribe((res) => {
            // console.log(res);
            this.valid('top-right', 'success');
        }, (error) => {
            // console.log(error);
            this.invalid('top-right', 'danger');
        });
    }
    valid(position, status) {
        this.toasterService.show(status || 'Success', 'Role Added Successfully', { position, status });
    }
    invalid(position, status) {
        this.toasterService.show(status || 'Danger', 'Invalid OTP', { position, status });
    }
};
RoleManagementComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_4__["RoleAssignService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }
];
RoleManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-role-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/role-management/role-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-management.component.scss */ "./src/app/pages/institute/branch-conf/role-management/role-management.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_4__["RoleAssignService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]])
], RoleManagementComponent);



/***/ })

}]);
//# sourceMappingURL=branch-conf-branch-branch-module-es2015.js.map