"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["exposed-MonitoringContext"],{

/***/ "./shared/contexts/MonitoringContext.tsx"
/*!***********************************************!*\
  !*** ./shared/contexts/MonitoringContext.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonitoringContext: () => (/* binding */ MonitoringContext),
/* harmony export */   MonitoringProvider: () => (/* binding */ MonitoringProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_react_router_7_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/react-router-7-adapter */ "./shared/utils/react-router-7-adapter.ts");





/** Dictates which plugin this code is being run in */ /** Dictates which prometheus instance this code should contact */ /** Dictates if the user has accesss to alerts in ALL namespaces
   *  If so, then don't show the namespace bar on alerting pages
   */ /** Dictates if the user has accesss to alerts in ALL namespaces
   *  If so, then don't show the namespace bar on alerting pages
   */ /** Dictates if the users access is being loaded. */ /**
   * Dictates if the namespace selector is shown inside the view,
   * in some perspectives the selector already exist outside monitoring components scope
   */ const MonitoringContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    plugin: 'monitoring-plugin',
    prometheus: 'cmo',
    useAlertsTenancy: false,
    useMetricsTenancy: false,
    accessCheckLoading: true,
    displayNamespaceSelector: true
});
const MonitoringProvider = ({ children, monitoringContext })=>{
    const [allNamespaceAlertsTenancy, alertAccessCheckLoading] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.useAccessReview)({
        group: 'monitoring.coreos.com',
        resource: 'prometheusrules',
        verb: 'get',
        namespace: '*'
    });
    const [allNamespaceMeticsTenancy, metricsAccessCheckLoading] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_3__.useAccessReview)({
        group: 'monitoring.coreos.com',
        resource: 'prometheuses/api',
        verb: 'get',
        name: 'k8s',
        namespace: '*'
    });
    const monContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            ...monitoringContext,
            // We only need to use the tenancy path when we are querying the in cluster monitoring
            useAlertsTenancy: monitoringContext.prometheus === 'cmo' && !allNamespaceAlertsTenancy,
            useMetricsTenancy: monitoringContext.prometheus === 'cmo' && !allNamespaceMeticsTenancy,
            accessCheckLoading: alertAccessCheckLoading || metricsAccessCheckLoading,
            displayNamespaceSelector: monitoringContext.displayNamespaceSelector ?? true
        };
    }, [
        monitoringContext,
        allNamespaceAlertsTenancy,
        alertAccessCheckLoading,
        allNamespaceMeticsTenancy,
        metricsAccessCheckLoading
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MonitoringContext.Provider, {
        value: monContext,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(use_query_params__WEBPACK_IMPORTED_MODULE_2__.QueryParamProvider, {
            adapter: _utils_react_router_7_adapter__WEBPACK_IMPORTED_MODULE_4__.ReactRouter7Adapter,
            children: children
        })
    });
};


/***/ },

/***/ "./shared/utils/react-router-7-adapter.ts"
/*!************************************************!*\
  !*** ./shared/utils/react-router-7-adapter.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactRouter7Adapter: () => (/* binding */ ReactRouter7Adapter)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);

const ReactRouter7Adapter = ({ children })=>{
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
    const location = (0,react_router__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
    const adapter = {
        replace (location) {
            navigate(location.search || '?', {
                replace: true,
                state: location.state
            });
        },
        push (location) {
            navigate(location.search || '?', {
                replace: false,
                state: location.state
            });
        },
        get location () {
            return location;
        }
    };
    return children(adapter);
};


/***/ }

}]);
//# sourceMappingURL=exposed-MonitoringContext-chunk.js.map