"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["CmoAlertsPage"],{

/***/ "./features/alerts/pages/alerts-page/AggregateAlertTableRow.tsx"
/*!**********************************************************************!*\
  !*** ./features/alerts/pages/alerts-page/AggregateAlertTableRow.tsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/@patternfly/react-table/dist/dynamic/components/Table");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _AlertTableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AlertTableRow */ "./features/alerts/pages/alerts-page/AlertTableRow.tsx");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _filter_alerts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter-alerts */ "./features/alerts/pages/alerts-page/filter-alerts.ts");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Badge */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Badge/@patternfly/react-core/dist/dynamic/components/Badge");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/constants/data-test */ "./shared/constants/data-test.ts");






















const AggregateAlertTableRow = ({ aggregatedAlert, rowData: { rowIndex, selectedFilters } })=>{
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_5__.usePerspective)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_6__.useMonitoringNamespace)();
    const title = aggregatedAlert.name;
    const isACMPerspective = perspective === 'acm';
    const filteredAlerts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>(0,_filter_alerts__WEBPACK_IMPORTED_MODULE_11__.filterAlerts)(aggregatedAlert.alerts, selectedFilters, namespace, perspective), [
        aggregatedAlert.alerts,
        selectedFilters,
        namespace,
        perspective
    ]);
    const filteredStates = Array.from(new Set(filteredAlerts.map((alert)=>alert.state)));
    const columns = [
        {
            title: t('Name'),
            id: 'alert-name',
            props: {
                width: 40
            }
        },
        {
            title: t('Severity'),
            id: 'alert-severity'
        },
        {
            title: t('Namespace'),
            id: 'alert-namespace'
        },
        {
            title: t('State'),
            id: 'alert-state'
        },
        {
            title: t('Source'),
            id: 'alert-source'
        },
        ...isACMPerspective ? [
            {
                title: t('Cluster'),
                id: 'alert-cluster'
            }
        ] : [],
        {
            title: '',
            id: 'actions'
        }
    ];
    const firstAlert = aggregatedAlert?.alerts?.[0];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Tbody, {
        isExpanded: isExpanded,
        role: "rowgroup",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Tr, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Td, {
                        expand: {
                            rowIndex,
                            isExpanded,
                            onToggle: (event, rowIndex, isOpen)=>setIsExpanded(isOpen),
                            expandId: 'expand-interfaces-list'
                        },
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertingRuleArrow
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Td, {
                        title: title,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_13__.Flex, {
                            spaceItems: {
                                default: 'spaceItemsNone'
                            },
                            flexWrap: {
                                default: 'nowrap'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_13__.FlexItem, {
                                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertingRuleResourceIcon,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceIcon, {
                                        kind: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_9__.RuleResource.kind
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_13__.FlexItem, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_10__.Link, {
                                        to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_5__.getRuleUrl)(perspective, firstAlert?.rule, namespace),
                                        "data-test-id": "alert-resource-link",
                                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertingRuleResourceLink,
                                        children: aggregatedAlert.name
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Td, {
                        title: title,
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertingRuleSeverityBadge,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__.SeverityBadge, {
                            severity: aggregatedAlert.severity
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Td, {
                        title: title,
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertingRuleTotalAlertsBadge,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Badge__WEBPACK_IMPORTED_MODULE_12__.Badge, {
                            isRead: true,
                            children: filteredAlerts.length
                        }, 1)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Td, {
                        title: title,
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertingRuleStateBadge,
                        children: filteredStates.map((state)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_7__.AlertState, {
                                state: state
                            }, state))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Tr, {
                isExpanded: isExpanded,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    colSpan: isACMPerspective ? 6 : 5,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.ExpandableRowContent, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Table, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Thead, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Tr, {
                                        children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Th, {
                                                ...column?.props,
                                                children: column.title
                                            }, column.id))
                                    })
                                }),
                                filteredAlerts.map((alert)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertTableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        alert: alert
                                    }, alert.activeAt))
                            ]
                        })
                    })
                })
            })
        ]
    }, title);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AggregateAlertTableRow);


/***/ },

/***/ "./features/alerts/pages/alerts-page/AlertTableRow.tsx"
/*!*************************************************************!*\
  !*** ./features/alerts/pages/alerts-page/AlertTableRow.tsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AlertUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _shared_types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/types/types */ "./shared/types/types.ts");
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/@patternfly/react-table/dist/dynamic/components/Table");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Dropdown */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Dropdown/@patternfly/react-core/dist/dynamic/components/Dropdown");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Spinner */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Spinner/@patternfly/react-core/dist/dynamic/components/Spinner");
/* harmony import */ var _shared_components_KebabDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/KebabDropdown */ "./shared/components/KebabDropdown.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _agentic_runs_useAgenticRunCheck__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./agentic-runs/useAgenticRunCheck */ "./features/alerts/pages/alerts-page/agentic-runs/useAgenticRunCheck.ts");
/* harmony import */ var _shared_components_CustomIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/CustomIcon */ "./shared/components/CustomIcon.tsx");



















