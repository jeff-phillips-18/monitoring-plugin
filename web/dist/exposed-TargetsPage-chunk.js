"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["exposed-TargetsPage"],{

/***/ "./features/targets/pages/targets-page.tsx"
/*!*************************************************!*\
  !*** ./features/targets/pages/targets-page.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MpCmoTargetsPage: () => (/* binding */ MpCmoTargetsPage),
/* harmony export */   TargetsFilterOptions: () => (/* binding */ TargetsFilterOptions),
/* harmony export */   getReferenceForModel: () => (/* binding */ getReferenceForModel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Breadcrumb */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Breadcrumb/@patternfly/react-core/dist/dynamic/components/Breadcrumb");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/DescriptionList */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/DescriptionList/@patternfly/react-core/dist/dynamic/components/DescriptionList");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Divider */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Divider/@patternfly/react-core/dist/dynamic/components/Divider");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Grid */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Grid/@patternfly/react-core/dist/dynamic/layouts/Grid");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Pagination */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Pagination/@patternfly/react-core/dist/dynamic/components/Pagination");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Tooltip */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Tooltip/@patternfly/react-core/dist/dynamic/components/Tooltip");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataView */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataView/@patternfly/react-data-view/dist/dynamic/DataView");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewTable */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewTable/@patternfly/react-data-view/dist/dynamic/DataViewTable");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewToolbar */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewToolbar/@patternfly/react-data-view/dist/dynamic/DataViewToolbar");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/Hooks */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/Hooks/@patternfly/react-data-view/dist/dynamic/Hooks");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/find.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/includes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/contexts/MonitoringContext */ "./shared/contexts/MonitoringContext.tsx");
/* harmony import */ var _alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../alerts/components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/empty-state/EmptyBox */ "./shared/console/console-shared/src/components/empty-state/EmptyBox.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/loading/LoadingBox */ "./shared/console/console-shared/src/components/loading/LoadingBox.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/loading/LoadingInline */ "./shared/console/console-shared/src/components/loading/LoadingInline.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_status_StatusBox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/status/StatusBox */ "./shared/console/console-shared/src/components/status/StatusBox.tsx");
/* harmony import */ var _shared_console_models__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/console/models */ "./shared/console/models/index.ts");
/* harmony import */ var _shared_console_module_k8s_label_selector__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/console/module/k8s/label-selector */ "./shared/console/module/k8s/label-selector.js");
/* harmony import */ var _shared_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/console/utils/poll-hook */ "./shared/console/utils/poll-hook.ts");
/* harmony import */ var _shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../shared/console/utils/safe-fetch-hook */ "./shared/console/utils/safe-fetch-hook.ts");
/* harmony import */ var _utils_filter_targets__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../utils/filter-targets */ "./features/targets/utils/filter-targets.ts");
/* harmony import */ var _shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/components/table/sort-utils */ "./shared/components/table/sort-utils.ts");
/* harmony import */ var _shared_components_table_useTableColumns__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../shared/components/table/useTableColumns */ "./shared/components/table/useTableColumns.ts");
/* harmony import */ var _shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _shared_components_labels__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../shared/components/labels */ "./shared/components/labels.tsx");
/* harmony import */ var _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/components/table/table-pagination */ "./shared/components/table/table-pagination.tsx");
/* harmony import */ var _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/components/table/TableFilters */ "./shared/components/table/TableFilters.tsx");
/* harmony import */ var _shared_components_table_TableToolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../shared/components/table/TableToolbar */ "./shared/components/table/TableToolbar.tsx");
/* harmony import */ var _shared_components_table_useTableFilters__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../shared/components/table/useTableFilters */ "./shared/components/table/useTableFilters.ts");
/* harmony import */ var _shared_components_table_useTablePagination__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../shared/components/table/useTablePagination */ "./shared/components/table/useTablePagination.ts");
/* harmony import */ var _shared_types_types__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../shared/types/types */ "./shared/types/types.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");

















































var TargetsFilterOptions = /*#__PURE__*/ function(TargetsFilterOptions) {
    TargetsFilterOptions["NAME"] = "name";
    TargetsFilterOptions["STATUS"] = "status";
    TargetsFilterOptions["LABEL"] = "label";
    TargetsFilterOptions["SOURCE"] = "source";
    return TargetsFilterOptions;
}({});
var MonitorType = /*#__PURE__*/ function(MonitorType) {
    MonitorType["ServiceMonitor"] = "serviceMonitor";
    MonitorType["PodMonitor"] = "podMonitor";
    return MonitorType;
}(MonitorType || {});
const ServiceMonitorsWatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_17__.createContext)([]);
const ServicesWatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_17__.createContext)([]);
const PodMonitorsWatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_17__.createContext)([]);
const PodsWatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_17__.createContext)([]);
const getReference = ({ group, version, kind })=>[
        group || 'core',
        version,
        kind
    ].join('~');
