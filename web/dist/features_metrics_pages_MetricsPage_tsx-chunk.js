"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["features_metrics_pages_MetricsPage_tsx"],{

/***/ "./features/metrics/pages/MetricsPage.tsx"
/*!************************************************!*\
  !*** ./features/metrics/pages/MetricsPage.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MpCmoDevMetricsPage: () => (/* binding */ MpCmoDevMetricsPage),
/* harmony export */   MpCmoMetricsPage: () => (/* binding */ MpCmoMetricsPage),
/* harmony export */   QueryTable: () => (/* binding */ QueryTable),
/* harmony export */   ToggleGraph: () => (/* binding */ ToggleGraph)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Bullseye */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Bullseye/@patternfly/react-core/dist/dynamic/layouts/Bullseye");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_DataList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/DataList */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/DataList/@patternfly/react-core/dist/dynamic/components/DataList");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Dropdown */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Dropdown/@patternfly/react-core/dist/dynamic/components/Dropdown");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Grid */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Grid/@patternfly/react-core/dist/dynamic/layouts/Grid");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Split */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Split/@patternfly/react-core/dist/dynamic/layouts/Split");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Switch */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Switch/@patternfly/react-core/dist/dynamic/components/Switch");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Tooltip */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Tooltip/@patternfly/react-core/dist/dynamic/components/Tooltip");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_chart_line_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/chart-line-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/chart-line-icon/@patternfly/react-icons/dist/dynamic/icons/chart-line-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_compress_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/compress-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/compress-icon/@patternfly/react-icons/dist/dynamic/icons/compress-icon");
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/@patternfly/react-table/dist/dynamic/components/Table");
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table_utils_decorators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table/utils/decorators */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/utils/decorators/@patternfly/react-table/dist/dynamic/components/Table/utils/decorators");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/differenceWith.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/findIndex.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/flatMap.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEqual.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/orderBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/range.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/reject.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/size.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/some.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/uniq.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _shared_store_actions__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/store/actions */ "./shared/store/actions.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _shared_console_utils_async__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../shared/console/utils/async */ "./shared/console/utils/async.tsx");
/* harmony import */ var _shared_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../shared/console/utils/poll-hook */ "./shared/console/utils/poll-hook.ts");
/* harmony import */ var _shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../shared/console/utils/safe-fetch-hook */ "./shared/console/utils/safe-fetch-hook.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_lib_extensions_dashboard_data_source__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk/lib/extensions/dashboard-data-source */ "../node_modules/@openshift-console/dynamic-plugin-sdk/lib/extensions/dashboard-data-source.js");
/* harmony import */ var _shared_components_DropdownPollInterval__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../shared/components/DropdownPollInterval */ "./shared/components/DropdownPollInterval.tsx");
/* harmony import */ var _shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../shared/hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_components_KebabDropdown__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../shared/components/KebabDropdown */ "./shared/components/KebabDropdown.tsx");
/* harmony import */ var _shared_components_query_browser_query_browser__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../shared/components/query-browser/query-browser */ "./shared/components/query-browser/query-browser.tsx");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../shared/components/table/table-pagination */ "./shared/components/table/table-pagination.tsx");
/* harmony import */ var _shared_components_TypeaheadSelect__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../shared/components/TypeaheadSelect */ "./shared/components/TypeaheadSelect.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/loading/LoadingInline */ "./shared/console/console-shared/src/components/loading/LoadingInline.tsx");
/* harmony import */ var _shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../shared/console/console-shared/error/fallbacks/withFallback */ "./shared/console/console-shared/error/fallbacks/withFallback.tsx");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_font_family_mono.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_md.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_sm.js");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _utils_units__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../utils/units */ "./features/metrics/utils/units.ts");
/* harmony import */ var _patternfly_react_templates_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @patternfly/react-templates/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-templates/dist/dynamic/components/Select/@patternfly/react-templates/dist/dynamic/components/Select");
/* harmony import */ var _shared_console_console_shared_src_components_query_browser_QueryBrowserTooltip__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/query-browser/QueryBrowserTooltip */ "./shared/console/console-shared/src/components/query-browser/QueryBrowserTooltip.tsx");
/* harmony import */ var _shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../../shared/contexts/MonitoringContext */ "./shared/contexts/MonitoringContext.tsx");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_63__);











































