const getAgenticRunUrl = (namespace, name)=>{
    return `/lightspeed/runs/${namespace}/${name}`;
};
const AlertTableRow = ({ alert })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_12__.usePerspective)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_13__.useMonitoringNamespace)();
    const state = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_11__.alertState)(alert);
    const { agenticRuns, hasAgenticRun, prefetch, isFetching } = (0,_agentic_runs_useAgenticRunCheck__WEBPACK_IMPORTED_MODULE_15__.useAgenticRunCheck)(alert);
    const title = alert.annotations?.description || alert.annotations?.message;
    const dropdownItems = [];
    if (state !== _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Silenced) {
        dropdownItems.unshift(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
            onClick: ()=>navigate((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_12__.getNewSilenceAlertUrl)(perspective, alert, namespace)),
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.SilenceAlertDropdownItem,
            children: t('Silence alert')
        }, "silence-alert"));
    }
    if (hasAgenticRun) {
        const run = agenticRuns[0];
        const runName = run.metadata?.name;
        if (runName) {
            const runUrl = getAgenticRunUrl(run.metadata.namespace, runName);
            dropdownItems.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_CustomIcon__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    name: "ai-experience"
                }),
                onClick: ()=>navigate(runUrl),
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.ViewAIInvestigationDropdownItem,
                children: t('View AI Investigation')
            }, "view-ai-investigation"));
        }
    } else if (isFetching) {
        dropdownItems.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_CustomIcon__WEBPACK_IMPORTED_MODULE_16__["default"], {
                name: "ai-experience"
            }),
            isDisabled: true,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_7__.Spinner, {
                    size: "sm"
                }),
                " ",
                t('Loading investigations...')
            ]
        }, "loading-ai-investigation"));
    }
    const getDropdownItemsWithExtension = (actions)=>{
        const extensionDropdownItems = [];
        actions.forEach((action)=>{
            if ((0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_2__.isActionWithHref)(action)) {
                extensionDropdownItems.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
                    href: action.cta.href,
                    children: action.label
                }, action.id));
            } else if ((0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_2__.isActionWithCallback)(action)) {
                extensionDropdownItems.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownItem, {
                    onClick: action.cta,
                    children: action.label
                }, action.id));
            }
        });
        return dropdownItems.concat(extensionDropdownItems);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_4__.Tr, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_4__.Td, {
                title: title,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_6__.Flex, {
                    spaceItems: {
                        default: 'spaceItemsNone'
                    },
                    flexWrap: {
                        default: 'nowrap'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_6__.FlexItem, {
                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertResourceIcon,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceIcon, {
                                kind: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_11__.AlertResource.kind
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_6__.FlexItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_10__.Link, {
                                to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_12__.getAlertUrl)(perspective, alert, alert?.rule?.id, namespace),
                                "data-test-id": "alert-resource-link",
                                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertResourceLink,
                                children: alert?.labels?.alertname
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_4__.Td, {
                title: title,
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.SeverityBadge,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_2__.SeverityBadge, {
                    severity: alert.labels?.severity
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_4__.Td, {
                title: title,
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertNamespace,
                children: alert.labels?.namespace ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ResourceLink, {
                    groupVersionKind: _components_AlertUtils__WEBPACK_IMPORTED_MODULE_2__.NamespaceGroupVersionKind,
                    name: alert.labels?.namespace
                }) : '-'
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_4__.Td, {
                title: title,
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertState,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_2__.AlertState, {
                        state: state
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_2__.AlertStateDescription, {
                        alert: alert
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_4__.Td, {
                title: title,
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertSource,
                children: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_2__.alertSource)(alert) === _shared_types_types__WEBPACK_IMPORTED_MODULE_3__.AlertSource.User ? t('User') : t('Platform')
            }),
            perspective === 'acm' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_4__.Td, {
                title: title,
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_14__.DataTestIDs.AlertCluster,
                children: alert.labels?.cluster
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_4__.Td, {
                title: title,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.ActionServiceProvider, {
                    context: {
                        'monitoring-alert-list-item': {
                            alert: alert
                        }
                    },
                    children: ({ actions, loaded })=>{
                        const items = loaded && actions.length > 0 ? getDropdownItemsWithExtension(actions) : dropdownItems;
                        return items?.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_KebabDropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            dropdownItems: items,
                            onMouseEnter: prefetch
                        }) : null;
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertTableRow);


/***/ },

/***/ "./features/alerts/pages/alerts-page/AlertsAggregates.ts"
/*!***************************************************************!*\
  !*** ./features/alerts/pages/alerts-page/AlertsAggregates.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAggregateAlertsLists: () => (/* binding */ getAggregateAlertsLists),
/* harmony export */   getAggregatedAlertKey: () => (/* binding */ getAggregatedAlertKey)
/* harmony export */ });
const getAggregatedAlertKey = (alert)=>`${alert.labels.alertname}-${alert.labels?.severity}-${alert.state}`;
const getAggregateAlertsLists = (data)=>{
    const aggregatedAlertsMap = (data || []).reduce((aggregatedAlertsMap, alert)=>{
        const key = getAggregatedAlertKey(alert);
        if (!aggregatedAlertsMap.has(key)) {
            aggregatedAlertsMap.set(key, {
                name: alert.labels.alertname,
                severity: alert.labels?.severity,
                state: alert.state,
                alerts: []
            });
        }
        const aggregatedAlert = aggregatedAlertsMap.get(key);
        aggregatedAlert.alerts.push(alert);
        return aggregatedAlertsMap;
    }, new Map());
    return Array.from(aggregatedAlertsMap.values());
};


/***/ },

/***/ "./features/alerts/pages/alerts-page/AlertsPage.tsx"
/*!**********************************************************!*\
  !*** ./features/alerts/pages/alerts-page/AlertsPage.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertFilterOptions: () => (/* binding */ AlertFilterOptions),
/* harmony export */   McpAcmAlertsPage: () => (/* binding */ McpAcmAlertsPage),
/* harmony export */   MpCmoAlertsPage: () => (/* binding */ MpCmoAlertsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/query-core/build/lib/queryClient.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Pagination */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Pagination/@patternfly/react-core/dist/dynamic/components/Pagination");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataView */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataView/@patternfly/react-data-view/dist/dynamic/DataView");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewTableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewTableHead */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewTableHead/@patternfly/react-data-view/dist/dynamic/DataViewTableHead");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/DataViewToolbar */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/DataViewToolbar/@patternfly/react-data-view/dist/dynamic/DataViewToolbar");
/* harmony import */ var _patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-data-view/dist/dynamic/Hooks */ "webpack/sharing/consume/default/@patternfly/react-data-view/dist/dynamic/Hooks/@patternfly/react-data-view/dist/dynamic/Hooks");
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/@patternfly/react-table/dist/dynamic/components/Table");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/contexts/MonitoringContext */ "./shared/contexts/MonitoringContext.tsx");
/* harmony import */ var _shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/hooks/useAlerts */ "./shared/hooks/useAlerts.ts");
/* harmony import */ var _shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/console/console-shared/error/fallbacks/withFallback */ "./shared/console/console-shared/error/fallbacks/withFallback.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_empty_state_AccessDenied__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/console/console-shared/src/components/empty-state/AccessDenied */ "./shared/console/console-shared/src/components/empty-state/AccessDenied.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/console/console-shared/src/components/empty-state/EmptyBox */ "./shared/console/console-shared/src/components/empty-state/EmptyBox.tsx");
/* harmony import */ var _shared_console_console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/console/console-shared/src/components/loading/LoadingBox */ "./shared/console/console-shared/src/components/loading/LoadingBox.tsx");
/* harmony import */ var _shared_hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/hooks/useDeepMemo */ "./shared/hooks/useDeepMemo.ts");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/components/table/table-pagination */ "./shared/components/table/table-pagination.tsx");
/* harmony import */ var _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/components/table/TableFilters */ "./shared/components/table/TableFilters.tsx");
/* harmony import */ var _shared_components_table_TableToolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/components/table/TableToolbar */ "./shared/components/table/TableToolbar.tsx");
/* harmony import */ var _shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/components/table/sort-utils */ "./shared/components/table/sort-utils.ts");
/* harmony import */ var _shared_components_table_useTableColumns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/components/table/useTableColumns */ "./shared/components/table/useTableColumns.ts");
/* harmony import */ var _shared_components_table_useTableFilters__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/components/table/useTableFilters */ "./shared/components/table/useTableFilters.ts");
/* harmony import */ var _shared_components_table_useTablePagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/components/table/useTablePagination */ "./shared/components/table/useTablePagination.ts");
/* harmony import */ var _shared_types_types__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../shared/types/types */ "./shared/types/types.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _AggregateAlertTableRow__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./AggregateAlertTableRow */ "./features/alerts/pages/alerts-page/AggregateAlertTableRow.tsx");
/* harmony import */ var _DownloadCSVButton__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./DownloadCSVButton */ "./features/alerts/pages/alerts-page/DownloadCSVButton.tsx");
/* harmony import */ var _filter_alerts__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./filter-alerts */ "./features/alerts/pages/alerts-page/filter-alerts.ts");
/* harmony import */ var _AlertsAggregates__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./AlertsAggregates */ "./features/alerts/pages/alerts-page/AlertsAggregates.ts");
/* harmony import */ var _components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");




