const getReferenceForModel = (model)=>getReference({
        group: model.apiGroup,
        version: model.apiVersion,
        kind: model.kind
    });
const PodMonitor = ({ target })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_18__.useTranslation)("plugin__monitoring-plugin");
    const [podMonitors, podMonitorsLoaded, podMonitorsLoadError] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useContext)(PodMonitorsWatchContext);
    const [pods, podsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useContext)(PodsWatchContext);
    if (podMonitorsLoadError) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.RedExclamationCircleIcon, {}),
                " ",
                t('Error')
            ]
        });
    }
    if (!podsLoaded || !podMonitorsLoaded) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_24__.LoadingInline, {});
    }
    // First find the pod that corresponds to the target
    const pod = (0,lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"])(pods, ({ metadata })=>metadata.name === target?.labels?.pod && metadata.namespace === target?.labels?.namespace);
    // Now find the pod monitor that corresponds to the pod
    const podMonitor = (0,lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"])(podMonitors, ({ metadata, spec })=>pod && target.scrapePool.includes(`/${metadata.namespace}/${metadata.name}/`) && (spec.selector.matchLabels === undefined && spec.selector.matchExpressions === undefined || new _shared_console_module_k8s_label_selector__WEBPACK_IMPORTED_MODULE_27__.LabelSelector(spec.selector).matchesLabels(pod.metadata.labels ?? {})) && (spec.namespaceSelector?.matchNames === undefined || (0,lodash_es__WEBPACK_IMPORTED_MODULE_16__["default"])(spec.namespaceSelector?.matchNames, pod.metadata.namespace)));
    if (!podMonitor) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "-"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceLink, {
        kind: getReferenceForModel(_shared_console_models__WEBPACK_IMPORTED_MODULE_26__.PodMonitorModel),
        name: podMonitor.metadata.name,
        namespace: podMonitor.metadata.namespace
    });
};
const ServiceMonitor = ({ target })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_18__.useTranslation)("plugin__monitoring-plugin");
    const [monitors, monitorsLoaded, monitorsLoadError] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useContext)(ServiceMonitorsWatchContext);
    const [services, servicesLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useContext)(ServicesWatchContext);
    if (monitorsLoadError) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.RedExclamationCircleIcon, {}),
                " ",
                t('Error')
            ]
        });
    }
    if (!servicesLoaded || !monitorsLoaded) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_24__.LoadingInline, {});
    }
    // First find the service that corresponds to the target
    const service = (0,lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"])(services, ({ metadata })=>metadata.name === target?.labels?.service && metadata.namespace === target?.labels?.namespace);
    // Now find the service monitor that corresponds to the service
    const monitor = (0,lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"])(monitors, ({ metadata, spec })=>service && target.scrapePool.includes(`/${metadata.namespace}/${metadata.name}/`) && (spec.selector.matchLabels === undefined && spec.selector.matchExpressions === undefined || new _shared_console_module_k8s_label_selector__WEBPACK_IMPORTED_MODULE_27__.LabelSelector(spec.selector).matchesLabels(service.metadata.labels ?? {})) && (spec.namespaceSelector?.matchNames === undefined || (0,lodash_es__WEBPACK_IMPORTED_MODULE_16__["default"])(spec.namespaceSelector?.matchNames, service.metadata.namespace)));
    if (!monitor) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "-"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceLink, {
        kind: getReferenceForModel(_shared_console_models__WEBPACK_IMPORTED_MODULE_26__.ServiceMonitorModel),
        name: monitor.metadata.name,
        namespace: monitor.metadata.namespace
    });
};
const Health = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_17__.memo)(({ health })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_18__.useTranslation)("plugin__monitoring-plugin");
    return health === 'up' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.GreenCheckCircleIcon, {}),
            " ",
            t('Up')
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.RedExclamationCircleIcon, {}),
            " ",
            t('Down')
        ]
    });
});
Health.displayName = 'Health';
const WatchErrorAlert = ({ loadError, title })=>{
    const [showError, , , hideError] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_33__.useBoolean)(true);
    if (!showError) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: title,
        variant: "danger",
        actionClose: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_2__.AlertActionCloseButton, {
            onClose: hideError
        }),
        children: loadError.message
    });
};
const Details = ({ loaded, loadError, targets })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_18__.useTranslation)("plugin__monitoring-plugin");
    const params = (0,react_router__WEBPACK_IMPORTED_MODULE_19__.useParams)();
    let scrapeUrl = '';
    let target;
    if (params?.scrapeUrl) {
        try {
            scrapeUrl = atob(params?.scrapeUrl);
            target = (0,lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"])(targets, {
                scrapeUrl
            });
        } catch  {}
    }
    // Leave scrapeUrl and target unset
    const isServiceMonitor = target && target.scrapePool.includes("serviceMonitor");
    const isPodMonitor = target && target.scrapePool.includes("podMonitor");
    const [, , serviceMonitorsLoadError] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useContext)(ServiceMonitorsWatchContext);
    const [, , podMonitorsLoadError] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useContext)(PodMonitorsWatchContext);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.DocumentTitle, {
                children: t('Target details')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_status_StatusBox__WEBPACK_IMPORTED_MODULE_25__.StatusBox, {
                data: target,
                label: "target",
                loaded: loaded,
                loadError: loadError,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageGroup, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageBreadcrumb, {
                            hasBodyWrapper: false,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__.Breadcrumb, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_19__.Link, {
                                            to: "/monitoring/targets",
                                            children: t('Targets')
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbItem, {
                                        isActive: true,
                                        children: t('Target details')
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageSection, {
                            hasBodyWrapper: false,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_9__.Title, {
                                headingLevel: "h1",
                                children: scrapeUrl
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_5__.Divider, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageSection, {
                            hasBodyWrapper: false,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_9__.Title, {
                                    headingLevel: "h2",
                                    children: t('Target details')
                                }),
                                isServiceMonitor && serviceMonitorsLoadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WatchErrorAlert, {
                                    loadError: serviceMonitorsLoadError,
                                    title: t('Error loading service monitor data')
                                }),
                                isPodMonitor && podMonitorsLoadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WatchErrorAlert, {
                                    loadError: podMonitorsLoadError,
                                    title: t('Error loading pod monitor data')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                                    sm: 12,
                                    md: 6,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_6__.GridItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionList, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                                children: t('Endpoint')
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                                children: scrapeUrl
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                                children: t('Namespace')
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceLink, {
                                                                    kind: "Namespace",
                                                                    name: target?.labels?.namespace
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                                children: t('Labels')
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_labels__WEBPACK_IMPORTED_MODULE_34__.Labels, {
                                                                    labels: target?.labels
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                                children: t('Last scrape')
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.Timestamp, {
                                                                    timestamp: target?.lastScrape
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    target?.lastError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_2__.Alert, {
                                                        title: t('Scrape failed'),
                                                        variant: "danger",
                                                        children: target?.lastError
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_6__.GridItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionList, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                                children: t('Status')
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Health, {
                                                                    health: target?.health
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListTerm, {
                                                                children: t('Monitor')
                                                            }),
                                                            isServiceMonitor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ServiceMonitor, {
                                                                    target: target
                                                                })
                                                            }),
                                                            isPodMonitor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PodMonitor, {
                                                                    target: target
                                                                })
                                                            }),
                                                            !isServiceMonitor && !isPodMonitor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_4__.DescriptionListDescription, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: "-"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const ListPage = ({ loaded, loadError, targets })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_18__.useTranslation)("plugin__monitoring-plugin");
    const [activeAttributeMenu, setActiveAttributeMenu] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(t('Text'));
    const [, , serviceMonitorsLoadError] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useContext)(ServiceMonitorsWatchContext);
    const [, , podMonitorsLoadError] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useContext)(PodMonitorsWatchContext);
    const initialFilters = {
        ["name"]: '',
        ["status"]: [],
        ["label"]: '',
        ["source"]: []
    };
    // KNOWN ISSUE: the useDataViewPagination, useDataViewFilters, and useDataViewSort functions
    // do not work together for URL initialization, so only the search parameters for the last
    // function will be set when initially loading the page
    // with no search parameters. Future changes are reflected
    const pagination = (0,_shared_components_table_useTablePagination__WEBPACK_IMPORTED_MODULE_39__.useTablePagination)({
        perPage: _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_35__.ITEMS_PER_PAGE[0]
    });
    const { filters, onSetFilters, clearAllFilters } = (0,_shared_components_table_useTableFilters__WEBPACK_IMPORTED_MODULE_38__.useTableFilters)({
        initialFilters
    });
    const { sortBy, direction, onSort } = (0,_patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_14__.useDataViewSort)({
        initialSort: {
            sortBy: (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('scrapeUrl'),
            direction: 'asc'
        }
    });
    const columnKeys = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(()=>{
        const keys = [
            {
                label: t('Endpoint'),
                key: (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('scrapeUrl')
            },
            {
                label: t('Monitor'),
                key: (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('monitor')
            },
            {
                label: t('Status'),
                key: (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)("status")
            },
            {
                label: t('Namespace'),
                key: (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('namespace')
            },
            {
                label: t('Last Scrape'),
                key: (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('lastScrape')
            },
            {
                label: t('Scrape Duration'),
                key: (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('lastScrapeDuration')
            }
        ];
        return keys;
    }, [
        t
    ]);
    const columns = (0,_shared_components_table_useTableColumns__WEBPACK_IMPORTED_MODULE_32__.useTableColumns)(columnKeys, sortBy, direction, onSort, [
        1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(()=>{
        // When changing filters change back to being on page 1
        pagination.onSetPage(undefined, 1);
    }, [
        filters
    ]);
    // eslint-disable-line react-hooks/exhaustive-deps
    const { page, perPage } = pagination;
    const sortedTargetsRows = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(()=>{
        const filteredTargets = (0,_utils_filter_targets__WEBPACK_IMPORTED_MODULE_30__.filterTargets)(targets, filters);
        const sortedTargets = sortTargets(filteredTargets, sortBy, direction);
        const mappedTargets = sortedTargets.map((sortedTarget)=>{
            const isServiceMonitor = sortedTarget?.scrapePool?.includes("serviceMonitor");
            const isPodMonitor = sortedTarget?.scrapePool?.includes("podMonitor");
            return {
                row: [
                    {
                        cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_19__.Link, {
                            to: `${btoa(sortedTarget?.scrapeUrl)}`,
                            children: sortedTarget?.scrapeUrl
                        })
                    },
                    {
                        cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                isServiceMonitor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ServiceMonitor, {
                                    target: sortedTarget
                                }),
                                isPodMonitor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PodMonitor, {
                                    target: sortedTarget
                                }),
                                !isServiceMonitor && !isPodMonitor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: "-"
                                })
                            ]
                        })
                    },
                    {
                        cell: sortedTarget?.health === 'up' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Health, {
                            health: "up"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, {
                            content: sortedTarget?.lastError,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Health, {
                                    health: "down"
                                })
                            })
                        })
                    },
                    {
                        cell: sortedTarget?.labels?.namespace && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceLink, {
                            inline: true,
                            kind: _shared_console_models__WEBPACK_IMPORTED_MODULE_26__.NamespaceModel.kind,
                            name: sortedTarget?.labels?.namespace,
                            className: "pf-v6-u-mx-xs"
                        })
                    },
                    {
                        cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.Timestamp, {
                            timestamp: sortedTarget?.lastScrape
                        })
                    },
                    sortedTarget?.lastScrapeDuration ? `${(1000 * sortedTarget?.lastScrapeDuration).toFixed(1)} ms` : '-'
                ]
            };
        });
        return mappedTargets;
    }, [
        targets,
        filters,
        sortBy,
        direction
    ]);
    const selectedPageOfTargets = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(()=>sortedTargetsRows.slice((page - 1) * perPage, (page - 1) * perPage + perPage), [
        sortedTargetsRows,
        page,
        perPage
    ]);
    const onFiltersChange = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(()=>(filterName)=>{
            return (_e, val)=>{
                onSetFilters({
                    [filterName]: val
                });
            };
        }, [
        onSetFilters
    ]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filterItems = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filtersVals = [
            {
                filterId: "name",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_36__.TableFilterOption.TEXT,
                title: t('Text'),
                placeholder: t('Search by endpoint or namespace...'),
                onChange: onFiltersChange("name"),
                value: filters.name,
                ouiaId: 'TargetTextFilter'
            },
            {
                filterId: "label",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_36__.TableFilterOption.LABEL,
                title: t('Label'),
                placeholder: t('Filter by Label'),
                onChange: onFiltersChange("label"),
                value: filters["label"],
                labelPath: 'labels',
                data: targets
            },
            {
                filterId: "status",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_36__.TableFilterOption.CHECKBOX,
                title: t('Status'),
                placeholder: t('Filter by Status'),
                onChange: onFiltersChange("status"),
                value: filters["status"],
                options: [
                    {
                        value: 'up',
                        label: t('Up')
                    },
                    {
                        value: 'down',
                        label: t('Down')
                    }
                ],
                ouiaId: 'TargetStatusFilter'
            },
            {
                filterId: "source",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_36__.TableFilterOption.CHECKBOX,
                title: t('Source'),
                placeholder: t('Filter by Source'),
                onChange: onFiltersChange("source"),
                value: filters["source"],
                options: [
                    {
                        value: _shared_types_types__WEBPACK_IMPORTED_MODULE_40__.AlertSource.Platform,
                        label: t('Platform')
                    },
                    {
                        value: _shared_types_types__WEBPACK_IMPORTED_MODULE_40__.AlertSource.User,
                        label: t('User')
                    }
                ],
                ouiaId: 'TargetSourceFilter'
            }
        ];
        return filtersVals;
    }, [
        filters,
        t,
        onFiltersChange,
        targets
    ]);
    const title = t('Metrics targets');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.DocumentTitle, {
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ListPageHeader, {
                title: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ListPageBody, {
                children: [
                    loadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_2__.Alert, {
                        title: t('Error loading latest targets data'),
                        variant: "danger",
                        children: loadError
                    }),
                    serviceMonitorsLoadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WatchErrorAlert, {
                        loadError: serviceMonitorsLoadError,
                        title: t('Error loading service monitor data')
                    }),
                    podMonitorsLoadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WatchErrorAlert, {
                        loadError: podMonitorsLoadError,
                        title: t('Error loading pod monitor data')
                    }),
                    loaded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_data_view_dist_dynamic_DataView__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableToolbar__WEBPACK_IMPORTED_MODULE_37__.TableToolbar, {
                                clearAllFilters: clearAllFilters,
                                filters: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_36__.TableFilters, {
                                    activeAttributeMenu: activeAttributeMenu,
                                    setActiveAttributeMenu: setActiveAttributeMenu,
                                    filterItems: filterItems,
                                    children: filterItems.map((filterItem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_36__.TableFilter, {
                                            ...filterItem,
                                            showToolbarItem: filterItem.title === activeAttributeMenu
                                        }, `table-filter-${filterItem.filterId}`))
                                }),
                                pagination: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_35__.TablePagination, {
                                    itemCount: sortedTargetsRows?.length,
                                    variant: _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationVariant.top,
                                    ...pagination
                                })
                            }),
                            selectedPageOfTargets?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewTable__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                        "aria-label": t('Targets Table'),
                                        columns: columns,
                                        rows: selectedPageOfTargets
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                        style: {
                                            paddingTop: '16px'
                                        },
                                        pagination: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_35__.TablePagination, {
                                            itemCount: sortedTargetsRows?.length,
                                            variant: _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationVariant.bottom,
                                            ...pagination
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    loaded && selectedPageOfTargets?.length === 0 && !loadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_22__.EmptyBox, {
                        customMessage: t('No metrics targets found')
                    }),
                    !loaded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_23__.LoadingBox, {})
                ]
            })
        ]
    });
};
const POLL_INTERVAL = 15 * 1000;
const sortTargets = (data, sortBy, direction)=>{
    if (!sortBy || !direction) {
        return data;
    }
    if (sortBy === (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('scrapeUrl')) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_31__.localeCompareSort)(a.scrapeUrl, b.scrapeUrl, direction));
    } else if (sortBy === (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('health')) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_31__.localeCompareSort)(a.health, b.health, direction));
    } else if (sortBy === (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('namespace')) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_31__.localeCompareSort)(a.labels?.namespace, b.labels?.namespace, direction));
    } else if (sortBy === (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('lastScrape')) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_31__.localeCompareSort)(a.lastScrape, b.lastScrape, direction));
    } else if (sortBy === (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)('lastScrapeDuration')) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_31__.directedSort)(a.lastScrapeDuration - b.lastScrapeDuration, direction));
    } else if (sortBy === (0,_alerts_components_AlertUtils__WEBPACK_IMPORTED_MODULE_21__.rowFilter)("status")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_31__.localeCompareSort)(a.health, b.health, direction));
    }
    return data;
};
const TargetsPage_ = ()=>{
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)();
    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false);
    const [targets, setTargets] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)();
    const { scrapeUrl } = (0,react_router__WEBPACK_IMPORTED_MODULE_19__.useParams)();
    const servicesWatch = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useK8sWatchResource)({
        isList: true,
        kind: _shared_console_models__WEBPACK_IMPORTED_MODULE_26__.ServiceModel.kind
    });
    const monitorsWatch = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useK8sWatchResource)({
        isList: true,
        kind: getReferenceForModel(_shared_console_models__WEBPACK_IMPORTED_MODULE_26__.ServiceMonitorModel)
    });
    const podsWatch = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useK8sWatchResource)({
        isList: true,
        kind: _shared_console_models__WEBPACK_IMPORTED_MODULE_26__.PodModel.kind
    });
    const podMonitorsWatch = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useK8sWatchResource)({
        isList: true,
        kind: getReferenceForModel(_shared_console_models__WEBPACK_IMPORTED_MODULE_26__.PodMonitorModel)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const safeFetch = (0,react__WEBPACK_IMPORTED_MODULE_17__.useCallback)((0,_shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_29__.useSafeFetch)(), []);
    const tick = ()=>safeFetch(`${_shared_utils_utils__WEBPACK_IMPORTED_MODULE_41__.PROMETHEUS_BASE_PATH}/${_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.PrometheusEndpoint.TARGETS}?state=active`).then((response)=>{
            setError(undefined);
            setLoaded(true);
            setTargets(response?.data?.activeTargets);
        }).catch((err)=>{
            if (err.name !== 'AbortError') {
                setError(err);
                setLoaded(true);
            }
        });
    (0,_shared_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_28__.usePoll)(tick, POLL_INTERVAL);
    const loadError = error?.json?.error || error?.message;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ServiceMonitorsWatchContext.Provider, {
        value: monitorsWatch,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ServicesWatchContext.Provider, {
            value: servicesWatch,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PodMonitorsWatchContext.Provider, {
                value: podMonitorsWatch,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PodsWatchContext.Provider, {
                    value: podsWatch,
                    children: scrapeUrl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Details, {
                        loaded: loaded,
                        loadError: loadError,
                        targets: targets
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListPage, {
                        loaded: loaded,
                        loadError: loadError,
                        targets: targets
                    })
                })
            })
        })
    });
};
const MpCmoTargetsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_20__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-plugin',
            prometheus: 'cmo'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TargetsPage_, {})
    });
};


