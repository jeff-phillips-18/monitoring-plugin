"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["exposed-LegacyDashboardsPage"],{

/***/ "./features/legacy-dashboards/components/custom-time-range-modal.tsx"
/*!***************************************************************************!*\
  !*** ./features/legacy-dashboards/components/custom-time-range-modal.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Button */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Button/@patternfly/react-core/dist/dynamic/components/Button");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_DatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/DatePicker */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/DatePicker/@patternfly/react-core/dist/dynamic/components/DatePicker");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Form */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Form/@patternfly/react-core/dist/dynamic/components/Form");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/InputGroup */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/InputGroup/@patternfly/react-core/dist/dynamic/components/InputGroup");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Modal */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Modal/@patternfly/react-core/dist/dynamic/components/Modal");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_TimePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/TimePicker */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/TimePicker/@patternfly/react-core/dist/dynamic/components/TimePicker");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isInteger.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/utils */ "./features/legacy-dashboards/utils/utils.ts");



















const zeroPad = (number)=>number < 10 ? `0${number}` : number;
// Get YYYY-MM-DD date string for a date object
const toISODateString = (date)=>`${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(date.getDate())}`;
// Get HH:MM time string for a date object
const toISOTimeString = (date)=>new Intl.DateTimeFormat('en', {
        hour: 'numeric',
        minute: 'numeric',
        hourCycle: 'h23'
    }).format(date);
const CustomTimeRangeModal = ({ isOpen, setClosed, timespan, endTime })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("plugin__monitoring-plugin");
    const [, setEndTimeParam] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_11__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_10__.QueryParams.EndTime, use_query_params__WEBPACK_IMPORTED_MODULE_11__.NumberParam);
    const [, setTimeRangeParam] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_11__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_10__.QueryParams.TimeRange, _utils_utils__WEBPACK_IMPORTED_MODULE_12__.TimeRangeParam);
    // If a time is already set in Redux, default to that, otherwise default to a time range that
    // covers all of today
    const now = new Date();
    const defaultFrom = endTime && timespan ? new Date(endTime - timespan) : undefined;
    const [fromDate, setFromDate] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(toISODateString(defaultFrom ?? now));
    const [fromTime, setFromTime] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(defaultFrom ? toISOTimeString(defaultFrom) : '00:00');
    const [toDate, setToDate] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(toISODateString(endTime ? new Date(endTime) : now));
    const [toTime, setToTime] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(endTime ? toISOTimeString(new Date(endTime)) : '23:59');
    const submit = ()=>{
        const from = Date.parse(`${fromDate} ${fromTime}`);
        const to = Date.parse(`${toDate} ${toTime}`);
        if (lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](from) && lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](to)) {
            setEndTimeParam(to);
            setTimeRangeParam(to - from);
            setClosed();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {
        isOpen: isOpen,
        position: "top",
        title: t('Custom time range'),
        onClose: setClosed,
        variant: _patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_5__.ModalVariant.small,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_5__.ModalHeader, {
                title: t('Custom time range')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_5__.ModalBody, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__.Form, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                            label: t('From'),
                            isRequired: true,
                            fieldId: "custom-time-range-from",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__.InputGroup, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__.InputGroupItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DatePicker__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {
                                            onChange: (event, str)=>setFromDate(str),
                                            value: fromDate,
                                            appendTo: ()=>document.body
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__.InputGroupItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TimePicker__WEBPACK_IMPORTED_MODULE_6__.TimePicker, {
                                            is24Hour: true,
                                            onChange: (event, text)=>setFromTime(text),
                                            time: fromTime,
                                            menuAppendTo: ()=>document.body
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Form__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                            label: t('To'),
                            isRequired: true,
                            fieldId: "custom-time-range-to",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__.InputGroup, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__.InputGroupItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_DatePicker__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {
                                            onChange: (event, str)=>setToDate(str),
                                            value: toDate,
                                            appendTo: ()=>document.body
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_InputGroup__WEBPACK_IMPORTED_MODULE_4__.InputGroupItem, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_TimePicker__WEBPACK_IMPORTED_MODULE_6__.TimePicker, {
                                            is24Hour: true,
                                            onChange: (event, text)=>setToTime(text),
                                            time: toTime,
                                            menuAppendTo: ()=>document.body
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Modal__WEBPACK_IMPORTED_MODULE_5__.ModalFooter, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "primary",
                        onClick: submit,
                        children: t('Save')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "secondary",
                        onClick: setClosed,
                        children: t('Cancel')
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTimeRangeModal);


/***/ },

/***/ "./features/legacy-dashboards/components/dashboard-skeleton-legacy.tsx"
/*!*****************************************************************************!*\
  !*** ./features/legacy-dashboards/components/dashboard-skeleton-legacy.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardSkeletonLegacy: () => (/* binding */ DashboardSkeletonLegacy)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Divider */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Divider/@patternfly/react-core/dist/dynamic/components/Divider");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Page */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Page/@patternfly/react-core/dist/dynamic/components/Page");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Split */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Split/@patternfly/react-core/dist/dynamic/layouts/Split");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _shared_components_dashboard_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/dashboard-dropdown */ "./shared/components/dashboard-dropdown.tsx");
/* harmony import */ var _time_dropdowns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time-dropdowns */ "./features/legacy-dashboards/components/time-dropdowns.tsx");
/* harmony import */ var _legacy_variable_dropdowns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./legacy-variable-dropdowns */ "./features/legacy-dashboards/components/legacy-variable-dropdowns.tsx");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_11__);














const HeaderTop = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_11__.ListPageHeader, {
        title: t('Dashboards'),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_6__.Split, {
            hasGutter: true,
            isWrappable: true,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_6__.SplitItem, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_time_dropdowns__WEBPACK_IMPORTED_MODULE_9__.TimespanDropdown, {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_6__.SplitItem, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_time_dropdowns__WEBPACK_IMPORTED_MODULE_9__.PollIntervalDropdown, {})
                })
            ]
        })
    });
});
HeaderTop.displayName = 'HeaderTop';
const DashboardSkeletonLegacy = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ children, boardItems, changeBoard, dashboardName })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("plugin__monitoring-plugin");
    const onChangeBoard = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((selectedDashboard)=>{
        changeBoard({
            newBoard: selectedDashboard
        });
    }, [
        changeBoard
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_11__.DocumentTitle, {
                children: t('Metrics dashboards')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderTop, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Page__WEBPACK_IMPORTED_MODULE_5__.PageSection, {
                hasBodyWrapper: false,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                    hasGutter: true,
                    children: [
                        !lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](boardItems) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_7__.StackItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_dashboard_dropdown__WEBPACK_IMPORTED_MODULE_8__.DashboardDropdown, {
                                items: boardItems,
                                onChange: onChangeBoard,
                                selectedKey: dashboardName
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_7__.StackItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_legacy_variable_dropdowns__WEBPACK_IMPORTED_MODULE_10__.LegacyDashboardsAllVariableDropdowns, {
                                dashboardName: dashboardName
                            }, dashboardName)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_7__.StackItem, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_6__.Split, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_6__.SplitItem, {
                                    isFilled: true
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Divider__WEBPACK_IMPORTED_MODULE_4__.Divider, {}),
            children
        ]
    });
});
DashboardSkeletonLegacy.displayName = 'DashboardSkeletonLegacy';


/***/ },

/***/ "./features/legacy-dashboards/components/error.tsx"
/*!*********************************************************!*\
  !*** ./features/legacy-dashboards/components/error.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Panel */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Panel/@patternfly/react-core/dist/dynamic/components/Panel");





const ErrorAlert = ({ error })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_1__.Alert, {
        isInline: true,
        title: error.name,
        variant: "danger",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Panel__WEBPACK_IMPORTED_MODULE_2__.Panel, {
            isScrollable: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Panel__WEBPACK_IMPORTED_MODULE_2__.PanelMain, {
                maxHeight: "100px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Panel__WEBPACK_IMPORTED_MODULE_2__.PanelMainBody, {
                    children: error.message
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorAlert);


/***/ },

/***/ "./features/legacy-dashboards/components/legacy-dashboard.tsx"
/*!********************************************************************!*\
  !*** ./features/legacy-dashboards/components/legacy-dashboard.tsx ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LegacyDashboard: () => (/* binding */ LegacyDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isNil.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isUndefined.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/kebabCase.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/some.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/toInteger.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/trimEnd.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Card */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Card/@patternfly/react-core/dist/dynamic/components/Card");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Dropdown */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Dropdown/@patternfly/react-core/dist/dynamic/components/Dropdown");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Grid */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Grid/@patternfly/react-core/dist/dynamic/layouts/Grid");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Flex */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Flex/@patternfly/react-core/dist/dynamic/layouts/Flex");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_ExpandableSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/ExpandableSection */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/ExpandableSection/@patternfly/react-core/dist/dynamic/components/ExpandableSection");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Spinner */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Spinner/@patternfly/react-core/dist/dynamic/components/Spinner");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _panels_bar_chart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./panels/bar-chart */ "./features/legacy-dashboards/components/panels/bar-chart.tsx");
/* harmony import */ var _panels_graph__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./panels/graph */ "./features/legacy-dashboards/components/panels/graph.tsx");
/* harmony import */ var _panels_single_stat__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./panels/single-stat */ "./features/legacy-dashboards/components/panels/single-stat.tsx");
/* harmony import */ var _panels_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./panels/table */ "./features/legacy-dashboards/components/panels/table.tsx");
/* harmony import */ var _shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _shared_hooks_useIsVisible__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/hooks/useIsVisible */ "./shared/hooks/useIsVisible.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");
/* harmony import */ var _shared_components_KebabDropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/components/KebabDropdown */ "./shared/components/KebabDropdown.tsx");
/* harmony import */ var _legacy_variable_dropdowns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./legacy-variable-dropdowns */ "./features/legacy-dashboards/components/legacy-variable-dropdowns.tsx");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_lib_extensions_dashboard_data_source__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk/lib/extensions/dashboard-data-source */ "../node_modules/@openshift-console/dynamic-plugin-sdk/lib/extensions/dashboard-data-source.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_global_font_size_heading_h2.js");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../utils/utils */ "./features/legacy-dashboards/utils/utils.ts");



































