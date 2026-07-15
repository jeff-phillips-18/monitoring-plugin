"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["exposed-AlertRulesDetailsPage"],{

/***/ "../node_modules/@openshift-console/dynamic-plugin-sdk/lib/utils/error/custom-error.js"
/*!*********************************************************************************************!*\
  !*** ../node_modules/@openshift-console/dynamic-plugin-sdk/lib/utils/error/custom-error.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomError: () => (/* binding */ CustomError),
/* harmony export */   ErrorWithCause: () => (/* binding */ ErrorWithCause)
/* harmony export */ });
/**
 * Allows to easily extend a base class to create custom applicative errors.
 *
 * example:
 * ```
 * class HttpError extends CustomError {
 * 	public constructor(
 * 		public code: number,
 * 		message?: string,
 * 	) {
 * 		super(message)
 * 	}
 * }
 *
 * new HttpError(404, 'Not found')
 * ```
 */
class CustomError extends Error {
    constructor(message) {
        super(message);
        // set error name as constructor name, make it not enumerable to keep native Error behavior
        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target#new.target_in_constructors
        Object.defineProperty(this, 'name', {
            value: new.target.name,
            enumerable: false,
            configurable: true,
        });
        // Use captureStackTrace when available to remove contructor from stack trace
        // Add message to the stack trace
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = new Error(message).stack;
        }
        // fix the extended error prototype chain
        // because typescript __extends implementation can't
        // see https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class ErrorWithCause extends CustomError {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
    }
}


/***/ },

/***/ "../node_modules/@openshift-console/dynamic-plugin-sdk/lib/utils/error/http-error.js"
/*!*******************************************************************************************!*\
  !*** ../node_modules/@openshift-console/dynamic-plugin-sdk/lib/utils/error/http-error.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpError: () => (/* binding */ HttpError),
/* harmony export */   IncompleteDataError: () => (/* binding */ IncompleteDataError),
/* harmony export */   RetryError: () => (/* binding */ RetryError),
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError)
/* harmony export */ });
/* harmony import */ var _custom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-error */ "../node_modules/@openshift-console/dynamic-plugin-sdk/lib/utils/error/custom-error.js");

/**
 * Error thrown by `consoleFetch`, `consoleFetchJSON`, and `consoleFetchText` when the
 * server responds with a non-OK HTTP status code (other than 304).
 *
 * @example
 * ```ts
 * try {
 *   await consoleFetchJSON('/api/kubernetes/api/v1/namespaces');
 * } catch (e) {
 *   if (e instanceof HttpError) {
 *     console.error(`HTTP ${e.code}: ${e.message}`);
 *   }
 * }
 * ```
 *
 * @param message - The error message, typically derived from the response body or status text.
 * @param code - The HTTP status code (e.g. 404, 500).
 * @param response - The original `Response` object from the fetch call.
 * @param json - The parsed JSON body of the error response, if available.
 */
class HttpError extends _custom_error__WEBPACK_IMPORTED_MODULE_0__.CustomError {
    constructor(message, code, response, json) {
        super(message);
        this.code = code;
        this.response = response;
        this.json = json;
    }
    static fromCode(code) {
        return new HttpError(HttpError.messages[code], code);
    }
}
HttpError.messages = {
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required', // RFC 7235
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed', // RFC 7232
    413: 'Payload Too Large', // RFC 7231
    414: 'URI Too Long', // RFC 7231
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable', // RFC 7233
    417: 'Expectation Failed',
    418: "I'm a teapot", // RFC 2324
    421: 'Misdirected Request', // RFC 7540
    426: 'Upgrade Required',
    428: 'Precondition Required', // RFC 6585
    429: 'Too Many Requests', // RFC 6585
    431: 'Request Header Fields Too Large', // RFC 6585
    451: 'Unavailable For Legal Reasons', // RFC 7725
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates', // RFC 2295
    510: 'Not Extended', // RFC 2774
    511: 'Network Authentication Required', // RFC 6585
};
class TimeoutError extends _custom_error__WEBPACK_IMPORTED_MODULE_0__.CustomError {
    constructor(url, ms) {
        super(`Call to ${url} timed out after ${ms}ms.`);
        this.url = url;
        this.ms = ms;
    }
}
class IncompleteDataError extends _custom_error__WEBPACK_IMPORTED_MODULE_0__.CustomError {
    constructor(labels) {
        super(`Could not fetch all data. This data are missing: ${labels.join(', ')}.`);
        this.labels = labels;
    }
}
class RetryError extends _custom_error__WEBPACK_IMPORTED_MODULE_0__.CustomError {
}


/***/ },

/***/ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_border_color_status_info_default.js"
/*!******************************************************************************************************!*\
  !*** ../node_modules/@patternfly/react-tokens/dist/esm/t_global_border_color_status_info_default.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t_global_border_color_status_info_default: () => (/* binding */ t_global_border_color_status_info_default)
/* harmony export */ });
const t_global_border_color_status_info_default = {
  "name": "--pf-t--global--border--color--status--info--default",
  "value": "#5e40be",
  "var": "var(--pf-t--global--border--color--status--info--default)"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t_global_border_color_status_info_default);

