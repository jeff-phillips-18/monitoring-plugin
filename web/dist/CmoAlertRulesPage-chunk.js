"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["CmoAlertRulesPage"],{

/***/ "./features/alerts/pages/alert-rules-page/AlertRulesPage.tsx"
/*!*******************************************************************!*\
  !*** ./features/alerts/pages/alert-rules-page/AlertRulesPage.tsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertRulesFilterOptions: () => (/* binding */ AlertRulesFilterOptions),
/* harmony export */   McpAcmAlertRulesPage: () => (/* binding */ McpAcmAlertRulesPage),
/* harmony export */   MpCmoAlertRulesPage: () => (/* binding */ MpCmoAlertRulesPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/countBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_types_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/types/types */ "./shared/types/types.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Pagination */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Pagination/@patternfly/react-core/dist/dynamic/components/Pagination");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Truncate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Truncate */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Truncate/@patternfly/react-core/dist/dynamic/components/Truncate");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataView */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataView/@patternfly/react-data-view/dist/dynamic/DataView");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewTable */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewTable/@patternfly/react-data-view/dist/dynamic/DataViewTable");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewToolbar */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewToolbar/@patternfly/react-data-view/dist/dynamic/DataViewToolbar");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/Hooks */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/Hooks/@patternfly/react-data-view/dist/dynamic/Hooks");
/* harmony import */ var _shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/contexts/MonitoringContext */ "./shared/contexts/MonitoringContext.tsx");
/* harmony import */ var _shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/hooks/useAlerts */ "./shared/hooks/useAlerts.ts");
/* harmony import */ var _components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/console/console-shared/error/fallbacks/withFallback */ "./shared/console/console-shared/error/fallbacks/withFallback.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/console/console-shared/src/components/empty-state/EmptyBox */ "./shared/console/console-shared/src/components/empty-state/EmptyBox.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/console/console-shared/src/components/loading/LoadingBox */ "./shared/console/console-shared/src/components/loading/LoadingBox.tsx");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/components/table/table-pagination */ "./shared/components/table/table-pagination.tsx");
/* harmony import */ var _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/components/table/TableFilters */ "./shared/components/table/TableFilters.tsx");
/* harmony import */ var _shared_components_table_TableToolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/components/table/TableToolbar */ "./shared/components/table/TableToolbar.tsx");
/* harmony import */ var _shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../shared/components/table/sort-utils */ "./shared/components/table/sort-utils.ts");
/* harmony import */ var _shared_components_table_useTableColumns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../shared/components/table/useTableColumns */ "./shared/components/table/useTableColumns.ts");
/* harmony import */ var _shared_components_table_useTableFilters__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../shared/components/table/useTableFilters */ "./shared/components/table/useTableFilters.ts");
/* harmony import */ var _shared_components_table_useTablePagination__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../shared/components/table/useTablePagination */ "./shared/components/table/useTablePagination.ts");
/* harmony import */ var _filter_rules__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./filter-rules */ "./features/alerts/pages/alert-rules-page/filter-rules.ts");


































