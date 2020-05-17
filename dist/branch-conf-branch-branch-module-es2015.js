(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch-conf-branch-branch-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/add-batches.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/add-batches.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button nbButton status=\"warning\" (click)=\"goManage()\" style=\"color: black;\">\r\n    Manage Batches\r\n  </button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Add Batches</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"batch\" (ngSubmit)=\"onSubmit()\">\r\n      <p>Course</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"course\">Select Parent Course</label>\r\n          <nb-select\r\n            placeholder=\"Select Parent Course\"\r\n            id=\"course\"\r\n            fullWidth\r\n            formControlName=\"course\"\r\n            [status]=\"f.course.errors && submitted ? 'danger' : 'basic'\"\r\n          >\r\n            <!-- <nb-option value=\"\">Select Parent Course</nb-option> -->\r\n            <nb-option *ngFor=\"let item of courses.course\" [value]=\"item._id\"\r\n              >{{ item.name }}\r\n            </nb-option>\r\n          </nb-select>\r\n          <small *ngIf=\"f.course.errors && submitted\">*course is required</small>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"code\">Unique Code</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            id=\"code\"\r\n            placeholder=\"Unique Code\"\r\n            formControlName=\"batchCode\"\r\n            required\r\n            [status]=\"f.batchCode.errors && submitted ? 'danger' : 'basic'\"\r\n          />\r\n\r\n          <small *ngIf=\"f.batchCode.errors && submitted\">*Code is required</small>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"des\">Description</label>\r\n          <textarea\r\n            name=\"description\"\r\n            id=\"des\"\r\n            cols=\"30\"\r\n            rows=\"6\"\r\n            nbInput\r\n            status=\"basic\"\r\n            fullWidth\r\n            formControlName=\"description\"\r\n            placeholder=\"Description\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"text-align: left; margin: 1rem; text-align: right;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button nbButton status=\"warning\" (click)=\"onClick()\" style=\"color: black;\">Add Batch</button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Manage Batch Here</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Course</th>\r\n          <th>Code</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let batch of batches.batch\">\r\n          <td>{{ batch.course }}</td>\r\n          <td>{{ batch.batchCode }}</td>\r\n          <td>{{ batch.description }}</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(batch._id)\">\r\n              Edit\r\n            </button>\r\n            <button nbButton status=\"danger\" (click)=\"delete(batch._id)\">\r\n              Del\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/add-course.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/add-course.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button nbButton class=\"pull right\" status=\"warning\" style=\"color: black;\" (click)=\"back()\">\r\n    MANAGE COURSES\r\n  </button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Add Course Here</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"course\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"name\">Course Name</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"name\"\r\n            fullWidth\r\n            [status]=\"f.name.errors && submitted ? 'danger' : 'basic'\"\r\n            formControlName=\"name\"\r\n            placeholder=\"Course Name\"\r\n          />\r\n          <small *ngIf=\"f.name.errors && submitted\">*Course name is req.</small>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"code\">Course Code</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"code\"\r\n            fullWidth\r\n            [status]=\"f.courseCode.errors && submitted ? 'danger' : 'basic'\"\r\n            formControlName=\"courseCode\"\r\n            placeholder=\"Course Code\"\r\n          />\r\n          <small *ngIf=\"f.courseCode.errors && submitted\">*Course code is req.</small>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"fees\">Course Fees</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            status=\"basic\"\r\n            #fees\r\n            (keyup)=\"courseFee(fees.value)\"\r\n            id=\"fees\"\r\n            formControlName=\"fees\"\r\n            placeholder=\"Course Fees\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <hr />\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"gst\">GST</label>\r\n          <input\r\n            nbInput\r\n            type=\"text\"\r\n            pattern=\"\\d*\"\r\n            fullWidth\r\n            formControlName=\"gstValue\"\r\n            #ex\r\n            (keyup)=\"exclusive(ex.value)\"\r\n            placeholder=\"Exclusive GST in %\"\r\n          />\r\n        </div>\r\n        <div class=\"col-sm-1\"><br /><br />Or</div>\r\n        <div class=\"col-sm-3\">\r\n          <br />\r\n          <nb-checkbox (checkedChange)=\"inclusiveGst($event)\" [(ngModel)]=\"gstCheckBox\" [ngModelOptions]=\"{standalone: true}\" fullWidth status=\"warning\"\r\n            >Inclusive GST</nb-checkbox\r\n          >\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label>Total Fees</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            status=\"basic\"\r\n            formControlName=\"totalFee\"\r\n            disabled=\"true\"\r\n            placeholder=\"TotalFee\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <hr />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"des\">Description</label>\r\n          <textarea\r\n            name=\"discription\"\r\n            id=\"des\"\r\n            status=\"basic\"\r\n            nbInput\r\n            fullWidth\r\n            formControlName=\"discription\"\r\n            placeholder=\"Description\"\r\n            cols=\"100\"\r\n            rows=\"4\"\r\n            id=\"dis\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"display: block; margin-top: 1rem; text-align: right;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">\r\n          {{ edit === 'true' ? 'Update Course' : 'Add Course' }}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button nbButton class=\"pull right\" status=\"warning\" style=\"color: black;\" (click)=\"onClick()\">\r\n    ADD COURSES\r\n  </button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Manage Course Here</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Course Name</th>\r\n          <th>Code</th>\r\n          <th>Fees</th>\r\n          <th>GST</th>\r\n          <th>Total Fees (Rs.)</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of courses.course; let i = index\">\r\n          <td>{{ item.name }}</td>\r\n          <td>{{ item.courseCode }}</td>\r\n          <td>{{ item.fees }}</td>\r\n          <td>{{ item.gst }}</td>\r\n          <td>&#x20B9; {{ item.totalFee }}</td>\r\n          <td style=\"text-align: right;\">\r\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(item._id)\">Edit</button>\r\n            <button nbButton status=\"danger\" (click)=\"delete(item._id)\">Del</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\r\n  <nb-card-body>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p>Id</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <span>{{ courses.id }}</span>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p>Course Name</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <span>{{ courses.name }}</span>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p>Code</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <span>{{ courses.code }}</span>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p>Fees</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <span>{{ courses.fees }}</span>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p>GST</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <span>{{ courses.gst }}</span>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p>Description</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <span>{{ courses.discription }}</span>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\"></div>\r\n      <div class=\"col-sm-5\">\r\n        <p>Total Fees</p>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <span>{{ courses.totalFee }}</span>\r\n      </div>\r\n      <div class=\"col-sm-1\"></div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/branch-conf.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/branch-conf.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/discount.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/discount.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button nbButton status=\"warning\" (click)=\"back()\" style=\"color: black;\">Manage Discount</button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Define Discount</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"discount\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"code\">Code</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            id=\"code\"\r\n            status=\"basic\"\r\n            formControlName=\"discountCode\"\r\n            [status]=\"f.discountCode.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Code\"\r\n          />\r\n          <small *ngIf=\"f.discountCode.errors && submitted\" style=\"display: block;\"\r\n            >*This field req</small\r\n          >\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"amt\">Amount in %</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            id=\"amt\"\r\n            status=\"basic\"\r\n            formControlName=\"amount\"\r\n            [status]=\"f.amount.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Amount in %\"\r\n          />\r\n          <small *ngIf=\"f.amount.errors && submitted\" style=\"display: block;\"\r\n            >*This field req</small\r\n          >\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mt-3\">\r\n        <label for=\"des\">Description</label>\r\n        <textarea\r\n          name=\"discription\"\r\n          nbInput\r\n          id=\"des\"\r\n          fullWidth\r\n          status=\"basic\"\r\n          cols=\"40\"\r\n          rows=\"4\"\r\n          formControlName=\"description\"\r\n          placeholder=\"Description(Optional)\"\r\n        ></textarea>\r\n      </div>\r\n      <div class=\"mt-4\" style=\"text-align: right;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n<button nbButton status=\"warning\" (click)=\"onClick()\" style=\"color:black;\">Add Discount</button>\r\n</div>\r\n<p style=\"color:black; font-weight:bold\">Manage Discoint Here</p>\r\n<nb-card>\r\n\t<nb-card-body>\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\r\n\t\t\t\t\t<th>Code</th>\r\n\t\t\t\t\t<th>Amount In %</th>\r\n\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let item of discounts.discount;let i=index\">\r\n\t\t\t\t\r\n\t\t\t\t\t<td>{{item.discountCode}}</td>\r\n\t\t\t\t\t<td>{{item.amount}}</td>\r\n\t\t\t\t\t<td>{{item.description}}</td>\r\n\t\t\t\t\t<td class=\"text-right\">\r\n\t\t\t\t\t\t<button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(item._id)\">Edit</button>\r\n\t\t\t\t\t\t<button nbButton status=\"danger\" (click)=\"delete(item._id)\">Del</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button nbButton status=\"warning\" (click)=\"onClick()\" style=\"color: black;\" [hidden]=\"receipts\">Add Receipt</button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Manage Reciept</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Business Name</th>\r\n          <th>Address</th>\r\n          <th>GST Number</th>\r\n          <th>Terms & Conditions</th>\r\n          <th>Fee</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngIf=\"receipts\">\r\n          <td>{{ receipts.businessName }}</td>\r\n          <td>{{ receipts.address }}</td>\r\n          <td>{{ receipts.gstNumber }}</td>\r\n          <td>{{ receipts.termsAndCondition }}</td>\r\n          <td>{{ receipts.fee }}</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(routerId)\">Edit</button>\r\n            <button nbButton status=\"danger\" (click)=\"delete(routerId)\">Del</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-right\">\r\n  <button (click)=\"back()\" nbButton status=\"warning\" style=\"color: black;\">Manage Receipt</button>\r\n</div>\r\n<p style=\"font-weight: bold;\">Reciept Configuration</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"receipt\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"name\">Business Name</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"name\"\r\n            fullWidth\r\n            status=\"basic\"\r\n            formControlName=\"businessName\"\r\n            [status]=\"f.businessName.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Business Name\"\r\n          />\r\n          <small *ngIf=\"f.businessName.errors && submitted\">*Business Name is Required</small>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"gst\">GST Number (Optional)</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            id=\"gst\"\r\n            status=\"basic\"\r\n            formControlName=\"gstNumber\"\r\n            placeholder=\"GST Number (optional)\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"fee\">Fee</label>\r\n          <nb-select\r\n            placeholder=\"Fee\"\r\n            id=\"fee\"\r\n            status=\"basic\"\r\n            [status]=\"f.fee.errors && submitted ? 'danger' : 'basic'\"\r\n            formControlName=\"fee\"\r\n          >\r\n            <nb-option *ngFor=\"let item of fees\" [value]=\"item\">{{ item }}</nb-option>\r\n          </nb-select>\r\n          <small *ngIf=\"f.fee.errors && submitted\">*Fee is Required</small>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"address\">Address</label>\r\n\r\n          <textarea\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            status=\"basic\"\r\n            formControlName=\"address\"\r\n            rows=\"5\"\r\n            [status]=\"f.address.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Address\"\r\n          >\r\n          </textarea>\r\n\r\n          <small *ngIf=\"f.address.errors && submitted\">*Address is Required</small>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"tc\">Terms & Conditions</label>\r\n          <textarea\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"tc\"\r\n            status=\"basic\"\r\n            fullWidth\r\n            formControlName=\"termsAndCondition\"\r\n            [status]=\"f.termsAndCondition.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Terms and Condtions\"\r\n            cols=\"15\"\r\n            rows=\"7\"\r\n          >\r\n          </textarea>\r\n          <small *ngIf=\"f.termsAndCondition.errors && submitted\">*Terms & Conditions is Required</small>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"text-align: right; margin: 1rem;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">\r\n          {{ edit ? 'Update' : 'Add' }}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/role-management/role-management.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/role-management/role-management.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p style=\"font-weight:bold\">Role Management</p>\r\n    <nb-card>\r\n      \r\n      <nb-card-body *ngIf=\"!display\">\r\n        <form [formGroup]=\"roleManage\" (ngSubmit)=\"onSubmit()\">\r\n         \r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <label for=\"phone\">*Phone Number</label>\r\n                <input type=\"phone\" nbInput id=\"phone\" maxlength=\"10\" fullWidth [status]=\"f.phone.errors && submitted ? 'danger':'basic'\" formControlName=\"phone\" placeholder=\"Phone Number\">\r\n                <small *ngIf=\"f.phone.errors && submitted\">*Phone Number is required</small>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <label>*Password</label>\r\n                <input type=\"password\" nbInput fullWidth formControlName=\"password\" placeholder=\"Password\" \r\n                [status]=\"f.phone.errors && submitted ? 'danger':'basic'\">\r\n                <small *ngIf=\"f.password.errors && submitted\">*Password is required</small>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                  <label for=\"role\">*Assign Role</label>\r\n                      <nb-select status=\"basic\" id=\"role\" formControlName=\"role\" fullWidth [size]=\"selectedSize\" placeholder=\"Assign Role\">\r\n                        <nb-option value=\"branchManager\">Branch Manager</nb-option>\r\n                        <nb-option value=\"teacher\">Teacher</nb-option>\r\n                        <nb-option value=\"councillor\">Counselor</nb-option>\r\n                </nb-select>\r\n                <small *ngIf=\"f.role.errors && submitted\">*Role is required</small>\r\n       \r\n              </div>\r\n            \r\n              </div>\r\n              <div style=\"margin: 1rem; text-align:right\">\r\n                <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">Submit</button>\r\n              </div>\r\n          \r\n     \r\n        </form>\r\n        </nb-card-body>\r\n        <nb-card-body [ngClass]=\"{'hide':!display}\">\r\n          <input type=\"text\" maxlength=\"4\" [(ngModel)]=otp nbInput placeholder=\"Enter OTP\">\r\n          <a class=\"btn btn-link\">Resend OTP</a>\r\n          <button nbButton (click)=\"varifyOtp()\">Varify OTP</button>\r\n        </nb-card-body>\r\n        </nb-card>\r\n\r\n        \r\n    \r\n");