/***/ },

/***/ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_danger_default.js"
/*!*************************************************************************************************!*\
  !*** ../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_danger_default.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t_global_color_status_danger_default: () => (/* binding */ t_global_color_status_danger_default)
/* harmony export */ });
const t_global_color_status_danger_default = {
  "name": "--pf-t--global--color--status--danger--default",
  "value": "#731f00",
  "var": "var(--pf-t--global--color--status--danger--default)"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t_global_color_status_danger_default);

/***/ },

/***/ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_info_default.js"
/*!***********************************************************************************************!*\
  !*** ../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_info_default.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t_global_color_status_info_default: () => (/* binding */ t_global_color_status_info_default)
/* harmony export */ });
const t_global_color_status_info_default = {
  "name": "--pf-t--global--color--status--info--default",
  "value": "#3d2785",
  "var": "var(--pf-t--global--color--status--info--default)"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t_global_color_status_info_default);

/***/ },

/***/ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_warning_default.js"
/*!**************************************************************************************************!*\
  !*** ../node_modules/@patternfly/react-tokens/dist/esm/t_global_color_status_warning_default.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t_global_color_status_warning_default: () => (/* binding */ t_global_color_status_warning_default)
/* harmony export */ });
const t_global_color_status_warning_default = {
  "name": "--pf-t--global--color--status--warning--default",
  "value": "#73480b",
  "var": "var(--pf-t--global--color--status--warning--default)"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t_global_color_status_warning_default);

/***/ },

/***/ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_icon_color_disabled.js"
/*!*****************************************************************************************!*\
  !*** ../node_modules/@patternfly/react-tokens/dist/esm/t_global_icon_color_disabled.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t_global_icon_color_disabled: () => (/* binding */ t_global_icon_color_disabled)
/* harmony export */ });
const t_global_icon_color_disabled = {
  "name": "--pf-t--global--icon--color--disabled",
  "value": "#a3a3a3",
  "var": "var(--pf-t--global--icon--color--disabled)"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t_global_icon_color_disabled);

/***/ },

/***/ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_icon_color_severity_undefined_default.js"
/*!***********************************************************************************************************!*\
  !*** ../node_modules/@patternfly/react-tokens/dist/esm/t_global_icon_color_severity_undefined_default.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t_global_icon_color_severity_undefined_default: () => (/* binding */ t_global_icon_color_severity_undefined_default)
/* harmony export */ });
const t_global_icon_color_severity_undefined_default = {
  "name": "--pf-t--global--icon--color--severity--undefined--default",
  "value": "#4d4d4d",
  "var": "var(--pf-t--global--icon--color--severity--undefined--default)"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t_global_icon_color_severity_undefined_default);

/***/ },

/***/ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_text_color_disabled.js"
/*!*****************************************************************************************!*\
  !*** ../node_modules/@patternfly/react-tokens/dist/esm/t_global_text_color_disabled.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t_global_text_color_disabled: () => (/* binding */ t_global_text_color_disabled)
/* harmony export */ });
const t_global_text_color_disabled = {
  "name": "--pf-t--global--text--color--disabled",
  "value": "#a3a3a3",
  "var": "var(--pf-t--global--text--color--disabled)"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t_global_text_color_disabled);

/***/ },

/***/ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_text_color_subtle.js"
/*!***************************************************************************************!*\
  !*** ../node_modules/@patternfly/react-tokens/dist/esm/t_global_text_color_subtle.js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t_global_text_color_subtle: () => (/* binding */ t_global_text_color_subtle)
/* harmony export */ });
const t_global_text_color_subtle = {
  "name": "--pf-t--global--text--color--subtle",
  "value": "#383838",
  "var": "var(--pf-t--global--text--color--subtle)"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t_global_text_color_subtle);

/***/ },

/***/ "./features/alerts/pages/AlertRulesDetailsPage.tsx"
/*!*********************************************************!*\
  !*** ./features/alerts/pages/AlertRulesDetailsPage.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveAlerts: () => (/* binding */ ActiveAlerts),
/* harmony export */   McpAcmAlertRulesDetailsPage: () => (/* binding */ McpAcmAlertRulesDetailsPage),
/* harmony export */   MpCmoAlertRulesDetailsPage: () => (/* binding */ MpCmoAlertRulesDetailsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Breadcrumb */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Breadcrumb/@patternfly/react-core/dist/dynamic/components/Breadcrumb");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_CodeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/CodeBlock */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/CodeBlock/@patternfly/react-core/dist/dynamic/components/CodeBlock");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/DescriptionList */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/DescriptionList/@patternfly/react-core/dist/dynamic/components/DescriptionList");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Divider */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Divider/@patternfly/react-core/dist/dynamic/components/Divider");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Dropdown */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Dropdown/@patternfly/react-core/dist/dynamic/components/Dropdown");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Grid */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Grid/@patternfly/react-core/dist/dynamic/layouts/Grid");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Popover */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Popover/@patternfly/react-core/dist/dynamic/components/Popover");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Toolbar */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Toolbar/@patternfly/react-core/dist/dynamic/components/Toolbar");
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/@patternfly/react-table/dist/dynamic/components/Table");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/find.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isInteger.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/omit.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/sortBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/startCase.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_AlertUtils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/console/console-shared/error/fallbacks/withFallback */ "./shared/console/console-shared/error/fallbacks/withFallback.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_status_StatusBox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/status/StatusBox */ "./shared/console/console-shared/src/components/status/StatusBox.tsx");
/* harmony import */ var _shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/datetime/prometheus */ "./shared/console/console-shared/src/datetime/prometheus.ts");
/* harmony import */ var _shared_console_utils_link__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/console/utils/link */ "./shared/console/utils/link.tsx");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _shared_components_KebabDropdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/components/KebabDropdown */ "./shared/components/KebabDropdown.tsx");
/* harmony import */ var _shared_components_labels__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/components/labels */ "./shared/components/labels.tsx");
/* harmony import */ var _metrics_pages_MetricsPage__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../metrics/pages/MetricsPage */ "./features/metrics/pages/MetricsPage.tsx");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../shared/contexts/MonitoringContext */ "./shared/contexts/MonitoringContext.tsx");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/hooks/useAlerts */ "./shared/hooks/useAlerts.ts");



















