const QueryBrowserLink = ({ queries, customDataSourceName, units })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_17__.useTranslation)("plugin__monitoring-plugin");
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_26__.usePerspective)();
    const { namespace } = (0,_shared_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_27__.useMonitoringNamespace)();
    const params = new URLSearchParams();
    queries.forEach((q, i)=>params.set(`query${i}`, q));
    if (units) {
        params.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_30__.QueryParams.Units, units);
    }
    if (customDataSourceName) {
        params.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_30__.QueryParams.Datasource, customDataSourceName);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_19__.Link, {
        "aria-label": t('Inspect'),
        to: (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_26__.getMutlipleQueryBrowserUrl)(perspective, params, namespace),
        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_33__.LegacyDashboardPageTestIDs.Inspect,
        children: t('Inspect')
    });
};
// Determine how many columns a panel should span. If panel specifies a `span`, use that. Otherwise
// look for a `breakpoint` percentage. If neither are specified, default to 12 (full width).
const getPanelSpan = (panel)=>{
    if (panel.span) {
        return panel.span;
    }
    const breakpoint = lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](panel.breakpoint, '%'));
    if (breakpoint > 0) {
        return Math.round(12 * (breakpoint / 100));
    }
    return 12;
};
const Card = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_16__.memo)(({ panel, perspective, dashboardName })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_17__.useTranslation)("plugin__monitoring-plugin");
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_34__.useMonitoring)();
    const variables = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_26__.getObserveState)(plugin, state).dashboards.legacy[dashboardName]?.variables || {});
    // Directly use the namespace variable to prevent desync
    const namespace = variables?.['namespace'];
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_16__.useRef)();
    const [, wasEverVisible] = (0,_shared_hooks_useIsVisible__WEBPACK_IMPORTED_MODULE_25__.useIsVisible)(ref);
    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false);
    const [dataSourceInfoLoading, setDataSourceInfoLoading] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(true);
    const [customDataSource, setCustomDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(undefined);
    const [isChartLoading, setIsChartLoading] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(panel.type === 'graph');
    const customDataSourceName = panel.datasource?.name;
    const [extensions, extensionsResolved] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__.useResolvedExtensions)(_openshift_console_dynamic_plugin_sdk_lib_extensions_dashboard_data_source__WEBPACK_IMPORTED_MODULE_31__.isDataSource);
    const [refreshInterval] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_35__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_30__.QueryParams.RefreshInterval, _utils_utils__WEBPACK_IMPORTED_MODULE_36__.RefreshIntervalParam);
    const [timeRange] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_35__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_30__.QueryParams.TimeRange, _utils_utils__WEBPACK_IMPORTED_MODULE_36__.TimeRangeParam);
    const hasExtensions = !lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](extensions);
    const formatSeriesTitle = (0,react__WEBPACK_IMPORTED_MODULE_16__.useCallback)((labels, i)=>{
        const title = panel.targets?.[i]?.legendFormat;
        if (lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](title)) {
            return lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](labels) ? '{}' : '';
        }
        // Replace Prometheus labels surrounded by {{ }} in the graph legend label templates
        // Regex is based on https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels
        // with additional matchers to allow leading and trailing whitespace
        return title.replace(/{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g, (match, key)=>labels[key] ?? '');
    }, [
        panel
    ]);
    const [csvData, setCsvData] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)([]);
    const csvExportHandler = ()=>{
        let csvString = '';
        const result = {};
        const seriesNames = [];
        for(let i = 0; i < csvData.length; i++){
            const query = csvData[i];
            for (const series of query){
                if (!series[0]) {
                    continue;
                }
                const name = formatSeriesTitle(series[0], i);
                seriesNames.push(name);
                if (!name) {
                    continue;
                }
                if (!Array.isArray(series[1])) {
                    continue;
                }
                for (const entry of series[1]){
                    const dateTime = entry.x.toISOString();
                    const value = entry.y;
                    if (!result[dateTime]) {
                        result[dateTime] = {};
                    }
                    result[dateTime][name] = value;
                }
            }
        }
        const uniqueSeriesNames = new Set(seriesNames);
        const uniqueSeriesArray = Array.from(uniqueSeriesNames);
        csvString = `DateTime,${uniqueSeriesArray.join(',')}\n`;
        for(const dateTime in result){
            const temp = [];
            for (const name of uniqueSeriesArray){
                temp.push(result[dateTime][name]);
            }
            csvString += `${dateTime},${temp.join(',')}\n`;
        }
        const blobCsvData = new Blob([
            csvString
        ], {
            type: 'text/csv'
        });
        const csvURL = URL.createObjectURL(blobCsvData);
        const link = document.createElement('a');
        link.href = csvURL;
        link.download = `graphData.csv`;
        link.click();
    };
    const isThereCsvData = ()=>{
        if (csvData.length > 0) {
            if (csvData[0].length > 0) {
                return true;
            }
        }
        return false;
    };
    const dropdownItems = [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Dropdown__WEBPACK_IMPORTED_MODULE_11__.DropdownItem, {
            component: "button",
            onClick: csvExportHandler,
            isDisabled: !isThereCsvData(),
            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_33__.LegacyDashboardPageTestIDs.ExportAsCsv,
            children: t('Export as CSV')
        }, "action")
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(()=>{
        const getCustomDataSource = async ()=>{
            if (!customDataSourceName) {
                setDataSourceInfoLoading(false);
                setCustomDataSource(null);
            } else if (!extensionsResolved) {
                setDataSourceInfoLoading(true);
            } else if (hasExtensions) {
                const extension = extensions.find((ext)=>ext?.properties?.contextId === 'monitoring-dashboards');
                const getDataSource = extension?.properties?.getDataSource;
                const dataSource = await getDataSource?.(customDataSourceName);
                if (!dataSource || !dataSource.basePath) {
                    setIsError(true);
                    setDataSourceInfoLoading(false);
                } else {
                    setCustomDataSource(dataSource);
                    setDataSourceInfoLoading(false);
                }
            } else {
                setDataSourceInfoLoading(false);
                setIsError(true);
            }
        };
        getCustomDataSource().catch((err)=>{
            // eslint-disable-next-line no-console
            console.error(err);
            setIsError(true);
        });
    }, [
        extensions,
        extensionsResolved,
        customDataSourceName,
        hasExtensions
    ]);
    const panelBreakpoints = (0,react__WEBPACK_IMPORTED_MODULE_16__.useMemo)(()=>{
        const panelSpan = getPanelSpan(panel);
        return {
            sm: 12,
            md: Math.max(panelSpan, 6),
            lg: Math.max(panelSpan, 4),
            xl: Math.max(panelSpan, 3)
        };
    }, [
        panel
    ]);
    if (panel.type === 'row') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](panel.panels, (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Card, {
                    panel: p,
                    perspective: perspective,
                    dashboardName: dashboardName
                }, p.id))
        });
    }
    if (![
        'gauge',
        'grafana-piechart-panel',
        'graph',
        'singlestat',
        'table'
    ].includes(panel.type)) {
        return null;
    }
    const rawQueries = lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](panel.targets, 'expr');
    if (!rawQueries.length) {
        return null;
    }
    const queries = rawQueries.map((expr)=>(0,_legacy_variable_dropdowns__WEBPACK_IMPORTED_MODULE_29__.evaluateVariableTemplate)(expr, variables, timeRange, namespace?.value ?? ''));
    const isLoading = lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](queries, lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"]) && dataSourceInfoLoading || customDataSource === undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_12__.GridItem, {
        span: panelBreakpoints.sm,
        md: panelBreakpoints.md,
        lg: panelBreakpoints.lg,
        xl: panelBreakpoints.xl,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_10__.Card, {
            "data-test": `${panel.title.toLowerCase().replace(/\s+/g, '-')}-chart`,
            "data-test-id": panel.id ? `chart-${panel.id}` : undefined,
            style: {
                overflow: 'visible'
            },
            isFullHeight: true,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_10__.CardHeader, {
                    actions: {
                        actions: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                (isLoading || isChartLoading) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Spinner__WEBPACK_IMPORTED_MODULE_15__.Spinner, {
                                    size: "md",
                                    "aria-label": t('Loading')
                                }),
                                !isLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(QueryBrowserLink, {
                                    queries: queries,
                                    customDataSourceName: customDataSourceName,
                                    units: panel?.yaxes?.[0]?.format
                                }),
                                panel.type === 'graph' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_KebabDropdown__WEBPACK_IMPORTED_MODULE_28__["default"], {
                                    dropdownItems: dropdownItems
                                })
                            ]
                        }),
                        hasNoOffset: true
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_10__.CardTitle, {
                        children: panel.title
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Card__WEBPACK_IMPORTED_MODULE_10__.CardBody, {
                    children: isError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_9__.RedExclamationCircleIcon, {}),
                            " ",
                            t('Error loading card')
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        ref: ref,
                        style: {
                            height: '100%',
                            minHeight: 180
                        },
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_33__.LegacyDashboardPageTestIDs.Graph,
                        children: !isLoading && wasEverVisible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                panel.type === 'grafana-piechart-panel' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_panels_bar_chart__WEBPACK_IMPORTED_MODULE_20__["default"], {
                                    pollInterval: refreshInterval,
                                    query: queries[0],
                                    customDataSource: customDataSource
                                }),
                                panel.type === 'graph' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_panels_graph__WEBPACK_IMPORTED_MODULE_21__["default"], {
                                    formatSeriesTitle: formatSeriesTitle,
                                    isStack: panel.stack,
                                    onLoadingChange: setIsChartLoading,
                                    pollInterval: refreshInterval,
                                    queries: queries,
                                    showLegend: panel.legend?.show,
                                    units: panel.yaxes?.[0]?.format,
                                    customDataSource: customDataSource,
                                    onDataChange: (data)=>setCsvData(data)
                                }),
                                (panel.type === 'singlestat' || panel.type === 'gauge') && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_panels_single_stat__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                    panel: panel,
                                    pollInterval: refreshInterval,
                                    query: queries[0],
                                    namespace: namespace?.value ?? '',
                                    customDataSource: customDataSource
                                }),
                                panel.type === 'table' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_panels_table__WEBPACK_IMPORTED_MODULE_23__["default"], {
                                    panel: panel,
                                    pollInterval: refreshInterval,
                                    queries: queries,
                                    namespace: namespace?.value ?? '',
                                    customDataSource: customDataSource
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
});
Card.displayName = 'Card';
const PanelsRow = ({ row, perspective, dashboardName })=>{
    const showButton = row.showTitle && !lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](row.title);
    const [isExpanded, toggleIsExpanded] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_24__.useBoolean)(showButton ? !row.collapse : true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_13__.Flex, {
        direction: {
            default: 'column'
        },
        "data-test-id": `panel-${lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](row?.title)}`,
        children: [
            showButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_13__.FlexItem, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_ExpandableSection__WEBPACK_IMPORTED_MODULE_14__.ExpandableSectionToggle, {
                    isExpanded: isExpanded,
                    onToggle: toggleIsExpanded,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        style: {
                            fontSize: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_32__.t_global_font_size_heading_h2.var
                        },
                        children: row.title
                    })
                })
            }),
            isExpanded && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_13__.FlexItem, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Grid__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                    hasGutter: true,
                    children: lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](row.panels, (panel)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Card, {
                            panel: panel,
                            perspective: perspective,
                            dashboardName: dashboardName
                        }, panel.id))
                })
            })
        ]
    });
};
const LegacyDashboard = ({ rows, perspective, dashboardName })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_13__.Flex, {
        direction: {
            default: 'column'
        },
        children: rows.map((row)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Flex__WEBPACK_IMPORTED_MODULE_13__.FlexItem, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelsRow, {
                    row: row,
                    perspective: perspective,
                    dashboardName: dashboardName
                })
            }, row.panels.map((panel)=>`${panel.id}-${row.title}`).join()))
    });


