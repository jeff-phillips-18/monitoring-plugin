"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["shared_hooks_useMonitoring_ts-shared_hooks_useMonitoringNamespace_ts-shared_store_actions_ts"],{

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

/***/ "./shared/hooks/useMonitoring.ts"
/*!***************************************!*\
  !*** ./shared/hooks/useMonitoring.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMonitoring: () => (/* binding */ useMonitoring)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/MonitoringContext */ "./shared/contexts/MonitoringContext.tsx");


const useMonitoring = ()=>{
    const { prometheus, plugin, useAlertsTenancy, useMetricsTenancy, accessCheckLoading, displayNamespaceSelector } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_1__.MonitoringContext);
    return {
        prometheus,
        plugin,
        useAlertsTenancy,
        useMetricsTenancy,
        accessCheckLoading,
        displayNamespaceSelector
    };
};


/***/ },

/***/ "./shared/hooks/useMonitoringNamespace.ts"
/*!************************************************!*\
  !*** ./shared/hooks/useMonitoringNamespace.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMonitoringNamespace: () => (/* binding */ useMonitoringNamespace)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Utility hook to synchronize the namespace route in the URL with the activeNamespace
 * the console uses. It checks for namespace in the following order:
 * 1. Route param `:ns` (used in dev console routes like /dev-monitoring/ns/:ns/...)
 * 2. Active namespace from console SDK
 */ const useMonitoringNamespace = ()=>{
    const { ns: routeNamespace } = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useParams)();
    const [activeNamespace, setActiveNamespace] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.useActiveNamespace)();
    return {
        namespace: routeNamespace || activeNamespace,
        setNamespace: setActiveNamespace
    };
};


/***/ },

/***/ "./shared/store/actions.ts"
/*!*********************************!*\
  !*** ./shared/store/actions.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   alertingApplySilences: () => (/* binding */ alertingApplySilences),
/* harmony export */   alertingClearSelectorData: () => (/* binding */ alertingClearSelectorData),
/* harmony export */   alertingSetErrored: () => (/* binding */ alertingSetErrored),
/* harmony export */   alertingSetLoading: () => (/* binding */ alertingSetLoading),
/* harmony export */   alertingSetRulesLoaded: () => (/* binding */ alertingSetRulesLoaded),
/* harmony export */   alertingSetSilencesErrored: () => (/* binding */ alertingSetSilencesErrored),
/* harmony export */   alertingSetSilencesLoaded: () => (/* binding */ alertingSetSilencesLoaded),
/* harmony export */   dashboardsAddPersesPanelExternally: () => (/* binding */ dashboardsAddPersesPanelExternally),
/* harmony export */   dashboardsOpened: () => (/* binding */ dashboardsOpened),
/* harmony export */   dashboardsPatchAllVariables: () => (/* binding */ dashboardsPatchAllVariables),
/* harmony export */   dashboardsPatchVariable: () => (/* binding */ dashboardsPatchVariable),
/* harmony export */   dashboardsPersesPanelExternallyAdded: () => (/* binding */ dashboardsPersesPanelExternallyAdded),
/* harmony export */   dashboardsVariableOptionsLoaded: () => (/* binding */ dashboardsVariableOptionsLoaded),
/* harmony export */   queryBrowserAddQuery: () => (/* binding */ queryBrowserAddQuery),
/* harmony export */   queryBrowserDeleteAllQueries: () => (/* binding */ queryBrowserDeleteAllQueries),
/* harmony export */   queryBrowserDeleteAllSeries: () => (/* binding */ queryBrowserDeleteAllSeries),
/* harmony export */   queryBrowserDeleteQuery: () => (/* binding */ queryBrowserDeleteQuery),
/* harmony export */   queryBrowserDismissNamespaceAlert: () => (/* binding */ queryBrowserDismissNamespaceAlert),
/* harmony export */   queryBrowserDuplicateQuery: () => (/* binding */ queryBrowserDuplicateQuery),
/* harmony export */   queryBrowserPatchQuery: () => (/* binding */ queryBrowserPatchQuery),
/* harmony export */   queryBrowserRunQueries: () => (/* binding */ queryBrowserRunQueries),
/* harmony export */   queryBrowserSetAllExpanded: () => (/* binding */ queryBrowserSetAllExpanded),
/* harmony export */   queryBrowserSetMetrics: () => (/* binding */ queryBrowserSetMetrics),
/* harmony export */   queryBrowserSetPollInterval: () => (/* binding */ queryBrowserSetPollInterval),
/* harmony export */   queryBrowserSetTimespan: () => (/* binding */ queryBrowserSetTimespan),
/* harmony export */   queryBrowserToggleAllSeries: () => (/* binding */ queryBrowserToggleAllSeries),
/* harmony export */   queryBrowserToggleIsEnabled: () => (/* binding */ queryBrowserToggleIsEnabled),
/* harmony export */   queryBrowserToggleSeries: () => (/* binding */ queryBrowserToggleSeries),
/* harmony export */   setAlertCount: () => (/* binding */ setAlertCount),
/* harmony export */   setAlertsAreLoading: () => (/* binding */ setAlertsAreLoading),
/* harmony export */   setAlertsData: () => (/* binding */ setAlertsData),
/* harmony export */   setAlertsTableData: () => (/* binding */ setAlertsTableData),
/* harmony export */   setFilteredIncidentsData: () => (/* binding */ setFilteredIncidentsData),
/* harmony export */   setIncidentPageFilterType: () => (/* binding */ setIncidentPageFilterType),
/* harmony export */   setIncidents: () => (/* binding */ setIncidents),
/* harmony export */   setIncidentsActiveFilters: () => (/* binding */ setIncidentsActiveFilters),
/* harmony export */   setIncidentsChartSelection: () => (/* binding */ setIncidentsChartSelection),
/* harmony export */   setIncidentsLastRefreshTime: () => (/* binding */ setIncidentsLastRefreshTime),
/* harmony export */   showGraphs: () => (/* binding */ showGraphs),
/* harmony export */   toggleGraphs: () => (/* binding */ toggleGraphs)
/* harmony export */ });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typesafe-actions */ "../node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);