var AlertFilterOptions = /*#__PURE__*/ function(AlertFilterOptions) {
    AlertFilterOptions["NAME"] = "name";
    AlertFilterOptions["STATE"] = "alert-state";
    AlertFilterOptions["SEVERITY"] = "alert-severity";
    AlertFilterOptions["LABEL"] = "label";
    AlertFilterOptions["SOURCE"] = "alert-source";
    AlertFilterOptions["CLUSTER"] = "alert-cluster";
    return AlertFilterOptions;
}({});
const AlertsPage_ = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)("plugin__monitoring-plugin");
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_20__.useMonitoringNamespace)();
    const { defaultAlertTenant, perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_21__.usePerspective)();
    const [activeAttributeMenu, setActiveAttributeMenu] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(t('Alert Name'));
    const initialFilters = (0,_shared_hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_19__.useDeepMemo)(()=>{
        const filters = {
            ["name"]: '',
            ["alert-state"]: [
                _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.AlertStates.Firing
            ],
            ["alert-severity"]: [],
            ["alert-source"]: defaultAlertTenant,
            ["label"]: ''
        };
        if (perspective === 'acm') {
            filters["alert-cluster"] = [];
        } else if (namespace && namespace !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_30__.ALL_NAMESPACES_KEY) {
            delete filters["alert-source"];
        }
        return filters;
    }, [
        perspective,
        defaultAlertTenant,
        namespace
    ]);
    // KNOWN ISSUE: the useDataViewPagination, useDataViewFilters, and useDataViewSort functions
    // do not work together for URL initialization, so only the search parameters for the last
    // function will be set when initially loading the page
    // with no search parameters. Future changes are reflected
    const pagination = (0,_shared_components_table_useTablePagination__WEBPACK_IMPORTED_MODULE_28__.useTablePagination)({
        perPage: _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_22__.ITEMS_PER_PAGE[0]
    });
    const { filters, onSetFilters, clearAllFilters, deleteFilter } = (0,_shared_components_table_useTableFilters__WEBPACK_IMPORTED_MODULE_27__.useTableFilters)({
        initialFilters
    });
    const { sortBy, direction, onSort } = (0,_patternfly_react_data_view_dist_dynamic_Hooks__WEBPACK_IMPORTED_MODULE_9__.useDataViewSort)({
        initialSort: {
            sortBy: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__.rowFilter)("name"),
            direction: 'asc'
        }
    });
    const columnKeys = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>{
        const keys = [
            {
                label: '',
                key: 'expandable'
            },
            {
                label: t('Name'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__.rowFilter)("name")
            },
            {
                label: t('Severity'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__.rowFilter)("alert-severity")
            },
            {
                label: t('Total'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__.rowFilter)('alert-total')
            },
            {
                label: t('State'),
                key: (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__.rowFilter)("alert-state")
            }
        ];
        return keys;
    }, [
        t
    ]);
    const columns = (0,_shared_components_table_useTableColumns__WEBPACK_IMPORTED_MODULE_26__.useTableColumns)(columnKeys, sortBy, direction, onSort, [
        0
    ]);
    const prevNamespaceRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(namespace);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        // Only update filters when namespace changes
        if (prevNamespaceRef.current === namespace) {
            return;
        }
        prevNamespaceRef.current = namespace;
        if (namespace && namespace !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_30__.ALL_NAMESPACES_KEY) {
            // alert source filter should not be present when viewing in a specific namespace
            deleteFilter("alert-source");
        } else if (namespace === _shared_utils_utils__WEBPACK_IMPORTED_MODULE_30__.ALL_NAMESPACES_KEY) {
            onSetFilters({
                ["alert-source"]: defaultAlertTenant
            });
        }
    }, [
        namespace,
        deleteFilter,
        onSetFilters,
        defaultAlertTenant
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        // When changing filters change back to being on page 1
        pagination.onSetPage(undefined, 1);
    }, [
        filters
    ]);
    // eslint-disable-line react-hooks/exhaustive-deps
    const { page, perPage } = pagination;
    const { alerts, additionalAlertSourceLabels, alertClusterLabels, rulesAlertLoading, silences } = (0,_shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_14__.useAlerts)();
    const aggregatedAlerts = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>{
        const filteredAlerts = (0,_filter_alerts__WEBPACK_IMPORTED_MODULE_33__.filterAlerts)(alerts, filters, namespace, perspective);
        const aggregatedAlerts = (0,_AlertsAggregates__WEBPACK_IMPORTED_MODULE_34__.getAggregateAlertsLists)(filteredAlerts);
        return sortAggregatedAlerts(aggregatedAlerts, sortBy, direction);
    }, [
        alerts,
        namespace,
        filters,
        perspective,
        sortBy,
        direction
    ]);
    const selectedPageOfAggregatedAlerts = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>aggregatedAlerts.slice((page - 1) * perPage, (page - 1) * perPage + perPage), [
        aggregatedAlerts,
        page,
        perPage
    ]);
    const loaded = !!rulesAlertLoading?.loaded;
    const loadError = rulesAlertLoading?.loadError ? rulesAlertLoading.loadError : undefined;
    const onFiltersChange = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>(filterName)=>{
            return (_e, val)=>{
                onSetFilters({
                    [filterName]: val
                });
            };
        }, [
        onSetFilters
    ]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filterItems = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filtersVals = [
            {
                filterId: "name",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_23__.TableFilterOption.TEXT,
                title: t('Alert Name'),
                placeholder: t('Filter by Name'),
                onChange: onFiltersChange("name"),
                value: filters.name,
                ouiaId: 'AlertNameFilter'
            },
            {
                filterId: "label",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_23__.TableFilterOption.LABEL,
                title: t('Label'),
                placeholder: t('Filter by Label'),
                onChange: onFiltersChange("label"),
                value: filters["label"],
                labelPath: 'labels',
                data: alerts
            },
            {
                filterId: "alert-state",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_23__.TableFilterOption.CHECKBOX,
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
                    }
                ],
                ouiaId: 'AlertStateFilter'
            },
            {
                filterId: "alert-severity",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_23__.TableFilterOption.CHECKBOX,
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
                ouiaId: 'AlertSeverityFilter'
            }
        ];
        if (namespace === _shared_utils_utils__WEBPACK_IMPORTED_MODULE_30__.ALL_NAMESPACES_KEY) {
            filtersVals.push({
                filterId: "alert-source",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_23__.TableFilterOption.CHECKBOX,
                title: t('Source'),
                placeholder: t('Filter by Source'),
                onChange: onFiltersChange("alert-source"),
                value: filters["alert-source"],
                options: [
                    {
                        value: _shared_types_types__WEBPACK_IMPORTED_MODULE_29__.AlertSource.Platform,
                        label: t('Platform')
                    },
                    {
                        value: _shared_types_types__WEBPACK_IMPORTED_MODULE_29__.AlertSource.User,
                        label: t('User')
                    },
                    ...additionalAlertSourceLabels
                ],
                ouiaId: 'AlertSourceFilter'
            });
        }
        if (perspective === 'acm') {
            filtersVals.push({
                filterId: "alert-cluster",
                type: _shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_23__.TableFilterOption.CHECKBOX,
                title: t('Cluster'),
                placeholder: t('Filter by Cluster'),
                onChange: onFiltersChange("alert-cluster"),
                value: filters["alert-cluster"],
                options: alertClusterLabels.map((clusterName)=>({
                        value: clusterName,
                        label: clusterName?.length > 50 ? clusterName.slice(0, 50) + '...' : clusterName
                    })),
                ouiaId: 'AlertClusterFilter'
            });
        }
        return filtersVals;
    }, [
        filters,
        t,
        onFiltersChange,
        alerts,
        namespace,
        additionalAlertSourceLabels,
        perspective,
        alertClusterLabels
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.DocumentTitle, {
                children: t('Alerting')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_4__.PageSection, {
                hasBodyWrapper: false,
                type: "subnav",
                children: [
                    /* Only show the silences error when the alerts have loaded, since failing to load the
          silences doesn't matter if the alerts haven't loaded*/ silences?.loadError && !loadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__.SilencesNotLoadedWarning, {
                        silencesLoadError: silences?.loadError
                    }),
                    loaded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_data_view_dist_dynamic_DataView__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableToolbar__WEBPACK_IMPORTED_MODULE_24__.TableToolbar, {
                                clearAllFilters: clearAllFilters,
                                filters: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_23__.TableFilters, {
                                    activeAttributeMenu: activeAttributeMenu,
                                    setActiveAttributeMenu: setActiveAttributeMenu,
                                    filterItems: filterItems,
                                    children: filterItems.map((filterItem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_TableFilters__WEBPACK_IMPORTED_MODULE_23__.TableFilter, {
                                            ...filterItem,
                                            showToolbarItem: filterItem.title === activeAttributeMenu
                                        }, `table-filter-${filterItem.filterId}`))
                                }),
                                actions: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DownloadCSVButton__WEBPACK_IMPORTED_MODULE_32__["default"], {
                                    loaded: loaded,
                                    filteredData: aggregatedAlerts
                                }),
                                pagination: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_22__.TablePagination, {
                                    variant: _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationVariant.top,
                                    itemCount: aggregatedAlerts?.length,
                                    ...pagination
                                })
                            }),
                            selectedPageOfAggregatedAlerts?.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_10__.Table, {
                                        gridBreakPoint: _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_10__.TableGridBreakpoint.none,
                                        role: "presentation",
                                        isExpandable: true,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewTableHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                columns: columns
                                            }),
                                            selectedPageOfAggregatedAlerts.map((aggregatedAlert, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AggregateAlertTableRow__WEBPACK_IMPORTED_MODULE_31__["default"], {
                                                    aggregatedAlert: aggregatedAlert,
                                                    rowData: {
                                                        rowIndex: index,
                                                        selectedFilters: filters
                                                    }
                                                }, // eslint-disable-next-line max-len
                                                `${aggregatedAlert.name}-${aggregatedAlert.state}-${aggregatedAlert.severity}`))
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_data_view_dist_dynamic_DataViewToolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        style: {
                                            paddingTop: '16px'
                                        },
                                        pagination: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_22__.TablePagination, {
                                            itemCount: aggregatedAlerts?.length,
                                            variant: _patternfly_react_core_dist_dynamic_components_Pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationVariant.bottom,
                                            ...pagination
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    loadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_empty_state_AccessDenied__WEBPACK_IMPORTED_MODULE_16__.AccessDenied, {
                        message: loadError.message
                    }),
                    loaded && selectedPageOfAggregatedAlerts?.length === 0 && !loadError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_empty_state_EmptyBox__WEBPACK_IMPORTED_MODULE_17__.EmptyBox, {
                        customMessage: t('No alerts found')
                    }),
                    !loaded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingBox__WEBPACK_IMPORTED_MODULE_18__.LoadingBox, {})
                ]
            })
        ]
    });
};
const AlertsPageWithFallback = (0,_shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_15__["default"])(AlertsPage_);
const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false
        }
    }
});
const sortAggregatedAlerts = (data, sortBy, direction)=>{
    if (!sortBy || !direction) {
        return data;
    }
    if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__.rowFilter)("name")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_25__.localeCompareSort)(a.name, b.name, direction));
    } else if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__.rowFilter)("alert-severity")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_25__.directedSort)((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_30__.severitySort)(a, b), direction));
    } else if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__.rowFilter)('alert-total')) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_25__.directedSort)(a.alerts.length - b.alerts.length, direction));
    } else if (sortBy === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_35__.rowFilter)("alert-state")) {
        return [
            ...data
        ].sort((a, b)=>(0,_shared_components_table_sort_utils__WEBPACK_IMPORTED_MODULE_25__.localeCompareSort)(a.state, b.state, direction));
    }
    return data;
};
const MpCmoAlertsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_13__.MonitoringProvider, {
            monitoringContext: {
                plugin: 'monitoring-plugin',
                prometheus: 'cmo'
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertsPageWithFallback, {})
        })
    });
};
const McpAcmAlertsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_13__.MonitoringProvider, {
            monitoringContext: {
                plugin: 'monitoring-console-plugin',
                prometheus: 'acm'
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertsPageWithFallback, {})
        })
    });
};