/***/ },

/***/ "./features/legacy-dashboards/components/legacy-variable-dropdowns.tsx"
/*!*****************************************************************************!*\
  !*** ./features/legacy-dashboards/components/legacy-variable-dropdowns.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LegacyDashboardsAllVariableDropdowns: () => (/* binding */ LegacyDashboardsAllVariableDropdowns),
/* harmony export */   evaluateVariableTemplate: () => (/* reexport safe */ _utils_variable_utils__WEBPACK_IMPORTED_MODULE_25__.evaluateVariableTemplate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/MenuToggle */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/MenuToggle/@patternfly/react-core/dist/dynamic/components/MenuToggle");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Select/@patternfly/react-core/dist/dynamic/components/Select");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Split */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Split/@patternfly/react-core/dist/dynamic/layouts/Split");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Tooltip */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Tooltip/@patternfly/react-core/dist/dynamic/components/Tooltip");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/flatMap.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/values.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/console/utils/safe-fetch-hook */ "./shared/console/utils/safe-fetch-hook.ts");
/* harmony import */ var _shared_console_utils_single_typeahead_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/console/utils/single-typeahead-dropdown */ "./shared/console/utils/single-typeahead-dropdown.tsx");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_lib_extensions_dashboard_data_source__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk/lib/extensions/dashboard-data-source */ "../node_modules/@openshift-console/dynamic-plugin-sdk/lib/extensions/dashboard-data-source.js");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");
/* harmony import */ var _shared_store_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/store/actions */ "./shared/store/actions.ts");
/* harmony import */ var _shared_hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/hooks/useDeepMemo */ "./shared/hooks/useDeepMemo.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utils/utils */ "./features/legacy-dashboards/utils/utils.ts");
/* harmony import */ var _utils_variable_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../utils/variable-utils */ "./features/legacy-dashboards/utils/variable-utils.ts");




























const LegacyDashboardsVariableOption = ({ value, isSelected, ...rest })=>(0,_utils_variable_utils__WEBPACK_IMPORTED_MODULE_25__.isIntervalVariable)(String(value)) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
        content: value,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectOption, {
            value: value,
            isSelected: isSelected || false,
            children: "Auto interval"
        })
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.SelectOption, {
        value: value,
        isSelected: isSelected || false,
        ...rest,
        children: value === _utils_utils__WEBPACK_IMPORTED_MODULE_24__.MONITORING_DASHBOARDS_VARIABLE_ALL_OPTION_KEY ? 'All' : value
    });
const LegacyDashboardsVariableDropdown = ({ id, name, dashboardName })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)("plugin__monitoring-plugin");
    const { plugin, accessCheckLoading, useMetricsTenancy } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_19__.useMonitoring)();
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_22__.usePerspective)();
    const [namespace] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useActiveNamespace)();
    const [queryParam, setQueryParam] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_18__.useQueryParam)(name, use_query_params__WEBPACK_IMPORTED_MODULE_18__.StringParam);
    const [timespan] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_18__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_23__.QueryParams.TimeRange, _utils_utils__WEBPACK_IMPORTED_MODULE_24__.TimeRangeParam);
    const variables = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_22__.getObserveState)(plugin, state).dashboards.legacy[dashboardName]?.variables || {});
    const variable = variables?.[name];
    const options = (0,_shared_hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_21__.useDeepMemo)(()=>{
        return variable?.options;
    }, [
        variable?.options
    ]);
    const query = (0,_utils_variable_utils__WEBPACK_IMPORTED_MODULE_25__.evaluateVariableTemplate)(variable?.query, variables, timespan, namespace);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const safeFetch = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((0,_shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_14__.useSafeFetch)(), []);
    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
    const customDataSourceName = variable?.datasource?.name;
    const [extensions, extensionsResolved] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.useResolvedExtensions)(_openshift_console_dynamic_plugin_sdk_lib_extensions_dashboard_data_source__WEBPACK_IMPORTED_MODULE_17__.isDataSource);
    const hasExtensions = !lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](extensions);
    // Don't set namespace param while in dev perspective
    const shouldSetQueryParam = !(perspective === 'dev' && name === 'namespace');
    const getURL = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(async (prometheusProps)=>{
        try {
            if (!customDataSourceName) {
                return (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_16__.buildPrometheusUrl)({
                    prometheusUrlProps: prometheusProps,
                    basePath: (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_16__.getPrometheusBasePath)({
                        prometheus: 'cmo',
                        useTenancyPath: useMetricsTenancy
                    })
                });
            } else if (extensionsResolved && hasExtensions) {
                const extension = extensions.find((ext)=>ext?.properties?.contextId === 'monitoring-dashboards');
                const getDataSource = extension?.properties?.getDataSource;
                const dataSource = await getDataSource?.(customDataSourceName);
                if (!dataSource || !dataSource.basePath) {
                    setIsError(true);
                    return;
                }
                return (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_16__.buildPrometheusUrl)({
                    prometheusUrlProps: prometheusProps,
                    basePath: (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_16__.getPrometheusBasePath)({
                        prometheus: 'cmo',
                        useTenancyPath: useMetricsTenancy,
                        basePathOverride: dataSource?.basePath
                    })
                });
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            setIsError(true);
        }
    }, [
        customDataSourceName,
        extensions,
        extensionsResolved,
        hasExtensions,
        useMetricsTenancy
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        if (!query || accessCheckLoading) {
            return;
        }
        // Convert label_values queries to something Prometheus can handle
        // TODO: Once the Prometheus /series endpoint is available through the API proxy, this should
        // be converted to use that instead
        const prometheusQuery = query.replace(/label_values\((.*), (.*)\)/, 'count($1) by ($2)');
        const timeRanges = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_16__.getTimeRanges)(timespan);
        const newOptions = new Set();
        let abortError = false;
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_20__.dashboardsPatchVariable)(dashboardName, name, {
            isLoading: true
        }));
        Promise.allSettled(timeRanges.map(async (timeRange)=>{
            const prometheusProps = {
                endpoint: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.PrometheusEndpoint.QUERY_RANGE,
                query: prometheusQuery,
                samples: Math.ceil(_utils_utils__WEBPACK_IMPORTED_MODULE_24__.DEFAULT_GRAPH_SAMPLES / timeRanges.length),
                timeout: '60s',
                timespan: timeRange.duration,
                namespace,
                endTime: timeRange.endTime
            };
            return getURL(prometheusProps).then((url)=>safeFetch(url).then(({ data })=>{
                    const responseOptions = lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](data?.result, ({ metric })=>lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"](metric));
                    responseOptions.forEach(newOptions.add, newOptions);
                }).catch((err)=>{
                    if ((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_16__.isTimeoutError)(err)) {
                        // eslint-disable-next-line no-console
                        console.error(`Timed Out Retrieving Labels from ${new Date(timeRange.endTime - _shared_utils_utils__WEBPACK_IMPORTED_MODULE_16__.QUERY_CHUNK_SIZE).toISOString()} - ${new Date(timeRange.endTime).toISOString()} for ${query}`);
                    } else if (err.name === 'AbortError') {
                        abortError = true;
                    } else {
                        // eslint-disable-next-line no-console
                        console.error(err);
                    }
                }));
        })).then((results)=>{
            const errors = results.filter((result)=>result.status === 'rejected').length > 0;
            if (newOptions.size > 0 || !errors) {
                setIsError(false);
                // Options were found or no options were found but that wasn't in error
                const newOptionArray = Array.from(newOptions).sort();
                dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_20__.dashboardsVariableOptionsLoaded)(dashboardName, name, newOptionArray));
            } else {
                // No options were found, and there were errors (timeouts or other) in fetching the data
                dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_20__.dashboardsPatchVariable)(dashboardName, name, {
                    isLoading: false
                }));
                if (!abortError) {
                    setIsError(true);
                }
            }
        });
    }, [
        dispatch,
        getURL,
        dashboardName,
        name,
        namespace,
        query,
        safeFetch,
        timespan,
        variable?.includeAll,
        options,
        accessCheckLoading
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        // Wait to set variable and query values until all options have been loaded
        if (variable?.value !== queryParam && options?.length > 0) {
            // Default to using the query param to allow for sharable links
            if (queryParam && options?.includes(queryParam)) {
                dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_20__.dashboardsPatchVariable)(dashboardName, name, {
                    value: queryParam
                }));
            } else // set the url if it isn't set
            if (variable?.value && shouldSetQueryParam) {
                setQueryParam(variable?.value);
            }
        }
    }, [
        dashboardName,
        name,
        variable?.value,
        queryParam,
        setQueryParam,
        dispatch,
        shouldSetQueryParam,
        options
    ]);
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((v)=>{
        if (v !== variable?.value && shouldSetQueryParam) {
            setQueryParam(v);
            dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_20__.dashboardsPatchVariable)(dashboardName, name, {
                value: v
            }));
        }
    }, [
        dispatch,
        dashboardName,
        name,
        variable?.value,
        setQueryParam,
        shouldSetQueryParam
    ]);
    if (variable?.isHidden || !isError && lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](variable?.options)) {
        return null;
    }
    const items = (variable?.includeAll ? [
        {
            value: _utils_utils__WEBPACK_IMPORTED_MODULE_24__.MONITORING_DASHBOARDS_VARIABLE_ALL_OPTION_KEY,
            children: 'All'
        }
    ] : []).concat(lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"](variable?.options, (option)=>({
            value: option,
            children: option
        })));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_4__.SplitItem, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_5__.Stack, {
            "data-test": `${name.toLowerCase()}-dropdown`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_5__.StackItem, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                        htmlFor: `${id}-dropdown`,
                        style: {
                            textTransform: 'capitalize'
                        },
                        children: name
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_5__.StackItem, {
                    children: isError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_3__.Select, {
                        toggle: (toggleRef)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_MenuToggle__WEBPACK_IMPORTED_MODULE_2__.MenuToggle, {
                                ref: toggleRef,
                                isDisabled: true,
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.RedExclamationCircleIcon, {}),
                                    " ",
                                    t('Error loading options')
                                ]
                            })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_utils_single_typeahead_dropdown__WEBPACK_IMPORTED_MODULE_15__.SingleTypeaheadDropdown, {
                        items: items,
                        onChange: onChange,
                        OptionComponent: LegacyDashboardsVariableOption,
                        selectedKey: variable?.value,
                        hideClearButton: true,
                        resizeToFit: true,
                        placeholder: t('Select a dashboard from the dropdown')
                    })
                })
            ]
        })
    });
};
// Expects to be inside of a Patternfly Split Component
const LegacyDashboardsAllVariableDropdowns = ({ dashboardName })=>{
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_19__.useMonitoring)();
    const variables = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)((state)=>(0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_22__.getObserveState)(plugin, state).dashboards.legacy[dashboardName]?.variables || {});
    if (!variables || Object.keys(variables).length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Split__WEBPACK_IMPORTED_MODULE_4__.Split, {
        hasGutter: true,
        isWrappable: true,
        children: Object.keys(variables).map((name)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LegacyDashboardsVariableDropdown, {
                id: name,
                name: name,
                dashboardName: dashboardName
            }, `${dashboardName}-${name}`))
    });
};