/***/ }),

/***/ "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/add-batches/add-batches.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,\nnb-select,\ntextarea {\n  display: block; }\n\nsmall {\n  color: red; }\n\np {\n  color: black;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1iYXRjaGVzL0Y6XFxBa2FzaFxcUHJvamVjdHNcXEVkdUF0bGFzXFxlZHVhdGxhczFcXFBoYXNlXzFcXGVkdUF0bGFzLWNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGluc3RpdHV0ZVxcYnJhbmNoLWNvbmZcXGFkZC1iYXRjaGVzXFxhZGQtYmF0Y2hlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFlBQVk7RUFDWixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9icmFuY2gtY29uZi9hZGQtYmF0Y2hlcy9hZGQtYmF0Y2hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LFxyXG5uYi1zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuc21hbGwge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxucCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */");

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
    constructor(fb, api, active, router, location, toasterService) {
        this.fb = fb;
        this.api = api;
        this.active = active;
        this.router = router;
        this.location = location;
        this.toasterService = toasterService;
        this.courses = { course: [] };
        this.batchUpdate = { batchCode: '', description: '', course: '' };
        this.linearMode = true;
        this.submitted = false;
    }
    ngOnInit() {
        this.active.queryParams.subscribe((data) => {
            console.log(data);
            this.batchId = data.batchId;
            this.edit = data.edit;
        });
        this.routerId = this.active.snapshot.paramMap.get('id');
        console.log('institute Id ' + this.routerId);
        this.getBatch(this.batchId, this.routerId);
        this.getCourses(this.routerId);
        this.batch = this.fb.group({
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            batchCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [''],
        });
        console.log('===============>', this.courses);
    }
    getBatch(id, instituteId) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        param = param.append('instituteId', instituteId);
        param = param.append('batchId', id);
        this.api.getBatch(param).subscribe((data) => {
            console.log(data);
            this.batchUpdate = JSON.parse(JSON.stringify(data[0]));
            console.log('batchInfo' + this.batchUpdate.batchCode);
        });
    }
    getCourses(id) {
        this.api.getCourses(id).subscribe((data) => {
            this.courses = JSON.parse(JSON.stringify(data));
            console.log(this.courses);
            this.batch.patchValue({
                course: this.batchUpdate.course,
                batchCode: this.batchUpdate.batchCode,
                description: this.batchUpdate.description,
            });
        });
    }
    get f() {
        return this.batch.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.batch.invalid) {
            return;
        }
        if (this.edit === 'true') {
            let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
            param = param.append('instituteId', this.routerId);
            param = param.append('batchId', this.batchId);
            this.api.updateBatch(param, this.batch.value).subscribe((res) => {
                this.showToast('top-right', 'success', 'Successfully Updated');
                this.router.navigate(['/pages/institute/branch-config/manage-batch/', this.routerId]);
            }, (error) => {
                console.log(error);
                this.invalid('top-right', 'danger', error.error.message);
            });
        }
        console.log('batch => ', this.batch.value);
        if (!this.edit) {
            this.api.addBatch(this.routerId, this.batch.value).subscribe(() => {
                console.log('successfully added');
                this.showToast('top-right', 'success', 'Successfully Added');
                setTimeout(() => {
                    this.router.navigate(['/pages/institute/branch-config/manage-batch/', this.routerId]);
                }, 1000);
            }, (err) => {
                console.error(err);
                this.invalid('top-right', 'danger', err.error.message);
            });
        }
    }
    showToast(position, status, message) {
        this.toasterService.show(status || 'Success', message, { position, status });
    }
    invalid(position, status, errMessage) {
        this.toasterService.show(status || 'Danger', errMessage, {
            position,
            status,
        });
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
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1iYXRjaGVzL21hbmFnZS1iYXRjaC9GOlxcQWthc2hcXFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxQaGFzZV8xXFxlZHVBdGxhcy1jbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxhZGQtYmF0Y2hlc1xcbWFuYWdlLWJhdGNoXFxtYW5hZ2UtYmF0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUNELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvYWRkLWJhdGNoZXMvbWFuYWdlLWJhdGNoL21hbmFnZS1iYXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG5cdHdpZHRoOjEwMCVcclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ManageBatchComponent = class ManageBatchComponent {
    constructor(api, router, active, http) {
        this.api = api;
        this.router = router;
        this.active = active;
        this.http = http;
        this.batches = { batch: [{ _id: '', course: '', batchCode: '', description: '' }] };
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
    }
    ngOnInit() {
        this.routerId = this.active.snapshot.paramMap.get('id');
        this.getBatches(this.routerId);
    }
    getBatches(id) {
        this.api.getBatches(id).subscribe((data) => {
            this.batches = JSON.parse(JSON.stringify(data));
            console.dir('my batch' + this.batches);
        });
    }
    edit(id) {
        this.router.navigate([`/pages/institute/branch-config/add-batch/${this.routerId}`], {
            queryParams: { batchId: id, edit: true },
        });
    }
    delete(id) {
        console.log(id);
        this.params = this.params.append('instituteId', this.routerId);
        this.params = this.params.append('batchId', id);
        this.api.deleteBatch(this.params).subscribe(() => console.log('successfully delete'), (err) => console.error(err));
        const i = this.batches.batch.findIndex((e) => e._id == id);
        if (i !== -1) {
            this.batches.batch.splice(i, 1);
        }
    }
    onClick() {
        this.router.navigate(['/pages/institute/branch-config/add-batch', this.routerId]);
    }
};
ManageBatchComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ManageBatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-manage-batch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-batch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-batch.component.scss */ "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  color: red; }\n\ninput, textarea, nb-select {\n  display: block;\n  width: 100%; }\n\np {\n  color: black;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2UvRjpcXEFrYXNoXFxQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcUGhhc2VfMVxcZWR1QXRsYXMtY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxcYWRkLWNvdXJzZVxcYWRkLWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBRWY7RUFBRSxZQUFXO0VBQUMsaUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvYWRkLWNvdXJzZS9hZGQtY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnNtYWxse1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5pbnB1dCx0ZXh0YXJlYSxuYi1zZWxlY3R7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbnB7Y29sb3I6YmxhY2s7Zm9udC13ZWlnaHQ6Ym9sZH1cclxuIl19 */");

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
    constructor(fb, api, active, location, toasterService, router) {
        this.fb = fb;
        this.api = api;
        this.active = active;
        this.location = location;
        this.toasterService = toasterService;
        this.router = router;
        this.submitted = false;
        this.institutes = [];
        this.institute = [];
        // students:any[]=[];
        this.display = false;
        this.exclusiveGst = null;
        this.fees = null;
        this.updateCourse = {
            courseCode: '',
            name: '',
            fees: '',
            gst: '',
            gstValue: '',
            discription: '',
            totalFee: '',
        };
    }
    ngOnInit() {
        this.routerId = this.active.snapshot.paramMap.get('id');
        this.active.queryParams.subscribe((data) => {
            console.log(data);
            this.courseId = data.courseId;
            this.edit = data.edit;
        });
        if (this.edit === 'true') {
            this.getCourse(this.courseId);
        }
        this.course = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            courseCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fees: [''],
            gst: [''],
            gstValue: [''],
            discription: [''],
            totalFee: [''],
        });
        this.inclusiveGst(false);
    }
    getCourse(id) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]();
        param = param.append('instituteId', this.routerId);
        param = param.append('courseId', id);
        this.api.getCourse(param).subscribe((data) => {
            console.log('getCourse ' + JSON.stringify(data[0]));
            this.updateCourse = JSON.parse(JSON.stringify(data[0]));
            console.log('getOcurse ' + this.updateCourse.courseCode);
            console.log(this.updateCourse);
            this.course.patchValue({
                name: this.updateCourse.name,
                courseCode: this.updateCourse.courseCode,
                fees: this.updateCourse.fees,
                gst: this.updateCourse.gst,
                gstValue: this.updateCourse.gstValue,
                discription: this.updateCourse.discription,
                totalFee: this.updateCourse.totalFee,
            });
            if (this.updateCourse.gst == 'Inclusive') {
                this.gstCheckBox = true;
                this.course.get('gstValue').disable();
            }
            else {
                this.gstCheckBox = false;
                this.exclusiveGst = Number(this.updateCourse.gstValue);
            }
            this.fees = Number(this.updateCourse.fees);
        }, (error) => console.log(error));
    }
    getInstitutes() {
        this.api.getInstitutes().subscribe((data) => {
            this.institutes = data;
            console.log('institutes - ' + JSON.stringify(this.institutes));
            this.institute = JSON.parse(JSON.stringify(this.institutes));
            console.log(this.institute);
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
        if (this.course.invalid) {
            return;
        }
        console.log('editMode ' + this.edit);
        if (this.edit === 'true') {
            let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]();
            param = param.append('instituteId', this.routerId);
            param = param.append('courseId', this.courseId);
            this.api.updateCourse(param, this.course.value).subscribe((res) => {
                console.log(res);
                this.showToast('top-right', 'success', 'Course Updated');
                setTimeout(() => {
                    this.router.navigate(['/pages/institute/branch-config/manage-course/', this.routerId]);
                }, 1000);
            }, (error) => {
                console.log(error);
                this.showToast('top-right', 'danger', 'Course Updation Failed');
            });
        }
        console.log(this.course.value);
        if (!this.edit) {
            this.api.addCourse(this.routerId, this.course.value).subscribe((data) => {
                console.log(data);
                this.showToast('top-right', 'success', 'Course Added Successfully');
                setTimeout(() => {
                    this.router.navigate(['/pages/institute/branch-config/manage-course/', this.routerId]);
                }, 1000);
            }, (err) => {
                console.error(err);
                this.invalid('top-right', 'danger', err.error.message);
            });
        }
    }
    inclusiveGst(event) {
        var inclusive = event;
        if (inclusive) {
            this.course.get('gstValue').disable();
            this.course.patchValue({
                gst: 'Inclusive',
            });
        }
        if (!inclusive || null) {
            this.course.get('gstValue').enable();
            this.course.patchValue({
                gst: 'Exclusive',
            });
        }
        this.calculateTotalFees();
    }
    calculateTotalFees() {
        let total = 0;
        if (this.course.get('gst').value == 'Inclusive') {
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
        console.log('exclusive ', this.exclusiveGst);
        let total = this.fees + (this.exclusiveGst / 100) * this.fees;
        console.log('type ', typeof this.fees, this.fees);
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
        this.toasterService.show(status || 'Success', message, {
            position,
            status,
        });
    }
    invalid(position, status, errorMessage) {
        if (errorMessage) {
            this.toasterService.show(status || 'Danger', errorMessage, {
                position,
                status,
            });
        }
        else {
            this.toasterService.show(status || 'Danger', 'This course id already added', {
                position,
                status,
            });
        }
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
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2UvbWFuYWdlLWNvdXJzZS9GOlxcQWthc2hcXFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxQaGFzZV8xXFxlZHVBdGxhcy1jbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxhZGQtY291cnNlXFxtYW5hZ2UtY291cnNlXFxtYW5hZ2UtY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2UvbWFuYWdlLWNvdXJzZS9tYW5hZ2UtY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

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
        this.courses = {
            course: [
                { courseCode: '', discription: '', fees: '', gst: '', name: '', totalFee: '', _id: '' },
            ],
        };
        this.institutes = [];
        this.institute = [];
        // students:any[]=[];
        this.display = false;
    }
    ngOnInit() {
        this.routerId = this.active.snapshot.paramMap.get('id');
        this.getCourses(this.routerId);
    }
    getCourses(id) {
        this.api.getCourses(id).subscribe((data) => {
            //console.log(data);
            //this.courses = JSON.stringify(data);
            const course = JSON.stringify(data);
            this.courses = JSON.parse(course);
            console.log('=======> ', this.courses);
        });
    }
    delete(id) {
        console.log(id);
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        param = param.append('instituteId', this.routerId);
        param = param.append('courseId', id);
        this.api.deleteCourse(param).subscribe((res) => console.log(res), (error) => console.log(error));
        const i = this.courses.course.findIndex((e) => e._id == id);
        if (i !== -1) {
            this.courses.course.splice(i, 1);
        }
    }
    edit(id) {
        this.router.navigate([`/pages/institute/branch-config/add-courses/${this.routerId}`], {
            queryParams: { courseId: id, edit: true },
        });
    }
    onClick() {
        this.router.navigate(['/pages/institute/branch-config/add-courses/', this.routerId]);
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
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2Uvdmlldy1jb3Vyc2UvRjpcXEFrYXNoXFxQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcUGhhc2VfMVxcZWR1QXRsYXMtY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxcYWRkLWNvdXJzZVxcdmlldy1jb3Vyc2VcXHZpZXctY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvYWRkLWNvdXJzZS92aWV3LWNvdXJzZS92aWV3LWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */");

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
        this.routerId = +this.active.snapshot.paramMap.get('id');
        console.log(this.active.snapshot.paramMap);
        this.api.getCourse(this.routerId).subscribe((data) => {
            console.log(data);
            this.courses = data;
        }, (err) => console.log(err));
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
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  color: red; }\n\ninput,\ntextarea {\n  margin: 10px; }\n\na {\n  margin: 1rem; }\n\n.active {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL0Y6XFxBa2FzaFxcUHJvamVjdHNcXEVkdUF0bGFzXFxlZHVhdGxhczFcXFBoYXNlXzFcXGVkdUF0bGFzLWNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGluc3RpdHV0ZVxcYnJhbmNoLWNvbmZcXGJyYW5jaC1jb25mLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVSxFQUFBOztBQUVaOztFQUVFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9icmFuY2gtY29uZi9icmFuY2gtY29uZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNtYWxsIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbmEge1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _discount_discount_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../discount/discount.component */ "./src/app/pages/institute/branch-conf/discount/discount.component.ts");
/* harmony import */ var _receipt_conf_receipt_conf_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../receipt-conf/receipt-conf.component */ "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.ts");
/* harmony import */ var _branch_conf_add_course_manage_course_manage_course_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../branch-conf/add-course/manage-course/manage-course.component */ "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.ts");
/* harmony import */ var _branch_conf_add_course_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../branch-conf/add-course/view-course/view-course.component */ "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.ts");
/* harmony import */ var _branch_conf_add_batches_manage_batch_manage_batch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../branch-conf/add-batches/manage-batch/manage-batch.component */ "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.ts");
/* harmony import */ var _branch_conf_discount_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../branch-conf/discount/manage-discount/manage-discount.component */ "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.ts");
/* harmony import */ var _branch_conf_receipt_conf_manage_receipt_manage_receipt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../branch-conf/receipt-conf/manage-receipt/manage-receipt.component */ "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.ts");


