// Stores information about the currently focused query input
let focusedQuery;
const predefinedQueriesAdmin = [
    {
        name: 'CPU Usage',
        value: `sum(node_namespace_pod_container:container_cpu_usage_seconds_total:sum_irate) by (pod)`
    },
    {
        name: 'Memory Usage',
        value: `sum(container_memory_working_set_bytes{container!=""}) by (pod)`
    },
    {
        name: 'Filesystem Usage',
        // eslint-disable-next-line max-len
        value: `topk(25, sort_desc(sum(pod:container_fs_usage_bytes:sum{container="",pod!=""}) BY (pod, namespace)))`
    },
    {
        name: 'Receive bandwidth',
        value: `sum(irate(container_network_receive_bytes_total[2h])) by (pod)`
    },
    {
        name: 'Transmit bandwidth',
        value: `sum(irate(container_network_transmit_bytes_total[2h])) by (pod)`
    },
    {
        name: 'Rate of received packets',
        value: `sum(irate(container_network_receive_packets_total[2h])) by (pod)`
    },
    {
        name: 'Rate of transmitted packets',
        value: `sum(irate(container_network_transmit_packets_total[2h])) by (pod)`
    },
    {
        name: 'Rate of received packets dropped',
        value: `sum(irate(container_network_receive_packets_dropped_total[2h])) by (pod)`
    },
    {
        name: 'Rate of transmitted packets dropped',
        value: `sum(irate(container_network_transmit_packets_dropped_total[2h])) by (pod)`
    }
];
const devQueries = (activeNamespace)=>{
    return [
        {
            name: 'CPU Usage',
            // eslint-disable-next-line max-len
            value: `sum(node_namespace_pod_container:container_cpu_usage_seconds_total:sum_irate{namespace='${activeNamespace}'}) by (pod)`
        },
        {
            name: 'Memory Usage',
            // eslint-disable-next-line max-len
            value: `sum(container_memory_working_set_bytes{container!="", namespace='${activeNamespace}'}) by (pod)`
        },
        {
            name: 'Filesystem Usage',
            // eslint-disable-next-line max-len
            value: `topk(25, sort_desc(sum(pod:container_fs_usage_bytes:sum{container="",pod!="",namespace='${activeNamespace}'}) BY (pod, namespace)))`
        },
        {
            name: 'Receive bandwidth',
            // eslint-disable-next-line max-len
            value: `sum(irate(container_network_receive_bytes_total{namespace='${activeNamespace}'}[2h])) by (pod)`
        },
        {
            name: 'Transmit bandwidth',
            // eslint-disable-next-line max-len
            value: `sum(irate(container_network_transmit_bytes_total{namespace='${activeNamespace}'}[2h])) by (pod)`
        },
        {
            name: 'Rate of received packets',
            // eslint-disable-next-line max-len
            value: `sum(irate(container_network_receive_packets_total{namespace='${activeNamespace}'}[2h])) by (pod)`
        },
        {
            name: 'Rate of transmitted packets',
            // eslint-disable-next-line max-len
            value: `sum(irate(container_network_transmit_packets_total{namespace='${activeNamespace}'}[2h])) by (pod)`
        },
        {
            name: 'Rate of received packets dropped',
            // eslint-disable-next-line max-len
            value: `sum(irate(container_network_receive_packets_dropped_total{namespace='${activeNamespace}'}[2h])) by (pod)`
        },
        {
            name: 'Rate of transmitted packets dropped',
            // eslint-disable-next-line max-len
            value: `sum(irate(container_network_transmit_packets_dropped_total{namespace='${activeNamespace}'}[2h])) by (pod)`
        }
    ];
};
const PreDefinedQueriesDropdown = ()=>{
    const [activeNamespace] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useActiveNamespace)();
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const queries = (0,react__WEBPACK_IMPORTED_MODULE_33__.useMemo)(()=>{
        if (activeNamespace === _shared_utils_utils__WEBPACK_IMPORTED_MODULE_37__.ALL_NAMESPACES_KEY) {
            return predefinedQueriesAdmin;
        }
        return devQueries(activeNamespace);
    }, [
        activeNamespace
    ]);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const queriesList = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>// mcp does not support the metrics page in any perspective
        (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser?.queries);
    const insertPredefinedQuery = (query)=>{
        const isInitialQueryEmpty = queriesList.length === 1 && (queriesList[0]?.text === '' || queriesList[0]?.text === null || queriesList[0]?.text === undefined);
        const index = isInitialQueryEmpty ? 0 : queriesList.length;
        // Prevent the same selection from being added consecutively
        const lastQuery = queriesList[queriesList.length - 1];
        if (lastQuery.text === query) {
            return;
        }
        // Add current query selection to the Redux store which holds the list of queries.
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserPatchQuery)(index, {
            isEnabled: true,
            query,
            text: query
        }));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.Grid, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                    htmlFor: "predefined-query-select-label",
                    children: t('Queries')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_8__.GridItem, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_TypeaheadSelect__WEBPACK_IMPORTED_MODULE_49__.TypeaheadSelect, {
                    placeholder: t('Select query'),
                    onSelect: insertPredefinedQuery,
                    options: queries
                })
            })
        ]
    });
};
const MetricsActionsMenu = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const [isOpen, setIsOpen, , setClosed] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_43__.useBoolean)(false);
    const isAllExpanded = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries.every((q)=>q?.isExpanded));
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const addQuery = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserAddQuery)()), [
        dispatch
    ]);
    const doDelete = ()=>{
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserDeleteAllQueries)());
        focusedQuery = undefined;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
        isOpen: isOpen,
        onSelect: setClosed,
        onOpenChange: (open)=>open ? setIsOpen() : setClosed(),
        toggle: (toggleRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_9__.MenuToggle, {
                ref: toggleRef,
                onClick: setIsOpen,
                isExpanded: isOpen,
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageActionsDropdownButton,
                children: t('Actions')
            }),
        popperProps: {
            position: 'right'
        },
        shouldFocusToggleOnSelect: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownList, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
                    value: 0,
                    onClick: addQuery,
                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageAddQueryDropdownItem,
                    children: t('Add query')
                }, "add-query"),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
                    value: 1,
                    onClick: ()=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserSetAllExpanded)(!isAllExpanded)),
                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageExpandCollapseAllDropdownItem,
                    children: isAllExpanded ? t('Collapse all query tables') : t('Expand all query tables')
                }, "expand-collapse-all"),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
                    value: 2,
                    onClick: doDelete,
                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageDeleteAllQueriesDropdownItem,
                    children: t('Delete all queries')
                }, "delete-all-queries")
            ]
        })
    });
};
const ToggleGraph = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const hideGraphs = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>!!(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).hideGraphs);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const toggle = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.toggleGraphs)()), [
        dispatch
    ]);
    // Use an empty useEffect to get access to the cleanup function so that if graphs are
    // currently hidden then we show the graphs as we unmount
    (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(()=>{
        return ()=>{
            dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.showGraphs)());
        };
    }, [
        dispatch
    ]);
    const icon = hideGraphs ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_chart_line_icon__WEBPACK_IMPORTED_MODULE_16__.ChartLineIcon, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_compress_icon__WEBPACK_IMPORTED_MODULE_17__.CompressIcon, {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.Flex, {
        justifyContent: {
            default: 'justifyContentFlexEnd'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.FlexItem, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                type: "button",
                onClick: toggle,
                variant: "link",
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricHideShowGraphButton,
                children: [
                    icon,
                    " ",
                    hideGraphs ? t('Show graph') : t('Hide graph')
                ]
            })
        })
    });
};
const SeriesButton = ({ index, labels })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const [colorIndex, isDisabled, isSeriesEmpty] = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>{
        const observe = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state);
        const disabledSeries = observe.queryBrowser.queries[index]?.disabledSeries;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_31__["default"](disabledSeries, (s)=>lodash_es__WEBPACK_IMPORTED_MODULE_25__["default"](s, labels))) {
            return [
                null,
                true,
                false
            ];
        }
        const series = observe.queryBrowser.queries[index]?.series;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_24__["default"](series)) {
            return [
                null,
                false,
                true
            ];
        }
        const colorOffset = observe.queryBrowser.queries.slice(0, index).filter((q)=>q?.isEnabled).reduce((sum, q)=>sum + lodash_es__WEBPACK_IMPORTED_MODULE_30__["default"](q[series]), 0);
        const seriesIndex = lodash_es__WEBPACK_IMPORTED_MODULE_21__["default"](series, (s)=>lodash_es__WEBPACK_IMPORTED_MODULE_25__["default"](s, labels));
        return [
            (colorOffset + seriesIndex) % _shared_components_query_browser_query_browser__WEBPACK_IMPORTED_MODULE_46__.colors.length,
            false,
            false
        ];
    });
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const toggleSeries = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserToggleSeries)(index, labels)), [
        dispatch,
        index,
        labels
    ]);
    if (isSeriesEmpty) {
        return null;
    }
    const title = isDisabled ? t('Show series') : t('Hide series');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: "",
        "aria-label": title,
        onClick: toggleSeries,
        style: colorIndex === null ? undefined : {
            backgroundColor: _shared_components_query_browser_query_browser__WEBPACK_IMPORTED_MODULE_46__.colors[colorIndex]
        },
        title: title,
        type: "button",
        variant: "control",
        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageSeriesButton
    });
};
const QueryKebab = ({ index })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const isDisabledSeriesEmpty = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>lodash_es__WEBPACK_IMPORTED_MODULE_24__["default"]((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser?.queries[index]?.disabledSeries));
    const isEnabled = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser?.queries[index]?.isEnabled);
    const query = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser?.queries[index]?.query);
    const queryTableData = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser?.queries[index]?.queryTableData ?? {
            rows: [],
            columns: []
        });
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const toggleIsEnabled = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserToggleIsEnabled)(index)), [
        dispatch,
        index
    ]);
    const toggleAllSeries = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserToggleAllSeries)(index)), [
        dispatch,
        index
    ]);
    const doDelete = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>{
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserDeleteQuery)(index));
        focusedQuery = undefined;
    }, [
        dispatch,
        index
    ]);
    const doClone = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>{
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserDuplicateQuery)(index));
    }, [
        dispatch,
        index
    ]);
    const isSpan = (item)=>item?.title?.props?.children;
    const getSpanText = (item)=>item.title.props.children;
    // Takes data from QueryTable and removes/replaces all html objects from columns and rows
    const convertQueryTable = ()=>{
        const getColumns = ()=>{
            const columns = queryTableData.columns;
            const csvColumnHeaders = columns.slice(1).map((columnHeader)=>{
                if (typeof columnHeader?.title === 'string') {
                    return columnHeader.title;
                } else if (isSpan(columnHeader)) {
                    return getSpanText(columnHeader);
                } else {
                    return '';
                }
            });
            return csvColumnHeaders;
        };
        const getRows = ()=>{
            const rows = queryTableData.rows;
            const csvRows = rows.map((row)=>row.slice(1)).map((row)=>row.map((rowItem)=>{
                    return isSpan(rowItem) ? getSpanText(rowItem) : rowItem;
                }));
            return csvRows;
        };
        const tableData = [
            getColumns(),
            ...getRows()
        ];
        return tableData;
    };
    const getCsv = (array, delimiter = ',')=>array.map((row)=>row.map((rowItem)=>isNaN(rowItem) ? `"${rowItem}"` : rowItem).join(delimiter)).join('\n');
    const downloadCsv = (csvData)=>{
        // Modified from https://codesandbox.io/p/sandbox/react-export-to-csv-l6uhq?file=%2Fsrc%2FApp.jsx%3A39%2C10-39%2C16
        const blob = new Blob([
            csvData
        ], {
            type: 'data:text/csv;charset=utf-8,'
        });
        const blobURL = window.URL.createObjectURL(blob);
        // Create new tag for download file
        const anchor = document.createElement('a');
        anchor.download = `OpenShift_Metrics_QueryTable_${query}.csv`;
        anchor.href = blobURL;
        anchor.dataset.downloadurl = [
            'text/csv',
            anchor.download,
            anchor.href
        ].join(':');
        anchor.click();
        // Remove URL.createObjectURL. The browser should not save the reference to the file.
        setTimeout(()=>{
            // For Firefox it is necessary to delay revoking the ObjectURL
            URL.revokeObjectURL(blobURL);
        }, 100);
    };
    const doExportCsv = ()=>{
        const tableData = convertQueryTable();
        const csvData = getCsv(tableData);
        downloadCsv(csvData);
    };
    const exportDropdownItem = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
        component: "button",
        onClick: doExportCsv,
        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageExportCsvDropdownItem,
        children: t('Export as CSV')
    }, "export");
    const defaultDropdownItems = [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
            component: "button",
            onClick: toggleIsEnabled,
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageDisableEnableQueryDropdownItem,
            children: isEnabled ? t('Disable query') : t('Enable query')
        }, "toggle-query"),
        isEnabled ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
            component: "button",
            onClick: toggleAllSeries,
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageHideShowAllSeriesDropdownItem,
            children: isDisabledSeriesEmpty ? t('Hide all series') : t('Show all series')
        }, "toggle-all-series") : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_15__.Tooltip, {
            position: "left",
            content: t('Query must be enabled'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
                isAriaDisabled: true,
                // need to receive focus for tooltip to work
                component: "button",
                children: isDisabledSeriesEmpty ? t('Hide all series') : t('Show all series')
            })
        }, "toggle-all-series-disabled"),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
            component: "button",
            onClick: doDelete,
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageDeleteQueryDropdownItem,
            children: t('Delete query')
        }, "delete"),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
            component: "button",
            onClick: doClone,
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageDuplicateQueryDropdownItem,
            children: t('Duplicate query')
        }, "duplicate")
    ];
    const hasQueryTableData = ()=>{
        if (!query || !queryTableData?.rows || !queryTableData?.columns) {
            return false;
        }
        return true;
    };
    const dropdownItems = hasQueryTableData() ? [
        ...defaultDropdownItems,
        exportDropdownItem
    ] : defaultDropdownItems;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_KebabDropdown__WEBPACK_IMPORTED_MODULE_45__["default"], {
        dropdownItems: dropdownItems
    });
};
const QueryTable = ({ index, namespace, customDatasource, units })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const { plugin, accessCheckLoading, useMetricsTenancy } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)();
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)();
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(1);
    const [perPage, setPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(50);
    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)({});
    const valueFormat = (0,_shared_console_console_shared_src_components_query_browser_QueryBrowserTooltip__WEBPACK_IMPORTED_MODULE_58__.valueFormatter)(units);
    const isEnabled = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries[index]?.isEnabled);
    const isExpanded = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries[index]?.isExpanded);
    const pollInterval = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>Number((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.pollInterval));
    const query = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries[index]?.query);
    const series = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries[index]?.series);
    const span = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.timespan);
    const lastRequestTime = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.lastRequestTime);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const toggleAllSeries = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserToggleAllSeries)(index)), [
        dispatch,
        index
    ]);
    const isDisabledSeriesEmpty = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>lodash_es__WEBPACK_IMPORTED_MODULE_24__["default"]((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries[index]?.disabledSeries));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const safeFetch = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)((0,_shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_40__.useSafeFetch)(), []);
    // If the namespace is defined getPrometheusURL will use
    // the PROMETHEUS_TENANCY_BASE_PATH for requests in the developer view
    const tick = ()=>{
        if (isEnabled && isExpanded && !accessCheckLoading && query) {
            safeFetch((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_37__.buildPrometheusUrl)({
                prometheusUrlProps: {
                    endpoint: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.PrometheusEndpoint.QUERY,
                    namespace,
                    query
                },
                basePath: (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_37__.getPrometheusBasePath)({
                    prometheus: 'cmo',
                    useTenancyPath: useMetricsTenancy,
                    basePathOverride: customDatasource?.basePath
                })
            })).then((response)=>{
                setData(lodash_es__WEBPACK_IMPORTED_MODULE_23__["default"](response, 'data'));
                setError(undefined);
            }).catch((err)=>{
                if (err.name !== 'AbortError') {
                    setData(undefined);
                    setError(err);
                }
            });
        }
    };
    (0,_shared_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_39__.usePoll)(tick, pollInterval, namespace, query, span, lastRequestTime, useMetricsTenancy, accessCheckLoading);
    (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(()=>{
        setData(undefined);
        setError(undefined);
        setPage(1);
        setSortBy({});
    }, [
        namespace,
        query
    ]);
    const isUnused = !isEnabled || !isExpanded || !query;
    const isError = !!error;
    const isLoading = !data;
    const result = (0,react__WEBPACK_IMPORTED_MODULE_33__.useMemo)(()=>{
        if (isUnused || isError || isLoading) {
            return [];
        }
        // Add any data series from `series` (those displayed in the graph) that are not
        // in `data.result`.This happens for queries that exclude a series currently, but
        // included that same series at some point during the graph's range.
        const expiredSeries = lodash_es__WEBPACK_IMPORTED_MODULE_20__["default"](series, data.result, (s, r)=>lodash_es__WEBPACK_IMPORTED_MODULE_25__["default"](s, r.metric));
        return expiredSeries.length ? [
            ...data.result,
            ...expiredSeries.map((metric)=>({
                    metric
                }))
        ] : data.result;
    }, [
        data?.result,
        series,
        isUnused,
        isError,
        isLoading
    ]);
    const isEmptyGraph = !result || result.length === 0;
    const tableData = (0,react__WEBPACK_IMPORTED_MODULE_33__.useMemo)(()=>{
        if (isUnused || isError || isLoading || isEmptyGraph) {
            return {};
        }
        const transforms = [
            _patternfly_react_table_dist_dynamic_components_Table_utils_decorators__WEBPACK_IMPORTED_MODULE_19__.sortable,
            _patternfly_react_table_dist_dynamic_components_Table_utils_decorators__WEBPACK_IMPORTED_MODULE_19__.wrappable
        ];
        const buttonCell = (labels)=>({
                title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SeriesButton, {
                    index: index,
                    labels: labels
                })
            });
        let columns, rows;
        if (data.resultType === 'scalar') {
            columns = [
                '',
                {
                    title: t('Value'),
                    transforms,
                    cellTransforms: [
                        (data)=>{
                            const val = data?.title ? data.title : data;
                            return !Number.isNaN(Number(val)) ? valueFormat(Number(val)) : val;
                        }
                    ]
                }
            ];
            rows = [
                [
                    buttonCell({}),
                    lodash_es__WEBPACK_IMPORTED_MODULE_23__["default"](result, '[1]')
                ]
            ];
        } else if (data.resultType === 'string') {
            columns = [
                {
                    title: t('Value'),
                    transforms,
                    cellTransforms: [
                        (data)=>{
                            const val = data?.title ? data.title : data;
                            return !Number.isNaN(Number(val)) ? valueFormat(Number(val)) : val;
                        }
                    ]
                }
            ];
            rows = [
                [
                    result?.[1]
                ]
            ];
        } else {
            const allLabelKeys = lodash_es__WEBPACK_IMPORTED_MODULE_32__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_22__["default"](result, ({ metric })=>Object.keys(metric))).sort();
            columns = [
                '',
                ...allLabelKeys.map((k)=>({
                        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            children: k === '__name__' ? t('Name') : k
                        }),
                        transforms
                    })),
                {
                    title: t('Value'),
                    transforms,
                    cellTransforms: [
                        (data)=>{
                            const val = data?.title ? data.title : data;
                            return !Number.isNaN(Number(val)) ? valueFormat(Number(val)) : val;
                        }
                    ]
                }
            ];
            let rowMapper;
            if (data.resultType === 'matrix') {
                rowMapper = ({ metric, values })=>[
                        '',
                        ...lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](allLabelKeys, (k)=>metric[k]),
                        {
                            title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](values, ([time, v])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            v,
                                            " @",
                                            time
                                        ]
                                    }, time))
                            })
                        }
                    ];
            } else {
                rowMapper = ({ metric, value })=>[
                        buttonCell(metric),
                        ...lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](allLabelKeys, (k)=>metric[k]),
                        lodash_es__WEBPACK_IMPORTED_MODULE_23__["default"](value, '[1]', {
                            title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                children: t('None')
                            })
                        })
                    ];
            }
            rows = lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](result, rowMapper);
            if (sortBy) {
                // Sort Values column numerically and sort all the other columns alphabetically
                const valuesColIndex = allLabelKeys.length + 1;
                const sort = sortBy.index === valuesColIndex ? (cells)=>{
                    const v = Number(cells[valuesColIndex]);
                    return Number.isNaN(v) ? 0 : v;
                } : `${sortBy.index}`;
                rows = lodash_es__WEBPACK_IMPORTED_MODULE_27__["default"](rows, [
                    sort
                ], [
                    sortBy.direction
                ]);
            }
        }
        const onSort = (e, i, direction)=>setSortBy({
                index: i,
                direction
            });
        const tableRows = rows.slice((page - 1) * perPage, page * perPage).map((cells)=>({
                cells
            }));
        return {
            onSort,
            tableRows,
            columns,
            rows
        };
    }, [
        data?.resultType,
        isEmptyGraph,
        index,
        isUnused,
        isError,
        isLoading,
        page,
        perPage,
        result,
        sortBy,
        t,
        valueFormat
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(()=>{
        if (tableData.columns && tableData.rows) {
            dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserPatchQuery)(index, {
                queryTableData: {
                    columns: tableData.columns,
                    rows: tableData.rows
                }
            }));
        }
    }, [
        dispatch,
        index,
        tableData?.columns,
        tableData?.rows
    ]);
    if (isUnused) {
        return null;
    } else if (isError) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_query_browser_query_browser__WEBPACK_IMPORTED_MODULE_46__.Error, {
            error: error,
            title: t('Error loading values')
        });
    } else if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_50__.LoadingInline, {});
    } else if (isEmptyGraph) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageYellowNoDatapointsFound,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.YellowExclamationTriangleIcon, {}),
                " ",
                t('No datapoints found.')
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "link",
                isInline: true,
                onClick: toggleAllSeries,
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageSelectAllUnselectAllButton,
                children: isDisabledSeriesEmpty ? t('Unselect all') : t('Select all')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__.InnerScrollContainer, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__.Table, {
                    "aria-label": t('query results table'),
                    gridBreakPoint: _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__.TableGridBreakpoint.none,
                    rows: tableData?.tableRows.length,
                    variant: _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__.TableVariant.compact,
                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageQueryTable,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__.Thead, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__.Tr, {
                                children: tableData?.columns.map((col, columnIndex)=>{
                                    const sortParams = columnIndex !== 0 ? {
                                        sort: {
                                            sortBy,
                                            onSort: tableData?.onSort,
                                            columnIndex
                                        }
                                    } : {};
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__.Th, {
                                        modifier: "nowrap",
                                        ...sortParams,
                                        children: col.title
                                    }, `${col.title}-${columnIndex}`);
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__.Tbody, {
                            children: tableData?.tableRows.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__.Tr, {
                                    children: row.cells?.map((cell, cellIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_18__.Td, {
                                            style: {
                                                fontFamily: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_52__.t_global_font_family_mono.var
                                            },
                                            children: tableData?.columns[cellIndex].cellTransforms ? tableData?.columns[cellIndex].cellTransforms[0](typeof cell === 'string' ? cell : cell?.title) : typeof cell === 'string' ? cell : cell?.title
                                        }, `cell-${rowIndex}-${cellIndex}`))
                                }, `row-${rowIndex}`))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_48__.TablePagination, {
                itemCount: tableData?.rows.length,
                page: page,
                perPage: perPage,
                setPage: setPage,
                setPerPage: setPerPage
            })
        ]
    });
};
const PromQLExpressionInput = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_utils_async__WEBPACK_IMPORTED_MODULE_38__.AsyncComponent, {
        loader: ()=>Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_codemirror_autocomplete_dist_index_js-node_modules_codemirror_commands_d-225d47"), __webpack_require__.e("vendors-node_modules_lru-cache_index_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-tokens_dist_esm_t_global_color_brand_default_js-node_mo-08b159"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-icons_dist_dynamic_icons_exclamation-circle--e5795e"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-core_dist_dynamic_components_Form_patternfly-2ac92d"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-core_dist_dynamic_components_HelperText_patt-d3a1d5"), __webpack_require__.e("features_metrics_components_promql-expression-input_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/promql-expression-input */ "./features/metrics/components/promql-expression-input.tsx")).then((c)=>c.PromQLExpressionInput),
        ...props
    });