var AlertRulesFilterOptions = /*#__PURE__*/ function(AlertRulesFilterOptions) {
    AlertRulesFilterOptions["NAME"] = "name";
    AlertRulesFilterOptions["STATE"] = "alert-state";
    AlertRulesFilterOptions["SEVERITY"] = "alert-severity";
    AlertRulesFilterOptions["SOURCE"] = "alert-source";
    AlertRulesFilterOptions["LABEL"] = "label";
    return AlertRulesFilterOptions;
}({});
const AlertRulesPage_ = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)("plugin__monitoring-plugin");
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_24__.useMonitoringNamespace)();
    const { defaultAlertTenant, perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_25__.usePerspective)();
    const [activeAttributeMenu, setActiveAttributeMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(t('Name'));
    const initialFilters = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        const filters = {
            ["name"]: '',
            ["alert-state"]: [],
            ["alert-severity"]: [],
            ["alert-source"]: defaultAlertTenant,
            ["label"]: ''
        };
        return filters;
    }, [
        defaultAlertTenant
    ]);
    // KNOWN ISSUE: the useDataViewPagination, useDataViewFilters, and useDataViewSort functions
    // do not work together for URL initialization, so only the search parameters for the last
    // function will be set when initially loading the page
    // with no search parameters. Future changes are reflected
    const pagination = (0,_shared_components_table_useTablePagination__WEBPACK_IMPORTED_MODULE_32__.useTablePagination)({
        perPage: _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_26__.ITEMS_PER_PAGE[0]
    });
    const { filters, onSetFilters, clearAllFilters } = (0,_shared_components_table_useTableFilters__WEBPACK_IMPORTED_MODULE_31__.useTableFilters)({
        initialFilters
    });
    const { sortBy, direction, onSort } = (0,_patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_16__.useDataViewSort)({
        initialSort: {
            sortBy: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.rowFilter)("name"),
            direction: 'asc'
        }
    });
    const columnKeys = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        const keys = [
            {
                label: t('Name'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.rowFilter)("name")
            },
            {
                label: t('Severity'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.rowFilter)("alert-severity")
            },
            {
                label: t('State'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.rowFilter)("alert-state")
            },
            {
                label: t('Source'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.rowFilter)("alert-source")
            }
        ];
        return keys;
    }, [
        t
    ]);
    const columns = (0,_shared_components_table_useTableColumns__WEBPACK_IMPORTED_MODULE_30__.useTableColumns)(columnKeys, sortBy, direction, onSort);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        // When changing filters change back to being on page 1
        pagination.onSetPage(undefined, 1);
    }, [
        filters
    ]);
    // eslint-disable-line react-hooks/exhaustive-deps
    const { page, perPage } = pagination;
    const { rules, additionalRuleSourceLabels, rulesAlertLoading, silences } = (0,_shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_18__.useAlerts)();
    const sortedRuleRows = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        const filteredRules = (0,_filter_rules__WEBPACK_IMPORTED_MODULE_33__.filterRules)(rules, filters);
        const sortedRules = sortRules(filteredRules, sortBy, direction);
        const mappedRules = sortedRules.map((sortedRule)=>{
            return {
                row: [
                    {
                        cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_9__.Flex, {
                            spaceItems: {
                                default: 'spaceItemsNone'
                            },
                            flexWrap: {
                                default: 'nowrap'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_23__.DataTestIDs.AlertingRuleResourceIcon,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceIcon, {
                                        kind: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__.RuleResource.kind
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_6__.Link, {
                                        to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_25__.getRuleUrl)(perspective, sortedRule, namespace),
                                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_23__.DataTestIDs.AlertingRuleResourceLink,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Truncate__WEBPACK_IMPORTED_MODULE_12__.Truncate, {
                                            content: sortedRule.name
                                        })
                                    })
                                })
                            ]
                        })
                    },
                    {
                        cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_23__.DataTestIDs.SeverityBadge,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.SeverityBadge, {
                                severity: sortedRule.labels?.severity
                            })
                        })
                    },
                    {
                        cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_23__.DataTestIDs.AlertingRuleStateBadge,
                            children: lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](sortedRule.alerts) ? '-' : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StateCounts, {
                                alerts: sortedRule.alerts
                            })
                        })
                    },
                    (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.alertingRuleSource)(sortedRule) === _shared_types_types__WEBPACK_IMPORTED_MODULE_7__.AlertSource.User ? t('User') : t('Platform')
                ]
            };
        });
        return mappedRules;
    }, [
        rules,
        filters,
        sortBy,
        direction,
        perspective,
        namespace,
        t
    ]);
    const selectedPageOfRules = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>sortedRuleRows.slice((page - 1) * perPage, (page - 1) * perPage + perPage), [
        sortedRuleRows,
        page,
        perPage
    ]);
    const loaded = rulesAlertLoading?.loaded ?? false;
    const loadError = rulesAlertLoading?.loadError;
    const onFiltersChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(filterName)=>{
            return (_e, val)=>{
                onSetFilters({
                    [filterName]: val
                });
            };
        }, [
        onSetFilters
    ]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filterItems = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filtersVals = [
            {
                filterId: "name",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_27__.TableFilterOption.TEXT,
                title: t('Name'),
                placeholder: t('Filter by Name'),
                onChange: onFiltersChange("name"),
                value: filters.name,
                ouiaId: 'RuleNameFilter'
            },
            {
                filterId: "alert-state",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_27__.TableFilterOption.CHECKBOX,
                title: t('Alert State'),
                placeholder: t('Filter by State'),
                onChange: onFiltersChange("alert-state"),
                value: filters["alert-state"],
                options: [
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Firing,
                        label: t('Firing')
                    },
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Pending,
                        label: t('Pending')
                    },
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced,
                        label: t('Silenced')
                    },
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.NotFiring,
                        label: t('Not Firing')
                    }
                ],
                ouiaId: 'RuleStateFilter'
            },
            {
                filterId: "alert-severity",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_27__.TableFilterOption.CHECKBOX,
                title: t('Severity'),
                placeholder: t('Filter by Severity'),
                onChange: onFiltersChange("alert-severity"),
                value: filters["alert-severity"],
                options: [
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Critical,
                        label: t('Critical')
                    },
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Warning,
                        label: t('Warning')
                    },
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.Info,
                        label: t('Info')
                    },
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertSeverity.None,
                        label: t('None')
                    }
                ],
                ouiaId: 'RuleSeverityFilter'
            },
            {
                filterId: "alert-source",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_27__.TableFilterOption.CHECKBOX,
                title: t('Source'),
                placeholder: t('Filter by Source'),
                onChange: onFiltersChange("alert-source"),
                value: filters["alert-source"],
                options: [
                    {
                        value: _shared_types_types__WEBPACK_IMPORTED_MODULE_7__.AlertSource.Platform,
                        label: t('Platform')
                    },
                    {
                        value: _shared_types_types__WEBPACK_IMPORTED_MODULE_7__.AlertSource.User,
                        label: t('User')
                    },
                    ...additionalRuleSourceLabels
                ],
                ouiaId: 'RuleSourceFilter'
            },
            {
                filterId: "label",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_27__.TableFilterOption.LABEL,
                title: t('Label'),
                placeholder: t('Filter by Label'),
                onChange: onFiltersChange("label"),
                value: filters["label"],
                labelPath: 'labels',
                data: rules
            }
        ];
        return filtersVals;
    }, [
        filters,
        t,
        onFiltersChange,
        additionalRuleSourceLabels,
        rules
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.DocumentTitle, {
                children: t('Alerting')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_10__.PageSection, {
                hasBodyWrapper: false,
                type: "subnav",
                children: [
                    silences?.loadError && !rulesAlertLoading?.loadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.SilencesNotLoadedWarning, {
                        silencesLoadError: silences.loadError
                    }),
                    loaded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_data_view_dist_dynamic_DataView__WEBPACK_IMPORTED_MODULE_13__["default"], {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableToolbar__WEBPACK_IMPORTED_MODULE_28__.TableToolbar, {
                                clearAllFilters: clearAllFilters,
                                filters: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_27__.TableFilters, {
                                    activeAttributeMenu: activeAttributeMenu,
                                    setActiveAttributeMenu: setActiveAttributeMenu,
                                    filterItems: filterItems,
                                    children: filterItems.map((filterItem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_27__.TableFilter, {
                                            ...filterItem,
                                            showToolbarItem: filterItem.title === activeAttributeMenu
                                        }, `table-filter-${filterItem.filterId}`))
                                }),
                                pagination: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_26__.TablePagination, {
                                    itemCount: sortedRuleRows?.length,
                                    variant: _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_11__.PaginationVariant.top,
                                    ...pagination
                                })
                            }),
                            selectedPageOfRules?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                        "aria-label": t('Alert Rules Table'),
                                        columns: columns,
                                        rows: selectedPageOfRules
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                        style: {
                                            paddingTop: '16px'
                                        },
                                        pagination: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_26__.TablePagination, {
                                            itemCount: sortedRuleRows?.length,
                                            variant: _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_11__.PaginationVariant.bottom,
                                            ...pagination
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    loaded && selectedPageOfRules?.length === 0 && !loadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_21__.EmptyBox, {
                        customMessage: t('No alerting rules found')
                    }),
                    !loaded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_22__.LoadingBox, {})
                ]
            })
        ]
    });
};
const AlertRulesPageWithFallback = (0,_shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_20__["default"])(AlertRulesPage_);
const StateCounts = ({ alerts })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)("plugin__monitoring-plugin");
    const counts = lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](alerts, 'state');
    const states = [
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Firing,
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Pending,
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced
    ].filter((s)=>counts[s] > 0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: states.map((s)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.AlertStateIcon, {
                        state: s
                    }),
                    " ",
                    counts[s],
                    " ",
                    (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.getAlertStateKey)(s, t)
                ]
            }, s))
    });
};
const sortRules = (data, sortBy, direction)=>{
    if (!sortBy || !direction) {
        return data;
    }
    if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.rowFilter)("name")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__.localeCompareSort)(a.name, b.name, direction));
    } else if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.rowFilter)("alert-severity")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__.directedSort)((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__.severitySort)(a, b), direction));
    } else if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.rowFilter)("alert-state")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__.directedSort)((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__.alertingRuleStateSort)(a, b), direction));
    } else if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.rowFilter)("alert-source")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__.localeCompareSort)((0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.alertingRuleSource)(a), (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_19__.alertingRuleSource)(b), direction));
    }
    return data;
};
const MpCmoAlertRulesPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_17__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-plugin',
            prometheus: 'cmo'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertRulesPageWithFallback, {})
    });
};
const McpAcmAlertRulesPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_17__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-console-plugin',
            prometheus: 'acm'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertRulesPageWithFallback, {})
    });
};