// Renders Prometheus template text and highlights any {{ ... }} tags that it contains
const PrometheusTemplate = ({ text })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: text?.split(/(\{\{[^{}]*\}\})/)?.map((part, i)=>part.match(/^\{\{[^{}]*\}\}$/) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: part
            }, i) : part)
    });
const ActiveAlerts = ({ alerts, ruleID })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.usePerspective)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_22__.useNavigate)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_29__.useMonitoringNamespace)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Table, {
        variant: _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.TableVariant.compact,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Thead, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Tr, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Th, {
                            width: 60,
                            children: t('Description')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Th, {
                            width: 15,
                            visibility: [
                                'hiddenOnSm',
                                'visibleOnMd'
                            ],
                            children: t('Active since')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Th, {
                            width: 10,
                            children: t('State')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Th, {
                            width: 15,
                            children: t('Value')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Tbody, {
                children: lodash_es__WEBPACK_IMPORTED_MODULE_19__["default"](alerts, _shared_utils_utils__WEBPACK_IMPORTED_MODULE_33__.alertDescription).map((a, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Tr, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Td, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_22__.Link, {
                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_35__.DataTestIDs.AlertResourceLink,
                                    to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.getAlertUrl)(perspective, a, ruleID, namespace),
                                    children: (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_33__.alertDescription)(a)
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Td, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.Timestamp, {
                                    timestamp: a.activeAt
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Td, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_23__.AlertState, {
                                    state: a.state
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.Td, {
                                modifier: "truncate",
                                children: a.value
                            }),
                            a.state !== _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_KebabDropdown__WEBPACK_IMPORTED_MODULE_30__["default"], {
                                dropdownItems: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownItem, {
                                        component: "button",
                                        onClick: ()=>navigate((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.getNewSilenceAlertUrl)(perspective, a, namespace)),
                                        children: t('Silence alert')
                                    }, "silence")
                                ]
                            })
                        ]
                    }, i))
            })
        ]
    });
};
const AlertRulesDetailsPage_ = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.useTranslation)("plugin__monitoring-plugin");
    const params = (0,react_router__WEBPACK_IMPORTED_MODULE_22__.useParams)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_29__.useMonitoringNamespace)();
    const { rules, rulesAlertLoading } = (0,_shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_36__.useAlerts)();
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.usePerspective)();
    const rule = lodash_es__WEBPACK_IMPORTED_MODULE_14__["default"](rules, {
        id: params.id
    });
    const sourceId = rule?.sourceId;
    // Load alert metrics chart from plugin
    const [resolvedAlertsChartExtensions] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useResolvedExtensions)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.isAlertingRuleChart);
    const alertChartExtensions = resolvedAlertsChartExtensions.filter((extension)=>extension.properties.sourceId === sourceId).map((extension)=>extension.properties.chart);
    const AlertChart = alertChartExtensions[0];
    const formatSeriesTitle = (alertLabels)=>{
        const nameLabel = alertLabels.__name__ ?? '';
        const otherLabels = lodash_es__WEBPACK_IMPORTED_MODULE_18__["default"](alertLabels, '__name__');
        return `${nameLabel}{${lodash_es__WEBPACK_IMPORTED_MODULE_17__["default"](otherLabels, (v, k)=>`${k}="${v}"`).join(',')}}`;
    };
    const runbookURL = rule?.annotations?.runbook_url;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.DocumentTitle, {
                children: t('{{name}} details', {
                    name: rule?.name || _shared_utils_utils__WEBPACK_IMPORTED_MODULE_33__.RuleResource.label
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_status_StatusBox__WEBPACK_IMPORTED_MODULE_25__.StatusBox, {
                data: rule,
                label: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_33__.RuleResource.label,
                loaded: rulesAlertLoading?.loaded,
                loadError: rulesAlertLoading?.loadError,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_9__.PageGroup, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_9__.PageBreadcrumb, {
                            hasBodyWrapper: false,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_22__.Link, {
                                            to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.getAlertRulesUrl)(perspective, namespace),
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_35__.DataTestIDs.Breadcrumb,
                                            children: t('Alerting rules')
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, {
                                        isActive: true,
                                        children: t('Alerting rule details')
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_9__.PageSection, {
                            hasBodyWrapper: false,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.Flex, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.FlexItem, {
                                        alignSelf: {
                                            default: 'alignSelfCenter'
                                        },
                                        spacer: {
                                            default: 'spacerNone'
                                        },
                                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_35__.DataTestIDs.AlertingRuleResourceIcon,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceIcon, {
                                            kind: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_33__.RuleResource.kind
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.FlexItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_11__.Title, {
                                            headingLevel: "h1",
                                            children: rule?.name
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.FlexItem, {
                                        alignSelf: {
                                            default: 'alignSelfCenter'
                                        },
                                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_35__.DataTestIDs.SeverityBadgeHeader,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_23__.SeverityBadge, {
                                            severity: rule?.labels?.severity
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_5__.Divider, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_9__.PageSection, {
                            hasBodyWrapper: false,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_11__.Title, {
                                    headingLevel: "h2",
                                    children: t('Alerting rule details')
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_9__.PageSection, {
                            hasBodyWrapper: false,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.Grid, {
                                sm: 12,
                                md: 6,
                                hasGutter: true,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionList, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                            children: t('Name')
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                            children: rule?.name
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTermHelpText, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Popover__WEBPACK_IMPORTED_MODULE_10__.Popover, {
                                                                headerContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                    children: t('Severity')
                                                                }),
                                                                bodyContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_23__.SeverityHelp, {}),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTermHelpTextButton, {
                                                                    children: [
                                                                        ' ',
                                                                        t('Severity')
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_23__.SeverityBadge, {
                                                                severity: rule?.labels?.severity
                                                            })
                                                        })
                                                    ]
                                                }),
                                                rule?.annotations?.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                            children: t('Description')
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PrometheusTemplate, {
                                                                text: rule.annotations.description
                                                            })
                                                        })
                                                    ]
                                                }),
                                                rule?.annotations?.summary && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                            children: t('Summary')
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                            children: rule.annotations.summary
                                                        })
                                                    ]
                                                }),
                                                rule?.annotations?.message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                            children: t('Message')
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PrometheusTemplate, {
                                                                text: rule.annotations.message
                                                            })
                                                        })
                                                    ]
                                                }),
                                                runbookURL && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                            children: t('Runbook')
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_utils_link__WEBPACK_IMPORTED_MODULE_27__.ExternalLink, {
                                                                href: runbookURL,
                                                                text: runbookURL
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionList, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTermHelpText, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Popover__WEBPACK_IMPORTED_MODULE_10__.Popover, {
                                                                headerContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                    children: t('Source')
                                                                }),
                                                                bodyContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_23__.SourceHelp, {}),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTermHelpTextButton, {
                                                                    children: [
                                                                        ' ',
                                                                        t('Source')
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                            children: rule && (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_23__.getSourceKey)(lodash_es__WEBPACK_IMPORTED_MODULE_20__["default"]((0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_23__.alertingRuleSource)(rule)), t)
                                                        })
                                                    ]
                                                }),
                                                lodash_es__WEBPACK_IMPORTED_MODULE_16__["default"](rule?.duration) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                            children: t('For')
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                            children: rule.duration === 0 ? '-' : (0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_26__.formatPrometheusDuration)(rule.duration * 1000)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                            children: t('Expression')
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_35__.DataTestIDs.Expression,
                                                            children: /* display a link only if its a metrics based alert */ (!sourceId || sourceId === 'prometheus') && perspective !== 'acm' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_22__.Link, {
                                                                to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.getQueryBrowserUrl)({
                                                                    perspective: perspective,
                                                                    query: rule?.query,
                                                                    namespace
                                                                }),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_CodeBlock__WEBPACK_IMPORTED_MODULE_3__.CodeBlock, {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_CodeBlock__WEBPACK_IMPORTED_MODULE_3__.CodeBlockCode, {
                                                                        children: rule?.query
                                                                    })
                                                                })
                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_CodeBlock__WEBPACK_IMPORTED_MODULE_3__.CodeBlock, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_CodeBlock__WEBPACK_IMPORTED_MODULE_3__.CodeBlockCode, {
                                                                    children: rule?.query
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                                        span: 12,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionList, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                        children: t('Labels')
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_labels__WEBPACK_IMPORTED_MODULE_31__.Labels, {
                                                            labels: rule?.labels
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_5__.Divider, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_9__.PageSection, {
                            hasBodyWrapper: false,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_12__.Toolbar, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_12__.ToolbarContent, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_12__.ToolbarItem, {
                                                variant: "label",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_11__.Title, {
                                                    headingLevel: "h2",
                                                    children: t('Active alerts')
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_12__.ToolbarGroup, {
                                                align: {
                                                    default: 'alignEnd'
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_12__.ToolbarItem, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_metrics_pages_MetricsPage__WEBPACK_IMPORTED_MODULE_32__.ToggleGraph, {})
                                                })
                                            })
                                        ]
                                    })
                                }),
                                !sourceId || sourceId === 'prometheus' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_23__.Graph, {
                                    formatSeriesTitle: formatSeriesTitle,
                                    query: rule?.query,
                                    ruleDuration: rule?.duration,
                                    showLegend: true
                                }) : AlertChart ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertChart, {
                                    rule: rule
                                }) : null,
                                lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"](rule?.alerts) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    children: t('None found')
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActiveAlerts, {
                                    alerts: rule.alerts,
                                    ruleID: rule?.id
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const AlertRulesDetailsPageWithFallback = (0,_shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_24__["default"])(AlertRulesDetailsPage_);
const MpCmoAlertRulesDetailsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_34__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-plugin',
            prometheus: 'cmo'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertRulesDetailsPageWithFallback, {})
    });
};
const McpAcmAlertRulesDetailsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_34__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-console-plugin',
            prometheus: 'acm'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertRulesDetailsPageWithFallback, {})
    });
};