const Query = ({ index, customDatasource, units })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries[index]?.id);
    const isEnabled = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries[index]?.isEnabled);
    const isExpanded = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries[index]?.isExpanded);
    const text = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries[index]?.text ?? '');
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const toggleIsEnabled = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserToggleIsEnabled)(index)), [
        dispatch,
        index
    ]);
    const handleTextChange = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)((value)=>{
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserPatchQuery)(index, {
            text: value
        }));
    }, [
        dispatch,
        index
    ]);
    const handleExecuteQueries = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>{
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserRunQueries)());
    }, [
        dispatch
    ]);
    const handleSelectionChange = (target, start, end)=>{
        focusedQuery = {
            index,
            selection: {
                start,
                end
            },
            target
        };
    };
    const switchKey = `${id}-${isEnabled}`;
    const switchLabel = isEnabled ? t('Disable query') : t('Enable query');
    const [activeNamespace] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useActiveNamespace)();
    const queryKebab = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QueryKebab, {
        index: index
    });
    const querySwitch = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        title: switchLabel,
        style: {
            marginTop: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_54__.t_global_spacer_sm.var
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Switch__WEBPACK_IMPORTED_MODULE_13__.Switch, {
            "aria-label": switchLabel,
            id: switchKey,
            isChecked: isEnabled,
            onChange: toggleIsEnabled,
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageDisableEnableQuerySwitch
        }, switchKey)
    });
    const promQLExpressionInput = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PromQLExpressionInput, {
        value: text,
        onValueChange: handleTextChange,
        onExecuteQuery: handleExecuteQueries,
        onSelectionChange: handleSelectionChange
    });
    const queryId = `metrics-query-${index}`;
    // If namespace is defined getPrometheusURL() will use the
    //     PROMETHEUS_TENANCY_BASE_PATH for the developer view
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DataList__WEBPACK_IMPORTED_MODULE_4__.DataListItem, {
        "aria-labelledby": `query-item-${queryId}`,
        isExpanded: isExpanded,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DataList__WEBPACK_IMPORTED_MODULE_4__.DataListItemRow, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DataList__WEBPACK_IMPORTED_MODULE_4__.DataListToggle, {
                        onClick: toggleIsEnabled,
                        isExpanded: isExpanded,
                        buttonProps: {
                            isInline: true
                        },
                        id: `toggle-${queryId}`,
                        "aria-controls": `query-expand-${queryId}`,
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageExpandCollapseRowButton
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DataList__WEBPACK_IMPORTED_MODULE_4__.DataListItemCells, {
                        dataListCells: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DataList__WEBPACK_IMPORTED_MODULE_4__.DataListCell, {
                                width: 5,
                                style: {
                                    paddingTop: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_53__.t_global_spacer_md.var,
                                    paddingBottom: 0
                                },
                                children: promQLExpressionInput
                            }, "width 5")
                        ],
                        style: {
                            paddingBottom: 0
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DataList__WEBPACK_IMPORTED_MODULE_4__.DataListAction, {
                        "aria-labelledby": `query-item-${queryId} query-action-${queryId}`,
                        id: `action-${queryId}`,
                        "aria-label": "Actions",
                        children: [
                            querySwitch,
                            queryKebab
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DataList__WEBPACK_IMPORTED_MODULE_4__.DataListContent, {
                "aria-label": "Expandable content details",
                id: `query-expand-${queryId}`,
                isHidden: !isExpanded,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QueryTable, {
                    index: index,
                    customDatasource: customDatasource,
                    namespace: activeNamespace,
                    units: units
                })
            })
        ]
    });
};
const QueryBrowserWrapper = ({ customDataSourceName, customDataSource, customDatasourceError, units })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const [activeNamespace] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useActiveNamespace)();
    const [queryParams, setQueryParams] = (0,react_router__WEBPACK_IMPORTED_MODULE_63__.useSearchParams)();
    const [isFirstRender, , , setFirstRenderFalse] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_43__.useBoolean)(true);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const hideGraphs = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>!!(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).hideGraphs);
    const queries = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser?.queries);
    // Initialize queries from URL parameters on first render
    (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(()=>{
        if (!isFirstRender) {
            return;
        }
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserDeleteAllQueries)());
        for(let i = 0; queryParams.has(`query${i}`); i++){
            const query = queryParams.get(`query${i}`);
            dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserPatchQuery)(i, {
                isEnabled: true,
                isExpanded: true,
                query,
                text: query
            }));
        }
        setFirstRenderFalse();
    }, [
        dispatch,
        queryParams,
        isFirstRender,
        setFirstRenderFalse
    ]);
    /* eslint-disable react-hooks/exhaustive-deps */ // Use useMemo() to prevent these two arrays being recreated on every render, which would
    // trigger unnecessary re-renders of QueryBrowser, which can be quite slow
    const queriesMemoKey = JSON.stringify(lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](queries, 'query'));
    const queryStrings = (0,react__WEBPACK_IMPORTED_MODULE_33__.useMemo)(()=>lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](queries, 'query'), [
        queriesMemoKey
    ]);
    const disabledSeriesMemoKey = JSON.stringify(lodash_es__WEBPACK_IMPORTED_MODULE_29__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](queries, 'disabledSeries'), lodash_es__WEBPACK_IMPORTED_MODULE_24__["default"]));
    const disabledSeries = (0,react__WEBPACK_IMPORTED_MODULE_33__.useMemo)(()=>lodash_es__WEBPACK_IMPORTED_MODULE_26__["default"](queries, 'disabledSeries'), [
        disabledSeriesMemoKey
    ]);
    // Update the URL parameters when the queries shown in the graph change
    (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(()=>{
        if (isFirstRender) {
            return;
        }
        const newParams = new URLSearchParams(removeQueryKeys(queryParams));
        queryStrings.forEach((query, i)=>newParams.set(`query${i}`, query || ''));
        if (customDataSourceName) {
            newParams.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_47__.QueryParams.Datasource, customDataSourceName);
        }
        if (!newParams.get(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_47__.QueryParams.Units)) {
            newParams.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_47__.QueryParams.Units, 'short');
        }
        setQueryParams(newParams, {
            replace: true
        });
    }, [
        queryStrings,
        customDataSourceName,
        isFirstRender,
        queryParams
    ]);
    if (hideGraphs) {
        return null;
    }
    const insertExampleQuery = ()=>{
        const focusedIndex = focusedQuery?.index ?? 0;
        const index = queries[focusedIndex] ? focusedIndex : 0;
        const labelMatchers = activeNamespace === _shared_utils_utils__WEBPACK_IMPORTED_MODULE_37__.ALL_NAMESPACES_KEY ? '{alertstate="firing"}' : `{alertstate="firing", namespace="${activeNamespace}"}`;
        const text = `sort_desc(sum(sum_over_time(ALERTS${labelMatchers}[24h])) by (alertname))`;
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserPatchQuery)(index, {
            isEnabled: true,
            query: text,
            text
        }));
    };
    if (customDataSourceName && customDatasourceError) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__.EmptyState, {
            titleText: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_14__.Title, {
                headingLevel: "h2",
                size: "md",
                children: t('Error loading custom data source')
            }),
            icon: _patternfly_react_icons_dist_dynamic_icons_chart_line_icon__WEBPACK_IMPORTED_MODULE_16__.ChartLineIcon,
            variant: _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__.EmptyStateVariant.full,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__.EmptyStateBody, {
                children: t('An error occurred while loading the custom data source.')
            })
        });
    }
    if (queryStrings.join('') === '') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__.EmptyState, {
            titleText: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_14__.Title, {
                headingLevel: "h2",
                size: "md",
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageNoQueryEnteredTitle,
                children: t('No query entered')
            }),
            icon: _patternfly_react_icons_dist_dynamic_icons_chart_line_icon__WEBPACK_IMPORTED_MODULE_16__.ChartLineIcon,
            variant: _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__.EmptyStateVariant.full,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_6__.EmptyStateBody, {
                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageNoQueryEntered,
                    children: t('Enter a query in the box below to explore metrics for this cluster.')
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    onClick: insertExampleQuery,
                    variant: "primary",
                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageInsertExampleQueryButton,
                    children: t('Insert example query')
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_query_browser_query_browser__WEBPACK_IMPORTED_MODULE_46__.QueryBrowser, {
        customDataSource: customDataSource,
        disabledSeries: disabledSeries,
        queries: queryStrings,
        units: units,
        showStackedControl: true,
        showDisconnectedControl: true
    });
};
const removeQueryKeys = (searchParams)=>{
    const newParams = new URLSearchParams(searchParams);
    for (const key of searchParams.keys()){
        if (key.startsWith('query')) {
            newParams.delete(key);
        }
    }
    return newParams;
};
const AddQueryButton = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const addQuery = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserAddQuery)()), [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: addQuery,
        type: "button",
        variant: "secondary",
        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageAddQueryButton,
        children: t('Add query')
    });
};
const RunQueriesButton = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const runQueries = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)(()=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserRunQueries)()), [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: runQueries,
        type: "submit",
        variant: "primary",
        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricsPageRunQueriesButton,
        children: t('Run queries')
    });
};
const QueriesList = ({ customDatasource, units })=>{
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const count = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.queries.length);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DataList__WEBPACK_IMPORTED_MODULE_4__.DataList, {
        "aria-label": `queries`,
        children: lodash_es__WEBPACK_IMPORTED_MODULE_28__["default"](count).map((index)=>{
            const reversedIndex = count - index - 1;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Query, {
                index: reversedIndex,
                customDatasource: customDatasource,
                units: units
            }, reversedIndex);
        })
    });
};
const IntervalDropdown = ()=>{
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    const setInterval = (0,react__WEBPACK_IMPORTED_MODULE_33__.useCallback)((v)=>dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserSetPollInterval)(v)), [
        dispatch
    ]);
    const pollInterval = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)((state)=>Number((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_44__.getObserveState)(plugin, state).queryBrowser.pollInterval));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_DropdownPollInterval__WEBPACK_IMPORTED_MODULE_42__.DropDownPollInterval, {
        setInterval: setInterval,
        selectedInterval: pollInterval
    });
};
const GraphUnitsDropDown = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const [selectedUnits, setUnits] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_55__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_47__.QueryParams.Units, use_query_params__WEBPACK_IMPORTED_MODULE_55__.StringParam);
    const initialOptions = (0,react__WEBPACK_IMPORTED_MODULE_33__.useMemo)(()=>{
        const intervalOptions = [
            {
                content: t('Bytes Binary (KiB, MiB)'),
                value: 'bytes'
            },
            {
                content: t('Bytes Decimal (kb, MB)'),
                value: 'Bytes'
            },
            {
                content: t('Bytes Binary Per Second (KiB/s, MiB/s)'),
                value: 'bps'
            },
            {
                content: t('Bytes Decimal Per Second (kB/s, MB/s)'),
                value: 'Bps'
            },
            {
                content: t('Packets Per Second'),
                value: 'pps'
            },
            {
                content: t('Miliseconds'),
                value: 'ms'
            },
            {
                content: t('Seconds'),
                value: 's'
            },
            {
                content: t('Percentage'),
                value: 'percentunit'
            },
            {
                content: t('No Units'),
                value: 'short'
            }
        ];
        return intervalOptions.map((o)=>({
                ...o,
                selected: o.value === selectedUnits
            }));
    }, [
        selectedUnits,
        t
    ]);
    const onSelect = (_ev, selection)=>{
        setUnits(selection);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_templates_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_57__.SimpleSelect, {
        initialOptions: initialOptions,
        onSelect: (_ev, selection)=>onSelect(_ev, selection),
        toggleWidth: "300px"
    });
};
const MetricsPage_ = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__.useTranslation)("plugin__monitoring-plugin");
    const [units, setUnits] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_55__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_47__.QueryParams.Units, use_query_params__WEBPACK_IMPORTED_MODULE_55__.StringParam);
    const [customDataSourceName] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_55__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_47__.QueryParams.Datasource, use_query_params__WEBPACK_IMPORTED_MODULE_55__.StringParam);
    const { namespace, setNamespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_62__.useMonitoringNamespace)();
    const { displayNamespaceSelector } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_61__.useMonitoring)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(()=>{
        if (!(0,_utils_units__WEBPACK_IMPORTED_MODULE_56__.isGraphUnit)(units)) {
            setUnits('short');
        }
    }, [
        units,
        setUnits
    ]);
    // Clear queries on unmount
    (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(()=>{
        return ()=>{
            dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserDeleteAllQueries)());
        };
    }, [
        dispatch
    ]);
    const [customDataSource, setCustomDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(undefined);
    const [customDataSourceIsResolved, setCustomDataSourceIsResolved] = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false);
    const [extensions, extensionsResolved] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useResolvedExtensions)(_openshift_console_dynamic_plugin_sdk_lib_extensions_dashboard_data_source__WEBPACK_IMPORTED_MODULE_41__.isDataSource);
    const hasExtensions = !lodash_es__WEBPACK_IMPORTED_MODULE_24__["default"](extensions);
    const [customDatasourceError, setCustomDataSourceError] = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false);
    // get custom datasources
    (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(()=>{
        const getCustomDataSource = async ()=>{
            if (!customDataSourceName) {
                setCustomDataSource(null);
                return;
            } else if (extensionsResolved) {
                setCustomDataSource({
                    basePath: '',
                    dataSourceType: 'prometheus'
                });
                if (!hasExtensions) {
                    setCustomDataSourceError(true);
                    return;
                }
                const extension = extensions.find((ext)=>ext?.properties?.contextId === 'monitoring-dashboards');
                if (!extension) {
                    setCustomDataSourceError(true);
                    return;
                }
                const getDataSource = extension?.properties?.getDataSource;
                const dataSource = await getDataSource?.(customDataSourceName);
                if (!dataSource || !dataSource.basePath) {
                    setCustomDataSourceError(true);
                    return;
                }
                setCustomDataSource(dataSource);
                setCustomDataSourceIsResolved(true);
            }
        };
        getCustomDataSource().catch((err)=>{
            // eslint-disable-next-line no-console
            console.error(err);
            setCustomDataSourceError(true);
        });
    }, [
        extensions,
        extensionsResolved,
        customDataSourceName,
        hasExtensions
    ]);
    const prevNamespace = (0,react__WEBPACK_IMPORTED_MODULE_33__.useRef)(namespace);
    (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(()=>{
        // In the developer perspective (display namespace selector is false since all dev perspective
        // pages add them automatically) then clear queries when the namespace changes
        if (prevNamespace.current === namespace || displayNamespaceSelector) {
            return;
        }
        prevNamespace.current = namespace;
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserDeleteAllQueries)());
    }, [
        namespace,
        dispatch,
        setNamespace
    ]);
    if (customDataSourceName) {
        if (!extensionsResolved || !customDataSourceIsResolved && !customDatasourceError) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_10__.PageSection, {
                hasBodyWrapper: false,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_2__.Bullseye, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_50__.LoadingInline, {})
                })
            });
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            displayNamespaceSelector && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.DocumentTitle, {
                        children: t('Metrics')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.NamespaceBar, {
                        onNamespaceChange: (namespace)=>{
                            dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_36__.queryBrowserDeleteAllQueries)());
                            setNamespace(namespace);
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ListPageHeader, {
                title: displayNamespaceSelector ? t('Metrics') : ' ',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_11__.Split, {
                    hasGutter: true,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_11__.SplitItem, {
                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricGraphUnitsDropDown,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_15__.Tooltip, {
                                content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: t('This dropdown only formats results.')
                                }),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GraphUnitsDropDown, {})
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_11__.SplitItem, {
                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_60__.DataTestIDs.MetricDropdownPollInterval,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IntervalDropdown, {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_11__.SplitItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MetricsActionsMenu, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_10__.PageSection, {
                hasBodyWrapper: false,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_12__.Stack, {
                    hasGutter: true,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_12__.StackItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToggleGraph, {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_12__.StackItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QueryBrowserWrapper, {
                                customDataSource: customDataSource,
                                customDataSourceName: customDataSourceName,
                                customDatasourceError: customDatasourceError,
                                units: units
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_12__.StackItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.Flex, {
                                alignItems: {
                                    default: 'alignItemsFlexEnd'
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.FlexItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PreDefinedQueriesDropdown, {})
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.FlexItem, {
                                        grow: {
                                            default: 'grow'
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.FlexItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AddQueryButton, {})
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_7__.FlexItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RunQueriesButton, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_12__.StackItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QueriesList, {
                                customDatasource: customDataSource,
                                units: units
                            })
                        })
                    ]
                })
            })
        ]
    });
};
const MetricsPage = (0,_shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_51__["default"])(MetricsPage_);
const MpCmoMetricsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_59__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-plugin',
            prometheus: 'cmo'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MetricsPage, {})
    });
};
const MpCmoDevMetricsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_59__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-plugin',
            prometheus: 'cmo',
            displayNamespaceSelector: false
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MetricsPage, {})
    });
};


