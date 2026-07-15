"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["exposed-ols-tool-ui"],{

/***/ "../node_modules/mdi-material-ui/ViewGridPlus.js"
/*!*******************************************************!*\
  !*** ../node_modules/mdi-material-ui/ViewGridPlus.js ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use client";Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _createIcon=_interopRequireDefault(__webpack_require__(/*! ./util/createIcon */ "../node_modules/mdi-material-ui/util/createIcon.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var _default=exports["default"]=(0,_createIcon["default"])('M13 3V11H21V3H13M3 21H11V13H3V21M3 3V11H11V3H3M13 16H16V13H18V16H21V18H18V21H16V18H13V16Z','ViewGridPlus');

/***/ },

/***/ "./features/perses-dashboards/ols-tool-ui/ShowTimeseries.tsx"
/*!*******************************************************************!*\
  !*** ./features/perses-dashboards/ols-tool-ui/ShowTimeseries.tsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowTimeseries: () => (/* binding */ ShowTimeseries),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/runtime/DataQueriesProvider/DataQueriesProvider.js");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/components/Panel/Panel.js");
/* harmony import */ var _helpers_OlsToolUIPersesWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/OlsToolUIPersesWrapper */ "./features/perses-dashboards/ols-tool-ui/helpers/OlsToolUIPersesWrapper.tsx");
/* harmony import */ var _helpers_AddToDashboardButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/AddToDashboardButton */ "./features/perses-dashboards/ols-tool-ui/helpers/AddToDashboardButton.tsx");
/* harmony import */ var _helpers_useTimeRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/useTimeRange */ "./features/perses-dashboards/ols-tool-ui/helpers/useTimeRange.ts");







const ShowTimeseries = ({ tool })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("plugin__monitoring-plugin");
    const { query, title, description, start, end, duration } = tool.args;
    const timeRange = (0,_helpers_useTimeRange__WEBPACK_IMPORTED_MODULE_6__.useTimeRange)(start, end, duration);
    const queryDescription = t('Query: {{query}}', {
        query: query
    });
    const definitions = [
        {
            kind: 'PrometheusTimeSeriesQuery',
            spec: {
                query: query
            }
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_OlsToolUIPersesWrapper__WEBPACK_IMPORTED_MODULE_4__.OlsToolUIPersesWrapper, {
            initialTimeRange: timeRange,
            initialTimeZone: "UTC",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_2__.DataQueriesProvider, {
                definitions: definitions,
                options: {
                    suggestedStepMs: 15000,
                    mode: 'range'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_3__.Panel, {
                    panelOptions: {
                        hideHeader: false,
                        extra: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_AddToDashboardButton__WEBPACK_IMPORTED_MODULE_5__.AddToDashboardButton, {
                                query: query,
                                name: title,
                                description: description
                            })
                    },
                    definition: {
                        kind: 'Panel',
                        spec: {
                            queries: [],
                            display: {
                                name: title,
                                description: `${description}\n\n${queryDescription}`
                            },
                            plugin: {
                                kind: 'TimeSeriesChart',
                                spec: {
                                    legend: {
                                        position: 'bottom'
                                    }
                                }
                            }
                        }
                    }
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowTimeseries);


/***/ },

/***/ "./features/perses-dashboards/ols-tool-ui/helpers/AddToDashboardButton.tsx"
/*!*********************************************************************************!*\
  !*** ./features/perses-dashboards/ols-tool-ui/helpers/AddToDashboardButton.tsx ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddToDashboardButton: () => (/* binding */ AddToDashboardButton),
/* harmony export */   HeaderIconButton: () => (/* binding */ HeaderIconButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/styles/styled.js");
/* harmony import */ var mdi_material_ui_ViewGridPlus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdi-material-ui/ViewGridPlus */ "../node_modules/mdi-material-ui/ViewGridPlus.js");
/* harmony import */ var _perses_dev_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @perses-dev/components */ "../node_modules/@perses-dev/components/dist/index.js");
/* harmony import */ var _shared_store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/store/actions */ "./shared/store/actions.ts");








const HeaderIconButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])(({ theme })=>({
        borderRadius: theme.shape.borderRadius,
        padding: '4px'
    }));
