"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["exposed-AlertsDetailsPage"],{

/***/ "./features/alerts/components/SilencedByTable.tsx"
/*!********************************************************!*\
  !*** ./features/alerts/components/SilencedByTable.tsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SilencedByList: () => (/* binding */ SilencedByList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewTable */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewTable/@patternfly/react-data-view/dist/dynamic/DataViewTable");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/@patternfly/react-table/dist/dynamic/components/Table");
/* harmony import */ var _components_SilencesUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SilencesUtils */ "./features/alerts/components/SilencesUtils.tsx");
/* harmony import */ var _shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _components_AlertUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_spacer_xs.js");


















const SilencedByList = ({ silences })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_5__.usePerspective)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_6__.useMonitoringNamespace)();
    const [isModalOpen, , setModalOpen, setModalClosed] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_12__.useBoolean)(false);
    const [silence, setSilence] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const editSilence = (event, rowIndex)=>{
        navigate((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_5__.getEditSilenceAlertUrl)(perspective, silences.at(rowIndex)?.id, namespace));
    };
    const rowActions = (silence)=>{
        if (silence.status.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.SilenceStates.Expired) {
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
                onClick: (event, rowIndex)=>{
                    setSilence(silences.at(rowIndex));
                    setModalOpen();
                }
            }
        ];
    };
    const rows = silences.map((silence)=>[
            {
                cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.Flex, {
                            spaceItems: {
                                default: 'spaceItemsNone'
                            },
                            flexWrap: {
                                default: 'nowrap'
                            },
                            style: {
                                paddingBottom: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_15__.t_global_spacer_xs.var
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.ResourceIcon, {
                                        kind: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_13__.SilenceResource.kind
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                        "data-test-id": "silence-resource-link",
                                        title: silence.id,
                                        to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_5__.getSilenceAlertUrl)(perspective, silence.id, namespace),
                                        children: silence.name
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SilencesUtils__WEBPACK_IMPORTED_MODULE_11__.SilenceMatchersList, {
                            silence: silence
                        })
                    ]
                }),
                props: {
                    width: 40
                }
            },
            {
                cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_14__.SeverityCounts, {
                    alerts: silence.firingAlerts
                }),
                props: {
                    width: 15
                }
            },
            {
                cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.Stack, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.StackItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SilencesUtils__WEBPACK_IMPORTED_MODULE_11__.SilenceState, {
                                silence: silence
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_9__.StackItem, {
                            children: [
                                silence.status.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.SilenceStates.Pending && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_14__.StateTimestamp, {
                                    text: t('Starts'),
                                    timestamp: silence.startsAt
                                }),
                                silence.status.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.SilenceStates.Active && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_14__.StateTimestamp, {
                                    text: t('Ends'),
                                    timestamp: silence.endsAt
                                }),
                                silence.status.state === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_2__.SilenceStates.Expired && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_14__.StateTimestamp, {
                                    text: t('Expired'),
                                    timestamp: silence.endsAt
                                })
                            ]
                        })
                    ]
                }),
                props: {
                    width: 20
                }
            },
            {
                cell: silence.createdBy || '-',
                props: {
                    width: 15
                }
            },
            {
                cell: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_10__.ActionsColumn, {
                    items: rowActions(silence)
                }),
                props: {
                    isActionCell: true
                }
            }
        ]);
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            {
                id: 'name',
                cell: t('Name'),
                props: {
                    width: 40
                }
            },
            {
                id: 'firingAlerts',
                cell: t('Firing alerts'),
                props: {
                    width: 15
                }
            },
            {
                id: 'state',
                cell: t('State'),
                props: {
                    width: 20
                }
            },
            {
                id: 'createdBy',
                cell: t('Creator'),
                props: {
                    width: 15
                }
            }
        ], [
        t
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewTable__WEBPACK_IMPORTED_MODULE_7__.DataViewTable, {
                "aria-label": "Silenced By Table",
                ouiaId: "SilencedByTable",
                columns: columns,
                rows: rows
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SilencesUtils__WEBPACK_IMPORTED_MODULE_11__.ExpireSilenceModal, {
                isOpen: isModalOpen,
                setClosed: setModalClosed,
                silenceID: silence?.id
            })
        ]
    });
};