/***/ },

/***/ "./features/metrics/utils/units.ts"
/*!*****************************************!*\
  !*** ./features/metrics/utils/units.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isGraphUnit: () => (/* binding */ isGraphUnit)
/* harmony export */ });
const AllGraphUnits = [
    'Bytes',
    'bytes',
    'bps',
    'Bps',
    'pps',
    'ms',
    's',
    'percentunit',
    'short'
];
function isGraphUnit(value) {
    return AllGraphUnits.includes(value);
}


/***/ },

/***/ "./shared/components/DropdownPollInterval.tsx"
/*!****************************************************!*\
  !*** ./shared/components/DropdownPollInterval.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_REFRESH_INTERVAL: () => (/* binding */ DEFAULT_REFRESH_INTERVAL),
/* harmony export */   DropDownPollInterval: () => (/* binding */ DropDownPollInterval)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../console/console-shared/src/datetime/prometheus */ "./shared/console/console-shared/src/datetime/prometheus.ts");
/* harmony import */ var _patternfly_react_templates_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-templates/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-templates/dist/dynamic/components/Select/@patternfly/react-templates/dist/dynamic/components/Select");
/* harmony import */ var _constants_data_test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/data-test */ "./shared/constants/data-test.ts");






const DEFAULT_REFRESH_INTERVAL = (0,_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_3__.parsePrometheusDuration)('30s');
const OFF_KEY = 'OFF_KEY';
const DropDownPollInterval = ({ id, setInterval, selectedInterval })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    const selectedKey = selectedInterval ? (0,_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_3__.formatPrometheusDuration)(selectedInterval) : OFF_KEY;
    const initialOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const intervalOptions = [
            {
                content: t('Refresh off'),
                value: OFF_KEY
            },
            {
                content: t('{{count}} second', {
                    count: 15
                }),
                value: '15s'
            },
            {
                content: t('{{count}} second', {
                    count: 30
                }),
                value: '30s'
            },
            {
                content: t('{{count}} minute', {
                    count: 1
                }),
                value: '1m'
            },
            {
                content: t('{{count}} minute', {
                    count: 15
                }),
                value: '15m'
            },
            {
                content: t('{{count}} hour', {
                    count: 1
                }),
                value: '1h'
            },
            {
                content: t('{{count}} hour', {
                    count: 2
                }),
                value: '2h'
            },
            {
                content: t('{{count}} day', {
                    count: 1
                }),
                value: '1d'
            }
        ];
        return intervalOptions.map((o)=>({
                ...o,
                selected: o.value === selectedKey
            }));
    }, [
        selectedKey,
        t
    ]);
    const onSelect = (_ev, selection)=>{
        setInterval((0,_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_3__.parsePrometheusDuration)(String(selection)));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_templates_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_4__.SimpleSelect, {
        id: id,
        initialOptions: initialOptions,
        onSelect: (_ev, selection)=>onSelect(_ev, selection),
        toggleWidth: "150px",
        "data-test": _constants_data_test__WEBPACK_IMPORTED_MODULE_5__.LegacyDashboardPageTestIDs.PollIntervalDropdownOptions
    });
};