/***/ },

/***/ "./features/alerts/pages/alert-rules-page/filter-rules.ts"
/*!****************************************************************!*\
  !*** ./features/alerts/pages/alert-rules-page/filter-rules.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterRules: () => (/* binding */ filterRules),
/* harmony export */   ruleHasAlertState: () => (/* binding */ ruleHasAlertState)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/some.js");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AlertRulesPage */ "./features/alerts/pages/alert-rules-page/AlertRulesPage.tsx");
/* harmony import */ var _components_AlertUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");





const filterRules = (rules, selectedFilters)=>{
    if (!rules) {
        return [];
    }
    /**
   * Filters alerts based on tenancy:
   * - with tenancy: alerts are automatically pre-filtered.
   * - without tenancy (admin): filters by selected namespace for UX consistency.
   * - "All Projects": returns all alerts, including those without a namespace label.
   */ return rules.filter((rule)=>{
        // For each selectable filter, first check if it is set. If it isn't then we don't
        // filter
        if (selectedFilters[_AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__.AlertRulesFilterOptions.NAME] && !(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_3__.fuzzyCaseInsensitive)(selectedFilters[_AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__.AlertRulesFilterOptions.NAME], rule?.name)) {
            return false;
        }
        if (selectedFilters[_AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__.AlertRulesFilterOptions.STATE]?.length > 0 && !selectedFilters[_AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__.AlertRulesFilterOptions.STATE].some((state)=>ruleHasAlertState(rule, state))) {
            return false;
        }
        if (selectedFilters[_AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__.AlertRulesFilterOptions.SEVERITY]?.length > 0 && !selectedFilters[_AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__.AlertRulesFilterOptions.SEVERITY].includes(rule?.labels?.severity)) {
            return false;
        }
        if (selectedFilters[_AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__.AlertRulesFilterOptions.SOURCE]?.length > 0 && !selectedFilters[_AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__.AlertRulesFilterOptions.SOURCE].includes((0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_5__.alertingRuleSource)(rule))) {
            return false;
        }
        if (selectedFilters[_AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__.AlertRulesFilterOptions.LABEL]?.length) {
            const labelMatchers = selectedFilters[_AlertRulesPage__WEBPACK_IMPORTED_MODULE_4__.AlertRulesFilterOptions.LABEL].split(',').map((m)=>m.trim()).filter(Boolean);
            for (const labelMatcher of labelMatchers){
                const keyValue = labelMatcher.split('=').map((s)=>s.trim());
                if (keyValue.length !== 2) {
                    return false;
                }
                const [key, value] = keyValue;
                if (rule.labels?.[key] !== value) {
                    return false;
                }
            }
        }
        return true;
    });
};
const ruleHasAlertState = (rule, state)=>state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.AlertStates.NotFiring ? (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(rule.alerts) : (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(rule.alerts, {
        state
    });


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


/***/ }

}]);
//# sourceMappingURL=CmoAlertRulesPage-chunk.js.map