/***/ },

/***/ "./features/legacy-dashboards/components/panels/bar-chart.tsx"
/*!********************************************************************!*\
  !*** ./features/legacy-dashboards/components/panels/bar-chart.tsx ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _shared_console_graphs_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/console/graphs/bar */ "./shared/console/graphs/bar.tsx");


const BarChart = ({ customDataSource, pollInterval, query })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_graphs_bar__WEBPACK_IMPORTED_MODULE_1__.Bar, {
        barSpacing: 5,
        barWidth: 8,
        customDataSource: customDataSource,
        delay: pollInterval,
        query: query
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarChart);


/***/ },

/***/ "./features/legacy-dashboards/components/panels/graph.tsx"
/*!****************************************************************!*\
  !*** ./features/legacy-dashboards/components/panels/graph.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _shared_components_query_browser_query_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/query-browser/query-browser */ "./shared/components/query-browser/query-browser.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./features/legacy-dashboards/utils/utils.ts");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/query-params */ "./shared/constants/query-params.ts");






// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Graph = ({ customDataSource, formatSeriesTitle, isStack, onLoadingChange, pollInterval, queries, showLegend, units, onDataChange })=>{
    const [timeRange, setTimeRange] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_2__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_5__.QueryParams.TimeRange, _utils_utils__WEBPACK_IMPORTED_MODULE_4__.TimeRangeParam);
    const [endTime, setEndTime] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_2__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_5__.QueryParams.EndTime, use_query_params__WEBPACK_IMPORTED_MODULE_2__.NumberParam);
    const onZoom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((from, to)=>{
        setEndTime(to);
        setTimeRange(to - from);
    }, [
        setEndTime,
        setTimeRange
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_query_browser_query_browser__WEBPACK_IMPORTED_MODULE_3__.QueryBrowser, {
        customDataSource: customDataSource,
        defaultSamples: _utils_utils__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GRAPH_SAMPLES,
        fixedEndTime: endTime,
        formatSeriesTitle: formatSeriesTitle,
        hideControls: true,
        isStack: isStack,
        onLoadingChange: onLoadingChange,
        onZoom: onZoom,
        pollInterval: pollInterval,
        queries: queries,
        showLegend: showLegend,
        timespan: timeRange,
        units: units,
        onDataChange: onDataChange,
        isPlain: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);


/***/ },

/***/ "./features/legacy-dashboards/components/panels/single-stat.tsx"
/*!**********************************************************************!*\
  !*** ./features/legacy-dashboards/components/panels/single-stat.tsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/sortedIndexBy.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Bullseye */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Bullseye/@patternfly/react-core/dist/dynamic/layouts/Bullseye");
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../error */ "./features/legacy-dashboards/components/error.tsx");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _shared_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/console/utils/poll-hook */ "./shared/console/utils/poll-hook.ts");
/* harmony import */ var _shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/console/utils/safe-fetch-hook */ "./shared/console/utils/safe-fetch-hook.ts");
/* harmony import */ var _shared_components_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/format */ "./shared/components/format.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/console/console-shared/src/components/loading/LoadingInline */ "./shared/console/console-shared/src/components/loading/LoadingInline.tsx");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_blue_100.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_blue_200.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_blue_300.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_blue_400.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_blue_500.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_green_100.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_green_200.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_green_300.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_green_400.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_green_500.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_orange_100.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_orange_200.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_orange_300.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_orange_400.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_orange_500.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_purple_100.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_purple_200.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_purple_300.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_purple_400.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_purple_500.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_red_orange_100.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_red_orange_200.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_red_orange_300.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_red_orange_400.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_red_orange_500.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_yellow_100.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_yellow_200.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_yellow_300.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_yellow_400.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @patternfly/react-tokens */ "../node_modules/@patternfly/react-tokens/dist/esm/t_chart_color_yellow_500.js");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");















const colorMap = {
    'super-light-blue': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_14__.t_chart_color_blue_100,
    'light-blue': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_15__.t_chart_color_blue_200,
    blue: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_16__.t_chart_color_blue_300,
    'semi-dark-blue': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_17__.t_chart_color_blue_400,
    'dark-blue': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_18__.t_chart_color_blue_500,
    'super-light-green': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_19__.t_chart_color_green_100,
    'light-green': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_20__.t_chart_color_green_200,
    green: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_21__.t_chart_color_green_300,
    'semi-dark-green': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_22__.t_chart_color_green_400,
    'dark-green': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_23__.t_chart_color_green_500,
    'super-light-orange': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_24__.t_chart_color_orange_100,
    'light-orange': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_25__.t_chart_color_orange_200,
    orange: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_26__.t_chart_color_orange_300,
    'semi-dark-orange': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_27__.t_chart_color_orange_400,
    'dark-orange': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_28__.t_chart_color_orange_500,
    'super-light-purple': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_29__.t_chart_color_purple_100,
    'light-purple': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_30__.t_chart_color_purple_200,
    purple: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_31__.t_chart_color_purple_300,
    'semi-dark-purple': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_32__.t_chart_color_purple_400,
    'dark-purple': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_33__.t_chart_color_purple_500,
    'super-light-red': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_34__.t_chart_color_red_orange_100,
    'light-red': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_35__.t_chart_color_red_orange_200,
    red: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_36__.t_chart_color_red_orange_300,
    'semi-dark-red': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_37__.t_chart_color_red_orange_400,
    'dark-red': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_38__.t_chart_color_red_orange_500,
    'super-light-yellow': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_39__.t_chart_color_yellow_100,
    'light-yellow': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_40__.t_chart_color_yellow_200,
    yellow: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_41__.t_chart_color_yellow_300,
    'semi-dark-yellow': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_42__.t_chart_color_yellow_400,
    'dark-yellow': _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_43__.t_chart_color_yellow_500
};
const getColorCSS = (colorName)=>colorMap[colorName] ? colorMap[colorName].var : undefined;
const Body = ({ children, color })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_5__.Bullseye, {
        style: {
            color
        },
        children: children
    });
const SingleStat = ({ customDataSource, namespace, panel, pollInterval, query })=>{
    const { decimals, format, options, postfix, postfixFontSize, prefix, prefixFontSize, valueFontSize, valueMaps } = panel;
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)("plugin__monitoring-plugin");
    const { accessCheckLoading, useMetricsTenancy } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_44__.useMonitoring)();
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const safeFetch = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((0,_shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_10__.useSafeFetch)(), []);
    const url = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__.buildPrometheusUrl)({
        prometheusUrlProps: {
            endpoint: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_4__.PrometheusEndpoint.QUERY,
            query,
            namespace
        },
        basePath: (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__.getPrometheusBasePath)({
            prometheus: 'cmo',
            useTenancyPath: useMetricsTenancy,
            basePathOverride: customDataSource?.basePath
        })
    });
    const tick = ()=>{
        if (!url || accessCheckLoading) {
            return;
        }
        safeFetch(url).then((response)=>{
            setError(undefined);
            setIsLoading(false);
            setValue(lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](response, 'data.result[0].value[1]'));
        }).catch((err)=>{
            if (err.name !== 'AbortError') {
                setError(lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](err, 'json.error', err.message));
                setIsLoading(false);
                setValue(undefined);
            }
        });
    };
    (0,_shared_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_9__.usePoll)(tick, pollInterval, query, accessCheckLoading, useMetricsTenancy);
    const filteredVMs = valueMaps?.filter((vm)=>vm.op === '=');
    const valueMap = value === undefined ? filteredVMs?.find((vm)=>vm.value === 'null') : filteredVMs?.find((vm)=>vm.value === value);
    if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_13__.LoadingInline, {});
    }
    if (error) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_error__WEBPACK_IMPORTED_MODULE_7__["default"], {
            error: {
                message: error,
                name: t('An error occurred')
            }
        });
    }
    let color;
    const thresholds = options?.fieldOptions?.thresholds;
    if (thresholds && value !== undefined) {
        const thresholdIndex = lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](thresholds, {
            value: Number(value)
        }, (t)=>Number(t.value)) - 1;
        color = getColorCSS(thresholds[thresholdIndex]?.color);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Body, {
        color: color,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_6__.Title, {
            headingLevel: "h3",
            size: "3xl",
            children: [
                prefix && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    style: {
                        fontSize: prefixFontSize,
                        color
                    },
                    children: prefix
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    style: {
                        fontSize: valueFontSize,
                        color
                    },
                    children: valueMap ? valueMap.text : (0,_shared_components_format__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(value, decimals, format)
                }),
                postfix && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    style: {
                        fontSize: postfixFontSize
                    },
                    children: postfix
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleStat);


/***/ },