let BranchModule = class BranchModule {
};
BranchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _branch_conf_component__WEBPACK_IMPORTED_MODULE_4__["BranchConfComponent"],
            _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_5__["AddCourseComponent"],
            _add_batches_add_batches_component__WEBPACK_IMPORTED_MODULE_6__["AddBatchesComponent"],
            _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_8__["RoleManagementComponent"],
            _discount_discount_component__WEBPACK_IMPORTED_MODULE_11__["DiscountComponent"],
            _receipt_conf_receipt_conf_component__WEBPACK_IMPORTED_MODULE_12__["ReceiptConfComponent"],
            _branch_conf_add_course_manage_course_manage_course_component__WEBPACK_IMPORTED_MODULE_13__["ManageCourseComponent"],
            _branch_conf_add_course_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_14__["ViewCourseComponent"],
            _branch_conf_add_batches_manage_batch_manage_batch_component__WEBPACK_IMPORTED_MODULE_15__["ManageBatchComponent"],
            _branch_conf_discount_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_16__["ManageDiscountComponent"],
            _branch_conf_receipt_conf_manage_receipt_manage_receipt_component__WEBPACK_IMPORTED_MODULE_17__["ManageReceiptComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _branch_routing_module__WEBPACK_IMPORTED_MODULE_7__["BranchRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAccordionModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"]
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
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  color: red;\n  margin: 0 1rem; }\n\ninput,\ntextarea {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2Rpc2NvdW50L0Y6XFxBa2FzaFxcUHJvamVjdHNcXEVkdUF0bGFzXFxlZHVhdGxhczFcXFBoYXNlXzFcXGVkdUF0bGFzLWNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGluc3RpdHV0ZVxcYnJhbmNoLWNvbmZcXGRpc2NvdW50XFxkaXNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBRWhCOztFQUVFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9icmFuY2gtY29uZi9kaXNjb3VudC9kaXNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNtYWxsIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbjogMCAxcmVtO1xyXG59XHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */");

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
        this.discountUpdate = { discountCode: '', description: '', amount: '', _id: '' };
        this.submitted = false;
    }
    ngOnInit() {
        this.routerId = this.active.snapshot.paramMap.get('id');
        this.active.queryParams.subscribe((data) => {
            console.log(data);
            this.edit = data.edit;
            this.discountId = data.discountId;
            if (this.edit) {
                this.getDiscount(this.discountId);
            }
        });
        this.discount = this.fb.group({
            discountCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [''],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    getDiscount(id) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        param = param.append('instituteId', this.routerId);
        param = param.append('discountId', id);
        this.api.getDiscount(param).subscribe((data) => {
            console.log('discount Data ', data);
            this.discountUpdate = JSON.parse(JSON.stringify(data[0]));
            console.log('CODE ', this.discountUpdate.discountCode);
            this.discount.patchValue({
                discountCode: this.discountUpdate.discountCode,
                description: this.discountUpdate.description,
                amount: this.discountUpdate.amount,
            });
        });
    }
    get f() {
        return this.discount.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.discount.invalid) {
            return;
        }
        if (this.edit === 'true') {
            let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            param = param.append('instituteId', this.routerId);
            param = param.append('discountId', this.discountId);
            this.api.updateDiscount(param, this.discount.value).subscribe((res) => {
                console.log(res);
                this.showToast('top-right', 'success', 'Discount Updated');
                setTimeout(() => {
                    this.router.navigate([
                        '/pages/institute/branch-config/manage-discount/',
                        this.routerId,
                    ]);
                }, 1000);
            }, (error) => {
                console.log(error);
                this.showToast('top-right', 'danger', 'Discount Updation Failed');
            });
        }
        else {
            console.log(this.discount.value);
            this.api.addDiscount(this.routerId, this.discount.value).subscribe((data) => {
                console.log('add success' + ' ' + data);
                this.showToast('top-right', 'success', 'Discount Added Successfully');
                setTimeout(() => {
                    this.router.navigate([
                        '/pages/institute/branch-config/manage-discount/',
                        this.routerId,
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
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2Rpc2NvdW50L21hbmFnZS1kaXNjb3VudC9GOlxcQWthc2hcXFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxQaGFzZV8xXFxlZHVBdGxhcy1jbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxkaXNjb3VudFxcbWFuYWdlLWRpc2NvdW50XFxtYW5hZ2UtZGlzY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvZGlzY291bnQvbWFuYWdlLWRpc2NvdW50L21hbmFnZS1kaXNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ManageDiscountComponent = class ManageDiscountComponent {
    constructor(api, router, active) {
        this.api = api;
        this.router = router;
        this.active = active;
        this.discounts = { discount: [{ discountCode: '', description: '', _id: '', amount: '' }] };
    }
    ngOnInit() {
        this.routerId = this.active.snapshot.paramMap.get('id');
        this.getDiscounts(this.routerId);
    }
    getDiscounts(id) {
        this.api.getDiscounts(id).subscribe(data => {
            console.log(data);
            const dis = JSON.stringify(data);
            this.discounts = JSON.parse(dis);
            console.log('Discount' + this.discounts);
        }, err => console.error(err));
    }
    ;
    edit(id) {
        this.router.navigate([`/pages/institute/branch-config/add-discount/${this.routerId}`], { queryParams: { discountId: id, edit: true } });
    }
    delete(id) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        param = param.append('instituteId', this.routerId);
        param = param.append('discountId', id);
        this.api.deleteDiscount(param).subscribe(() => console.log('successfully deleted'), err => console.error(err));
        const i = this.discounts.discount.findIndex(e => e._id == id);
        if (i !== -1) {
            this.discounts.discount.splice(i, 1);
        }
    }
    onClick() {
        this.router.navigate(['/pages/institute/branch-config/add-discount/', this.routerId]);
    }
};
ManageDiscountComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ManageDiscountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-manage-discount',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-discount.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-discount.component.scss */ "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ManageDiscountComponent);



/***/ }),

/***/ "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JlY2VpcHQtY29uZi9tYW5hZ2UtcmVjZWlwdC9GOlxcQWthc2hcXFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxQaGFzZV8xXFxlZHVBdGxhcy1jbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxyZWNlaXB0LWNvbmZcXG1hbmFnZS1yZWNlaXB0XFxtYW5hZ2UtcmVjZWlwdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9icmFuY2gtY29uZi9yZWNlaXB0LWNvbmYvbWFuYWdlLXJlY2VpcHQvbWFuYWdlLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ManageReceiptComponent = class ManageReceiptComponent {
    constructor(api, router, active) {
        this.api = api;
        this.router = router;
        this.active = active;
        this.receipts = { businessName: '', address: '', fee: '', gstNumber: '', termsAndCondition: '' };
    }
    ngOnInit() {
        this.routerId = this.active.snapshot.paramMap.get('id');
        this.getReceipts(this.routerId);
    }
    getReceipts(id) {
        this.api.getReceipt(id).subscribe((data) => {
            this.receipts = JSON.parse(JSON.stringify(data));
        });
    }
    edit(id) {
        this.router.navigate([`/pages/institute/branch-config/add-receipt/${this.routerId}`], {
            queryParams: { recieptId: id, edit: true },
        });
    }
    delete(id) {
        this.api.deleteReceipt(id).subscribe(() => {
            this.receipts = null;
        }, (err) => console.error(err));
        // const i = this.receipts.reciepts.findIndex(e => e.id == id)
        // if(i !== -1){
        // this.receipts.splice(i,1);
        // }
    }
    onClick() {
        this.router.navigate([`/pages/institute/branch-config/add-receipt/${this.routerId}`]);
    }
};
ManageReceiptComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ManageReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngx-manage-receipt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-receipt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-receipt.component.scss */ "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("nb-select {\n  width: 80%; }\n\n.col-sm-2 {\n  margin: 0 10px; }\n\nsmall {\n  display: block;\n  color: red;\n  margin-left: 10px; }\n\ninput,\nnb-select {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JlY2VpcHQtY29uZi9GOlxcQWthc2hcXFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxQaGFzZV8xXFxlZHVBdGxhcy1jbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxyZWNlaXB0LWNvbmZcXHJlY2VpcHQtY29uZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUVuQjs7RUFFRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvcmVjZWlwdC1jb25mL3JlY2VpcHQtY29uZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLXNlbGVjdCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4uY29sLXNtLTIge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbnNtYWxsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbmlucHV0LFxyXG5uYi1zZWxlY3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */");

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
    constructor(fb, api, active, router, toasterSevice, location) {
        this.fb = fb;
        this.api = api;
        this.active = active;
        this.router = router;
        this.toasterSevice = toasterSevice;
        this.location = location;
        this.submitted = false;
        this.updateReciept = { businessName: '', address: '', gstNumber: '', termsAndCondition: '', fee: '' };
        this.fees = ['Collection Basis', 'Course Fee Basis'];
    }
    ngOnInit() {
        this.routerId = this.active.snapshot.paramMap.get('id');
        this.active.queryParams.subscribe((data) => {
            this.recieptId = data.receiptId;
            this.edit = data.edit;
            if (this.edit === 'true') {
                this.getReciept(this.routerId);
            }
        });
        this.receipt = this.fb.group({
            businessName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gstNumber: [''],
            termsAndCondition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get f() {
        return this.receipt.controls;
    }
    getReciept(id) {
        this.api.getReceipt(id).subscribe((data) => {
            this.updateReciept = data;
            this.receipt.patchValue({
                businessName: this.updateReciept.businessName,
                address: this.updateReciept.address,
                gstNumber: this.updateReciept.gstNumber,
                termsAndCondition: this.updateReciept.termsAndCondition,
                fee: this.updateReciept.fee,
            });
        }, (err) => console.log(err));
    }
    onSubmit() {
        this.submitted = true;
        if (this.receipt.invalid) {
            return;
        }
        if (this.edit === 'true') {
            this.api.updateReceipt(this.routerId, this.receipt.value).subscribe((data) => {
                this.message = 'Reciept Updated Successfully';
                this.showToast('top-right', 'success');
                this.router.navigate(['/pages/institute/branch-config/manage-receipt/', this.routerId]);
            }, (err) => {
                this.message = err.error.message;
                this.invalidToast('top-right', 'danger');
            });
        }
        if (!this.edit) {
            this.api.addReceipt(this.routerId, this.receipt.value).subscribe(() => {
                this.message = 'Reciept Added Successfully';
                this.showToast('top-right', 'success');
                this.router.navigate(['/pages/institute/branch-config/manage-receipt/', this.routerId]);
            }, (err) => {
                this.message = err.error.message;
                this.invalidToast('top-right', 'danger');
            });
        }
    }
    back() {
        this.location.back();
    }
    showToast(position, status) {
        this.toasterSevice.show(status || 'Success', `${this.message}`, { position, status });
    }
    invalidToast(position, status) {
        this.toasterSevice.show(status || 'Danger', `${this.message}`, { position, status });
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
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  display: block;\n  color: red; }\n\ninput,\nnb-select {\n  display: block; }\n\n.hide {\n  visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JvbGUtbWFuYWdlbWVudC9GOlxcQWthc2hcXFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxQaGFzZV8xXFxlZHVBdGxhcy1jbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxyb2xlLW1hbmFnZW1lbnRcXHJvbGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBRVo7O0VBRUUsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JvbGUtbWFuYWdlbWVudC9yb2xlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5pbnB1dCxcclxubmItc2VsZWN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaGlkZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbiJdfQ== */");

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
        console.log(this.roleManage.value);
        this.roleService.addRole(this.roleManage.value).subscribe((data) => {
            console.log(data);
            this.display = true;
            this.getOtp(this.roleManage.value.phone);
        }, (error) => console.log(error));
    }
    getOtp(phone) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        param = param.append('register', '1');
        this.roleService.getOtp(phone, param).subscribe((res) => console.log(res));
    }
    varifyOtp() {
        console.log('otp====>', this.otp);
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        param = param.append('varifyType', 'roleAssign');
        param = param.append('phone', this.roleManage.value.phone);
        param = param.append('otp', this.otp);
        this.roleService.verifyOtp(param).subscribe((res) => {
            console.log(res);
            this.valid('top-right', 'success');
        }, (error) => {
            console.log(error);
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



/***/ }),

/***/ "./src/app/services/role/role-assign.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/role/role-assign.service.ts ***!
  \******************************************************/
/*! exports provided: RoleAssignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAssignService", function() { return RoleAssignService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let RoleAssignService = class RoleAssignService {
    constructor(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('authorization', 'Bearer ' + this.token);
        this.httpOptions = {
            headers: this.headers,
        };
    }
    addRole(role) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server}/institute/role`, role, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((data) => console.log(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    getOtp(phone, params) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server}/users/sendOTP/${phone}`, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => console.log(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    verifyOtp(params) {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server + '/users/varifyOTP', { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => console.log(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => this.handleError(err)));
    }
    handleError(error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
};
RoleAssignService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RoleAssignService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], RoleAssignService);



/***/ })

}]);
//# sourceMappingURL=branch-conf-branch-branch-module-es2015.js.map