function createPanelDefinition(query, name, description) {
    return {
        kind: 'Panel',
        spec: {
            display: {
                name: name,
                description: description
            },
            plugin: {
                kind: 'TimeSeriesChart',
                spec: {}
            },
            queries: [
                {
                    kind: 'TimeSeriesQuery',
                    spec: {
                        plugin: {
                            kind: 'PrometheusTimeSeriesQuery',
                            spec: {
                                query: query
                            }
                        }
                    }
                }
            ]
        }
    };
}
const AddToDashboardButton = ({ query, name, description })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    const isDashboardOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((s)=>s.plugins?.mcp?.dashboards?.isOpened);
    const addToPersesDashboard = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const panelDefinition = createPanelDefinition(query, name, description);
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_8__.dashboardsAddPersesPanelExternally)(panelDefinition));
    }, [
        query,
        name,
        description,
        dispatch
    ]);
    if (!isDashboardOpen) {
        // No dashboard is opened - nothing to add to.
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_components__WEBPACK_IMPORTED_MODULE_7__.InfoTooltip, {
        description: t('Add To Dashboard'),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderIconButton, {
            "aria-label": t('Add to dashboard'),
            size: "small",
            onClick: addToPersesDashboard,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(mdi_material_ui_ViewGridPlus__WEBPACK_IMPORTED_MODULE_6__["default"], {
                "aria-hidden": true,
                fontSize: "inherit",
                sx: {
                    color: (theme)=>theme.palette.text.secondary
                }
            })
        })
    });
};


/***/ },

/***/ "./features/perses-dashboards/ols-tool-ui/helpers/OlsToolUIPersesWrapper.tsx"
/*!***********************************************************************************!*\
  !*** ./features/perses-dashboards/ols-tool-ui/helpers/OlsToolUIPersesWrapper.tsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OlsToolUIPersesWrapper: () => (/* binding */ OlsToolUIPersesWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/query-core/build/lib/queryClient.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perses-dev/dashboards */ "../node_modules/@perses-dev/dashboards/dist/context/VariableProvider/VariableProvider.js");
/* harmony import */ var _perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perses-dev/plugin-system */ "../node_modules/@perses-dev/plugin-system/dist/runtime/TimeRangeProvider/TimeRangeProviders.js");
/* harmony import */ var _perses_dev_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perses-dev/components */ "../node_modules/@perses-dev/components/dist/index.js");
/* harmony import */ var _components_PersesWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PersesWrapper */ "./features/perses-dashboards/components/PersesWrapper.tsx");






const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            keepPreviousData: true
        }
    }
});
const OlsToolUIPersesWrapper = ({ children, initialTimeRange = {
    pastDuration: '1h'
}, height = '300px', initialTimeZone = 'UTC' })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PersesWrapper__WEBPACK_IMPORTED_MODULE_6__.PersesWrapper, {
            project: null,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_components__WEBPACK_IMPORTED_MODULE_5__.TimeZoneProvider, {
                timeZone: initialTimeZone,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_plugin_system__WEBPACK_IMPORTED_MODULE_4__.TimeRangeProviderBasic, {
                    initialTimeRange: initialTimeRange,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_perses_dev_dashboards__WEBPACK_IMPORTED_MODULE_3__.VariableProvider, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PersesWrapper__WEBPACK_IMPORTED_MODULE_6__.PersesPrometheusDatasourceWrapper, {
                            queries: [],
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                style: {
                                    width: '100%',
                                    height: height
                                },
                                children: children
                            })
                        })
                    })
                })
            })
        })
    });
};


/***/ },

/***/ "./features/perses-dashboards/ols-tool-ui/helpers/useTimeRange.ts"
/*!************************************************************************!*\
  !*** ./features/perses-dashboards/ols-tool-ui/helpers/useTimeRange.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTimeRange: () => (/* binding */ useTimeRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "../node_modules/date-fns/sub.js");
/* harmony import */ var _perses_dev_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perses-dev/core */ "../node_modules/@perses-dev/core/dist/model/time.js");



