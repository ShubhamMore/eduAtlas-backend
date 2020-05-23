function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch-conf-branch-branch-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/add-batches.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/add-batches.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfAddBatchesAddBatchesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-right\">\r\n  <button nbButton status=\"warning\" (click)=\"goManage()\" style=\"color: black;\">\r\n    Manage Batches\r\n  </button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Add Batches</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"batch\" (ngSubmit)=\"onSubmit()\">\r\n      <p>Course</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"course\">Select Parent Course</label>\r\n          <nb-select\r\n            placeholder=\"Select Parent Course\"\r\n            id=\"course\"\r\n            fullWidth\r\n            formControlName=\"course\"\r\n            [status]=\"f.course.errors && submitted ? 'danger' : 'basic'\"\r\n          >\r\n            <!-- <nb-option value=\"\">Select Parent Course</nb-option> -->\r\n            <nb-option *ngFor=\"let item of courses.course\" [value]=\"item._id\"\r\n              >{{ item.name }}\r\n            </nb-option>\r\n          </nb-select>\r\n          <small *ngIf=\"f.course.errors && submitted\">*course is required</small>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"code\">Unique Code</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            id=\"code\"\r\n            placeholder=\"Unique Code\"\r\n            formControlName=\"batchCode\"\r\n            required\r\n            [status]=\"f.batchCode.errors && submitted ? 'danger' : 'basic'\"\r\n          />\r\n\r\n          <small *ngIf=\"f.batchCode.errors && submitted\">*Code is required</small>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"des\">Description</label>\r\n          <textarea\r\n            name=\"description\"\r\n            id=\"des\"\r\n            cols=\"30\"\r\n            rows=\"6\"\r\n            nbInput\r\n            status=\"basic\"\r\n            fullWidth\r\n            formControlName=\"description\"\r\n            placeholder=\"Description\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"text-align: left; margin: 1rem; text-align: right;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfAddBatchesManageBatchManageBatchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-right\">\n  <button nbButton status=\"warning\" (click)=\"onClick()\" style=\"color: black;\">Add Batch</button>\n</div>\n<p style=\"color: black; font-weight: bold;\">Manage Batch Here</p>\n<nb-card>\n  <nb-card-body>\n    <table>\n      <thead>\n        <tr>\n          <th>Course</th>\n          <th>Code</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let batch of batches.batch\">\n          <td>{{ batch.course }}</td>\n          <td>{{ batch.batchCode }}</td>\n          <td>{{ batch.description }}</td>\n          <td class=\"text-right\">\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(batch._id)\">\n              Edit\n            </button>\n            <button nbButton status=\"danger\" (click)=\"delete(batch._id)\">\n              Del\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/add-course.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/add-course.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfAddCourseAddCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-right\">\r\n  <button nbButton class=\"pull right\" status=\"warning\" style=\"color: black;\" (click)=\"back()\">\r\n    MANAGE COURSES\r\n  </button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Add Course Here</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"course\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"name\">Course Name</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"name\"\r\n            fullWidth\r\n            [status]=\"f.name.errors && submitted ? 'danger' : 'basic'\"\r\n            formControlName=\"name\"\r\n            placeholder=\"Course Name\"\r\n          />\r\n          <small *ngIf=\"f.name.errors && submitted\">*Course name is req.</small>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"code\">Course Code</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"code\"\r\n            fullWidth\r\n            [status]=\"f.courseCode.errors && submitted ? 'danger' : 'basic'\"\r\n            formControlName=\"courseCode\"\r\n            placeholder=\"Course Code\"\r\n          />\r\n          <small *ngIf=\"f.courseCode.errors && submitted\">*Course code is req.</small>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"fees\">Course Fees</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            status=\"basic\"\r\n            #fees\r\n            (keyup)=\"courseFee(fees.value)\"\r\n            id=\"fees\"\r\n            formControlName=\"fees\"\r\n            placeholder=\"Course Fees\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <hr />\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"gst\">GST</label>\r\n          <input\r\n            nbInput\r\n            type=\"text\"\r\n            pattern=\"\\d*\"\r\n            fullWidth\r\n            formControlName=\"gstValue\"\r\n            #ex\r\n            (keyup)=\"exclusive(ex.value)\"\r\n            placeholder=\"Exclusive GST in %\"\r\n          />\r\n        </div>\r\n        <div class=\"col-sm-1\"><br /><br />Or</div>\r\n        <div class=\"col-sm-3\">\r\n          <br />\r\n          <nb-checkbox (checkedChange)=\"inclusiveGst($event)\" [(ngModel)]=\"gstCheckBox\" [ngModelOptions]=\"{standalone: true}\" fullWidth status=\"warning\"\r\n            >Inclusive GST</nb-checkbox\r\n          >\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label>Total Fees</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            status=\"basic\"\r\n            formControlName=\"totalFee\"\r\n            disabled=\"true\"\r\n            placeholder=\"TotalFee\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <hr />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"des\">Description</label>\r\n          <textarea\r\n            name=\"discription\"\r\n            id=\"des\"\r\n            status=\"basic\"\r\n            nbInput\r\n            fullWidth\r\n            formControlName=\"discription\"\r\n            placeholder=\"Description\"\r\n            cols=\"100\"\r\n            rows=\"4\"\r\n            id=\"dis\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"display: block; margin-top: 1rem; text-align: right;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">\r\n          {{ edit === 'true' ? 'Update Course' : 'Add Course' }}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfAddCourseManageCourseManageCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-right\">\n  <button nbButton class=\"pull right\" status=\"warning\" style=\"color: black;\" (click)=\"onClick()\">\n    ADD COURSES\n  </button>\n</div>\n<p style=\"color: black; font-weight: bold;\">Manage Course Here</p>\n<nb-card>\n  <nb-card-body>\n    <table>\n      <thead>\n        <tr>\n          <th>Course Name</th>\n          <th>Code</th>\n          <th>Fees</th>\n          <th>GST</th>\n          <th>Total Fees (Rs.)</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of courses.course; let i = index\">\n          <td>{{ item.name }}</td>\n          <td>{{ item.courseCode }}</td>\n          <td>{{ item.fees }}</td>\n          <td>{{ item.gst }}</td>\n          <td>&#x20B9; {{ item.totalFee }}</td>\n          <td style=\"text-align: right;\">\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(item._id)\">Edit</button>\n            <button nbButton status=\"danger\" (click)=\"delete(item._id)\">Del</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfAddCourseViewCourseViewCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Id</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.id }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Course Name</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.name }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Code</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.code }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Fees</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.fees }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>GST</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.gst }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Description</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.discription }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <p>Total Fees</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <span>{{ courses.totalFee }}</span>\n      </div>\n      <div class=\"col-sm-1\"></div>\n    </div>\n  </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/branch-conf.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/branch-conf.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfBranchConfComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/discount.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/discount.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfDiscountDiscountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-right\">\n  <button nbButton status=\"warning\" (click)=\"back()\" style=\"color: black;\">Manage Discount</button>\n</div>\n<p style=\"color: black; font-weight: bold;\">Define Discount</p>\n<nb-card>\n  <nb-card-body>\n    <form [formGroup]=\"discount\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <label for=\"code\">Code</label>\n          <input\n            type=\"text\"\n            nbInput\n            fullWidth\n            id=\"code\"\n            status=\"basic\"\n            formControlName=\"discountCode\"\n            [status]=\"f.discountCode.errors && submitted ? 'danger' : 'basic'\"\n            placeholder=\"Code\"\n          />\n          <small *ngIf=\"f.discountCode.errors && submitted\" style=\"display: block;\"\n            >*This field req</small\n          >\n        </div>\n        <div class=\"col-sm-6\">\n          <label for=\"amt\">Amount in %</label>\n          <input\n            type=\"text\"\n            nbInput\n            fullWidth\n            id=\"amt\"\n            status=\"basic\"\n            formControlName=\"amount\"\n            [status]=\"f.amount.errors && submitted ? 'danger' : 'basic'\"\n            placeholder=\"Amount in %\"\n          />\n          <small *ngIf=\"f.amount.errors && submitted\" style=\"display: block;\"\n            >*This field req</small\n          >\n        </div>\n      </div>\n\n      <div class=\"mt-3\">\n        <label for=\"des\">Description</label>\n        <textarea\n          name=\"discription\"\n          nbInput\n          id=\"des\"\n          fullWidth\n          status=\"basic\"\n          cols=\"40\"\n          rows=\"4\"\n          formControlName=\"description\"\n          placeholder=\"Description(Optional)\"\n        ></textarea>\n      </div>\n      <div class=\"mt-4\" style=\"text-align: right;\">\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">Submit</button>\n      </div>\n    </form>\n  </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfDiscountManageDiscountManageDiscountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-right\">\n  <button nbButton status=\"warning\" (click)=\"onClick()\" style=\"color: black;\">Add Discount</button>\n</div>\n<p style=\"color: black; font-weight: bold;\">Manage Discoint Here</p>\n<nb-card>\n  <nb-card-body>\n    <table>\n      <thead>\n        <tr>\n          <th>Code</th>\n          <th>Amount In %</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of discounts.discount; let i = index\">\n          <td>{{ item.discountCode }}</td>\n          <td>{{ item.amount }}</td>\n          <td>{{ item.description }}</td>\n          <td class=\"text-right\">\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(item._id)\">Edit</button>\n            <button nbButton status=\"danger\" (click)=\"delete(item._id)\">Del</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfReceiptConfManageReceiptManageReceiptComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-right\">\r\n  <button nbButton status=\"warning\" (click)=\"onClick()\" style=\"color: black;\" [hidden]=\"receipts\">\r\n    Add Receipt\r\n  </button>\r\n</div>\r\n<p style=\"color: black; font-weight: bold;\">Manage Reciept</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Business Name</th>\r\n          <th>Address</th>\r\n          <th>GST Number</th>\r\n          <th>Terms & Conditions</th>\r\n          <th>Fee</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngIf=\"receipts\">\r\n          <td>{{ receipts.businessName }}</td>\r\n          <td>{{ receipts.address }}</td>\r\n          <td>{{ receipts.gstNumber }}</td>\r\n          <td>{{ receipts.termsAndCondition }}</td>\r\n          <td>{{ receipts.fee }}</td>\r\n          <td class=\"text-right\">\r\n            <button class=\"mr-3\" nbButton status=\"warning\" (click)=\"edit(routerId)\">Edit</button>\r\n            <button nbButton status=\"danger\" (click)=\"delete(routerId)\">Del</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </nb-card-body>\r\n</nb-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfReceiptConfReceiptConfComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-right\">\r\n  <button (click)=\"back()\" nbButton status=\"warning\" style=\"color: black;\">Manage Receipt</button>\r\n</div>\r\n<p style=\"font-weight: bold;\">Receipt Configuration</p>\r\n<nb-card>\r\n  <nb-card-body>\r\n    <form [formGroup]=\"receipt\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"name\">Business Name</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"name\"\r\n            fullWidth\r\n            status=\"basic\"\r\n            formControlName=\"businessName\"\r\n            [status]=\"f.businessName.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Business Name\"\r\n          />\r\n          <small *ngIf=\"f.businessName.errors && submitted\">*Business Name is Required</small>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"gst\">GST Number (Optional)</label>\r\n          <input\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            id=\"gst\"\r\n            status=\"basic\"\r\n            formControlName=\"gstNumber\"\r\n            placeholder=\"GST Number (optional)\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"fee\">Fee</label>\r\n          <nb-select\r\n            placeholder=\"Fee\"\r\n            id=\"fee\"\r\n            status=\"basic\"\r\n            [status]=\"f.fee.errors && submitted ? 'danger' : 'basic'\"\r\n            formControlName=\"fee\"\r\n          >\r\n            <nb-option *ngFor=\"let item of fees\" [value]=\"item\">{{ item }}</nb-option>\r\n          </nb-select>\r\n          <small *ngIf=\"f.fee.errors && submitted\">*Fee is Required</small>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"address\">Address</label>\r\n\r\n          <textarea\r\n            type=\"text\"\r\n            nbInput\r\n            fullWidth\r\n            status=\"basic\"\r\n            formControlName=\"address\"\r\n            rows=\"5\"\r\n            [status]=\"f.address.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Address\"\r\n          >\r\n          </textarea>\r\n\r\n          <small *ngIf=\"f.address.errors && submitted\">*Address is Required</small>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <label for=\"tc\">Terms & Conditions</label>\r\n          <textarea\r\n            type=\"text\"\r\n            nbInput\r\n            id=\"tc\"\r\n            status=\"basic\"\r\n            fullWidth\r\n            formControlName=\"termsAndCondition\"\r\n            [status]=\"f.termsAndCondition.errors && submitted ? 'danger' : 'basic'\"\r\n            placeholder=\"Terms and Conditions\"\r\n            cols=\"15\"\r\n            rows=\"7\"\r\n          >\r\n          </textarea>\r\n          <small *ngIf=\"f.termsAndCondition.errors && submitted\"\r\n            >*Terms & Conditions is Required</small\r\n          >\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"text-align: right; margin: 1rem;\">\r\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">\r\n          {{ edit ? 'Update' : 'Add' }}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </nb-card-body>\r\n</nb-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/role-management/role-management.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/role-management/role-management.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInstituteBranchConfRoleManagementRoleManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p style=\"font-weight: bold;\">Role Management</p>\n<nb-card>\n  <nb-card-body *ngIf=\"!display\">\n    <form [formGroup]=\"roleManage\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <label for=\"phone\">*Phone Number</label>\n          <input\n            type=\"phone\"\n            nbInput\n            id=\"phone\"\n            maxlength=\"10\"\n            fullWidth\n            [status]=\"f.phone.errors && submitted ? 'danger' : 'basic'\"\n            formControlName=\"phone\"\n            placeholder=\"Phone Number\"\n          />\n          <small *ngIf=\"f.phone.errors && submitted\">*Phone Number is required</small>\n        </div>\n        <div class=\"col-sm-4\">\n          <label>*Password</label>\n          <input\n            type=\"password\"\n            nbInput\n            fullWidth\n            formControlName=\"password\"\n            placeholder=\"Password\"\n            [status]=\"f.phone.errors && submitted ? 'danger' : 'basic'\"\n          />\n          <small *ngIf=\"f.password.errors && submitted\">*Password is required</small>\n        </div>\n        <div class=\"col-sm-4\">\n          <label for=\"role\">*Assign Role</label>\n          <nb-select\n            status=\"basic\"\n            id=\"role\"\n            formControlName=\"role\"\n            fullWidth\n            [size]=\"selectedSize\"\n            placeholder=\"Assign Role\"\n          >\n            <nb-option value=\"branchManager\">Branch Manager</nb-option>\n            <nb-option value=\"teacher\">Teacher</nb-option>\n            <nb-option value=\"councillor\">Counselor</nb-option>\n          </nb-select>\n          <small *ngIf=\"f.role.errors && submitted\">*Role is required</small>\n        </div>\n      </div>\n      <div style=\"margin: 1rem; text-align: right;\">\n        <button type=\"submit\" nbButton status=\"warning\" style=\"color: black;\">Submit</button>\n      </div>\n    </form>\n  </nb-card-body>\n  <nb-card-body [ngClass]=\"{ hide: !display }\">\n    <input type=\"text\" maxlength=\"4\" [(ngModel)]=\"otp\" nbInput placeholder=\"Enter OTP\" />\n    <a class=\"btn btn-link\">Resend OTP</a>\n    <button nbButton (click)=\"varifyOtp()\">Varify OTP</button>\n  </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/add-batches/add-batches.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfAddBatchesAddBatchesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input,\nnb-select,\ntextarea {\n  display: block; }\n\nsmall {\n  color: red; }\n\np {\n  color: black;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1iYXRjaGVzL0U6XFxQcm9qZWN0c1xcRnJlZWxhbmNlIFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxhZGQtYmF0Y2hlc1xcYWRkLWJhdGNoZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvYWRkLWJhdGNoZXMvYWRkLWJhdGNoZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCxcbm5iLXNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6IHJlZDtcbn1cbnAge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/add-batches/add-batches.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AddBatchesComponent */

  /***/
  function srcAppPagesInstituteBranchConfAddBatchesAddBatchesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBatchesComponent", function () {
      return AddBatchesComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var AddBatchesComponent = /*#__PURE__*/function () {
      function AddBatchesComponent(fb, api, active, router, location, toasterService) {
        _classCallCheck(this, AddBatchesComponent);

        this.fb = fb;
        this.api = api;
        this.active = active;
        this.router = router;
        this.location = location;
        this.toasterService = toasterService;
        this.courses = {
          course: []
        };
        this.batchUpdate = {
          batchCode: '',
          description: '',
          course: ''
        };
        this.linearMode = true;
        this.submitted = false;
      }

      _createClass(AddBatchesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.active.queryParams.subscribe(function (data) {
            // console.log(data);
            _this.batchId = data.batchId;
            _this.edit = data.edit;
          });
          this.routerId = this.active.snapshot.paramMap.get('id'); // console.log('institute Id ' + this.routerId);

          this.getBatch(this.batchId, this.routerId);
          this.getCourses(this.routerId);
          this.batch = this.fb.group({
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            batchCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['']
          }); // console.log('===============>', this.courses);
        }
      }, {
        key: "getBatch",
        value: function getBatch(id, instituteId) {
          var _this2 = this;

          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
          param = param.append('instituteId', instituteId);
          param = param.append('batchId', id);
          this.api.getBatch(param).subscribe(function (data) {
            // console.log(data);
            _this2.batchUpdate = JSON.parse(JSON.stringify(data[0])); // console.log('batchInfo' + this.batchUpdate.batchCode);
          });
        }
      }, {
        key: "getCourses",
        value: function getCourses(id) {
          var _this3 = this;

          this.api.getCourses(id).subscribe(function (data) {
            _this3.courses = JSON.parse(JSON.stringify(data)); // console.log(this.courses);

            _this3.batch.patchValue({
              course: _this3.batchUpdate.course,
              batchCode: _this3.batchUpdate.batchCode,
              description: _this3.batchUpdate.description
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          this.submitted = true;

          if (this.batch.invalid) {
            return;
          }

          if (this.edit === 'true') {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
            param = param.append('instituteId', this.routerId);
            param = param.append('batchId', this.batchId);
            this.api.updateBatch(param, this.batch.value).subscribe(function (res) {
              _this4.showToast('top-right', 'success', 'Successfully Updated');

              _this4.router.navigate(['/pages/institute/branch-config/manage-batch/', _this4.routerId]);
            }, function (error) {
              // console.log(error);
              _this4.invalid('top-right', 'danger', error.error.message);
            });
          } // console.log('batch => ', this.batch.value);


          if (!this.edit) {
            this.api.addBatch(this.routerId, this.batch.value).subscribe(function () {
              // console.log('successfully added');
              _this4.showToast('top-right', 'success', 'Successfully Added');

              setTimeout(function () {
                _this4.router.navigate(['/pages/institute/branch-config/manage-batch/', _this4.routerId]);
              }, 1000);
            }, function (err) {
              console.error(err);

              _this4.invalid('top-right', 'danger', err.error.message);
            });
          }
        }
      }, {
        key: "showToast",
        value: function showToast(position, status, message) {
          this.toasterService.show(status || 'Success', message, {
            position: position,
            status: status
          });
        }
      }, {
        key: "invalid",
        value: function invalid(position, status, errMessage) {
          this.toasterService.show(status || 'Danger', errMessage, {
            position: position,
            status: status
          });
        }
      }, {
        key: "goManage",
        value: function goManage() {
          this.location.back();
        }
      }, {
        key: "f",
        get: function get() {
          return this.batch.controls;
        }
      }]);

      return AddBatchesComponent;
    }();

    AddBatchesComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]
      }];
    };

    AddBatchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-add-batches',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-batches.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/add-batches.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-batches.component.scss */
      "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]])], AddBatchesComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfAddBatchesManageBatchManageBatchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1iYXRjaGVzL21hbmFnZS1iYXRjaC9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxcYWRkLWJhdGNoZXNcXG1hbmFnZS1iYXRjaFxcbWFuYWdlLWJhdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FDRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1iYXRjaGVzL21hbmFnZS1iYXRjaC9tYW5hZ2UtYmF0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcblx0d2lkdGg6MTAwJVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ManageBatchComponent */

  /***/
  function srcAppPagesInstituteBranchConfAddBatchesManageBatchManageBatchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageBatchComponent", function () {
      return ManageBatchComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ManageBatchComponent = /*#__PURE__*/function () {
      function ManageBatchComponent(api, router, active, http) {
        _classCallCheck(this, ManageBatchComponent);

        this.api = api;
        this.router = router;
        this.active = active;
        this.http = http;
        this.batches = {
          batch: [{
            _id: '',
            course: '',
            batchCode: '',
            description: ''
          }]
        };
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
      }

      _createClass(ManageBatchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.routerId = this.active.snapshot.paramMap.get('id');
          this.getBatches(this.routerId);
        }
      }, {
        key: "getBatches",
        value: function getBatches(id) {
          var _this5 = this;

          this.api.getBatches(id).subscribe(function (data) {
            _this5.batches = JSON.parse(JSON.stringify(data));
            console.dir('my batch' + _this5.batches);
          });
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.router.navigate(["/pages/institute/branch-config/add-batch/".concat(this.routerId)], {
            queryParams: {
              batchId: id,
              edit: true
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          // console.log(id);
          this.params = this.params.append('instituteId', this.routerId);
          this.params = this.params.append('batchId', id);
          this.api.deleteBatch(this.params).subscribe(function (res) {// console.log('successfully delete ' + res);
          }, function (err) {
            return console.error(err);
          });
          var i = this.batches.batch.findIndex(function (e) {
            return e._id === id;
          });

          if (i !== -1) {
            this.batches.batch.splice(i, 1);
          }
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigate(['/pages/institute/branch-config/add-batch', this.routerId]);
        }
      }]);

      return ManageBatchComponent;
    }();

    ManageBatchComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ManageBatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-manage-batch',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-batch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-batch.component.scss */
      "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ManageBatchComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/add-course/add-course.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/add-course/add-course.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfAddCourseAddCourseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "small {\n  color: red; }\n\ninput, textarea, nb-select {\n  display: block;\n  width: 100%; }\n\np {\n  color: black;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2UvRTpcXFByb2plY3RzXFxGcmVlbGFuY2UgUHJvamVjdHNcXEVkdUF0bGFzXFxlZHVhdGxhczFcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGluc3RpdHV0ZVxcYnJhbmNoLWNvbmZcXGFkZC1jb3Vyc2VcXGFkZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUVmO0VBQUUsWUFBVztFQUFDLGlCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2UvYWRkLWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuc21hbGx7XG4gICAgY29sb3I6IHJlZDtcbn1cbmlucHV0LHRleHRhcmVhLG5iLXNlbGVjdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbnB7Y29sb3I6YmxhY2s7Zm9udC13ZWlnaHQ6Ym9sZH1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/add-course/add-course.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/add-course/add-course.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AddCourseComponent */

  /***/
  function srcAppPagesInstituteBranchConfAddCourseAddCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCourseComponent", function () {
      return AddCourseComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AddCourseComponent = /*#__PURE__*/function () {
      function AddCourseComponent(fb, api, active, location, toasterService, router) {
        _classCallCheck(this, AddCourseComponent);

        this.fb = fb;
        this.api = api;
        this.active = active;
        this.location = location;
        this.toasterService = toasterService;
        this.router = router;
        this.submitted = false;
        this.institutes = [];
        this.institute = []; // students:any[]=[];

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
          totalFee: ''
        };
      }

      _createClass(AddCourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.routerId = this.active.snapshot.paramMap.get('id');
          this.active.queryParams.subscribe(function (data) {
            // console.log(data);
            _this6.courseId = data.courseId;
            _this6.edit = data.edit;
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
            totalFee: ['']
          });
          this.inclusiveGst(false);
        }
      }, {
        key: "getCourse",
        value: function getCourse(id) {
          var _this7 = this;

          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]();
          param = param.append('instituteId', this.routerId);
          param = param.append('courseId', id);
          this.api.getCourse(param).subscribe(function (data) {
            // console.log('getCourse ' + JSON.stringify(data[0]));
            _this7.updateCourse = JSON.parse(JSON.stringify(data[0])); // console.log('getCourse ' + this.updateCourse.courseCode);
            // console.log(this.updateCourse);

            _this7.course.patchValue({
              name: _this7.updateCourse.name,
              courseCode: _this7.updateCourse.courseCode,
              fees: _this7.updateCourse.fees,
              gst: _this7.updateCourse.gst,
              gstValue: _this7.updateCourse.gstValue,
              discription: _this7.updateCourse.discription,
              totalFee: _this7.updateCourse.totalFee
            });

            if (_this7.updateCourse.gst === 'Inclusive') {
              _this7.gstCheckBox = true;

              _this7.course.get('gstValue').disable();
            } else {
              _this7.gstCheckBox = false;
              _this7.exclusiveGst = Number(_this7.updateCourse.gstValue);
            }

            _this7.fees = Number(_this7.updateCourse.fees);
          }, function (error) {
            return console.error(error);
          });
        }
      }, {
        key: "getInstitutes",
        value: function getInstitutes() {
          var _this8 = this;

          this.api.getInstitutes().subscribe(function (data) {
            _this8.institutes = data; // console.log('institutes - ' + JSON.stringify(this.institutes));

            _this8.institute = JSON.parse(JSON.stringify(_this8.institutes)); // console.log(this.institute);
          });
          this.display = true;
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          this.submitted = true;

          if (this.course.invalid) {
            return;
          } // console.log('editMode ' + this.edit);


          if (this.edit === 'true') {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpParams"]();
            param = param.append('instituteId', this.routerId);
            param = param.append('courseId', this.courseId);
            this.api.updateCourse(param, this.course.value).subscribe(function (res) {
              // console.log(res);
              _this9.showToast('top-right', 'success', 'Course Updated');

              setTimeout(function () {
                _this9.router.navigate(['/pages/institute/branch-config/manage-course/', _this9.routerId]);
              }, 1000);
            }, function (error) {
              // console.log(error);
              _this9.showToast('top-right', 'danger', 'Course Updation Failed');
            });
          } // console.log(this.course.value);


          if (!this.edit) {
            this.api.addCourse(this.routerId, this.course.value).subscribe(function (data) {
              // console.log(data);
              _this9.showToast('top-right', 'success', 'Course Added Successfully');

              setTimeout(function () {
                _this9.router.navigate(['/pages/institute/branch-config/manage-course/', _this9.routerId]);
              }, 1000);
            }, function (err) {
              console.error(err);

              _this9.invalid('top-right', 'danger', err.error.message);
            });
          }
        }
      }, {
        key: "inclusiveGst",
        value: function inclusiveGst(event) {
          var inclusive = event;

          if (inclusive) {
            this.course.get('gstValue').disable();
            this.course.patchValue({
              gst: 'Inclusive'
            });
          }

          if (!inclusive || null) {
            this.course.get('gstValue').enable();
            this.course.patchValue({
              gst: 'Exclusive'
            });
          }

          this.calculateTotalFees();
        }
      }, {
        key: "calculateTotalFees",
        value: function calculateTotalFees() {
          var total = 0;

          if (this.course.get('gst').value === 'Inclusive') {
            total = this.fees;
          } else {
            if (this.exclusiveGst == null) {
              total = this.fees;
            } else {
              total = this.fees + this.exclusiveGst / 100 * this.fees;
            }
          }

          this.course.get('totalFee').setValue(total.toString());
        }
      }, {
        key: "exclusive",
        value: function exclusive(event) {
          this.exclusiveGst = +event; // console.log('exclusive ', this.exclusiveGst);

          var total = this.fees + this.exclusiveGst / 100 * this.fees; // console.log('type ', typeof this.fees, this.fees);

          this.course.patchValue({
            totalFee: total + '',
            gstValue: this.exclusiveGst === 0 ? '' : this.exclusiveGst + ''
          });
          this.calculateTotalFees();
        }
      }, {
        key: "courseFee",
        value: function courseFee(event) {
          this.fees = +event;
          this.calculateTotalFees();
        }
      }, {
        key: "showToast",
        value: function showToast(position, status, message) {
          this.toasterService.show(status || 'Success', message, {
            position: position,
            status: status
          });
        }
      }, {
        key: "invalid",
        value: function invalid(position, status, errorMessage) {
          if (errorMessage) {
            this.toasterService.show(status || 'Danger', errorMessage, {
              position: position,
              status: status
            });
          } else {
            this.toasterService.show(status || 'Danger', 'This course id already added', {
              position: position,
              status: status
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.course.controls;
        }
      }]);

      return AddCourseComponent;
    }();

    AddCourseComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AddCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-add-course',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/add-course.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-course.component.scss */
      "./src/app/pages/institute/branch-conf/add-course/add-course.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AddCourseComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfAddCourseManageCourseManageCourseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2UvbWFuYWdlLWNvdXJzZS9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxcYWRkLWNvdXJzZVxcbWFuYWdlLWNvdXJzZVxcbWFuYWdlLWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9icmFuY2gtY29uZi9hZGQtY291cnNlL21hbmFnZS1jb3Vyc2UvbWFuYWdlLWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ManageCourseComponent */

  /***/
  function srcAppPagesInstituteBranchConfAddCourseManageCourseManageCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCourseComponent", function () {
      return ManageCourseComponent;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ManageCourseComponent = /*#__PURE__*/function () {
      function ManageCourseComponent(api, router, active) {
        _classCallCheck(this, ManageCourseComponent);

        this.api = api;
        this.router = router;
        this.active = active;
        this.courses = {
          course: [{
            courseCode: '',
            discription: '',
            fees: '',
            gst: '',
            name: '',
            totalFee: '',
            _id: ''
          }]
        };
        this.institutes = [];
        this.institute = []; // students:any[]=[];

        this.display = false;
      }

      _createClass(ManageCourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.routerId = this.active.snapshot.paramMap.get('id');
          this.getCourses(this.routerId);
        }
      }, {
        key: "getCourses",
        value: function getCourses(id) {
          var _this10 = this;

          this.api.getCourses(id).subscribe(function (data) {
            // console.log(data);
            // this.courses = JSON.stringify(data);
            var course = JSON.stringify(data);
            _this10.courses = JSON.parse(course); // console.log('=======> ', this.courses);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          // console.log(id);
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
          param = param.append('instituteId', this.routerId);
          param = param.append('courseId', id);
          this.api.deleteCourse(param).subscribe(function (res) {// console.log(res);
          }, function (error) {
            return console.error(error);
          });
          var i = this.courses.course.findIndex(function (e) {
            return e._id === id;
          });

          if (i !== -1) {
            this.courses.course.splice(i, 1);
          }
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.router.navigate(["/pages/institute/branch-config/add-courses/".concat(this.routerId)], {
            queryParams: {
              courseId: id,
              edit: true
            }
          });
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigate(['/pages/institute/branch-config/add-courses/', this.routerId]);
        }
      }]);

      return ManageCourseComponent;
    }();

    ManageCourseComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ManageCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-manage-course',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-course.component.scss */
      "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ManageCourseComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfAddCourseViewCourseViewCourseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2Uvdmlldy1jb3Vyc2UvRTpcXFByb2plY3RzXFxGcmVlbGFuY2UgUHJvamVjdHNcXEVkdUF0bGFzXFxlZHVhdGxhczFcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGluc3RpdHV0ZVxcYnJhbmNoLWNvbmZcXGFkZC1jb3Vyc2VcXHZpZXctY291cnNlXFx2aWV3LWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2FkZC1jb3Vyc2Uvdmlldy1jb3Vyc2Uvdmlldy1jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ViewCourseComponent */

  /***/
  function srcAppPagesInstituteBranchConfAddCourseViewCourseViewCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewCourseComponent", function () {
      return ViewCourseComponent;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ViewCourseComponent = /*#__PURE__*/function () {
      function ViewCourseComponent(api, active) {
        _classCallCheck(this, ViewCourseComponent);

        this.api = api;
        this.active = active;
      }

      _createClass(ViewCourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.routerId = +this.active.snapshot.paramMap.get('id'); // console.log(this.active.snapshot.paramMap);

          this.api.getCourse(this.routerId).subscribe(function (data) {
            // console.log(data);
            _this11.courses = data;
          }, function (err) {
            return console.error(err);
          });
        }
      }]);

      return ViewCourseComponent;
    }();

    ViewCourseComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ViewCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-view-course',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-course.component.scss */
      "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ViewCourseComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/branch-conf.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/branch-conf.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfBranchConfComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "small {\n  color: red; }\n\ninput,\ntextarea {\n  margin: 10px; }\n\na {\n  margin: 1rem; }\n\n.active {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL0U6XFxQcm9qZWN0c1xcRnJlZWxhbmNlIFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxicmFuY2gtY29uZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVUsRUFBQTs7QUFFWjs7RUFFRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvYnJhbmNoLWNvbmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbWFsbCB7XG4gIGNvbG9yOiByZWQ7XG59XG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuYSB7XG4gIG1hcmdpbjogMXJlbTtcbn1cbi5hY3RpdmUge1xuICBjb2xvcjogcmVkO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/branch-conf.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/branch-conf.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BranchConfComponent */

  /***/
  function srcAppPagesInstituteBranchConfBranchConfComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchConfComponent", function () {
      return BranchConfComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BranchConfComponent = /*#__PURE__*/function () {
      function BranchConfComponent() {
        _classCallCheck(this, BranchConfComponent);
      }

      _createClass(BranchConfComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BranchConfComponent;
    }();

    BranchConfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-branch-conf',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./branch-conf.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/branch-conf.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./branch-conf.component.scss */
      "./src/app/pages/institute/branch-conf/branch-conf.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BranchConfComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/branch/branch-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/branch/branch-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: BranchRoutingModule */

  /***/
  function srcAppPagesInstituteBranchConfBranchBranchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchRoutingModule", function () {
      return BranchRoutingModule;
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


    var _branch_conf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../branch-conf.component */
    "./src/app/pages/institute/branch-conf/branch-conf.component.ts");
    /* harmony import */


    var _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../add-course/add-course.component */
    "./src/app/pages/institute/branch-conf/add-course/add-course.component.ts");
    /* harmony import */


    var _add_batches_add_batches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../add-batches/add-batches.component */
    "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.ts");
    /* harmony import */


    var _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../role-management/role-management.component */
    "./src/app/pages/institute/branch-conf/role-management/role-management.component.ts");
    /* harmony import */


    var _discount_discount_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../discount/discount.component */
    "./src/app/pages/institute/branch-conf/discount/discount.component.ts");
    /* harmony import */


    var _receipt_conf_receipt_conf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../receipt-conf/receipt-conf.component */
    "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.ts");
    /* harmony import */


    var _branch_conf_add_course_manage_course_manage_course_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../branch-conf/add-course/manage-course/manage-course.component */
    "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.ts");
    /* harmony import */


    var _branch_conf_add_course_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../branch-conf/add-course/view-course/view-course.component */
    "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.ts");
    /* harmony import */


    var _add_batches_manage_batch_manage_batch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../add-batches/manage-batch/manage-batch.component */
    "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.ts");
    /* harmony import */


    var _discount_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../discount/manage-discount/manage-discount.component */
    "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.ts");
    /* harmony import */


    var _branch_conf_receipt_conf_manage_receipt_manage_receipt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../branch-conf/receipt-conf/manage-receipt/manage-receipt.component */
    "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.ts");

    var routes = [{
      path: '',
      component: _branch_conf_component__WEBPACK_IMPORTED_MODULE_3__["BranchConfComponent"],
      children: [{
        path: 'add-courses/:id',
        component: _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_4__["AddCourseComponent"]
      }, {
        path: 'manage-course/:id',
        component: _branch_conf_add_course_manage_course_manage_course_component__WEBPACK_IMPORTED_MODULE_9__["ManageCourseComponent"]
      }, {
        path: 'view-course/:id',
        component: _branch_conf_add_course_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_10__["ViewCourseComponent"]
      }, {
        path: 'add-batch/:id',
        component: _add_batches_add_batches_component__WEBPACK_IMPORTED_MODULE_5__["AddBatchesComponent"]
      }, {
        path: 'manage-batch/:id',
        component: _add_batches_manage_batch_manage_batch_component__WEBPACK_IMPORTED_MODULE_11__["ManageBatchComponent"]
      }, {
        path: 'add-discount/:id',
        component: _discount_discount_component__WEBPACK_IMPORTED_MODULE_7__["DiscountComponent"]
      }, {
        path: 'manage-discount/:id',
        component: _discount_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_12__["ManageDiscountComponent"]
      }, {
        path: 'manage-receipt/:id',
        component: _branch_conf_receipt_conf_manage_receipt_manage_receipt_component__WEBPACK_IMPORTED_MODULE_13__["ManageReceiptComponent"]
      }, {
        path: 'add-receipt/:id',
        component: _receipt_conf_receipt_conf_component__WEBPACK_IMPORTED_MODULE_8__["ReceiptConfComponent"]
      }, {
        path: 'manage-role-management/:id',
        component: _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_6__["RoleManagementComponent"]
      }, {
        path: '',
        redirectTo: 'add-courses',
        pathMatch: 'full'
      }]
    }];

    var BranchRoutingModule = function BranchRoutingModule() {
      _classCallCheck(this, BranchRoutingModule);
    };

    BranchRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BranchRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/branch/branch.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/branch/branch.module.ts ***!
    \*********************************************************************/

  /*! exports provided: BranchModule */

  /***/
  function srcAppPagesInstituteBranchConfBranchBranchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchModule", function () {
      return BranchModule;
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


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var _branch_conf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../branch-conf.component */
    "./src/app/pages/institute/branch-conf/branch-conf.component.ts");
    /* harmony import */


    var _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../add-course/add-course.component */
    "./src/app/pages/institute/branch-conf/add-course/add-course.component.ts");
    /* harmony import */


    var _add_batches_add_batches_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../add-batches/add-batches.component */
    "./src/app/pages/institute/branch-conf/add-batches/add-batches.component.ts");
    /* harmony import */


    var _branch_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./branch-routing.module */
    "./src/app/pages/institute/branch-conf/branch/branch-routing.module.ts");
    /* harmony import */


    var _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../role-management/role-management.component */
    "./src/app/pages/institute/branch-conf/role-management/role-management.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _discount_discount_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../discount/discount.component */
    "./src/app/pages/institute/branch-conf/discount/discount.component.ts");
    /* harmony import */


    var _receipt_conf_receipt_conf_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../receipt-conf/receipt-conf.component */
    "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.ts");
    /* harmony import */


    var _branch_conf_add_course_manage_course_manage_course_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../branch-conf/add-course/manage-course/manage-course.component */
    "./src/app/pages/institute/branch-conf/add-course/manage-course/manage-course.component.ts");
    /* harmony import */


    var _branch_conf_add_course_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../branch-conf/add-course/view-course/view-course.component */
    "./src/app/pages/institute/branch-conf/add-course/view-course/view-course.component.ts");
    /* harmony import */


    var _branch_conf_add_batches_manage_batch_manage_batch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../branch-conf/add-batches/manage-batch/manage-batch.component */
    "./src/app/pages/institute/branch-conf/add-batches/manage-batch/manage-batch.component.ts");
    /* harmony import */


    var _branch_conf_discount_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../branch-conf/discount/manage-discount/manage-discount.component */
    "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.ts");
    /* harmony import */


    var _branch_conf_receipt_conf_manage_receipt_manage_receipt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../branch-conf/receipt-conf/manage-receipt/manage-receipt.component */
    "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.ts");

    var BranchModule = function BranchModule() {
      _classCallCheck(this, BranchModule);
    };

    BranchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_branch_conf_component__WEBPACK_IMPORTED_MODULE_4__["BranchConfComponent"], _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_5__["AddCourseComponent"], _add_batches_add_batches_component__WEBPACK_IMPORTED_MODULE_6__["AddBatchesComponent"], _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_8__["RoleManagementComponent"], _discount_discount_component__WEBPACK_IMPORTED_MODULE_11__["DiscountComponent"], _receipt_conf_receipt_conf_component__WEBPACK_IMPORTED_MODULE_12__["ReceiptConfComponent"], _branch_conf_add_course_manage_course_manage_course_component__WEBPACK_IMPORTED_MODULE_13__["ManageCourseComponent"], _branch_conf_add_course_view_course_view_course_component__WEBPACK_IMPORTED_MODULE_14__["ViewCourseComponent"], _branch_conf_add_batches_manage_batch_manage_batch_component__WEBPACK_IMPORTED_MODULE_15__["ManageBatchComponent"], _branch_conf_discount_manage_discount_manage_discount_component__WEBPACK_IMPORTED_MODULE_16__["ManageDiscountComponent"], _branch_conf_receipt_conf_manage_receipt_manage_receipt_component__WEBPACK_IMPORTED_MODULE_17__["ManageReceiptComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _branch_routing_module__WEBPACK_IMPORTED_MODULE_7__["BranchRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAccordionModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"]]
    })], BranchModule);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/discount/discount.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/discount/discount.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfDiscountDiscountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "small {\n  color: red;\n  margin: 0 1rem; }\n\ninput,\ntextarea {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2Rpc2NvdW50L0U6XFxQcm9qZWN0c1xcRnJlZWxhbmNlIFByb2plY3RzXFxFZHVBdGxhc1xcZWR1YXRsYXMxXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbnN0aXR1dGVcXGJyYW5jaC1jb25mXFxkaXNjb3VudFxcZGlzY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYyxFQUFBOztBQUVoQjs7RUFFRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvZGlzY291bnQvZGlzY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbWFsbCB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMCAxcmVtO1xufVxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/discount/discount.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/discount/discount.component.ts ***!
    \****************************************************************************/

  /*! exports provided: DiscountComponent */

  /***/
  function srcAppPagesInstituteBranchConfDiscountDiscountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountComponent", function () {
      return DiscountComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var DiscountComponent = /*#__PURE__*/function () {
      function DiscountComponent(fb, api, router, location, active, toasterService) {
        _classCallCheck(this, DiscountComponent);

        this.fb = fb;
        this.api = api;
        this.router = router;
        this.location = location;
        this.active = active;
        this.toasterService = toasterService;
        this.discountUpdate = {
          discountCode: '',
          description: '',
          amount: '',
          _id: ''
        };
        this.submitted = false;
      }

      _createClass(DiscountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.routerId = this.active.snapshot.paramMap.get('id');
          this.active.queryParams.subscribe(function (data) {
            // console.log(data);
            _this12.edit = data.edit;
            _this12.discountId = data.discountId;

            if (_this12.edit) {
              _this12.getDiscount(_this12.discountId);
            }
          });
          this.discount = this.fb.group({
            discountCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [''],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "getDiscount",
        value: function getDiscount(id) {
          var _this13 = this;

          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
          param = param.append('instituteId', this.routerId);
          param = param.append('discountId', id);
          this.api.getDiscount(param).subscribe(function (data) {
            // console.log('discount Data ', data);
            _this13.discountUpdate = JSON.parse(JSON.stringify(data[0])); // console.log('CODE ', this.discountUpdate.discountCode);

            _this13.discount.patchValue({
              discountCode: _this13.discountUpdate.discountCode,
              description: _this13.discountUpdate.description,
              amount: _this13.discountUpdate.amount
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          this.submitted = true;

          if (this.discount.invalid) {
            return;
          }

          if (this.edit === 'true') {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            param = param.append('instituteId', this.routerId);
            param = param.append('discountId', this.discountId);
            this.api.updateDiscount(param, this.discount.value).subscribe(function (res) {
              // console.log(res);
              _this14.showToast('top-right', 'success', 'Discount Updated');

              setTimeout(function () {
                _this14.router.navigate(['/pages/institute/branch-config/manage-discount/', _this14.routerId]);
              }, 1000);
            }, function (error) {
              // console.log(error);
              _this14.showToast('top-right', 'danger', 'Discount Updation Failed');
            });
          } else {
            // console.log(this.discount.value);
            this.api.addDiscount(this.routerId, this.discount.value).subscribe(function (data) {
              // console.log('add success' + ' ' + data);
              _this14.showToast('top-right', 'success', 'Discount Added Successfully');

              setTimeout(function () {
                _this14.router.navigate(['/pages/institute/branch-config/manage-discount/', _this14.routerId]);
              }, 1000);
            }, function (err) {
              console.error(err);

              _this14.showToast('top-right', 'danger', 'This Discount already added');
            });
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
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
          return this.discount.controls;
        }
      }]);

      return DiscountComponent;
    }();

    DiscountComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]
      }];
    };

    DiscountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-discount',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./discount.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/discount.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./discount.component.scss */
      "./src/app/pages/institute/branch-conf/discount/discount.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]])], DiscountComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfDiscountManageDiscountManageDiscountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2Rpc2NvdW50L21hbmFnZS1kaXNjb3VudC9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxcZGlzY291bnRcXG1hbmFnZS1kaXNjb3VudFxcbWFuYWdlLWRpc2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL2Rpc2NvdW50L21hbmFnZS1kaXNjb3VudC9tYW5hZ2UtZGlzY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ManageDiscountComponent */

  /***/
  function srcAppPagesInstituteBranchConfDiscountManageDiscountManageDiscountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageDiscountComponent", function () {
      return ManageDiscountComponent;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ManageDiscountComponent = /*#__PURE__*/function () {
      function ManageDiscountComponent(api, router, active) {
        _classCallCheck(this, ManageDiscountComponent);

        this.api = api;
        this.router = router;
        this.active = active;
        this.discounts = {
          discount: [{
            discountCode: '',
            description: '',
            _id: '',
            amount: ''
          }]
        };
      }

      _createClass(ManageDiscountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.routerId = this.active.snapshot.paramMap.get('id');
          this.getDiscounts(this.routerId);
        }
      }, {
        key: "getDiscounts",
        value: function getDiscounts(id) {
          var _this15 = this;

          this.api.getDiscounts(id).subscribe(function (data) {
            // console.log(data);
            var dis = JSON.stringify(data);
            _this15.discounts = JSON.parse(dis); // console.log('Discount' + this.discounts);
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.router.navigate(["/pages/institute/branch-config/add-discount/".concat(this.routerId)], {
            queryParams: {
              discountId: id,
              edit: true
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
          param = param.append('instituteId', this.routerId);
          param = param.append('discountId', id);
          this.api.deleteDiscount(param).subscribe( //   () => console.log('successfully deleted'),
          function (err) {
            return console.error(err);
          });
          var i = this.discounts.discount.findIndex(function (e) {
            return e._id === id;
          });

          if (i !== -1) {
            this.discounts.discount.splice(i, 1);
          }
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigate(['/pages/institute/branch-config/add-discount/', this.routerId]);
        }
      }]);

      return ManageDiscountComponent;
    }();

    ManageDiscountComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ManageDiscountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-manage-discount',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-discount.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-discount.component.scss */
      "./src/app/pages/institute/branch-conf/discount/manage-discount/manage-discount.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ManageDiscountComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfReceiptConfManageReceiptManageReceiptComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JlY2VpcHQtY29uZi9tYW5hZ2UtcmVjZWlwdC9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxccmVjZWlwdC1jb25mXFxtYW5hZ2UtcmVjZWlwdFxcbWFuYWdlLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnN0aXR1dGUvYnJhbmNoLWNvbmYvcmVjZWlwdC1jb25mL21hbmFnZS1yZWNlaXB0L21hbmFnZS1yZWNlaXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: ManageReceiptComponent */

  /***/
  function srcAppPagesInstituteBranchConfReceiptConfManageReceiptManageReceiptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageReceiptComponent", function () {
      return ManageReceiptComponent;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ManageReceiptComponent = /*#__PURE__*/function () {
      function ManageReceiptComponent(api, router, active) {
        _classCallCheck(this, ManageReceiptComponent);

        this.api = api;
        this.router = router;
        this.active = active;
        this.receipts = {
          businessName: '',
          address: '',
          fee: '',
          gstNumber: '',
          termsAndCondition: ''
        };
      }

      _createClass(ManageReceiptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.routerId = this.active.snapshot.paramMap.get('id');
          this.getReceipts(this.routerId);
        }
      }, {
        key: "getReceipts",
        value: function getReceipts(id) {
          var _this16 = this;

          this.api.getReceipt(id).subscribe(function (data) {
            _this16.receipts = JSON.parse(JSON.stringify(data));
          });
        }
      }, {
        key: "edit",
        value: function edit(id) {
          this.router.navigate(["/pages/institute/branch-config/add-receipt/".concat(this.routerId)], {
            queryParams: {
              recieptId: id,
              edit: true
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this17 = this;

          this.api.deleteReceipt(id).subscribe(function () {
            _this17.receipts = null;
          }, function (err) {
            return console.error(err);
          }); // const i = this.receipts.reciepts.findIndex(e => e.id == id)
          // if(i !== -1){
          // this.receipts.splice(i,1);
          // }
        }
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigate(["/pages/institute/branch-config/add-receipt/".concat(this.routerId)]);
        }
      }]);

      return ManageReceiptComponent;
    }();

    ManageReceiptComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ManageReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-manage-receipt',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-receipt.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-receipt.component.scss */
      "./src/app/pages/institute/branch-conf/receipt-conf/manage-receipt/manage-receipt.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ManageReceiptComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfReceiptConfReceiptConfComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nb-select {\n  width: 80%; }\n\n.col-sm-2 {\n  margin: 0 10px; }\n\nsmall {\n  display: block;\n  color: red;\n  margin-left: 10px; }\n\ninput,\nnb-select {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JlY2VpcHQtY29uZi9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxccmVjZWlwdC1jb25mXFxyZWNlaXB0LWNvbmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFFbkI7O0VBRUUsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JlY2VpcHQtY29uZi9yZWNlaXB0LWNvbmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1zZWxlY3Qge1xuICB3aWR0aDogODAlO1xufVxuLmNvbC1zbS0yIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5zbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlucHV0LFxubmItc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ReceiptConfComponent */

  /***/
  function srcAppPagesInstituteBranchConfReceiptConfReceiptConfComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReceiptConfComponent", function () {
      return ReceiptConfComponent;
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
    /*! ../../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var ReceiptConfComponent = /*#__PURE__*/function () {
      function ReceiptConfComponent(fb, api, active, router, toasterService, location) {
        _classCallCheck(this, ReceiptConfComponent);

        this.fb = fb;
        this.api = api;
        this.active = active;
        this.router = router;
        this.toasterService = toasterService;
        this.location = location;
        this.submitted = false;
        this.updateReceipt = {
          businessName: '',
          address: '',
          gstNumber: '',
          termsAndCondition: '',
          fee: ''
        };
        this.fees = ['Collection Basis', 'Course Fee Basis'];
      }

      _createClass(ReceiptConfComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.routerId = this.active.snapshot.paramMap.get('id');
          this.active.queryParams.subscribe(function (data) {
            _this18.receiptId = data.receiptId;
            _this18.edit = data.edit;

            if (_this18.edit === 'true') {
              _this18.getReceipt(_this18.routerId);
            }
          });
          this.receipt = this.fb.group({
            businessName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gstNumber: [''],
            termsAndCondition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "getReceipt",
        value: function getReceipt(id) {
          var _this19 = this;

          this.api.getReceipt(id).subscribe(function (data) {
            _this19.updateReceipt = data;

            _this19.receipt.patchValue({
              businessName: _this19.updateReceipt.businessName,
              address: _this19.updateReceipt.address,
              gstNumber: _this19.updateReceipt.gstNumber,
              termsAndCondition: _this19.updateReceipt.termsAndCondition,
              fee: _this19.updateReceipt.fee
            });
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this20 = this;

          this.submitted = true;

          if (this.receipt.invalid) {
            return;
          }

          if (this.edit === 'true') {
            this.api.updateReceipt(this.routerId, this.receipt.value).subscribe(function (data) {
              _this20.message = 'receipt Updated Successfully';

              _this20.showToast('top-right', 'success');

              _this20.router.navigate(['/pages/institute/branch-config/manage-receipt/', _this20.routerId]);
            }, function (err) {
              _this20.message = err.error.message;

              _this20.invalidToast('top-right', 'danger');
            });
          }

          if (!this.edit) {
            this.api.addReceipt(this.routerId, this.receipt.value).subscribe(function () {
              _this20.message = 'receipt Added Successfully';

              _this20.showToast('top-right', 'success');

              _this20.router.navigate(['/pages/institute/branch-config/manage-receipt/', _this20.routerId]);
            }, function (err) {
              _this20.message = err.error.message;

              _this20.invalidToast('top-right', 'danger');
            });
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "showToast",
        value: function showToast(position, status) {
          this.toasterService.show(status || 'Success', "".concat(this.message), {
            position: position,
            status: status
          });
        }
      }, {
        key: "invalidToast",
        value: function invalidToast(position, status) {
          this.toasterService.show(status || 'Danger', "".concat(this.message), {
            position: position,
            status: status
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.receipt.controls;
        }
      }]);

      return ReceiptConfComponent;
    }();

    ReceiptConfComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }];
    };

    ReceiptConfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-receipt-conf',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./receipt-conf.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./receipt-conf.component.scss */
      "./src/app/pages/institute/branch-conf/receipt-conf/receipt-conf.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], ReceiptConfComponent);
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/role-management/role-management.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/role-management/role-management.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInstituteBranchConfRoleManagementRoleManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "small {\n  display: block;\n  color: red; }\n\ninput,\nnb-select {\n  display: block; }\n\n.hide {\n  visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5zdGl0dXRlL2JyYW5jaC1jb25mL3JvbGUtbWFuYWdlbWVudC9FOlxcUHJvamVjdHNcXEZyZWVsYW5jZSBQcm9qZWN0c1xcRWR1QXRsYXNcXGVkdWF0bGFzMVxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaW5zdGl0dXRlXFxicmFuY2gtY29uZlxccm9sZS1tYW5hZ2VtZW50XFxyb2xlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUVaOztFQUVFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RpdHV0ZS9icmFuY2gtY29uZi9yb2xlLW1hbmFnZW1lbnQvcm9sZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJlZDtcbn1cbmlucHV0LFxubmItc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGlkZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/institute/branch-conf/role-management/role-management.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/institute/branch-conf/role-management/role-management.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: RoleManagementComponent */

  /***/
  function srcAppPagesInstituteBranchConfRoleManagementRoleManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function () {
      return RoleManagementComponent;
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


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/role/role-assign.service */
    "./src/app/services/role/role-assign.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RoleManagementComponent = /*#__PURE__*/function () {
      function RoleManagementComponent(fb, roleService, active, toasterService) {
        _classCallCheck(this, RoleManagementComponent);

        this.fb = fb;
        this.roleService = roleService;
        this.active = active;
        this.toasterService = toasterService;
        this.submitted = false;
        this.display = false;
        this.selectedSize = 'medium';
      }

      _createClass(RoleManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.roleManage = this.fb.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            instituteId: this.active.snapshot.paramMap.get('id')
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this21 = this;

          this.submitted = true;

          if (this.roleManage.invalid) {
            return;
          } // console.log(this.roleManage.value);


          this.roleService.addRole(this.roleManage.value).subscribe(function (data) {
            // console.log(data);
            _this21.display = true;

            _this21.getOtp(_this21.roleManage.value.phone);
          });
        }
      }, {
        key: "getOtp",
        value: function getOtp(phone) {
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
          param = param.append('register', '1');
          this.roleService.getOtp(phone, param).subscribe(function (res) {// console.log(res);
          });
        }
      }, {
        key: "varifyOtp",
        value: function varifyOtp() {
          var _this22 = this;

          // console.log('otp====>', this.otp);
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
          param = param.append('varifyType', 'roleAssign');
          param = param.append('phone', this.roleManage.value.phone);
          param = param.append('otp', this.otp);
          this.roleService.verifyOtp(param).subscribe(function (res) {
            // console.log(res);
            _this22.valid('top-right', 'success');
          }, function (error) {
            // console.log(error);
            _this22.invalid('top-right', 'danger');
          });
        }
      }, {
        key: "valid",
        value: function valid(position, status) {
          this.toasterService.show(status || 'Success', 'Role Added Successfully', {
            position: position,
            status: status
          });
        }
      }, {
        key: "invalid",
        value: function invalid(position, status) {
          this.toasterService.show(status || 'Danger', 'Invalid OTP', {
            position: position,
            status: status
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.roleManage.controls;
        }
      }]);

      return RoleManagementComponent;
    }();

    RoleManagementComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_4__["RoleAssignService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]
      }];
    };

    RoleManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-role-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./role-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/institute/branch-conf/role-management/role-management.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./role-management.component.scss */
      "./src/app/pages/institute/branch-conf/role-management/role-management.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_role_role_assign_service__WEBPACK_IMPORTED_MODULE_4__["RoleAssignService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]])], RoleManagementComponent);
    /***/
  },

  /***/
  "./src/app/services/role/role-assign.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/role/role-assign.service.ts ***!
    \******************************************************/

  /*! exports provided: RoleAssignService */

  /***/
  function srcAppServicesRoleRoleAssignServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleAssignService", function () {
      return RoleAssignService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RoleAssignService = /*#__PURE__*/function () {
      function RoleAssignService(http) {
        _classCallCheck(this, RoleAssignService);

        this.http = http;
        this.token = localStorage.getItem('token');
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('authorization', 'Bearer ' + this.token);
        this.httpOptions = {
          headers: this.headers
        };
      }

      _createClass(RoleAssignService, [{
        key: "addRole",
        value: function addRole(role) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, "/institute/role"), role, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {// console.log(data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "getOtp",
        value: function getOtp(phone, params) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, "/users/sendOTP/").concat(phone), {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {// console.log(res);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp(params) {
          var _this23 = this;

          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server + '/users/varifyOTP', {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {// console.log(res);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return _this23.handleError(err);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          // console.log(error);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }
      }]);

      return RoleAssignService;
    }();

    RoleAssignService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    RoleAssignService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], RoleAssignService);
    /***/
  }
}]);
//# sourceMappingURL=branch-conf-branch-branch-module-es5.js.map