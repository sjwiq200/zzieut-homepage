(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

<<<<<<< HEAD
/***/ "./resources/js/components/companyInfo/CompanyInfoData.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/companyInfo/CompanyInfoData.js ***!
  \****************************************************************/
/*! exports provided: companyInfoData */
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register/components/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/register/components/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
>>>>>>> origin
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyInfoData", function() { return companyInfoData; });
var companyInfoData = {
  brandMission: [{
    id: 1,
    head: "여가 경험을 공유하는 <span class='point'>공간</span>",
    description: "내가 기록한 여가 경험을 나에겐 추억이, 누군가에겐 영감이 되는 곳"
  }, {
    id: 2,
    head: "혼자가 아닌 누군가와 함께 한다는 <span class='point'>즐거움</span>",
    description: "내가 기록한 여가 경험을 나에겐 추억이, 누군가에겐 영감이 되는 곳"
  }, {
    id: 3,
    head: "우리가 함께 만드는 <span class='point'>경험 지도</span>",
    description: "우리의 경험을 모아 최대 규모의 공유 지도를 만드는 것"
  }],
  companyProfile: [{
    head: "Company Name",
    description: "ZziEut <span>찌읏</span>"
  }, {
    head: "CEO",
    description: "Moon Seong-soo <span>문성수</span>"
  }, {
    head: "Main Services",
    description: "Zzim, TsuRoop, ZzimStore <span>찜, 츄릅, 찜스토어</span>"
  }, {
    head: "Main Business",
    description: "SNS Commerce Solutions, Fashion Design Platform, SI, Agency"
  }],
  contact: [{
    head: "Address",
    description: "8-12, Dongsomoonro 23-gil, Seongbuk-gu, Seoul, Republic of Korea (Jian Building, 4th floor)"
  }, {
    head: "Direction",
    description: "7 minutes walk from exit 7 of Sungsin Women's University Station"
  }, {
    head: "Phone",
    description: "070-4905-2942"
  }, {
    head: "Email",
    description: "kkotkkio@zzieut.com"
  }]
};
=======
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["propsData"],
  data: function data() {
    return {
      email: "",
      leftEye: {
        x: 44,
        y: 55
      },
      rightEye: {
        x: 76,
        y: 55
      },
      isClicked: false
    };
  },
  methods: {
    adjustLocation: function adjustLocation() {
      var length = this.email.length;

      if (length === 0) {
        this.leftEye.x = 44;
        this.rightEye.x = 76;
        this.leftEye.y = 55;
        this.rightEye.y = 55;
      } else if (length < 20) {
        this.leftEye.x = 34 + length / 2;
        this.rightEye.x = 66 + length / 2;
        this.leftEye.y = 60 + length / 2;
        this.rightEye.y = 60 + length / 2;
      } else if (19 < length && 34 >= length) {
        console.log(length);
        this.leftEye.x = 36 + length / 2;
        this.rightEye.x = 68 + length / 2;
        this.leftEye.y = 80 - length / 2;
        this.rightEye.y = 80 - length / 2;
      } else if (length > 34) {
        this.leftEye.x = 53;
        this.rightEye.x = 85;
        this.leftEye.y = 63;
        this.rightEye.y = 63;
      }
    },
    checkClicked: function checkClicked() {
      this.isClicked = true;
      this.leftEye.x = 44;
      this.rightEye.x = 76;
      this.leftEye.y = 38;
      this.rightEye.y = 38;
    },
    outSideClicked: function outSideClicked() {
      this.leftEye.x = 44;
      this.rightEye.x = 76;
      this.leftEye.y = 55;
      this.rightEye.y = 55;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register/components/Login.vue?vue&type=template&id=07c80f41&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/register/components/Login.vue?vue&type=template&id=07c80f41& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { staticClass: "loginForm" }, [
    _c("svg", { attrs: { id: "figure", viewBox: "0 0 120 120" } }, [
      _c("path", {
        attrs: {
          d: "M0,150 C0,65 120,65 120,150",
          fill: "\n            #FAF4E8",
          stroke: "black",
          "stroke-width": "2"
        }
      }),
      _vm._v(" "),
      _c("circle", {
        attrs: {
          cx: "60",
          cy: "60",
          r: "40",
          fill: "#FAF4E8",
          stroke: "#000",
          "stroke-width": "2"
        }
      }),
      _vm._v(" "),
      _c("g", { staticClass: "eyes" }, [
        _c("circle", {
          attrs: { cx: _vm.leftEye.x, cy: _vm.leftEye.y, r: "5", fill: "#000" }
        }),
        _vm._v(" "),
        _c("circle", {
          attrs: {
            cx: _vm.rightEye.x,
            cy: _vm.rightEye.y,
            r: "5",
            fill: "#000"
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.email,
          expression: "email"
        }
      ],
      attrs: { type: "text", placeholder: "email" },
      domProps: { value: _vm.email },
      on: {
        input: [
          function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.email = $event.target.value
          },
          _vm.adjustLocation
        ]
      }
    }),
    _vm._v(" "),
    _c("input", {
      attrs: { type: "password", placeholder: "Password" },
      on: { click: _vm.checkClicked }
    }),
    _vm._v(" "),
    _c("span", { staticClass: "forgetPW" }, [_vm._v("비밀번호를 잊으셨나요?")]),
    _vm._v(" "),
    _c("button", [_vm._v("로그인")])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/register/components/Login.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/register/components/Login.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_07c80f41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=07c80f41& */ "./resources/js/components/register/components/Login.vue?vue&type=template&id=07c80f41&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/register/components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_07c80f41___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_07c80f41___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/register/components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/register/components/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/register/components/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register/components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/register/components/Login.vue?vue&type=template&id=07c80f41&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/register/components/Login.vue?vue&type=template&id=07c80f41& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_07c80f41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=07c80f41& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register/components/Login.vue?vue&type=template&id=07c80f41&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_07c80f41___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_07c80f41___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

>>>>>>> origin


/***/ })

}]);