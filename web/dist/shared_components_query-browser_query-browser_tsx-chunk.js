"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["shared_components_query-browser_query-browser_tsx"],{

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./shared/components/query-browser/query-browser.scss"
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./shared/components/query-browser/query-browser.scss ***!
  \***************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.monitoring-plugin-dashboards__legend-wrap {
  height: 100%;
  padding-top: 1px;
}
.monitoring-plugin-dashboards__legend-wrap svg {
  max-height: 75px;
}

.monitoring-plugin-graph-wrapper.monitoring-plugin-graph-wrapper--query-browser {
  padding: 0;
  overflow: visible;
}
.monitoring-plugin-graph-wrapper.monitoring-plugin-graph-wrapper--query-browser--with-legend {
  min-height: 275px;
}

.monitoring-plugin-horizontal-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: var(--pf-t--global--spacer--md);
  padding-right: var(--pf-t--global--spacer--md);
}
.monitoring-plugin-horizontal-scroll:before, .monitoring-plugin-horizontal-scroll:after {
  bottom: 0;
  content: "";
  pointer-events: none;
  position: absolute;
  top: 0;
  width: var(--pf-t--global--spacer--md);
  z-index: 1;
}
.monitoring-plugin-horizontal-scroll:before {
  background: linear-gradient(to right, var(--pf-t--global--background--color--primary--default), rgba(255, 255, 255, 0));
  left: 0;
}
.monitoring-plugin-horizontal-scroll:after {
  background: linear-gradient(to left, var(--pf-t--global--background--color--primary--default), rgba(255, 255, 255, 0));
  right: 0;
}`, "",{"version":3,"sources":["webpack://./shared/components/query-browser/query-browser.scss"],"names":[],"mappings":"AAAA;EAEE,YAAA;EACA,gBAAA;AAAF;AAEE;EACE,gBALsB;AAK1B;;AAIA;EACE,UAAA;EACA,iBAAA;AADF;AAGE;EACE,iBAAA;AADJ;;AAKA;EACE,gBAAA;EACA,kBAAA;EACA,6CAAA;EACA,8CAAA;AAFF;AAIE;EAEE,SAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,MAAA;EACA,sCAAA;EACA,UAAA;AAHJ;AAME;EACE,uHAAA;EAKA,OAAA;AARJ;AAWE;EACE,sHAAA;EAKA,QAAA;AAbJ","sourcesContent":[".monitoring-plugin-dashboards__legend-wrap {\n  $legend-content-height: 75px;\n  height: 100%;\n  padding-top: 1px;\n\n  svg {\n    max-height: $legend-content-height; // Required for Chrome to prevent vertical scrolling\n  }\n}\n\n.monitoring-plugin-graph-wrapper.monitoring-plugin-graph-wrapper--query-browser {\n  padding: 0;\n  overflow: visible;\n  \n  &--with-legend {\n    min-height: 275px;\n  }\n}\n\n.monitoring-plugin-horizontal-scroll {\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding-left: var(--pf-t--global--spacer--md);\n  padding-right: var(--pf-t--global--spacer--md);\n\n  &:before,\n  &:after {\n    bottom: 0;\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: var(--pf-t--global--spacer--md);\n    z-index: 1;\n  }\n\n  &:before {\n    background: linear-gradient(\n      to right,\n      var(--pf-t--global--background--color--primary--default),\n      rgba(255, 255, 255, 0)\n    );\n    left: 0;\n  }\n\n  &:after {\n    background: linear-gradient(\n      to left,\n      var(--pf-t--global--background--color--primary--default),\n      rgba(255, 255, 255, 0)\n    );\n    right: 0;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./shared/components/query-browser/query-browser.scss"
/*!************************************************************!*\
  !*** ./shared/components/query-browser/query-browser.scss ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_query_browser_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./query-browser.scss */ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./shared/components/query-browser/query-browser.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_query_browser_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_query_browser_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_query_browser_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_query_browser_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./shared/components/format.tsx"
/*!**************************************!*\
  !*** ./shared/components/format.tsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatNumber: () => (/* binding */ formatNumber)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isNil.js");
/* harmony import */ var _console_utils_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console/utils/units */ "./shared/console/utils/units.ts");


const formatNumber = (s, decimals = 2, format = 'short')=>{
    const value = Number(s);
    if (lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](s) || isNaN(value)) {
        return s || '-';
    }
    switch(format){
        case 'percentunit':
            return Intl.NumberFormat(undefined, {
                style: 'percent',
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals
            }).format(value);
        case 'bytes':
            return (0,_console_utils_units__WEBPACK_IMPORTED_MODULE_1__.humanizeBinaryBytes)(value).string;
        case 'Bytes':
            return (0,_console_utils_units__WEBPACK_IMPORTED_MODULE_1__.humanizeDecimalBytes)(value).string;
        case 'bps':
            return (0,_console_utils_units__WEBPACK_IMPORTED_MODULE_1__.humanizeBinaryBytesPerSec)(value).string;
        case 'Bps':
            return (0,_console_utils_units__WEBPACK_IMPORTED_MODULE_1__.humanizeDecimalBytesPerSec)(value).string;
        case 'pps':
            return (0,_console_utils_units__WEBPACK_IMPORTED_MODULE_1__.humanizePacketsPerSec)(value).string;
        case 'ms':
            return (0,_console_utils_units__WEBPACK_IMPORTED_MODULE_1__.humanizeSeconds)(value, 'ms').string;
        case 's':
            return (0,_console_utils_units__WEBPACK_IMPORTED_MODULE_1__.humanizeSeconds)(value * 1000, 'ms').string;
        case 'short':
        // fall through
        default:
            return (0,_console_utils_units__WEBPACK_IMPORTED_MODULE_1__.humanizeNumber)(value).string;
    }
};


/***/ },

/***/ "./shared/components/query-browser/query-browser-theme.ts"
/*!****************************************************************!*\
  !*** ./shared/components/query-browser/query-browser-theme.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryBrowserTheme: () => (/* binding */ queryBrowserTheme)
/* harmony export */ });
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartTheme/ChartThemeColor.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartUtils/chart-theme.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_global_FontFamily.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_global_letter_spacing.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_axis_grid_stroke_Color.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_axis_tick_Size.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_axis_tick_Width.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_axis_tick_stroke_Color.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_axis_tick_label_Fill.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_line_data_Opacity.js");


const pfDependentAxisTickLabels = {
    padding: 4,
    // --pf-t-global--spacer-xs
    fontFamily: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_2__.chart_global_FontFamily.var,
    letterSpacing: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_3__.chart_global_letter_spacing.var,
    fill: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_8__.chart_axis_tick_label_Fill.var
};
const theme = {
    chart: {
        padding: {
            bottom: 24,
            // --pf-t--global--spacer--lg
            left: 64,
            //--pf-t--global--spacer--3xl
            right: 16,
            //--pf-t--global--spacer--md
            top: 4
        }
    },
    //--pf-t--global--spacer--xs
    dependentAxis: {
        style: {
            axis: {
                stroke: 'none'
            },
            grid: {
                stroke: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_4__.chart_axis_grid_stroke_Color.var
            },
            tickLabels: pfDependentAxisTickLabels
        }
    },
    independentAxis: {
        style: {
            ticks: {
                size: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_5__.chart_axis_tick_Size.value,
                strokeWidth: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_6__.chart_axis_tick_Width.value,
                stroke: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_7__.chart_axis_tick_stroke_Color.value
            },
            tickLabels: pfDependentAxisTickLabels,
            grid: {
                stroke: 'none'
            }
        }
    },
    line: {
        style: {
            data: {
                opacity: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_9__.chart_line_data_Opacity.value
            }
        }
    }
};
const queryBrowserTheme = (0,_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_1__.getCustomTheme)(_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_0__.ChartThemeColor.multiOrdered, theme);


/***/ },

/***/ "./shared/components/query-browser/query-browser.tsx"
/*!***********************************************************!*\
  !*** ./shared/components/query-browser/query-browser.tsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error: () => (/* binding */ Error),
/* harmony export */   QueryBrowser: () => (/* binding */ QueryBrowser),
/* harmony export */   colors: () => (/* binding */ colors)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/Chart/Chart.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartArea/ChartArea.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartAxis/ChartAxis.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartGroup/ChartGroup.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartLegend/ChartLegend.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartLine/ChartLine.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartStack/ChartStack.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartVoronoiContainer/ChartVoronoiContainer.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Card */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Card/@patternfly/react-core/dist/dynamic/components/Card");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Checkbox */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Checkbox/@patternfly/react-core/dist/dynamic/components/Checkbox");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Dropdown */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Dropdown/@patternfly/react-core/dist/dynamic/components/Dropdown");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/InputGroup */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/InputGroup/@patternfly/react-core/dist/dynamic/components/InputGroup");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Level__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Level */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Level/@patternfly/react-core/dist/dynamic/layouts/Level");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Split */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Split/@patternfly/react-core/dist/dynamic/layouts/Split");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TextInput */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TextInput/@patternfly/react-core/dist/dynamic/components/TextInput");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Tooltip */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Tooltip/@patternfly/react-core/dist/dynamic/components/Tooltip");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_chart_line_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/chart-line-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/chart-line-icon/@patternfly/react-icons/dist/dynamic/icons/chart-line-icon");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/forEach.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/clamp.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/debounce.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/every.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/has.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEqual.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/last.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/maxBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/minBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/range.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/reject.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/some.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/sumBy.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _shared_store_actions__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../shared/store/actions */ "./shared/store/actions.ts");
/* harmony import */ var _shared_console_graphs_graph_empty__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../shared/console/graphs/graph-empty */ "./shared/console/graphs/graph-empty.tsx");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _shared_console_utils_datetime__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../shared/console/utils/datetime */ "./shared/console/utils/datetime.ts");
/* harmony import */ var _shared_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../shared/console/utils/poll-hook */ "./shared/console/utils/poll-hook.ts");
/* harmony import */ var _shared_console_utils_ref_width_hook__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../shared/console/utils/ref-width-hook */ "./shared/console/utils/ref-width-hook.ts");
/* harmony import */ var _shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../shared/console/utils/safe-fetch-hook */ "./shared/console/utils/safe-fetch-hook.ts");
/* harmony import */ var _hooks_useBoolean__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _query_browser_theme__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./query-browser-theme */ "./shared/components/query-browser/query-browser-theme.ts");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_global_fill_color_200.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_area_Opacity.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/chart_axis_tick_Size.js");
/* harmony import */ var _shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../../shared/console/console-shared/error/fallbacks/withFallback */ "./shared/console/console-shared/error/fallbacks/withFallback.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/loading/LoadingInline */ "./shared/console/console-shared/src/components/loading/LoadingInline.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_query_browser_QueryBrowserTooltip__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/query-browser/QueryBrowserTooltip */ "./shared/console/console-shared/src/components/query-browser/QueryBrowserTooltip.tsx");
/* harmony import */ var _shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/datetime/prometheus */ "./shared/console/console-shared/src/datetime/prometheus.ts");
/* harmony import */ var _hooks_usePerspective__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _query_browser_scss__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./query-browser.scss */ "./shared/components/query-browser/query-browser.scss");
/* harmony import */ var _constants_data_test__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");


















































const spans = [
    '5m',
    '15m',
    '30m',
    '1h',
    '2h',
    '6h',
    '12h',
    '1d',
    '2d',
    '1w',
    '2w'
];
const colors = _query_browser_theme__WEBPACK_IMPORTED_MODULE_52__.queryBrowserTheme.line.colorScale;
const Error = ({ error, title = 'An error occurred' })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_10__.Alert, {
        isInline: true,
        title: title,
        variant: "danger",
        children: lodash_es__WEBPACK_IMPORTED_MODULE_29__["default"](error, 'json.error', error.message)
    });
const BOTTOM_SERIES_HEIGHT = 34;
const LEGEND_HEIGHT = 90;
const CHART_HEIGHT = 200;
const GraphEmptyState = ({ children, title })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_15__.EmptyState, {
            titleText: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_21__.Title, {
                headingLevel: "h2",
                size: "md",
                children: title
            }),
            icon: _patternfly_react_icons_dist_dynamic_icons_chart_line_icon__WEBPACK_IMPORTED_MODULE_23__.ChartLineIcon,
            variant: _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_15__.EmptyStateVariant.full,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_15__.EmptyStateBody, {
                children: children
            })
        })
    });
const SpanControls = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_41__.memo)(({ defaultSpanText, onChange, span, hasReducedResolution })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_42__.useTranslation)("plugin__monitoring-plugin");
    const [isValid, setIsValid] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(true);
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)((0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_59__.formatPrometheusDuration)(span));
    const [isOpen, setIsOpen, , setClosed] = (0,_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_51__.useBoolean)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_41__.useEffect)(()=>{
        setText((0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_59__.formatPrometheusDuration)(span));
    }, [
        span
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedOnChange = (0,react__WEBPACK_IMPORTED_MODULE_41__.useCallback)(lodash_es__WEBPACK_IMPORTED_MODULE_27__["default"](onChange, 400), [
        onChange
    ]);
    const setSpan = (newText, isDebounced = false)=>{
        const newSpan = (0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_59__.parsePrometheusDuration)(newText);
        const newIsValid = newSpan > 0;
        setIsValid(newIsValid);
        setText(newText);
        if (newIsValid && newSpan !== span) {
            const fn = isDebounced ? debouncedOnChange : onChange;
            fn(newSpan);
        }
    };
    const dropdownItems = spans.map((s)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownItem, {
            onClick: ()=>setSpan(s, true),
            children: s
        }, s));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Level__WEBPACK_IMPORTED_MODULE_17__.Level, {
        hasGutter: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Level__WEBPACK_IMPORTED_MODULE_17__.LevelItem, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_16__.InputGroup, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_16__.InputGroupItem, {
                            isFill: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInput__WEBPACK_IMPORTED_MODULE_20__.TextInput, {
                                "aria-label": t('graph timespan'),
                                validated: isValid ? 'default' : 'error',
                                onChange: (_event, v)=>setSpan(v, true),
                                type: "text",
                                value: text,
                                "data-test": _constants_data_test__WEBPACK_IMPORTED_MODULE_62__.DataTestIDs.MetricGraphTimespanInput
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_16__.InputGroupItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown, {
                                isOpen: isOpen,
                                onSelect: setClosed,
                                toggle: (toggleRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_18__.MenuToggle, {
                                        ref: toggleRef,
                                        onClick: setIsOpen,
                                        isExpanded: isOpen,
                                        "aria-label": t('graph timespan'),
                                        "data-test": _constants_data_test__WEBPACK_IMPORTED_MODULE_62__.DataTestIDs.MetricGraphTimespanDropdown
                                    }),
                                popperProps: {
                                    position: 'right'
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownList, {
                                    children: dropdownItems
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Level__WEBPACK_IMPORTED_MODULE_17__.LevelItem, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_11__.Button, {
                    onClick: ()=>setSpan(defaultSpanText),
                    type: "button",
                    variant: "tertiary",
                    "data-test": _constants_data_test__WEBPACK_IMPORTED_MODULE_62__.DataTestIDs.MetricResetZoomButton,
                    children: t('Reset zoom')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Level__WEBPACK_IMPORTED_MODULE_17__.LevelItem, {
                children: hasReducedResolution && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_10__.Alert, {
                    isInline: true,
                    isPlain: true,
                    title: t('Displaying with reduced resolution due to large dataset.'),
                    variant: "info",
                    truncateTitle: 1
                })
            })
        ]
    });
});
SpanControls.displayName = 'SpanControls';
const LegendContainer = ({ children })=>{
    // The first child should be a <rect> with a `width` prop giving the legend's content width
    const width = children?.[0]?.props?.width ?? '100%';
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", {
        height: LEGEND_HEIGHT,
        width: "100%",
        y: CHART_HEIGHT,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "monitoring-plugin-dashboards__legend-wrap monitoring-plugin-horizontal-scroll",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: width,
                children: children
            })
        })
    });
};
const Null = ()=>null;
const nullComponent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Null, {});
const getXDomain = (endTime, span)=>[
        endTime - span,
        endTime
    ];
const ONE_MINUTE = 60 * 1000;
const Graph = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_41__.memo)(({ allSeries, disabledSeries, fixedXDomain, formatSeriesTitle, isStack, showLegend, span, units, width })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_42__.useTranslation)("plugin__monitoring-plugin");
    const data = [];
    const tooltipSeriesNames = [];
    const tooltipSeriesLabels = [];
    const legendData = [];
    // eslint-disable-next-line react-hooks/purity
    const [xDomain, setXDomain] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(fixedXDomain || getXDomain(Date.now(), span));
    // Only update X-axis if the time range (fixedXDomain or span) or graph data (allSeries) change
    (0,react__WEBPACK_IMPORTED_MODULE_41__.useEffect)(()=>{
        setXDomain(fixedXDomain || getXDomain(Date.now(), span));
    }, [
        allSeries,
        span,
        fixedXDomain
    ]);
    const domain = {
        x: xDomain,
        y: undefined
    };
    lodash_es__WEBPACK_IMPORTED_MODULE_25__["default"](allSeries, (series, i)=>{
        lodash_es__WEBPACK_IMPORTED_MODULE_25__["default"](series, ([metric, values])=>{
            // Ignore any disabled series
            data.push(lodash_es__WEBPACK_IMPORTED_MODULE_39__["default"](disabledSeries?.[i], (s)=>lodash_es__WEBPACK_IMPORTED_MODULE_32__["default"](s, metric)) ? null : values);
            if (formatSeriesTitle) {
                const name = formatSeriesTitle(metric, i);
                legendData.push({
                    name
                });
                tooltipSeriesNames.push(name);
            } else {
                tooltipSeriesLabels.push(metric);
            }
        });
    });
    if (!data.some(Array.isArray)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_graphs_graph_empty__WEBPACK_IMPORTED_MODULE_45__.GraphEmpty, {});
    }
    let yTickFormat = (0,_shared_console_console_shared_src_components_query_browser_QueryBrowserTooltip__WEBPACK_IMPORTED_MODULE_58__.valueFormatter)(units);
    if (isStack) {
        // Specify Y axis range if all values are zero, but otherwise let Chart set it automatically
        const isAllZero = lodash_es__WEBPACK_IMPORTED_MODULE_28__["default"](allSeries, (series)=>lodash_es__WEBPACK_IMPORTED_MODULE_28__["default"](series, ([, values])=>lodash_es__WEBPACK_IMPORTED_MODULE_28__["default"](values, {
                    y: 0
                })));
        if (isAllZero) {
            domain.y = [
                0,
                1
            ];
        }
    } else {
        // Set a reasonable Y-axis range based on the min and max values in the data
        const findMin = (series)=>lodash_es__WEBPACK_IMPORTED_MODULE_36__["default"](series, 'y');
        const findMax = (series)=>lodash_es__WEBPACK_IMPORTED_MODULE_35__["default"](series, 'y');
        let minY = findMin(data.map(findMin))?.y ?? 0;
        let maxY = findMax(data.map(findMax))?.y ?? 0;
        if (minY === 0 && maxY === 0) {
            minY = 0;
            maxY = 1;
        } else if (minY > 0 && maxY > 0) {
            minY = 0;
        } else if (minY < 0 && maxY < 0) {
            maxY = 0;
        }
        domain.y = [
            minY,
            maxY
        ];
        if (Math.abs(maxY - minY) < 0.005) {
            yTickFormat = (v)=>v === 0 ? '0' : v.toExponential(1);
        }
    }
    const xAxisTickCount = Math.round(width / 100);
    const xAxisTickShowSeconds = span < xAxisTickCount * ONE_MINUTE;
    const xAxisTickFormat = (d)=>{
        if (span > (0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_59__.parsePrometheusDuration)('1d')) {
            // Add a newline between the date and time so tick labels don't overlap.
            return `${_shared_console_utils_datetime__WEBPACK_IMPORTED_MODULE_47__.dateFormatterNoYear.format(d)}\n${_shared_console_utils_datetime__WEBPACK_IMPORTED_MODULE_47__.timeFormatter.format(d)}`;
        }
        if (xAxisTickShowSeconds) {
            return _shared_console_utils_datetime__WEBPACK_IMPORTED_MODULE_47__.timeFormatterWithSeconds.format(d);
        }
        return _shared_console_utils_datetime__WEBPACK_IMPORTED_MODULE_47__.timeFormatter.format(d);
    };
    const GroupComponent = isStack ? _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_8__.ChartStack : _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_5__.ChartGroup;
    const ChartComponent = isStack ? _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_3__.ChartArea : _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_7__.ChartLine;
    const hasLegend = showLegend && !lodash_es__WEBPACK_IMPORTED_MODULE_31__["default"](legendData);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_2__.Chart, {
        containerComponent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_9__.ChartVoronoiContainer, {
            activateData: false,
            labelComponent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_query_browser_QueryBrowserTooltip__WEBPACK_IMPORTED_MODULE_58__.QueryBrowserTooltip, {
                height: CHART_HEIGHT - BOTTOM_SERIES_HEIGHT
            }),
            labels: ()=>' ',
            mouseFollowTooltips: true,
            voronoiDimension: "x",
            voronoiPadding: 0
        }),
        ariaTitle: t('query browser chart'),
        domain: domain,
        domainPadding: {
            y: 1
        },
        height: hasLegend ? CHART_HEIGHT + LEGEND_HEIGHT : CHART_HEIGHT,
        scale: {
            x: 'time',
            y: 'linear'
        },
        theme: _query_browser_theme__WEBPACK_IMPORTED_MODULE_52__.queryBrowserTheme,
        width: width,
        padding: {
            bottom: hasLegend ? BOTTOM_SERIES_HEIGHT + LEGEND_HEIGHT : BOTTOM_SERIES_HEIGHT,
            left: 65,
            right: 15,
            top: 5
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_4__.ChartAxis, {
                tickCount: xAxisTickCount,
                tickFormat: xAxisTickFormat,
                style: {
                    tickLabels: {
                        fontSize: 12
                    },
                    axisLabel: {
                        fontSize: 12
                    }
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_4__.ChartAxis, {
                crossAxis: false,
                dependentAxis: true,
                tickComponent: nullComponent,
                tickCount: 6,
                tickFormat: yTickFormat,
                style: {
                    tickLabels: {
                        fontSize: 12
                    },
                    axisLabel: {
                        fontSize: 12
                    }
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GroupComponent, {
                children: data.map((values, i)=>{
                    if (values === null) {
                        return null;
                    }
                    const color = colors[i % colors.length];
                    const style = {
                        data: {
                            [isStack ? 'fill' : 'stroke']: color
                        },
                        labels: {
                            fill: color,
                            labels: tooltipSeriesLabels[i],
                            name: tooltipSeriesNames[i],
                            units
                        }
                    };
                    return(// We need to use the `name` prop to prevent an error in VictorySharedEvents when
                    // dynamically removing and then adding back data series
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ChartComponent, {
                        data: values,
                        groupComponent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {}),
                        name: `series-${i}`,
                        style: style
                    }, i));
                })
            }),
            hasLegend && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_6__.ChartLegend, {
                data: legendData,
                groupComponent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LegendContainer, {}),
                gutter: 30,
                itemsPerRow: 4,
                orientation: "vertical",
                symbolSpacer: 4,
                style: {
                    labels: {
                        fontSize: 12
                    }
                },
                padding: {
                    top: BOTTOM_SERIES_HEIGHT
                }
            })
        ]
    });
});
Graph.displayName = 'Graph';
const formatSeriesValues = (values, samples, span, defaultEmptyValue, createGaps)=>{
    let hasDisconnectedValues = false;
    const newValues = lodash_es__WEBPACK_IMPORTED_MODULE_34__["default"](values, (v)=>{
        const y = Number(v[1]);
        return {
            x: new Date(v[0] * 1000),
            y: Number.isNaN(y) ? defaultEmptyValue : y
        };
    });
    // The data may have missing values, if disconnected is enabled,
    // we fill those gaps with nulls so that the graph correctly
    // shows the missing values as gaps in the line
    const start = Number(lodash_es__WEBPACK_IMPORTED_MODULE_29__["default"](newValues, '[0].x'));
    const end = Number(lodash_es__WEBPACK_IMPORTED_MODULE_29__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_33__["default"](newValues), 'x'));
    // Calculate step in milliseconds, rounded up to the nearest second
    const step = Math.ceil(span / samples / 1000) * 1000;
    lodash_es__WEBPACK_IMPORTED_MODULE_37__["default"](start, end, step).forEach((t, i)=>{
        const x = new Date(t);
        if (lodash_es__WEBPACK_IMPORTED_MODULE_29__["default"](newValues, [
            i,
            'x'
        ]) > x) {
            hasDisconnectedValues = true;
            if (createGaps) {
                newValues.splice(i, 0, {
                    x,
                    y: null
                });
            }
        }
    });
    return {
        points: newValues,
        hasDisconnectedValues
    };
};
// Try to limit the graph to this number of data points
const maxDataPointsSoft = 6000;
// If we have more than this number of data points, do not render the graph
const maxDataPointsHard = 10000;
// Min and max number of data samples per data series
const minSamples = 10;
const maxSamples = 300;
// Fall back to a line chart for performance if there are too many series
const maxStacks = 50;
// We don't want to refresh all the graph data for just a small adjustment in the number of samples,
// so don't update unless the number of samples would change by at least this proportion
const samplesLeeway = 0.2;
// Minimum step (milliseconds between data samples) because tiny steps reduce performance for almost
// no benefit
const minStep = 5 * 1000;
// Don't allow zooming to less than this number of milliseconds
const minSpan = 30 * 1000;
// Don't poll more often than this number of milliseconds
const minPollInterval = 10 * 1000;
const ZoomableGraph = ({ allSeries, disabledSeries, fixedXDomain, formatSeriesTitle, isStack, onZoom, showLegend, span, units, width })=>{
    const [isZooming, setIsZooming] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(false);
    const [x1, setX1] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(0);
    const [x2, setX2] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(0);
    const onKeyDown = (e)=>{
        if (e.key === 'Escape') {
            e.preventDefault();
            setIsZooming(false);
        }
    };
    const onMouseDown = (e)=>{
        setIsZooming(true);
        const x = e.clientX - e.currentTarget.getBoundingClientRect().left;
        setX1(x);
        setX2(x);
    };
    const onMouseMove = (e)=>{
        setX2(e.clientX - e.currentTarget.getBoundingClientRect().left);
    };
    const onMouseUp = (e)=>{
        setIsZooming(false);
        const xMin = Math.min(x1, x2);
        const xMax = Math.max(x1, x2);
        // Don't do anything if a range was not selected (don't zoom if you just click the graph)
        if (xMax === xMin) {
            return;
        }
        const zoomWidth = e.currentTarget.getBoundingClientRect().width;
        const oldFrom = lodash_es__WEBPACK_IMPORTED_MODULE_29__["default"](fixedXDomain, '[0]', Date.now() - span);
        let from = oldFrom + span * xMin / zoomWidth;
        let to = oldFrom + span * xMax / zoomWidth;
        let newSpan = to - from;
        if (newSpan < minSpan) {
            newSpan = minSpan;
            const middle = (from + to) / 2;
            from = middle - newSpan / 2;
            to = middle + newSpan / 2;
        }
        onZoom(from, to);
    };
    // tabIndex is required to enable the onKeyDown handler
    const handlers = isZooming ? {
        onKeyDown,
        onMouseMove,
        onMouseUp,
        tabIndex: -1
    } : {
        onMouseDown
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            cursor: 'ew-resize'
        },
        ...handlers,
        children: [
            isZooming && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                style: {
                    left: Math.min(x1, x2),
                    width: Math.abs(x1 - x2),
                    bottom: 24 + /* --pf-t--global--spacer--lg */ _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_55__.chart_axis_tick_Size.value,
                    top: 4,
                    // --pf-t--global--spacer-xs
                    position: 'absolute',
                    opacity: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_54__.chart_area_Opacity.value,
                    backgroundColor: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_53__.t_chart_global_fill_color_200.value
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Graph, {
                allSeries: allSeries,
                disabledSeries: disabledSeries,
                fixedXDomain: fixedXDomain,
                formatSeriesTitle: formatSeriesTitle,
                isStack: isStack,
                showLegend: showLegend,
                span: span,
                units: units,
                width: width
            })
        ]
    });
};
const getMaxSamplesForSpan = (span)=>lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](Math.round(span / minStep), minSamples, maxSamples);
const QueryBrowser_ = ({ customDataSource, defaultSamples, defaultTimespan = (0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_59__.parsePrometheusDuration)('30m'), disabledSeries, disableZoom, filterLabels, fixedEndTime, formatSeriesTitle, GraphLink, hideControls, isStack = false, onLoadingChange, onZoom, pollInterval, queries, showLegend, showStackedControl = false, showDisconnectedControl = true, timespan, units, onDataChange, isPlain = false })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_42__.useTranslation)("plugin__monitoring-plugin");
    const { plugin, prometheus, accessCheckLoading, useMetricsTenancy } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_63__.useMonitoring)();
    const hideGraphs = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__.useSelector)((state)=>!!(0,_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_60__.getObserveState)(plugin, state).hideGraphs);
    const tickInterval = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__.useSelector)((state)=>pollInterval ?? Number((0,_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_60__.getObserveState)(plugin, state).queryBrowser.pollInterval));
    const lastRequestTime = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__.useSelector)((state)=>(0,_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_60__.getObserveState)(plugin, state).queryBrowser.lastRequestTime);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__.useDispatch)();
    // For the default time span, use the first of the suggested span options that is at least as long
    // as defaultTimespan
    const defaultSpanText = spans.find((s)=>(0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_59__.parsePrometheusDuration)(s) >= defaultTimespan);
    // If we have both `timespan` and `defaultTimespan`, `timespan` takes precedence
    const [span, setSpan] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(timespan || (0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_59__.parsePrometheusDuration)(defaultSpanText));
    // Limit the number of samples so that the step size doesn't fall below minStep
    const maxSamplesForSpan = defaultSamples || getMaxSamplesForSpan(span);
    const [xDomain, setXDomain] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)();
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)();
    const [isDatasetTooBig, setIsDatasetTooBig] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(false);
    const [graphData, setGraphData] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(null);
    const [samples, setSamples] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(maxSamplesForSpan);
    const [updating, setUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(true);
    // Track if we ever received valid data to prevent flickering "No datapoints" during refresh
    const hasReceivedData = (0,react__WEBPACK_IMPORTED_MODULE_41__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_41__.useEffect)(()=>{
        onLoadingChange?.(updating);
    }, [
        updating,
        onLoadingChange
    ]);
    const [containerRef, width] = (0,_shared_console_utils_ref_width_hook__WEBPACK_IMPORTED_MODULE_49__.useRefWidth)();
    const endTime = xDomain?.[1];
    const safeFetch = (0,_shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_50__.useSafeFetch)();
    const [isStacked, setIsStacked] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(isStack);
    const [showDisconnectedValues, setIsShowDisconnectedValues] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(false);
    const [isDisconnectedEnabled, setIsDisconnectedEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_41__.useState)(true);
    const canStack = lodash_es__WEBPACK_IMPORTED_MODULE_40__["default"](graphData, 'length') <= maxStacks;
    const [namespace] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useActiveNamespace)();
    // If provided, `timespan` overrides any existing span setting
    (0,react__WEBPACK_IMPORTED_MODULE_41__.useEffect)(()=>{
        if (timespan) {
            setSpan(timespan);
            setSamples(defaultSamples || getMaxSamplesForSpan(timespan));
        }
    }, [
        defaultSamples,
        timespan
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_41__.useEffect)(()=>{
        setGraphData(null);
        if (fixedEndTime) {
            setXDomain(getXDomain(fixedEndTime, span));
        }
    }, [
        fixedEndTime,
        span
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_41__.useEffect)(()=>{
        if (!fixedEndTime) {
            setXDomain(undefined);
        }
    }, [
        fixedEndTime
    ]);
    // Clear any existing series data when the namespace is changed
    (0,react__WEBPACK_IMPORTED_MODULE_41__.useEffect)(()=>{
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_44__.queryBrowserDeleteAllSeries)());
    }, [
        dispatch,
        namespace
    ]);
    const tick = ()=>{
        if (hideGraphs || accessCheckLoading) {
            return undefined;
        }
        // Define this once for all queries so that they have exactly the same time range and X values
        const now = Date.now();
        const timeRanges = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_46__.getTimeRanges)(span, endTime || now);
        const queryPromises = lodash_es__WEBPACK_IMPORTED_MODULE_34__["default"](queries, (query)=>{
            if (lodash_es__WEBPACK_IMPORTED_MODULE_31__["default"](query)) {
                return Promise.resolve([]);
            } else {
                const promiseMap = lodash_es__WEBPACK_IMPORTED_MODULE_34__["default"](timeRanges, (timeRange)=>safeFetch((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_46__.buildPrometheusUrl)({
                        prometheusUrlProps: {
                            endpoint: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.PrometheusEndpoint.QUERY_RANGE,
                            endTime: timeRange.endTime,
                            namespace,
                            query,
                            samples: Math.ceil(samples / timeRanges.length),
                            timeout: '60s',
                            timespan: timeRange.duration - 1
                        },
                        basePath: (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_46__.getPrometheusBasePath)({
                            prometheus,
                            useTenancyPath: useMetricsTenancy,
                            basePathOverride: customDataSource?.basePath
                        })
                    })));
                return Promise.all(promiseMap).then((responses)=>{
                    const results = lodash_es__WEBPACK_IMPORTED_MODULE_34__["default"](responses, 'data.result');
                    const combinedQueries = results.reduce((accumulator, response)=>{
                        response.forEach((metricResult)=>{
                            const index = accumulator.findIndex((item)=>JSON.stringify(item.metric) === JSON.stringify(metricResult.metric));
                            if (index === -1) {
                                accumulator.push(metricResult);
                            } else {
                                accumulator[index].values = accumulator[index].values.concat(metricResult.values);
                            }
                        });
                        return accumulator;
                    }, []);
                    // Recombine into the original query to allow for the redux store and the things using
                    // it (query duplication, ect) to be able to work. Grab the heading of the first response
                    // for the status and structure of the response
                    const queryResponse = responses.at(0);
                    if (!queryResponse) {
                        return [];
                    }
                    queryResponse.data.result = combinedQueries;
                    return queryResponse;
                });
            }
        });
        return Promise.all(queryPromises).then((responses)=>{
            const newResults = lodash_es__WEBPACK_IMPORTED_MODULE_34__["default"](responses, 'data.result');
            const numDataPoints = lodash_es__WEBPACK_IMPORTED_MODULE_40__["default"](newResults, (r)=>lodash_es__WEBPACK_IMPORTED_MODULE_40__["default"](r, 'values.length'));
            if (numDataPoints > maxDataPointsHard && samples === minSamples) {
                setIsDatasetTooBig(true);
                return;
            }
            setIsDatasetTooBig(false);
            const newSamples = lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](Math.floor(samples * maxDataPointsSoft / numDataPoints), minSamples, maxSamplesForSpan);
            let dataIsDisconnected = false;
            // Change `samples` if either
            //   - It will change by a proportion greater than `samplesLeeway`
            //   - It will change to the upper or lower limit of its allowed range
            if (Math.abs(newSamples - samples) / samples > samplesLeeway || newSamples !== samples && (newSamples === maxSamplesForSpan || newSamples === minSamples)) {
                setSamples(newSamples);
            } else {
                const newGraphData = lodash_es__WEBPACK_IMPORTED_MODULE_34__["default"](newResults, (result, queryIndex)=>{
                    return lodash_es__WEBPACK_IMPORTED_MODULE_34__["default"](result, ({ metric, values })=>{
                        // If filterLabels is specified, ignore all series that don't match
                        if (lodash_es__WEBPACK_IMPORTED_MODULE_39__["default"](filterLabels, (v, k)=>lodash_es__WEBPACK_IMPORTED_MODULE_30__["default"](metric, k) && metric[k] !== v)) {
                            return [];
                        } else {
                            let defaultEmptyValue = null;
                            if (isStack && lodash_es__WEBPACK_IMPORTED_MODULE_39__["default"](values, (value)=>Number.isNaN(Number(value[1])))) {
                                // eslint-disable-next-line no-console
                                console.warn('Invalid response values for stacked graph converted to 0 for query: ', queries[queryIndex]);
                                defaultEmptyValue = 0;
                            }
                            const { points, hasDisconnectedValues } = formatSeriesValues(values, samples, span, defaultEmptyValue, showDisconnectedValues);
                            dataIsDisconnected = hasDisconnectedValues;
                            return [
                                metric,
                                points
                            ];
                        }
                    });
                });
                setGraphData(newGraphData);
                onDataChange?.(newGraphData);
                // Mark that we've received valid data to prevent flickering during refresh
                if (newGraphData && newGraphData.some((d)=>d.length > 0)) {
                    hasReceivedData.current = true;
                }
                setIsDisconnectedEnabled(dataIsDisconnected);
                lodash_es__WEBPACK_IMPORTED_MODULE_25__["default"](newResults, (r, i)=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_44__.queryBrowserPatchQuery)(i, {
                        series: r ? lodash_es__WEBPACK_IMPORTED_MODULE_34__["default"](r, 'metric') : undefined
                    })));
                setUpdating(false);
            }
            setError(undefined);
        }).catch((err)=>{
            if (err.name !== 'AbortError') {
                // eslint-disable-next-line no-console
                console.log(err);
                setError(err);
                setUpdating(false);
            }
        });
    };
    // Don't poll if an end time was set (because the latest data is not displayed) or if the graph is
    // hidden. Otherwise use a polling interval relative to the graph's timespan.
    let delay;
    if (endTime || hideGraphs || tickInterval === null) {
        delay = null;
    } else if (tickInterval === 0) {
        delay = 0;
    } else if (tickInterval > 0) {
        delay = tickInterval;
    } else if (tickInterval == 0) {
        delay = 0;
    } else {
        delay = Math.max(span / 120, minPollInterval);
    }
    const queriesKey = lodash_es__WEBPACK_IMPORTED_MODULE_38__["default"](queries, lodash_es__WEBPACK_IMPORTED_MODULE_31__["default"]).join();
    (0,_shared_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_48__.usePoll)(tick, delay, endTime, filterLabels, namespace, queriesKey, samples, span, lastRequestTime, showDisconnectedValues, accessCheckLoading, useMetricsTenancy);
    (0,react__WEBPACK_IMPORTED_MODULE_41__.useLayoutEffect)(()=>setUpdating(true), [
        endTime,
        namespace,
        queriesKey,
        samples,
        span
    ]);
    const onSpanChange = (0,react__WEBPACK_IMPORTED_MODULE_41__.useCallback)((newSpan)=>{
        setGraphData(null);
        setXDomain(undefined);
        setSpan(newSpan);
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_44__.queryBrowserSetTimespan)(newSpan));
        setSamples(defaultSamples || getMaxSamplesForSpan(newSpan));
    }, [
        defaultSamples,
        dispatch
    ]);
    const isRangeVector = lodash_es__WEBPACK_IMPORTED_MODULE_29__["default"](error, 'json.error', '').match(/invalid expression type "range vector"/);
    if (hideGraphs) {
        // Still render the graph containers so that `width` continues to be tracked while the graph is
        // hidden. This ensures we can render at the correct width when the graph is shown again.
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                error && !isRangeVector && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Error, {
                    error: error
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            ref: containerRef
                        })
                    })
                })
            ]
        });
    }
    if (isRangeVector) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GraphEmptyState, {
            title: t('Ungraphable results'),
            children: t('Query results include range vectors, which cannot be graphed. Try adding a function to transform the data.')
        });
    }
    if (error?.json?.error?.match(/invalid expression type "string"/)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GraphEmptyState, {
            title: t('Ungraphable results'),
            children: t('Query result is a string, which cannot be graphed.')
        });
    }
    if (isDatasetTooBig) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GraphEmptyState, {
            title: t('Ungraphable results'),
            children: t('The resulting dataset is too large to graph.')
        });
    }
    const zoomableGraphOnZoom = (from, to)=>{
        setGraphData(null);
        setXDomain([
            from,
            to
        ]);
        setSpan(to - from);
        setSamples(defaultSamples || getMaxSamplesForSpan(to - from));
        onZoom?.(from, to);
    };
    const isGraphDataEmpty = !graphData || graphData.every((d)=>d.length === 0);
    const hasReducedResolution = !isGraphDataEmpty && samples < maxSamplesForSpan && !updating;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_12__.Card, {
            isCompact: true,
            isPlain: isPlain,
            style: {
                overflow: 'visible'
            },
            children: [
                hideControls ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: updating && !onLoadingChange && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_57__.LoadingInline, {})
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_12__.CardHeader, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_19__.Split, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_19__.SplitItem, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpanControls, {
                                        defaultSpanText: defaultSpanText,
                                        onChange: onSpanChange,
                                        span: span,
                                        hasReducedResolution: hasReducedResolution
                                    }),
                                    updating && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_57__.LoadingInline, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_19__.SplitItem, {
                                isFilled: true
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_19__.SplitItem, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_19__.Split, {
                                    hasGutter: true,
                                    children: [
                                        GraphLink && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_19__.SplitItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GraphLink, {})
                                        }),
                                        canStack && showStackedControl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_19__.SplitItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_13__.Checkbox, {
                                                id: "stacked",
                                                isChecked: isStacked,
                                                "data-checked-state": isStacked,
                                                label: t('Stacked'),
                                                onChange: (_e, v)=>typeof _e === 'boolean' ? setIsStacked(_e) : setIsStacked(v),
                                                "data-test": _constants_data_test__WEBPACK_IMPORTED_MODULE_62__.DataTestIDs.MetricStackedCheckbox
                                            })
                                        }),
                                        showDisconnectedControl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_19__.SplitItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_22__.Tooltip, {
                                                content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    children: isDisconnectedEnabled ? t('Check to show gaps for missing data') : t('No gaps found in the data')
                                                }),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Checkbox__WEBPACK_IMPORTED_MODULE_13__.Checkbox, {
                                                    id: "disconnected",
                                                    isChecked: isDisconnectedEnabled && showDisconnectedValues,
                                                    "data-checked-state": isDisconnectedEnabled && showDisconnectedValues,
                                                    label: t('Disconnected'),
                                                    onChange: (_e, v)=>typeof _e === 'boolean' ? setIsShowDisconnectedValues(_e) : setIsShowDisconnectedValues(v),
                                                    isDisabled: !isDisconnectedEnabled,
                                                    "data-test": _constants_data_test__WEBPACK_IMPORTED_MODULE_62__.DataTestIDs.MetricDisconnectedCheckbox
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_12__.CardBody, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_24___default()('monitoring-plugin-graph-wrapper monitoring-plugin-graph-wrapper--query-browser', {
                        'monitoring-plugin-graph-wrapper--query-browser--with-legend': showLegend && !!formatSeriesTitle
                    }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: containerRef,
                        style: {
                            position: 'relative'
                        },
                        "data-test": _constants_data_test__WEBPACK_IMPORTED_MODULE_62__.DataTestIDs.MetricGraph,
                        children: [
                            error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Error, {
                                error: error
                            }),
                            /*eslint-disable-next-line react-hooks/refs */ isGraphDataEmpty && !(hideControls && updating && hasReceivedData.current) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_graphs_graph_empty__WEBPACK_IMPORTED_MODULE_45__.GraphEmpty, {
                                loading: updating
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: disableZoom ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Graph, {
                                    allSeries: graphData,
                                    disabledSeries: disabledSeries,
                                    fixedXDomain: xDomain,
                                    formatSeriesTitle: formatSeriesTitle,
                                    isStack: canStack && isStacked,
                                    showLegend: showLegend,
                                    span: span,
                                    units: units,
                                    width: width
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ZoomableGraph, {
                                    allSeries: graphData,
                                    disabledSeries: disabledSeries,
                                    fixedXDomain: xDomain,
                                    formatSeriesTitle: formatSeriesTitle,
                                    isStack: canStack && isStacked,
                                    onZoom: zoomableGraphOnZoom,
                                    showLegend: showLegend,
                                    span: span,
                                    units: units,
                                    width: width
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const QueryBrowser = (0,_shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_56__["default"])(QueryBrowser_); // eslint-disable-next-line @typescript-eslint/no-explicit-any


/***/ },

/***/ "./shared/console/console-shared/error/error-boundary.tsx"
/*!****************************************************************!*\
  !*** ./shared/console/console-shared/error/error-boundary.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}



/** Needed for tests -- should not be imported by application logic */ const DefaultFallback = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {});
let ErrorBoundaryInner = class ErrorBoundaryInner extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    componentDidUpdate(prevProps) {
        // Reset error state when location changes
        if (this.state.hasError && prevProps.locationPathname && this.props.locationPathname !== prevProps.locationPathname) {
            this.setState(this.defaultState);
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error,
            errorInfo
        });
        // Log the error so something shows up in the JS console when `DefaultFallback` is used.
        // eslint-disable-next-line no-console
        console.error('Caught error in a child component:', error, errorInfo);
    }
    render() {
        const { hasError, error, errorInfo } = this.state;
        const FallbackComponent = this.props.FallbackComponent || DefaultFallback;
        return hasError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FallbackComponent, {
            title: error.name,
            componentStack: errorInfo.componentStack,
            errorMessage: error.message,
            stack: error.stack
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: this.props.children
        });
    }
    constructor(props){
        super(props), _define_property(this, "defaultState", {
            hasError: false,
            error: {
                message: '',
                stack: '',
                name: ''
            },
            errorInfo: {
                componentStack: ''
            }
        });
        this.state = this.defaultState;
    }
};
// Functional wrapper to handle location changes
const ErrorBoundary = ({ children, FallbackComponent })=>{
    const location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ErrorBoundaryInner, {
        locationPathname: location.pathname,
        FallbackComponent: FallbackComponent,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);


/***/ },

/***/ "./shared/console/console-shared/error/fallbacks/withFallback.tsx"
/*!************************************************************************!*\
  !*** ./shared/console/console-shared/error/fallbacks/withFallback.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error-boundary */ "./shared/console/console-shared/error/error-boundary.tsx");


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withFallback = (WrappedComponent, FallbackComponent)=>{
    const Component = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_error_boundary__WEBPACK_IMPORTED_MODULE_1__["default"], {
            FallbackComponent: FallbackComponent,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent, {
                ...props
            })
        });
    Component.displayName = `withFallback(${WrappedComponent.displayName || WrappedComponent.name})`;
    return Component;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withFallback);


/***/ },

/***/ "./shared/console/console-shared/src/components/loading/Loading.tsx"
/*!**************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/loading/Loading.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loading: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Spinner */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Spinner/@patternfly/react-core/dist/dynamic/components/Spinner");


const Loading = ({ className })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: className,
        "data-test": "loading-indicator",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
            size: "lg"
        })
    });
Loading.displayName = 'Loading';


/***/ },

/***/ "./shared/console/console-shared/src/components/loading/LoadingInline.tsx"
/*!********************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/loading/LoadingInline.tsx ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInline: () => (/* binding */ LoadingInline)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./shared/console/console-shared/src/components/loading/Loading.tsx");


// Leave to keep compatibility with console looks
const LoadingInline = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loading__WEBPACK_IMPORTED_MODULE_1__.Loading, {
        className: "co-m-loader--inline"
    });
LoadingInline.displayName = 'LoadingInline';


/***/ },

/***/ "./shared/console/console-shared/src/components/query-browser/QueryBrowserTooltip.tsx"
/*!********************************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/query-browser/QueryBrowserTooltip.tsx ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryBrowserTooltip: () => (/* binding */ QueryBrowserTooltip),
/* harmony export */   valueFormatter: () => (/* binding */ valueFormatter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/flatMap.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/intersection.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isDate.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isFinite.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isString.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/sortBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/sortedIndexBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/uniq.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/without.js");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! victory */ "../node_modules/victory-core/es/victory-portal/victory-portal.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../error/fallbacks/withFallback */ "./shared/console/console-shared/error/fallbacks/withFallback.tsx");
/* harmony import */ var _components_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../components/format */ "./shared/components/format.tsx");
/* harmony import */ var _utils_units__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../utils/units */ "./shared/console/utils/units.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../utils/datetime */ "./shared/console/utils/datetime.ts");








const TOOLTIP_MAX_ENTRIES = 20;
const TOOLTIP_MAX_WIDTH = 400;
const TOOLTIP_MAX_HEIGHT = 400;
const TOOLTIP_MAX_LEFT_JUT_OUT = 85;
const TOOLTIP_MAX_RIGHT_JUT_OUT = 45;
// Use exponential notation for small or very large numbers to avoid labels with too many characters
const formatPositiveValue = (v)=>v === 0 || 0.001 <= v && v < 1e23 ? (0,_utils_units__WEBPACK_IMPORTED_MODULE_15__.humanizeNumberSI)(v).string : v.toExponential(1);
const formatValue = (v)=>(v < 0 ? '-' : '') + formatPositiveValue(Math.abs(v));
const valueFormatter = (units)=>[
        'ms',
        's',
        'bytes',
        'Bytes',
        'bps',
        'Bps',
        'pps'
    ].includes(units) ? (v)=>(0,_components_format__WEBPACK_IMPORTED_MODULE_14__.formatNumber)(String(v), undefined, units) : formatValue;
// For performance, use this instead of PatternFly's ChartTooltip or Victory VictoryTooltip
const QueryBrowserTooltipWrapped = ({ activePoints, center, height, style, width, x })=>{
    const time = activePoints?.[0]?.x;
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](time) || !lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](x)) {
        return null;
    }
    // Don't show the tooltip if the cursor is too far from the active points (can happen when the
    // graph's timespan includes a range with no data)
    if (Math.abs(x - center.x) > width / 15) {
        return null;
    }
    // Pick tooltip width and location (left or right of the cursor) to maximize its available space
    const spaceOnLeft = x + TOOLTIP_MAX_LEFT_JUT_OUT;
    const spaceOnRight = width - x + TOOLTIP_MAX_RIGHT_JUT_OUT;
    const isOnLeft = spaceOnLeft > spaceOnRight;
    const tooltipMaxWidth = Math.min(isOnLeft ? spaceOnLeft : spaceOnRight, TOOLTIP_MAX_WIDTH);
    // Sort the entries in the tooltip from largest to smallest (to match the position of points in
    // the graph) and limit to the maximum number we can display. There could be a large number of
    // points, so we use a slightly less succinct approach to avoid sorting the whole list of points
    // and to avoid processing points that won't fit in the tooltip.
    const largestPoints = [];
    activePoints.forEach(({ _y1, y }, i)=>{
        const total = _y1 ?? y;
        if (largestPoints.length < TOOLTIP_MAX_ENTRIES || largestPoints[TOOLTIP_MAX_ENTRIES - 1].total < total) {
            const point = {
                color: style[i]?.fill,
                key: String(i),
                labels: style[i]?.labels,
                name: style[i]?.name,
                total,
                value: valueFormatter(style[i]?.units)(y)
            };
            largestPoints.splice(lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](largestPoints, point, (p)=>-p.total), 0, point);
        }
    });
    const allSeries = largestPoints.slice(0, TOOLTIP_MAX_ENTRIES);
    // For each series we are displaying in the tooltip, create a name based on its labels. We have
    // limited space, so sort the labels to try to show the most useful first since later labels will
    // likely be cut off. Sort first by the number of unique values for the label (prefer to show
    // labels with more values because they are more helpful in identifying the series), then by the
    // length of the label (prefer to show sorter labels because space is limited).
    const allSeriesSorted = lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](allSeries, (s)=>s.labels ? Object.keys(s.labels) : [])), '__name__'), [
        (k)=>-lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"](allSeries.map((s)=>s.labels[k])).length,
        (k)=>k.length
    ]);
    const getSeriesName = (series)=>{
        if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](series.name)) {
            return series.name;
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](series.labels)) {
            return '{}';
        }
        const name = series.labels.__name__ ?? '';
        const otherLabels = lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](allSeriesSorted, Object.keys(series.labels));
        return `${name}{${otherLabels.map((l)=>`${l}=${series.labels[l]}`).join(',')}}`;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(victory__WEBPACK_IMPORTED_MODULE_11__.VictoryPortal, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("foreignObject", {
                    height: TOOLTIP_MAX_HEIGHT,
                    width: tooltipMaxWidth,
                    x: isOnLeft ? x - tooltipMaxWidth : x,
                    y: center.y - TOOLTIP_MAX_HEIGHT / 2,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('query-browser__tooltip-wrap', {
                            'query-browser__tooltip-wrap--left': isOnLeft
                        }),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "query-browser__tooltip-arrow"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "query-browser__tooltip",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "query-browser__tooltip-time",
                                        children: _utils_datetime__WEBPACK_IMPORTED_MODULE_16__.dateTimeFormatterWithSeconds.format(time)
                                    }),
                                    allSeries.map((s)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "query-browser__tooltip-series",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    className: "query-browser__series-btn",
                                                    style: {
                                                        backgroundColor: s.color
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    className: "co-nowrap co-truncate",
                                                    children: getSeriesName(s)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    className: "query-browser__tooltip-value",
                                                    children: s.value
                                                })
                                            ]
                                        }, s.key))
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                className: "query-browser__tooltip-line",
                x1: x,
                x2: x,
                y1: "0",
                y2: height
            })
        ]
    });
};
const QueryBrowserTooltip = (0,_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_13__["default"])(QueryBrowserTooltipWrapped);


/***/ },

/***/ "./shared/console/console-shared/src/datetime/prometheus.ts"
/*!******************************************************************!*\
  !*** ./shared/console/console-shared/src/datetime/prometheus.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatPrometheusDuration: () => (/* binding */ formatPrometheusDuration),
/* harmony export */   parsePrometheusDuration: () => (/* binding */ parsePrometheusDuration)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/forEach.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isFinite.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/sumBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/trim.js");

// Conversions between units and milliseconds
const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const units = {
    w,
    d,
    h,
    m,
    s
};
/**
 * Converts a duration in milliseconds to a Prometheus time duration string like "1h 10m"
 * @param {number} ms - Time duration in milliseconds
 * @returns {string} The duration converted to a Prometheus time duration string
 * @example
 * ```
 * formatPrometheusDuration(65000) // Returns "1m 5s"
 * ```
 */ const formatPrometheusDuration = (ms)=>{
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](ms) || ms < 0) {
        return '';
    }
    let remaining = ms;
    let str = '';
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](units, (factor, unit)=>{
        const n = Math.floor(remaining / factor);
        if (n > 0) {
            str += `${n}${unit} `;
            remaining -= n * factor;
        }
    });
    return lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](str);
};
/**
 * Converts a Prometheus time duration like "1h 10m 23s" to milliseconds
 * @param {string} duration - Prometheus time duration string
 * @returns {number} The duration converted to a Prometheus time duration string or
 *                   0 if the duration could not be parsed
 * @example
 * ```
 * parsePrometheusDuration("1m 5s") // Returns 65000
 * ```
 */ const parsePrometheusDuration = (duration)=>{
    try {
        const parts = duration.trim().split(/\s+/).map((p)=>p.match(/^(\d+)([wdhms])$/));
        return lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](parts, (p)=>parseInt(p[1], 10) * units[p[2]]);
    } catch  {
        // Invalid duration format
        return 0;
    }
};


/***/ },

/***/ "./shared/console/graphs/graph-empty.tsx"
/*!***********************************************!*\
  !*** ./shared/console/graphs/graph-empty.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphEmpty: () => (/* binding */ GraphEmpty)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Spinner */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Spinner/@patternfly/react-core/dist/dynamic/components/Spinner");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_data_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/data-test */ "./shared/constants/data-test.ts");






const GraphEmpty = ({ minHeight = 180, loading = false })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyState, {
        variant: _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateVariant.xs,
        style: {
            minHeight
        },
        headingLevel: "h3",
        titleText: loading ? undefined : t('No datapoints found.'),
        icon: loading ? _patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_2__.Spinner : undefined,
        isFullHeight: true,
        "data-test": _constants_data_test__WEBPACK_IMPORTED_MODULE_4__.DataTestIDs.MetricGraphNoDatapointsFound
    });
};


/***/ },

/***/ "./shared/console/utils/datetime.ts"
/*!******************************************!*\
  !*** ./shared/console/utils/datetime.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateFormatter: () => (/* binding */ dateFormatter),
/* harmony export */   dateFormatterNoYear: () => (/* binding */ dateFormatterNoYear),
/* harmony export */   dateTimeFormatter: () => (/* binding */ dateTimeFormatter),
/* harmony export */   dateTimeFormatterWithSeconds: () => (/* binding */ dateTimeFormatterWithSeconds),
/* harmony export */   timeFormatter: () => (/* binding */ timeFormatter),
/* harmony export */   timeFormatterWithSeconds: () => (/* binding */ timeFormatterWithSeconds)
/* harmony export */ });
/* harmony import */ var _getLastLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLastLanguage */ "./shared/console/utils/getLastLanguage.ts");

const lang = (0,_getLastLanguage__WEBPACK_IMPORTED_MODULE_0__.getLastLanguage)() || undefined;
// https://tc39.es/ecma402/#datetimeformat-objects
const timeFormatter = new Intl.DateTimeFormat(lang, {
    hour: 'numeric',
    minute: 'numeric'
});
const timeFormatterWithSeconds = new Intl.DateTimeFormat(lang, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});
const dateFormatter = new Intl.DateTimeFormat(lang, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});
const dateFormatterNoYear = new Intl.DateTimeFormat(lang, {
    month: 'short',
    day: 'numeric'
});
const dateTimeFormatter = (langArg)=>new Intl.DateTimeFormat(langArg ?? lang, {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        year: 'numeric'
    });
const dateTimeFormatterWithSeconds = new Intl.DateTimeFormat(lang, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric'
});


/***/ },

/***/ "./shared/console/utils/getLastLanguage.ts"
/*!*************************************************!*\
  !*** ./shared/console/utils/getLastLanguage.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLastLanguage: () => (/* binding */ getLastLanguage)
/* harmony export */ });
const LAST_LANGUAGE_LOCAL_STORAGE_KEY = 'bridge/last-language';
const getLastLanguage = ()=>localStorage.getItem(LAST_LANGUAGE_LOCAL_STORAGE_KEY);


/***/ },

/***/ "./shared/console/utils/poll-hook.ts"
/*!*******************************************!*\
  !*** ./shared/console/utils/poll-hook.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePoll: () => (/* binding */ usePoll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Slightly modified from Dan Abramov's blog post about using React hooks for polling
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const usePoll = (callback, delay, ...dependencies)=>{
    const savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const intervalId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // Remember the latest callback.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        savedCallback.current = callback;
    }, [
        callback
    ]);
    // Set up the interval.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const tick = ()=>savedCallback.current();
        tick();
        // Run first tick immediately.
        if (delay) {
            // Only start interval if a delay is provided.
            intervalId.current = setInterval(tick, delay);
            return ()=>clearInterval(intervalId.current);
        }
        // If delay is 0, clear the interval.
        if (delay === 0 && intervalId.current) {
            clearInterval(intervalId.current);
        }
        return ()=>{
            if (intervalId.current) {
                clearInterval(intervalId.current);
            }
        };
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        delay,
        ...dependencies
    ]);
};


/***/ },

/***/ "./shared/console/utils/ref-width-hook.ts"
/*!************************************************!*\
  !*** ./shared/console/utils/ref-width-hook.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRefWidth: () => (/* binding */ useRefWidth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useRefWidth = ()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const setRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        const newWidth = e?.clientWidth;
        if (newWidth && ref.current?.clientWidth !== newWidth) {
            setWidth(e.clientWidth);
        }
        ref.current = e;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleResize = ()=>setWidth(ref.current?.clientWidth);
        window.addEventListener('resize', handleResize);
        window.addEventListener('sidebar_toggle', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('sidebar_toggle', handleResize);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (width !== ref.current?.clientWidth) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setWidth(ref.current?.clientWidth);
        }
    }, [
        ref,
        width
    ]);
    return [
        setRef,
        width
    ];
};


/***/ },

/***/ "./shared/console/utils/safe-fetch-hook.ts"
/*!*************************************************!*\
  !*** ./shared/console/utils/safe-fetch-hook.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSafeFetch: () => (/* binding */ useSafeFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);


// Disable client-side timeout (-1) to let the backend control query timeouts
const NO_TIMEOUT = -1;
const useSafeFetch = ()=>{
    const controller = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        controller.current = new AbortController();
        return ()=>controller.current.abort();
    }, []);
    return (url)=>(0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.consoleFetchJSON)(url, 'GET', {
            signal: controller.current.signal
        }, NO_TIMEOUT);
};


/***/ },

/***/ "./shared/console/utils/units.ts"
/*!***************************************!*\
  !*** ./shared/console/utils/units.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   humanizeBinaryBytes: () => (/* binding */ humanizeBinaryBytes),
/* harmony export */   humanizeBinaryBytesPerSec: () => (/* binding */ humanizeBinaryBytesPerSec),
/* harmony export */   humanizeDecimalBytes: () => (/* binding */ humanizeDecimalBytes),
/* harmony export */   humanizeDecimalBytesPerSec: () => (/* binding */ humanizeDecimalBytesPerSec),
/* harmony export */   humanizeNumber: () => (/* binding */ humanizeNumber),
/* harmony export */   humanizeNumberSI: () => (/* binding */ humanizeNumberSI),
/* harmony export */   humanizePacketsPerSec: () => (/* binding */ humanizePacketsPerSec),
/* harmony export */   humanizeSeconds: () => (/* binding */ humanizeSeconds)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isPlainObject.js");

const TYPES = {
    numeric: {
        units: [
            '',
            'k',
            'm',
            'b'
        ],
        space: false,
        divisor: 1000
    },
    binaryBytes: {
        units: [
            'B',
            'KiB',
            'MiB',
            'GiB',
            'TiB',
            'PiB',
            'EiB'
        ],
        space: true,
        divisor: 1024
    },
    decimalBytes: {
        units: [
            'B',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB',
            'EB'
        ],
        space: true,
        divisor: 1000
    },
    SI: {
        units: [
            '',
            'k',
            'M',
            'G',
            'T',
            'P',
            'E'
        ],
        space: false,
        divisor: 1000
    },
    decimalBytesPerSec: {
        units: [
            'Bps',
            'KBps',
            'MBps',
            'GBps',
            'TBps',
            'PBps',
            'EBps'
        ],
        space: true,
        divisor: 1000
    },
    binaryBytesPerSec: {
        units: [
            'Bps',
            'KiBps',
            'MiBps',
            'GiBps',
            'TiBps',
            'PiBps',
            'EiBps'
        ],
        space: true,
        divisor: 1024
    },
    packetsPerSec: {
        units: [
            'pps',
            'kpps'
        ],
        space: true,
        divisor: 1000
    },
    seconds: {
        units: [
            'ns',
            'μs',
            'ms',
            's'
        ],
        space: true,
        divisor: 1000
    }
};
const getType = (name)=>{
    const type = TYPES[name];
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](type)) {
        return {
            units: [],
            space: false,
            divisor: 1000
        };
    }
    return type;
};
const convertBaseValueToUnits = (value, unitArray, divisor, initialUnit, preferredUnit)=>{
    const sliceIndex = initialUnit ? unitArray.indexOf(initialUnit) : 0;
    const units_ = unitArray.slice(sliceIndex);
    if (preferredUnit || preferredUnit === '') {
        const unitIndex = units_.indexOf(preferredUnit);
        if (unitIndex !== -1) {
            return {
                value: value / divisor ** unitIndex,
                unit: preferredUnit
            };
        }
    }
    let unit = units_.shift();
    while(value >= divisor && units_.length > 0){
        value = value / divisor;
        unit = units_.shift();
    }
    return {
        value,
        unit
    };
};
const getDefaultFractionDigits = (value)=>{
    if (value < 1) {
        return 3;
    }
    if (value < 100) {
        return 2;
    }
    return 1;
};
const formatValue = (value)=>{
    const fractionDigits = getDefaultFractionDigits(value);
    // 2nd check converts -0 to 0.
    if (!isFinite(value) || value === 0) {
        value = 0;
    }
    return Intl.NumberFormat(undefined, {
        maximumFractionDigits: fractionDigits
    }).format(value);
};
const round = (value, fractionDigits)=>{
    if (!isFinite(value)) {
        return 0;
    }
    const multiplier = Math.pow(10, fractionDigits || getDefaultFractionDigits(value));
    return Math.round(value * multiplier) / multiplier;
};
const humanize = (value, typeName, useRound = false, initialUnit, preferredUnit)=>{
    const type = getType(typeName);
    if (!isFinite(value)) {
        value = 0;
    }
    let converted = convertBaseValueToUnits(value, type.units, type.divisor, initialUnit, preferredUnit);
    if (useRound) {
        converted.value = round(converted.value);
        converted = convertBaseValueToUnits(converted.value, type.units, type.divisor, converted.unit, preferredUnit);
    }
    const formattedValue = formatValue(converted.value);
    return {
        string: type.space ? `${formattedValue} ${converted.unit}` : formattedValue + converted.unit,
        unit: converted.unit,
        value: converted.value
    };
};
const humanizeBinaryBytes = (v, initialUnit, preferredUnit)=>humanize(v, 'binaryBytes', true, initialUnit, preferredUnit);
const humanizeDecimalBytes = (v, initialUnit, preferredUnit)=>humanize(v, 'decimalBytes', true, initialUnit, preferredUnit);
const humanizeBinaryBytesPerSec = (v, initialUnit, preferredUnit)=>humanize(v, 'binaryBytesPerSec', true, initialUnit, preferredUnit);
const humanizeDecimalBytesPerSec = (v, initialUnit, preferredUnit)=>humanize(v, 'decimalBytesPerSec', true, initialUnit, preferredUnit);
const humanizePacketsPerSec = (v, initialUnit, preferredUnit)=>humanize(v, 'packetsPerSec', true, initialUnit, preferredUnit);
const humanizeNumber = (v, initialUnit, preferredUnit)=>humanize(v, 'numeric', true, initialUnit, preferredUnit);
const humanizeNumberSI = (v, initialUnit, preferredUnit)=>humanize(v, 'SI', true, initialUnit, preferredUnit);
const humanizeSeconds = (v, initialUnit, preferredUnit)=>humanize(v, 'seconds', true, initialUnit, preferredUnit);


/***/ }

}]);
//# sourceMappingURL=shared_components_query-browser_query-browser_tsx-chunk.js.map