"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["CmoSilencesPage"],{

/***/ "./features/alerts/pages/silences-page/SilencesPage.tsx"
/*!**************************************************************!*\
  !*** ./features/alerts/pages/silences-page/SilencesPage.tsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   McpAcmSilencesPage: () => (/* binding */ McpAcmSilencesPage),
/* harmony export */   MpCmoSilencesPage: () => (/* binding */ MpCmoSilencesPage),
/* harmony export */   SilenceFilterOptions: () => (/* binding */ SilenceFilterOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_component_groups_dist_dynamic_BulkSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-component-groups/dist/dynamic/BulkSelect */ "../node_modules/@patternfly/react-component-groups/dist/esm/BulkSelect/index.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Pagination */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Pagination/@patternfly/react-core/dist/dynamic/components/Pagination");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataView */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataView/@patternfly/react-data-view/dist/dynamic/DataView");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewTable */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewTable/@patternfly/react-data-view/dist/dynamic/DataViewTable");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewToolbar */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewToolbar/@patternfly/react-data-view/dist/dynamic/DataViewToolbar");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/Hooks */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/Hooks/@patternfly/react-data-view/dist/dynamic/Hooks");
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/@patternfly/react-table/dist/dynamic/components/Table");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_xs.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/contexts/MonitoringContext */ "./shared/contexts/MonitoringContext.tsx");
/* harmony import */ var _shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/hooks/useAlerts */ "./shared/hooks/useAlerts.ts");
/* harmony import */ var _shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/console/console-shared/error/fallbacks/withFallback */ "./shared/console/console-shared/error/fallbacks/withFallback.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/console/console-shared/src/components/empty-state/EmptyBox */ "./shared/console/console-shared/src/components/empty-state/EmptyBox.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/console/console-shared/src/components/loading/LoadingBox */ "./shared/console/console-shared/src/components/loading/LoadingBox.tsx");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _shared_hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/hooks/useDeepMemo */ "./shared/hooks/useDeepMemo.ts");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../shared/components/table/sort-utils */ "./shared/components/table/sort-utils.ts");
/* harmony import */ var _shared_components_table_useTableColumns__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../shared/components/table/useTableColumns */ "./shared/components/table/useTableColumns.ts");
/* harmony import */ var _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../shared/components/table/table-pagination */ "./shared/components/table/table-pagination.tsx");
/* harmony import */ var _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../shared/components/table/TableFilters */ "./shared/components/table/TableFilters.tsx");
/* harmony import */ var _shared_components_table_TableToolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../shared/components/table/TableToolbar */ "./shared/components/table/TableToolbar.tsx");
/* harmony import */ var _shared_components_table_useTableFilters__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../shared/components/table/useTableFilters */ "./shared/components/table/useTableFilters.ts");
/* harmony import */ var _shared_components_table_useTablePagination__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../shared/components/table/useTablePagination */ "./shared/components/table/useTablePagination.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _filter_silences__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./filter-silences */ "./features/alerts/pages/silences-page/filter-silences.ts");
/* harmony import */ var _components_SilencesUtils__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../components/SilencesUtils */ "./features/alerts/components/SilencesUtils.tsx");










