/***/ "./features/legacy-dashboards/components/panels/table.tsx"
/*!****************************************************************!*\
  !*** ./features/legacy-dashboards/components/panels/table.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/@patternfly/react-table/dist/dynamic/components/Table");
/* harmony import */ var _patternfly_react_table_dist_dynamic_components_Table_utils_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table/dist/dynamic/components/Table/utils/decorators */ "webpack/sharing/consume/default/@patternfly/react-table/dist/dynamic/components/Table/utils/decorators/@patternfly/react-table/dist/dynamic/components/Table/utils/decorators");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isFinite.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isNil.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/orderBy.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../error */ "./features/legacy-dashboards/components/error.tsx");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _shared_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/console/utils/poll-hook */ "./shared/console/utils/poll-hook.ts");
/* harmony import */ var _shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/console/utils/safe-fetch-hook */ "./shared/console/utils/safe-fetch-hook.ts");
/* harmony import */ var _shared_components_format__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/format */ "./shared/components/format.tsx");
/* harmony import */ var _shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/table/table-pagination */ "./shared/components/table/table-pagination.tsx");
/* harmony import */ var _shared_console_graphs_graph_empty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/console/graphs/graph-empty */ "./shared/console/graphs/graph-empty.tsx");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");






















// Get the columns from the panel styles. Filters out hidden columns and orders
// them so the label columns are displayed first.
const getColumns = (styles)=>{
    const labelColumns = [];
    const valueColumns = [];
    styles.forEach((col)=>{
        // Remove hidden or regex columns.
        if (col.type === 'hidden' || col.pattern.startsWith('/') || !col.alias) {
            return;
        }
        if (col.pattern.startsWith('Value #')) {
            valueColumns.push(col);
        } else if (col.pattern === 'Value') {
            // Set the column to use the first group pattern because the panel has a single target
            valueColumns.push({
                ...col,
                pattern: 'Value #A'
            });
        } else {
            labelColumns.push({
                ...col
            });
        }
    });
    // Show non-value columns first.
    return [
        ...labelColumns,
        ...valueColumns
    ];
};
const Table = ({ customDataSource, panel, pollInterval, queries, namespace })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)("plugin__monitoring-plugin");
    const { accessCheckLoading, useMetricsTenancy } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_19__.useMonitoring)();
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)();
    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(true);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)();
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(1);
    const [perPage, setPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_17__.ITEMS_PER_PAGE[0]);
    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({
        index: 0,
        direction: 'asc'
    });
    const onSort = (e, index, direction)=>setSortBy({
            index,
            direction
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const safeFetch = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)((0,_shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_15__.useSafeFetch)(), []);
    const tick = ()=>{
        if (accessCheckLoading) {
            return;
        }
        const allPromises = lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](queries, (query)=>lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](query) ? Promise.resolve() : safeFetch((0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_13__.buildPrometheusUrl)({
                prometheusUrlProps: {
                    endpoint: _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.PrometheusEndpoint.QUERY,
                    query,
                    namespace
                },
                basePath: (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_13__.getPrometheusBasePath)({
                    prometheus: 'cmo',
                    useTenancyPath: useMetricsTenancy,
                    basePathOverride: customDataSource?.basePath
                })
            })));
        Promise.all(allPromises).then((responses)=>{
            setError(undefined);
            setLoading(false);
            // Note: This makes the following assumptions about the data:
            // 1. The transform is `table`
            // 2. The value will be an instance vector (single value).
            // 3. The time column is hidden.
            // The Grafana implementation is much more involved. See
            //   https://grafana.com/docs/grafana/latest/features/panels/table_panel/#merge-multiple-queries-per-table
            setData(responses.reduce((acc, response, i)=>{
                if (response) {
                    const id = panel.targets[i].refId;
                    response.data.result.forEach(({ metric, value })=>{
                        const tag = Object.values(metric).join('-');
                        if (!acc[tag]) {
                            acc[tag] = {
                                ...metric
                            };
                        }
                        acc[tag][`Value #${id}`] = value[1] || '';
                    });
                }
                return acc;
            }, // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {}));
        }).catch((err)=>{
            if (err.name !== 'AbortError') {
                setError(lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](err, 'json.error', err.message));
                setLoading(false);
                setData(undefined);
            }
        });
    };
    (0,_shared_console_utils_poll_hook__WEBPACK_IMPORTED_MODULE_14__.usePoll)(tick, pollInterval, queries, useMetricsTenancy, accessCheckLoading);
    if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_graphs_graph_empty__WEBPACK_IMPORTED_MODULE_18__.GraphEmpty, {
            loading: true
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_error__WEBPACK_IMPORTED_MODULE_12__["default"], {
            error: {
                message: error,
                name: t('An error occurred')
            }
        });
    }
    if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](panel.styles)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_error__WEBPACK_IMPORTED_MODULE_12__["default"], {
            error: {
                message: t('panel.styles attribute not found'),
                name: t('An error occurred')
            }
        });
    }
    if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](data)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_graphs_graph_empty__WEBPACK_IMPORTED_MODULE_18__.GraphEmpty, {});
    }
    const columns = getColumns(panel.styles);
    // Sort the data.
    const sort = (row)=>{
        const { pattern, type } = columns[sortBy.index];
        const val = row[pattern];
        if (type !== 'number') {
            return val;
        }
        if (lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](val)) {
            return Number.MIN_VALUE;
        }
        const num = Number(val);
        // Some columns styles claim to be numbers, but have string data. Still sort those as strings.
        return lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](num) ? num : val;
    };
    const sortedData = lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"](data, [
        sort
    ], [
        sortBy.direction
    ]);
    const visibleData = sortedData.slice((page - 1) * perPage, page * perPage);
    // Format the table rows.
    const rows = visibleData.map((values)=>{
        return columns.reduce((acc, { type, decimals = 2, pattern, unit = '' })=>{
            const value = values[pattern];
            switch(type){
                case 'number':
                    acc.push((0,_shared_components_format__WEBPACK_IMPORTED_MODULE_16__.formatNumber)(value, decimals, unit));
                    break;
                default:
                    acc.push(value || '-');
            }
            return acc;
        }, []);
    });
    const headers = columns.map(({ alias: title, className })=>({
            title,
            transforms: [
                _patternfly_react_table_dist_dynamic_components_Table_utils_decorators__WEBPACK_IMPORTED_MODULE_3__.sortable
            ],
            ...className ? {
                props: {
                    className
                }
            } : {}
        }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                style: {
                    overflowX: 'auto'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Table, {
                    "aria-label": t('query results table'),
                    gridBreakPoint: _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.TableGridBreakpoint.none,
                    variant: _patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.TableVariant.compact,
                    rows: rows.length,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Thead, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Tr, {
                                children: headers.map(({ title }, columnIndex)=>{
                                    const sortParams = {
                                        sort: {
                                            sortBy,
                                            onSort,
                                            columnIndex
                                        }
                                    };
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Th, {
                                        ...sortParams,
                                        children: title
                                    }, `title-${columnIndex}`);
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Tbody, {
                            children: rows.map((_, rowIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Tr, {
                                    children: headers.map((_, columnIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_table_dist_dynamic_components_Table__WEBPACK_IMPORTED_MODULE_2__.Td, {
                                            dataLabel: rows?.[rowIndex]?.[columnIndex] ?? '',
                                            className: "pf-v6-u-font-family-monospace",
                                            children: rows?.[rowIndex]?.[columnIndex]
                                        }, `cell-${rowIndex}-${columnIndex}`))
                                }, `row-${rowIndex}`))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_table_table_pagination__WEBPACK_IMPORTED_MODULE_17__.TablePagination, {
                itemCount: sortedData.length,
                page: page,
                perPage: perPage,
                setPage: setPage,
                setPerPage: setPerPage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ },

/***/ "./features/legacy-dashboards/components/time-dropdowns.tsx"
/*!******************************************************************!*\
  !*** ./features/legacy-dashboards/components/time-dropdowns.tsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PollIntervalDropdown: () => (/* binding */ PollIntervalDropdown),
/* harmony export */   TimespanDropdown: () => (/* binding */ TimespanDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/layouts/Stack */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/layouts/Stack/@patternfly/react-core/dist/dynamic/layouts/Stack");
/* harmony import */ var _patternfly_react_templates_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-templates/dist/dynamic/components/Select */ "webpack/sharing/consume/default/@patternfly/react-templates/dist/dynamic/components/Select/@patternfly/react-templates/dist/dynamic/components/Select");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/datetime/prometheus */ "./shared/console/console-shared/src/datetime/prometheus.ts");
/* harmony import */ var _shared_components_DropdownPollInterval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/DropdownPollInterval */ "./shared/components/DropdownPollInterval.tsx");
/* harmony import */ var _shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var _custom_time_range_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-time-range-modal */ "./features/legacy-dashboards/components/custom-time-range-modal.tsx");
/* harmony import */ var _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/constants/data-test */ "./shared/constants/data-test.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/utils */ "./features/legacy-dashboards/utils/utils.ts");














const CUSTOM_TIME_RANGE_KEY = 'CUSTOM_TIME_RANGE_KEY';
const DEFAULT_TIMERANGE = '30m';
const TimespanDropdown = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("plugin__monitoring-plugin");
    const [isModalOpen, , setModalOpen, setModalClosed] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_8__.useBoolean)(false);
    const [timeRange, setTimeRange] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_5__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_9__.QueryParams.TimeRange, _utils_utils__WEBPACK_IMPORTED_MODULE_12__.TimeRangeParam);
    const [endTime, setEndTime] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_5__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_9__.QueryParams.EndTime, use_query_params__WEBPACK_IMPORTED_MODULE_5__.NumberParam);
    const selectedKey = endTime ? CUSTOM_TIME_RANGE_KEY : (0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_6__.formatPrometheusDuration)(timeRange);
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((v)=>{
        if (v === CUSTOM_TIME_RANGE_KEY) {
            setModalOpen();
        } else {
            setTimeRange((0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_6__.parsePrometheusDuration)(v));
            setEndTime(undefined);
        }
    }, [
        setModalOpen,
        setTimeRange,
        setEndTime
    ]);
    const initialOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        const intervalOptions = [
            {
                content: t('Custom time range'),
                value: CUSTOM_TIME_RANGE_KEY
            },
            {
                content: t('Last {{count}} minute', {
                    count: 5
                }),
                value: '5m'
            },
            {
                content: t('Last {{count}} minute', {
                    count: 15
                }),
                value: '15m'
            },
            {
                content: t('Last {{count}} minute', {
                    count: 30
                }),
                value: '30m'
            },
            {
                content: t('Last {{count}} hour', {
                    count: 1
                }),
                value: '1h'
            },
            {
                content: t('Last {{count}} hour', {
                    count: 2
                }),
                value: '2h'
            },
            {
                content: t('Last {{count}} hour', {
                    count: 6
                }),
                value: '6h'
            },
            {
                content: t('Last {{count}} hour', {
                    count: 12
                }),
                value: '12h'
            },
            {
                content: t('Last {{count}} day', {
                    count: 1
                }),
                value: '1d'
            },
            {
                content: t('Last {{count}} day', {
                    count: 2
                }),
                value: '2d'
            },
            {
                content: t('Last {{count}} week', {
                    count: 1
                }),
                value: '1w'
            },
            {
                content: t('Last {{count}} week', {
                    count: 2
                }),
                value: '2w'
            }
        ];
        // If selectedKey is empty, the dashboard has changed. Reset selected to default value.
        if (selectedKey === '' || selectedKey === DEFAULT_TIMERANGE && !timeRange) {
            setTimeRange((0,_shared_console_console_shared_src_datetime_prometheus__WEBPACK_IMPORTED_MODULE_6__.parsePrometheusDuration)(DEFAULT_TIMERANGE));
            setEndTime(undefined);
        }
        return intervalOptions.map((o)=>({
                ...o,
                selected: o.value === selectedKey
            }));
    }, [
        selectedKey,
        t,
        timeRange,
        setTimeRange,
        setEndTime
    ]);
    const defaultTimerange = timeRange ?? undefined;
    let defaultEndTime = Number(endTime);
    if (Number.isNaN(defaultEndTime)) {
        defaultEndTime = undefined;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_custom_time_range_modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
                isOpen: isModalOpen,
                setClosed: setModalClosed,
                timespan: defaultTimerange,
                endTime: defaultEndTime
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_1__.StackItem, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                            htmlFor: "monitoring-time-range-dropdown",
                            children: t('Time range')
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_1__.StackItem, {
                        "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_11__.LegacyDashboardPageTestIDs.TimeRangeDropdown,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_templates_dist_dynamic_components_Select__WEBPACK_IMPORTED_MODULE_2__.SimpleSelect, {
                            id: "monitoring-time-range-dropdown",
                            initialOptions: initialOptions,
                            onSelect: (_event, selection)=>{
                                if (selection) {
                                    onChange(String(selection));
                                }
                            },
                            placeholder: t('Last {{count}} minute', {
                                count: 30
                            }),
                            "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_11__.LegacyDashboardPageTestIDs.TimeRangeDropdownOptions
                        })
                    })
                ]
            })
        ]
    });
};
const PollIntervalDropdown = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("plugin__monitoring-plugin");
    const [refreshInterval, setRefreshInterval] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_5__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_9__.QueryParams.RefreshInterval, _utils_utils__WEBPACK_IMPORTED_MODULE_12__.RefreshIntervalParam);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_1__.StackItem, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                    htmlFor: "refresh-interval-dropdown",
                    children: t('Refresh interval')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_layouts_Stack__WEBPACK_IMPORTED_MODULE_1__.StackItem, {
                "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_11__.LegacyDashboardPageTestIDs.PollIntervalDropdown,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components_DropdownPollInterval__WEBPACK_IMPORTED_MODULE_7__.DropDownPollInterval, {
                    id: "refresh-interval-dropdown",
                    setInterval: setRefreshInterval,
                    selectedInterval: refreshInterval,
                    "data-test": _shared_constants_data_test__WEBPACK_IMPORTED_MODULE_11__.LegacyDashboardPageTestIDs.PollIntervalDropdownOptions
                })
            })
        ]
    });
};