var ActionType = /*#__PURE__*/ function(ActionType) {
    ActionType["AlertingSetLoading"] = "v2/AlertingSetLoading";
    ActionType["AlertingSetRulesLoaded"] = "v2/AlertingSetRulesLoaded";
    ActionType["AlertingSetSilencesLoaded"] = "v2/AlertingSetSilencesLoaded";
    ActionType["AlertingApplySilences"] = "v2/AlertingApplySilences";
    ActionType["AlertingSetErrored"] = "v2/AlertingSetErrored";
    ActionType["AlertingSetSilencesErrored"] = "v2/AlertingSetSilencesErrored";
    ActionType["AlertingClearSelectorData"] = "v2/AlertingClearSelectorData";
    ActionType["DashboardsPatchAllVariables"] = "v3/dashboardsPatchAllVariables";
    ActionType["DashboardsPatchVariable"] = "v3/dashboardsPatchVariable";
    ActionType["DashboardsVariableOptionsLoaded"] = "v3/dashboardsVariableOptionsLoaded";
    ActionType["DashboardsOpened"] = "dashboardsPersesDashboardsOpened";
    ActionType["DashboardsAddPersesPanelExternally"] = "dashboardsAddPersesPanelExternally";
    ActionType["DashboardsPersesPanelExternallyAdded"] = "dashboardsPersesPanelExternallyAdded";
    ActionType["QueryBrowserAddQuery"] = "queryBrowserAddQuery";
    ActionType["QueryBrowserDuplicateQuery"] = "queryBrowserDuplicateQuery";
    ActionType["QueryBrowserDeleteAllQueries"] = "queryBrowserDeleteAllQueries";
    ActionType["QueryBrowserDeleteAllSeries"] = "queryBrowserDeleteAllSeries";
    ActionType["QueryBrowserDeleteQuery"] = "queryBrowserDeleteQuery";
    ActionType["QueryBrowserDismissNamespaceAlert"] = "queryBrowserDismissNamespaceAlert";
    ActionType["QueryBrowserPatchQuery"] = "queryBrowserPatchQuery";
    ActionType["QueryBrowserRunQueries"] = "queryBrowserRunQueries";
    ActionType["QueryBrowserSetAllExpanded"] = "queryBrowserSetAllExpanded";
    ActionType["QueryBrowserSetMetrics"] = "queryBrowserSetMetrics";
    ActionType["QueryBrowserSetPollInterval"] = "queryBrowserSetPollInterval";
    ActionType["QueryBrowserSetTimespan"] = "queryBrowserSetTimespan";
    ActionType["QueryBrowserToggleIsEnabled"] = "queryBrowserToggleIsEnabled";
    ActionType["QueryBrowserToggleSeries"] = "queryBrowserToggleSeries";
    ActionType["QueryBrowserToggleAllSeries"] = "queryBrowserToggleAllSeries";
    ActionType["SetAlertCount"] = "v2/SetAlertCount";
    ActionType["ToggleGraphs"] = "toggleGraphs";
    ActionType["ShowGraphs"] = "v2/ShowGraphs";
    ActionType["SetIncidents"] = "setIncidents";
    ActionType["SetIncidentsActiveFilters"] = "setIncidentsActiveFilters";
    ActionType["SetAlertsData"] = "setAlertsData";
    ActionType["SetAlertsTableData"] = "setAlertsTableData";
    ActionType["SetAlertsAreLoading"] = "setAlertsAreLoading";
    ActionType["SetIncidentsChartSelection"] = "setIncidentsChartSelection";
    ActionType["SetFilteredIncidentsData"] = "setFilteredIncidentsData";
    ActionType["SetIncidentPageFilterType"] = "setIncidentPageFilterType";
    ActionType["SetIncidentsLastRefreshTime"] = "setIncidentsLastRefreshTime";
    return ActionType;
}({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dashboardsPatchVariable = (dashboardName, key, patch)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v3/dashboardsPatchVariable", {
        dashboardName,
        key,
        patch
    });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dashboardsPatchAllVariables = (dashboardName, variables)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v3/dashboardsPatchAllVariables", {
        dashboardName,
        variables
    });