/***/ },

/***/ "./shared/components/KebabDropdown.tsx"
/*!*********************************************!*\
  !*** ./shared/components/KebabDropdown.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Dropdown */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Dropdown/@patternfly/react-core/dist/dynamic/components/Dropdown");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_ellipsis_v_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/ellipsis-v-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/ellipsis-v-icon/@patternfly/react-icons/dist/dynamic/icons/ellipsis-v-icon");
/* harmony import */ var _hooks_useBoolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _constants_data_test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/data-test */ "./shared/constants/data-test.ts");







const KebabDropdown = ({ dropdownItems, onMouseEnter })=>{
    const [isOpen, setIsOpen, setOpen, setClosed] = (0,_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_4__.useBoolean)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
        isOpen: isOpen,
        onSelect: setClosed,
        onOpenChange: (open)=>open ? setOpen() : setClosed(),
        popperProps: {
            position: 'right'
        },
        toggle: (toggleRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__.MenuToggle, {
                ref: toggleRef,
                "aria-label": "toggle menu",
                "data-test-id": "kebab-button",
                "data-test": _constants_data_test__WEBPACK_IMPORTED_MODULE_5__.DataTestIDs.KebabDropdownButton,
                variant: "plain",
                onClick: setIsOpen,
                onMouseEnter: onMouseEnter,
                isExpanded: isOpen,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_ellipsis_v_icon__WEBPACK_IMPORTED_MODULE_3__.EllipsisVIcon, {})
            }),
        shouldFocusToggleOnSelect: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__.DropdownList, {
            children: dropdownItems
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KebabDropdown);