/***/ },

/***/ "./features/alerts/pages/alerts-page/DownloadCSVButton.tsx"
/*!*****************************************************************!*\
  !*** ./features/alerts/pages/alerts-page/DownloadCSVButton.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/data-test */ "./shared/constants/data-test.ts");






const DownloadCSVButton = ({ loaded, filteredData })=>{
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_3__.usePerspective)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    const getTableData = ()=>{
        const csvColumns = [
            'Name',
            'Severity',
            'State',
            'Total'
        ];
        if (perspective === 'acm') {
            csvColumns.push('Cluster');
        }
        const getCsvRows = ()=>{
            return filteredData?.map((row)=>{
                const name = row?.name ?? '';
                const severity = row?.severity ?? '';
                const state = row?.state ?? '';
                const total = row?.alerts?.length ?? 0;
                const rowData = [
                    name,
                    severity,
                    state,
                    total
                ];
                if (perspective === 'acm') {
                    const clusters = Array.from(new Set(row?.alerts?.map((alert)=>alert.labels?.cluster) || []));
                    rowData.push(clusters?.join(', ') ?? '');
                }
                return rowData;
            });
        };
        return [
            csvColumns,
            ...getCsvRows()
        ];
    };
    const formatToCsv = (tableData, delimiter = ',')=>tableData?.map((row)=>row?.map((rowItem)=>isNaN(rowItem) ? `"${rowItem}"` : rowItem).join(delimiter))?.join('\n');
    let csvData;
    if (loaded) {
        csvData = formatToCsv(getTableData()) ?? undefined;
    }
    const downloadCsv = ()=>{
        // csvData should be formatted as comma-seperated values
        // (e.g. `"a","b","c", \n"d","e","f", \n"h","i","j"`)
        const blobCsvData = new Blob([
            csvData
        ], {
            type: 'text/csv'
        });
        const csvURL = URL.createObjectURL(blobCsvData);
        const link = document.createElement('a');
        link.href = csvURL;
        link.download = `openshift.csv`;
        link.click();
        // Clean up the URL object after the download is triggered
        URL.revokeObjectURL(csvURL);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: downloadCsv,
        variant: _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.ButtonVariant.link,
        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_4__.DataTestIDs.DownloadCSVButton,
        children: t('Export as CSV')
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadCSVButton);