// Parse a Prometheus-style time expression like "NOW", "NOW-48h", "NOW-1d2h30m",
// or a plain date string like "2024-01-01T00:00:00Z".
const parseTimeExpr = (expr, now)=>{
    const match = expr.match(/^NOW(?:-(.+))?$/);
    if (!match) {
        const parsed = new Date(expr);
        return Number.isNaN(parsed.getTime()) ? undefined : parsed;
    }
    if (!match[1]) {
        return now;
    }
    if ((0,_perses_dev_core__WEBPACK_IMPORTED_MODULE_2__.isDurationString)(match[1])) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.sub)(now, (0,_perses_dev_core__WEBPACK_IMPORTED_MODULE_2__.parseDurationString)(match[1]));
    }
    return undefined;
};
const useTimeRange = (start, end, duration)=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const now = new Date();
        const safeDuration = duration && (0,_perses_dev_core__WEBPACK_IMPORTED_MODULE_2__.isDurationString)(duration) ? duration : '1h';
        const startDate = start ? parseTimeExpr(start, now) : undefined;
        const endDate = end ? parseTimeExpr(end, now) : undefined;
        // If end is exactly "NOW" with no offset and no explicit start, use relative time range
        if (end === 'NOW' && !start) {
            return {
                pastDuration: safeDuration
            };
        }
        if (startDate && endDate) {
            return {
                start: startDate,
                end: endDate
            };
        }
        return {
            pastDuration: safeDuration
        };
    }, [
        duration,
        end,
        start
    ]);
};


/***/ },

/***/ "./features/perses-dashboards/utils/perses-client.ts"
/*!***********************************************************!*\
  !*** ./features/perses-dashboards/utils/perses-client.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PERSES_PROXY_BASE_PATH: () => (/* binding */ PERSES_PROXY_BASE_PATH),
/* harmony export */   fetchPersesDashboard: () => (/* binding */ fetchPersesDashboard),
/* harmony export */   fetchPersesDashboardsByProject: () => (/* binding */ fetchPersesDashboardsByProject),
/* harmony export */   fetchPersesDashboardsMetadata: () => (/* binding */ fetchPersesDashboardsMetadata),
/* harmony export */   fetchPersesProjects: () => (/* binding */ fetchPersesProjects),
/* harmony export */   fetchPersesUserPermissions: () => (/* binding */ fetchPersesUserPermissions),
/* harmony export */   useFetchPersesDashboard: () => (/* binding */ useFetchPersesDashboard),
/* harmony export */   useFetchPersesPermissions: () => (/* binding */ useFetchPersesPermissions)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");




const PERSES_PROXY_BASE_PATH = '/api/proxy/plugin/monitoring-console-plugin/perses';
const fetchPersesDashboardsMetadata = ()=>{
    const listDashboardsMetadata = '/api/v1/dashboards';
    const persesURL = `${PERSES_PROXY_BASE_PATH}${listDashboardsMetadata}`;
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(persesURL);
};
const fetchPersesDashboardsByProject = (project)=>{
    const dashboardsEndpoint = `${PERSES_PROXY_BASE_PATH}/api/v1/dashboards`;
    const persesURL = `${dashboardsEndpoint}?project=${encodeURIComponent(project)}`;
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(persesURL);
};
const fetchPersesProjects = ()=>{
    const listProjectURL = '/api/v1/projects';
    const persesURL = `${PERSES_PROXY_BASE_PATH}${listProjectURL}`;
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(persesURL);
};
const fetchPersesUserPermissions = (username)=>{
    const userPermissionsURL = `/api/v1/users/${encodeURIComponent(username)}/permissions`;
    const persesURL = `${PERSES_PROXY_BASE_PATH}${userPermissionsURL}`;
    return (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(persesURL);
};
const fetchPersesDashboard = async (project, dashboardName)=>{
    const getDashboardURL = `/api/v1/projects/${project}/dashboards/${dashboardName}`;
    const persesURL = `${PERSES_PROXY_BASE_PATH}${getDashboardURL}`;
    return await (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.consoleFetchJSON)(persesURL);
};
const useFetchPersesDashboard = (project, dashboardName)=>{
    const [refreshInterval] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_2__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_3__.QueryParams.RefreshInterval, use_query_params__WEBPACK_IMPORTED_MODULE_2__.NumberParam);
    const { isLoading: persesDashboardLoading, error: persesDashboardError, data: persesDashboard } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            'dashboards',
            project,
            dashboardName
        ],
        queryFn: ()=>fetchPersesDashboard(project, dashboardName),
        enabled: true,
        refetchInterval: refreshInterval
    });
    return {
        persesDashboard,
        persesDashboardError,
        persesDashboardLoading
    };
};
const useFetchPersesPermissions = (username)=>{
    const { isLoading: persesPermissionsLoading, error: persesPermissionsError, data: persesUserPermissions } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            'perses-user-permissions',
            username
        ],
        queryFn: ()=>fetchPersesUserPermissions(username),
        enabled: !!username,
        staleTime: 5 * 60 * 1000,
        // Cache for 5 minutes
        refetchOnWindowFocus: true,
        retry: 2,
        onError: (error)=>{
            // eslint-disable-next-line no-console
            console.warn('Failed to fetch Perses user permissions:', error);
        }
    });
    return {
        persesUserPermissions,
        persesPermissionsError,
        persesPermissionsLoading
    };
};