/***/ },

/***/ "./features/legacy-dashboards/hooks/useLegacyDashboards.ts"
/*!*****************************************************************!*\
  !*** ./features/legacy-dashboards/hooks/useLegacyDashboards.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLegacyDashboards: () => (/* binding */ useLegacyDashboards)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/forEach.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/cloneDeep.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/filter.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/find.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isNil.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/sortBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/toLower.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/values.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_store_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/store/actions */ "./shared/store/actions.ts");
/* harmony import */ var _shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/console/utils/safe-fetch-hook */ "./shared/console/utils/safe-fetch-hook.ts");
/* harmony import */ var _shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/hooks/useBoolean */ "./shared/hooks/useBoolean.ts");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/utils */ "./features/legacy-dashboards/utils/utils.ts");
/* harmony import */ var _useLegacyDashboardsProject__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useLegacyDashboardsProject */ "./features/legacy-dashboards/hooks/useLegacyDashboardsProject.ts");













const useLegacyDashboards = (urlBoard)=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)('plugin__monitoring-plugin');
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_18__.usePerspective)();
    const { project } = (0,_useLegacyDashboardsProject__WEBPACK_IMPORTED_MODULE_22__.useLegacyDashboardsProject)(urlBoard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const safeFetch = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((0,_shared_console_utils_safe_fetch_hook__WEBPACK_IMPORTED_MODULE_16__.useSafeFetch)(), []);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [unfilteredLegacyDashboards, setUnfilteredLegacyDashboards] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)([]);
    const [legacyDashboardsError, setLegacyDashboardsError] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)();
    const [legacyDashboardsLoading, , , setLegacyDashboardsLoaded] = (0,_shared_hooks_useBoolean__WEBPACK_IMPORTED_MODULE_17__.useBoolean)(true);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_14__.useNavigate)();
    const [queryParams] = (0,react_router__WEBPACK_IMPORTED_MODULE_14__.useSearchParams)();
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        safeFetch('/api/console/monitoring-dashboard-config').then((response)=>{
            setLegacyDashboardsLoaded();
            setLegacyDashboardsError(undefined);
            setUnfilteredLegacyDashboards(response.items);
        }).catch((err)=>{
            setLegacyDashboardsLoaded();
            if (err.name !== 'AbortError') {
                setLegacyDashboardsError(lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](err, 'json.error', err.message));
            }
        });
    }, [
        safeFetch,
        setLegacyDashboardsLoaded
    ]);
    // Move namespace filtering out of the fetch response call to avoid race conditions
    const legacyDashboards = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>{
        let items = unfilteredLegacyDashboards;
        if (project && project !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_20__.ALL_NAMESPACES_KEY) {
            items = lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](items, (item)=>item.metadata?.labels['console.openshift.io/odc-dashboard'] === 'true');
        }
        const getBoardData = (item)=>{
            try {
                return {
                    data: JSON.parse(lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"](item.data)[0]),
                    name: item.metadata.name
                };
            } catch  {
                setLegacyDashboardsError(t('Could not parse JSON data for dashboard "{{dashboard}}"', {
                    dashboard: item.metadata.name
                }));
                return {
                    data: undefined,
                    name: item?.metadata?.name
                };
            }
        };
        return lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](items, getBoardData), (v)=>lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"](v?.data?.title));
    }, [
        project,
        unfilteredLegacyDashboards,
        setLegacyDashboardsError,
        t
    ]);
    const legacyRows = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>{
        const data = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](legacyDashboards, {
            name: urlBoard
        })?.data;
        return data?.rows?.length ? data.rows : data?.panels?.reduce((acc, panel)=>{
            if (panel.type === 'row') {
                acc.push(lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](panel));
            } else if (acc.length === 0) {
                acc.push({
                    panels: [
                        panel
                    ]
                });
            } else {
                const row = acc[acc.length - 1];
                if (lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"](row.panels)) {
                    row.panels = [];
                }
                row.panels.push(panel);
            }
            return acc;
        }, []) ?? [];
    }, [
        urlBoard,
        legacyDashboards
    ]);
    // Homogenize data needed for dashboards dropdown between legacy and perses dashboards
    // to enable both to use the same component
    const legacyDashboardsMetadata = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>{
        if (legacyDashboardsLoading) {
            return [];
        }
        return legacyDashboards.map((legacyDashboard)=>{
            return {
                name: legacyDashboard.name,
                tags: legacyDashboard.data?.tags,
                title: legacyDashboard.data?.title ?? legacyDashboard.name
            };
        });
    }, [
        legacyDashboards,
        legacyDashboardsLoading
    ]);
    const changeLegacyDashboard = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(({ newBoard, newProject })=>{
        const dashboardProject = newProject ? newProject : project;
        // If no new dashboard is specified use the current dashboard name unless
        // the project is changing to "All Namespaces"
        let dashboardName = newBoard;
        if (!newBoard && newProject === _shared_utils_utils__WEBPACK_IMPORTED_MODULE_20__.ALL_NAMESPACES_KEY) {
            dashboardName = undefined;
        } else if (!newBoard) {
            dashboardName = urlBoard;
        }
        const url = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_18__.getLegacyDashboardsUrl)(perspective, dashboardName, dashboardProject);
        const params = new URLSearchParams();
        if (perspective === 'dev') {
            params.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_19__.QueryParams.Dashboard, queryParams.get(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_19__.QueryParams.Dashboard));
            if (!params.has(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_19__.QueryParams.Dashboard) || params.get(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_19__.QueryParams.Dashboard) !== dashboardName) {
                params.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_19__.QueryParams.Dashboard, dashboardName);
            }
        } else {
            if (params.get(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_19__.QueryParams.OpenshiftProject) !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_20__.ALL_NAMESPACES_KEY) {
                params.delete(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_19__.QueryParams.Namespace);
            }
            params.set(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_19__.QueryParams.OpenshiftProject, dashboardProject);
        }
        const srt = `${url}?${params.toString()}`;
        navigate(srt, {
            replace: true
        });
        dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_15__.dashboardsPatchAllVariables)(dashboardName, getAllVariables(params, legacyDashboards, dashboardProject, dashboardName)));
    }, [
        perspective,
        urlBoard,
        dispatch,
        navigate,
        project,
        queryParams,
        legacyDashboards
    ]);
    const previousProject = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(project);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        let replacementBoard = urlBoard;
        if (!urlBoard || !legacyDashboards.some((legacyBoard)=>legacyBoard.name === urlBoard) && !lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](legacyDashboards)) {
            replacementBoard = legacyDashboards?.[0]?.name;
        }
        if (urlBoard !== replacementBoard || project !== previousProject.current) {
            previousProject.current = project;
            changeLegacyDashboard({
                newBoard: replacementBoard,
                newProject: project
            });
        }
    }, [
        legacyDashboards,
        changeLegacyDashboard,
        urlBoard,
        project
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        if (lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"](legacyDashboards)) {
            return;
        }
        const currentBoard = urlBoard || legacyDashboards?.[0]?.name;
        if (currentBoard) {
            dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_15__.dashboardsPatchAllVariables)(currentBoard, getAllVariables(queryParams, legacyDashboards, project, currentBoard)));
        }
    }, [
        project,
        legacyDashboards,
        urlBoard,
        dispatch,
        queryParams
    ]);
    return {
        legacyDashboards,
        legacyDashboardsLoading,
        legacyDashboardsError,
        legacyRows,
        legacyDashboardsMetadata,
        changeLegacyDashboard,
        legacyDashboard: urlBoard
    };
};
const getAllVariables = (params, boards, namespace, newBoardName)=>{
    const data = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](boards, {
        name: newBoardName
    })?.data;
    const allVariables = {};
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](data?.templating?.list, (v)=>{
        if (v.type === 'query' || v.type === 'interval') {
            // Look for query param that is equal to the variable name
            let value = params.get(v.name);
            // Look for an option that should be selected by default
            if (value === null) {
                value = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](v.options, {
                    selected: true
                })?.value;
            }
            // If no default option was found, default to "All" (if present)
            if (value === undefined && v.includeAll) {
                value = _utils_utils__WEBPACK_IMPORTED_MODULE_21__.MONITORING_DASHBOARDS_VARIABLE_ALL_OPTION_KEY;
            }
            allVariables[v.name] = {
                datasource: v.datasource,
                includeAll: !!v.includeAll,
                isHidden: v.name === 'namespace' && namespace !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_20__.ALL_NAMESPACES_KEY ? true : v.hide !== 0,
                isLoading: v.name === 'namespace' ? false : v.type === 'query',
                options: lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"](v.options, 'value'),
                query: v.type === 'query' ? v.query : undefined,
                value: v.name === 'namespace' && namespace !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_20__.ALL_NAMESPACES_KEY ? namespace : value || v.options?.[0]?.value
            };
        }
    });
    return allVariables;
};


