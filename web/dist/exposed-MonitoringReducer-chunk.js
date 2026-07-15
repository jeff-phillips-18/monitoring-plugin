"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["exposed-MonitoringReducer"],{

/***/ "./features/legacy-dashboards/utils/utils.ts"
/*!***************************************************!*\
  !*** ./features/legacy-dashboards/utils/utils.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_GRAPH_SAMPLES: () => (/* binding */ DEFAULT_GRAPH_SAMPLES),
/* harmony export */   MONITORING_DASHBOARDS_DEFAULT_TIMESPAN: () => (/* binding */ MONITORING_DASHBOARDS_DEFAULT_TIMESPAN),
/* harmony export */   MONITORING_DASHBOARDS_VARIABLE_ALL_OPTION_KEY: () => (/* binding */ MONITORING_DASHBOARDS_VARIABLE_ALL_OPTION_KEY),
/* harmony export */   RefreshIntervalParam: () => (/* binding */ RefreshIntervalParam),
/* harmony export */   TimeRangeParam: () => (/* binding */ TimeRangeParam)
/* harmony export */ });
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");

const MONITORING_DASHBOARDS_DEFAULT_TIMESPAN = 30 * 60 * 1000;
const MONITORING_DASHBOARDS_VARIABLE_ALL_OPTION_KEY = 'ALL_OPTION_KEY';
const DEFAULT_GRAPH_SAMPLES = 60;
const DEFAULT_REFRESH_INTERVAL = 30 * 1000;
const TimeRangeParam = (0,use_query_params__WEBPACK_IMPORTED_MODULE_0__.withDefault)(use_query_params__WEBPACK_IMPORTED_MODULE_0__.NumberParam, MONITORING_DASHBOARDS_DEFAULT_TIMESPAN);
const RefreshIntervalParam = (0,use_query_params__WEBPACK_IMPORTED_MODULE_0__.withDefault)(use_query_params__WEBPACK_IMPORTED_MODULE_0__.NumberParam, DEFAULT_REFRESH_INTERVAL);


/***/ },

/***/ "./shared/store/reducers.ts"
/*!**********************************!*\
  !*** ./shared/store/reducers.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEqual.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/trim.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/xorWith.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./shared/store/actions.ts");
/* harmony import */ var _features_legacy_dashboards_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/legacy-dashboards/utils/utils */ "./features/legacy-dashboards/utils/utils.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./shared/store/store.ts");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! immer */ "../node_modules/immer/dist/immer.mjs");
/* harmony import */ var _features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../features/alerts/components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");