var SilenceFilterOptions = /*#__PURE__*/ function(SilenceFilterOptions) {
    SilenceFilterOptions["NAME"] = "name";
    SilenceFilterOptions["STATE"] = "silence-state";
    SilenceFilterOptions["CLUSTER"] = "silence-cluster";
    return SilenceFilterOptions;
}({});
const SilencesPage_ = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_17__.useTranslation)("plugin__monitoring-plugin");
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_27__.useMonitoringNamespace)();
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.usePerspective)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_18__.useNavigate)();
    const [activeAttributeMenu, setActiveAttributeMenu] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(t('Name'));
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)();
    const [modalState, setModalState] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)({
        modalOpen: false,
        silenceID: ''
    });
    const setModalClosed = ()=>{
        setModalState({
            modalOpen: false,
            silenceID: ''
        });
    };
    const initialFilters = (0,_shared_hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_26__.useDeepMemo)(()=>{
        const filters = {
            ["name"]: '',
            ["silence-state"]: [
                _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active,
                _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Pending
            ]
        };
        if (perspective === 'acm') {
            filters["silence-cluster"] = [];
        }
        return filters;
    }, [
        perspective,
        namespace
    ]);
    const rowActions = (0,react__WEBPACK_IMPORTED_MODULE_16__.useCallback)((silence)=>{
        const editSilence = ()=>{
            navigate((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.getEditSilenceAlertUrl)(perspective, silence.id, namespace));
        };
        if ((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__.silenceState)(silence) === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Expired) {
            return [
                {
                    title: t('Recreate silence'),
                    onClick: editSilence
                }
            ];
        }
        return [
            {
                title: t('Edit silence'),
                onClick: editSilence
            },
            {
                title: t('Expire silence'),
                onClick: ()=>setModalState({
                        modalOpen: true,
                        silenceID: silence.id
                    })
            }
        ];
    }, [
        t,
        navigate,
        namespace,
        perspective
    ]);
    // KNOWN ISSUE: the useDataViewPagination, useDataViewFilters, and useDataViewSort functions
    // do not work together for URL initialization, so only the search parameters for the last
    // function will be set when initially loading the page
    // with no search parameters. Future changes are reflected
    const pagination = (0,_shared_components_table_useTablePagination__WEBPACK_IMPORTED_MODULE_35__.useTablePagination)({
        perPage: _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_31__.ITEMS_PER_PAGE[0]
    });
    const { filters, onSetFilters, clearAllFilters } = (0,_shared_components_table_useTableFilters__WEBPACK_IMPORTED_MODULE_34__.useTableFilters)({
        initialFilters
    });
    const { sortBy, direction, onSort } = (0,_patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_12__.useDataViewSort)({
        initialSort: {
            sortBy: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)("name"),
            direction: 'asc'
        }
    });
    const selection = (0,_patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_12__.useDataViewSelection)({
        matchOption: (a, b)=>a?.silence?.name === b?.silence?.name
    });
    const { selected, onSelect, setSelected } = selection;
    const columnKeys = (0,react__WEBPACK_IMPORTED_MODULE_16__.useMemo)(()=>{
        const keys = [
            {
                label: t('Name'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)("name")
            },
            {
                label: t('Firing alerts'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)('firing-alerts'),
                props: {
                    width: 10
                }
            },
            {
                label: t('State'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)("silence-state")
            },
            {
                label: t('Creator'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)('createdBy'),
                props: {
                    width: 10
                }
            }
        ];
        if (perspective === 'acm') {
            keys.push({
                label: t('Cluster'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)("silence-cluster")
            });
        }
        return keys;
    }, [
        t,
        perspective
    ]);
    const columns = (0,_shared_components_table_useTableColumns__WEBPACK_IMPORTED_MODULE_30__.useTableColumns)(columnKeys, sortBy, direction, onSort);
    (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(()=>{
        // When changing filters change back to being on page 1
        pagination.onSetPage(undefined, 1);
    }, [
        filters
    ]);
    // eslint-disable-line react-hooks/exhaustive-deps
    const { page, perPage } = pagination;
    const { silences, silenceClusterLabels } = (0,_shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_20__.useAlerts)();
    /**
   * Filters silences based on the selected namespace.
   * "All Projects": returns all silences, including those without a namespace matcher.
   */ const namespacedSilences = (0,react__WEBPACK_IMPORTED_MODULE_16__.useMemo)(()=>{
        // TODO convert to a filterSilences function
        const filteredSilences = (0,_filter_silences__WEBPACK_IMPORTED_MODULE_38__.filterSilences)(silences?.data ?? [], filters, namespace, perspective);
        const sortedSilences = sortSilences(filteredSilences, sortBy, direction, silenceClusterLabels);
        const mappedSilences = sortedSilences.map((silence, index)=>{
            return {
                row: [
                    {
                        cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                                    spaceItems: {
                                        default: 'spaceItemsNone'
                                    },
                                    flexWrap: {
                                        default: 'nowrap'
                                    },
                                    style: {
                                        paddingBottom: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_14__.t_global_spacer_xs.var
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_4__.FlexItem, {
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_24__.DataTestIDs.SilenceResourceIcon,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceIcon, {
                                                kind: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__.SilenceResource.kind
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_4__.FlexItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_18__.Link, {
                                                "data-test-id": "silence-resource-link",
                                                title: silence.id,
                                                to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.getSilenceAlertUrl)(perspective, silence.id, namespace),
                                                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_24__.DataTestIDs.SilenceResourceLink,
                                                children: silence.name
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SilencesUtils__WEBPACK_IMPORTED_MODULE_39__.SilenceMatchersList, {
                                    silence: silence
                                })
                            ]
                        })
                    },
                    {
                        cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.SeverityCounts, {
                            alerts: silence.firingAlerts
                        })
                    },
                    {
                        cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__.Stack, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__.StackItem, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SilencesUtils__WEBPACK_IMPORTED_MODULE_39__.SilenceState, {
                                        silence: silence
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_8__.StackItem, {
                                    children: [
                                        (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__.silenceState)(silence) === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Pending && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.StateTimestamp, {
                                            text: t('Starts'),
                                            timestamp: silence.startsAt
                                        }),
                                        (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__.silenceState)(silence) === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.StateTimestamp, {
                                            text: t('Ends'),
                                            timestamp: silence.endsAt
                                        }),
                                        (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__.silenceState)(silence) === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Expired && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.StateTimestamp, {
                                            text: t('Expired'),
                                            timestamp: silence.endsAt
                                        })
                                    ]
                                })
                            ]
                        })
                    },
                    silence.createdBy || '',
                    ...perspective === 'acm' ? [
                        silence.matchers.find((label)=>label.name === 'cluster')?.value ?? ''
                    ] : [],
                    {
                        cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_13__.ActionsColumn, {
                            items: rowActions(silence)
                        }),
                        props: {
                            isActionCell: true
                        }
                    }
                ],
                silence: silence,
                index
            };
        });
        return mappedSilences;
    }, [
        namespace,
        silences,
        perspective,
        t,
        rowActions,
        sortBy,
        direction,
        silenceClusterLabels,
        filters
    ]);
    const handleBulkSelect = (value)=>{
        if (value === _patternfly_react_component_groups_dist_dynamic_BulkSelect__WEBPACK_IMPORTED_MODULE_2__.BulkSelectValue.none) {
            onSelect(false);
        }
        if (value === _patternfly_react_component_groups_dist_dynamic_BulkSelect__WEBPACK_IMPORTED_MODULE_2__.BulkSelectValue.all) {
            onSelect(true, namespacedSilences);
        }
    };
    const selectedPageOfSilences = (0,react__WEBPACK_IMPORTED_MODULE_16__.useMemo)(()=>namespacedSilences.slice((page - 1) * perPage, (page - 1) * perPage + perPage), [
        namespacedSilences,
        page,
        perPage
    ]);
    const loaded = !!silences?.loaded;
    const loadError = silences?.loadError ? silences.loadError : undefined;
    const onFiltersChange = (0,react__WEBPACK_IMPORTED_MODULE_16__.useMemo)(()=>(filterName)=>{
            return (_e, val)=>{
                onSetFilters({
                    [filterName]: val
                });
            };
        }, [
        onSetFilters
    ]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filterItems = (0,react__WEBPACK_IMPORTED_MODULE_16__.useMemo)(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filtersVals = [
            {
                filterId: "name",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_32__.TableFilterOption.TEXT,
                title: t('Name'),
                placeholder: t('Filter by Name'),
                onChange: onFiltersChange("name"),
                value: filters.name,
                ouiaId: 'SilenceNameFilter'
            },
            {
                filterId: "silence-state",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_32__.TableFilterOption.CHECKBOX,
                title: t('Silence State'),
                placeholder: t('Filter by State'),
                onChange: onFiltersChange("silence-state"),
                value: filters["silence-state"],
                options: [
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active,
                        label: t('Active')
                    },
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Pending,
                        label: t('Pending')
                    },
                    {
                        value: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Expired,
                        label: t('Expired')
                    }
                ],
                ouiaId: 'SilenceStateFilter'
            }
        ];
        if (perspective === 'acm') {
            filtersVals.push({
                filterId: "silence-cluster",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_32__.TableFilterOption.CHECKBOX,
                title: t('Cluster'),
                placeholder: t('Filter by Cluster'),
                onChange: onFiltersChange("silence-cluster"),
                value: filters["silence-cluster"],
                options: silenceClusterLabels.map((clusterName)=>({
                        value: clusterName,
                        label: clusterName?.length > 50 ? clusterName.slice(0, 50) + '...' : clusterName
                    })),
                ouiaId: 'SilenceClusterFilter'
            });
        }
        return filtersVals;
    }, [
        filters,
        t,
        onFiltersChange,
        perspective,
        silenceClusterLabels
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.DocumentTitle, {
                children: t('Alerting')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_5__.PageSection, {
                hasBodyWrapper: false,
                type: "subnav",
                children: [
                    loaded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_data_view_dist_dynamic_DataView__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        selection: selection,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableToolbar__WEBPACK_IMPORTED_MODULE_33__.TableToolbar, {
                                clearAllFilters: clearAllFilters,
                                filters: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_32__.TableFilters, {
                                    activeAttributeMenu: activeAttributeMenu,
                                    setActiveAttributeMenu: setActiveAttributeMenu,
                                    filterItems: filterItems,
                                    children: filterItems.map((filterItem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_32__.TableFilter, {
                                            ...filterItem,
                                            showToolbarItem: filterItem.title === activeAttributeMenu
                                        }, `table-filter-${filterItem.filterId}`))
                                }),
                                bulkSelect: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_component_groups_dist_dynamic_BulkSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    canSelectAll: true,
                                    isDataPaginated: false,
                                    totalCount: namespacedSilences.length,
                                    selectedCount: selected.length,
                                    onSelect: handleBulkSelect
                                }),
                                actions: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CreateSilenceButton, {}, 0),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExpireAllSilencesButton, {
                                        selectedSilences: selected,
                                        setSelectedSilences: setSelected,
                                        setErrorMessage: setErrorMessage
                                    }, 1)
                                ],
                                pagination: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_31__.TablePagination, {
                                    itemCount: namespacedSilences?.length,
                                    variant: _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationVariant.top,
                                    ...pagination
                                })
                            }),
                            selectedPageOfSilences?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        "aria-label": t('Silences Table'),
                                        columns: columns,
                                        rows: selectedPageOfSilences
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        style: {
                                            paddingTop: '16px'
                                        },
                                        pagination: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_31__.TablePagination, {
                                            itemCount: namespacedSilences?.length,
                                            variant: _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationVariant.bottom,
                                            ...pagination
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    loadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_7__.Alert, {
                        isInline: true,
                        title: t('Error loading silences from Alertmanager. Alertmanager may be unavailable.'),
                        variant: "danger",
                        children: typeof silences?.loadError === 'string' ? silences?.loadError : silences?.loadError.message
                    }),
                    loaded && selectedPageOfSilences?.length === 0 && !loadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_22__.EmptyBox, {
                        customMessage: t('No silences found')
                    }),
                    errorMessage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_7__.Alert, {
                        isInline: true,
                        title: t('Error'),
                        variant: "danger",
                        children: errorMessage
                    }),
                    !loaded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_23__.LoadingBox, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SilencesUtils__WEBPACK_IMPORTED_MODULE_39__.ExpireSilenceModal, {
                isOpen: modalState.modalOpen,
                setClosed: setModalClosed,
                silenceID: modalState.silenceID
            })
        ]
    });
};
const SilencesPageWithFallback = (0,_shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_21__["default"])(SilencesPage_);
const silenceFiringAlertsOrder = (silenceA, silenceB)=>{
    const aAlerts = silenceA.firingAlerts || [];
    const bAlerts = silenceB.firingAlerts || [];
    if (aAlerts.length !== bAlerts.length) {
        return aAlerts.length - bAlerts.length;
    }
    const severitySortedA = [
        ...aAlerts
    ].sort(_shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__.severitySort);
    const severitySortedB = [
        ...bAlerts
    ].sort(_shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__.severitySort);
    const highestSeverityA = severitySortedA[0];
    const highestSeverityB = severitySortedB[0];
    if (highestSeverityA && highestSeverityB) {
        return (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__.severitySort)(highestSeverityA, highestSeverityB);
    } else if (highestSeverityA) {
        return -1;
    } else if (highestSeverityB) {
        return 1;
    }
    return new Date(silenceB.endsAt).getTime() - new Date(silenceA.endsAt).getTime();
};
const silenceStateOrder = (silenceA, silenceB)=>{
    const stateA = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__.silenceState)(silenceA);
    const stateB = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_36__.silenceState)(silenceB);
    if (stateA === stateB) {
        if (stateA === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Pending) {
            return new Date(silenceB.startsAt).getTime() - new Date(silenceA.startsAt).getTime();
        }
        return new Date(silenceB.endsAt).getTime() - new Date(silenceA.endsAt).getTime();
    }
    if (stateA === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active) {
        return -1;
    }
    if (stateB === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active) {
        return 1;
    }
    if (stateA === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Pending) {
        return -1;
    }
    if (stateB === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Pending) {
        return 1;
    }
    return 0;
};
const silenceClusterOrder = (clusters)=>{
    const sortedClusters = [
        ...clusters
    ].sort();
    return (silenceA, silenceB)=>{
        const clusterA = silenceA.matchers.find((label)=>label.name === 'cluster')?.value;
        const clusterB = silenceB.matchers.find((label)=>label.name === 'cluster')?.value;
        return sortedClusters.indexOf(clusterA) - sortedClusters.indexOf(clusterB);
    };
};
const sortSilences = (data, sortBy, direction, silenceClusterLabels)=>{
    if (!sortBy || !direction) {
        return data;
    }
    const clusterSort = silenceClusterOrder(silenceClusterLabels);
    if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)("name")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__.localeCompareSort)(a.name, b.name, direction));
    } else if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)('firing-alerts')) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__.directedSort)(silenceFiringAlertsOrder(a, b), direction));
    } else if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)("silence-state")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__.directedSort)(silenceStateOrder(a, b), direction));
    } else if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)('createdBy')) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__.localeCompareSort)(a.createdBy, b.createdBy, direction));
    } else if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_37__.rowFilter)("silence-cluster")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_29__.directedSort)(clusterSort(a, b), direction));
    }
    return data;
};
const ExpireAllSilencesButton = ({ selectedSilences, setSelectedSilences, setErrorMessage })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_17__.useTranslation)("plugin__monitoring-plugin");
    const { trigger: refetchSilencesAndAlerts } = (0,_shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_20__.useAlerts)();
    const activeAlerts = selectedSilences.filter((selectedSilence)=>selectedSilence.silence.status.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active);
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.usePerspective)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_27__.useMonitoringNamespace)();
    const [isInProgress, , setInProgress, setNotInProgress] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_25__.useBoolean)(false);
    const onClick = ()=>{
        setInProgress();
        Promise.allSettled([
            ...activeAlerts
        ].map((selectedSilence)=>_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.consoleFetchJSON.delete((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.getFetchSilenceUrl)(perspective, selectedSilence.silence.id, namespace)))).then((values)=>{
            setNotInProgress();
            setSelectedSilences([]);
            refetchSilencesAndAlerts();
            const errors = values.filter((v)=>v.status === 'rejected').map((v)=>v.reason);
            if (errors.length > 0) {
                const messages = errors.map((err)=>lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"](err, 'json.error') || err.message || 'Error expiring silence');
                setErrorMessage(messages.join(', '));
            } else {
                setErrorMessage('');
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
        isDisabled: activeAlerts.length === 0,
        isLoading: isInProgress,
        onClick: onClick,
        variant: "secondary",
        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_24__.DataTestIDs.ExpireXSilencesButton,
        children: t('Expire {{count}} silence', {
            count: activeAlerts.length
        })
    });
};
const CreateSilenceButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_16__.memo)(()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_17__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.usePerspective)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_27__.useMonitoringNamespace)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_18__.Link, {
        to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_28__.getNewSilenceUrl)(perspective, namespace),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_24__.DataTestIDs.SilenceButton,
            variant: "primary",
            children: t('Create silence')
        })
    });
});
CreateSilenceButton.displayName = 'CreateSilenceButton';
const MpCmoSilencesPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_19__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-plugin',
            prometheus: 'cmo'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SilencesPageWithFallback, {})
    });
};
const McpAcmSilencesPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_19__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-console-plugin',
            prometheus: 'acm'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SilencesPageWithFallback, {})
    });
};