/***/ },

/***/ "./shared/components/labels.tsx"
/*!**************************************!*\
  !*** ./shared/components/labels.tsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Labels: () => (/* binding */ Labels)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Label */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Label/@patternfly/react-core/dist/dynamic/components/Label");





const Label = ({ k, v })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__.Label, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: k
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: "="
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: v
            })
        ]
    }, k);
const Labels = ({ labels })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("plugin__monitoring-plugin");
    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](labels) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: t('No labels')
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__.LabelGroup, {
        numLabels: 20,
        children: lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](labels, (v, k)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Label, {
                k: k,
                v: v
            }, k))
    });
};


/***/ },

/***/ "./shared/console/console-shared/src/components/empty-state/AccessDenied.tsx"
/*!***********************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/empty-state/AccessDenied.tsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessDenied: () => (/* binding */ AccessDenied)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _imgs_restricted_sign_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../imgs/restricted-sign.svg */ "./shared/console/imgs/restricted-sign.svg");







const RestrictedSignIcon = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: _imgs_restricted_sign_svg__WEBPACK_IMPORTED_MODULE_5__,
        alt: t('Restricted access')
    });
};
const AccessDenied = ({ message })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_2__.EmptyState, {
        "data-test": "access-denied",
        icon: RestrictedSignIcon,
        title: t('Restricted access'),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_3__.Flex, {
            direction: {
                default: 'column'
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
                    children: t("You don't have access to this section due to cluster policy")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                        variant: "danger",
                        title: t('Error details'),
                        children: message
                    })
                })
            ]
        })
    });
};