/***/ },

/***/ "./shared/components/TypeaheadSelect.tsx"
/*!***********************************************!*\
  !*** ./shared/components/TypeaheadSelect.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeaheadSelect: () => (/* binding */ TypeaheadSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Select/@patternfly/react-core/dist/dynamic/components/Select");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TextInputGroup */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TextInputGroup/@patternfly/react-core/dist/dynamic/components/TextInputGroup");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_times_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/times-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/times-icon/@patternfly/react-icons/dist/dynamic/icons/times-icon");
/* harmony import */ var _constants_data_test__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);












const NO_RESULTS = 'no results';
const TypeaheadSelect = ({ options, onSelect, placeholder })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('');
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('');
    const [selectOptions, setSelectOptions] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(options);
    const [focusedItemIndex, setFocusedItemIndex] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [activeItemId, setActiveItemId] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [filterValue, setFilterValue] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('');
    const textInputRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        let newSelectOptions = options;
        if (filterValue) {
            newSelectOptions = options.filter((menuItem)=>String(menuItem.name).toLowerCase().includes(filterValue.toLowerCase()));
            if (!newSelectOptions.length) {
                newSelectOptions = [
                    {
                        isAriaDisabled: true,
                        name: `No results found for "${filterValue}"`,
                        value: NO_RESULTS
                    }
                ];
            }
            if (!isOpen) {
                setIsOpen(true);
            }
        }
        setSelectOptions(newSelectOptions);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        filterValue,
        options
    ]);
    const handleSelect = (_event, value)=>{
        if (!value) {
            setSelected(undefined);
            setIsOpen(false);
            return;
        }
        setSelected(String(value));
        setInputValue('');
        setIsOpen(false);
        setSelectOptions(options);
        onSelect(String(value));
    };
    const resetActiveAndFocusedItem = ()=>{
        setFocusedItemIndex(null);
        setActiveItemId(null);
    };
    const closeMenu = ()=>{
        setIsOpen(false);
        resetActiveAndFocusedItem();
    };
    const onToggleClick = ()=>{
        setIsOpen(!isOpen);
        textInputRef?.current?.focus();
    };
    const onClearButtonClick = ()=>{
        setSelected('');
        setInputValue('');
        setFilterValue('');
        resetActiveAndFocusedItem();
        textInputRef?.current?.focus();
    };
    const onInputClick = ()=>{
        if (!isOpen) {
            setIsOpen(true);
        } else if (!inputValue) {
            closeMenu();
        }
    };
    const onTextInputChange = (_event, value)=>{
        setInputValue(value);
        setFilterValue(value);
        resetActiveAndFocusedItem();
        if (value !== selected) {
            setSelected('');
        }
    };
    const selectOption = (value, content)=>{
        onSelect(value);
        setInputValue(String(content));
        setFilterValue('');
        setSelected(String(value));
        closeMenu();
    };
    const onInputKeyDown = (event)=>{
        const focusedItem = focusedItemIndex !== null ? selectOptions[focusedItemIndex] : null;
        switch(event.key){
            case 'Enter':
                if (isOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.isAriaDisabled) {
                    selectOption(focusedItem.value, focusedItem.name);
                }
                if (!isOpen) {
                    setIsOpen(true);
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
                handleMenuArrowKeys(event.key);
                break;
        }
    };
    const setActiveAndFocusedItem = (itemIndex)=>{
        setFocusedItemIndex(itemIndex);
        const focusedItem = selectOptions[itemIndex];
        setActiveItemId(focusedItem.name);
    };
    const handleMenuArrowKeys = (key)=>{
        let indexToFocus = 0;
        if (!isOpen) {
            setIsOpen(true);
        }
        if (selectOptions.every((option)=>option.isDisabled)) {
            return;
        }
        if (key === 'ArrowUp') {
            if (focusedItemIndex === null || focusedItemIndex === 0) {
                indexToFocus = selectOptions.length - 1;
            } else {
                indexToFocus = focusedItemIndex - 1;
            }
            // Skip disabled options
            while(selectOptions[indexToFocus].isDisabled){
                indexToFocus--;
                if (indexToFocus === -1) {
                    indexToFocus = selectOptions.length - 1;
                }
            }
        }
        if (key === 'ArrowDown') {
            if (focusedItemIndex === null || focusedItemIndex === selectOptions.length - 1) {
                indexToFocus = 0;
            } else {
                indexToFocus = focusedItemIndex + 1;
            }
            // Skip disabled options
            while(selectOptions[indexToFocus].isDisabled){
                indexToFocus++;
                if (indexToFocus === selectOptions.length) {
                    indexToFocus = 0;
                }
            }
        }
        setActiveAndFocusedItem(indexToFocus);
    };
    const toggle = (toggleRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__.MenuToggle, {
            ref: toggleRef,
            variant: "typeahead",
            "aria-label": "Typeahead menu toggle",
            onClick: onToggleClick,
            isExpanded: isOpen,
            isFullWidth: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_4__.TextInputGroup, {
                isPlain: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_4__.TextInputGroupMain, {
                        value: inputValue,
                        onClick: onInputClick,
                        onChange: onTextInputChange,
                        onKeyDown: onInputKeyDown,
                        id: "query-select-typeahead-input",
                        autoComplete: "off",
                        innerRef: textInputRef,
                        placeholder: placeholder,
                        ...activeItemId && {
                            'aria-activedescendant': activeItemId
                        },
                        role: "combobox",
                        isExpanded: isOpen,
                        "aria-controls": "select-typeahead-listbox",
                        "data-test": _constants_data_test__WEBPACK_IMPORTED_MODULE_6__.DataTestIDs.TypeaheadSelectInput
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TextInputGroup__WEBPACK_IMPORTED_MODULE_4__.TextInputGroupUtilities, {
                        ...!inputValue ? {
                            style: {
                                display: 'none'
                            }
                        } : {},
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_times_icon__WEBPACK_IMPORTED_MODULE_5__.TimesIcon, {
                                "aria-hidden": "true"
                            }),
                            variant: "plain",
                            onClick: onClearButtonClick,
                            "aria-label": "Clear input value"
                        })
                    })
                ]
            })
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.Select, {
        id: "typeahead-select",
        isOpen: isOpen,
        onSelect: handleSelect,
        onOpenChange: (isOpen)=>{
            if (!isOpen) {
                closeMenu();
            }
        },
        toggle: toggle,
        shouldFocusFirstItemOnOpen: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectList, {
            children: selectOptions.map((option, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectOption, {
                    isFocused: focusedItemIndex === index,
                    id: option.name,
                    value: option.value,
                    isDisabled: option.isAriaDisabled,
                    children: option.name
                }, `${option.name} ${index}`))
        })
    });
};