/***/ },

/***/ "./features/alerts/pages/AlertsDetailsPage.tsx"
/*!*****************************************************!*\
  !*** ./features/alerts/pages/AlertsDetailsPage.tsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   McpAcmAlertsDetailsPage: () => (/* binding */ McpAcmAlertsDetailsPage),
/* harmony export */   MpCmoAlertsDetailsPage: () => (/* binding */ MpCmoAlertsDetailsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/forEach.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/escapeRegExp.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/filter.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/flatMap.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isMatch.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isString.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/size.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/startCase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_console_utils_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/console/utils/link */ "./shared/console/utils/link.tsx");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/contexts/MonitoringContext */ "./shared/contexts/MonitoringContext.tsx");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Breadcrumb */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Breadcrumb/@patternfly/react-core/dist/dynamic/components/Breadcrumb");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/DescriptionList */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/DescriptionList/@patternfly/react-core/dist/dynamic/components/DescriptionList");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Divider */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Divider/@patternfly/react-core/dist/dynamic/components/Divider");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Grid */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Grid/@patternfly/react-core/dist/dynamic/layouts/Grid");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Popover__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Popover */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Popover/@patternfly/react-core/dist/dynamic/components/Popover");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Split */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Split/@patternfly/react-core/dist/dynamic/layouts/Split");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Toolbar */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Toolbar/@patternfly/react-core/dist/dynamic/components/Toolbar");
/* harmony import */ var _shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../shared/console/console-shared/error/fallbacks/withFallback */ "./shared/console/console-shared/error/fallbacks/withFallback.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_status_StatusBox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/status/StatusBox */ "./shared/console/console-shared/src/components/status/StatusBox.tsx");
/* harmony import */ var _shared_console_models__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../shared/console/models */ "./shared/console/models/index.ts");
/* harmony import */ var _shared_components_labels__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/components/labels */ "./shared/components/labels.tsx");
/* harmony import */ var _metrics_pages_MetricsPage__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../metrics/pages/MetricsPage */ "./features/metrics/pages/MetricsPage.tsx");
/* harmony import */ var _components_SilencedByTable__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../components/SilencedByTable */ "./features/alerts/components/SilencedByTable.tsx");
/* harmony import */ var _components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../shared/hooks/useAlerts */ "./shared/hooks/useAlerts.ts");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");















