/***/ },

/***/ "./shared/console/console-shared/src/components/empty-state/EmptyBox.tsx"
/*!*******************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/empty-state/EmptyBox.tsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyBox: () => (/* binding */ EmptyBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConsoleEmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsoleEmptyState */ "./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx");



const EmptyBox = ({ label, customMessage })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConsoleEmptyState__WEBPACK_IMPORTED_MODULE_2__.ConsoleEmptyState, {
        "data-test": "empty-box",
        children: customMessage ? customMessage : label ? t('No {{label}} found', {
            label
        }) : t('Not found')
    });
};
EmptyBox.displayName = 'EmptyBox';


/***/ },

/***/ "./shared/console/console-shared/src/components/loading/LoadError.tsx"
/*!****************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/loading/LoadError.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadError: () => (/* binding */ LoadError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _empty_state_ConsoleEmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../empty-state/ConsoleEmptyState */ "./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx");




const LoadError = ({ label, children, canRetry = true })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    const actions = canRetry ? [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
            type: "button",
            onClick: ()=>window.location.reload(),
            variant: "link",
            isInline: true,
            children: t('Try again')
        }, "try-again")
    ] : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_empty_state_ConsoleEmptyState__WEBPACK_IMPORTED_MODULE_3__.ConsoleEmptyState, {
        primaryActions: actions,
        title: t('Error loading {{label}}', {
            label
        }),
        children: children
    });
};
LoadError.displayName = 'LoadError';


/***/ },

/***/ "./shared/console/console-shared/src/components/status/StatusBox.tsx"
/*!***************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/status/StatusBox.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusBox: () => (/* binding */ StatusBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_lib_utils_error_http_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk/lib/utils/error/http-error */ "../node_modules/@openshift-console/dynamic-plugin-sdk/lib/utils/error/http-error.js");
/* harmony import */ var _empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../empty-state/EmptyBox */ "./shared/console/console-shared/src/components/empty-state/EmptyBox.tsx");
/* harmony import */ var _empty_state_AccessDenied__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../empty-state/AccessDenied */ "./shared/console/console-shared/src/components/empty-state/AccessDenied.tsx");
/* harmony import */ var _loading_LoadingBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loading/LoadingBox */ "./shared/console/console-shared/src/components/loading/LoadingBox.tsx");
/* harmony import */ var _loading_LoadError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../loading/LoadError */ "./shared/console/console-shared/src/components/loading/LoadError.tsx");
/* harmony import */ var _utils_getLastLanguage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utils/getLastLanguage */ "./shared/console/utils/getLastLanguage.ts");














