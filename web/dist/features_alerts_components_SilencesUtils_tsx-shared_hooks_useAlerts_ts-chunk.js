"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["features_alerts_components_SilencesUtils_tsx-shared_hooks_useAlerts_ts"],{

/***/ "./features/alerts/components/SilencesUtils.tsx"
/*!******************************************************!*\
  !*** ./features/alerts/components/SilencesUtils.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpireSilenceModal: () => (/* binding */ ExpireSilenceModal),
/* harmony export */   SilenceDropdown: () => (/* binding */ SilenceDropdown),
/* harmony export */   SilenceMatchersList: () => (/* binding */ SilenceMatchersList),
/* harmony export */   SilenceState: () => (/* binding */ SilenceState)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Dropdown */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Dropdown/@patternfly/react-core/dist/dynamic/components/Dropdown");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Label */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Label/@patternfly/react-core/dist/dynamic/components/Label");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Modal */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Modal/@patternfly/react-core/dist/dynamic/components/Modal");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Panel */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Panel/@patternfly/react-core/dist/dynamic/components/Panel");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_ban_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/ban-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/ban-icon/@patternfly/react-icons/dist/dynamic/icons/ban-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/check-circle-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/check-circle-icon/@patternfly/react-icons/dist/dynamic/icons/check-circle-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_ellipsis_v_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/ellipsis-v-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/ellipsis-v-icon/@patternfly/react-icons/dist/dynamic/icons/ellipsis-v-icon");
/* harmony import */ var _patternfly_react_icons_dist_dynamic_icons_hourglass_half_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-icons/dist/dynamic/icons/hourglass-half-icon */ "webpack/sharing/consume/default/@patternfly/react-icons/dist/dynamic/icons/hourglass-half-icon/@patternfly/react-icons/dist/dynamic/icons/hourglass-half-icon");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/constants/data-test */ "./shared/constants/data-test.ts");































const SilenceMatchersList = ({ silence })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__.LabelGroup, {
        numLabels: 20,
        children: lodash_es__WEBPACK_IMPORTED_MODULE_14__["default"](silence.matchers, ({ name, isEqual, isRegex, value }, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_21__.silenceMatcherEqualitySymbol)(isEqual, isRegex)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: value
                    })
                ]
            }, i))
    });
const SilenceState = ({ silence })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)("plugin__monitoring-plugin");
    const state = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_21__.silenceState)(silence);
    const icon = {
        [_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.GreenCheckCircleIcon, {}),
        [_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Pending]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_hourglass_half_icon__WEBPACK_IMPORTED_MODULE_12__.HourglassHalfIcon, {}),
        [_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Expired]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_ban_icon__WEBPACK_IMPORTED_MODULE_9__.BanIcon, {
            "data-test-id": "ban-icon"
        })
    }[state];
    const getStateKey = (stateData)=>{
        switch(stateData){
            case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Active:
                return t('Active');
            case _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Pending:
                return t('Pending');
            default:
                return t('Expired');
        }
    };
    return icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            icon,
            " ",
            getStateKey(state)
        ]
    }) : null;
};
const SilenceDropdown = ({ silence, toggleText })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_19__.usePerspective)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_17__.useNavigate)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_20__.useMonitoringNamespace)();
    const [isOpen, setIsOpen, , setClosed] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_18__.useBoolean)(false);
    const [isModalOpen, , setModalOpen, setModalClosed] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_18__.useBoolean)(false);
    const editSilence = ()=>{
        navigate((0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_19__.getEditSilenceAlertUrl)(perspective, silence.id, namespace));
    };
    const dropdownItems = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_21__.silenceState)(silence) === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Expired ? [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_22__.DataTestIDs.SilenceRecreateDropdownItem,
            value: 0,
            onClick: editSilence,
            children: t('Recreate silence')
        }, "recreate-silence")
    ] : [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_22__.DataTestIDs.SilenceEditDropdownItem,
            value: 0,
            onClick: editSilence,
            children: t('Edit silence')
        }, "edit-silence"),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_22__.DataTestIDs.SilenceExpireDropdownItem,
            value: 1,
            onClick: setModalOpen,
            children: t('Expire silence')
        }, "cancel-silence")
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
                isOpen: isOpen,
                onSelect: setClosed,
                "data-test": "silence-actions",
                popperProps: {
                    position: 'right'
                },
                onOpenChange: (isOpen)=>isOpen ? setIsOpen() : setClosed(),
                toggle: (toggleRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_5__.MenuToggle, {
                        ref: toggleRef,
                        "aria-label": "kebab dropdown toggle",
                        variant: toggleText ? 'default' : 'plain',
                        onClick: setIsOpen,
                        isExpanded: isOpen,
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_22__.DataTestIDs.KebabDropdownButton,
                        children: toggleText || /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_ellipsis_v_icon__WEBPACK_IMPORTED_MODULE_11__.EllipsisVIcon, {})
                    }),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownList, {
                    children: dropdownItems
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExpireSilenceModal, {
                isOpen: isModalOpen,
                setClosed: setModalClosed,
                silenceID: silence.id
            })
        ]
    });
};
const ExpireSilenceModal = ({ isOpen, setClosed, silenceID })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_19__.usePerspective)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_20__.useMonitoringNamespace)();
    const [isInProgress, , setInProgress, setNotInProgress] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_18__.useBoolean)(false);
    const [success, , setSuccess] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_18__.useBoolean)(false);
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)();
    const expireSilence = ()=>{
        setInProgress();
        const url = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_19__.getFetchSilenceUrl)(perspective, silenceID, namespace);
        _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.consoleFetchJSON.delete(url).then(()=>{
            setNotInProgress();
            setSuccess();
            setTimeout(()=>{
                setClosed();
            }, 1000);
        }).catch((err)=>{
            setErrorMessage(lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"](err, 'json.error') || err.message || 'Error expiring silence');
            setNotInProgress();
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_6__.Modal, {
        isOpen: isOpen,
        position: "top",
        title: t('Expire silence'),
        variant: _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_6__.ModalVariant.small,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_6__.ModalHeader, {
                title: t('Expire Silence')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {
                children: [
                    t('Are you sure you want to expire this silence?'),
                    errorMessage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_8__.Alert, {
                        isInline: true,
                        title: t('An error occurred'),
                        variant: "danger",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Panel__WEBPACK_IMPORTED_MODULE_7__.Panel, {
                            isScrollable: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Panel__WEBPACK_IMPORTED_MODULE_7__.PanelMain, {
                                maxHeight: "100px",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Panel__WEBPACK_IMPORTED_MODULE_7__.PanelMainBody, {
                                    children: errorMessage
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_6__.ModalFooter, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "primary",
                        onClick: expireSilence,
                        isLoading: isInProgress,
                        icon: success ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_icons_dist_dynamic_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_10__.CheckCircleIcon, {}) : null,
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_22__.DataTestIDs.ExpireSilenceButton,
                        children: success ? t('Expired') : t('Expire silence')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "secondary",
                        onClick: setClosed,
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_22__.DataTestIDs.CancelButton,
                        children: t('Cancel')
                    })
                ]
            })
        ]
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
//# sourceMappingURL=features_alerts_components_SilencesUtils_tsx-shared_hooks_useAlerts_ts-chunk.js.map