/***/ },

/***/ "./features/legacy-dashboards/hooks/useLegacyDashboardsProject.ts"
/*!************************************************************************!*\
  !*** ./features/legacy-dashboards/hooks/useLegacyDashboardsProject.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLegacyDashboardsProject: () => (/* binding */ useLegacyDashboardsProject)
/* harmony export */ });
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/store/actions */ "./shared/store/actions.ts");









const useLegacyDashboardsProject = (dashboardName)=>{
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_5__.usePerspective)();
    const [activeNamespace, setActiveNamespace] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_0__.useActiveNamespace)();
    const { ns: routeNamespace } = (0,react_router__WEBPACK_IMPORTED_MODULE_7__.useParams)();
    const [openshiftProject, setOpenshiftProject] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_2__.QueryParams.OpenshiftProject, use_query_params__WEBPACK_IMPORTED_MODULE_3__.StringParam);
    const { plugin } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_6__.useMonitoring)();
    const variableNamespace = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>dashboardName ? (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_5__.getObserveState)(plugin, state).dashboards.legacy[dashboardName]?.variables['namespace']?.value ?? '' : '');
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (perspective !== 'dev') {
            if (!openshiftProject) {
                setOpenshiftProject(activeNamespace);
            }
        } else {
            if (dashboardName && variableNamespace && variableNamespace !== routeNamespace) {
                dispatch((0,_shared_store_actions__WEBPACK_IMPORTED_MODULE_8__.dashboardsPatchVariable)(dashboardName, 'namespace', {
                    // Dashboards space variable shouldn't use the ALL_NAMESPACES_KEY
                    value: routeNamespace
                }));
            }
        }
    }, [
        activeNamespace,
        setActiveNamespace,
        openshiftProject,
        setOpenshiftProject,
        dispatch,
        variableNamespace,
        perspective,
        routeNamespace,
        dashboardName
    ]);
    return {
        project: perspective === 'dev' ? routeNamespace || activeNamespace : openshiftProject
    };
};


/***/ },

/***/ "./features/legacy-dashboards/pages/legacy-dashboard-page.tsx"
/*!********************************************************************!*\
  !*** ./features/legacy-dashboards/pages/legacy-dashboard-page.tsx ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MpCmoLegacyDashboardsPage: () => (/* binding */ MpCmoLegacyDashboardsPage),
/* harmony export */   MpCmoLegacyDevDashboardsPage: () => (/* binding */ MpCmoLegacyDevDashboardsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/loading/LoadingInline */ "./shared/console/console-shared/src/components/loading/LoadingInline.tsx");
/* harmony import */ var _shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/console/console-shared/error/fallbacks/withFallback */ "./shared/console/console-shared/error/fallbacks/withFallback.tsx");
/* harmony import */ var _shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _components_legacy_dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/legacy-dashboard */ "./features/legacy-dashboards/components/legacy-dashboard.tsx");
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/error */ "./features/legacy-dashboards/components/error.tsx");
/* harmony import */ var _components_dashboard_skeleton_legacy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/dashboard-skeleton-legacy */ "./features/legacy-dashboards/components/dashboard-skeleton-legacy.tsx");
/* harmony import */ var _hooks_useLegacyDashboards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useLegacyDashboards */ "./features/legacy-dashboards/hooks/useLegacyDashboards.ts");
/* harmony import */ var _shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/contexts/MonitoringContext */ "./shared/contexts/MonitoringContext.tsx");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! use-query-params */ "../node_modules/use-query-params/dist/index.js");
/* harmony import */ var _shared_constants_query_params__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/constants/query-params */ "./shared/constants/query-params.ts");















const LegacyDashboardsPage_ = ({ urlBoard })=>{
    const { legacyDashboardsError, legacyRows, legacyDashboardsLoading, legacyDashboardsMetadata, changeLegacyDashboard, legacyDashboard } = (0,_hooks_useLegacyDashboards__WEBPACK_IMPORTED_MODULE_10__.useLegacyDashboards)(urlBoard);
    const { perspective } = (0,_shared_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_6__.usePerspective)();
    const { displayNamespaceSelector } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_12__.useMonitoring)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            displayNamespaceSelector && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.NamespaceBar, {
                onNamespaceChange: (ns)=>{
                    changeLegacyDashboard({
                        newProject: ns
                    });
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_dashboard_skeleton_legacy__WEBPACK_IMPORTED_MODULE_9__.DashboardSkeletonLegacy, {
                boardItems: legacyDashboardsMetadata,
                changeBoard: changeLegacyDashboard,
                dashboardName: legacyDashboard,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.Overview, {
                    children: legacyDashboardsLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_loading_LoadingInline__WEBPACK_IMPORTED_MODULE_4__.LoadingInline, {}) : legacyDashboardsError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_error__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        error: {
                            message: legacyDashboardsError,
                            name: t('Error Loading Dashboards')
                        }
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_legacy_dashboard__WEBPACK_IMPORTED_MODULE_7__.LegacyDashboard, {
                        rows: legacyRows,
                        perspective: perspective,
                        dashboardName: legacyDashboard
                    })
                })
            })
        ]
    });
};
const LegacyDashboardsPageWithFallback = (0,_shared_console_console_shared_error_fallbacks_withFallback__WEBPACK_IMPORTED_MODULE_5__["default"])(LegacyDashboardsPage_);
const MpCmoLegacyDashboardsPage = ()=>{
    const params = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useParams)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_11__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-plugin',
            prometheus: 'cmo'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LegacyDashboardsPageWithFallback, {
            urlBoard: params?.dashboardName
        })
    });
};
// Small wrapper to be able to use the query params provided by the monitoring provider
const DashboardQueryWrapper = ()=>{
    const [dashboard] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_13__.useQueryParam)(_shared_constants_query_params__WEBPACK_IMPORTED_MODULE_14__.QueryParams.Dashboard, use_query_params__WEBPACK_IMPORTED_MODULE_13__.StringParam);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LegacyDashboardsPageWithFallback, {
        urlBoard: dashboard
    });
};
const MpCmoLegacyDevDashboardsPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_11__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-plugin',
            prometheus: 'cmo',
            displayNamespaceSelector: false
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardQueryWrapper, {})
    });
};


/***/ },

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

/***/ "./features/legacy-dashboards/utils/variable-utils.ts"
/*!************************************************************!*\
  !*** ./features/legacy-dashboards/utils/variable-utils.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateVariableTemplate: () => (/* binding */ evaluateVariableTemplate),
/* harmony export */   isIntervalVariable: () => (/* binding */ isIntervalVariable)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/forEach.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/escapeRegExp.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/some.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./features/legacy-dashboards/utils/utils.ts");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");