const Data = ({ NoDataEmptyMsg, EmptyMsg, label, data, unfilteredData, children })=>{
    if (NoDataEmptyMsg && lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](unfilteredData)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "loading-box loading-box__loaded",
            children: NoDataEmptyMsg ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NoDataEmptyMsg, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_9__.EmptyBox, {
                label: label
            })
        });
    }
    if (!data || lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](data)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "loading-box loading-box__loaded",
            children: EmptyMsg ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EmptyMsg, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_9__.EmptyBox, {
                label: label
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "loading-box loading-box__loaded",
        children: children
    });
};
Data.displayName = 'Data';
const StatusBox = (props)=>{
    const { loadError, loaded, skeleton, data, ...dataProps } = props;
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("plugin__monitoring-plugin");
    if (loadError) {
        const status = lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](loadError, 'response.status');
        if (status === 404) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_3__.PageSection, {
                hasBodyWrapper: false,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    justifyContent: {
                        default: 'justifyContentCenter'
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_4__.Title, {
                            headingLevel: "h1",
                            children: t('404: Not Found')
                        })
                    })
                })
            });
        }
        if (status === 403) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_empty_state_AccessDenied__WEBPACK_IMPORTED_MODULE_10__.AccessDenied, {
                message: loadError.message
            });
        }
        if (loadError instanceof _openshift_console_dynamic_plugin_sdk_lib_utils_error_http_error__WEBPACK_IMPORTED_MODULE_8__.IncompleteDataError && !lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](data)) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Data, {
                data: data,
                ...dataProps,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                        variant: "info",
                        isInline: true,
                        title: t('{{labels}} content is not available in the catalog at this time due to loading failures.', {
                            labels: new Intl.ListFormat((0,_utils_getLastLanguage__WEBPACK_IMPORTED_MODULE_13__.getLastLanguage)() || 'en', {
                                style: 'long',
                                type: 'conjunction'
                            }).format(loadError.labels)
                        })
                    }),
                    props.children
                ]
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_loading_LoadError__WEBPACK_IMPORTED_MODULE_12__.LoadError, {
            label: props.label,
            children: loadError.message
        });
    }
    if (!loaded) {
        return skeleton ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: skeleton
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_11__.LoadingBox, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Data, {
        data: data,
        ...dataProps
    });
};
StatusBox.displayName = 'StatusBox'; // eslint-disable-next-line @typescript-eslint/no-explicit-any
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 // eslint-disable-next-line @typescript-eslint/no-explicit-any


/***/ },

/***/ "./shared/console/utils/link.tsx"
/*!***************************************!*\
  !*** ./shared/console/utils/link.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExternalLink: () => (/* binding */ ExternalLink),
/* harmony export */   LinkifyExternal: () => (/* binding */ LinkifyExternal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-linkify */ "../node_modules/react-linkify/dist/Linkify.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Icon */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Icon/@patternfly/react-core/dist/dynamic/components/Icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon/@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon");





const ExternalLink = ({ children, href, text, additionalClassName = '', dataTestID, stopPropagation })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "link",
        component: "a",
        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            size: "sm",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_4__.ExternalLinkAltIcon, {})
        }),
        className: additionalClassName,
        href: href,
        target: "_blank",
        iconPosition: "end",
        rel: "noopener noreferrer",
        "data-test-id": dataTestID,
        ...stopPropagation ? {
            onClick: (e)=>e.stopPropagation()
        } : {},
        isInline: true,
        children: children || text
    });
// Open links in a new window and set noopener/noreferrer.
const LinkifyExternal = ({ children })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_linkify__WEBPACK_IMPORTED_MODULE_1__["default"], {
        properties: {
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        children: children
    });
LinkifyExternal.displayName = 'LinkifyExternal';


/***/ },

/***/ "./shared/hooks/useAlerts.ts"
/*!***********************************!*\
  !*** ./shared/hooks/useAlerts.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAlerts: () => (/* binding */ useAlerts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/thunks */ "./shared/store/thunks.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../console/utils/poll-hook */ "./shared/console/utils/poll-hook.ts");
/* harmony import */ var _useMonitoring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useMonitoring */ "./shared/hooks/useMonitoring.ts");
/* harmony import */ var _features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/alerts/components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _usePerspective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");










