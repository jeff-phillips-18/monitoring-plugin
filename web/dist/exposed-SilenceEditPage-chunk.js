"use strict";
(self["webpackChunkmonitoring_plugin"] = self["webpackChunkmonitoring_plugin"] || []).push([["exposed-SilenceEditPage"],{

/***/ "./features/alerts/pages/SilenceEditPage.tsx"
/*!***************************************************!*\
  !*** ./features/alerts/pages/SilenceEditPage.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   McpAcmSilenceEditPage: () => (/* binding */ McpAcmSilenceEditPage),
/* harmony export */   MpCmoSilenceEditPage: () => (/* binding */ MpCmoSilenceEditPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openshift-console/dynamic-plugin-sdk */ "webpack/sharing/consume/default/@openshift-console/dynamic-plugin-sdk");
/* harmony import */ var _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/dynamic/components/Alert */ "webpack/sharing/consume/default/@patternfly/react-core/dist/dynamic/components/Alert/@patternfly/react-core/dist/dynamic/components/Alert");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/find.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/pick.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "webpack/sharing/consume/default/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_console_console_shared_src_components_status_StatusBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/console/console-shared/src/components/status/StatusBox */ "./shared/console/console-shared/src/components/status/StatusBox.tsx");
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utils/utils */ "./shared/utils/utils.ts");
/* harmony import */ var _components_SilenceForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SilenceForm */ "./features/alerts/components/SilenceForm.tsx");
/* harmony import */ var _shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/contexts/MonitoringContext */ "./shared/contexts/MonitoringContext.tsx");
/* harmony import */ var _shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/hooks/useAlerts */ "./shared/hooks/useAlerts.ts");
/* harmony import */ var _shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/hooks/useMonitoring */ "./shared/hooks/useMonitoring.ts");












const pad = (i)=>i < 10 ? `0${i}` : String(i);
const formatDate = (d)=>`${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
const EditInfo = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)("plugin__monitoring-plugin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_dynamic_components_Alert__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        isInline: true,
        title: t('Overwriting current silence'),
        variant: "info",
        children: t('When changes are saved, the currently existing silence will be expired and a new silence with the new configuration will take its place.')
    });
};
const SilenceEditPage = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)("plugin__monitoring-plugin");
    const { accessCheckLoading, useAlertsTenancy } = (0,_shared_hooks_useMonitoring__WEBPACK_IMPORTED_MODULE_12__.useMonitoring)();
    const params = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useParams)();
    const { silences } = (0,_shared_hooks_useAlerts__WEBPACK_IMPORTED_MODULE_11__.useAlerts)();
    const silence = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](silences?.data, {
        id: params.id
    });
    const isExpired = (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__.silenceState)(silence) === _openshift_console_dynamic_plugin_sdk__WEBPACK_IMPORTED_MODULE_1__.SilenceStates.Expired;
    const defaults = lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](silence, [
        'comment',
        'createdBy',
        'endsAt',
        'id',
        'matchers',
        'startsAt'
    ]);
    defaults.startsAt = isExpired ? undefined : formatDate(new Date(defaults.startsAt));
    defaults.endsAt = isExpired ? undefined : formatDate(new Date(defaults.endsAt));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_console_console_shared_src_components_status_StatusBox__WEBPACK_IMPORTED_MODULE_7__.StatusBox, {
        data: silence,
        label: _shared_utils_utils__WEBPACK_IMPORTED_MODULE_8__.SilenceResource.label,
        loaded: silences?.loaded && !accessCheckLoading,
        loadError: silences?.loadError,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SilenceForm__WEBPACK_IMPORTED_MODULE_9__.SilenceForm, {
            defaults: defaults,
            Info: isExpired ? undefined : EditInfo,
            title: isExpired ? t('Recreate silence') : t('Edit silence'),
            isNamespaced: useAlertsTenancy
        })
    });
};
const MpCmoSilenceEditPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_10__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-plugin',
            prometheus: 'cmo'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SilenceEditPage, {})
    });
};
const McpAcmSilenceEditPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_contexts_MonitoringContext__WEBPACK_IMPORTED_MODULE_10__.MonitoringProvider, {
        monitoringContext: {
            plugin: 'monitoring-console-plugin',
            prometheus: 'acm'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SilenceEditPage, {})
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

/***/ "./shared/console/imgs/restricted-sign.svg"
/*!*************************************************!*\
  !*** ./shared/console/imgs/restricted-sign.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/restricted-sign..svg";

/***/ }

}]);
//# sourceMappingURL=exposed-SilenceEditPage-chunk.js.map