(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _episode_episode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./episode/episode.component */
      "./src/app/episode/episode.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./under-construction/under-construction.component */
      "./src/app/under-construction/under-construction.component.ts");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'episode/:id',
        component: _episode_episode_component__WEBPACK_IMPORTED_MODULE_2__["EpisodeComponent"]
      }, {
        path: 'photos',
        component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_4__["UnderConstructionComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav/nav.component */
      "./src/app/nav/nav.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _episode_episode_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./episode/episode.module */
      "./src/app/episode/episode.module.ts");
      /* harmony import */


      var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @scullyio/ng-lib */
      "../../node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _home_latest_episode_latest_episode_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home/latest-episode/latest-episode.component */
      "./src/app/home/latest-episode/latest-episode.component.ts");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./nav/nav.component */
      "./src/app/nav/nav.component.ts");
      /* harmony import */


      var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./under-construction/under-construction.component */
      "./src/app/under-construction/under-construction.component.ts");
      /* harmony import */


      var _home_episode_list_episode_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./home/episode-list/episode-list.component */
      "./src/app/home/episode-list/episode-list.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _episode_episode_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyLibModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _home_latest_episode_latest_episode_component__WEBPACK_IMPORTED_MODULE_8__["LatestEpisodeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"], _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_10__["UnderConstructionComponent"], _home_episode_list_episode_list_component__WEBPACK_IMPORTED_MODULE_11__["EpisodeListComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _episode_episode_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyLibModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _home_latest_episode_latest_episode_component__WEBPACK_IMPORTED_MODULE_8__["LatestEpisodeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"], _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_10__["UnderConstructionComponent"], _home_episode_list_episode_list_component__WEBPACK_IMPORTED_MODULE_11__["EpisodeListComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _episode_episode_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyLibModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/episode/episode.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/episode/episode.component.ts ***!
      \**********************************************/

    /*! exports provided: EpisodeComponent */

    /***/
    function srcAppEpisodeEpisodeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EpisodeComponent", function () {
        return EpisodeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _episode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./episode.service */
      "./src/app/episode/episode.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function EpisodeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "audio", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.episode.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.episode.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.episode.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.episode.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var EpisodeComponent = /*#__PURE__*/function () {
        function EpisodeComponent(episodeService, ar) {
          _classCallCheck(this, EpisodeComponent);

          this.episodeService = episodeService;
          this.ar = ar;
        }

        _createClass(EpisodeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var id = this.ar.snapshot.paramMap.get('id');
            this.episodeService.getEpisode(id).subscribe(function (episode) {
              _this.episode = episode;
            });
          }
        }]);

        return EpisodeComponent;
      }();

      EpisodeComponent.ɵfac = function EpisodeComponent_Factory(t) {
        return new (t || EpisodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_episode_service__WEBPACK_IMPORTED_MODULE_1__["EpisodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      EpisodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EpisodeComponent,
        selectors: [["app-episode"]],
        decls: 1,
        vars: 1,
        consts: [["class", "container mt-5", 4, "ngIf"], [1, "container", "mt-5"], ["src", "/assets/hogcast-team.jpg", "alt", "Chuck,Logan,Colby", "height", "400px;", 1, "d-block", "m-auto"], ["controls", "", 1, "w-100", "mt-4", 3, "src"], ["type", "audio/mpeg", 3, "src"]],
        template: function EpisodeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EpisodeComponent_div_0_Template, 8, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.episode);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpisodeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-episode',
            template: "\n  <div class=\"container mt-5\" *ngIf=\"episode\">\n    <h1>{{episode.name}}</h1>\n    <p>{{episode.description}}</p>\n    <img src=\"/assets/hogcast-team.jpg\" alt=\"Chuck,Logan,Colby\" height=\"400px;\" class=\"d-block m-auto\">\n    <audio [src]=\"episode.link\" controls class=\"w-100 mt-4\">\n        <source [src]=\"episode.link\" type=\"audio/mpeg\">\n    </audio> \n  </div>\n  ",
            styles: []
          }]
        }], function () {
          return [{
            type: _episode_service__WEBPACK_IMPORTED_MODULE_1__["EpisodeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/episode/episode.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/episode/episode.module.ts ***!
      \*******************************************/

    /*! exports provided: EpisodeModule */

    /***/
    function srcAppEpisodeEpisodeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EpisodeModule", function () {
        return EpisodeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _episode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./episode.component */
      "./src/app/episode/episode.component.ts");

      var EpisodeModule = function EpisodeModule() {
        _classCallCheck(this, EpisodeModule);
      };

      EpisodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EpisodeModule
      });
      EpisodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EpisodeModule_Factory(t) {
          return new (t || EpisodeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EpisodeModule, {
          declarations: [_episode_component__WEBPACK_IMPORTED_MODULE_2__["EpisodeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_episode_component__WEBPACK_IMPORTED_MODULE_2__["EpisodeComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpisodeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_episode_component__WEBPACK_IMPORTED_MODULE_2__["EpisodeComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_episode_component__WEBPACK_IMPORTED_MODULE_2__["EpisodeComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/episode/episode.service.ts":
    /*!********************************************!*\
      !*** ./src/app/episode/episode.service.ts ***!
      \********************************************/

    /*! exports provided: EpisodeService */

    /***/
    function srcAppEpisodeEpisodeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EpisodeService", function () {
        return EpisodeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @scullyio/ng-lib */
      "../../node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");

      var EpisodeService = /*#__PURE__*/function () {
        function EpisodeService(http, transferState) {
          _classCallCheck(this, EpisodeService);

          this.http = http;
          this.transferState = transferState;
        }

        _createClass(EpisodeService, [{
          key: "getEpisodes",
          value: function getEpisodes() {
            return this.transferState.useScullyTransferState('episodes', this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/episodes")));
          }
        }, {
          key: "getEpisode",
          value: function getEpisode(id) {
            return this.transferState.useScullyTransferState("episode".concat(id), this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api, "/episodes/").concat(id)));
          }
        }]);

        return EpisodeService;
      }();

      EpisodeService.ɵfac = function EpisodeService_Factory(t) {
        return new (t || EpisodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["TransferStateService"]));
      };

      EpisodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EpisodeService,
        factory: EpisodeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpisodeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["TransferStateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/home/episode-list/episode-list.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/home/episode-list/episode-list.component.ts ***!
      \*************************************************************/

    /*! exports provided: EpisodeListComponent */

    /***/
    function srcAppHomeEpisodeListEpisodeListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EpisodeListComponent", function () {
        return EpisodeListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0(a1) {
        return ["/episode/", a1];
      };

      function EpisodeListComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var episode_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, episode_r1.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](episode_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, episode_r1.publishDate, "fullDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](episode_r1.keywords);
        }
      }

      var EpisodeListComponent = function EpisodeListComponent() {
        _classCallCheck(this, EpisodeListComponent);
      };

      EpisodeListComponent.ɵfac = function EpisodeListComponent_Factory(t) {
        return new (t || EpisodeListComponent)();
      };

      EpisodeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EpisodeListComponent,
        selectors: [["app-episode-list"]],
        inputs: {
          episodes: "episodes"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "text-muted"], [1, "invisible"]],
        template: function EpisodeListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EpisodeListComponent_a_0_Template, 8, 9, "a", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.episodes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpisodeListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-episode-list',
            template: "\n    <a [routerLink]=\"['/episode/', episode.id]\" *ngFor=\"let episode of episodes\">\n      <h2>{{episode.name}}</h2>\n      <small class=\"text-muted\">{{episode.publishDate | date: 'fullDate'}}</small>\n      <p class=\"invisible\">{{episode.keywords}}</p>\n    </a>\n  ",
            styles: [],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, {
          episodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _episode_episode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../episode/episode.service */
      "./src/app/episode/episode.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _episode_list_episode_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./episode-list/episode-list.component */
      "./src/app/home/episode-list/episode-list.component.ts");
      /* harmony import */


      var _latest_episode_latest_episode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./latest-episode/latest-episode.component */
      "./src/app/home/latest-episode/latest-episode.component.ts");

      function HomeComponent_app_latest_episode_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-latest-episode", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("episode", ctx_r0.latestEpisode);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(episodeService) {
          _classCallCheck(this, HomeComponent);

          this.episodeService = episodeService;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.episodeService.getEpisodes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(Boolean)).subscribe(function (episodes) {
              _this2.episodes = episodes.reverse();
              _this2.latestEpisode = _this2.episodes[0];

              _this2.episodes.shift();
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_episode_episode_service__WEBPACK_IMPORTED_MODULE_2__["EpisodeService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 4,
        vars: 2,
        consts: [[1, "sticky-top", "sticky"], [3, "episode", 4, "ngIf"], [1, "p-5"], [3, "episodes"], [3, "episode"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_latest_episode_1_Template, 1, 1, "app-latest-episode", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-episode-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.latestEpisode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("episodes", ctx.episodes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _episode_list_episode_list_component__WEBPACK_IMPORTED_MODULE_4__["EpisodeListComponent"], _latest_episode_latest_episode_component__WEBPACK_IMPORTED_MODULE_5__["LatestEpisodeComponent"]],
        styles: [".sticky-top[_ngcontent-%COMP%]{top:70px}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            template: "\n  <div class=\"sticky-top sticky\">\n  <app-latest-episode [episode]=\"latestEpisode\" *ngIf=\"latestEpisode\"></app-latest-episode>\n  </div>\n  <div class=\"p-5\">\n    <app-episode-list [episodes]=\"episodes\"></app-episode-list>\n  </div>\n  ",
            styles: ['.sticky-top{top:70px}']
          }]
        }], function () {
          return [{
            type: _episode_episode_service__WEBPACK_IMPORTED_MODULE_2__["EpisodeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/home/latest-episode/latest-episode.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/home/latest-episode/latest-episode.component.ts ***!
      \*****************************************************************/

    /*! exports provided: LatestEpisodeComponent */

    /***/
    function srcAppHomeLatestEpisodeLatestEpisodeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LatestEpisodeComponent", function () {
        return LatestEpisodeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0(a1) {
        return ["/episode/", a1];
      };

      var LatestEpisodeComponent = function LatestEpisodeComponent() {
        _classCallCheck(this, LatestEpisodeComponent);
      };

      LatestEpisodeComponent.ɵfac = function LatestEpisodeComponent_Factory(t) {
        return new (t || LatestEpisodeComponent)();
      };

      LatestEpisodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LatestEpisodeComponent,
        selectors: [["app-latest-episode"]],
        inputs: {
          episode: "episode"
        },
        decls: 12,
        vars: 7,
        consts: [[1, "latest-episode", "pl-5", "d-flex", "align-items-center", "justify-content-start", "shadow"], [1, "mt-4"], [1, "text-white", 3, "routerLink"], ["src", "/assets/play.svg", "alt", "play media", "height", "20px;"], [1, "description", "w-50", "mt-4"], ["controls", "", 1, "w-50", "mt-4", 3, "src"], ["type", "audio/mpeg", 3, "src"]],
        template: function LatestEpisodeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Latest Episode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "audio", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.episode.id));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.episode.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.episode.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.episode.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.episode.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".latest-episode[_ngcontent-%COMP%] {\n      background-image: url('https://farm4.staticflickr.com/3936/15577316502_786be0f628_k.jpg');\n      background-repeat: no-repeat;\n      background-position:0 15%;\n      height:525px;\n      text-shadow: 0 2px 5px rgba(0,0,0,.5);\n      color:#FFF;\n      background-color:#4a4a4a;\n      background-blend-mode: multiply;\n      background-size:cover;\n    }\n    \n    .description[_ngcontent-%COMP%]{\n      line-height: 30px;\n    }\n\n    audio[_ngcontent-%COMP%]{\n      outline:none;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatestEpisodeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-latest-episode',
            template: "\n  <div class=\"latest-episode pl-5 d-flex align-items-center justify-content-start shadow\">\n    <div>\n      <h3>Latest Episode</h3>\n      <h1 class=\"mt-4\">\n        <a [routerLink]=\"['/episode/', episode.id]\" class=\"text-white\">\n          {{episode.name}}\n          <img src=\"/assets/play.svg\" alt=\"play media\" height=\"20px;\">\n        </a>\n      </h1>\n      <h5 class=\"description w-50 mt-4\">{{episode.description}}</h5>\n      <audio [src]=\"episode.link\" controls class=\"w-50 mt-4\">\n        <source [src]=\"episode.link\" type=\"audio/mpeg\">\n      </audio>\n    </div>\n  </div>\n  ",
            styles: [".latest-episode {\n      background-image: url('https://farm4.staticflickr.com/3936/15577316502_786be0f628_k.jpg');\n      background-repeat: no-repeat;\n      background-position:0 15%;\n      height:525px;\n      text-shadow: 0 2px 5px rgba(0,0,0,.5);\n      color:#FFF;\n      background-color:#4a4a4a;\n      background-blend-mode: multiply;\n      background-size:cover;\n    }\n    \n    .description{\n      line-height: 30px;\n    }\n\n    audio{\n      outline:none;\n    }\n    "]
          }]
        }], function () {
          return [];
        }, {
          episode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/nav/nav.component.ts":
    /*!**************************************!*\
      !*** ./src/app/nav/nav.component.ts ***!
      \**************************************/

    /*! exports provided: NavComponent */

    /***/
    function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
        return NavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var NavComponent = /*#__PURE__*/function () {
        function NavComponent() {
          _classCallCheck(this, NavComponent);
        }

        _createClass(NavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavComponent;
      }();

      NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || NavComponent)();
      };

      NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavComponent,
        selectors: [["app-nav"]],
        decls: 22,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "sticky", "sticky-top"], ["href", "#", 1, "navbar-brand"], ["src", "assets/logo.png", "alt", "The Hogcast Logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExample04", "aria-controls", "navbarsExample04", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "", 1, "nav-link"], ["href", "https://podcasts.apple.com/us/podcast/the-hogcast/id928260251?mt=2", "target", "_blank", 1, "nav-link"], ["href", "https://twitter.com/TheHogCast", "target", "_blank", 1, "nav-link"], ["href", "https://www.facebook.com/thehogcast", "target", "_blank", 1, "nav-link"], ["routerLink", "photos", 1, "nav-link"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Photos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n      width:250px;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav',
            template: "\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-dark sticky sticky-top\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/logo.png\" alt=\"The Hogcast Logo\">\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"https://podcasts.apple.com/us/podcast/the-hogcast/id928260251?mt=2\" target=\"_blank\">Subscribe</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"https://twitter.com/TheHogCast\" target=\"_blank\">Twitter</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"https://www.facebook.com/thehogcast\" target=\"_blank\">Facebook</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"photos\">Photos</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  ",
            styles: [".navbar-brand img{\n      width:250px;\n    }"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/under-construction/under-construction.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/under-construction/under-construction.component.ts ***!
      \********************************************************************/

    /*! exports provided: UnderConstructionComponent */

    /***/
    function srcAppUnderConstructionUnderConstructionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function () {
        return UnderConstructionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UnderConstructionComponent = /*#__PURE__*/function () {
        function UnderConstructionComponent() {
          _classCallCheck(this, UnderConstructionComponent);
        }

        _createClass(UnderConstructionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UnderConstructionComponent;
      }();

      UnderConstructionComponent.ɵfac = function UnderConstructionComponent_Factory(t) {
        return new (t || UnderConstructionComponent)();
      };

      UnderConstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UnderConstructionComponent,
        selectors: [["ng-component"]],
        decls: 5,
        vars: 0,
        consts: [[1, "d-flex", "align-items-center", "justify-content-center", "bg-dark", "construction-container"], ["src", "/assets/logo.png", "alt", "The Hogcast Logo"], [1, "text-center", "text-white"]],
        template: function UnderConstructionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Under Construction!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".construction-container[_ngcontent-%COMP%]{\n      height:90vh;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderConstructionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: "\n  <div class=\"d-flex align-items-center justify-content-center bg-dark construction-container\">\n    <div>\n    <img src=\"/assets/logo.png\" alt=\"The Hogcast Logo\">\n     <h2 class=\"text-center text-white\">Under Construction!</h2>\n    </div>\n  </div>\n  ",
            styles: ["\n    .construction-container{\n      height:90vh;\n    }"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        api: 'https://hogcast-services.herokuapp.com/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\LRLiv\workspaces\hogcast\apps\client\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map