const POLLING_INTERVAL_MS = 15 * 1000;
// 15 seconds
const useAlerts = (props)=>{
    // Retrieve external information which dictates which alerts to load and use
    const { plugin } = (0,_useMonitoring__WEBPACK_IMPORTED_MODULE_6__.useMonitoring)();
    const { namespace } = (0,_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_9__.useMonitoringNamespace)();
    const { prometheus, useAlertsTenancy, accessCheckLoading } = (0,_useMonitoring__WEBPACK_IMPORTED_MODULE_6__.useMonitoring)();
    const overriddenNamespace = props?.dontUseTenancy || !useAlertsTenancy ? _utils_utils__WEBPACK_IMPORTED_MODULE_4__.ALL_NAMESPACES_KEY : namespace;
    // Start polling for alerts, rules, and silences
    const { trigger } = useAlertsPoller({
        namespace: overriddenNamespace,
        prometheus,
        useAlertsTenancy,
        accessCheckLoading
    });
    // Retrieve alerts, rules and silences from the store, which is populated in the poller
    const alerts = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>(0,_usePerspective__WEBPACK_IMPORTED_MODULE_8__.getObserveState)(plugin, state).alerting[prometheus]?.[overriddenNamespace]?.alerts);
    const rulesAlertLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>(0,_usePerspective__WEBPACK_IMPORTED_MODULE_8__.getObserveState)(plugin, state).alerting[prometheus]?.[overriddenNamespace]);
    const silences = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>(0,_usePerspective__WEBPACK_IMPORTED_MODULE_8__.getObserveState)(plugin, state).alerting[prometheus]?.[overriddenNamespace]?.silences);
    const rules = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>(0,_usePerspective__WEBPACK_IMPORTED_MODULE_8__.getObserveState)(plugin, state).alerting[prometheus]?.[overriddenNamespace]?.rules);
    // Find all labels needed within our list pages
    const additionalAlertSourceLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__.getAdditionalSources)(alerts, _features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__.alertSource), [
        alerts
    ]);
    const additionalRuleSourceLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__.getAdditionalSources)(rules, _features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__.alertingRuleSource), [
        rules
    ]);
    const alertClusterLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const clusterSet = new Set();
        alerts?.forEach((alert)=>{
            const clusterName = alert.labels?.cluster;
            if (clusterName) {
                clusterSet.add(clusterName);
            }
        });
        const clusterArray = Array.from(clusterSet);
        return clusterArray.sort();
    }, [
        alerts
    ]);
    const silenceClusterLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const clusterSet = new Set();
        silences?.data?.forEach((silence)=>{
            const clusterName = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.silenceCluster)(silence);
            if (clusterName) {
                clusterSet.add(clusterName);
            }
        });
        const clusterArray = Array.from(clusterSet);
        return clusterArray.sort();
    }, [
        silences
    ]);
    return {
        trigger,
        additionalAlertSourceLabels,
        additionalRuleSourceLabels,
        alertClusterLabels,
        silenceClusterLabels,
        rulesAlertLoading,
        rules,
        silences,
        alerts
    };
};
const useAlertsPoller = ({ namespace, prometheus, useAlertsTenancy, accessCheckLoading })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const [customExtensions] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.useResolvedExtensions)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.isAlertingRulesSource);
    const alertsSource = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>customExtensions.filter((extension)=>extension.properties.contextId === (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getAlertingContextId)({
                prometheus,
                namespace
            })).map((extension)=>extension.properties), [
        customExtensions,
        prometheus,
        namespace
    ]);
    const rulesUrl = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.buildPrometheusUrl)({
        prometheusUrlProps: {
            endpoint: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.PrometheusEndpoint.RULES,
            namespace
        },
        basePath: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getPrometheusBasePath)({
            prometheus,
            useTenancyPath: useAlertsTenancy
        })
    });
    const silencesUrl = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getAlertmanagerSilencesUrl)({
        prometheus,
        namespace,
        useTenancyPath: useAlertsTenancy
    });
    const fetchDispatch = ()=>dispatch((0,_store_thunks__WEBPACK_IMPORTED_MODULE_2__.fetchAlertingData)(prometheus, namespace, rulesUrl, alertsSource, silencesUrl, !accessCheckLoading));
    // Wait to poll until we know which endpoint to use
    const dependencies = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[
            namespace,
            rulesUrl,
            silencesUrl,
            useAlertsTenancy,
            accessCheckLoading,
            alertsSource
        ], [
        namespace,
        rulesUrl,
        silencesUrl,
        useAlertsTenancy,
        accessCheckLoading,
        alertsSource
    ]);
    (0,_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_5__.usePoll)(fetchDispatch, POLLING_INTERVAL_MS, dependencies);
    return {
        trigger: fetchDispatch
    };
};


/***/ },

/***/ "./shared/store/fetch-alerts.tsx"
/*!***************************************!*\
  !*** ./shared/store/fetch-alerts.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAlerts: () => (/* binding */ fetchAlerts)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);

// Disable client-side timeout (-1) to let the backend control query timeouts
const NO_TIMEOUT = -1;
// Merges Prometheus monitoring alerts with external sources
const fetchAlerts = async (prometheusURL, externalAlertsFetch, namespace)=>{
    if (!externalAlertsFetch || externalAlertsFetch.length === 0) {
        return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(prometheusURL, 'GET', {}, NO_TIMEOUT);
    }
    const resolvedExternalAlertsSources = externalAlertsFetch.map((extensionProperties)=>({
            id: extensionProperties.id,
            fetch: extensionProperties.getAlertingRules
        }));
    const sourceIds = [
        'prometheus',
        ...resolvedExternalAlertsSources.map((source)=>source.id)
    ];
    try {
        const groups = await Promise.allSettled([
            (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(prometheusURL, 'GET', {}, NO_TIMEOUT),
            ...resolvedExternalAlertsSources.map((source)=>source.fetch(namespace))
        ]).then((results)=>results.map((result, i)=>({
                    sourceId: sourceIds[i],
                    alerts: result
                })).flatMap((result)=>result.alerts.status === 'fulfilled' && result.alerts.value?.data?.groups ? result.alerts.value.data.groups.map((group)=>({
                        ...group,
                        rules: [
                            ...group.rules.map((rule)=>({
                                    ...rule,
                                    sourceId: result.sourceId
                                }))
                        ]
                    })) : []));
        return {
            data: {
                groups
            },
            status: 'success'
        };
    } catch  {
        return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(prometheusURL, 'GET', {}, NO_TIMEOUT);
    }
};


/***/ },