/***/ },

/***/ "./shared/components/table/table-pagination.tsx"
/*!******************************************************!*\
  !*** ./shared/components/table/table-pagination.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ITEMS_PER_PAGE: () => (/* binding */ ITEMS_PER_PAGE),
/* harmony export */   TablePagination: () => (/* binding */ TablePagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Pagination */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Pagination/@patternfly/react-core/dist/dynamic/components/Pagination");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);




const ITEMS_PER_PAGE = [
    10,
    20,
    50,
    100,
    200,
    500
];
const defaultPerPageOptions = ITEMS_PER_PAGE.map((n)=>({
        title: n.toString(),
        value: n
    }));
const TablePagination = ({ itemCount, page, perPage, perPageOptions = defaultPerPageOptions, setPage, setPerPage, variant = _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationVariant.bottom, onSetPage, onPerPageSelect })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
        itemCount: itemCount,
        onPerPageSelect: onPerPageSelect ? onPerPageSelect : (e, v)=>{
            // When changing the number of results per page,
            // keep the start row approximately the same
            const firstRow = (page - 1) * perPage;
            setPage(Math.floor(firstRow / v) + 1);
            setPerPage(v);
        },
        onSetPage: onSetPage ? onSetPage : (e, v)=>setPage(v),
        page: page,
        perPage: perPage,
        perPageOptions: perPageOptions,
        variant: variant,
        titles: {
            items: '',
            page: '',
            itemsPerPage: t('Items per page'),
            perPageSuffix: t('per page'),
            toFirstPageAriaLabel: t('Go to first page'),
            toPreviousPageAriaLabel: t('Go to previous page'),
            toLastPageAriaLabel: t('Go to last page'),
            toNextPageAriaLabel: t('Go to next page'),
            optionsToggleAriaLabel: t('Items per page'),
            currPageAriaLabel: t('Current page'),
            paginationAriaLabel: t('Pagination'),
            ofWord: t('of')
        }
    });
};