/***/ },

/***/ "./features/alerts/pages/alerts-page/agentic-runs/alert-identifier.ts"
/*!****************************************************************************!*\
  !*** ./features/alerts/pages/alerts-page/agentic-runs/alert-identifier.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeAlertFingerprint: () => (/* binding */ computeAlertFingerprint),
/* harmony export */   getAlertFingerprintPrefix: () => (/* binding */ getAlertFingerprintPrefix),
/* harmony export */   matchesAgenticRun: () => (/* binding */ matchesAgenticRun)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./features/alerts/pages/alerts-page/agentic-runs/constants.ts");

/**
 * Computes the Prometheus-compatible FNV-1a 64-bit fingerprint of a label set.
 * Replicates the algorithm from prometheus/common/model/signature.go:
 * - Sort label names lexicographically
 * - For each pair: hash(name + 0xFF + value + 0xFF)
 * - Returns 16-char zero-padded hex string
 */ const computeAlertFingerprint = (labels)=>{
    const names = Object.keys(labels).sort();
    let hash = _constants__WEBPACK_IMPORTED_MODULE_0__.FNV_OFFSET_BASIS;
    for (const name of names){
        const value = labels[name];
        const bytes = new TextEncoder().encode(name);
        for (const b of bytes){
            hash ^= BigInt(b);
            hash = hash * _constants__WEBPACK_IMPORTED_MODULE_0__.FNV_PRIME & _constants__WEBPACK_IMPORTED_MODULE_0__.UINT64_MASK;
        }
        hash ^= BigInt(_constants__WEBPACK_IMPORTED_MODULE_0__.SEPARATOR_BYTE);
        hash = hash * _constants__WEBPACK_IMPORTED_MODULE_0__.FNV_PRIME & _constants__WEBPACK_IMPORTED_MODULE_0__.UINT64_MASK;
        const valueBytes = new TextEncoder().encode(value);
        for (const b of valueBytes){
            hash ^= BigInt(b);
            hash = hash * _constants__WEBPACK_IMPORTED_MODULE_0__.FNV_PRIME & _constants__WEBPACK_IMPORTED_MODULE_0__.UINT64_MASK;
        }
        hash ^= BigInt(_constants__WEBPACK_IMPORTED_MODULE_0__.SEPARATOR_BYTE);
        hash = hash * _constants__WEBPACK_IMPORTED_MODULE_0__.FNV_PRIME & _constants__WEBPACK_IMPORTED_MODULE_0__.UINT64_MASK;
    }
    return hash.toString(16).padStart(16, '0');
};
const getAlertFingerprintPrefix = (labels)=>computeAlertFingerprint(labels).slice(0, _constants__WEBPACK_IMPORTED_MODULE_0__.FINGERPRINT_PREFIX_LEN);
const matchesAgenticRun = (alert, proposal)=>{
    const proposalFp = proposal.metadata?.labels?.[_constants__WEBPACK_IMPORTED_MODULE_0__.AGENTIC_RUN_LABEL_FINGERPRINT];
    if (!proposalFp) {
        return false;
    }
    return proposalFp === getAlertFingerprintPrefix(alert.labels);
};


