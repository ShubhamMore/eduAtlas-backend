function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communication-communication-communication-module"], {
  /***/
  "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js ***!
    \*******************************************************************************/

  /*! exports provided: AngularEditorComponent, AngularEditorModule, AngularEditorService, AngularEditorToolbarComponent, ɵa */

  /***/
  function node_modulesKolkovAngularEditorFesm2015KolkovAngularEditorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularEditorComponent", function () {
      return AngularEditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularEditorModule", function () {
      return AngularEditorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularEditorService", function () {
      return AngularEditorService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularEditorToolbarComponent", function () {
      return AngularEditorToolbarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return AeSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function UploadResponse() {}

    if (false) {}

    var AngularEditorService = /*#__PURE__*/function () {
      /**
       * @param {?} http
       * @param {?} doc
       */
      function AngularEditorService(http, doc) {
        var _this = this;

        _classCallCheck(this, AngularEditorService);

        this.http = http;
        this.doc = doc;
        /**
         * save selection when the editor is focussed out
         */

        this.saveSelection =
        /**
        * @return {?}
        */
        function () {
          if (_this.doc.getSelection) {
            /** @type {?} */
            var sel = _this.doc.getSelection();

            if (sel.getRangeAt && sel.rangeCount) {
              _this.savedSelection = sel.getRangeAt(0);
              _this.selectedText = sel.toString();
            }
          } else if (_this.doc.getSelection && _this.doc.createRange) {
            _this.savedSelection = document.createRange();
          } else {
            _this.savedSelection = null;
          }
        };
      }
      /**
       * Executed command from editor header buttons exclude toggleEditorMode
       * @param {?} command string from triggerCommand
       * @return {?}
       */


      _createClass(AngularEditorService, [{
        key: "executeCommand",
        value: function executeCommand(command) {
          /** @type {?} */
          var commands = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre'];

          if (commands.includes(command)) {
            this.doc.execCommand('formatBlock', false, command);
            return;
          }

          this.doc.execCommand(command, false, null);
        }
        /**
         * Create URL link
         * @param {?} url string from UI prompt
         * @return {?}
         */

      }, {
        key: "createLink",
        value: function createLink(url) {
          if (!url.includes('http')) {
            this.doc.execCommand('createlink', false, url);
          } else {
            /** @type {?} */
            var newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + '</a>';
            this.insertHtml(newUrl);
          }
        }
        /**
         * insert color either font or background
         *
         * @param {?} color color to be inserted
         * @param {?} where where the color has to be inserted either text/background
         * @return {?}
         */

      }, {
        key: "insertColor",
        value: function insertColor(color, where) {
          /** @type {?} */
          var restored = this.restoreSelection();

          if (restored) {
            if (where === 'textColor') {
              this.doc.execCommand('foreColor', false, color);
            } else {
              this.doc.execCommand('hiliteColor', false, color);
            }
          }
        }
        /**
         * Set font name
         * @param {?} fontName string
         * @return {?}
         */

      }, {
        key: "setFontName",
        value: function setFontName(fontName) {
          this.doc.execCommand('fontName', false, fontName);
        }
        /**
         * Set font size
         * @param {?} fontSize string
         * @return {?}
         */

      }, {
        key: "setFontSize",
        value: function setFontSize(fontSize) {
          this.doc.execCommand('fontSize', false, fontSize);
        }
        /**
         * Create raw HTML
         * @param {?} html HTML string
         * @return {?}
         */

      }, {
        key: "insertHtml",
        value: function insertHtml(html) {
          /** @type {?} */
          var isHTMLInserted = this.doc.execCommand('insertHTML', false, html);

          if (!isHTMLInserted) {
            throw new Error('Unable to perform the operation');
          }
        }
        /**
         * restore selection when the editor is focused in
         *
         * saved selection when the editor is focused out
         * @return {?}
         */

      }, {
        key: "restoreSelection",
        value: function restoreSelection() {
          if (this.savedSelection) {
            if (this.doc.getSelection) {
              /** @type {?} */
              var sel = this.doc.getSelection();
              sel.removeAllRanges();
              sel.addRange(this.savedSelection);
              return true;
            } else if (this.doc.getSelection
            /*&& this.savedSelection.select*/
            ) {
                // this.savedSelection.select();
                return true;
              }
          } else {
            return false;
          }
        }
        /**
         * setTimeout used for execute 'saveSelection' method in next event loop iteration
         * @param {?} callbackFn
         * @param {?=} timeout
         * @return {?}
         */

      }, {
        key: "executeInNextQueueIteration",
        value: function executeInNextQueueIteration(callbackFn) {
          var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e2;
          setTimeout(callbackFn, timeout);
        }
        /**
         * check any selection is made or not
         * @private
         * @return {?}
         */

      }, {
        key: "checkSelection",
        value: function checkSelection() {
          /** @type {?} */
          var selectedText = this.savedSelection.toString();

          if (selectedText.length === 0) {
            throw new Error('No Selection Made');
          }

          return true;
        }
        /**
         * Upload file to uploadUrl
         * @param {?} file The file
         * @return {?}
         */

      }, {
        key: "uploadImage",
        value: function uploadImage(file) {
          /** @type {?} */
          var uploadData = new FormData();
          uploadData.append('file', file, file.name);
          return this.http.post(this.uploadUrl, uploadData, {
            reportProgress: true,
            observe: 'events',
            withCredentials: this.uploadWithCredentials
          });
        }
        /**
         * Insert image with Url
         * @param {?} imageUrl The imageUrl.
         * @return {?}
         */

      }, {
        key: "insertImage",
        value: function insertImage(imageUrl) {
          this.doc.execCommand('insertImage', false, imageUrl);
        }
        /**
         * @param {?} separator
         * @return {?}
         */

      }, {
        key: "setDefaultParagraphSeparator",
        value: function setDefaultParagraphSeparator(separator) {
          this.doc.execCommand('defaultParagraphSeparator', false, separator);
        }
        /**
         * @param {?} customClass
         * @return {?}
         */

      }, {
        key: "createCustomClass",
        value: function createCustomClass(customClass) {
          /** @type {?} */
          var newTag = this.selectedText;

          if (customClass) {
            /** @type {?} */
            var tagName = customClass.tag ? customClass.tag : 'span';
            newTag = '<' + tagName + ' class="' + customClass["class"] + '">' + this.selectedText + '</' + tagName + '>';
          }

          this.insertHtml(newTag);
        }
        /**
         * @param {?} videoUrl
         * @return {?}
         */

      }, {
        key: "insertVideo",
        value: function insertVideo(videoUrl) {
          if (videoUrl.match('www.youtube.com')) {
            this.insertYouTubeVideoTag(videoUrl);
          }

          if (videoUrl.match('vimeo.com')) {
            this.insertVimeoVideoTag(videoUrl);
          }
        }
        /**
         * @private
         * @param {?} videoUrl
         * @return {?}
         */

      }, {
        key: "insertYouTubeVideoTag",
        value: function insertYouTubeVideoTag(videoUrl) {
          /** @type {?} */
          var id = videoUrl.split('v=')[1];
          /** @type {?} */

          var imageUrl = "https://img.youtube.com/vi/".concat(id, "/0.jpg");
          /** @type {?} */

          var thumbnail = "\n      <div style='position: relative'>\n        <img style='position: absolute; left:200px; top:140px'\n             src=\"https://img.icons8.com/color/96/000000/youtube-play.png\"/>\n        <a href='".concat(videoUrl, "' target='_blank'>\n          <img src=\"").concat(imageUrl, "\" alt=\"click to watch\"/>\n        </a>\n      </div>");
          this.insertHtml(thumbnail);
        }
        /**
         * @private
         * @param {?} videoUrl
         * @return {?}
         */

      }, {
        key: "insertVimeoVideoTag",
        value: function insertVimeoVideoTag(videoUrl) {
          var _this2 = this;

          /** @type {?} */
          var sub = this.http.get("https://vimeo.com/api/oembed.json?url=".concat(videoUrl)).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            /** @type {?} */
            var imageUrl = data.thumbnail_url_with_play_button;
            /** @type {?} */

            var thumbnail = "<div>\n        <a href='".concat(videoUrl, "' target='_blank'>\n          <img src=\"").concat(imageUrl, "\" alt=\"").concat(data.title, "\"/>\n        </a>\n      </div>");

            _this2.insertHtml(thumbnail);

            sub.unsubscribe();
          });
        }
        /**
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "nextNode",
        value: function nextNode(node) {
          if (node.hasChildNodes()) {
            return node.firstChild;
          } else {
            while (node && !node.nextSibling) {
              node = node.parentNode;
            }

            if (!node) {
              return null;
            }

            return node.nextSibling;
          }
        }
        /**
         * @param {?} range
         * @param {?} includePartiallySelectedContainers
         * @return {?}
         */

      }, {
        key: "getRangeSelectedNodes",
        value: function getRangeSelectedNodes(range, includePartiallySelectedContainers) {
          /** @type {?} */
          var node = range.startContainer;
          /** @type {?} */

          var endNode = range.endContainer;
          /** @type {?} */

          var rangeNodes = []; // Special case for a range that is contained within a single node

          if (node === endNode) {
            rangeNodes = [node];
          } else {
            // Iterate nodes until we hit the end container
            while (node && node !== endNode) {
              rangeNodes.push(node = this.nextNode(node));
            } // Add partially selected nodes at the start of the range


            node = range.startContainer;

            while (node && node !== range.commonAncestorContainer) {
              rangeNodes.unshift(node);
              node = node.parentNode;
            }
          } // Add ancestors of the range container, if required


          if (includePartiallySelectedContainers) {
            node = range.commonAncestorContainer;

            while (node) {
              rangeNodes.push(node);
              node = node.parentNode;
            }
          }

          return rangeNodes;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getSelectedNodes",
        value: function getSelectedNodes() {
          /** @type {?} */
          var nodes = [];

          if (this.doc.getSelection) {
            /** @type {?} */
            var sel = this.doc.getSelection();

            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
              nodes.push.apply(nodes, this.getRangeSelectedNodes(sel.getRangeAt(i), true));
            }
          }

          return nodes;
        }
        /**
         * @param {?} el
         * @return {?}
         */

      }, {
        key: "replaceWithOwnChildren",
        value: function replaceWithOwnChildren(el) {
          /** @type {?} */
          var parent = el.parentNode;

          while (el.hasChildNodes()) {
            parent.insertBefore(el.firstChild, el);
          }

          parent.removeChild(el);
        }
        /**
         * @param {?} tagNames
         * @return {?}
         */

      }, {
        key: "removeSelectedElements",
        value: function removeSelectedElements(tagNames) {
          var _this3 = this;

          /** @type {?} */
          var tagNamesArray = tagNames.toLowerCase().split(',');
          this.getSelectedNodes().forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            if (node.nodeType === 1 && tagNamesArray.indexOf(node.tagName.toLowerCase()) > -1) {
              // Remove the node and replace it with its children
              _this3.replaceWithOwnChildren(node);
            }
          });
        }
      }]);

      return AngularEditorService;
    }();

    AngularEditorService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    AngularEditorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    AngularEditorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function AngularEditorService_Factory() {
        return new AngularEditorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      },
      token: AngularEditorService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function CustomClass() {}

    if (false) {}
    /**
     * @record
     */


    function Font() {}

    if (false) {}
    /**
     * @record
     */


    function AngularEditorConfig() {}

    if (false) {}
    /** @type {?} */


    var angularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [{
        "class": 'arial',
        name: 'Arial'
      }, {
        "class": 'times-new-roman',
        name: 'Times New Roman'
      }, {
        "class": 'calibri',
        name: 'Calibri'
      }, {
        "class": 'comic-sans-ms',
        name: 'Comic Sans MS'
      }],
      uploadUrl: 'v1/image',
      uploadWithCredentials: false,
      sanitize: true,
      toolbarPosition: 'top',
      outline: true
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var AngularEditorToolbarComponent = /*#__PURE__*/function () {
      /**
       * @param {?} r
       * @param {?} editorService
       * @param {?} doc
       */
      function AngularEditorToolbarComponent(r, editorService, doc) {
        _classCallCheck(this, AngularEditorToolbarComponent);

        this.r = r;
        this.editorService = editorService;
        this.doc = doc;
        this.htmlMode = false;
        this.linkSelected = false;
        this.block = 'default';
        this.fontName = 'Times New Roman';
        this.fontSize = '3';
        this.headings = [{
          label: 'Heading 1',
          value: 'h1'
        }, {
          label: 'Heading 2',
          value: 'h2'
        }, {
          label: 'Heading 3',
          value: 'h3'
        }, {
          label: 'Heading 4',
          value: 'h4'
        }, {
          label: 'Heading 5',
          value: 'h5'
        }, {
          label: 'Heading 6',
          value: 'h6'
        }, {
          label: 'Heading 7',
          value: 'h7'
        }, {
          label: 'Paragraph',
          value: 'p'
        }, {
          label: 'Predefined',
          value: 'pre'
        }, {
          label: 'Standard',
          value: 'div'
        }, {
          label: 'default',
          value: 'default'
        }];
        this.fontSizes = [{
          label: '1',
          value: '1'
        }, {
          label: '2',
          value: '2'
        }, {
          label: '3',
          value: '3'
        }, {
          label: '4',
          value: '4'
        }, {
          label: '5',
          value: '5'
        }, {
          label: '6',
          value: '6'
        }, {
          label: '7',
          value: '7'
        }];
        this.customClassId = '-1';
        this.customClassList = [{
          label: '',
          value: ''
        }]; // uploadUrl: string;

        this.tagMap = {
          BLOCKQUOTE: 'indent',
          A: 'link'
        };
        this.select = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'PRE', 'DIV'];
        this.buttons = ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList', 'link'];
        this.fonts = [{
          label: '',
          value: ''
        }];
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} classes
       * @return {?}
       */


      _createClass(AngularEditorToolbarComponent, [{
        key: "triggerCommand",

        /**
         * Trigger command from editor header buttons
         * @param {?} command string from toolbar buttons
         * @return {?}
         */
        value: function triggerCommand(command) {
          this.execute.emit(command);
        }
        /**
         * highlight editor buttons when cursor moved or positioning
         * @return {?}
         */

      }, {
        key: "triggerButtons",
        value: function triggerButtons() {
          var _this4 = this;

          if (!this.showToolbar) {
            return;
          }

          this.buttons.forEach(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            /** @type {?} */
            var result = _this4.doc.queryCommandState(e);
            /** @type {?} */


            var elementById = _this4.doc.getElementById(e + '-' + _this4.id);

            if (result) {
              _this4.r.addClass(elementById, 'active');
            } else {
              _this4.r.removeClass(elementById, 'active');
            }
          });
        }
        /**
         * trigger highlight editor buttons when cursor moved or positioning in block
         * @param {?} nodes
         * @return {?}
         */

      }, {
        key: "triggerBlocks",
        value: function triggerBlocks(nodes) {
          var _this5 = this;

          if (!this.showToolbar) {
            return;
          }

          this.linkSelected = nodes.findIndex(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.nodeName === 'A';
          }) > -1;
          /** @type {?} */

          var found = false;
          this.select.forEach(
          /**
          * @param {?} y
          * @return {?}
          */
          function (y) {
            /** @type {?} */
            var node = nodes.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.nodeName === y;
            });

            if (node !== undefined && y === node.nodeName) {
              if (found === false) {
                _this5.block = node.nodeName.toLowerCase();
                found = true;
              }
            } else if (found === false) {
              _this5.block = 'default';
            }
          });
          found = false;

          if (this._customClasses) {
            this._customClasses.forEach(
            /**
            * @param {?} y
            * @param {?} index
            * @return {?}
            */
            function (y, index) {
              /** @type {?} */
              var node = nodes.find(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                if (x instanceof Element) {
                  return x.className === y["class"];
                }
              });

              if (node !== undefined) {
                if (found === false) {
                  _this5.customClassId = index.toString();
                  found = true;
                }
              } else if (found === false) {
                _this5.customClassId = '-1';
              }
            });
          }

          Object.keys(this.tagMap).map(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            /** @type {?} */
            var elementById = _this5.doc.getElementById(_this5.tagMap[e] + '-' + _this5.id);
            /** @type {?} */


            var node = nodes.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.nodeName === e;
            });

            if (node !== undefined && e === node.nodeName) {
              _this5.r.addClass(elementById, 'active');
            } else {
              _this5.r.removeClass(elementById, 'active');
            }
          });
          this.foreColour = this.doc.queryCommandValue('ForeColor');
          this.fontSize = this.doc.queryCommandValue('FontSize');
          this.fontName = this.doc.queryCommandValue('FontName').replace(/"/g, '');
          this.backColor = this.doc.queryCommandValue('backColor');
        }
        /**
         * insert URL link
         * @return {?}
         */

      }, {
        key: "insertUrl",
        value: function insertUrl() {
          /** @type {?} */
          var url = 'https:\/\/';
          /** @type {?} */

          var selection = this.editorService.savedSelection;

          if (selection && selection.commonAncestorContainer.parentElement.nodeName === 'A') {
            /** @type {?} */
            var parent =
            /** @type {?} */
            selection.commonAncestorContainer.parentElement;

            if (parent.href !== '') {
              url = parent.href;
            }
          }

          url = prompt('Insert URL link', url);

          if (url && url !== '' && url !== 'https://') {
            this.editorService.createLink(url);
          }
        }
        /**
         * insert Video link
         * @return {?}
         */

      }, {
        key: "insertVideo",
        value: function insertVideo() {
          this.execute.emit('');
          /** @type {?} */

          var url = prompt('Insert Video link', "https://");

          if (url && url !== '' && url !== "https://") {
            this.editorService.insertVideo(url);
          }
        }
        /**
         * insert color
         * @param {?} color
         * @param {?} where
         * @return {?}
         */

      }, {
        key: "insertColor",
        value: function insertColor(color, where) {
          this.editorService.insertColor(color, where);
          this.execute.emit('');
        }
        /**
         * set font Name/family
         * @param {?} foreColor string
         * @return {?}
         */

      }, {
        key: "setFontName",
        value: function setFontName(foreColor) {
          this.editorService.setFontName(foreColor);
          this.execute.emit('');
        }
        /**
         * set font Size
         * @param {?} fontSize string
         * @return {?}
         */

      }, {
        key: "setFontSize",
        value: function setFontSize(fontSize) {
          this.editorService.setFontSize(fontSize);
          this.execute.emit('');
        }
        /**
         * toggle editor mode (WYSIWYG or SOURCE)
         * @param {?} m boolean
         * @return {?}
         */

      }, {
        key: "setEditorMode",
        value: function setEditorMode(m) {
          /** @type {?} */
          var toggleEditorModeButton = this.doc.getElementById('toggleEditorMode' + '-' + this.id);

          if (m) {
            this.r.addClass(toggleEditorModeButton, 'active');
          } else {
            this.r.removeClass(toggleEditorModeButton, 'active');
          }

          this.htmlMode = m;
        }
        /**
         * Upload image when file is selected
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onFileChanged",
        value: function onFileChanged(event) {
          var _this6 = this;

          /** @type {?} */
          var file = event.target.files[0];

          if (file.type.includes('image/')) {
            if (this.uploadUrl) {
              this.editorService.uploadImage(file).subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                  _this6.editorService.insertImage(e.body.imageUrl);

                  _this6.fileReset();
                }
              });
            } else {
              /** @type {?} */
              var reader = new FileReader();

              reader.onload =
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                /** @type {?} */
                var fr =
                /** @type {?} */
                e.currentTarget;

                _this6.editorService.insertImage(fr.result.toString());
              };

              reader.readAsDataURL(file);
            }
          }
        }
        /**
         * Reset Input
         * @return {?}
         */

      }, {
        key: "fileReset",
        value: function fileReset() {
          this.myInputFile.nativeElement.value = '';
        }
        /**
         * Set custom class
         * @param {?} classId
         * @return {?}
         */

      }, {
        key: "setCustomClass",
        value: function setCustomClass(classId) {
          if (classId === '-1') {
            this.execute.emit('clear');
          } else {
            this.editorService.createCustomClass(this._customClasses[+classId]);
          }
        }
        /**
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "isButtonHidden",
        value: function isButtonHidden(name) {
          if (!name) {
            return false;
          }

          if (!(this.hiddenButtons instanceof Array)) {
            return false;
          }
          /** @type {?} */


          var result;

          var _iterator = _createForOfIteratorHelper(this.hiddenButtons),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var arr = _step.value;

              if (arr instanceof Array) {
                result = arr.find(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  return item === name;
                });
              }

              if (result) {
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return result !== undefined;
        }
      }, {
        key: "customClasses",
        set: function set(classes) {
          if (classes) {
            this._customClasses = classes;
            this.customClassList = this._customClasses.map(
            /**
            * @param {?} x
            * @param {?} i
            * @return {?}
            */
            function (x, i) {
              return {
                label: x.name,
                value: i.toString()
              };
            });
            this.customClassList.unshift({
              label: 'Clear Class',
              value: '-1'
            });
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "defaultFontName",
        set: function set(value) {
          if (value) {
            this.fontName = value;
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "defaultFontSize",
        set: function set(value) {
          if (value) {
            this.fontSize = value;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isLinkButtonDisabled",
        get: function get() {
          return this.htmlMode || !Boolean(this.editorService.selectedText);
        }
      }]);

      return AngularEditorToolbarComponent;
    }();

    AngularEditorToolbarComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'angular-editor-toolbar',
        template: "<div class=\"angular-editor-toolbar\" *ngIf=\"showToolbar\">\n  <div class=\"angular-editor-toolbar-set\">\n    <button type=\"button\" title=\"Undo\" class=\"angular-editor-button\" (click)=\"triggerCommand('undo')\"\n            [hidden]=\"isButtonHidden('undo')\" tabindex=\"-1\"><i\n      class='fa fa-undo'></i></button>\n    <button type=\"button\" title=\"Redo\" class=\"angular-editor-button\" (click)=\"triggerCommand('redo')\"\n            [hidden]=\"isButtonHidden('redo')\" tabindex=\"-1\"><i\n      class='fa fa-repeat'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'bold-'+id\" type=\"button\" title=\"Bold\" class=\"angular-editor-button\" (click)=\"triggerCommand('bold')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('bold')\" tabindex=\"-1\"><i class='fa fa-bold'></i></button>\n    <button [id]=\"'italic-'+id\" type=\"button\" title=\"Italic\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('italic')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('italic')\" tabindex=\"-1\"><i class='fa fa-italic'></i>\n    </button>\n    <button [id]=\"'underline-'+id\" type=\"button\" title=\"Underline\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('underline')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('underline')\"\n            tabindex=\"-1\"><i class='fa fa-underline'></i></button>\n    <button [id]=\"'strikeThrough-'+id\" type=\"button\" title=\"Strikethrough\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('strikeThrough')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('strikeThrough')\"\n            tabindex=\"-1\"><i class='fa fa-strikethrough'></i></button>\n    <button [id]=\"'subscript-'+id\" type=\"button\" title=\"Subscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('subscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('subscript')\"\n            tabindex=\"-1\"><i class='fa fa-subscript'></i></button>\n    <button [id]=\"'superscript-'+id\" type=\"button\" title=\"Superscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('superscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('superscript')\"\n            tabindex=\"-1\"><i class='fa fa-superscript'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'justifyLeft-'+id\" type=\"button\" title=\"Justify Left\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyLeft')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyLeft')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-left'></i></button>\n    <button [id]=\"'justifyCenter-'+id\" type=\"button\" title=\"Justify Center\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyCenter')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyCenter')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-center'></i></button>\n    <button [id]=\"'justifyRight-'+id\" type=\"button\" title=\"Justify Right\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyRight')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyRight')\"\n            tabindex=\"-1\">\n      <i class='fa fa-align-right'></i></button>\n    <button [id]=\"'justifyFull-'+id\" type=\"button\" title=\"Justify Full\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyFull')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyFull')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-justify'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'indent-'+id\" type=\"button\" title=\"Indent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('indent')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('indent')\" tabindex=\"-1\"><i\n      class='fa fa-indent'></i></button>\n    <button [id]=\"'outdent-'+id\" type=\"button\" title=\"Outdent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('outdent')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('outdent')\" tabindex=\"-1\"><i\n      class='fa fa-outdent'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'insertUnorderedList-'+id\" type=\"button\" title=\"Unordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertUnorderedList')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertUnorderedList')\" tabindex=\"-1\"><i\n      class='fa fa-list-ul'></i></button>\n    <button [id]=\"'insertOrderedList-'+id\" type=\"button\" title=\"Ordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertOrderedList')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertOrderedList')\" tabindex=\"-1\"><i\n      class='fa fa-list-ol'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-heading\" [options]=\"headings\"\n               [(ngModel)]=\"block\"\n               (change)=\"triggerCommand(block)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('heading')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-font\" [options]=\"fonts\"\n               [(ngModel)]=\"fontName\"\n               (change)=\"setFontName(fontName)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('fontName')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-font-size\" [options]=\"fontSizes\"\n               [(ngModel)]=\"fontSize\"\n               (change)=\"setFontSize(fontSize)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('fontSize')\"\n               tabindex=\"-1\">\n    </ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(fgInput.value, 'textColor')\"\n      #fgInput>\n    <button [id]=\"'foregroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"fgInput.click()\"\n            title=\"Text Color\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('textColor')\" tabindex=\"-1\"><span\n      class=\"color-label foreground\"><i class=\"fa fa-font\"></i></span>\n    </button>\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(bgInput.value, 'backgroundColor')\"\n      #bgInput>\n    <button [id]=\"'backgroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"bgInput.click()\"\n            title=\"Background Color\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('backgroundColor')\" tabindex=\"-1\"><span\n      class=\"color-label background\"><i class=\"fa fa-font\"></i></span>\n    </button>\n  </div>\n  <div *ngIf=\"_customClasses\" class=\"angular-editor-toolbar-set\">\n    <ae-select class=\"select-custom-style\" [options]=\"customClassList\"\n               [(ngModel)]=\"customClassId\"\n               (change)=\"setCustomClass(customClassId)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('customClasses')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'link-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"insertUrl()\"\n            title=\"Insert Link\" [disabled]=\"isLinkButtonDisabled\" [hidden]=\"isButtonHidden('link')\" tabindex=\"-1\">\n      <i class=\"fa fa-link\"></i>\n    </button>\n    <button [id]=\"'unlink-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"triggerCommand('unlink')\"\n            title=\"Unlink\" [disabled]=\"htmlMode || !linkSelected\" [hidden]=\"isButtonHidden('unlink')\" tabindex=\"-1\">\n      <i class=\"fa fa-chain-broken\"></i>\n    </button>\n    <input\n      style=\"display: none\"\n      accept=\"image/*\"\n      type=\"file\" (change)=\"onFileChanged($event)\"\n      #fileInput>\n    <button [id]=\"'insertImage-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"fileInput.click()\"\n            title=\"Insert Image\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertImage')\" tabindex=\"-1\"><i class=\"fa fa-image\"></i>\n    </button>\n    <button [id]=\"'insertVideo-'+id\" type=\"button\" class=\"angular-editor-button\"\n            (click)=\"insertVideo()\" title=\"Insert Video\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertVideo')\"\n            tabindex=\"-1\"><i\n      class=\"fa fa-video-camera\"></i></button>\n    <button [id]=\"'insertHorizontalRule-'+id\" type=\"button\" title=\"Horizontal Line\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertHorizontalRule')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertHorizontalRule')\" tabindex=\"-1\"><i\n      class=\"fa fa-minus\"></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'clearFormatting-'+id\" type=\"button\" title=\"Clear Formatting\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('removeFormat')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('removeFormat')\"\n            tabindex=\"-1\"><i class='fa fa-remove'></i>\n    </button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'toggleEditorMode-'+id\" type=\"button\" title=\"HTML Code\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('toggleEditorMode')\" [hidden]=\"isButtonHidden('toggleEditorMode')\" tabindex=\"-1\"><i\n      class='fa fa-code'></i></button>\n  </div>\n</div>\n",
        styles: ["@charset \"UTF-8\";/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:rgba(255,255,255,.5)}.angular-editor-toolbar{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]),.select-button{display:inline-block}.select-button.disabled{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}"]
      }]
    }];
    /** @nocollapse */

    AngularEditorToolbarComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: AngularEditorService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    AngularEditorToolbarComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      uploadUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showToolbar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fonts: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customClasses: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      defaultFontName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      defaultFontSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hiddenButtons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      execute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      myInputFile: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['fileInput', {
          "static": true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function isDefined(value) {
      return value !== undefined && value !== null;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AngularEditorComponent = /*#__PURE__*/function () {
      /**
       * @param {?} r
       * @param {?} editorService
       * @param {?} doc
       * @param {?} sanitizer
       * @param {?} cdRef
       * @param {?} defaultTabIndex
       * @param {?} autoFocus
       */
      function AngularEditorComponent(r, editorService, doc, sanitizer, cdRef, defaultTabIndex, autoFocus) {
        _classCallCheck(this, AngularEditorComponent);

        this.r = r;
        this.editorService = editorService;
        this.doc = doc;
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.autoFocus = autoFocus;
        this.modeVisual = true;
        this.showPlaceholder = false;
        this.disabled = false;
        this.focused = false;
        this.touched = false;
        this.changed = false;
        this.id = '';
        this.config = angularEditorConfig;
        this.placeholder = '';
        this.viewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * emits `blur` event when focused out from the textarea
         */
        // tslint:disable-next-line:no-output-native no-output-rename

        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * emits `focus` event when focused in to the textarea
         */
        // tslint:disable-next-line:no-output-rename no-output-native

        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabindex = -1;
        /** @type {?} */

        var parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
      }
      /**
       * @return {?}
       */


      _createClass(AngularEditorComponent, [{
        key: "onFocus",
        value: function onFocus() {
          this.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.config.toolbarPosition = this.config.toolbarPosition ? this.config.toolbarPosition : angularEditorConfig.toolbarPosition;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (isDefined(this.autoFocus)) {
            this.focus();
          }
        }
        /**
         * Executed command from editor header buttons
         * @param {?} command string from triggerCommand
         * @return {?}
         */

      }, {
        key: "executeCommand",
        value: function executeCommand(command) {
          this.focus();

          if (command === 'toggleEditorMode') {
            this.toggleEditorMode(this.modeVisual);
          } else if (command !== '') {
            if (command === 'clear') {
              this.editorService.removeSelectedElements(this.getCustomTags());
              this.onContentChange(this.textArea.nativeElement);
            } else if (command === 'default') {
              this.editorService.removeSelectedElements('h1,h2,h3,h4,h5,h6,p,pre');
              this.onContentChange(this.textArea.nativeElement);
            } else {
              this.editorService.executeCommand(command);
            }

            this.exec();
          }
        }
        /**
         * focus event
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTextAreaFocus",
        value: function onTextAreaFocus(event) {
          var _this7 = this;

          if (this.focused) {
            event.stopPropagation();
            return;
          }

          this.focused = true;
          this.focusEvent.emit(event);

          if (!this.touched || !this.changed) {
            this.editorService.executeInNextQueueIteration(
            /**
            * @return {?}
            */
            function () {
              _this7.configure();

              _this7.touched = true;
            });
          }
        }
        /**
         * \@description fires when cursor leaves textarea
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTextAreaMouseOut",
        value: function onTextAreaMouseOut(event) {
          this.editorService.saveSelection();
        }
        /**
         * blur event
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTextAreaBlur",
        value: function onTextAreaBlur(event) {
          /**
           * save selection if focussed out
           */
          this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);

          if (typeof this.onTouched === 'function') {
            this.onTouched();
          }

          if (event.relatedTarget !== null) {
            /** @type {?} */
            var parent =
            /** @type {?} */
            event.relatedTarget.parentElement;

            if (!parent.classList.contains('angular-editor-toolbar-set') && !parent.classList.contains('ae-picker')) {
              this.blurEvent.emit(event);
              this.focused = false;
            }
          }
        }
        /**
         *  focus the text area when the editor is focused
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          if (this.modeVisual) {
            this.textArea.nativeElement.focus();
          } else {
            /** @type {?} */
            var sourceText = this.doc.getElementById('sourceText' + this.id);
            sourceText.focus();
            this.focused = true;
          }
        }
        /**
         * Executed from the contenteditable section while the input property changes
         * @param {?} element html element from contenteditable
         * @return {?}
         */

      }, {
        key: "onContentChange",
        value: function onContentChange(element) {
          /** @type {?} */
          var html = '';

          if (this.modeVisual) {
            html = element.innerHTML;
          } else {
            html = element.innerText;
          }

          if (!html || html === '<br>') {
            html = '';
          }

          if (typeof this.onChange === 'function') {
            this.onChange(this.config.sanitize || this.config.sanitize === undefined ? this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, html) : html);

            if (!html !== this.showPlaceholder) {
              this.togglePlaceholder(this.showPlaceholder);
            }
          }

          this.changed = true;
        }
        /**
         * Set the function to be called
         * when the control receives a change event.
         *
         * @param {?} fn a function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange =
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e === '<br>' ? fn('') : fn(e);
          };
        }
        /**
         * Set the function to be called
         * when the control receives a touch event.
         *
         * @param {?} fn a function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Write a new value to the element.
         *
         * @param {?} value value to be executed when there is a change in contenteditable
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if ((!value || value === '<br>' || value === '') !== this.showPlaceholder) {
            this.togglePlaceholder(this.showPlaceholder);
          }

          if (value === undefined || value === '' || value === '<br>') {
            value = null;
          }

          this.refreshView(value);
        }
        /**
         * refresh view/HTML of the editor
         *
         * @param {?} value html string from the editor
         * @return {?}
         */

      }, {
        key: "refreshView",
        value: function refreshView(value) {
          /** @type {?} */
          var normalizedValue = value === null ? '' : value;
          this.r.setProperty(this.textArea.nativeElement, 'innerHTML', normalizedValue);
          return;
        }
        /**
         * toggles placeholder based on input string
         *
         * @param {?} value A HTML string from the editor
         * @return {?}
         */

      }, {
        key: "togglePlaceholder",
        value: function togglePlaceholder(value) {
          if (!value) {
            this.r.addClass(this.editorWrapper.nativeElement, 'show-placeholder');
            this.showPlaceholder = true;
          } else {
            this.r.removeClass(this.editorWrapper.nativeElement, 'show-placeholder');
            this.showPlaceholder = false;
          }
        }
        /**
         * Implements disabled state for this element
         *
         * @param {?} isDisabled Disabled flag
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          /** @type {?} */
          var div = this.textArea.nativeElement;
          /** @type {?} */

          var action = isDisabled ? 'addClass' : 'removeClass';
          this.r[action](div, 'disabled');
          this.disabled = isDisabled;
        }
        /**
         * toggles editor mode based on bToSource bool
         *
         * @param {?} bToSource A boolean value from the editor
         * @return {?}
         */

      }, {
        key: "toggleEditorMode",
        value: function toggleEditorMode(bToSource) {
          var _this8 = this;

          /** @type {?} */
          var oContent;
          /** @type {?} */

          var editableElement = this.textArea.nativeElement;

          if (bToSource) {
            oContent = this.r.createText(editableElement.innerHTML);
            this.r.setProperty(editableElement, 'innerHTML', '');
            this.r.setProperty(editableElement, 'contentEditable', false);
            /** @type {?} */

            var oPre = this.r.createElement('pre');
            this.r.setStyle(oPre, 'margin', '0');
            this.r.setStyle(oPre, 'outline', 'none');
            /** @type {?} */

            var oCode = this.r.createElement('code');
            this.r.setProperty(oCode, 'id', 'sourceText' + this.id);
            this.r.setStyle(oCode, 'display', 'block');
            this.r.setStyle(oCode, 'white-space', 'pre-wrap');
            this.r.setStyle(oCode, 'word-break', 'keep-all');
            this.r.setStyle(oCode, 'outline', 'none');
            this.r.setStyle(oCode, 'margin', '0');
            this.r.setStyle(oCode, 'background-color', '#fff5b9');
            this.r.setProperty(oCode, 'contentEditable', true);
            this.r.appendChild(oCode, oContent);
            this.focusInstance = this.r.listen(oCode, 'focus',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this8.onTextAreaFocus(event);
            });
            this.blurInstance = this.r.listen(oCode, 'blur',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this8.onTextAreaBlur(event);
            });
            this.r.appendChild(oPre, oCode);
            this.r.appendChild(editableElement, oPre); // ToDo move to service

            this.doc.execCommand('defaultParagraphSeparator', false, 'div');
            this.modeVisual = false;
            this.viewMode.emit(false);
            oCode.focus();
          } else {
            if (this.doc.querySelectorAll) {
              this.r.setProperty(editableElement, 'innerHTML', editableElement.innerText);
            } else {
              oContent = this.doc.createRange();
              oContent.selectNodeContents(editableElement.firstChild);
              this.r.setProperty(editableElement, 'innerHTML', oContent.toString());
            }

            this.r.setProperty(editableElement, 'contentEditable', true);
            this.modeVisual = true;
            this.viewMode.emit(true);
            this.onContentChange(editableElement);
            editableElement.focus();
          }

          this.editorToolbar.setEditorMode(!this.modeVisual);
        }
        /**
         * toggles editor buttons when cursor moved or positioning
         *
         * Send a node array from the contentEditable of the editor
         * @return {?}
         */

      }, {
        key: "exec",
        value: function exec() {
          this.editorToolbar.triggerButtons();
          /** @type {?} */

          var userSelection;

          if (this.doc.getSelection) {
            userSelection = this.doc.getSelection();
            this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
          }
          /** @type {?} */


          var a = userSelection.focusNode;
          /** @type {?} */

          var els = [];

          while (a && a.id !== 'editor') {
            els.unshift(a);
            a = a.parentNode;
          }

          this.editorToolbar.triggerBlocks(els);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "configure",
        value: function configure() {
          this.editorService.uploadUrl = this.config.uploadUrl;
          this.editorService.uploadWithCredentials = this.config.uploadWithCredentials;

          if (this.config.defaultParagraphSeparator) {
            this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
          }

          if (this.config.defaultFontName) {
            this.editorService.setFontName(this.config.defaultFontName);
          }

          if (this.config.defaultFontSize) {
            this.editorService.setFontSize(this.config.defaultFontSize);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFonts",
        value: function getFonts() {
          /** @type {?} */
          var fonts = this.config.fonts ? this.config.fonts : angularEditorConfig.fonts;
          return fonts.map(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return {
              label: x.name,
              value: x.name
            };
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getCustomTags",
        value: function getCustomTags() {
          /** @type {?} */
          var tags = ['span'];
          this.config.customClasses.forEach(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            if (x.tag !== undefined) {
              if (!tags.includes(x.tag)) {
                tags.push(x.tag);
              }
            }
          });
          return tags.join(',');
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.blurInstance) {
            this.blurInstance();
          }

          if (this.focusInstance) {
            this.focusInstance();
          }
        }
        /**
         * @param {?} html
         * @return {?}
         */

      }, {
        key: "filterStyles",
        value: function filterStyles(html) {
          html = html.replace('position: fixed;', '');
          return html;
        }
      }]);

      return AngularEditorComponent;
    }();

    AngularEditorComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'angular-editor',
        template: "<div class=\"angular-editor\" #angularEditor [style.width]=\"config.width\"\n     [style.minWidth]=\"config.minWidth\">\n  <angular-editor-toolbar *ngIf=\"config.toolbarPosition === 'top'\" #editorToolbar\n                          [id]=\"id\"\n                          [uploadUrl]=\"config.uploadUrl\"\n                          [showToolbar]=\"config.showToolbar !== undefined ? config.showToolbar : true\"\n                          [fonts]=\"getFonts()\"\n                          [customClasses]=\"config.customClasses\"\n                          [defaultFontName]=\"config.defaultFontName\"\n                          [defaultFontSize]=\"config.defaultFontSize\"\n                          [hiddenButtons]=\"config.toolbarHiddenButtons\"\n                          (execute)=\"executeCommand($event)\"></angular-editor-toolbar>\n\n  <div class=\"angular-editor-wrapper\" #editorWrapper>\n    <div #editor class=\"angular-editor-textarea\"\n         [attr.contenteditable]=\"config.editable\"\n         [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n         [attr.translate]=\"config.translate\"\n         [attr.spellcheck]=\"config.spellcheck\"\n         [style.height]=\"config.height\"\n         [style.minHeight]=\"config.minHeight\"\n         [style.maxHeight]=\"config.maxHeight\"\n         [style.outline]=\"config.outline === false ? 'none': undefined\"\n         (input)=\"onContentChange($event.target)\"\n         (focus)=\"onTextAreaFocus($event)\"\n         (blur)=\"onTextAreaBlur($event)\"\n         (click)=\"exec()\"\n         (keyup)=\"exec()\"\n         (mouseout)=\"onTextAreaMouseOut($event)\"\n    >\n    </div>\n    <span class=\"angular-editor-placeholder\">{{ placeholder || config['placeholder'] }}</span>\n  </div>\n  <angular-editor-toolbar *ngIf=\"config.toolbarPosition === 'bottom'\" #editorToolbar\n                          [id]=\"id\"\n                          [uploadUrl]=\"config.uploadUrl\"\n                          [showToolbar]=\"config.showToolbar !== undefined ? config.showToolbar : true\"\n                          [fonts]=\"getFonts()\"\n                          [customClasses]=\"config.customClasses\"\n                          [defaultFontName]=\"config.defaultFontName\"\n                          [defaultFontSize]=\"config.defaultFontSize\"\n                          [hiddenButtons]=\"config.toolbarHiddenButtons\"\n                          (execute)=\"executeCommand($event)\"></angular-editor-toolbar>\n</div>\n",
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return AngularEditorComponent;
          }),
          multi: true
        }],
        styles: ["@charset \"UTF-8\";/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:rgba(255,255,255,.5)}.angular-editor-toolbar{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]){display:inline-block}.angular-editor{position:relative}.angular-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor .angular-editor-wrapper{position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor .angular-editor-wrapper ::ng-deep p{margin-bottom:0}.angular-editor .angular-editor-wrapper .angular-editor-placeholder{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor .angular-editor-wrapper.show-placeholder .angular-editor-placeholder{display:block}.angular-editor .angular-editor-wrapper.disabled{cursor:not-allowed;opacity:.5;pointer-events:none}"]
      }]
    }];
    /** @nocollapse */

    AngularEditorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: AngularEditorService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['autofocus']
        }]
      }];
    };

    AngularEditorComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      html: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      textArea: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['editor', {
          "static": true
        }]
      }],
      editorWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['editorWrapper', {
          "static": true
        }]
      }],
      editorToolbar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['editorToolbar', {
          "static": false
        }]
      }],
      viewMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      blurEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['blur']
      }],
      focusEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['focus']
      }],
      tabindex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['attr.tabindex']
      }],
      onFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['focus']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function SelectOption() {}

    if (false) {}

    var AeSelectComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elRef
       * @param {?} r
       */
      function AeSelectComponent(elRef, r) {
        _classCallCheck(this, AeSelectComponent);

        this.elRef = elRef;
        this.r = r;
        this.options = [];
        this.disabled = false;
        this.optionId = 0;
        this.opened = false;
        this.hidden = 'inline-block'; // tslint:disable-next-line:no-output-native no-output-rename

        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.onChange =
        /**
        * @return {?}
        */
        function () {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * @return {?}
       */


      _createClass(AeSelectComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.selectedOption = this.options[0];

          if (isDefined(this.isHidden) && this.isHidden) {
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this.hidden = 'none';
        }
        /**
         * @param {?} option
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "optionSelect",
        value: function optionSelect(option, event) {
          event.stopPropagation();
          this.setValue(option.value);
          this.onChange(this.selectedOption.value);
          this.changeEvent.emit(this.selectedOption.value);
          this.onTouched();
          this.opened = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "toggleOpen",
        value: function toggleOpen(event) {
          // event.stopPropagation();
          if (this.disabled) {
            return;
          }

          this.opened = !this.opened;
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onClick",
        value: function onClick($event) {
          if (!this.elRef.nativeElement.contains($event.target)) {
            this.close();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.opened = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "writeValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function writeValue(value) {
          if (!value || typeof value !== 'string') {
            return;
          }

          this.setValue(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          /** @type {?} */
          var index = 0;
          /** @type {?} */

          var selectedEl = this.options.find(
          /**
          * @param {?} el
          * @param {?} i
          * @return {?}
          */
          function (el, i) {
            index = i;
            return el.value === value;
          });

          if (selectedEl) {
            this.selectedOption = selectedEl;
            this.optionId = index;
          }
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.labelButton.nativeElement.disabled = isDisabled;
          /** @type {?} */

          var div = this.labelButton.nativeElement;
          /** @type {?} */

          var action = isDisabled ? 'addClass' : 'removeClass';
          this.r[action](div, 'disabled');
          this.disabled = isDisabled;
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleKeyDown",
        value: function handleKeyDown($event) {
          if (!this.opened) {
            return;
          } // console.log($event.key);
          // if (KeyCode[$event.key]) {


          switch ($event.key) {
            case 'ArrowDown':
              this._handleArrowDown($event);

              break;

            case 'ArrowUp':
              this._handleArrowUp($event);

              break;

            case 'Space':
              this._handleSpace($event);

              break;

            case 'Enter':
              this._handleEnter($event);

              break;

            case 'Tab':
              this._handleTab($event);

              break;

            case 'Escape':
              this.close();
              $event.preventDefault();
              break;

            case 'Backspace':
              this._handleBackspace();

              break;
          } // } else if ($event.key && $event.key.length === 1) {
          // this._keyPress$.next($event.key.toLocaleLowerCase());
          // }

        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleArrowDown",
        value: function _handleArrowDown($event) {
          if (this.optionId < this.options.length - 1) {
            this.optionId++;
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleArrowUp",
        value: function _handleArrowUp($event) {
          if (this.optionId >= 1) {
            this.optionId--;
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleSpace",
        value: function _handleSpace($event) {}
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleEnter",
        value: function _handleEnter($event) {
          this.optionSelect(this.options[this.optionId], $event);
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleTab",
        value: function _handleTab($event) {}
        /**
         * @return {?}
         */

      }, {
        key: "_handleBackspace",
        value: function _handleBackspace() {}
      }, {
        key: "label",
        get: function get() {
          return this.selectedOption && this.selectedOption.hasOwnProperty('label') ? this.selectedOption.label : 'Select';
        }
        /**
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.selectedOption.value;
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this.opened;
        }
      }]);

      return AeSelectComponent;
    }();

    AeSelectComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ae-select',
        template: "<span class=\"ae-font ae-picker\" [ngClass]=\"{'ae-expanded':isOpen}\">\n  <button [tabIndex]=\"-1\" #labelButton tabindex=\"0\" type=\"button\" role=\"button\" class=\"ae-picker-label\" (click)=\"toggleOpen($event);\">{{label}}\n    <svg viewBox=\"0 0 18 18\">\n     <!-- <use x=\"0\" y=\"0\" xlink:href=\"../assets/icons.svg#hom\"></use>-->\n      <polygon class=\"ae-stroke\" points=\"7 11 9 13 11 11 7 11\"></polygon>\n      <polygon class=\"ae-stroke\" points=\"7 7 9 5 11 7 7 7\"></polygon>\n    </svg>\n  </button>\n  <span class=\"ae-picker-options\">\n    <button tabindex=\"-1\" type=\"button\" role=\"button\" class=\"ae-picker-item\"\n          *ngFor=\"let item of options; let i = index\"\n          [ngClass]=\"{'selected': item.value === value, 'focused': i === optionId}\"\n          (click)=\"optionSelect(item, $event)\">\n          {{item.label}}\n    </button>\n    <span class=\"dropdown-item\" *ngIf=\"!options.length\">No items for select</span>\n  </span>\n</span>\n",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return AeSelectComponent;
          }),
          multi: true
        }],
        styles: [".ae-font.ae-picker{color:#444;display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:10px;position:relative;width:100%;line-height:26px;vertical-align:middle;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;float:left;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:-webkit-gradient(linear,left top,right top,from(white),to(#fff));background:linear-gradient(to right,#fff,#fff 100%)}.ae-font .ae-picker-label:focus{outline:0}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.ae-font .ae-picker-label:hover:before{background:-webkit-gradient(linear,left top,right top,color-stop(100%,#f5f5f5),to(#fff));background:linear-gradient(to right,#f5f5f5 100%,#fff 100%)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:-webkit-gradient(linear,left top,right top,color-stop(100%,#f5f5f5),to(#fff));background:linear-gradient(to right,#f5f5f5 100%,#fff 100%)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"]
      }]
    }];
    /** @nocollapse */

    AeSelectComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    AeSelectComponent.propDecorators = {
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['hidden']
      }],
      hidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.display']
      }],
      changeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['change']
      }],
      labelButton: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['labelButton', {
          "static": true
        }]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:click', ['$event']]
      }],
      handleKeyDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown', ['$event']]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AngularEditorModule = function AngularEditorModule() {
      _classCallCheck(this, AngularEditorModule);
    };

    AngularEditorModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
        exports: [AngularEditorComponent, AngularEditorToolbarComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=kolkov-angular-editor.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/communication/announcements/announcements.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/communication/announcements/announcements.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCommunicationAnnouncementsAnnouncementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\r\n  <nb-layout-column>\r\n    <nb-card>\r\n      <nb-card-body>\r\n        <h5 style=\"color: #ffd500;\">START NEW THREAD</h5>\r\n        <hr />\r\n        <div class=\"form-group-inline\">\r\n          <label for=\"title\">TITLE</label>\r\n          <input\r\n            nbInput\r\n            type=\"text\"\r\n            id=\"title\"\r\n            status=\"warning\"\r\n            [(ngModel)]=\"announce.title\"\r\n            fullWidth\r\n          />\r\n        </div>\r\n        <hr />\r\n        <angular-editor\r\n          [placeholder]=\"'Enter text here...'\"\r\n          [(ngModel)]=\"announce.text\"\r\n        ></angular-editor>\r\n        <hr />\r\n        <div>\r\n          <!-- <input type=\"button\" value=\"Select Attachment\" nbInput (click)=\"attachment.click()\" fullWidth> -->\r\n          <label>SELECT ATTACHMENT</label>\r\n          <input type=\"file\" nbInput fullWidth status=\"warning\" value=\"select Attachment\" />\r\n        </div>\r\n        <hr />\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-10\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <nb-select\r\n                  placeholder=\"Select Batches\"\r\n                  fullWidth\r\n                  [(ngModel)]=\"announce.batchCodes\"\r\n                  multiple\r\n                  status=\"warning\"\r\n                >\r\n                  <nb-option [value]=\"undefined\">--Select Batch--</nb-option>\r\n                  <nb-option *ngFor=\"let i of batches.batch\" value=\"{{ i.batchCode }}\">{{\r\n                    i.batchCode\r\n                  }}</nb-option>\r\n                </nb-select>\r\n              </div>\r\n              <div class=\"col-sm-1\"></div>\r\n              <div class=\"col-sm-3\">\r\n                <nb-checkbox status=\"warning\" (checkedChange)=\"check($event)\"\r\n                  >SELECT ALL</nb-checkbox\r\n                >\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <nb-checkbox status=\"warning\">PIN THIS</nb-checkbox>\r\n              </div>\r\n            </div>\r\n            <hr />\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <nb-select\r\n                  placeholder=\"Select Category Tags\"\r\n                  multiple\r\n                  [(ngModel)]=\"announce.categories\"\r\n                  fullWidth\r\n                  status=\"warning\"\r\n                >\r\n                  <nb-option [value]=\"undefined\">--Select Category--</nb-option>\r\n                  <nb-option *ngFor=\"let i of institute.institute.category\" value=\"{{ i }}\">{{\r\n                    i\r\n                  }}</nb-option>\r\n                </nb-select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\" style=\"border-left: 1px solid lightgrey;\">\r\n            <a (click)=\"onSubmit()\">\r\n              <img src=\"assets/img/rarrow.png\" width=\"100px\" height=\"100px\" />\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n    <nb-card>\r\n      <nb-card-header style=\"background: #ffd500;\">DISCUSSION THREADS</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"row\" *ngFor=\"let item of announcement; let i = index\">\r\n          <div class=\"col-sm-3\">\r\n            <span>Announcement {{ i }}</span>\r\n          </div>\r\n          <div class=\"col-sm-7\" [innerHTML] = \"item.text | safeHtml\">\r\n            \r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <button class=\"btn btn-danger\" (click)=\"onDelete(routerId)\">Del</button>\r\n          </div>\r\n          <hr />\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </nb-layout-column>\r\n</nb-layout>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/communication/announcements/announcements.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/communication/announcements/announcements.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCommunicationAnnouncementsAnnouncementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#title {\n  border-color: #ffd500; }\n\ninput[type='file'],\nnb-select {\n  border-color: #ffd500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbXVuaWNhdGlvbi9hbm5vdW5jZW1lbnRzL0Y6XFxBa2FzaFxcUHJvamVjdHNcXEVkdUF0bGFzXFxlZHVhdGxhczFcXFBoYXNlXzFcXGVkdUF0bGFzLWNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGNvbW11bmljYXRpb25cXGFubm91bmNlbWVudHNcXGFubm91bmNlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7O0VBRUUscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tdW5pY2F0aW9uL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZkNTAwO1xyXG59XHJcbmlucHV0W3R5cGU9J2ZpbGUnXSxcclxubmItc2VsZWN0IHtcclxuICBib3JkZXItY29sb3I6ICNmZmQ1MDA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/communication/announcements/announcements.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/communication/announcements/announcements.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AnnouncementsComponent */

  /***/
  function srcAppPagesCommunicationAnnouncementsAnnouncementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementsComponent", function () {
      return AnnouncementsComponent;
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
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/communication/announcement.service */
    "./src/app/services/communication/announcement.service.ts");

    var AnnouncementsComponent = /*#__PURE__*/function () {
      function AnnouncementsComponent(api, active, announceService) {
        _classCallCheck(this, AnnouncementsComponent);

        this.api = api;
        this.active = active;
        this.announceService = announceService;
        this.announce = {
          text: '',
          title: '',
          batchCodes: [],
          categories: [],
          instituteId: '',
          selectAll: false
        };
        this.announcement = [{
          text: '',
          title: '',
          batchCodes: [],
          categories: [],
          instituteId: '',
          selectAll: false,
          _id: ''
        }]; // selectAll:boolean = false;

        this.batches = {
          batch: [{
            _id: '',
            course: '',
            batchCode: '',
            description: ''
          }]
        };
        this.institute = {
          institute: {
            name: '',
            logo: null,
            instituteContact: '',
            address: {
              addressLine: '',
              city: '',
              state: '',
              pincode: ''
            },
            category: [''],
            instituteMetaTag: ['']
          }
        };
      }

      _createClass(AnnouncementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.routerId = this.active.snapshot.paramMap.get('id');
          this.announce.instituteId = this.routerId;
          this.getBatches(this.routerId);
          this.getInstitute(this.routerId);
          this.getAnnouncement(this.routerId);
        }
      }, {
        key: "getBatches",
        value: function getBatches(id) {
          var _this9 = this;

          this.api.getBatches(id).subscribe(function (data) {
            var batch = JSON.stringify(data);
            _this9.batches = JSON.parse(batch);
            console.log('my batch' + JSON.parse(JSON.stringify(data)));
          });
        }
      }, {
        key: "getAnnouncement",
        value: function getAnnouncement(id) {
          var _this10 = this;

          this.announceService.getAnnouncement(id).subscribe(function (data) {
            _this10.announcement = data;
            console.log('announce =>', _this10.announcement);
          });
        }
      }, {
        key: "getInstitute",
        value: function getInstitute(id) {
          var _this11 = this;

          this.api.getInstitute(id).subscribe(function (data) {
            var inst = JSON.stringify(data);
            _this11.institute = JSON.parse(inst);
            console.log(_this11.institute.institute);
          });
        }
      }, {
        key: "check",
        value: function check(event) {
          console.log(event);
          this.announce.selectAll = event;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          //console.log('text =>', this.announce);
          this.announceService.postAnnouncement(this.announce).subscribe(function (res) {// this.announcement.push(res);
          });
          this.getAnnouncement(this.routerId);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          this.announceService.deleteAnnouncement(id).subscribe(function (res) {//console.log(res);
          });
          var i = this.announcement.findIndex(function (e) {
            return e._id == id;
          });
          console.log(i);

          if (i !== -1) {
            this.announcement.splice(i, 1);
          }

          this.getAnnouncement(this.routerId);
        }
      }]);

      return AnnouncementsComponent;
    }();

    AnnouncementsComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_4__["AnnouncementService"]
      }];
    };

    AnnouncementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-announcements',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./announcements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/communication/announcements/announcements.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./announcements.component.scss */
      "./src/app/pages/communication/announcements/announcements.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_communication_announcement_service__WEBPACK_IMPORTED_MODULE_4__["AnnouncementService"]])], AnnouncementsComponent);
    /***/
  },

  /***/
  "./src/app/pages/communication/communication.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/communication/communication.component.ts ***!
    \****************************************************************/

  /*! exports provided: CommunicationComponent */

  /***/
  function srcAppPagesCommunicationCommunicationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunicationComponent", function () {
      return CommunicationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommunicationComponent = /*#__PURE__*/function () {
      function CommunicationComponent() {
        _classCallCheck(this, CommunicationComponent);
      }

      _createClass(CommunicationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CommunicationComponent;
    }();

    CommunicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-communication',
      template: " <router-outlet></router-outlet> "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CommunicationComponent);
    /***/
  },

  /***/
  "./src/app/pages/communication/communication/comm-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/communication/communication/comm-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: CommRoutingModule */

  /***/
  function srcAppPagesCommunicationCommunicationCommRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommRoutingModule", function () {
      return CommRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _communication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../communication.component */
    "./src/app/pages/communication/communication.component.ts");
    /* harmony import */


    var _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../announcements/announcements.component */
    "./src/app/pages/communication/announcements/announcements.component.ts");

    var routes = [{
      path: '',
      component: _communication_component__WEBPACK_IMPORTED_MODULE_3__["CommunicationComponent"],
      children: [{
        path: 'announcements/:id',
        component: _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_4__["AnnouncementsComponent"]
      }]
    }];

    var CommRoutingModule = function CommRoutingModule() {
      _classCallCheck(this, CommRoutingModule);
    };

    CommRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], CommRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/communication/communication/communication.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/communication/communication/communication.module.ts ***!
    \***************************************************************************/

  /*! exports provided: CommunicationModule */

  /***/
  function srcAppPagesCommunicationCommunicationCommunicationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunicationModule", function () {
      return CommunicationModule;
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


    var _communication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../communication.component */
    "./src/app/pages/communication/communication.component.ts");
    /* harmony import */


    var _comm_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comm-routing.module */
    "./src/app/pages/communication/communication/comm-routing.module.ts");
    /* harmony import */


    var _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../announcements/announcements.component */
    "./src/app/pages/communication/announcements/announcements.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../pipe/safe-html.pipe */
    "./src/app/pipe/safe-html.pipe.ts");

    var CommunicationModule = function CommunicationModule() {
      _classCallCheck(this, CommunicationModule);
    };

    CommunicationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_communication_component__WEBPACK_IMPORTED_MODULE_3__["CommunicationComponent"], _announcements_announcements_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementsComponent"], _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _comm_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"]]
    })], CommunicationModule);
    /***/
  },

  /***/
  "./src/app/pipe/safe-html.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipe/safe-html.pipe.ts ***!
    \****************************************/

  /*! exports provided: SafeHtmlPipe */

  /***/
  function srcAppPipeSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
      return SafeHtmlPipe;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * Generated class for the SafeHtmlPipe pipe.
     *
     * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
     */


    var SafeHtmlPipe = /*#__PURE__*/function () {
      function SafeHtmlPipe(sanitizer) {
        _classCallCheck(this, SafeHtmlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafeHtmlPipe, [{
        key: "transform",
        value: function transform(html) {
          return this.sanitizer.bypassSecurityTrustHtml(html);
        }
      }]);

      return SafeHtmlPipe;
    }();

    SafeHtmlPipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'safeHtml'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])], SafeHtmlPipe);
    /***/
  },

  /***/
  "./src/app/services/communication/announcement.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/services/communication/announcement.service.ts ***!
    \****************************************************************/

  /*! exports provided: AnnouncementService */

  /***/
  function srcAppServicesCommunicationAnnouncementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementService", function () {
      return AnnouncementService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AnnouncementService = /*#__PURE__*/function () {
      function AnnouncementService(http) {
        _classCallCheck(this, AnnouncementService);

        this.http = http;
        this.authToken = localStorage.getItem('token');
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('authorization', 'Bearer ' + this.authToken);
        this.httpOptions = {
          headers: this.headers
        };
      }

      _createClass(AnnouncementService, [{
        key: "postAnnouncement",
        value: function postAnnouncement(announcement) {
          var _this12 = this;

          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, "/institute/announcement"), announcement, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            return console.log(response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this12.handleError(err);
          }));
        }
      }, {
        key: "getAnnouncement",
        value: function getAnnouncement(id) {
          var _this13 = this;

          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, "/users/announcement/").concat(id), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            return console.log(res);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this13.handleError(err);
          }));
        }
      }, {
        key: "deleteAnnouncement",
        value: function deleteAnnouncement(id) {
          var _this14 = this;

          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, "/users/announcement/").concat(id), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            return console.log(res);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this14.handleError(err);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        }
      }]);

      return AnnouncementService;
    }();

    AnnouncementService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AnnouncementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AnnouncementService);
    /***/
  }
}]);
//# sourceMappingURL=communication-communication-communication-module-es5.js.map