/***/ },

/***/ "./features/targets/utils/filter-targets.ts"
/*!**************************************************!*\
  !*** ./features/targets/utils/filter-targets.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterTargets: () => (/* binding */ filterTargets)
/* harmony export */ });
/* harmony import */ var _pages_targets_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/targets-page */ "./features/targets/pages/targets-page.tsx");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");


const filterTargets = (targets, selectedFilters)=>{
    if (!targets) {
        return [];
    }
    /**
   * Filters alerts based on tenancy:
   * - with tenancy: alerts are automatically pre-filtered.
   * - without tenancy (admin): filters by selected namespace for UX consistency.
   * - "All Projects": returns all alerts, including those without a namespace label.
   */ return targets.filter((target)=>{
        // For each selectable filter, first check if it is set. If it isn't then we don't
        // filter
        if (selectedFilters[_pages_targets_page__WEBPACK_IMPORTED_MODULE_0__.TargetsFilterOptions.NAME] && // Either the scapeUrl or the namespace matches
        !((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__.fuzzyCaseInsensitive)(selectedFilters[_pages_targets_page__WEBPACK_IMPORTED_MODULE_0__.TargetsFilterOptions.NAME], target.scrapeUrl) || (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__.fuzzyCaseInsensitive)(selectedFilters[_pages_targets_page__WEBPACK_IMPORTED_MODULE_0__.TargetsFilterOptions.NAME], target.labels?.namespace))) {
            return false;
        }
        if (selectedFilters[_pages_targets_page__WEBPACK_IMPORTED_MODULE_0__.TargetsFilterOptions.STATUS].length > 0 && !selectedFilters[_pages_targets_page__WEBPACK_IMPORTED_MODULE_0__.TargetsFilterOptions.STATUS].includes(target.health)) {
            return false;
        }
        if (selectedFilters[_pages_targets_page__WEBPACK_IMPORTED_MODULE_0__.TargetsFilterOptions.SOURCE].length > 0 && !selectedFilters[_pages_targets_page__WEBPACK_IMPORTED_MODULE_0__.TargetsFilterOptions.SOURCE].includes((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_1__.targetSource)(target))) {
            return false;
        }
        if (selectedFilters[_pages_targets_page__WEBPACK_IMPORTED_MODULE_0__.TargetsFilterOptions.LABEL].length) {
            // labels are stored in the url as a single query param with the format of
            // label=a=b,c=d where the = and , are % encoded. selectedFilters[AlertFilterOptions.LABEL]
            // should contain the unencoded the label param
            const labelMatchers = selectedFilters[_pages_targets_page__WEBPACK_IMPORTED_MODULE_0__.TargetsFilterOptions.LABEL].split(',');
            for (const labelMatcher of labelMatchers){
                const keyValue = labelMatcher.split('=');
                if (keyValue.length !== 2) {
                    return false;
                }
                const [key, value] = keyValue;
                if (target.labels?.[key] !== value) {
                    return false;
                }
            }
        }
        return true;
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

/***/ "./shared/console/module/k8s/label-selector.js"
/*!*****************************************************!*\
  !*** ./shared/console/module/k8s/label-selector.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelSelector: () => (/* binding */ LabelSelector)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/bind.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/every.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/filter.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/forEach.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/intersection.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isArray.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/matches.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/pickBy.js");
/* eslint-disable no-case-declarations */ /**
 * Converted from Angular based  "kubernetes-label-selector"
 *    git://github.com/kubernetes-ui/label-selector.git
 *    author: Jessica Forrester <jforrest@redhat.com>
 **/ 
// selector (optional) - the JSON format as returned by k8s API, will also
//      handle {key: null} as the key exists operator (not currently returned
//      by API)
// emptySelectsAll (optional) - whether a label selector with no conjuncts
//      selects objects.  Typical behavior is false.  Example of an
//      exceptional case is when filtering by labels, no label selectors
//      means no filters.
class LabelSelector {
    addConjunct(key, operator, values) {
        const conjunct = {
            key,
            operator,
            values
        };
        const id = this._getIdForConjunct(conjunct);
        this._conjuncts[id] = conjunct;
        conjunct.id = id;
        conjunct.string = this._getStringForConjunct(conjunct);
        return conjunct;
    }
    // Can accept either the id of the conjunct to remove, or the conjunct
    // object that was returned from a call to addConjunct
    removeConjunct(conjunct) {
        if (conjunct.id) {
            delete this._conjuncts[conjunct.id];
        } else {
            delete this._conjuncts[conjunct];
        }
    }
    clearConjuncts() {
        this._conjuncts = {};
    }
    isEmpty() {
        return lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](this._conjuncts);
    }
    each(fn) {
        lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](this._conjuncts, fn);
    }
    select(resources) {
        // If passed an array, return an array.
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](resources)) {
            return lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](resources, lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](this.matches, this));
        }
        // Otherwise handle it as a map.
        return lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](resources, lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](this.matches, this));
    }
    matchesLabels(labels) {
        if (this.isEmpty()) {
            return this._emptySelectsAll;
        }
        for(const id in this._conjuncts){
            const conjunct = this._conjuncts[id];
            switch(conjunct.operator){
                case 'exists':
                    if (!labels[conjunct.key] && labels[conjunct.key] !== '') {
                        return false;
                    }
                    break;
                case 'does not exist':
                    if (labels[conjunct.key] || labels[conjunct.key] === '') {
                        return false;
                    }
                    break;
                case 'in':
                    let found = false;
                    if (labels[conjunct.key] || labels[conjunct.key] === '') {
                        for(let i = 0; !found && i < conjunct.values.length; i++){
                            if (labels[conjunct.key] === conjunct.values[i]) {
                                found = true;
                            }
                        }
                    }
                    if (!found) {
                        return false;
                    }
                    break;
                case 'not in':
                    let keep = true;
                    if (labels[conjunct.key]) {
                        for(let i = 0; keep && i < conjunct.values.length; i++){
                            keep = labels[conjunct.key] !== conjunct.values[i];
                        }
                    }
                    if (!keep) {
                        return false;
                    }
            }
        }
        return true;
    }
    matches(resource) {
        if (!resource) {
            return false;
        }
        const labels = resource.metadata?.labels || {};
        return this.matchesLabels(labels);
    }
    hasConjunct(conjunct) {
        return !!this._conjuncts[this._getIdForConjunct(conjunct)];
    }
    findConjunctsMatching(operator, key) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](this._conjuncts, lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"]({
            operator,
            key
        }));
    }
    // Test whether this label selector covers the given selector
    covers(selector) {
        if (this.isEmpty()) {
            // TODO don't think we ever want to consider an empty
            // label selector as covering any other label selector
            return false;
        }
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](this._conjuncts, function(conjunct) {
            // Return true immediately if we find an exact match for operator/key/values
            if (selector.hasConjunct(conjunct)) {
                return true;
            }
            // If we can't find a conjunct that matches exactly, do a more detailed check
            switch(conjunct.operator){
                case 'exists':
                    // If an Exists conjunct existed for the same key in selector it
                    // would have passed the exact match, just need to check if an In
                    // conjunct exists for the same key
                    return !lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](selector.findConjunctsMatching('in', conjunct.key));
                case 'does not exist':
                    // A DoesNotExist can only cover a DoesNotExist operator, if we got here
                    // then we didn't have a DNE with the same key so we know we can't cover
                    return false;
                case 'in':
                    // In (A,B,C) covers In (A,B) AND In (B,C)
                    const inConjuncts = selector.findConjunctsMatching('in', conjunct.key);
                    if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](inConjuncts)) {
                        return false;
                    }
                    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](inConjuncts, function(inConjunct) {
                        return inConjunct.values.length === lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](inConjunct.values, conjunct.values).length;
                    });
                case 'not in':
                    // NotIn (A,B) covers NotIn (A,B,C) AND NotIn (A,B,D)
                    const notInConjuncts = selector.findConjunctsMatching('not in', conjunct.key);
                    if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](notInConjuncts)) {
                        return false;
                    }
                    return lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](notInConjuncts, function(notInConjunct) {
                        return conjunct.values.length === lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](notInConjunct.values, conjunct.values).length;
                    });
            }
            return true;
        });
    }
    // Exports the labelSelector as a string in the API format, exports as matchExpressions
    exportJSON() {
        const result = {
            matchExpressions: []
        };
        for(const id in this._conjuncts){
            const conjunct = this._conjuncts[id];
            const expression = {
                key: conjunct.key,
                operator: this._REVERSE_OPERATOR_MAP[conjunct.operator],
                values: conjunct.values
            };
            result.matchExpressions.push(expression);
        }
        return JSON.stringify(result);
    }
    // We assume label values have no whitespace, commas, parens, etc. based
    // on k8s def for label values
    _getStringForConjunct(conjunct) {
        let conjunctString = conjunct.key;
        if (conjunct.operator === 'exists') {
            return `${conjunctString} exists`;
        } else if (conjunct.operator === 'does not exist') {
            return `${conjunctString} does not exist`;
        }
        if (conjunct.operator === 'not in') {
            conjunctString += ' not';
        }
        conjunctString += ' in (';
        for(let i = 0; i < conjunct.values.length; i++){
            if (conjunct.values[i] === '') {
                conjunctString += '""';
            } else {
                conjunctString += conjunct.values[i];
            }
            if (i !== conjunct.values.length - 1) {
                conjunctString += ', ';
            }
        }
        conjunctString += ')';
        return conjunctString;
    }
    _getIdForConjunct(conjunct) {
        let id = `${conjunct.key}-${conjunct.operator}`;
        if (conjunct.values) {
            id += `-${conjunct.values.join(',')}`;
        }
        return id;
    }
    constructor(selector, emptySelectsAll){
        this._conjuncts = {};
        this._emptySelectsAll = !!emptySelectsAll;
        // expects the JSON format as returned by k8s API
        // Supports both the old selector syntax of just key: value pairs like on RCs as well as the new
        // matchLabel and matchExpression syntax on newer controllers like ReplicaSets
        // For now it will also handle key: null as key exists for backwards compatibility from before
        // the matchExpression support was added.
        this._OPERATOR_MAP = {
            In: 'in',
            NotIn: 'not in',
            Exists: 'exists',
            DoesNotExist: 'does not exist'
        };
        this._REVERSE_OPERATOR_MAP = {
            in: 'In',
            'not in': 'NotIn',
            exists: 'Exists',
            'does not exist': 'DoesNotExist'
        };
        if (selector) {
            if (selector.matchLabels || selector.matchExpressions) {
                lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](selector.matchLabels, (details, key)=>{
                    this.addConjunct(key, 'in', [
                        details
                    ]);
                }, this);
                lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](selector.matchExpressions, (expression)=>{
                    this.addConjunct(expression.key, this._OPERATOR_MAP[expression.operator], expression.values);
                }, this);
            } else {
                lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](selector, (details, key)=>{
                    if (details || details === '') {
                        this.addConjunct(key, 'in', [
                            details
                        ]);
                    } else {
                        this.addConjunct(key, 'exists', []);
                    }
                }, this);
            }
        }
    }
}


/***/ },

/***/ "./shared/console/imgs/restricted-sign.svg"
/*!*************************************************!*\
  !*** ./shared/console/imgs/restricted-sign.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/restricted-sign..svg";

/***/ }

}]);
//# sourceMappingURL=exposed-TargetsPage-chunk.js.map