/***/ },

/***/ "./features/alerts/pages/alerts-page/agentic-runs/constants.ts"
/*!*********************************************************************!*\
  !*** ./features/alerts/pages/alerts-page/agentic-runs/constants.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AGENTIC_RUN_LABEL_FINGERPRINT: () => (/* binding */ AGENTIC_RUN_LABEL_FINGERPRINT),
/* harmony export */   AGENTIC_RUN_LABEL_SOURCE: () => (/* binding */ AGENTIC_RUN_LABEL_SOURCE),
/* harmony export */   AGENTIC_RUN_NAMESPACE: () => (/* binding */ AGENTIC_RUN_NAMESPACE),
/* harmony export */   AGENTIC_RUN_SOURCE_ALERTMANAGER: () => (/* binding */ AGENTIC_RUN_SOURCE_ALERTMANAGER),
/* harmony export */   AGENTIC_RUN_STALE_TIME: () => (/* binding */ AGENTIC_RUN_STALE_TIME),
/* harmony export */   FINGERPRINT_PREFIX_LEN: () => (/* binding */ FINGERPRINT_PREFIX_LEN),
/* harmony export */   FNV_OFFSET_BASIS: () => (/* binding */ FNV_OFFSET_BASIS),
/* harmony export */   FNV_PRIME: () => (/* binding */ FNV_PRIME),
/* harmony export */   SEPARATOR_BYTE: () => (/* binding */ SEPARATOR_BYTE),
/* harmony export */   UINT64_MASK: () => (/* binding */ UINT64_MASK)
/* harmony export */ });
// FNV-1a 64-bit hash constants (Prometheus alerts fingerprint algorithm)
const SEPARATOR_BYTE = 0xff;
const FNV_OFFSET_BASIS = 14695981039346656037n;
const FNV_PRIME = 1099511628211n;
const UINT64_MASK = (1n << 64n) - 1n;
const FINGERPRINT_PREFIX_LEN = 8;
// Proposal CR label keys
const AGENTIC_RUN_LABEL_FINGERPRINT = 'agentic.openshift.io/alert-fingerprint';
const AGENTIC_RUN_LABEL_SOURCE = 'agentic.openshift.io/source';
// Proposal CR values
const AGENTIC_RUN_SOURCE_ALERTMANAGER = 'alertmanager';
const AGENTIC_RUN_NAMESPACE = 'openshift-lightspeed';
const AGENTIC_RUN_STALE_TIME = 30 * 1000;