const AlertsDetailsPage_ = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)("plugin__monitoring-plugin");
    const params = (0,react_router__WEBPACK_IMPORTED_MODULE_15__.useParams)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_15__.useNavigate)();
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_41__.useMonitoring)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_18__.useMonitoringNamespace)();
    const [queryParams] = (0,react_router__WEBPACK_IMPORTED_MODULE_15__.useSearchParams)();
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_17__.usePerspective)();
    const { alerts, rulesAlertLoading, silences } = (0,_shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_40__.useAlerts)();
    const hideGraphs = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)((state)=>!!(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_17__.getObserveState)(plugin, state).hideGraphs);
    const ruleAlerts = lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](alerts, (a)=>a.rule.id === params?.ruleID);
    const rule = ruleAlerts?.[0]?.rule;
    // Search for an alert that matches all of the labels in the URL parameters. We expect there to be
    // only one such alert that matches, so don't display any alert if multiple matches were found.
    const foundAlerts = lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](ruleAlerts, (a)=>lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](a.labels, Object.fromEntries(queryParams)));
    const alert = foundAlerts.length === 1 ? foundAlerts[0] : undefined;
    const state = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_19__.alertState)(alert);
    const labelsMemoKey = JSON.stringify(alert?.labels);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const labels = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(()=>alert?.labels, [
        labelsMemoKey
    ]);
    const runbookURL = alert?.annotations?.runbook_url;
    const sourceId = rule?.sourceId;
    // Load alert metrics chart from plugin
    const [alertsChartExtensions] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useResolvedExtensions)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.isAlertingRuleChart);
    const alertsChart = alertsChartExtensions.filter((extension)=>extension.properties.sourceId === sourceId).map((extension)=>extension.properties.chart);
    const AlertsChart = alertsChart?.[0];
    // Keep the default name for the admin perspective while providing specific
    // entrypoints for all other perspectives as wel
    const alertActionContextName = `alert-detail-toolbar-actions${perspective === 'admin' ? '' : '-' + perspective}`;
    const alertActionContext = {};
    alertActionContext[alertActionContextName] = {
        alert
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.DocumentTitle, {
                children: t('{{name}} details', {
                    name: labels?.alertname || _shared_utils_utils__WEBPACK_IMPORTED_MODULE_19__.AlertResource.label
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_status_StatusBox__WEBPACK_IMPORTED_MODULE_33__.StatusBox, {
                data: alert,
                label: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_19__.AlertResource.label,
                loaded: rulesAlertLoading?.loaded,
                loadError: rulesAlertLoading?.loadError,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_27__.PageGroup, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_27__.PageBreadcrumb, {
                            hasBodyWrapper: false,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_21__.Breadcrumb, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_21__.BreadcrumbItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_15__.Link, {
                                            to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_17__.getAlertsUrl)(perspective, namespace),
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_39__.DataTestIDs.Breadcrumb,
                                            children: t('Alerts')
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_21__.BreadcrumbItem, {
                                        isActive: true,
                                        children: t('Alert details')
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_27__.PageSection, {
                            hasBodyWrapper: false,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_29__.Split, {
                                hasGutter: true,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_29__.SplitItem, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_25__.Flex, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_25__.FlexItem, {
                                                        alignSelf: {
                                                            default: 'alignSelfCenter'
                                                        },
                                                        spacer: {
                                                            default: 'spacerNone'
                                                        },
                                                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_39__.DataTestIDs.AlertResourceIcon,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceIcon, {
                                                            kind: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_19__.AlertResource.kind
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_25__.FlexItem, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_30__.Title, {
                                                            headingLevel: "h1",
                                                            children: rule?.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_25__.FlexItem, {
                                                        alignSelf: {
                                                            default: 'alignSelfCenter'
                                                        },
                                                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_39__.DataTestIDs.SeverityBadgeHeader,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.SeverityBadge, {
                                                            severity: rule?.labels?.severity
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderAlertMessage, {
                                                alert: alert,
                                                rule: rule
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_29__.SplitItem, {
                                        isFilled: true
                                    }),
                                    state !== _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_29__.SplitItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_22__.Button, {
                                            onClick: ()=>navigate((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_17__.getNewSilenceAlertUrl)(perspective, alert, namespace)),
                                            variant: "primary",
                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_39__.DataTestIDs.SilenceButton,
                                            children: t('Silence alert')
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_24__.Divider, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_27__.PageSection, {
                            hasBodyWrapper: false,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_31__.Toolbar, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_31__.ToolbarContent, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_31__.ToolbarItem, {
                                                variant: "label",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_30__.Title, {
                                                    headingLevel: "h2",
                                                    children: t('Alert details')
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_31__.ToolbarGroup, {
                                                align: {
                                                    default: 'alignEnd'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ActionServiceProvider, {
                                                        context: alertActionContext,
                                                        children: ({ actions, loaded })=>loaded ? actions.map((action)=>{
                                                                if ((0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.isActionWithHref)(action)) {
                                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_31__.ToolbarItem, {
                                                                        gap: {
                                                                            default: 'gapNone'
                                                                        },
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_15__.Link, {
                                                                            to: action.cta.href,
                                                                            children: action.label
                                                                        })
                                                                    }, action.id);
                                                                } else if ((0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.isActionWithCallback)(action)) {
                                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_31__.ToolbarItem, {
                                                                        gap: {
                                                                            default: 'gapNone'
                                                                        },
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_22__.Button, {
                                                                            variant: "link",
                                                                            onClick: action.cta,
                                                                            children: action.label
                                                                        })
                                                                    }, action.id);
                                                                }
                                                                return null;
                                                            }) : null
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Toolbar__WEBPACK_IMPORTED_MODULE_31__.ToolbarItem, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_metrics_pages_MetricsPage__WEBPACK_IMPORTED_MODULE_36__.ToggleGraph, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_26__.Grid, {
                                    sm: 12,
                                    md: 6,
                                    hasGutter: true,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_26__.GridItem, {
                                            span: 12,
                                            children: !sourceId || sourceId === 'prometheus' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.Graph, {
                                                filterLabels: labels,
                                                query: rule?.query,
                                                ruleDuration: rule?.duration
                                            }) : AlertsChart && !hideGraphs ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertsChart, {
                                                rule: rule
                                            }) : null
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_26__.GridItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionList, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTerm, {
                                                                children: t('Name')
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                                                                children: [
                                                                    " ",
                                                                    labels?.alertname,
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTermHelpText, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Popover__WEBPACK_IMPORTED_MODULE_28__.Popover, {
                                                                    headerContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        children: t('Severity')
                                                                    }),
                                                                    bodyContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.SeverityHelp, {}),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTermHelpTextButton, {
                                                                        children: t('Severity')
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                                                                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_39__.DataTestIDs.SeverityBadge,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.SeverityBadge, {
                                                                    severity: labels?.severity
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    alert?.annotations?.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTerm, {
                                                                children: t('Description')
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertMessage, {
                                                                    alertText: alert.annotations.description,
                                                                    labels: labels,
                                                                    template: rule?.annotations?.description
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    alert?.annotations?.summary && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTerm, {
                                                                children: t('Summary')
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                                                                children: alert.annotations.summary
                                                            })
                                                        ]
                                                    }),
                                                    alert?.annotations?.message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTerm, {
                                                                children: t('Message')
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertMessage, {
                                                                    alertText: alert.annotations.message,
                                                                    labels: labels,
                                                                    template: rule?.annotations?.message
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    runbookURL && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTerm, {
                                                                children: t('Runbook')
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_utils_link__WEBPACK_IMPORTED_MODULE_16__.ExternalLink, {
                                                                    href: runbookURL,
                                                                    text: runbookURL
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_26__.GridItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionList, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTermHelpText, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Popover__WEBPACK_IMPORTED_MODULE_28__.Popover, {
                                                                    headerContent: t('Source'),
                                                                    bodyContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.SourceHelp, {}),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTermHelpTextButton, {
                                                                        children: t('Source')
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                                                                children: alert && (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.getSourceKey)(lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"]((0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.alertSource)(alert)), t)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTermHelpText, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Popover__WEBPACK_IMPORTED_MODULE_28__.Popover, {
                                                                    headerContent: t('State'),
                                                                    bodyContent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertStateHelp, {}),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTermHelpTextButton, {
                                                                        children: t('State')
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.AlertState, {
                                                                        state: state
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.AlertStateDescription, {
                                                                        alert: alert
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_26__.GridItem, {
                                            span: 12,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionList, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTerm, {
                                                            children: t('Labels')
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_labels__WEBPACK_IMPORTED_MODULE_35__.Labels, {
                                                                labels: labels
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_26__.GridItem, {
                                            span: 12,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionList, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTerm, {
                                                            children: t('Alerting rule')
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_25__.Flex, {
                                                                spaceItems: {
                                                                    default: 'spaceItemsNone'
                                                                },
                                                                flexWrap: {
                                                                    default: 'nowrap'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_25__.FlexItem, {
                                                                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_39__.DataTestIDs.AlertingRuleResourceIcon,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceIcon, {
                                                                            kind: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_19__.RuleResource.kind
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_25__.FlexItem, {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_15__.Link, {
                                                                            to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_17__.getRuleUrl)(perspective, rule, namespace),
                                                                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_39__.DataTestIDs.AlertingRuleResourceLink,
                                                                            children: lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](rule, 'name')
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        silences?.loaded && !lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](alert?.silencedBy) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_24__.Divider, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_27__.PageSection, {
                                    hasBodyWrapper: false,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_30__.Title, {
                                            headingLevel: "h2",
                                            children: t('Silenced by')
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SilencedByTable__WEBPACK_IMPORTED_MODULE_37__.SilencedByList, {
                                            silences: alert?.silencedBy
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
const AlertsDetailsPageWithFallback = (0,_shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_32__["default"])(AlertsDetailsPage_);
const MpCmoAlertsDetailsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_20__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-plugin',
            prometheus: 'cmo'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertsDetailsPageWithFallback, {})
    });
};
const McpAcmAlertsDetailsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_20__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-console-plugin',
            prometheus: 'acm'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertsDetailsPageWithFallback, {})
    });
};
const HeaderAlertMessage = ({ alert, rule })=>{
    const annotation = alert.annotations.description ? 'description' : 'message';
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertMessage, {
        alertText: alert.annotations[annotation],
        labels: alert.labels,
        template: rule.annotations[annotation]
    });
};
const AlertMessage = ({ alertText, labels, template })=>{
    if (lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](alertText)) {
        return null;
    }
    let messageParts = [
        alertText
    ];
    // Go through each recognized resource type and replace any resource names that exist in alertText
    // with a link to the resource's details page
    lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](alertMessageResources, (model, label)=>{
        const labelValue = labels[label];
        if (labelValue && !(model.namespaced && lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](labels.namespace))) {
            const tagCount = matchCount(template, `\\{\\{ *\\$labels\\.${label} *\\}\\}`);
            const resourceNameCount = matchCount(alertText, lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](labelValue));
            // Don't do the replacement unless the counts match. This avoids overwriting the wrong string
            // if labelValue happens to appear elsewhere in alertText
            if (tagCount > 0 && tagCount === resourceNameCount) {
                const link = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceLink, {
                    inline: true,
                    kind: model.kind,
                    name: labelValue,
                    namespace: model.namespaced ? labels.namespace : undefined,
                    className: "pf-v6-u-mx-xs"
                }, model.kind);
                messageParts = lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](messageParts, (part)=>{
                    if (lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"](part) && part.indexOf(labelValue) !== -1) {
                        // `part` contains at least one instance of the resource name, so replace each instance
                        // with the link to the resource. Since the link is a component, we can't simply do a
                        // string substitution. Instead, create an array that contains each of the string parts
                        // and the resource links in the correct order.
                        const splitParts = part.split(labelValue);
                        return lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](splitParts, (p)=>[
                                p,
                                link
                            ]).slice(0, -1);
                    }
                    return [
                        part
                    ];
                });
            }
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_utils_link__WEBPACK_IMPORTED_MODULE_16__.LinkifyExternal, {
            children: messageParts
        })
    });
};
const alertMessageResources = {
    container: _shared_console_models__WEBPACK_IMPORTED_MODULE_34__.ContainerModel,
    daemonset: _shared_console_models__WEBPACK_IMPORTED_MODULE_34__.DaemonSetModel,
    deployment: _shared_console_models__WEBPACK_IMPORTED_MODULE_34__.DeploymentModel,
    job: _shared_console_models__WEBPACK_IMPORTED_MODULE_34__.JobModel,
    namespace: _shared_console_models__WEBPACK_IMPORTED_MODULE_34__.NamespaceModel,
    node: _shared_console_models__WEBPACK_IMPORTED_MODULE_34__.NodeModel,
    pod: _shared_console_models__WEBPACK_IMPORTED_MODULE_34__.PodModel,
    statefulset: _shared_console_models__WEBPACK_IMPORTED_MODULE_34__.StatefulSetModel
};
const matchCount = (haystack, regExpString)=>lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"](haystack.match(new RegExp(regExpString, 'g')));
const AlertStateHelp = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionList, {
        isCompact: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTerm, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.AlertStateIcon, {
                                state: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Pending
                            }),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                                children: t('Pending: ')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                        children: t('The alert is active but is waiting for the duration that is specified in the alerting rule before it fires.')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTerm, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.AlertStateIcon, {
                                state: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Firing
                            }),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                                children: t('Firing: ')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                        children: t('The alert is firing because the alert condition is true and the optional `for` duration has passed. The alert will continue to fire as long as the condition remains true.')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListGroup, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListTerm, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_38__.AlertStateIcon, {
                                state: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced
                            }),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                                children: t('Silenced: ')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DescriptionList__WEBPACK_IMPORTED_MODULE_23__.DescriptionListDescription, {
                        children: t('The alert is now silenced for a defined time period. Silences temporarily mute alerts based on a set of label selectors that you define. Notifications will not be sent for alerts that match all the listed values or regular expressions.')
                    })
                ]
            })
        ]
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

/***/ "./shared/console/imgs/restricted-sign.svg"
/*!*************************************************!*\
  !*** ./shared/console/imgs/restricted-sign.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/restricted-sign..svg";

/***/ }

}]);
//# sourceMappingURL=exposed-AlertsDetailsPage-chunk.js.map