/***/ "./shared/store/thunks.ts"
/*!********************************!*\
  !*** ./shared/store/thunks.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAlertingData: () => (/* binding */ fetchAlertingData)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./shared/store/actions.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _fetch_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-alerts */ "./shared/store/fetch-alerts.tsx");




const fetchAlertingData = (prometheus, namespace, rulesUrl, // eslint-disable-next-line @typescript-eslint/no-explicit-any
alertsSource, silencesUrl, active)=>// eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (dispatch, getState)=>{
        if (!active) {
            return;
        }
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingSetLoading)(prometheus, namespace));
        const [rulesResponse, silencesResponse] = await Promise.allSettled([
            (0,_fetch_alerts__WEBPACK_IMPORTED_MODULE_3__.fetchAlerts)(rulesUrl, alertsSource, namespace),
            (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(silencesUrl, 'get')
        ]);
        if (rulesResponse.status === 'rejected') {
            if (rulesResponse.reason?.response) {
                // Set the error message to be the RBAC denial reason
                const responseText = await rulesResponse.reason?.response?.text();
                if (responseText) {
                    rulesResponse.reason.message = responseText;
                }
            }
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingSetErrored)(prometheus, namespace, rulesResponse.reason));
        } else {
            const { alerts, rules } = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getAlertsAndRules)(rulesResponse.value.data);
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingSetRulesLoaded)(prometheus, namespace, rules, alerts));
        }
        if (silencesResponse.status === 'rejected') {
            if (silencesResponse.reason?.response) {
                // Set the error message to be the RBAC denial reason
                const responseText = await silencesResponse.reason?.response?.text();
                if (responseText) {
                    silencesResponse.reason.message = responseText;
                }
            }
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingSetSilencesErrored)(prometheus, namespace, silencesResponse.reason));
        } else {
            const silences = silencesResponse.value.map((silence)=>({
                    ...silence,
                    name: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getSilenceName)(silence)
                }));
            dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingSetSilencesLoaded)(prometheus, namespace, silences));
        }
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.alertingApplySilences)(prometheus, namespace));
    };


/***/ },

/***/ "./shared/console/imgs/restricted-sign.svg"
/*!*************************************************!*\
  !*** ./shared/console/imgs/restricted-sign.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/restricted-sign..svg";

/***/ },

/***/ "../node_modules/lodash-es/_createCaseFirst.js"
/*!*****************************************************!*\
  !*** ../node_modules/lodash-es/_createCaseFirst.js ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castSlice.js */ "../node_modules/lodash-es/_castSlice.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasUnicode.js */ "../node_modules/lodash-es/_hasUnicode.js");
/* harmony import */ var _stringToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToArray.js */ "../node_modules/lodash-es/_stringToArray.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ "../node_modules/lodash-es/toString.js");





/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = (0,_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string);

    var strSymbols = (0,_hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string)
      ? (0,_stringToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? (0,_castSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCaseFirst);


/***/ },

/***/ "../node_modules/lodash-es/isInteger.js"
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/isInteger.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toInteger.js */ "../node_modules/lodash-es/toInteger.js");


/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == (0,_toInteger_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isInteger);


/***/ },

/***/ "../node_modules/lodash-es/max.js"
/*!****************************************!*\
  !*** ../node_modules/lodash-es/max.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseExtremum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseExtremum.js */ "../node_modules/lodash-es/_baseExtremum.js");
/* harmony import */ var _baseGt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGt.js */ "../node_modules/lodash-es/_baseGt.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "../node_modules/lodash-es/identity.js");




/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? (0,_baseExtremum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"], _baseGt_js__WEBPACK_IMPORTED_MODULE_1__["default"])
    : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (max);


/***/ },

/***/ "../node_modules/lodash-es/startCase.js"
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/startCase.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createCompounder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createCompounder.js */ "../node_modules/lodash-es/_createCompounder.js");
/* harmony import */ var _upperFirst_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upperFirst.js */ "../node_modules/lodash-es/upperFirst.js");



/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = (0,_createCompounder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, word, index) {
  return result + (index ? ' ' : '') + (0,_upperFirst_js__WEBPACK_IMPORTED_MODULE_1__["default"])(word);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startCase);


/***/ },

/***/ "../node_modules/lodash-es/upperFirst.js"
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/upperFirst.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createCaseFirst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createCaseFirst.js */ "../node_modules/lodash-es/_createCaseFirst.js");


/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = (0,_createCaseFirst_js__WEBPACK_IMPORTED_MODULE_0__["default"])('toUpperCase');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upperFirst);


/***/ }

}]);
//# sourceMappingURL=exposed-AlertRulesDetailsPage-chunk.js.map