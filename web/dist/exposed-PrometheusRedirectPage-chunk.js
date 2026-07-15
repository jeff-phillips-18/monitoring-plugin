"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["exposed-PrometheusRedirectPage"],{

/***/ "./features/metrics/pages/PrometheusRedirectPage.tsx"
/*!***********************************************************!*\
  !*** ./features/metrics/pages/PrometheusRedirectPage.tsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");



// Handles links that have the Prometheus UI's URL format (expected for links in alerts sent by
// Alertmanager). The Prometheus UI specifies the PromQL query with the GET param `g0.expr`, so we
// use that if it exists. Otherwise, just go to the query browser page with no query.
const PrometheusRouterRedirect = ()=>{
    const { urlRoot } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_2__.usePerspective)();
    const [params] = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();
    // leaving perspective redirect to future work
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Navigate, {
        to: `/${urlRoot}/query-browser?query0=${params['g0.expr'] ? encodeURIComponent(params['g0.expr']) : ''}`
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrometheusRouterRedirect);


/***/ },

/***/ "./shared/hooks/usePerspective.tsx"
/*!*****************************************!*\
  !*** ./shared/hooks/usePerspective.tsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertRulesUrl: () => (/* binding */ getAlertRulesUrl),
/* harmony export */   getAlertUrl: () => (/* binding */ getAlertUrl),
/* harmony export */   getAlertsUrl: () => (/* binding */ getAlertsUrl),
/* harmony export */   getDashboardUrl: () => (/* binding */ getDashboardUrl),
/* harmony export */   getDashboardsListUrl: () => (/* binding */ getDashboardsListUrl),
/* harmony export */   getEditSilenceAlertUrl: () => (/* binding */ getEditSilenceAlertUrl),
/* harmony export */   getFetchSilenceUrl: () => (/* binding */ getFetchSilenceUrl),
/* harmony export */   getLegacyDashboardsUrl: () => (/* binding */ getLegacyDashboardsUrl),
/* harmony export */   getMutlipleQueryBrowserUrl: () => (/* binding */ getMutlipleQueryBrowserUrl),
/* harmony export */   getNewSilenceAlertUrl: () => (/* binding */ getNewSilenceAlertUrl),
/* harmony export */   getNewSilenceUrl: () => (/* binding */ getNewSilenceUrl),
/* harmony export */   getObserveState: () => (/* binding */ getObserveState),
/* harmony export */   getQueryBrowserUrl: () => (/* binding */ getQueryBrowserUrl),
/* harmony export */   getRuleUrl: () => (/* binding */ getRuleUrl),
/* harmony export */   getSilenceAlertUrl: () => (/* binding */ getSilenceAlertUrl),
/* harmony export */   getSilencesUrl: () => (/* binding */ getSilencesUrl),
/* harmony export */   usePerspective: () => (/* binding */ usePerspective)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/types */ "./shared/types/types.ts");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _constants_query_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/query-params */ "./shared/constants/query-params.ts");