/***/ },

/***/ "./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx"
/*!****************************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleEmptyState: () => (/* binding */ ConsoleEmptyState)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/EmptyState */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/EmptyState/@patternfly/react-core/dist/dynamic/components/EmptyState");






const ConsoleEmptyState = ({ children, Icon, primaryActions, secondaryActions, title, ...props })=>{
    const dataTest = props['data-test'] || 'console-empty-state';
    const variant = props.variant || _patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateVariant.xs;
    const body = children && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, {
        "data-test": `${dataTest}-body`,
        children: children
    });
    const footer = (primaryActions || secondaryActions) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateFooter, {
        "data-test": `${dataTest}-footer`,
        children: [
            primaryActions?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateActions, {
                "data-test": `${dataTest}-primary-actions`,
                children: primaryActions
            }),
            secondaryActions?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyStateActions, {
                "data-test": `${dataTest}-secondary-actions`,
                children: secondaryActions
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_EmptyState__WEBPACK_IMPORTED_MODULE_1__.EmptyState, {
        variant: variant,
        "data-test": dataTest,
        icon: Icon,
        titleText: title,
        ...props,
        children: [
            body,
            footer
        ]
    });
};
ConsoleEmptyState.displayName = 'ConsoleEmptyState';


/***/ },

/***/ "./shared/console/console-shared/src/components/loading/LoadingBox.tsx"
/*!*****************************************************************************!*\
  !*** ./shared/console/console-shared/src/components/loading/LoadingBox.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingBox: () => (/* binding */ LoadingBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./shared/console/console-shared/src/components/loading/Loading.tsx");
/* harmony import */ var _empty_state_ConsoleEmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../empty-state/ConsoleEmptyState */ "./shared/console/console-shared/src/components/empty-state/ConsoleEmptyState.tsx");



const LoadingBox = ({ children })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_empty_state_ConsoleEmptyState__WEBPACK_IMPORTED_MODULE_2__.ConsoleEmptyState, {
        "data-test": "loading-box",
        isFullHeight: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loading__WEBPACK_IMPORTED_MODULE_1__.Loading, {}),
            children
        ]
    });
LoadingBox.displayName = 'LoadingBox';


/***/ },

/***/ "./shared/console/utils/async.tsx"
/*!****************************************!*\
  !*** ./shared/console/utils/async.tsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncComponent: () => (/* binding */ AsyncComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/omit.js");
/* harmony import */ var _console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console-shared/src/components/loading/LoadingBox */ "./shared/console/console-shared/src/components/loading/LoadingBox.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
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




/**
 * FIXME: Comparing two functions is not the *best* solution, but we can handle false negatives.
 */ const sameLoader = (a)=>(b)=>a?.name === b?.name && (a || 'a').toString() === (b || 'b').toString();
var AsyncComponentError = /*#__PURE__*/ function(AsyncComponentError) {
    AsyncComponentError["ComponentNotFound"] = "COMPONENT_NOT_FOUND";
    return AsyncComponentError;
}(AsyncComponentError || {});
class AsyncComponent extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
    static getDerivedStateFromProps(props, state) {
        if (!sameLoader(props.loader)(state.loader)) {
            return {
                Component: null,
                loader: props.loader
            };
        }
        return null;
    }
    componentDidUpdate() {
        if (this.state.Component === null) {
            this.loadComponent();
        }
    }
    componentDidMount() {
        this.isAsyncMounted = true;
        if (this.state.Component === null) {
            this.loadComponent();
        }
    }
    componentWillUnmount() {
        this.isAsyncMounted = false;
    }
    loadComponent() {
        this.state.loader().then((Component)=>{
            if (!Component) {
                return Promise.reject("COMPONENT_NOT_FOUND");
            }
            if (this.isAsyncMounted) {
                this.setState({
                    Component
                });
            }
        }).catch((error)=>{
            if (error === "COMPONENT_NOT_FOUND") {
                // eslint-disable-next-line no-console
                console.error('Component does not exist in module');
            } else {
                setTimeout(()=>this.loadComponent(), this.retryAfter);
            }
        });
    }
    get retryAfter() {
        this.retryCount++;
        const base = this.retryCount < this.maxRetries ? this.retryCount : this.maxRetries;
        return 100 * Math.pow(base, 2);
    }
    render() {
        const { Component } = this.state;
        const { LoadingComponent = _console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_2__.LoadingBox, forwardRef } = this.props;
        const rest = lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](this.props, 'loader');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return Component != null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
            ref: forwardRef,
            ...rest
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingComponent, {});
    }
    constructor(...args){
        super(...args), _define_property(this, "state", {
            Component: null,
            loader: null
        }), _define_property(this, "props", void 0), _define_property(this, "retryCount", 0), _define_property(this, "maxRetries", 25), _define_property(this, "isAsyncMounted", false);
    }
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


/***/ }

}]);
//# sourceMappingURL=features_metrics_pages_MetricsPage_tsx-chunk.js.map