const monitoringReducer = (0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)((draft, action)=>{
    if (!draft) {
        return _store__WEBPACK_IMPORTED_MODULE_6__.defaultObserveState;
    }
    const queryBrowserPatchQueryHelper = (index, patch)=>{
        return draft.queryBrowser.queries[index] ? {
            ...draft.queryBrowser.queries[index],
            ...patch
        } : {
            ...(0,_store__WEBPACK_IMPORTED_MODULE_6__.newQueryBrowserQuery)(),
            ...patch
        };
    };
    switch(action.type){
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.DashboardsPatchVariable:
            {
                const { dashboardName, key, patch } = action.payload;
                if (!draft.dashboards.legacy[dashboardName]) {
                    draft.dashboards.legacy[dashboardName] = {
                        variables: {}
                    };
                }
                draft.dashboards.legacy[dashboardName].variables[key] = {
                    ...draft.dashboards.legacy[dashboardName].variables[key],
                    ...patch
                };
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.DashboardsPatchAllVariables:
            {
                const { dashboardName, variables } = action.payload;
                if (!draft.dashboards.legacy[dashboardName]) {
                    draft.dashboards.legacy[dashboardName] = {
                        variables: {}
                    };
                }
                draft.dashboards.legacy[dashboardName].variables = variables;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.DashboardsVariableOptionsLoaded:
            {
                const { dashboardName, key, newOptions } = action.payload;
                if (!draft.dashboards.legacy[dashboardName]) {
                    draft.dashboards.legacy[dashboardName] = {
                        variables: {}
                    };
                }
                const val = draft.dashboards.legacy[dashboardName].variables[key];
                const patch = lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](val?.options, newOptions) ? {
                    isLoading: false
                } : {
                    isLoading: false,
                    options: newOptions,
                    value: val?.value === _features_legacy_dashboards_utils_utils__WEBPACK_IMPORTED_MODULE_5__.MONITORING_DASHBOARDS_VARIABLE_ALL_OPTION_KEY || newOptions.includes(val?.value ?? '') ? val?.value : newOptions[0]
                };
                draft.dashboards.legacy[dashboardName].variables[key] = {
                    ...draft.dashboards.legacy[dashboardName].variables[key],
                    ...patch
                };
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.DashboardsOpened:
            {
                draft.dashboards.isOpened = action.payload.isOpened;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.DashboardsAddPersesPanelExternally:
            {
                draft.dashboards.addPersesPanelExternally = action.payload.panelDefinition;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.DashboardsPersesPanelExternallyAdded:
            {
                draft.dashboards.addPersesPanelExternally = null;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.AlertingSetRulesLoaded:
            {
                const { datasource, identifier, rules, alerts } = action.payload;
                if (!draft.alerting[datasource]) {
                    draft.alerting[datasource] = {};
                }
                if (!draft.alerting[datasource][identifier]) {
                    draft.alerting[datasource][identifier] = (0,_store__WEBPACK_IMPORTED_MODULE_6__.newAlertsInfo)();
                }
                draft.alerting[datasource][identifier] = {
                    ...draft.alerting[datasource][identifier],
                    rules,
                    alerts,
                    loaded: true,
                    loadError: null,
                    alertCount: alerts.length
                };
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.AlertingSetErrored:
            {
                const { datasource, identifier, loadError } = action.payload;
                if (!draft.alerting[datasource]) {
                    draft.alerting[datasource] = {};
                }
                if (!draft.alerting[datasource][identifier]) {
                    draft.alerting[datasource][identifier] = (0,_store__WEBPACK_IMPORTED_MODULE_6__.newAlertsInfo)();
                }
                draft.alerting[datasource][identifier] = {
                    ...draft.alerting[datasource][identifier],
                    loaded: true,
                    loadError
                };
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.AlertingSetSilencesErrored:
            {
                const { datasource, identifier, loadError } = action.payload;
                if (!draft.alerting[datasource]) {
                    draft.alerting[datasource] = {};
                }
                if (!draft.alerting[datasource][identifier]) {
                    draft.alerting[datasource][identifier] = (0,_store__WEBPACK_IMPORTED_MODULE_6__.newAlertsInfo)();
                }
                draft.alerting[datasource][identifier].silences.loaded = true;
                draft.alerting[datasource][identifier].silences.loadError = loadError;
                draft.alerting[datasource][identifier].silences.data = [];
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.AlertingSetSilencesLoaded:
            {
                const { datasource, identifier, silences } = action.payload;
                if (!draft.alerting[datasource]) {
                    draft.alerting[datasource] = {};
                }
                if (!draft.alerting[datasource][identifier]) {
                    draft.alerting[datasource][identifier] = (0,_store__WEBPACK_IMPORTED_MODULE_6__.newAlertsInfo)();
                }
                draft.alerting[datasource][identifier].silences = {
                    data: silences,
                    loaded: true,
                    loadError: undefined
                };
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.AlertingApplySilences:
            {
                const { datasource, identifier } = action.payload;
                if (!draft.alerting[datasource]) {
                    draft.alerting[datasource] = {};
                }
                if (!draft.alerting[datasource][identifier]) {
                    draft.alerting[datasource][identifier] = {
                        alerts: [],
                        rules: [],
                        alertCount: 0,
                        silences: {
                            data: [],
                            loaded: true
                        },
                        loaded: true,
                        loadError: null
                    };
                }
                const { alerts, rules, silences } = (0,_features_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_8__.applySilences)({
                    alerts: draft.alerting[datasource][identifier].alerts,
                    silences: draft.alerting[datasource][identifier].silences.data,
                    rules: draft.alerting[datasource][identifier].rules
                });
                draft.alerting[datasource][identifier].alerts = alerts;
                draft.alerting[datasource][identifier].rules = rules;
                draft.alerting[datasource][identifier].silences.data = silences;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.AlertingClearSelectorData:
            {
                const { datasource, identifier } = action.payload;
                if (!draft.alerting[datasource]) {
                    draft.alerting[datasource] = {};
                }
                draft.alerting[datasource][identifier] = (0,_store__WEBPACK_IMPORTED_MODULE_6__.newAlertsInfo)();
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.ToggleGraphs:
            {
                draft.hideGraphs = !draft.hideGraphs;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.ShowGraphs:
            {
                draft.hideGraphs = false;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserAddQuery:
            {
                draft.queryBrowser.queries.push((0,_store__WEBPACK_IMPORTED_MODULE_6__.newQueryBrowserQuery)());
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserDuplicateQuery:
            {
                const index = action.payload.index;
                const originQueryText = draft.queryBrowser.queries[index]?.text;
                const duplicate = {
                    ...(0,_store__WEBPACK_IMPORTED_MODULE_6__.newQueryBrowserQuery)(),
                    text: originQueryText,
                    isEnabled: false
                };
                draft.queryBrowser.queries.push(duplicate);
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserDeleteAllQueries:
            {
                draft.queryBrowser.queries = [
                    (0,_store__WEBPACK_IMPORTED_MODULE_6__.newQueryBrowserQuery)()
                ];
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserDeleteAllSeries:
            {
                draft.queryBrowser.queries = draft.queryBrowser.queries.map((query)=>{
                    query.series = [];
                    return query;
                });
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserDeleteQuery:
            {
                const queries = [
                    ...draft.queryBrowser.queries.slice(0, action.payload.index),
                    ...draft.queryBrowser.queries.slice(action.payload.index + 1)
                ];
                if (queries.length === 0) {
                    queries.push((0,_store__WEBPACK_IMPORTED_MODULE_6__.newQueryBrowserQuery)());
                }
                draft.queryBrowser.queries = queries;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserDismissNamespaceAlert:
            {
                draft.queryBrowser.dismissNamespaceAlert = true;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserPatchQuery:
            {
                const { index, patch } = action.payload;
                draft.queryBrowser.queries[index] = queryBrowserPatchQueryHelper(index, patch);
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserRunQueries:
            {
                const queries = draft.queryBrowser.queries.map((query)=>{
                    const text = lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](query.text);
                    return query.isEnabled && query.query !== text ? {
                        ...query,
                        query: text,
                        series: []
                    } : query;
                });
                draft.queryBrowser.queries = queries;
                draft.queryBrowser.lastRequestTime = Date.now();
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserSetAllExpanded:
            {
                const queries = draft.queryBrowser.queries.map((query)=>{
                    query.isExpanded = action.payload.isExpanded;
                    return query;
                });
                draft.queryBrowser.queries = queries;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserSetPollInterval:
            {
                draft.queryBrowser.pollInterval = String(action.payload.pollInterval);
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserSetTimespan:
            {
                draft.queryBrowser.timespan = action.payload.timespan;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserToggleAllSeries:
            {
                const { index } = action.payload;
                const query = draft.queryBrowser.queries[index];
                if (!query) {
                    break;
                }
                const isDisabledSeriesEmpty = lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](draft.queryBrowser.queries[index].disabledSeries);
                const series = draft.queryBrowser.queries[index].series;
                const patch = {
                    disabledSeries: isDisabledSeriesEmpty ? series : []
                };
                draft.queryBrowser.queries[index] = queryBrowserPatchQueryHelper(index, patch);
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserToggleIsEnabled:
            {
                const query = draft.queryBrowser.queries[action.payload.index];
                if (!query) {
                    break;
                }
                const isEnabled = !query.isEnabled;
                draft.queryBrowser.queries[action.payload.index] = queryBrowserPatchQueryHelper(action.payload.index, {
                    id: query.id,
                    isEnabled,
                    isExpanded: isEnabled,
                    query: isEnabled ? query.text : ''
                });
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.QueryBrowserToggleSeries:
            {
                const { index, labels } = action.payload;
                if (draft.queryBrowser.queries[index]) {
                    draft.queryBrowser.queries[index].disabledSeries = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](draft.queryBrowser.queries[index].disabledSeries, [
                        labels
                    ], lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"]);
                }
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.SetAlertCount:
            {
                const { datasource, identifier, alertCount } = action.payload;
                if (!draft.alerting[datasource]) {
                    draft.alerting[datasource] = {};
                }
                if (!draft.alerting[datasource][identifier]) {
                    draft.alerting[datasource][identifier] = (0,_store__WEBPACK_IMPORTED_MODULE_6__.newAlertsInfo)();
                }
                draft.alerting[datasource][identifier].alertCount = alertCount;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.SetIncidents:
            {
                draft.incidentsData.incidents = action.payload.incidents;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.SetIncidentsActiveFilters:
            {
                draft.incidentsData.incidentsActiveFilters = action.payload.incidentsActiveFilters;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.SetAlertsData:
            {
                draft.incidentsData.alertsData = action.payload.alertsData;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.SetAlertsTableData:
            {
                draft.incidentsData.alertsTableData = action.payload.alertsTableData;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.SetAlertsAreLoading:
            {
                draft.incidentsData.alertsAreLoading = action.payload.alertsAreLoading;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.SetIncidentsChartSelection:
            {
                draft.incidentsData.incidentsChartSelectedId = action.payload.incidentsChartSelectedId;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.SetFilteredIncidentsData:
            {
                draft.incidentsData.filteredIncidentsData = action.payload.filteredIncidentsData;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.SetIncidentPageFilterType:
            {
                draft.incidentsData.incidentPageFilterType = action.payload.incidentPageFilterType;
                break;
            }
        case _actions__WEBPACK_IMPORTED_MODULE_4__.ActionType.SetIncidentsLastRefreshTime:
            {
                draft.incidentsData.incidentsLastRefreshTime = action.payload.timestamp;
                break;
            }
        default:
            break;
    }
    return draft;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (monitoringReducer);


/***/ },

/***/ "./shared/store/store.ts"
/*!*******************************!*\
  !*** ./shared/store/store.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultObserveState: () => (/* binding */ defaultObserveState),
/* harmony export */   newAlertsInfo: () => (/* binding */ newAlertsInfo),
/* harmony export */   newQueryBrowserQuery: () => (/* binding */ newQueryBrowserQuery)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/uniqueId.js");
/* harmony import */ var _features_legacy_dashboards_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/legacy-dashboards/utils/utils */ "./features/legacy-dashboards/utils/utils.ts");


// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultObserveState = {
    dashboards: {
        isOpened: false,
        addPersesPanelExternally: null,
        legacy: {}
    },
    queryBrowser: {
        pollInterval: null,
        queries: [
            newQueryBrowserQuery()
        ],
        timespan: _features_legacy_dashboards_utils_utils__WEBPACK_IMPORTED_MODULE_1__.MONITORING_DASHBOARDS_DEFAULT_TIMESPAN,
        dismissNamespaceAlert: false,
        lastRequestTime: Date.now()
    },
    incidentsData: {
        incidents: [],
        alertsData: [],
        alertsTableData: [],
        filteredIncidentsData: [],
        alertsAreLoading: true,
        incidentsChartSelectedId: '',
        incidentsInitialState: {
            days: [
                '7 days'
            ],
            severity: [
                'Critical',
                'Warning'
            ],
            state: [
                'Firing'
            ],
            groupId: []
        },
        incidentsActiveFilters: {
            days: [],
            severity: [],
            state: [],
            groupId: []
        },
        incidentPageFilterType: 'Severity',
        incidentsLastRefreshTime: null
    },
    alerting: {},
    hideGraphs: false
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function newAlertsInfo() {
    return {
        alertCount: 0,
        loaded: false,
        loadError: null,
        alerts: [],
        rules: [],
        silences: {
            data: [],
            loaded: false
        }
    };
}
function newQueryBrowserQuery() {
    return {
        id: lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"]('query-browser-query'),
        isEnabled: true,
        isExpanded: true,
        text: '',
        query: '',
        series: [],
        disabledSeries: [],
        queryTableData: {
            columns: [],
            rows: []
        }
    };
}


/***/ }

}]);
//# sourceMappingURL=exposed-MonitoringReducer-chunk.js.map