const usePerspective = ()=>{
    const [perspective] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.useActivePerspective)();
    switch(perspective){
        case 'dev':
            return {
                perspective: 'dev',
                urlRoot: "dev-monitoring",
                defaultAlertTenant: [
                    _types_types__WEBPACK_IMPORTED_MODULE_1__.AlertSource.User
                ]
            };
        case 'admin':
            return {
                perspective: 'admin',
                urlRoot: "monitoring",
                defaultAlertTenant: [
                    _types_types__WEBPACK_IMPORTED_MODULE_1__.AlertSource.Platform
                ]
            };
        case 'virtualization-perspective':
            return {
                perspective: 'virtualization-perspective',
                urlRoot: "virt-monitoring",
                defaultAlertTenant: [
                    _types_types__WEBPACK_IMPORTED_MODULE_1__.AlertSource.Platform
                ]
            };
        default:
            return {
                perspective: 'acm',
                urlRoot: "multicloud/monitoring",
                defaultAlertTenant: []
            };
    }
};
const getAlertsUrl = (perspective, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.url}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/alerts`;
        case 'virtualization-perspective':
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.virtUrl;
        case 'admin':
        default:
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.url;
    }
};
const getAlertRulesUrl = (perspective, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.url}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/alertrules`;
        case 'virtualization-perspective':
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.virtUrl;
        case 'admin':
        default:
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.url;
    }
};
const getSilencesUrl = (perspective, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/silences`;
        case 'virtualization-perspective':
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.virtUrl;
        case 'admin':
        default:
            return _utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url;
    }
};
const getNewSilenceAlertUrl = (perspective, alert, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/~new?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/silences/~new?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.virtUrl}/~new?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/~new?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
    }
};
const getNewSilenceUrl = (perspective, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/~new`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/silences/~new`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.virtUrl}/~new`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/~new`;
    }
};
const getRuleUrl = (perspective, rule, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.url}/${lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](rule, 'id')}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/rules/${rule?.id}`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.virtUrl}/${rule?.id}`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.RuleResource.url}/${lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](rule, 'id')}`;
    }
};
const getSilenceAlertUrl = (perspective, id, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/${id}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/silences/${id}`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.virtUrl}/${id}`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/${id}`;
    }
};
const getEditSilenceAlertUrl = (perspective, id, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/${id}/edit`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/silences/${id}/edit`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.virtUrl}/${id}/edit`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.SilenceResource.url}/${id}/edit`;
    }
};
const getAlertUrl = (perspective, alert, ruleID, namespace)=>{
    switch(perspective){
        case 'acm':
            return `/multicloud${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.url}/${ruleID}?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/alerts/${ruleID}?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.virtUrl}/${ruleID}?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
        case 'admin':
        default:
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.AlertResource.url}/${ruleID}?${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.labelsToParams)(alert.labels)}`;
    }
};
const getFetchSilenceUrl = (perspective, silenceID, namespace)=>{
    switch(perspective){
        case 'acm':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_PROXY_PATH}/api/v2/silence/${silenceID}`;
        case 'dev':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_TENANCY_BASE_PATH}/api/v2/silence/${silenceID}?namespace=${namespace}`;
        case 'virtualization-perspective':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_BASE_PATH}/api/v2/silence/${silenceID}`;
        default:
        case 'admin':
            return `${_utils_utils__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_BASE_PATH}/api/v2/silence/${silenceID}`;
    }
};
// Redux state defined in the openshift/console repo
const getObserveState = (plugin, state)=>{
    switch(plugin){
        case 'monitoring-console-plugin':
            return state.plugins?.mcp;
        case 'monitoring-plugin':
        default:
            return state.plugins?.mp;
    }
};
const getQueryBrowserUrl = ({ perspective, query, namespace, units })=>{
    const unitsQueryParam = units ? `&${_constants_query_params__WEBPACK_IMPORTED_MODULE_4__.QueryParams.Units}=${units}` : '';
    switch(perspective){
        case 'acm':
            return '';
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/metrics?query0=${encodeURIComponent(query)}${unitsQueryParam}`;
        case 'virtualization-perspective':
            return `/virt-monitoring/query-browser?query0=${encodeURIComponent(query)}${unitsQueryParam}`;
        case 'admin':
        default:
            return `/monitoring/query-browser?query0=${encodeURIComponent(query)}${unitsQueryParam}`;
    }
};
const getMutlipleQueryBrowserUrl = (perspective, params, namespace)=>{
    switch(perspective){
        case 'acm':
            return '';
        case 'dev':
            return `/dev-monitoring/ns/${namespace}/metrics?${params.toString()}`;
        case 'virtualization-perspective':
            return `/virt-monitoring/query-browser?${params.toString()}`;
        case 'admin':
        default:
            return `/monitoring/query-browser?${params.toString()}`;
    }
};
const getLegacyDashboardsUrl = (perspective, boardName, namespace)=>{
    switch(perspective){
        case 'acm':
            return '';
        case 'dev':
            return `/dev-monitoring/ns/${namespace}`;
        case 'virtualization-perspective':
            return `/virt-monitoring/dashboards` + (boardName ? `/${boardName}` : '');
        case 'admin':
        default:
            return `/monitoring/dashboards` + (boardName ? `/${boardName}` : '');
    }
};
const getDashboardUrl = (perspective)=>{
    switch(perspective){
        case 'virtualization-perspective':
            return `/virt-monitoring/v2/dashboards/view`;
        case 'admin':
            return `/monitoring/v2/dashboards/view`;
        case 'acm':
            return `/multicloud/monitoring/v2/dashboards/view`;
        default:
            return '';
    }
};
const getDashboardsListUrl = (perspective)=>{
    switch(perspective){
        case 'virtualization-perspective':
            return `/virt-monitoring/v2/dashboards`;
        case 'admin':
            return `/monitoring/v2/dashboards`;
        case 'acm':
            return `/multicloud/monitoring/v2/dashboards`;
        default:
            return '';
    }
};


/***/ }

}]);
//# sourceMappingURL=exposed-PrometheusRedirectPage-chunk.js.map