const intervalVariableRegExps = [
    '__interval',
    '__rate_interval',
    '__auto_interval_[a-z]+'
];
const isIntervalVariable = (itemKey)=>lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](intervalVariableRegExps, (re)=>itemKey?.match(new RegExp(`\\$${re}(?![a-zA-Z0-9_])`, 'g')));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
/*
 * Escapes a variable value if it is in a regex context (i.e., after =~ or !~ operators).
 * Backslashes are doubled because PromQL parses string literals using Go-style escape rules
 * before passing the result to RE2. A single \[ is not a valid Go escape and causes a parse
 * error; \\[ is parsed by Go as literal \ then [, giving RE2 the pattern \[ which matches
 * a literal bracket.
 */ const escapeIfRegexContext = (template, position, value)=>{
    const prefix = template.substring(0, position);
    if (/[!=]~"[^"]*$/.test(prefix)) {
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"](value).replace(/\\/g, '\\\\');
    }
    return value;
};
const evaluateVariableTemplate = (template, variables, timespan, namespace)=>{
    if (lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](template)) {
        return undefined;
    }
    const allVariables = {
        ...variables,
        __range: {
            value: `${Math.floor(timespan / 1000)}s`
        },
        __range_ms: {
            value: `${timespan}`
        },
        __range_s: {
            value: `${Math.floor(timespan / 1000)}`
        }
    };
    // Handle the special "interval" variables
    const intervalMS = timespan / _utils__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GRAPH_SAMPLES;
    const intervalMinutes = Math.floor(intervalMS / 1000 / 60);
    // Use a minimum of 5m to make sure we have enough data to perform `irate` calculations, which
    // require 2 data points each. Otherwise, there could be gaps in the graph.
    const interval = {
        value: `${Math.max(intervalMinutes, 5)}m`
    };
    // Add these last to ensure they are applied after other variable substitutions (because the other
    // variable substitutions may result in interval variables like $__interval being inserted)
    intervalVariableRegExps.forEach((k)=>allVariables[k] = interval);
    let result = template;
    lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](allVariables, (v, k)=>{
        const re = new RegExp(`\\$${k}(?![a-zA-Z0-9_])`, 'g');
        if (result.match(re)) {
            if (v.isLoading) {
                result = undefined;
                return false;
            }
            const isAllOption = v.value === _utils__WEBPACK_IMPORTED_MODULE_4__.MONITORING_DASHBOARDS_VARIABLE_ALL_OPTION_KEY;
            let replacement = isAllOption ? '.+' : v.value || '';
            if (k === 'namespace' && namespace !== _shared_utils_utils__WEBPACK_IMPORTED_MODULE_5__.ALL_NAMESPACES_KEY) {
                replacement = namespace;
            }
            if (isAllOption) {
                result = result.replace(re, replacement);
            } else {
                result = result.replace(re, (_match, offset)=>escapeIfRegexContext(result, offset, replacement));
            }
        }
    });
    return result;
};


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

/***/ "./shared/console/graphs/bar.tsx"
/*!***************************************!*\
  !*** ./shared/console/graphs/bar.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bar: () => (/* binding */ Bar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartBar/ChartBar.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartLabel/ChartLabel.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartTheme/ChartThemeColor.js");
/* harmony import */ var _patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-charts/victory */ "../node_modules/@patternfly/react-charts/dist/esm/victory/components/ChartUtils/chart-theme.js");
/* harmony import */ var _utils_ref_width_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ref-width-hook */ "./shared/console/utils/ref-width-hook.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./shared/console/graphs/helpers.ts");
/* harmony import */ var _graph_empty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graph-empty */ "./shared/console/graphs/graph-empty.tsx");
/* harmony import */ var _utils_units__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/units */ "./shared/console/utils/units.ts");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _openshift_console_dynamic_plugin_sdk_lib_api_common_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk/lib/api/common-types */ "../node_modules/@openshift-console/dynamic-plugin-sdk/lib/api/common-types.js");
/* harmony import */ var _promethues_graph__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./promethues-graph */ "./shared/console/graphs/promethues-graph.tsx");










const DEFAULT_BAR_WIDTH = 10;
const PADDING_RATIO = 1 / 3;
const barTheme = {
    bar: {
        style: {
            labels: {
                textAnchor: 'end'
            }
        }
    },
    dependentAxis: {
        style: {
            axis: {
                stroke: 'none'
            },
            tickLabels: {
                fill: 'none'
            }
        }
    },
    independentAxis: {
        style: {
            axis: {
                stroke: 'none'
            },
            tickLabels: {
                textAnchor: 'start'
            }
        }
    }
};
const Label = ({ metric })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Object.values(metric).join()
    });
const BarChart = ({ barSpacing = 15, barWidth = DEFAULT_BAR_WIDTH, data = [], loading = false, noLink = false, query, theme = (0,_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_5__.getCustomTheme)(_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_4__.ChartThemeColor.blue, barTheme), title, titleClassName })=>{
    const [containerRef, width] = (0,_utils_ref_width_hook__WEBPACK_IMPORTED_MODULE_6__.useRefWidth)();
    // Max space that horizontal padding should take up.
    // By default, 2/3 of the horizontal space is always available for the actual bar graph.
    const maxHorizontalPadding = PADDING_RATIO * width;
    const padding = {
        bottom: barSpacing,
        left: 0,
        right: Math.min(100, maxHorizontalPadding),
        top: 0
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_promethues_graph__WEBPACK_IMPORTED_MODULE_12__.PrometheusGraph, {
        ref: containerRef,
        title: title,
        className: titleClassName || 'graph-wrapper graph-wrapper__horizontal-bar',
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_promethues_graph__WEBPACK_IMPORTED_MODULE_12__.PrometheusGraphLink, {
            query: noLink ? undefined : query,
            children: data.length ? data.map((datum, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "graph-bar__label",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Label, {
                                title: datum.x,
                                metric: datum.metric
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "graph-bar__chart",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_2__.ChartBar, {
                                barWidth: barWidth,
                                data: [
                                    datum
                                ],
                                horizontal: true,
                                labelComponent: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_charts_victory__WEBPACK_IMPORTED_MODULE_3__.ChartLabel, {
                                    x: width,
                                    textAnchor: theme.bar?.style?.labels?.textAnchor
                                }),
                                theme: theme,
                                height: barWidth + padding.bottom,
                                width: width,
                                domain: {
                                    y: [
                                        0,
                                        data[0].y
                                    ]
                                },
                                padding: padding
                            })
                        })
                    ]
                }, index)) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_graph_empty__WEBPACK_IMPORTED_MODULE_8__.GraphEmpty, {
                loading: loading
            })
        })
    });
};
const Bar = ({ barSpacing, barWidth, delay = undefined, humanize = _utils_units__WEBPACK_IMPORTED_MODULE_9__.humanizeNumber, LabelComponent, metric, namespace, noLink = false, query, theme, title, customDataSource })=>{
    const [response, completed] = (0,_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_10__.usePrometheusPoll)({
        delay,
        endpoint: _openshift_console_dynamic_plugin_sdk_lib_api_common_types__WEBPACK_IMPORTED_MODULE_11__.PrometheusEndpoint.QUERY,
        namespace,
        query,
        customDataSource
    });
    const data = (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.getInstantVectorStats)(response, metric, humanize);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BarChart, {
        barSpacing: barSpacing,
        barWidth: barWidth,
        data: data,
        LabelComponent: LabelComponent,
        loading: !completed,
        noLink: noLink,
        query: query,
        theme: theme,
        title: title
    });
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any
 // TODO figure out the best way to import VictoryThemeDefinition
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 // TODO figure out the best way to import VictoryThemeDefinition


/***/ },

/***/ "./shared/console/graphs/helpers.ts"
/*!******************************************!*\
  !*** ./shared/console/graphs/helpers.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInstantVectorStats: () => (/* binding */ getInstantVectorStats)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/get.js");

const getInstantVectorStats = (response, metric, humanize)=>{
    const results = lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](response, 'data.result', []);
    return results.map((r)=>{
        const y = parseFloat(lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](r, 'value[1]'));
        return {
            label: humanize ? humanize(y).string : null,
            x: lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"](r, [
                'metric',
                metric
            ], ''),
            y,
            metric: r.metric
        };
    });
};


/***/ },

/***/ "./shared/console/graphs/promethues-graph.tsx"
/*!****************************************************!*\
  !*** ./shared/console/graphs/promethues-graph.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrometheusGraph: () => (/* binding */ PrometheusGraph),
/* harmony export */   PrometheusGraphLink: () => (/* binding */ PrometheusGraphLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/castArray.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/compact.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Title */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Title/@patternfly/react-core/dist/dynamic/components/Title");
/* harmony import */ var _hooks_usePerspective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/usePerspective */ "./shared/hooks/usePerspective.tsx");
/* harmony import */ var _hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useMonitoringNamespace */ "./shared/hooks/useMonitoringNamespace.ts");









const getActiveNamespace = ({ UI })=>UI.get('activeNamespace');
const mapStateToProps = (state)=>({
        canAccessMonitoring: !!state['FLAGS'].get({
            resource: 'namespaces',
            verb: 'get'
        }) && !!window.SERVER_FLAGS.prometheusBaseURL,
        namespace: getActiveNamespace(state)
    });
const PrometheusGraphLink_ = ({ children, query, ariaChartLinkLabel })=>{
    const { perspective } = (0,_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_8__.usePerspective)();
    const { namespace } = (0,_hooks_useMonitoringNamespace__WEBPACK_IMPORTED_MODULE_9__.useMonitoringNamespace)();
    const queries = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](query));
    if (!queries.length) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        });
    }
    const params = new URLSearchParams();
    queries.forEach((q, index)=>params.set(`query${index}`, q));
    const url = (0,_hooks_usePerspective__WEBPACK_IMPORTED_MODULE_8__.getMutlipleQueryBrowserUrl)(perspective, params, namespace);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_6__.Link, {
        to: url,
        "aria-label": ariaChartLinkLabel,
        style: {
            color: 'inherit',
            textDecoration: 'none'
        },
        children: children
    });
};
const PrometheusGraphLink = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps)(PrometheusGraphLink_);
const PrometheusGraph = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(({ children, className, title }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('graph-wrapper graph-wrapper__horizontal-bar', className),
        children: [
            title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Title__WEBPACK_IMPORTED_MODULE_7__.Title, {
                headingLevel: "h5",
                className: "graph-title",
                children: title
            }),
            children
        ]
    }));
PrometheusGraph.displayName = 'PrometheusGraph';


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

/***/ "./shared/hooks/useIsVisible.ts"
/*!**************************************!*\
  !*** ./shared/hooks/useIsVisible.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsVisible: () => (/* binding */ useIsVisible)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIsVisible = (ref)=>{
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [wasEverVisible, setWasEverVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const callback = ([entry])=>{
            setIsVisible(entry.isIntersecting);
            if (entry.isIntersecting) {
                setWasEverVisible(true);
            }
        };
        const observer = new IntersectionObserver(callback);
        if (ref?.current) {
            observer.observe(ref.current);
        }
        return ()=>observer.disconnect();
    }, [
        ref,
        setIsVisible,
        setWasEverVisible
    ]);
    return [
        isVisible,
        wasEverVisible
    ];
};


/***/ }

}]);
//# sourceMappingURL=exposed-LegacyDashboardsPage-chunk.js.map