/***/ },

/***/ "./features/alerts/pages/alerts-page/agentic-runs/useAgenticRunCheck.ts"
/*!******************************************************************************!*\
  !*** ./features/alerts/pages/alerts-page/agentic-runs/useAgenticRunCheck.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAgenticRunCheck: () => (/* binding */ useAgenticRunCheck)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_lib_utils_k8s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk/lib/utils/k8s */ "../node_modules/@openshift-console/dynamic-plugin-sdk/lib/utils/k8s/index.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "../node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _alert_identifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-identifier */ "./features/alerts/pages/alerts-page/agentic-runs/alert-identifier.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./features/alerts/pages/alerts-page/agentic-runs/constants.ts");
/* harmony import */ var _shared_console_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/console/models */ "./shared/console/models/index.ts");






const buildQueryFn = (namespace, alertFingerprint)=>()=>(0,_openshift_console_dynamic_plugin_sdk_lib_utils_k8s__WEBPACK_IMPORTED_MODULE_0__.k8sListResourceItems)({
            model: _shared_console_models__WEBPACK_IMPORTED_MODULE_5__.AgenticRunModel,
            queryParams: {
                ns: namespace,
                labelSelector: {
                    matchLabels: {
                        [_constants__WEBPACK_IMPORTED_MODULE_4__.AGENTIC_RUN_LABEL_FINGERPRINT]: alertFingerprint,
                        [_constants__WEBPACK_IMPORTED_MODULE_4__.AGENTIC_RUN_LABEL_SOURCE]: _constants__WEBPACK_IMPORTED_MODULE_4__.AGENTIC_RUN_SOURCE_ALERTMANAGER
                    }
                }
            }
        });
const useAgenticRunCheck = (alert)=>{
    const alertFingerprint = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0,_alert_identifier__WEBPACK_IMPORTED_MODULE_3__.getAlertFingerprintPrefix)(alert.labels), [
        alert.labels
    ]);
    const alertNamespace = alert.labels?.namespace;
    const hasDistinctAlertNamespace = !!alertNamespace && alertNamespace !== _constants__WEBPACK_IMPORTED_MODULE_4__.AGENTIC_RUN_NAMESPACE;
    const [shouldFetch, setShouldFetch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { data: defaultNsData, isFetching: defaultNsFetching, isError: defaultNsError } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            'agentic-run-check',
            _constants__WEBPACK_IMPORTED_MODULE_4__.AGENTIC_RUN_NAMESPACE,
            alertFingerprint
        ],
        queryFn: buildQueryFn(_constants__WEBPACK_IMPORTED_MODULE_4__.AGENTIC_RUN_NAMESPACE, alertFingerprint),
        enabled: shouldFetch,
        staleTime: _constants__WEBPACK_IMPORTED_MODULE_4__.AGENTIC_RUN_STALE_TIME,
        retry: false
    });
    const { data: alertNsData, isFetching: alertNsFetching, isError: alertNsError } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            'agentic-run-check',
            alertNamespace,
            alertFingerprint
        ],
        queryFn: buildQueryFn(alertNamespace, alertFingerprint),
        enabled: shouldFetch && hasDistinctAlertNamespace,
        staleTime: _constants__WEBPACK_IMPORTED_MODULE_4__.AGENTIC_RUN_STALE_TIME,
        retry: false
    });
    const prefetch = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>setShouldFetch(true), []);
    const agenticRuns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const matchesFp = (p)=>p.metadata?.labels?.[_constants__WEBPACK_IMPORTED_MODULE_4__.AGENTIC_RUN_LABEL_FINGERPRINT] === alertFingerprint;
        return [
            ...(defaultNsData ?? []).filter(matchesFp),
            ...(alertNsData ?? []).filter(matchesFp)
        ];
    }, [
        defaultNsData,
        alertNsData,
        alertFingerprint
    ]);
    const isFetching = defaultNsFetching || alertNsFetching;
    const isError = defaultNsError && (hasDistinctAlertNamespace ? alertNsError : true);
    return {
        agenticRuns,
        hasAgenticRun: agenticRuns.length > 0,
        isFetching,
        isError,
        prefetch,
        alertFingerprint
    };
};