/***/ },

/***/ "./features/perses-dashboards/utils/perses/url-builder.ts"
/*!****************************************************************!*\
  !*** ./features/perses-dashboards/utils/perses/url-builder.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInRoute: () => (/* binding */ SignInRoute),
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
// Copyright 2023 The Perses Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const apiPrefix = '/api/v1';
const SignInRoute = '/sign-in';
function buildURL(params) {
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // OCP Specific Code
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const basePath = '/api/proxy/plugin/monitoring-console-plugin/perses';
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // OCP Specific Code
    ////////////////////////////////////////////////////////////////////////////////////////////////
    let url = params.apiPrefix === undefined ? apiPrefix : params.apiPrefix;
    if (params.project !== undefined && params.project.length > 0) {
        url = `${url}/projects/${encodeURIComponent(params.project)}`;
    }
    url = `${url}/${params.resource}`;
    if (params.name !== undefined && params.name.length > 0) {
        url = `${url}/${encodeURIComponent(params.name)}`;
    }
    if (params.pathSuffix && params.pathSuffix.length > 0) {
        url = `${url}/${params.pathSuffix.join('/')}`;
    }
    if (params.queryParams !== undefined) {
        url = `${url}?${params.queryParams.toString()}`;
    }
    return basePath + url;
}


/***/ },

/***/ "./shared/constants/query-params.ts"
/*!******************************************!*\
  !*** ./shared/constants/query-params.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryParams: () => (/* binding */ QueryParams)
/* harmony export */ });
var QueryParams = /*#__PURE__*/ function(QueryParams) {
    QueryParams["Dashboard"] = "dashboard";
    QueryParams["RefreshInterval"] = "refreshInterval";
    QueryParams["TimeRange"] = "timeRange";
    QueryParams["EndTime"] = "endTime";
    QueryParams["Datasource"] = "datasource";
    QueryParams["Project"] = "project";
    QueryParams["Namespace"] = "namespace";
    QueryParams["Units"] = "units";
    // Use openshift-namespace query parameter for dashboards page since grafana variables cannot have
    // a `-` character in their name
    QueryParams["OpenshiftProject"] = "project-dropdown-value";
    QueryParams["Refresh"] = "refresh";
    QueryParams["Start"] = "start";
    QueryParams["Edit"] = "edit";
    return QueryParams;
}({});


/***/ },

/***/ "./shared/hooks/usePatternflyTheme.ts"
/*!********************************************!*\
  !*** ./shared/hooks/usePatternflyTheme.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePatternFlyTheme: () => (/* binding */ usePatternFlyTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PF_THEME_DARK_CLASS_V6 = 'pf-v6-theme-dark';
const PF_THEME_DARK_CLASS_V5 = 'pf-v5-theme-dark';
const PF_THEME_DARK_CLASS_V4 = 'pf-theme-dark';
/**
 * The @openshift-console/dynamic-plugin-sdk package does not expose the
 * theme setting of the user preferences, therefore check if the root
 * <html> element has the PatternFly css class set for the dark theme.
 */ function getTheme() {
    const classList = document.documentElement.classList;
    if (classList.contains(PF_THEME_DARK_CLASS_V4) || classList.contains(PF_THEME_DARK_CLASS_V5) || classList.contains(PF_THEME_DARK_CLASS_V6)) {
        return 'dark';
    }
    return 'light';
}
/**
 * In case the user sets "system default" theme in the user preferences,
 * update the theme if the system theme changes.
 */ function usePatternFlyTheme() {
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getTheme());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const reloadTheme = ()=>setTheme(getTheme());
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener('change', reloadTheme);
        return ()=>mq.removeEventListener('change', reloadTheme);
    }, [
        setTheme
    ]);
    return {
        theme
    };
}


/***/ }

}]);
//# sourceMappingURL=exposed-ols-tool-ui-chunk.js.map