/***/ },

/***/ "./features/alerts/pages/silences-page/filter-silences.ts"
/*!****************************************************************!*\
  !*** ./features/alerts/pages/silences-page/filter-silences.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterSilences: () => (/* binding */ filterSilences)
/* harmony export */ });
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _SilencesPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SilencesPage */ "./features/alerts/pages/silences-page/SilencesPage.tsx");


const filterSilences = (silences, selectedFilters, namespace, perspective)=>{
    if (!silences) {
        return [];
    }
    const shouldFilterNamespace = namespace !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__.ALL_NAMESPACES_KEY;
    /**
   * Filters alerts based on tenancy:
   * - with tenancy: alerts are automatically pre-filtered.
   * - without tenancy (admin): filters by selected namespace for UX consistency.
   * - "All Projects": returns all alerts, including those without a namespace label.
   */ return silences.filter((silence)=>{
        if (shouldFilterNamespace && !silence.matchers?.some((m)=>m.name === 'namespace' && m.value === namespace)) {
            return false;
        }
        // For each selectable filter, first check if it is set. If it isn't then we don't
        // filter
        if (selectedFilters[_SilencesPage__WEBPACK_IMPORTED_MODULE_1__.SilenceFilterOptions.NAME] && !(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__.fuzzyCaseInsensitive)(selectedFilters[_SilencesPage__WEBPACK_IMPORTED_MODULE_1__.SilenceFilterOptions.NAME], silence?.name)) {
            return false;
        }
        if (selectedFilters[_SilencesPage__WEBPACK_IMPORTED_MODULE_1__.SilenceFilterOptions.STATE].length > 0 && !selectedFilters[_SilencesPage__WEBPACK_IMPORTED_MODULE_1__.SilenceFilterOptions.STATE].includes((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__.silenceState)(silence))) {
            return false;
        }
        if (perspective === 'acm' && selectedFilters[_SilencesPage__WEBPACK_IMPORTED_MODULE_1__.SilenceFilterOptions.CLUSTER]?.length > 0 && !selectedFilters[_SilencesPage__WEBPACK_IMPORTED_MODULE_1__.SilenceFilterOptions.CLUSTER].some((filter)=>(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__.fuzzyCaseInsensitive)(filter, silence.matchers?.find((label)=>label.name === 'cluster')?.value))) {
            return false;
        }
        return true;
    });
};


/***/ },

/***/ "./shared/hooks/useDeepMemo.ts"
/*!*************************************!*\
  !*** ./shared/hooks/useDeepMemo.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDeepMemo: () => (/* binding */ useDeepMemo)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEqual.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// https://github.com/GoodDollar/useDeepMemo/blob/master/src/useDeepMemo.ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDeepCompareMemoize = (value)=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(value, ref.current)) {
        ref.current = value;
    }
    return ref.current;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDeepMemo = (factory, dependencies)=>{
    /* eslint-disable react-hooks/exhaustive-deps */ return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(factory, useDeepCompareMemoize(dependencies));
};


/***/ }

}]);
//# sourceMappingURL=CmoSilencesPage-chunk.js.map