const dashboardsVariableOptionsLoaded = (dashboardName, key, newOptions)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v3/dashboardsVariableOptionsLoaded", {
        dashboardName,
        key,
        newOptions
    });
const dashboardsOpened = (isOpened)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("dashboardsPersesDashboardsOpened", {
        isOpened
    });
const dashboardsPersesPanelExternallyAdded = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("dashboardsPersesPanelExternallyAdded", {});
const dashboardsAddPersesPanelExternally = (panelDefinition)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("dashboardsAddPersesPanelExternally", {
        panelDefinition
    });
const alertingSetLoading = (datasource, identifier)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingSetLoading", {
        datasource,
        identifier,
        data: {
            loaded: false,
            loadError: null
        }
    });
const alertingSetRulesLoaded = (datasource, identifier, rules, alerts)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingSetRulesLoaded", {
        datasource,
        identifier,
        rules,
        alerts
    });
const alertingSetSilencesLoaded = (datasource, identifier, silences)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingSetSilencesLoaded", {
        datasource,
        identifier,
        silences
    });
// New action to trigger the reducer logic
const alertingApplySilences = (datasource, identifier)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingApplySilences", {
        datasource,
        identifier
    });
const alertingSetErrored = (datasource, identifier, loadError)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingSetErrored", {
        datasource,
        identifier,
        loadError
    });
const alertingSetSilencesErrored = (datasource, identifier, loadError)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingSetSilencesErrored", {
        datasource,
        identifier,
        loadError
    });
const alertingClearSelectorData = (datasource, identifier)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/AlertingClearSelectorData", {
        datasource,
        identifier
    });
const toggleGraphs = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("toggleGraphs");
const showGraphs = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/ShowGraphs");
const queryBrowserAddQuery = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserAddQuery");
const queryBrowserDuplicateQuery = (index)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserDuplicateQuery", {
        index
    });
const queryBrowserDeleteAllQueries = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserDeleteAllQueries");
const queryBrowserDeleteAllSeries = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserDeleteAllSeries");
const queryBrowserDismissNamespaceAlert = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserDismissNamespaceAlert");
const queryBrowserDeleteQuery = (index)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserDeleteQuery", {
        index
    });
const queryBrowserPatchQuery = (index, patch)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserPatchQuery", {
        index,
        patch
    });
const queryBrowserRunQueries = ()=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserRunQueries");
const queryBrowserSetAllExpanded = (isExpanded)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserSetAllExpanded", {
        isExpanded
    });
const queryBrowserSetMetrics = (metrics)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserSetMetrics", {
        metrics
    });
const queryBrowserSetPollInterval = (pollInterval)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserSetPollInterval", {
        pollInterval
    });
const queryBrowserSetTimespan = (timespan)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserSetTimespan", {
        timespan
    });
const queryBrowserToggleAllSeries = (index)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserToggleAllSeries", {
        index
    });
const queryBrowserToggleIsEnabled = (index)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserToggleIsEnabled", {
        index
    });
const queryBrowserToggleSeries = (index, labels)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("queryBrowserToggleSeries", {
        index,
        labels
    });
const setAlertCount = (datasource, identifier, alertCount)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("v2/SetAlertCount", {
        alertCount,
        datasource,
        identifier
    });
const setIncidents = (incidents)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setIncidents", incidents);
const setIncidentsActiveFilters = (incidentsActiveFilters)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setIncidentsActiveFilters", incidentsActiveFilters);
const setAlertsData = (alertsData)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setAlertsData", alertsData);
const setAlertsTableData = (alertsTableData)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setAlertsTableData", alertsTableData);
const setAlertsAreLoading = (alertsAreLoading)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setAlertsAreLoading", alertsAreLoading);
const setIncidentsChartSelection = (incidentsChartSelectedId)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setIncidentsChartSelection", incidentsChartSelectedId);
const setFilteredIncidentsData = (filteredIncidentsData)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setFilteredIncidentsData", filteredIncidentsData);
const setIncidentPageFilterType = (filterTypeSelected)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setIncidentPageFilterType", filterTypeSelected);
const setIncidentsLastRefreshTime = (timestamp)=>(0,typesafe_actions__WEBPACK_IMPORTED_MODULE_0__.action)("setIncidentsLastRefreshTime", {
        timestamp
    });


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
//# sourceMappingURL=shared_hooks_useMonitoring_ts-shared_hooks_useMonitoringNamespace_ts-shared_store_actions_ts-chunk.js.map