/***/ },

/***/ "./features/alerts/pages/alerts-page/filter-alerts.ts"
/*!************************************************************!*\
  !*** ./features/alerts/pages/alerts-page/filter-alerts.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterAlerts: () => (/* binding */ filterAlerts)
/* harmony export */ });
/* harmony import */ var _components_AlertUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/AlertUtils */ "./features/alerts/components/AlertUtils.tsx");
/* harmony import */ var _AlertsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertsPage */ "./features/alerts/pages/alerts-page/AlertsPage.tsx");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");



const filterAlerts = (alerts, selectedFilters, namespace, perspective)=>{
    if (!alerts) {
        return [];
    }
    const shouldFilterNamespace = namespace !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_2__.ALL_NAMESPACES_KEY && perspective !== 'acm';
    /**
   * Filters alerts based on tenancy:
   * - with tenancy: alerts are automatically pre-filtered.
   * - without tenancy (admin): filters by selected namespace for UX consistency.
   * - "All Projects": returns all alerts, including those without a namespace label.
   */ return alerts.filter((alert)=>{
        if (shouldFilterNamespace && alert.labels?.namespace !== namespace) {
            return false;
        }
        // For each selectable filter, first check if it is set. If it isn't then we don't
        // filter
        if (selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.NAME] && !(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_2__.fuzzyCaseInsensitive)(selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.NAME], alert.labels?.alertname)) {
            return false;
        }
        if (selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.STATE].length > 0 && !selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.STATE].includes((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_2__.alertState)(alert))) {
            return false;
        }
        if (selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.SEVERITY].length > 0 && !selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.SEVERITY].includes(alert.labels?.severity)) {
            return false;
        }
        if (selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.SOURCE]?.length > 0 && !selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.SOURCE].some((filter)=>String(filter) === (0,_components_AlertUtils__WEBPACK_IMPORTED_MODULE_0__.alertSource)(alert))) {
            return false;
        }
        if (selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.LABEL].length) {
            // labels are stored in the url as a single query param with the format of
            // label=a=b,c=d where the = and , are % encoded. selectedFilters[AlertFilterOptions.LABEL]
            // should contain the unencoded the label param
            const labelMatchers = selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.LABEL].split(',');
            for (const labelMatcher of labelMatchers){
                const keyValue = labelMatcher.split('=');
                if (keyValue.length !== 2) {
                    return false;
                }
                const [key, value] = keyValue;
                if (alert.labels?.[key] !== value) {
                    return false;
                }
            }
        }
        if (perspective === 'acm' && selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.CLUSTER]?.length > 0 && !selectedFilters[_AlertsPage__WEBPACK_IMPORTED_MODULE_1__.AlertFilterOptions.CLUSTER].some((filter)=>(0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_2__.fuzzyCaseInsensitive)(filter, alert.labels?.cluster))) {
            return false;
        }
        return true;
    });
};


/***/ },

/***/ "./shared/components/CustomIcon.tsx"
/*!******************************************!*\
  !*** ./shared/components/CustomIcon.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

// SVG path data sourced from @rhds/icons (CC-BY-4.0 licensed)
const icons = {
    'ai-experience': {
        viewBox: '0 0 32 32',
        d: 'M26.031 16.962a11.932 11.932 0 0 1-10.999-11c-.041-.52-.516-.961-1.038-.961s-.996.442-1.038.962A11.93 11.93 0 0 1 1.965 16.962c-.524.037-.97.514-.97 1.038 0 .521.442.997.962 1.038a11.933 11.933 0 0 1 11 11c.041.52.516.961 1.037.961.522 0 .997-.442 1.039-.962A11.931 11.931 0 0 1 26.03 19.038c.52-.042.962-.516.962-1.038 0-.521-.442-.997-.962-1.038Zm-12.037 8.803A13.888 13.888 0 0 0 6.228 18a13.898 13.898 0 0 0 7.767-7.766A13.888 13.888 0 0 0 21.76 18a13.899 13.899 0 0 0-7.767 7.766ZM30.502 7c0 .29-.209.536-.498.59a5.523 5.523 0 0 0-4.417 4.417c-.054.289-.3.498-.59.498s-.536-.21-.59-.498A5.52 5.52 0 0 0 19.99 7.59c-.289-.054-.498-.3-.498-.59s.21-.536.498-.59a5.52 5.52 0 0 0 4.417-4.417c.054-.289.301-.498.59-.498s.536.21.59.498a5.523 5.523 0 0 0 4.417 4.417c.289.054.498.3.498.59Z'
    }
};
const CustomIcon = ({ name, className })=>{
    const icon = icons[name];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: icon.viewBox,
        fill: "currentColor",
        width: "1em",
        height: "1em",
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: icon.d
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomIcon);


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


/***/ },

/***/ "./shared/console/imgs/restricted-sign.svg"
/*!*************************************************!*\
  !*** ./shared/console/imgs/restricted-sign.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/restricted-sign..svg";

/***/ }

}]);
//# sourceMappingURL=CmoAlertsPage-chunk.js.map